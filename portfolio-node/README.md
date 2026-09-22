# Rajneesh Sharma — Portfolio (Node.js)

A single-page portfolio built on Express, generated from the resume content.

## Run locally

```bash
npm install
npm start
```

Then open http://localhost:3000

## Structure

- `server.js` — Express static server
- `public/index.html` — page markup
- `public/style.css` — design system (dark ops-console theme)
- `public/script.js` — small entrance animation for the uptime metric

## Deploy

Any Node host works (Render, Railway, Fly.io, a VPS with pm2, etc.) — just
run `npm install && npm start` and point it at the `PORT` environment
variable the host provides.
