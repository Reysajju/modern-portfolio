import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/sponsors/[id] - Get a single sponsor
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    const sponsor = await db.sponsor.findUnique({
      where: { id },
    })

    if (!sponsor) {
      return NextResponse.json({ error: 'Sponsor not found' }, { status: 404 })
    }

    return NextResponse.json(sponsor)
  } catch (error) {
    console.error('Error fetching sponsor:', error)
    return NextResponse.json({ error: 'Failed to fetch sponsor' }, { status: 500 })
  }
}

// PUT /api/sponsors/[id] - Update a sponsor
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const data = await request.json()

    const sponsor = await db.sponsor.update({
      where: { id },
      data: {
        name: data.name,
        logoUrl: data.logoUrl,
        websiteUrl: data.websiteUrl,
        description: data.description,
        isActive: data.isActive,
        displayOrder: data.displayOrder,
      },
    })

    return NextResponse.json(sponsor)
  } catch (error) {
    console.error('Error updating sponsor:', error)
    return NextResponse.json({ error: 'Failed to update sponsor' }, { status: 500 })
  }
}

// DELETE /api/sponsors/[id] - Delete a sponsor
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    await db.sponsor.delete({
      where: { id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting sponsor:', error)
    return NextResponse.json({ error: 'Failed to delete sponsor' }, { status: 500 })
  }
}

// PATCH /api/sponsors/[id] - Increment click count
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    const sponsor = await db.sponsor.update({
      where: { id },
      data: {
        clickCount: { increment: 1 },
      },
    })

    return NextResponse.json(sponsor)
  } catch (error) {
    console.error('Error updating sponsor click count:', error)
    return NextResponse.json({ error: 'Failed to update click count' }, { status: 500 })
  }
}
