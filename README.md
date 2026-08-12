# portfolio-next

Apple-style scroll/3D portfolio prototype, Next.js 16 (App Router, TypeScript,
Tailwind CSS v4). Design language: simplified Danish/Scandinavian minimalism —
warm neutral palette, one clay accent, one moss accent, a serif display face
(Fraunces) paired with a quiet grotesk (Inter). Page navigation uses React
19.2's native `<ViewTransition>`, wired into the browser's View Transitions
API — no animation library required.

## Styling: Tailwind v4

No `tailwind.config.js` — v4 is CSS-first. `app/globals.css` starts with
`@import "tailwindcss";`, then an `@theme` block maps the Danish palette
(`--color-bone`, `--color-clay`, etc.) into real utility classes (`bg-bone`,
`text-clay`, `border-line`, ...), and an `@theme inline` block aliases the
`next/font` variables from `app/layout.tsx` into `font-display` / `font-body`.

Most component styling is plain Tailwind utility classes in each `.tsx` file.
A small number of things stay as hand-written CSS in `globals.css` because
Tailwind utilities don't reach them cleanly:

- **Fluid `clamp()` type** (`.text-hero`, `.text-section-h2`, etc. in
  `@layer components`) — repeating a `clamp(...)` arbitrary value at every
  call site would be noisy; these are small `@apply`-based classes instead.
- **`.stage` / `.is-active`** — the pinned 3D scenes toggle this via plain
  `classList.toggle()` from a `requestAnimationFrame`-driven scroll handler,
  not React state, so a real CSS class is simpler than conditional utility
  classes here.
- **`::view-transition-*` pseudo-elements, `@keyframes`** — browser
  pseudo-elements with no Tailwind utility equivalent.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. View transitions animate in Chromium 125+ and recent
Safari/Firefox; on unsupported browsers navigation still works, it just cuts
instead of sliding.

## Pages

- `/` — Hero, then two pinned Three.js + GSAP ScrollTrigger scenes (the
  "architecture assembles" story, then "chaos resolves into one clean form").
  Ends with a link into `/stack`.
- `/stack` — Toolkit pills + impact metrics.
- `/work` — Selected project cards (currently placeholders).
- `/contact` — Contact links.

## How the page transitions work

- `components/Nav.tsx` is a client component (needs `usePathname`) rendered once
  in `app/layout.tsx`. Because layouts persist across navigations, the header
  never re-renders or animates — it's tagged with
  `style={{ viewTransitionName: "site-header" }}` and the matching CSS in
  `globals.css` keeps it visually still while page content slides underneath.
- Each `Link` in `Nav.tsx` gets a `transitionTypes` prop — `"nav-forward"` or
  `"nav-back"` — computed from `lib/route-order.ts`, which just compares the
  current and target route's position in a fixed page order.
- Every route's `page.tsx` wraps its content in `components/PageTransition.tsx`,
  a thin wrapper around React's `<ViewTransition>` that maps those two transition
  types to CSS animation classes. This has to live in each `page.tsx`, not the
  layout — per Next's docs, layouts persist across navigation so their enter/exit
  animations never fire.
- The actual slide/fade keyframes are in `app/globals.css` under
  "View Transitions: directional page navigation" — content fades and slides
  ~70px in the direction of travel; the header is explicitly exempted.
- `prefers-reduced-motion` is respected — animation durations collapse to 0 and
  navigation becomes an instant cut, matching default browser behavior.

## Before shipping

- Replace placeholder metrics in `components/Metrics.tsx` with real numbers.
- Replace placeholder project cards in `components/Projects.tsx` with real case
  studies (and consider giving each one its own `/work/[slug]` route with a
  shared-element morph from the card to the hero image — the natural next step
  now that `<ViewTransition name="...">` is already in the codebase).
- Replace email / LinkedIn / GitHub links in `components/Contact.tsx`.

## Next steps worth doing

1. Give each project its own detail route and morph the thumbnail into the
   hero image on click (React's `<ViewTransition name="...">` shared-element
   pattern — same primitive already used here, just with a matching `name` on
   both pages).
2. Reduce `IcosahedronGeometry`/point-cloud detail and/or disable the pins
   below ~600px width if mobile scroll-jank shows up in testing.
3. Test the directional slide on Firefox — the View Transitions API support
   there lags Chromium/Safari; confirm the "instant cut" fallback still feels
   fine rather than broken.
