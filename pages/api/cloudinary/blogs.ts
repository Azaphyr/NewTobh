import type { NextApiRequest, NextApiResponse } from 'next';
import { listImagesInFolder } from '@/lib/services/cloudinaryService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  try {
    const images = await listImagesInFolder('Blogs', 100); // Change 'Blogs' if your folder is named differently
    const result = images.map((img: any) => ({
      url: img.secure_url,
      public_id: img.public_id,
      width: img.width,
      height: img.height,
      format: img.format,
    }));
    res.status(200).json({ images: result });
  } catch (error) {
    console.error('Cloudinary Blogs API error:', error);
    res.status(500).json({ error: 'Failed to fetch images from Cloudinary' });
  }
} 