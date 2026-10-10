# Tailwind CSS migration plan

## Audit

- Runtime: React 19, React Router 7, Vite 8; the existing Vite React plugin is configured in `vite.config.js`.
- Tailwind: not installed before this migration.
- Routes: `/`, `/the-farm`, `/the-land`, `/cultivation`, `/botanical-garden`, `/experiences`, `/explore`, `/products`, `/journal`, `/visit`, `/energy-healing`, plus a catch-all 404 route.
- TypeScript: no `.ts`/`.tsx` source and no TypeScript check script or dependency.
- Styles: global design tokens and utility-like selectors in `src/index.css`, embedded `<style>` blocks in shared components and route pages, inline styles in some JSX. `src/App.css` is an unimported Vite starter stylesheet.
- Brand tokens: peat black `#0B0B0A`, foliage `#111311`, card `#161916`, parchment `#EAE4D8`, stone `#A8A49B`, antique gold `#B99868`; serif and sans families are Cormorant Garamond and DM Sans.

## Migration sequence

1. Install Tailwind CSS v4 and its Vite plugin, then configure the existing Vite build without changing React Router.
2. Expose the audited palette, typography, and layout dimensions as Tailwind theme variables.
3. Replace semantic CSS selectors and component style blocks with Tailwind utility classes throughout the shared components and all route pages.
4. Preserve the home hero overlay, subtle architectural map grid, global reset/focus behavior, and fade animation as the only small custom CSS exceptions.
5. Verify all routes, the cultivation desktop/tablet/mobile grid, and key Home responsive layouts; run lint and production build. No TypeScript checker exists in this JavaScript-only project.
