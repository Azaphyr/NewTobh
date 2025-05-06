import type { NextApiRequest, NextApiResponse } from 'next';
import { listImagesInFolder } from '@/lib/services/cloudinaryService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('Cloudinary Events API called'); // Debug log
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  try {
    const images = await listImagesInFolder('Events', 100);
    // Return only relevant info (url, public_id, etc.)
    const result = images.map((img: any) => ({
      url: img.secure_url,
      public_id: img.public_id,
      width: img.width,
      height: img.height,
      format: img.format,
    }));
    res.status(200).json({ images: result });
  } catch (error) {
    console.error('Cloudinary Events API error:', error);
    res.status(500).json({ error: 'Failed to fetch images from Cloudinary' });
  }
} 