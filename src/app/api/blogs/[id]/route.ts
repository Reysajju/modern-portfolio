import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/blogs/[id] - Get a single blog
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    const blog = await db.blog.findUnique({
      where: { id },
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
    console.error('Error fetching blog:', error)
    return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 })
  }
}

// PUT /api/blogs/[id] - Update a blog
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const data = await request.json()

    // Generate new slug if title changed
    let slug = data.slug
    if (data.title && !data.slug) {
      slug = data.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
    }

    const blog = await db.blog.update({
      where: { id },
      data: {
        title: data.title,
        slug,
        excerpt: data.excerpt,
        content: data.content,
        coverImageUrl: data.coverImageUrl,
        metaTitle: data.metaTitle,
        metaDescription: data.metaDescription,
        metaKeywords: data.metaKeywords,
        isPublished: data.isPublished,
        publishedAt: data.isPublished && !data.publishedAt ? new Date() : data.publishedAt,
      },
    })

    return NextResponse.json(blog)
  } catch (error) {
    console.error('Error updating blog:', error)
    return NextResponse.json({ error: 'Failed to update blog' }, { status: 500 })
  }
}

// DELETE /api/blogs/[id] - Delete a blog
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    await db.blog.delete({
      where: { id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting blog:', error)
    return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 })
  }
}
