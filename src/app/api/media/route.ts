import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/media - Get all media
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')

    const where: { mimeType?: { startsWith: string } } = {}

    if (type === 'image') {
      where.mimeType = { startsWith: 'image/' }
    }

    const media = await db.media.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json(media)
  } catch (error) {
    console.error('Error fetching media:', error)
    return NextResponse.json({ error: 'Failed to fetch media' }, { status: 500 })
  }
}

// POST /api/media - Create a new media entry
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    const media = await db.media.create({
      data: {
        filename: data.filename,
        originalName: data.originalName,
        mimeType: data.mimeType,
        size: data.size,
        url: data.url,
        altText: data.altText,
        uploadedBy: data.uploadedBy,
      },
    })

    return NextResponse.json(media, { status: 201 })
  } catch (error) {
    console.error('Error creating media:', error)
    return NextResponse.json({ error: 'Failed to create media' }, { status: 500 })
  }
}
