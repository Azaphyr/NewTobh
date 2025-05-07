import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { uploadImageToFolder, listImagesInFolder } from '@/lib/services/cloudinaryService';
import formidable from 'formidable';
import { promises as fs } from 'fs';
import type { UploadApiResponse } from 'cloudinary';
import crypto from 'crypto';

// Disable Next.js default body parser for file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const session = await getServerSession(req, res, authOptions);
    if (!session) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { id } = req.query;
    if (!id || typeof id !== "string") {
      return res.status(400).json({ error: "Invalid blog post ID" });
    }

    // Handle file upload
    const form = formidable({});
    const [fields, files] = await form.parse(req);
    const imageFile = files.image?.[0];

    if (!imageFile) {
      return res.status(400).json({ error: "No image file provided" });
    }

    // Read file and generate hash
    const fileBuffer = await fs.readFile(imageFile.filepath);
    const fileHash = crypto.createHash('md5').update(fileBuffer).digest('hex');
    const filename = `blog-${id}-${fileHash}`;

    // Check for existing image in Cloudinary
    const imagesInFolder = await listImagesInFolder('Blogs');
    const existingImage = imagesInFolder.find((img: any) => img.public_id === `Blogs/${filename}`);

    let imageUrl;
    if (existingImage) {
      imageUrl = existingImage.secure_url;
    } else {
      // Upload to Cloudinary only if image doesn't exist
      const uploadResult = await uploadImageToFolder(fileBuffer, filename, 'Blogs') as UploadApiResponse;
      imageUrl = uploadResult.secure_url;
    }

    // Update the blog post with the new image URL
    const updatedPost = await prisma.blogPost.update({
      where: { id },
      data: { imageUrl },
      include: {
        translations: true,
        author: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        category: {
          select: {
            id: true,
            slug: true,
            nameEn: true,
            nameFr: true
          }
        }
      }
    });

    // Return the updated post with all its relations
    return res.status(200).json(updatedPost);
  } catch (error) {
    console.error("Error uploading blog post image:", error);
    return res.status(500).json({ error: "Failed to upload image" });
  }
} 