# How to customize this portfolio

You only need two files for most changes:

- **Words, links, projects, and list items:** `data/site.ts`
- **Colors, fonts, spacing, and visual styling:** `app/globals.css`

## Change the wording

Open `data/site.ts`. It is organized into four sections:

1. `siteContent` — your name, role, location, GitHub link, availability, and footer.
2. `navigation` — the labels and order of the main menu.
3. `projects` — every project card, summary, tag, status, and link.
4. `homeContent` and `pageContent` — the wording on Home, About, Projects, Professional Work, Lab, Academic Archive, Resume, and Contact.

Change only the text between quotation marks. Keep the surrounding punctuation, commas, and brackets in place.

## Change the colors

Open `app/globals.css` and look at the variables at the very top under `:root`.

```css
--color-paper: #f3ecde;
--color-aegean: #164652;
--color-terracotta: #ad5d43;
--color-olive: #707552;
--color-bronze: #b68a4c;
```

Replace a hex value with another color. Because the entire site uses these variables, one change updates that color everywhere.

## Change the fonts

The two font stacks are also at the top of `app/globals.css`:

```css
--font-display: Palatino, "Palatino Linotype", "Book Antiqua", Georgia, serif;
--font-body: "Avenir Next", Avenir, "Trebuchet MS", Arial, sans-serif;
```

`--font-display` controls headings and classical details. `--font-body` controls paragraphs, buttons, and navigation.

## Change page layouts

The page files are inside `app/`:

| Page | File |
| --- | --- |
| Home | `app/page.tsx` |
| About | `app/about/page.tsx` |
| Projects | `app/projects/page.tsx` |
| Professional Work | `app/professional-work/page.tsx` |
| Lab | `app/lab/page.tsx` |
| Academic Archive | `app/academic-archive/page.tsx` |
| Resume | `app/resume/page.tsx` |
| Contact | `app/contact/page.tsx` |

Reusable pieces such as the header, footer, page introduction, and project cards are inside `components/`.

## Edit directly on GitHub

1. Open the `Jc007-code.github.io` repository.
2. Open the file you want to change.
3. Select the pencil icon labeled **Edit this file**.
4. Make the change and choose **Commit changes**.
5. Commit directly to `main`.

GitHub Actions will rebuild and publish the site automatically. It can take a few minutes for the live site to update.

For a more comfortable editor, press the `.` key while viewing the repository on GitHub. This opens GitHub's browser-based editor, where the folder list is visible on the left.

## Preview changes on your Mac

From the portfolio folder in VS Code, open a terminal and run:

```bash
pnpm dev
```

Then open `http://localhost:3000`. Stop the preview with `Control + C`.

Before publishing a larger change, verify it with:

```bash
pnpm build
```

## Important publication boundary

Gutter Guru remains a case study. Do not add links to Josh-owned, client-owned, or private repositories unless you have explicit permission to publish them.
