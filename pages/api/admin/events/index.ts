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

// GET: List all events (with optional showArchived param)
async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  try {
    const showArchived = req.query.showArchived === 'true';
    const events = await prisma.event.findMany({
      where: showArchived ? { isArchived: true } : { isArchived: false },
      include: { translations: true },
      orderBy: { eventDate: 'asc' },
    });
    res.status(200).json({ events });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch events' });
  }
}

// POST: Create a new event with image upload and deduplication
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
        eventDate,
        eventEndDate,
        location,
        address,
        capacity,
        price,
        priceMembers,
        eventType,
        translations,
        language,
        modifiedBy,
        gameType,
      } = fields;

      // Handle possible array values from formidable
      const getString = (val: any) => Array.isArray(val) ? val[0] : val;
      const getNumber = (val: any) => Number(getString(val));

      if (!slug || !eventDate || !eventType || !translations || !files.image) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      // Check if slug is already in use
      const existingEvent = await prisma.event.findUnique({ where: { slug: getString(slug) } });
      if (existingEvent) {
        return res.status(400).json({ error: 'Slug is already in use' });
      }

      // Deduplication: Check if image already exists in Cloudinary
      const imageFile = Array.isArray(files.image) ? files.image[0] : files.image as File;
      const filename = imageFile.originalFilename || getString(slug);
      const imagesInFolder = await listImagesInFolder('Events');
      const existingImage = imagesInFolder.find((img: any) => img.public_id === `Events/${filename.replace(/\.[^/.]+$/, "")}`);
      let imageUrl;
      if (existingImage) {
        imageUrl = existingImage.secure_url;
      } else {
        const fileBuffer = await fs.promises.readFile(imageFile.filepath);
        const uploadResult = await uploadImageToFolder(fileBuffer, filename, 'Events') as UploadApiResponse;
        imageUrl = uploadResult.secure_url;
      }

      // Create event with translations
      const event = await prisma.event.create({
        data: {
          slug: getString(slug),
          imageUrl,
          eventDate: new Date(getString(eventDate)),
          eventEndDate: eventEndDate ? new Date(getString(eventEndDate)) : undefined,
          location: location ? getString(location) : undefined,
          address: address ? getString(address) : undefined,
          capacity: capacity ? getNumber(capacity) : undefined,
          spotsLeft: capacity ? getNumber(capacity) : undefined,
          price: price ? getNumber(price) : undefined,
          priceMembers: priceMembers ? getNumber(priceMembers) : undefined,
          eventType: getString(eventType),
          createdById: session.user.id,
          language: language ? getString(language) : undefined,
          modifiedBy: modifiedBy ? getString(modifiedBy) : undefined,
          gameType: gameType ? getString(gameType) : undefined,
          translations: {
            create: JSON.parse(getString(translations)).map((t: any) => ({
              languageCode: t.languageCode,
              title: t.title,
              description: t.description,
              longDescription: t.longDescription,
              requirements: t.requirements,
              additionalInfo: t.additionalInfo,
              instructorName: t.instructorName,
              instructorBio: t.instructorBio,
            })),
          },
        },
        include: { translations: true },
      });

      res.status(201).json(event);
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create event' });
  }
}

// Main handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') return handleGet(req, res);
  if (req.method === 'POST') return handlePost(req, res);
  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
} 