# Swiggy Clone UI (React + Parcel)

A frontend learning project that recreates key Swiggy-style flows: home discovery, restaurant listing, and menu browsing.

## Highlights

- Multi-page routing with dynamic URL params
- Component-based UI split by feature areas
- Local mock data for food, grocery, dineout, restaurants, and menu
- Fast development workflow using Parcel

## Tech Stack

- React 19
- Parcel 2
- React Router
- Tailwind CSS 4

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Run in development

```bash
npm run dev
```

The app starts on `http://localhost:1234` by default.

### 3. Build for production

```bash
npm run build
```

Parcel generates the production output in `dist/`.

## Available Routes

- `/` -> Home page
- `/restaurant` -> Restaurant listing
- `/city/delhi/:id` -> Restaurant menu page (dynamic id)

Routes are configured in `src/app.jsx`.

## Project Structure

```text
swiggy/
	index.html
	package.json
	Readme.md
	tester.html
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

## Where Data Comes From

The current UI is powered by local mock data files:

- `src/utilities/Fooddata.js`
- `src/utilities/Grocerydata.js`
- `src/utilities/Dinedata.jsx`
- `srcmore/utilitiesmore/Restaurantdatamore.jsx`
- `srcpizza/Utilitiespizza/Pizzadata.jsx`

This makes development predictable without depending on external APIs.

## Troubleshooting

### Port already in use

```bash
npm run dev -- --port 3000
```

### Tailwind styles not loading

- Ensure `src/index.css` contains `@import "tailwindcss";`
- Ensure `index.html` imports `./src/index.css`

### Direct route refresh fails on hosting

For nested routes like `/city/delhi/123`, configure SPA fallback rewrites on your hosting provider.

## Learning Focus

This project is ideal for practicing:

- React component composition
- Route-driven UI patterns
- Working with mock data before API integration
- Organizing medium-size frontend projects

## Next Improvements

- Fetch live data and map menu by route `id`
- Add search and filter controls on restaurant listing
- Add loading and error states across routes
- Add a not-found route and route-level boundaries
