# Jonathan Cagle — Portfolio

Source for [Jc007-code.github.io](https://Jc007-code.github.io), Jonathan Cagle's portfolio for software development, cybersecurity, systems, and automation.

The current visual direction is a rustic-modern Greek theme using limestone, Aegean blue, terracotta, olive, and bronze tones.

## Customize the site

- Edit `data/site.ts` for nearly all wording, links, navigation, and project details.
- Edit the variables at the top of `app/globals.css` for colors and fonts.
- Follow [CUSTOMIZE.md](CUSTOMIZE.md) for plain-language editing and publishing instructions.

## Sections

- Home and About
- Projects
- Professional Work
- Home Lab & Systems
- Academic Archive (reserved for later)
- Resume and Contact

The initial featured work includes Inbox Avenger, Automation Atlas, a Gutter Guru case-study placeholder, and Home Lab & Systems. Gutter Guru is intentionally presented without links to private or third-party repositories.

## Local development

Requirements: Node.js 24 and pnpm 10.

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Production build

```bash
pnpm build
```

Next.js writes the static site to `out/`. The workflow in `.github/workflows/deploy.yml` publishes that directory to GitHub Pages whenever `main` changes.

## Deployment setup

In the repository settings, choose **Settings → Pages → Build and deployment → Source: GitHub Actions**. The included workflow handles the rest.

## Content boundaries

- Never add links to private or client-owned repositories without explicit permission.
- Gutter Guru remains a case study; no Josh-owned repository should be linked or represented as Jonathan's.
- Academic materials belong in the Academic Archive and will be curated later.
