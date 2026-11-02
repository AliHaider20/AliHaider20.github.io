# Haider Ali - Portfolio

Personal portfolio built with React, TypeScript, Tailwind CSS, Framer Motion and Vite.
Live at https://alihaider20.github.io/

## Structure

```
client/
  index.html            page shell (title, meta, fonts)
  public/resume.pdf     downloadable CV
  src/
    data/resumeData.ts  ALL site content (projects, experience, skills, ...)
    components/         layout/ (Navbar, Footer) and sections/ (one per page section)
    hooks/              dark mode, intersection observer
    index.css           theme colors + global styles
scripts/deploy.mjs      copies the production build to the repo root
index.html, assets/, resume.pdf   <- generated build output served by GitHub Pages
```

To change content, edit `client/src/data/resumeData.ts`. Projects are grouped by their
`group` field (Generative AI, Machine Learning, Computer Vision) and displayed in that order.

## Commands

```bash
npm install
npm run dev        # local dev server
npm run typecheck  # TypeScript check
npm run deploy     # build, then publish to repo root (commit the result)
```

## Deploying

GitHub Pages must be set to **Deploy from a branch -> `main` -> `/ (root)`**.
After editing content run `npm run deploy`, then commit the changed `index.html` and `assets/`
and push to `main`. Never edit the root `index.html` or `assets/` by hand.
