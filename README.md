# MAOBI — Portfolio

A cinematic, motion-led portfolio for **Chimaobi Nwaokoro**, frontend developer. Built as a single-page experience with an intro sequence, an oversized editorial hero, a scroll-driven project exhibition and a large-format contact ending.

## Stack

- React 19
- Vite
- Framer Motion (`motion` / React APIs)
- Hand-written CSS design system
- lucide-react icons

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Structure

```text
src/
  components/    intro, navigation, hero, about, projects, contact, footer
  data/          project content and verified contact details
  hooks/         media-query helper
  App.jsx        intro orchestration and page composition
  index.css      tokens, layout, project previews, responsive and reduced-motion rules
public/
  profile.webp / profile-large.webp   optimized portrait assets
```

## Notes

- The intro plays once per browser session. It can be replayed from the footer, skipped with the on-screen control or the Escape/Enter key, and is shortened for reduced-motion users.
- Desktop project browsing uses a sticky horizontal gallery driven by natural page scroll. Tablets, phones and reduced-motion users receive a vertical project stack.
- The browser-framed project visuals are original interface direction studies, not live screen captures. Full case studies are available on request via email.
- The contact section uses three accessible contact panels with verified details only: `chimaobinwaokoro27@gmail.com`, `https://www.linkedin.com/in/chimaobi-nwaokoro-952620430/` and `https://github.com/chimaobinwaokoro27-arch`.
