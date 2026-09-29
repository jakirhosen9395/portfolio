# DevOps Portfolio
 
A modern portfolio for Md. Jakir Hosen, positioned as a DevOps, Cloud, and Platform Engineer. The experience combines a professional operations-console visual language with recruiter-friendly clarity and engineering-focused case studies.

## Project Overview

- Next.js 16 App Router portfolio
- TypeScript and Tailwind CSS
- Sanity CMS with Studio support
- Resend contact delivery through a Vercel server route
- DevOps-focused visual design language
- Project and article case study routes
- Contact and resume support
- Vercel-ready deployment structure

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Sanity
- next-sanity
- Framer Motion
- Lenis
- Lucide icons

## Architecture

This project follows the recommended Vercel + Sanity content model:

- Frontend: Vercel-hosted Next.js app
- CMS: Sanity Studio
- Content: Sanity documents for projects, experience, skills, articles, and site settings
- Static routes: project and article detail pages are generated for content-driven pages

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Copy the environment file:

```bash
copy .env.example .env.local
```

3. Provide your Sanity values in `.env.local`.

4. Start the app:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

The app uses the following variables:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION=
NEXT_PUBLIC_SITE_URL=http://localhost:3000

SANITY_API_READ_TOKEN=
CONTACT_EMAIL=
CONTACT_FROM_EMAIL=
RESEND_API_KEY=
```

Notes:
- `NEXT_PUBLIC_*` values are public and used by the frontend.
- `SANITY_API_READ_TOKEN` and `RESEND_API_KEY` are secret values and should never be committed.
- `CONTACT_EMAIL` is the destination inbox and `CONTACT_FROM_EMAIL` must be accepted by Resend, usually on a verified sending domain.
- Add contact variables in Vercel under **Project → Settings → Environment Variables**, then redeploy before testing `/contact`.

## Sanity Setup

1. Create a new Sanity project.
2. Copy the project ID and dataset name into `.env.local`.
3. Start the Studio:

```bash
npx sanity dev
```

The app also exposes Studio at `/studio` through the Next.js route.

## Sanity Studio

The Studio includes the key content models for:

- Site Settings
- Experience
- Skills
- Projects
- Articles

You can manage content at `/studio` after the app is running.

## Content Management

The portfolio is designed so content can be updated without redesigning the app. Key editable areas include:

- home-page messaging
- introduction and about copy
- skills by category
- work experience timeline
- featured project case studies
- article posts
- contact metadata

## Development Commands

```bash
npm install
npm run dev
npm run build
npm run start
npm run lint
```

## Build

To create a production build:

```bash
npm run build
```

## Deployment

### Vercel Deployment

This is the preferred deployment target.

1. Push the repo to GitHub.
2. Import the project into Vercel.
3. Add the required environment variables.
4. Deploy.

For the complete account setup, Sanity content workflow, Resend configuration, Vercel variables, free-tier limits, troubleshooting, and known limitations, see [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

### Cost and service boundary

Render is not required for this portfolio. The intended architecture is GitHub for source control, Vercel for Next.js hosting and server routes, Sanity for CMS content, and Resend for contact email delivery. No database or separate backend is required.

## Project Structure

```text
src/
  app/
    (frontend)/
      page.tsx
      layout.tsx
      globals.css
      projects/
      articles/
      contact/
      not-found.tsx
  components/
    command-palette/
    layout/
    providers/
    sections/
  lib/
    site-data.ts
  sanity/
    env.ts
    schemaTypes/
    structure.ts
  types/
    portfolio.ts
```

## Adding Projects

Create or update Project documents in Sanity Studio. Each project can include:

- title and slug
- category and status
- summary and description
- technologies
- cover and gallery images
- code, docs, and live URLs
- case-study sections

## Adding Articles

Create or update Article documents in Sanity Studio. Each article supports:

- title and excerpt
- cover image
- author and date
- reading time
- tags
- article body content

## Adding Screenshots

Each project includes a gallery field in the Sanity schema. Upload images through Studio rather than adding URLs to React components.

## Troubleshooting

- If `npm run dev` fails because of missing environment variables, populate `.env.local` from `.env.example`.
- If Sanity Studio does not load, confirm the project ID and dataset values are correct.
- If image URLs do not render, check the remote pattern configuration in `next.config.ts`.
- If the app has stale dependencies, reinstall with `npm install`.

## Notes

This portfolio is intentionally designed around a DevOps operations-console aesthetic while remaining recruiter-friendly, accessible, and fast. Published Sanity documents are read server-side with a one-minute revalidation window; confirmed profile and experience data provide a fallback when Sanity is unavailable, while unconfirmed projects and articles remain empty until supplied.
