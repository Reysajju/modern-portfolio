import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/contacts - Get all contact submissions
export async function GET() {
  try {
    const contacts = await db.contactSubmission.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(contacts)
  } catch (error) {
    console.error('Error fetching contacts:', error)
    return NextResponse.json({ error: 'Failed to fetch contacts' }, { status: 500 })
  }
}

// POST /api/contacts - Create a new contact submission
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    const contact = await db.contactSubmission.create({
      data: {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      },
    })

    return NextResponse.json(contact, { status: 201 })
  } catch (error) {
    console.error('Error creating contact:', error)
    return NextResponse.json({ error: 'Failed to create contact' }, { status: 500 })
  }
}
