# Design

## Theme
Dark, deliberate. Lectura tipo IDE/terminal: un dev revisando trabajo en un monitor, foco en el contenido. El oscuro no es decorativo, es el lienzo de trabajo. Sin imágenes (brand tech: la voz va por tipografía y estructura).

## Color
Estrategia: **Restrained** sobre fondo oscuro. Neutros tintados hacia verde (hue 158), un acento saturado < 10% de la superficie. Todo en OKLCH, sin `#000`/`#fff`.

| Rol | Token | OKLCH |
|---|---|---|
| Fondo | `--color-bg` | `0.165 0.008 158` |
| Superficie | `--color-surface` | `0.205 0.01 158` |
| Línea | `--color-line` | `0.31 0.012 158` |
| Línea viva | `--color-line-bright` | `0.42 0.016 158` |
| Texto | `--color-text` | `0.965 0.005 158` |
| Texto apagado | `--color-muted` | `0.7 0.014 158` |
| Tenue | `--color-faint` | `0.52 0.012 158` |
| Acento (live) | `--color-accent` | `0.87 0.19 152` (verde eléctrico) |
| Acento dim | `--color-accent-dim` | `0.62 0.12 152` |
| En proceso | `--color-progress` | `0.82 0.13 80` (ámbar) |

El estado nunca depende solo del color: lleva texto ("On live" / "En proceso") y forma (punto pulsante vs sólido).

## Typography
Dos familias, voz tech committed.
- **Geist** (`--font-geist`): UI y display. Pesos medium/regular, tracking ajustado, escala fluida con `clamp()` (hero hasta ~6.5rem).
- **JetBrains Mono** (`--font-jetbrains`): etiquetas, índices, año, stack tags, estados. Uppercase + tracking ancho para metadata.

Ninguna está en la lista reflex-reject de impeccable. Jerarquía por escala + peso (ratio ≥ 1.25), no por adorno. Body ≤ 60ch.

## Layout
- Lista, no grid de cards idénticas. Cada proyecto es una fila con regla superior; índice mono a la izquierda, cuerpo, estado a la derecha.
- Ancho máx `max-w-5xl`, alineado a la izquierda, asimétrico.
- Espaciado fluido con `clamp()`; agrupaciones tensas (nombre+año) y separaciones generosas (entre secciones).
- Dos secciones ancla: `#on-live` y `#en-proceso`.

## Motion
- Entrada escalonada (`.rise`, keyframe `rise`) con ease-out-quint. Sin bounce.
- Hover: la regla de cada fila pasa a `line-bright`, índice a `accent-dim`, flechas `↗` se desplazan. Solo transform/color, nunca propiedades de layout.
- Respeta `prefers-reduced-motion` (animaciones a ~0ms).

## Components
- `Hero` — identidad, intro, links, leyenda de conteo live/en-proceso.
- `Section` — encabezado mono con conteo + lista de filas.
- `ProjectRow` — fila de proyecto (índice, nombre, tagline, desc, stack, links, estado).
- `StatusBadge` — punto + etiqueta; `live` pulsa, `progress` sólido.

## Accessibility
WCAG 2.1 AA. Foco visible (`:focus-visible` con outline de acento). Contraste alto sobre fondo oscuro. Color no es único portador de estado. `lang="es"`.
