# Next.js Hydration Mismatch from Dates

<img width="800" height="800" alt="nextjs-hydration-hook" src="https://github.com/user-attachments/assets/8c12f208-a128-41c2-97e9-d623a3d0ba18" />

> Next.js warns "Text content does not match server-rendered HTML" because the server and the browser render different dates.

![GIF DEMO](demo.gif)

## Le Problème

Your page works in dev, then shows a red hydration error in the console. You didn't change anything. The cause: you render `new Date()` or `toLocaleString()` during render, so the server writes one time and the browser writes another.

## La Ffin de l'Erreur

- Render the date only after the component mounts
- Or pass a fixed value from the server so both sides match
- Use `suppressHydrationWarning` only when the difference is intentional

## Comment l'utiliser

```bash
git clone https://github.com/YOUR_USERNAME/nextjs-hydration-mismatch-date.git
cd nextjs-hydration-mismatch-date
npm install
npm run dev
```

## Ce que j'ai appris

Server and browser don't run your component at the same time, so anything time-based during render is a trap.

---

Part of my challenge: 1 repo / day. Building ShipIt, the tool to publish an app in 1 click.
