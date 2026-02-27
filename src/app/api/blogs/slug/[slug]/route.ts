import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/blogs/slug/[slug] - Get a blog by slug
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params

    const blog = await db.blog.findUnique({
      where: { slug },
      include: {
        author: {
          select: {
            id: true,
            email: true,
            fullName: true,
          },
        },
      },
    })

    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 })
    }

    return NextResponse.json(blog)
  } catch (error) {
    console.error('Error fetching blog by slug:', error)
    return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 })
  }
}
