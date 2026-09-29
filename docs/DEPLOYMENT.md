# Free Portfolio Deployment Guide

This guide deploys this repository with the intended `$0/month` architecture:

```text
                    +-----------------+
                    |     GitHub      |
                    |   Source code   |
                    +--------+--------+
                             |
                             v
                    +-----------------+
                    |     Vercel      |
                    |   Next.js app   |
                    +--------+--------+
                             |
                    +--------+--------+
                    |                 |
                    v                 v
             +-------------+   +-------------+
             |   Sanity    |   |   Resend    |
             | CMS + Studio|   | Contact mail|
             +-------------+   +-------------+
```

Vercel hosts the Next.js application and `/api/contact` server route. Sanity stores published portfolio content and media. Resend delivers contact messages. GitHub stores the repository and triggers Vercel deployments. Render, AWS runtime infrastructure, a database, Docker, and a separate backend are not required.

The free architecture is designed for normal personal-portfolio traffic. Free tiers have quotas; they are not unlimited.

## 1. Prerequisites

Use Node.js 20.9 or newer. Next.js 16 requires a current supported Node.js runtime. Verify locally:

```powershell
node --version
npm --version
```

You need accounts at:

- GitHub
- Vercel
- Sanity
- Resend

No paid domain is required. The Vercel URL is sufficient.

## 2. GitHub Setup

This project already has a configured remote. Check it before changing anything:

```powershell
git remote -v
git branch --show-current
```

The current remote is:

```text
https://github.com/jakirhosen9395/portfolio.git
```

Use that repository rather than creating a second repository. For a fresh machine, clone it with:

```powershell
git clone https://github.com/jakirhosen9395/portfolio.git
cd portfolio
npm install
```

For a new repository, create an empty GitHub repository first, then connect an existing local project:

```powershell
git init
git branch -M main
git remote add origin https://github.com/<your-account>/<your-repository>.git
git add .
git commit -m "feat: finalize free portfolio architecture"
git push -u origin main
```

Never put a GitHub password or token in a remote URL or committed file. Authenticate through Git Credential Manager or GitHub CLI when Git prompts.

Vercel connects to GitHub through its dashboard. Each push to the selected branch can create a deployment and preview deployments can be created for pull requests.

## 3. Local Development

Copy the example environment file:

```powershell
Copy-Item .env.example .env.local
```

For local development, set at least the public Sanity values if you want to read CMS content. Keep private values only in `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_SITE_URL=http://localhost:3000

SANITY_API_READ_TOKEN=
RESEND_API_KEY=
CONTACT_EMAIL=
CONTACT_FROM_EMAIL=
```

Install and run:

```powershell
npm install
npm run dev
```

Open <http://localhost:3000>. The Studio is at <http://localhost:3000/studio>.

Validation commands:

```powershell
npm run lint
npm run build
npx tsc --noEmit
```

There are currently no automated test files or test script in `package.json`.

## 4. Sanity Account and Project Setup

1. Open <https://www.sanity.io/> and create an account or sign in.
2. Open the Sanity management dashboard.
3. Choose **Create project**.
4. Give the project a descriptive name, such as `Jakir Portfolio`.
5. Choose the free plan.
6. Create or select the `production` dataset.
7. Copy the **Project ID** from the project settings. It is a short identifier, not a secret.
8. In the project API settings, confirm the dataset is public if using the free Sanity plan.
9. If the dataset is private, create a read token with the minimum read permission and keep it server-side as `SANITY_API_READ_TOKEN`.
10. Add the project ID and dataset to `.env.local` locally and to Vercel later.

The free Sanity plan currently supports public datasets. A private dataset may require a paid plan, so use a public dataset for this personal portfolio unless privacy is necessary.

## 5. Sanity Variables

| Variable | Purpose | Source | Public/secret | Where | Required |
|---|---|---|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Identifies the Sanity project | Sanity project settings | Public | Local and Vercel | Yes for CMS |
| `NEXT_PUBLIC_SANITY_DATASET` | Selects the dataset, normally `production` | Sanity project settings | Public | Local and Vercel | Yes for CMS |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Pins the Sanity API version | Project configuration | Public | Local and Vercel | Yes; use `2024-01-01` currently |
| `SANITY_API_READ_TOKEN` | Reads private Sanity datasets from the server | Sanity API settings | Secret | Local and Vercel | Optional for public datasets |

The public variables are safe to expose in browser configuration. The read token is never prefixed with `NEXT_PUBLIC_` and is only read by the server-side content loader.

## 6. Sanity Studio

Start the Next.js app, then open:

```text
http://localhost:3000/studio
https://<project>.vercel.app/studio
```

Sign in with the Sanity account that owns the project. The Studio structure contains:

- Site Settings
- Experience
- Skills
- Projects
- Articles

The public site reads the `siteSettings` singleton document and published documents. The client uses the `published` perspective, so drafts do not appear publicly until you publish them. Draft preview mode is not implemented.

## 7. Entering Portfolio Content

### Site Settings

Open **Site Settings** and create the singleton document with ID `siteSettings`. Enter:

- Name
- Professional title
- Short tagline
- Long introduction
- Email
- Location
- Availability status
- GitHub URL
- GitLab URL
- LinkedIn URL
- Resume PDF
- SEO title
- SEO description
- Optional Open Graph image
- Optional profile image
- Optional profile image collection

Use your real values. Do not enter confidential infrastructure details.

### Experience

Create one document per role. Use:

- Company
- Position
- Employment type
- Location
- Start and end dates
- Currently working
- Summary
- Responsibilities
- Technologies
- Achievements
- Environment
- Display order

Only describe work you can verify.

### Skills

Create one document per skill. Enter the skill name, category, context/proficiency description, optional icon name, and related projects. The current presentation uses a safe generic icon while the CMS icon rendering remains a known follow-up item.

### Projects

Create a project document and generate its slug from the title. Add only genuine work, labs, or clearly labelled personal experiments. Available case-study fields include:

- Title and short description
- Category, status, and date
- Technologies
- Cover image and project gallery
- GitHub, GitLab, live, and documentation links
- Problem
- Objectives
- Architecture
- Infrastructure
- Deployment
- CI/CD
- Security
- Observability
- Troubleshooting
- Lessons learned
- Architecture diagram

Do not invent traffic, uptime, cost, client, team, or security metrics.

### Articles

Create an Article document with title, slug, excerpt, cover image, author, date, tags, reading time, and Portable Text content. Publish the article when it is ready. Related projects can reference published Project documents.

## 8. Profile Image and Carousel Status

Sanity schemas support a profile image and profile image collection, and the image URL builder is configured for Sanity CDN assets. The current UI does not render the profile image or carousel yet.

Status: non-blocking for first deployment.

Recommended action: provide the final image assets, then implement a responsive accessible profile presentation without adding another image provider.

## 9. Resume

The public resume route is:

```text
/resume
```

The current fallback resume is `public/resume.pdf`, which works on Vercel without a separate file server. The preferred CMS workflow is:

1. Open **Site Settings** in Sanity Studio.
2. Upload the final PDF to the **Resume PDF** file field.
3. Publish Site Settings.
4. `/resume` redirects to the Sanity-hosted asset URL.

If no Sanity resume is published, the static `public/resume.pdf` fallback is used. Confirm that the committed PDF is your final resume before deployment.

## 10. Resend Setup

1. Open <https://resend.com/> and create an account.
2. Open **API Keys** and create a key with the minimum permission needed for sending.
3. Copy the key once and store it in a password manager.
4. Open **Domains** and add/verify a sending domain if you use a custom domain.
5. For initial testing, use the sender address Resend allows for your account.
6. Choose the inbox that should receive portfolio messages.

Configure:

| Variable | Purpose | Example format | Secret? |
|---|---|---|---|
| `RESEND_API_KEY` | Authorizes server-side email delivery | `re_...` | Yes |
| `CONTACT_EMAIL` | Destination inbox | `you@yourdomain.com` | No, but keep private if preferred |
| `CONTACT_FROM_EMAIL` | Verified sender address | `Portfolio <hello@yourdomain.com>` | No, but must be accepted by Resend |

The current Resend Free plan includes 3,000 transactional emails per month and limits sending to 100 emails per day. When the limit is reached, delivery stops or the provider rejects further sends until the quota resets or the plan changes. A personal portfolio should normally remain below these limits.

## 11. Contact Form Flow

```text
Visitor
   ↓
Contact form
   ↓
Next.js /api/contact
   ↓
Server validation and honeypot check
   ↓
Resend
   ↓
CONTACT_EMAIL
```

The route validates name, email, subject, and message on the server. It rejects oversized or malformed values, silently accepts the honeypot field, and applies a best-effort one-minute per-instance throttle. The browser receives a generic success or failure state.

After deployment, submit a test message from `/contact` and verify delivery in the configured inbox. Do not test with real credentials committed to the repository.

## 12. Vercel Setup

1. Open <https://vercel.com/> and sign in.
2. Choose **Add New** and **Project**.
3. Connect GitHub if prompted.
4. Select `jakirhosen9395/portfolio`.
5. Keep the detected Next.js framework and default build settings.
6. Open **Environment Variables** before deploying.
7. Add the variables in the table below.
8. Deploy the project.

Vercel automatically provides a URL such as:

```text
https://<project-name>.vercel.app
```

### Vercel Environment Variables

| Variable | Value source | Environments | Secret |
|---|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project settings | Development, Preview, Production | No |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset name | Development, Preview, Production | No |
| `NEXT_PUBLIC_SANITY_API_VERSION` | `2024-01-01` | Development, Preview, Production | No |
| `NEXT_PUBLIC_SITE_URL` | Vercel URL, later custom URL | Production; optionally Preview | No |
| `SANITY_API_READ_TOKEN` | Sanity API settings | Development, Preview, Production if needed | Yes |
| `RESEND_API_KEY` | Resend API Keys | Production and Preview if testing mail | Yes |
| `CONTACT_EMAIL` | Your receiving inbox | Production and Preview | No |
| `CONTACT_FROM_EMAIL` | Resend-accepted sender | Production and Preview | No |

Do not prefix private values with `NEXT_PUBLIC_`.

## 13. First Deployment Verification

Check each URL after deployment:

```text
https://<project>.vercel.app/
https://<project>.vercel.app/projects
https://<project>.vercel.app/articles
https://<project>.vercel.app/contact
https://<project>.vercel.app/resume
https://<project>.vercel.app/studio
https://<project>.vercel.app/sitemap.xml
https://<project>.vercel.app/robots.txt
```

Create and publish one Site Settings document and one test content document in Studio. Wait up to one minute for revalidation, then refresh the public page. The content loader uses `next.revalidate: 60` and tags content with `portfolio-content`.

## 14. Custom Domain

A custom domain is optional. The free Vercel URL is the primary no-domain deployment. If you later add a domain in Vercel, update:

```env
NEXT_PUBLIC_SITE_URL=https://your-real-domain.com
```

This value is used for metadata, canonical URLs, Open Graph URLs, Person structured data, sitemap URLs, and robots sitemap output.

## 15. Free-Tier Checklist

```text
[ ] GitHub account
[ ] Vercel account
[ ] Sanity account
[ ] Resend account
[ ] No paid hosting
[ ] No Render
[ ] No EC2
[ ] No database
[ ] No VPS
[ ] No separate backend
[ ] Vercel domain
[ ] Sanity configured
[ ] Resend configured
[ ] Environment variables configured
[ ] Portfolio deployed
[ ] Contact form tested
[ ] Resume tested
[ ] Studio tested
```

Current official free-tier assumptions:

- Vercel Hobby: `$0/month`, with quota limits including 1M CDN requests and 100 GB monthly transfer.
- Sanity Free: `$0/month`, with public-dataset and usage quotas including 10K documents, 1M CDN requests, 250K API requests, and 100 GB bandwidth.
- Resend Free: `$0/month`, 3,000 transactional emails/month and 100 emails/day.

These limits can change. The correct operating assumption is `$0/month under normal personal-portfolio usage within free-tier limits`, not unlimited free usage.

## 16. Troubleshooting

### Vercel build fails

Check the deployment logs and confirm the required Node.js runtime, repository branch, and environment variable names. Reproduce locally:

```powershell
npm install
npm run lint
npm run build
npx tsc --noEmit
```

### Sanity content does not appear

Confirm the project ID, dataset, and API version. Confirm that the document is published, not only saved as a draft. Check that the Site Settings document has the singleton ID `siteSettings`. Wait up to 60 seconds for revalidation.

### Studio does not load

Confirm `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` are set in the running environment. Open `/studio` while signed in to the correct Sanity account and check the browser/server deployment logs.

### Contact form fails

Confirm `RESEND_API_KEY`, `CONTACT_EMAIL`, and `CONTACT_FROM_EMAIL` are configured in the same Vercel environment as the deployment. The route returns a generic configuration error when any is missing.

### Resend email is not received

Check Resend logs, sender verification, spam folders, daily quota, and the destination address. Use a verified sender domain for production delivery.

### Resume does not open

Confirm `public/resume.pdf` exists in the deployment or publish a valid PDF in Site Settings. Check the `/resume` response and the Sanity asset URL.

### Environment variable is undefined

Vercel environment variables require a new deployment after changes. Locally, use `.env.local`, restart `npm run dev`, and do not use private variables in client components.

### Image does not render

Confirm the Sanity image has been uploaded and published. The Next.js configuration allows `cdn.sanity.io`. Check the image field and browser network request.

### Vercel works but local development fails

Use the same Node.js major version locally and recreate `.env.local` from `.env.example`. Remove only local generated folders such as `.next` if the cache is stale, then run `npm install` again.

## 17. Known Issues and Future Work

| Item | Status | Blocks deployment? | Recommended action |
|---|---|---:|---|
| Profile image rendering | Schema and URL support exist; UI rendering is incomplete | No | Add the final profile image presentation |
| Profile carousel | Schema exists; carousel UI is not implemented | No | Optional future enhancement |
| Sanity skill icons | Skill data is CMS-backed; icon selection currently uses a safe generic icon | No | Map approved icon names to Lucide icons |
| Project gallery/lightbox | Gallery data and optimized images exist; lightbox is not implemented | No | Add an accessible lightbox if needed |
| Draft preview mode | Public site reads published content only | No | Add preview mode only if editorial previews are needed |
| Dependency advisories | `npm audit --omit=dev` reports 15 advisories: 12 moderate and 3 high | No for current build | Review Sanity/tooling upgrades separately; do not use `npm audit fix --force` blindly |

The current dependency advisories are introduced through the Sanity/tooling dependency tree, including `adm-zip`, `js-yaml`, `smol-toml`, `undici`, and `uuid` transitive paths. The available automatic fix proposes a breaking Sanity upgrade. The current app passes lint, build, and TypeScript validation, so dependency remediation should be handled as a separate tested upgrade task.

## 18. Current Project Validation

Run before deployment:

```powershell
npm run lint
npm run build
npx tsc --noEmit
git diff --check
```

The repository has no automated test suite at this time. A successful build means the code compiles; it does not replace configuring Sanity, Resend, publishing content, and testing the deployed flows.