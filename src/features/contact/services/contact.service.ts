import type { ContactInput } from '../types/contact.types';
export async function submitContact(input: ContactInput) { const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(input) }); const result = await response.json(); if (!response.ok)
    throw new Error(result.error || 'Unable to send your message.'); return result; }
