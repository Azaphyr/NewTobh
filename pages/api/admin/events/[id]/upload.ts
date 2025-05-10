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
    filename: `event-${hash}`,
    fileBuffer,
  };
};

// Helper function to check if image exists in Cloudinary
const findExistingImage = async (
  filename: string
): Promise<{ url: string } | null> => {
  const imagesInFolder = await listImagesInFolder("Events");
  const existingImage = imagesInFolder.find(
    (img: any) => img.public_id === `Events/${filename}`
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
    "Events"
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
  logUpload("Processing Cloudinary URL", {
    originalUrl: url,
    isValid: true
  });
  return url;
};

// Helper function to fetch event with translations
const fetchEventWithTranslations = async (eventId: string) => {
  const event = await prisma.event.findUnique({
    where: { id: eventId },
    include: {
      translations: {
        include: {
          language: true
        }
      },
      createdBy: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });

  if (!event) return null;

  return {
    ...event,
    translations: event.translations.map(translation => ({
      id: translation.id,
      eventId: translation.eventId,
      languageCode: translation.languageCode,
      title: translation.title,
      description: translation.description,
      longDescription: translation.longDescription,
      requirements: translation.requirements,
      additionalInfo: translation.additionalInfo,
      instructorName: translation.instructorName,
      instructorBio: translation.instructorBio,
    }))
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
      logUpload("Invalid event ID", { id });
      return res.status(400).json({ error: "Invalid event ID" });
    }

    try {
      const form = formidable({
        maxFileSize: 5 * 1024 * 1024, // 5MB
        keepExtensions: true,
        filter: ({ mimetype }) => {
          return mimetype?.includes('image/') || false;
        }
      });
      const [fields, files] = await form.parse(req);
      const imageFile = files.image?.[0];
      const cloudinaryUrl = fields.cloudinaryUrl?.[0];

      logUpload("Processing image upload request", {
        eventId: id,
        hasLocalFile: !!imageFile,
        hasCloudinaryUrl: !!cloudinaryUrl,
        user: typedSession.user?.email,
        fileInfo: imageFile ? {
          name: imageFile.originalFilename,
          size: imageFile.size,
          type: imageFile.mimetype
        } : null
      });

      let finalImageUrl: string;

      // ===== STEP 1: Check if image is from Cloudinary =====
      if (cloudinaryUrl) {
        logUpload("Starting Cloudinary URL processing", {
          eventId: id,
          originalUrl: cloudinaryUrl,
          step: "cloudinary_url_start"
        });

        // Log the raw fields and files for debugging
        logUpload("Form data received", {
          eventId: id,
          fields: Object.keys(fields),
          files: Object.keys(files),
          cloudinaryUrl: cloudinaryUrl
        });

        try {
          logUpload("Validating Cloudinary URL", {
            eventId: id,
            url: cloudinaryUrl,
            step: "cloudinary_url_validation"
          });

          finalImageUrl = await processCloudinaryUrl(cloudinaryUrl);
          
          logUpload("Successfully processed Cloudinary URL", {
            eventId: id,
            originalUrl: cloudinaryUrl,
            finalUrl: finalImageUrl,
            step: "cloudinary_url_success"
          });

          // Log before database update
          logUpload("Preparing to update database with Cloudinary URL", {
            eventId: id,
            imageUrl: finalImageUrl,
            step: "pre_update"
          });

          // Update the event with the Cloudinary URL
          const updatedEvent = await prisma.event.update({
            where: { id },
            data: { 
              imageUrl: finalImageUrl,
              modifiedBy: typedSession.user?.name || null,
            }
          });

          logUpload("Successfully updated event with Cloudinary URL", {
            eventId: id,
            oldImageUrl: updatedEvent.imageUrl,
            newImageUrl: finalImageUrl,
            step: "update_success"
          });

          // Fetch updated event with translations
          const eventWithTranslations = await fetchEventWithTranslations(id);
          logUpload("Final event data", {
            eventId: id,
            imageUrl: eventWithTranslations?.imageUrl,
            hasTranslations: !!eventWithTranslations?.translations
          });
          return res.status(200).json(eventWithTranslations);

        } catch (error) {
          logUpload("Failed to process Cloudinary URL", {
            eventId: id,
            originalUrl: cloudinaryUrl,
            error: error instanceof Error ? error.message : 'Unknown error',
            step: "cloudinary_url_error"
          });
          return res.status(400).json({ error: "Invalid Cloudinary URL format" });
        }
      } else {
        logUpload("No Cloudinary URL provided, checking for local file", {
          eventId: id,
          step: "check_local_file"
        });
        // ===== STEP 2: Check if image is from local computer =====
        if (!imageFile) {
          logUpload("No image provided", { eventId: id });
          return res.status(400).json({ error: "No image provided" });
        }

        try {
          // Generate hash and filename
          const { filename, fileBuffer } = await generateImageHash(imageFile.filepath);
          logUpload("Generated image hash", { eventId: id, filename });

          // Check if image already exists in Cloudinary
          const existingImage = await findExistingImage(filename);
          if (existingImage) {
            logUpload("Using existing image from Cloudinary", {
              eventId: id,
              filename,
              url: existingImage.url
            });
            finalImageUrl = existingImage.url;
          } else {
            // Upload new image to Cloudinary
            logUpload("Uploading new image to Cloudinary", {
              eventId: id,
              filename
            });
            finalImageUrl = await uploadToCloudinary(fileBuffer, filename);
            logUpload("Successfully uploaded image to Cloudinary", {
              eventId: id,
              filename,
              url: finalImageUrl
            });
          }

          // Update event with new image URL
          const updatedEvent = await prisma.event.update({
            where: { id },
            data: {
              imageUrl: finalImageUrl,
              modifiedBy: typedSession.user?.name || null,
            }
          });

          logUpload("Successfully updated event with new image", {
            eventId: id,
            oldImageUrl: updatedEvent.imageUrl,
            newImageUrl: finalImageUrl
          });

          // Fetch and return updated event with translations
          const eventWithTranslations = await fetchEventWithTranslations(id);
          return res.status(200).json(eventWithTranslations);

        } catch (error) {
          logUpload("Error processing local file upload", {
            eventId: id,
            error: error instanceof Error ? error.message : 'Unknown error'
          });
          return res.status(500).json({ error: "Failed to process file upload" });
        }
      }
    } catch (error) {
      logUpload("Error in form processing", {
        eventId: id,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
      return res.status(500).json({ error: "Failed to process form data" });
    }
  } catch (error) {
    logUpload("Error in upload handler", {
      error: error instanceof Error ? error.message : 'Unknown error'
    });
    return res.status(500).json({ error: "Internal server error" });
  }
}
