# TRIBES UNITE — Web Shell (Next.js)

> **This is not just a game. It is a tool.**  
> Browser-first SPA for the TRIBES UNITE project: landing + inner pages, newsletter capture, media gallery, donations, and a `/play` route where the in-browser build will mount.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=nextdotjs)](https://nextjs.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

---

## ✨ Features (MVP Shell)

- **Landing** page with hero, manifesto snippet, CTA, and embedded **YouTube playlist**
- **Subscribe** page with working form (in-memory for now; (/api/subscribe))
- **Gallery** page (images/videos) backed by `/api/media` (static stub → DB later)
- **Donate** (Patreon/PayPal/Crypto links)
- **About** with **tabs** (Vision / Tech / Roadmap)
- **Play** route — placeholder **canvas/WebGL** mount for the browser build
- **Privacy** & **Terms** pages
- Responsive layout, dark theme, clean typography

---

## 🧱 Tech Stack

- **Next.js (App Router)** + **TypeScript**
- **Tailwind CSS** for styling
- Minimal **API Routes** for `/api/subscribe` and `/api/media`
- Ready to connect to **MongoDB** later (via Mongoose or direct driver)

---

## 🚀 Quickstart

```bash
# 1) Create project (if you haven't already)
npx create-next-app@latest tribes-unite --ts --eslint
cd tribes-unite

# 2) Install Tailwind
npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 3) Add the app files (pages/components) from this repo

# 4) Dev
npm run dev
# open http://localhost:3000
