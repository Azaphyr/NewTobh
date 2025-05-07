import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { uploadImageToFolder, listImagesInFolder } from '@/lib/services/cloudinaryService';
import formidable, { File } from 'formidable';
import fs from 'fs';
import type { UploadApiResponse } from 'cloudinary';

// Disable Next.js default body parser for file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

// GET: List all blog posts
async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  try {
    const session = await getServerSession(req, res, authOptions);
    if (!session) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const searchParams = new URL(req.url!, `http://${req.headers.host}`).searchParams;
    const includeTranslations = searchParams.get('includeTranslations') === 'true';
    const languageCode = searchParams.get('languageCode') || 'en';
    const search = searchParams.get('search') || undefined;
    const path = new URL(req.url!, `http://${req.headers.host}`).pathname;

    let whereClause: any = {
      isArchived: path.includes('/archived')
    };

    // Add search functionality
    if (search) {
      whereClause.translations = {
        some: {
          OR: [
            { title: { contains: search, mode: 'insensitive' } },
            { description: { contains: search, mode: 'insensitive' } },
            { content: { contains: search, mode: 'insensitive' } },
          ],
        },
      };
    }

    const blogPosts = await prisma.blogPost.findMany({
      where: whereClause,
      orderBy: {
        publishedAt: 'desc',
      },
      include: {
        translations: includeTranslations,
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
      },
    });

    res.status(200).json(blogPosts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    res.status(500).json({ error: 'Failed to fetch blog posts' });
  }
}

// POST: Create a new blog post with image upload and deduplication
async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  try {
    const session = await getServerSession(req, res, authOptions);
    if (!session?.user?.id) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const form = formidable({ multiples: false });
    form.parse(req, async (err, fields, files) => {
      if (err) return res.status(400).json({ error: 'Error parsing form data' });

      // Extract fields and file
      const {
        slug,
        publishDate,
        categoryId,
        tags,
        isPublished,
        isFeatured,
        readTime,
        translations,
      } = fields;

      // Handle possible array values from formidable
      const getString = (val: any) => Array.isArray(val) ? val[0] : val;
      const getNumber = (val: any) => Number(getString(val));

      if (!slug || !translations || !files.image) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      // Check if slug is already in use
      const existingPost = await prisma.blogPost.findUnique({ where: { slug: getString(slug) } });
      if (existingPost) {
        return res.status(400).json({ error: 'Slug is already in use' });
      }

      // Deduplication: Check if image already exists in Cloudinary
      const imageFile = Array.isArray(files.image) ? files.image[0] : files.image as File;
      const filename = imageFile.originalFilename || getString(slug);
      const imagesInFolder = await listImagesInFolder('Blogs');
      const existingImage = imagesInFolder.find((img: any) => img.public_id === `Blogs/${filename.replace(/\.[^/.]+$/, '')}`);
      let imageUrl;
      if (existingImage) {
        imageUrl = existingImage.secure_url;
      } else {
        const fileBuffer = await fs.promises.readFile(imageFile.filepath);
        const uploadResult = await uploadImageToFolder(fileBuffer, filename, 'Blogs') as UploadApiResponse;
        imageUrl = uploadResult.secure_url;
      }

      // Create blog post with translations
      const blogPost = await prisma.blogPost.create({
        data: {
          slug: getString(slug),
          imageUrl,
          publishedAt: getString(isPublished) === 'true' ? new Date(getString(publishDate)) : null,
          authorId: session.user.id,
          categoryId: getString(categoryId),
          tags: tags ? JSON.parse(getString(tags)) : [],
          isPublished: getString(isPublished) === 'true',
          isFeatured: getString(isFeatured) === 'true',
          readTime: readTime ? getNumber(readTime) : null,
          translations: {
            create: JSON.parse(getString(translations)).map((t: any) => ({
              languageCode: t.languageCode,
              title: t.title,
              description: t.description,
              content: t.content,
              metaDescription: t.metaDescription,
              metaKeywords: t.metaKeywords,
            })),
          },
        },
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
        },
      });

      res.status(201).json(blogPost);
    });
  } catch (error) {
    console.error('Error creating blog post:', error);
    res.status(500).json({ error: 'Failed to create blog post' });
  }
}

// Main handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') return handleGet(req, res);
  if (req.method === 'POST') return handlePost(req, res);
  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
} 