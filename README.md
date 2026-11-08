# EasyEnglish

Application for learning English with AI. The UI is React 19 on **Next.js** (App Router), served by the Next.js server (`next dev` / `next start`).

## Requirements

Node.js **20.9+** (Next.js 16). Use `.nvmrc` if you use nvm.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Production server

```bash
npm run build
npm start
```

`next start` serves the production build on port **5173**.

## PWA

- `app/manifest.js` — web app manifest (EasyEnglish)
- `public/sw.js` — service worker (registered in production), offline fallback to `public/offline.html`
- `public/icons/` — install icons

The service worker registers after `npm run build` + `npm start` (not in development).

## API

`GET /api/health` — example Next.js Route Handler.
