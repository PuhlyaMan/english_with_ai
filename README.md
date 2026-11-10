# EasyEnglish

Application for learning English with AI. The UI is React 19 on **Next.js** (App Router), served by the Next.js server (`next dev` / `next start`).

## Requirements

Node.js **22.22+** (see `.nvmrc`). TypeScript **6.x**.

## Development

```bash
yarn install
yarn dev
```

Open [http://localhost:5173](http://localhost:5173).

## Production server

```bash
yarn build
yarn start
```

`next start` serves the production build on port **5173**.

## API

`GET /api/health` — example Next.js Route Handler.
