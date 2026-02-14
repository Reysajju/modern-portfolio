import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/books - Get all books
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const search = searchParams.get('search')
    const published = searchParams.get('published')

    const where: {
      isPublished?: boolean
      category?: string
      OR?: Array<{ title: { contains: string } } | { author: { contains: string } }>
    } = {}

    if (published === 'true') {
      where.isPublished = true
    }

    if (category) {
      where.category = category
    }

    if (search) {
      where.OR = [
        { title: { contains: search } },
        { author: { contains: search } },
      ]
    }

    const books = await db.book.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json(books)
  } catch (error) {
    console.error('Error fetching books:', error)
    return NextResponse.json({ error: 'Failed to fetch books' }, { status: 500 })
  }
}

// POST /api/books - Create a new book
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    const book = await db.book.create({
      data: {
        title: data.title,
        author: data.author,
        description: data.description,
        coverUrl: data.coverUrl,
        fileUrl: data.fileUrl,
        fileType: data.fileType,
        category: data.category,
        isPublished: data.isPublished ?? false,
      },
    })

    return NextResponse.json(book, { status: 201 })
  } catch (error) {
    console.error('Error creating book:', error)
    return NextResponse.json({ error: 'Failed to create book' }, { status: 500 })
  }
}
