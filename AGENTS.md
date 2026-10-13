# AGENTS.md

> Stack: Node.js + Express backend, vanilla JS + Tailwind CSS (CLI) en `public/`, deploy en Hostinger.

## Intended stack

- Backend: Node.js + Express.
- Frontend: vanilla JS + Tailwind CSS, served from `public/`.
- Deploy target: Hostinger (Node.js hosting / VPS).

## Comandos verificados

- `npm install` — instala deps (express + tailwindcss CLI).
- `npm run build:css` — compila `src/input.css` → `public/css/output.css` minificado.
- `npm run watch:css` — recompila Tailwind al guardar (usar junto a `npm run dev` en otra terminal).
- `npm run dev` — `node --watch server.js` local.
- `npm start` — producción (lo que ejecuta Hostinger).

## Layout real

- `server.js` (raíz) sirve estáticos vía `express.static('public')`; fallback a `index.html`, APIs bajo `/api`.
- `public/` — `index.html`, `css/output.css` (generado, versionado), `js/main.js`. Sin bundler.
- Fuente Tailwind: `src/input.css` + `tailwind.config.js` (`content: public/**/*.html, public/js/**/*.js`).
- Diseño estilo editorial oscuro: fondo `#101400`, acento lima `#d4f321`, fuente `Archivo` (Google Fonts) + clases propias en `input.css` (`.text-outline`, `.marquee-track`, `.font-display`).

## Gotchas

- Express escucha en `process.env.PORT || 3000` — Hostinger inyecta `PORT`.
- Tras editar HTML/JS, recompilar Tailwind (`npm run build:css` o `watch:css`); el HTML solo enlaza el CSS construido.
