# Academic Portfolio Website

[Live site](https://www.subhamshome.com/) · built by Subham Shome

A single-page React portfolio (Create React App) with sections for introduction, skills, timeline, research projects, awards and contact. It is responsive and tuned for phones.

## Run locally

```bash
npm install
npm start        # dev server on http://localhost:3000
npm test         # smoke tests (also run by GitHub Actions on every push)
npm run build    # production build into /build
```

## Structure

- `public/index.html`: page title, meta description and Open Graph / Twitter tags (link previews).
- `src/index.js`: entry point; `src/App.jsx` composes the header, routes and footer.
- `src/components/`: one component per section (`Home`, `Skills`, `Timeline`, `Projects`, `Awards`, `Contact`, ...).
- `src/styles/`: one stylesheet per component.
- `src/assets/`: images, the hero video (`hero.mp4` / `hero.webm` + poster) and the CV PDF.
- `.github/workflows/ci.yml`: runs the tests and a production build on every push / PR.
- `src/App.test.jsx`: smoke tests (sections, links, emails, accessibility basics, content).
- `src/index.css`: design tokens (colours, font). Change the palette here.
- `vercel.json`: single-page-app rewrite so unknown paths fall back to the app.

## Content you will edit most

- Projects: `projectsData` in `src/components/Projects.jsx`.
- Awards: `src/components/Awards.jsx`.
- Timeline: `entries` (and the journey strip `stops`) in `src/components/Timeline.jsx`.
- CV: replace `public/Subham_Shome_CV.pdf` (keep the filename; `/cv` redirects to it).
- Skills: `groups` in `src/components/Skills.jsx`.
- Photography link: commented out in `src/components/Header.jsx` (search for `PHOTO-LINK`).

## Deployment

Deployed on Vercel from the `master` branch; every push to `master` updates production.

## Contact

Email: ss3038@hw.ac.uk · GitHub: https://github.com/subhamshome

If you use this as a template, please credit this repository.
