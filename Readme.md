# Swiggy (React + Parcel) — Learning Project

This is a React project that recreates a Swiggy-like UI for learning and practice.

It uses:

- **React 19** for UI
- **Parcel** as the bundler/dev server
- **React Router** for page routing
- **Tailwind CSS v4** for styling

---

## Table of contents

- [What you can do in this app](#what-you-can-do-in-this-app)
- [Prerequisites (must have)](#prerequisites-must-have)
- [Run the project (step-by-step)](#run-the-project-step-by-step)
- [Build for production](#build-for-production)
- [How the project is wired (important for understanding)](#how-the-project-is-wired-important-for-understanding)
- [Routing (pages)](#routing-pages)
- [Folder structure (where things live)](#folder-structure-where-things-live)
- [Data sources (where the cards come from)](#data-sources-where-the-cards-come-from)
- [Troubleshooting](#troubleshooting)
- [Next improvements (optional)](#next-improvements-optional)

---

## What you can do in this app

- Home page (`/`) showing the header + food/grocery/dine sections.
- Restaurants listing page (`/restaurant`) showing restaurant cards.
- Restaurant menu page (`/city/delhi/:id`) showing a menu UI (currently from local JSON data).

---

## Prerequisites (must have)

1. **Install Node.js (LTS)**

- Download: https://nodejs.org/
- After install, restart VS Code.

2. **Check Node + npm are installed**

Open a terminal inside the project folder and run:

```bash
node -v
npm -v
```

If both print versions, you’re good.

---

## Run the project (step-by-step)

### 1) Open the project folder

Open this folder in VS Code:

`swiggy/`

### 2) Install dependencies

Run:

```bash
npm install
```

This creates a `node_modules/` folder (don’t edit it).

### 3) Start the dev server

Run:

```bash
npm run dev
```

Parcel should print a URL (usually `http://localhost:1234`). Open it in the browser.

### 4) Edit and see changes

Try editing a component like:

- `src/components/Header.jsx`
- `src/components/Foodoptions.jsx`

Save the file and the browser should auto-refresh.

---

## Build for production

Create a production build:

```bash
npm run build
```

Parcel will generate an output folder (commonly `dist/`). You can deploy that folder to any static hosting.

---

## How the project is wired (important for understanding)

If React projects feel confusing, think of it like this:

1. **`index.html`** is the “socket board” where the UI gets plugged in.
   - It contains `<div id="root"></div>`.

2. **`src/app.jsx`** is the “main switch” that turns your React app on.
   - It does `ReactDOM.createRoot(document.getElementById("root"))` and renders the app.

3. **Components** are like LEGO blocks.
   - Example: `Home` uses `Header`, `Foodoptions`, `Groceryoptions`, `DineOption`, `Footer`, `Download`.

4. **Routing** decides which page component is shown for a URL.
   - Routes are declared in `src/app.jsx`.

---

## Routing (pages)

Routes live in `src/app.jsx`:

- `/` → `Home`
- `/restaurant` → `Restaurantscards`
- `/city/delhi/:id` → `RestaurantMenu`

The `:id` part is a **URL parameter**. In `RestaurantMenu`, it’s read using `useParams()`.

Note: Right now the menu UI loads from local `Pizzadata` and does not filter by `id` yet. The route param is already ready for when you connect real API data.

---

## Folder structure (where things live)

High level:

```
swiggy/
	index.html
	package.json
	Readme.md
	src/
		app.jsx
		index.css
		components/
		utilities/
		swiggyapi/
	srcmore/
		componentsmore/
		utilitiesmore/
	srcpizza/
		Componentspizza/
		Utilitiespizza/
```

What each area is used for:

- `src/` → main home page UI (header, food/grocery/dine sections)
- `src/components/` → reusable UI components
- `src/utilities/` → local JS data for UI cards
- `src/swiggyapi/` → local JSON dump (for learning / mock API)

- `srcmore/` → restaurant cards/listing experiment
- `srcpizza/` → restaurant menu experiment

---

## Data sources (where the cards come from)

This project mostly uses **local mock data** (so the UI works without calling a real API):

- Food cards: `src/utilities/Fooddata.js` used by `src/components/Foodoptions.jsx`
- Grocery cards: `src/utilities/Grocerydata.js` used by `src/components/Groceryoptions.jsx`
- Dineout restaurants: `src/utilities/Dinedata.jsx` used by `src/components/DineOption.js`
- Restaurants listing: `srcmore/utilitiesmore/Restaurantdatamore.jsx`
- Menu data: `srcpizza/Utilitiespizza/Pizzadata.jsx`

Images come from Swiggy CDN links like:

`https://media-assets.swiggy.com/swiggy/image/upload/...`

---

## Troubleshooting

### 1) Parcel says it cannot find `src/index.html`

Your entry file is currently `index.html` (project root).

Fix option A (recommended): update scripts in `package.json`:

```json
{
  "scripts": {
    "dev": "parcel index.html --host 0.0.0.0 --port 1234",
    "build": "parcel build index.html"
  }
}
```

Fix option B: create `src/index.html` and move the root `index.html` into `src/` (then keep scripts as-is).

### 2) Port 1234 is already in use

Change the port:

```bash
npm run dev -- --port 3000
```

### 3) Tailwind styles not applying

Check:

- `src/index.css` contains `@import "tailwindcss";`
- `index.html` links to `./src/index.css`

### 4) Blank page / routing issues on refresh

If you open a nested route directly (like `/city/delhi/123`) on a static host, you may need a “SPA fallback” rewrite rule (depends on hosting). In dev mode, Parcel usually handles this.

---

## Next improvements (optional)

- Use real API fetching (or a mock server) and load menu by `id`.
- Add a search state to filter restaurant cards.
- Add loading skeletons (you already have `src/components/Shimmer.jsx`).
- Add error boundaries / “Not Found” route.
