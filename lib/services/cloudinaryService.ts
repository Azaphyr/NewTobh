import cloudinary from '../cloudinary';
import { v2 as cloudinaryV2 } from 'cloudinary';
import { Readable } from 'stream';

export async function uploadImageToFolder(fileBuffer: Buffer, filename: string, folder: string) {
  // Convert buffer to stream and upload using cloudinary.uploader.upload_stream
  return await new Promise((resolve, reject) => {
    const uploadStream = cloudinaryV2.uploader.upload_stream(
      {
        folder,
        public_id: filename,
        resource_type: 'image',
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );
    Readable.from(fileBuffer).pipe(uploadStream);
  });
}

export async function listImagesInFolder(folder: string, maxResults = 30) {
  const result = await cloudinary.search
    .expression(`folder:${folder}/*`)
    .sort_by('public_id', 'desc')
    .max_results(maxResults)
    .execute();
  return result.resources;
}

export async function deleteImage(publicId: string) {
  return await cloudinary.uploader.destroy(publicId, { resource_type: 'image' });
}

export async function renameImage(publicId: string, newPublicId: string) {
  return await cloudinary.uploader.rename(publicId, newPublicId, { resource_type: 'image' });
}

export async function getImageDetails(publicId: string) {
  return await cloudinary.api.resource(publicId, { resource_type: 'image' });
}

export async function moveImage(publicId: string, targetFolder: string) {
  const newPublicId = `${targetFolder}/${publicId.split('/').pop()}`;
  return await cloudinary.uploader.rename(publicId, newPublicId, { resource_type: 'image' });
} 