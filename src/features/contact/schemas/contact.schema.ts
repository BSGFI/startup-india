import type { ContactInput } from '../types/contact.types';
export function parseContact(value: unknown): ContactInput | null { if (!value || typeof value !== 'object')
    return null; const v = value as Record<string, unknown>; const result = {} as ContactInput; for (const key of ['name', 'email', 'subject', 'message'] as const) {
    if (typeof v[key] !== 'string')
        return null;
    result[key] = v[key].trim();
    if (!result[key] || result[key].length > (key === 'message' ? 5000 : 200))
        return null;
} return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(result.email) ? result : null; }
