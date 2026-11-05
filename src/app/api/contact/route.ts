import { NextResponse } from 'next/server';
import { parseContact } from '@/features/contact/schemas/contact.schema';
export async function POST(request: Request) { if (!request.headers.get('content-type')?.includes('application/json'))
    return NextResponse.json({ error: 'Expected JSON.' }, { status: 415 }); const raw = await request.text(); if (raw.length > 12000)
    return NextResponse.json({ error: 'Message too large.' }, { status: 413 }); let data; try {
    data = parseContact(JSON.parse(raw));
}
catch {
    return NextResponse.json({ error: 'Invalid JSON.' }, { status: 400 });
} if (!data)
    return NextResponse.json({ error: 'Enter valid contact details.' }, { status: 400 }); const endpoint = process.env.CONTACT_WEBHOOK_URL; if (!endpoint)
    return NextResponse.json({ error: 'Contact delivery is not configured yet. Please try again later.' }, { status: 503 }); try {
    const response = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', ...(process.env.CONTACT_WEBHOOK_TOKEN ? { Authorization: 'Bearer ' + process.env.CONTACT_WEBHOOK_TOKEN } : {}) }, body: JSON.stringify(data), signal: AbortSignal.timeout(10000) });
    if (!response.ok)
        throw new Error('Delivery failed');
    return NextResponse.json({ success: true });
}
catch {
    return NextResponse.json({ error: 'Unable to deliver your message. Please try again later.' }, { status: 502 });
} }
