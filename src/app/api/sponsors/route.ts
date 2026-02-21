import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/sponsors - Get all sponsors
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const active = searchParams.get('active')

    const where: { isActive?: boolean } = {}

    if (active === 'true') {
      where.isActive = true
    }

    const sponsors = await db.sponsor.findMany({
      where,
      orderBy: { displayOrder: 'asc' },
    })

    return NextResponse.json(sponsors)
  } catch (error) {
    console.error('Error fetching sponsors:', error)
    return NextResponse.json({ error: 'Failed to fetch sponsors' }, { status: 500 })
  }
}

// POST /api/sponsors - Create a new sponsor
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    const sponsor = await db.sponsor.create({
      data: {
        name: data.name,
        logoUrl: data.logoUrl,
        websiteUrl: data.websiteUrl,
        description: data.description,
        isActive: data.isActive ?? true,
        displayOrder: data.displayOrder ?? 0,
      },
    })

    return NextResponse.json(sponsor, { status: 201 })
  } catch (error) {
    console.error('Error creating sponsor:', error)
    return NextResponse.json({ error: 'Failed to create sponsor' }, { status: 500 })
  }
}
