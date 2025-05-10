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

// GET: List all events
async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log('GET /api/admin/events - Request headers:', req.headers)
    console.log('GET /api/admin/events - Query params:', req.query)

    const session = await getServerSession(req, res, authOptions);
    console.log('Session:', session ? 'Authenticated' : 'Not authenticated')

    if (!session) {
      console.log('Unauthorized access attempt')
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const searchParams = new URL(req.url!, `http://${req.headers.host}`).searchParams;
    const includeTranslations = searchParams.get('includeTranslations') === 'true';
    const languageCode = searchParams.get('languageCode') || 'en';
    const search = searchParams.get('search') || undefined;
    const showArchived = searchParams.get('showArchived') === 'true';

    console.log('Search params:', {
      includeTranslations,
      languageCode,
      search,
      showArchived
    })

    let whereClause: any = {
      isArchived: showArchived,
    };

    if (search) {
      whereClause.translations = {
        some: {
          OR: [
            { title: { contains: search, mode: 'insensitive' } },
            { description: { contains: search, mode: 'insensitive' } },
            { longDescription: { contains: search, mode: 'insensitive' } },
            { requirements: { contains: search, mode: 'insensitive' } },
            { additionalInfo: { contains: search, mode: 'insensitive' } },
            { instructorName: { contains: search, mode: 'insensitive' } },
          ],
        },
      };
    }

    console.log('Prisma where clause:', whereClause)

    const events = await prisma.event.findMany({
      where: whereClause,
      orderBy: {
        eventDate: 'desc',
      },
      include: {
        translations: includeTranslations ? {
          where: languageCode ? { languageCode } : undefined,
        } : false,
        createdBy: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    console.log(`Found ${events.length} events`)
    res.status(200).json({ events });
  } catch (error) {
    console.error('Error in handleGet:', error);
    res.status(500).json({ 
      error: 'Failed to fetch events',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

// POST: Create a new event with image upload
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
        pricePremium,
        eventType,
        gameType,
        language,
        translations,
      } = fields;

      // Handle possible array values from formidable
      const getString = (val: any) => Array.isArray(val) ? val[0] : val;
      const getNumber = (val: any) => Number(getString(val));

      if (!slug || !translations) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      // Check if slug is already in use
      const existingEvent = await prisma.event.findUnique({ where: { slug: getString(slug) } });
      if (existingEvent) {
        return res.status(400).json({ error: 'Slug is already in use' });
      }

      // Handle image upload if present
      let imageUrl;
      if (files.image) {
        const imageFile = Array.isArray(files.image) ? files.image[0] : files.image as File;
        const filename = imageFile.originalFilename || getString(slug);
        
        // Check for existing image
        const imagesInFolder = await listImagesInFolder('Events');
        const existingImage = imagesInFolder.find((img: any) => img.public_id === `Events/${filename.replace(/\.[^/.]+$/, '')}`);
        
        if (existingImage) {
          imageUrl = existingImage.secure_url;
        } else {
          const fileBuffer = await fs.promises.readFile(imageFile.filepath);
          const uploadResult = await uploadImageToFolder(fileBuffer, filename, 'Events') as UploadApiResponse;
          imageUrl = uploadResult.secure_url;
        }
      }

      // Create event with translations
      const event = await prisma.event.create({
        data: {
          slug: getString(slug),
          imageUrl,
          eventDate: new Date(getString(eventDate)),
          eventEndDate: getString(eventEndDate) ? new Date(getString(eventEndDate)) : null,
          location: getString(location),
          address: getString(address),
          capacity: getNumber(capacity),
          spotsLeft: getNumber(capacity), // Initialize spotsLeft equal to capacity
          price: getNumber(price),
          priceMembers: getNumber(priceMembers),
          pricePremium: getNumber(pricePremium),
          eventType: getString(eventType),
          gameType: getString(gameType),
          language: getString(language),
          createdById: session.user.id,
          modifiedBy: session.user.id,
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
        include: {
          translations: true,
          createdBy: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      });

      res.status(201).json(event);
    });
  } catch (error) {
    console.error('Error creating event:', error);
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