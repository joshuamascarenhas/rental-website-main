import { NextRequest, NextResponse } from 'next/server';
import { Property } from '@/lib/models/Property';

let properties: Property[] = [];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newProperty: Property = {
      ...body,
      id: Math.random().toString(36).substring(2, 10),
      verificationStatus: 'pending',
    };
    properties.push(newProperty);
    return NextResponse.json(newProperty, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

// Add GET handler for listing properties (basic)
export async function GET() {
  return NextResponse.json(properties);
}
