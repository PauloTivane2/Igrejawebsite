import { NextResponse } from 'next/server';
import { sendContactEmail } from '@/services/email-service';

export async function POST(request: Request) {
  const body = await request.json();
  await sendContactEmail(body);
  return NextResponse.json({ success: true });
}
