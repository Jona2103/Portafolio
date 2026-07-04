export type ProjectStatus = "live" | "progress";
export type Lang = "es" | "en";

/** A string that has both Spanish and English variants. */
export type Localized = Record<Lang, string>;

export interface Project {
  name: string;
  tagline: Localized;
  description: Localized;
  stack: string[];
  url?: string;
  repo?: string;
  year: string;
  status: ProjectStatus;
  /**
   * Preview de la tarjeta. Imagen local en /public (ej: "/projects/nimbus.jpg")
   * o URL remota permitida por el CSP (images.unsplash.com).
   * Si se omite, la tarjeta muestra un placeholder con el nombre del proyecto.
   */
  image?: string;
}

export interface Service {
  title: Localized;
  description: Localized;
}

/**
 * Placeholder data. Replace each entry with a real project.
 * Keep `status: "live"` for deployed work and `status: "progress"` for WIP.
 */
export const profile = {
  name: "Jonathan Viera Quiñonez",
  handle: "@tuhandle",
  role: { es: "Desarrollador Full-stack", en: "Full-stack Developer" } as Localized,
  intro: {
    es: "Construyo productos web de punta a punta: interfaces precisas, APIs sólidas y todo lo que va en medio.",
    en: "I build web products end to end: precise interfaces, solid APIs, and everything in between.",
  } as Localized,
  about: {
    es: "Desarrollador de software enfocado en producto. Me importa el detalle: rendimiento, accesibilidad y código que otros puedan mantener. Trabajo con el stack moderno de JavaScript/TypeScript y bases sólidas de backend.",
    en: "Product-focused software developer. I care about the details: performance, accessibility, and code others can maintain. I work with the modern JavaScript/TypeScript stack and solid backend foundations.",
  } as Localized,
  email: "hola@tudominio.com",
  github: "https://github.com/Jona2103",
  linkedin: "https://www.linkedin.com/in/jonathanvq/",
};

export const projects: Project[] = [
  {
    name: "Nimbus Analytics",
    tagline: {
      es: "Dashboard de métricas en tiempo real",
      en: "Real-time metrics dashboard",
    },
    description: {
      es: "Panel de analítica con streaming de eventos, gráficas en vivo y alertas configurables para equipos de producto.",
      en: "Analytics panel with event streaming, live charts, and configurable alerts for product teams.",
    },
    stack: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets"],
    url: "https://example.com",
    repo: "https://github.com/tuhandle/nimbus",
    year: "2025",
    status: "live",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    name: "Nimbus Analytics",
    tagline: {
      es: "Dashboard de métricas en tiempo real",
      en: "Real-time metrics dashboard",
    },
    description: {
      es: "Panel de analítica con streaming de eventos, gráficas en vivo y alertas configurables para equipos de producto.",
      en: "Analytics panel with event streaming, live charts, and configurable alerts for product teams.",
    },
    stack: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets"],
    url: "https://example.com",
    repo: "https://github.com/tuhandle/nimbus",
    year: "2025",
    status: "live",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    name: "Nimbus Analytics",
    tagline: {
      es: "Dashboard de métricas en tiempo real",
      en: "Real-time metrics dashboard",
    },
    description: {
      es: "Panel de analítica con streaming de eventos, gráficas en vivo y alertas configurables para equipos de producto.",
      en: "Analytics panel with event streaming, live charts, and configurable alerts for product teams.",
    },
    stack: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets"],
    url: "https://example.com",
    repo: "https://github.com/tuhandle/nimbus",
    year: "2025",
    status: "live",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    name: "Cobalt Commerce",
    tagline: {
      es: "Storefront headless modular",
      en: "Modular headless storefront",
    },
    description: {
      es: "Tienda headless con carrito persistente, pagos y panel de administración. Optimizada para Core Web Vitals.",
      en: "Headless store with persistent cart, payments, and admin panel. Optimized for Core Web Vitals.",
    },
    stack: ["React", "Node.js", "Stripe", "Redis"],
    url: "https://example.com",
    year: "2024",
    status: "live",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    name: "Quill CMS",
    tagline: {
      es: "CMS editorial para equipos pequeños",
      en: "Editorial CMS for small teams",
    },
    description: {
      es: "Gestor de contenido con editor en bloques, versionado y publicación programada. Pensado para redacciones ligeras.",
      en: "Content manager with block editor, versioning, and scheduled publishing. Built for lean newsrooms.",
    },
    stack: ["Next.js", "Prisma", "tRPC"],
    url: "https://example.com",
    repo: "https://github.com/tuhandle/quill",
    year: "2024",
    status: "live",
  },
  {
    name: "Tak Team Store",
    tagline: {
      es: "Tienda en línea para merch local",
      en: "Local merchandise online store",
    },
    description: {
      es: "Tienda en línea con catálogo de productos locales, sistema de pedidos y gestión de inventario.",
      en: "Online store with local product catalog, order system, and inventory management.",
    },
    stack: ["FastAPI", "Python", "PostGIS"],
    repo: "https://github.com/tuhandle/tak",
    year: "2026",
    status: "progress",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    name: "Pulse",
    tagline: {
      es: "Cliente de chat con IA local",
      en: "Chat client with on-device AI",
    },
    description: {
      es: "Interfaz de chat que corre modelos en el dispositivo, con historial cifrado y herramientas extensibles.",
      en: "Chat interface that runs models on-device, with encrypted history and extensible tools.",
    },
    stack: ["React", "Rust", "WASM"],
    year: "2026",
    status: "progress",
  },
];

export const services: Service[] = [
  {
    title: { es: "Desarrollo web full-stack", en: "Full-stack web development" },
    description: {
      es: "Aplicaciones de punta a punta con Next.js y TypeScript: frontend, API y base de datos.",
      en: "End-to-end apps with Next.js and TypeScript: frontend, API, and database.",
    },
  },
  {
    title: { es: "Interfaces y design systems", en: "Interfaces & design systems" },
    description: {
      es: "UI precisas, accesibles y componibles. Sistemas de diseño que escalan con el producto.",
      en: "Precise, accessible, composable UI. Design systems that scale with the product.",
    },
  },
  {
    title: { es: "APIs y backend", en: "APIs & backend" },
    description: {
      es: "APIs REST/GraphQL sólidas, modelado de datos y rendimiento bajo carga real.",
      en: "Solid REST/GraphQL APIs, data modeling, and performance under real load.",
    },
  },
  {
    title: { es: "Consultoría técnica", en: "Technical consulting" },
    description: {
      es: "Revisión de arquitectura, auditoría de rendimiento y acompañamiento a tu equipo.",
      en: "Architecture review, performance audits, and hands-on support for your team.",
    },
  },
];

export const liveProjects = projects.filter((p) => p.status === "live");
export const progressProjects = projects.filter((p) => p.status === "progress");
