# Breathe Lead - Fractional CSO

A modern, responsive marketing site for **Breathe Lead**, positioned around
Fractional Chief Sustainability Officer (CSO) services.

Built with **Vite + React + Tailwind CSS**, with a small dose of
`framer-motion` for subtle on-scroll reveals and `lucide-react` for icons.

## Stack

- React 18 + React Router 6
- Tailwind CSS 3 (custom palette: moss, mint, forest, cream)
- Framer Motion (one shared `Reveal` wrapper, kept lightweight)
- Lucide icons
- Fonts: Inter + Fraunces (loaded from Google Fonts)

## Pages

| Route        | Page             | Notes                                                      |
| ------------ | ---------------- | ---------------------------------------------------------- |
| `/`          | Home             | Hero, what we do, why now, who we help, featured CSOs, etc.|
| `/services`  | Services         | Five service blocks, engagement journey, CTA               |
| `/network`   | CSO Network      | Live filter + search; Taruna Saxena pre-filled             |
| `/about`     | About            | Story, philosophy, principles, numbers                     |
| `/contact`   | Contact          | Validated form + Calendly-style booking placeholder        |
| `*`          | NotFound         | 404 page                                                   |

## Project structure

```
src/
├── components/      # Navbar, Footer, Logo, Reveal, CTABanner, CSOCard, …
├── data/
│   └── csos.js      # CSO Network — add new leaders here
├── pages/           # One file per route
├── App.jsx          # Routes + layout shell
├── main.jsx         # Entry, BrowserRouter
└── index.css        # Tailwind base/components/utilities + small DSL
```

## Adding a CSO

Append an object to `src/data/csos.js`:

```js
{
  id: 'unique-slug',
  name: 'Full Name',
  title: 'Fractional CSO',
  location: 'City · Remote',
  bio: 'Short, human paragraph (1–3 sentences).',
  tags: ['Net Zero', 'CSRD', 'Manufacturing'],
  linkedin: 'https://www.linkedin.com/in/handle/',
  profile: 'https://www.linkedin.com/in/handle/',
  photo: null, // or a URL — falls back to monogram avatar
}
```

The Network page filter chips are derived automatically from `tags`.

## Run locally

```bash
npm install
npm run dev
```

The dev server starts on http://localhost:5173.

## Build

```bash
npm run build
npm run preview
```

## Notes on tone & content

All copy is original to this codebase — written with deliberately
slightly-unconventional phrasing, avoiding ESG buzzword overload while
staying professional. Replace any placeholder copy / contact details with
the real ones before going live.

## Wiring up later

- **Contact form** — currently validates client-side and shows a confirmation
  state. Pipe `onSubmit` to your backend / form service (Formspree, Resend,
  etc.).
- **Booking** — the “Open the calendar” button on `/contact` is a placeholder.
  Replace the `https://calendly.com/` URL with your real Calendly / Cal.com
  link.
- **Logos strip** — currently text-only. Drop in real client logos as SVGs
  when you have permission to display them.
