# Building Something Great From India

Next.js App Router site with feature modules in src/features, shared UI in src/components, and marketing routes in src/app/(marketing).

## Development

Run npm install, copy .env.example to .env.local, and run npm run dev. Run npm run build for production. The ESLint configuration requires development dependencies: run npm install --save-dev eslint@9 eslint-config-next@16, then npm run lint. Registry access was unavailable during the refactor, so those packages could not be installed.

## Configuration

Set NEXT_PUBLIC_SITE_URL to your public origin before deployment; it controls metadata, sitemap and robots URLs. Set CONTACT_WEBHOOK_URL to a server-side endpoint that delivers contact messages. Optional CONTACT_WEBHOOK_TOKEN is sent as a bearer token. The webhook receives name, email, subject and message as JSON and must return a successful HTTP status after accepting delivery. Without a webhook, the API returns 503 and the form displays an honest error.

Replace placeholder contact details and illustrative learning content before launch. Add rate limiting at your hosting layer for the public contact endpoint.
