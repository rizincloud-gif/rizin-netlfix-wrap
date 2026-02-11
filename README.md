# Netflix Wrapped (Stylish Interactive Edition)

An interactive Netflix Wrapped web experience with a Netflix red/black visual style, **bundled local poster images** for each top title, and keyboard-friendly slide navigation.

## Stack
- HTML5
- Modern CSS (Netflix-inspired dark/red theme, responsive layout)
- Vanilla JavaScript (slide engine + dynamic rendering)
- npm scripts for local development

## Features
- Story-like slide flow with Prev/Next controls and progress dots
- Left/Right arrow-key navigation
- Poster image for every top show (served locally from `assets/posters/`)
- Fallback initials card when any poster fails to load

## Run
```bash
npm run dev
```
Then open `http://localhost:4173`.
