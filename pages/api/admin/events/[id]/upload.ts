import { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import formidable from "formidable"
import { promises as fs } from "fs"
import { listImagesInFolder, uploadImageToFolder } from "@/lib/services/cloudinaryService"
import { UploadApiResponse } from "cloudinary"

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    const session = await getServerSession(req, res, authOptions)
    if (!session) {
      return res.status(401).json({ error: "Unauthorized" })
    }

    const { id } = req.query
    if (!id || typeof id !== "string") {
      return res.status(400).json({ error: "Invalid event ID" })
    }

    // Check if event exists
    const existingEvent = await prisma.event.findUnique({
      where: { id },
    })

    if (!existingEvent) {
      return res.status(404).json({ error: "Event not found" })
    }

    // Parse the multipart form data
    const form = formidable({})
    const [fields, files] = await form.parse(req)
    const imageFile = files.image?.[0]

    if (!imageFile) {
      return res.status(400).json({ error: "No image file provided" })
    }

    // Deduplication: Check if image already exists in Cloudinary
    const filename = imageFile.originalFilename || existingEvent.slug
    const imagesInFolder = await listImagesInFolder('Events')
    const existingImage = imagesInFolder.find((img: any) => img.public_id === `Events/${filename.replace(/\.[^/.]+$/, "")}`)
    
    let imageUrl = existingEvent.imageUrl
    if (existingImage) {
      imageUrl = existingImage.secure_url
    } else {
      const fileBuffer = await fs.readFile(imageFile.filepath)
      const uploadResult = await uploadImageToFolder(fileBuffer, filename, 'Events') as UploadApiResponse
      imageUrl = uploadResult.secure_url
    }

    // Update the event with the new image URL
    const updatedEvent = await prisma.event.update({
      where: { id },
      data: { imageUrl },
      include: {
        translations: true,
      },
    })

    return res.status(200).json(updatedEvent)
  } catch (error) {
    console.error("Error uploading event image:", error)
    return res.status(500).json({ error: "Failed to upload event image" })
  }
} 