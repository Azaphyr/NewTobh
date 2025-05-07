import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import type { ExtendedSession } from "@/lib/auth";
import {
  uploadImageToFolder,
  listImagesInFolder,
} from "@/lib/services/cloudinaryService";
import formidable from "formidable";
import { promises as fs } from "fs";
import type { UploadApiResponse } from "cloudinary";
import crypto from "crypto";
import { logInfo, logError, logDebug, logWarn, logUpload } from "@/lib/logger";

// Disable Next.js default body parser for file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper function to generate MD5 hash and filename
const generateImageHash = async (
  filepath: string
): Promise<{ hash: string; filename: string; fileBuffer: Buffer }> => {
  const fileBuffer = await fs.readFile(filepath);
  const hash = crypto.createHash("md5").update(fileBuffer).digest("hex");
  return {
    hash,
    filename: `blog-${hash}`,
    fileBuffer,
  };
};

// Helper function to check if image exists in Cloudinary
const findExistingImage = async (
  filename: string
): Promise<{ url: string } | null> => {
  const imagesInFolder = await listImagesInFolder("Blogs");
  const existingImage = imagesInFolder.find(
    (img: any) => img.public_id === `Blogs/${filename}`
  );
  return existingImage ? { url: existingImage.secure_url } : null;
};

// Helper function to upload image to Cloudinary
const uploadToCloudinary = async (
  fileBuffer: Buffer,
  filename: string
): Promise<string> => {
  const uploadResult = (await uploadImageToFolder(
    fileBuffer,
    filename,
    "Blogs"
  )) as UploadApiResponse;
  return uploadResult.secure_url;
};

// Helper function to validate Cloudinary URL
const validateCloudinaryUrl = (url: string): boolean => {
  try {
    const cloudinaryUrl = new URL(url);
    return cloudinaryUrl.hostname.includes("cloudinary.com");
  } catch {
    return false;
  }
};

// Helper function to process Cloudinary URL
const processCloudinaryUrl = async (url: string): Promise<string> => {
  if (!validateCloudinaryUrl(url)) {
    throw new Error("Invalid Cloudinary URL format");
  }
  return url;
};

// Helper function to fetch blog post with categories
const fetchBlogPostWithCategories = async (postId: string) => {
  const post = await prisma.blogPost.findUnique({
    where: { id: postId },
    include: {
      translations: true,
      author: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });

  if (!post) return null;

  const mainCategory = post.mainCategoryId
    ? await prisma.category.findUnique({
        where: { id: post.mainCategoryId },
        select: {
          id: true,
          slug: true,
          nameEn: true,
          nameFr: true,
          createdAt: true,
          updatedAt: true,
        },
      })
    : null;

  const subCategories =
    post.subCategoryIds.length > 0
      ? await prisma.category.findMany({
          where: { id: { in: post.subCategoryIds } },
          select: {
            id: true,
            slug: true,
            nameEn: true,
            nameFr: true,
            createdAt: true,
            updatedAt: true,
          },
        })
      : [];

  return {
    ...post,
    mainCategory,
    subCategories,
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Initial request logging
  logUpload("Upload request received", {
    method: req.method,
    url: req.url,
    timestamp: new Date().toISOString()
  });

  if (req.method !== "POST") {
    logUpload("Method not allowed", { method: req.method });
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const session = await getServerSession(req, res, authOptions);
    if (!session) {
      logUpload("Unauthorized access attempt", { 
        method: req.method,
        path: req.url
      });
      return res.status(401).json({ error: "Unauthorized" });
    }

    const typedSession = session as ExtendedSession;
    const { id } = req.query;
    if (!id || typeof id !== "string") {
      logUpload("Invalid blog post ID", { id });
      return res.status(400).json({ error: "Invalid blog post ID" });
    }

    try {
      const form = formidable({});
      const [fields, files] = await form.parse(req);
      const imageFile = files.image?.[0];
      const cloudinaryUrl = fields.cloudinaryUrl?.[0];

      logUpload("Processing image upload request", {
        postId: id,
        hasLocalFile: !!imageFile,
        hasCloudinaryUrl: !!cloudinaryUrl,
        user: typedSession.user?.email
      });

      let finalImageUrl: string;

      // ===== STEP 1: Check if image is from Cloudinary =====
      if (cloudinaryUrl) {
        logUpload("Starting Cloudinary URL processing", {
          postId: id,
          originalUrl: cloudinaryUrl,
          step: "cloudinary_url_start"
        });

        // Log the raw fields and files for debugging
        logUpload("Form data received", {
          postId: id,
          fields: Object.keys(fields),
          files: Object.keys(files),
          cloudinaryUrl: cloudinaryUrl
        });

        try {
          logUpload("Validating Cloudinary URL", {
            postId: id,
            url: cloudinaryUrl,
            step: "cloudinary_url_validation"
          });

          finalImageUrl = await processCloudinaryUrl(cloudinaryUrl);
          
          logUpload("Successfully processed Cloudinary URL", {
            postId: id,
            originalUrl: cloudinaryUrl,
            finalUrl: finalImageUrl,
            step: "cloudinary_url_success"
          });

          // Log before database update
          logUpload("Preparing to update database with Cloudinary URL", {
            postId: id,
            imageUrl: finalImageUrl,
            step: "pre_update"
          });

          // Update the blog post with the Cloudinary URL
          const updatedPost = await prisma.blogPost.update({
            where: { id },
            data: { imageUrl: finalImageUrl }
          });

          logUpload("Successfully updated blog post with Cloudinary URL", {
            postId: id,
            imageUrl: finalImageUrl,
            step: "update_success"
          });

          return res.status(200).json(updatedPost);

        } catch (error) {
          logUpload("Failed to process Cloudinary URL", {
            postId: id,
            originalUrl: cloudinaryUrl,
            error: error instanceof Error ? error.message : 'Unknown error',
            step: "cloudinary_url_error"
          });
          return res.status(400).json({ error: "Invalid Cloudinary URL format" });
        }
      } else {
        logUpload("No Cloudinary URL provided, checking for local file", {
          postId: id,
          step: "check_local_file"
        });
        // ===== STEP 2: Check if image is from local computer =====
        if (!imageFile) {
          logUpload("No image provided", { postId: id });
          return res.status(400).json({ error: "No image provided" });
        }

        try {
          // ===== STEP 3: Apply MD5 hash =====
          logUpload("Starting MD5 hash generation", { postId: id });
          const { filename, fileBuffer } = await generateImageHash(imageFile.filepath);
          logUpload("Generated image hash", { postId: id, filename });

          // ===== STEP 4: Check if image exists in Cloudinary =====
          logUpload("Checking for existing image in Cloudinary", { postId: id, filename });
          const existingImage = await findExistingImage(filename);

          if (existingImage) {
            // ===== STEP 6: Use existing image URL =====
            finalImageUrl = existingImage.url;
            logUpload("Using existing image from Cloudinary", {
              postId: id,
              filename,
              url: finalImageUrl
            });
          } else {
            // ===== STEP 5: Upload to Cloudinary =====
            logUpload("Starting new image upload to Cloudinary", { postId: id, filename });
            finalImageUrl = await uploadToCloudinary(fileBuffer, filename);
            logUpload("Successfully uploaded new image to Cloudinary", {
              postId: id,
              filename,
              url: finalImageUrl
            });
          }
        } catch (error) {
          logUpload("Failed to process local image", {
            postId: id,
            error: error instanceof Error ? error.message : 'Unknown error'
          });
          throw error;
        }
      }

      // ===== STEP 7: Update the blog post =====
      try {
        logUpload("Starting blog post update", { postId: id, imageUrl: finalImageUrl });
        const updatedPost = await prisma.blogPost.update({
          where: { id },
          data: { imageUrl: finalImageUrl }
        });
        logUpload("Successfully updated blog post image", {
          postId: id,
          imageUrl: finalImageUrl
        });

        // Fetch updated post with categories
        const postWithCategories = await fetchBlogPostWithCategories(id);
        logUpload("Upload process completed successfully", {
          postId: id,
          imageUrl: finalImageUrl
        });
        return res.status(200).json(postWithCategories);
      } catch (error) {
        logUpload("Failed to update blog post", {
          postId: id,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
        throw error;
      }

    } catch (error) {
      logUpload("Error processing file upload", {
        postId: id,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
      return res.status(500).json({ error: "Failed to process file upload" });
    }
  } catch (error) {
    logUpload("Error in upload handler", {
      error: error instanceof Error ? error.message : 'Unknown error'
    });
    return res.status(500).json({ error: "Internal server error" });
  }
}
