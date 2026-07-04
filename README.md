# Portafolio

Landing de portafolio personal. Dos secciones: **On live** (proyectos desplegados) y **En proceso** (en construcción). Dark, tech-minimal.

Stack: Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # build de producción (estático)
npm start        # sirve el build
```

## Editar contenido

Todo el contenido vive en `lib/projects.ts`:

- `profile` — tu nombre, rol, intro, email y links (GitHub / LinkedIn).
- `projects` — arreglo de proyectos. Por cada uno:
  - `status: "live"` → aparece en **On live**.
  - `status: "progress"` → aparece en **En proceso**.
  - `url` (demo en vivo) y `repo` (código) son opcionales; el link solo se muestra si existe.

No hace falta tocar componentes para cambiar proyectos. Las secciones se rellenan solas.

## Estructura

```
app/
  layout.tsx      fonts, metadata
  page.tsx        composición de la página
  globals.css     tokens de diseño (OKLCH) + motion
components/
  Hero.tsx        cabecera / identidad
  Section.tsx     sección con lista de proyectos
  ProjectRow.tsx  fila de proyecto
  StatusBadge.tsx indicador on-live / en-proceso
lib/
  projects.ts     DATOS (editar aquí)
next.config.mjs   headers de seguridad (CSP, HSTS, etc.)
```

Sistema visual documentado en `DESIGN.md`; estrategia de marca en `PRODUCT.md`.

### Favicon e imagen OG

- `app/icon.svg` — favicon (el punto verde de "live"). Reemplázalo si quieres tu propio mark.
- `app/opengraph-image.tsx` — imagen OG/redes (1200×630) generada con `next/og` a partir de `profile` en `lib/projects.ts`. Se actualiza sola al editar tus datos. `app/twitter-image.tsx` reusa la misma.
- Define `NEXT_PUBLIC_SITE_URL=https://tudominio.com` en el deploy para que las URLs OG sean absolutas (default en `app/layout.tsx`).

## Seguridad

- Headers en `next.config.mjs`: CSP estricta, `X-Frame-Options: DENY`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, HSTS.
- Todos los enlaces externos usan `rel="noopener noreferrer"`.
- Sin secretos en el repo, sin `dangerouslySetInnerHTML`, sin backend (superficie mínima).
- `npm audit` → 0 vulnerabilidades.

> Nota CSP: `style-src` incluye `'unsafe-inline'` por requerimiento de `next/font` + Tailwind. Si más adelante agregas analítica o fuentes externas, añade esos orígenes a la CSP explícitamente.

## Deploy

Listo para [Vercel](https://vercel.com) (cero config). También exportable como estático en cualquier hosting.
```bash
npm run build
```
