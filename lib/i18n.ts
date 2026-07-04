import type { Lang } from "./projects";

export type { Lang };

/** UI strings, keyed by language. Project content lives in lib/projects.ts. */
export const dict = {
  es: {
    nav: {
      about: "Sobre mí",
      projects: "Proyectos",
      services: "Servicios",
      contact: "Contacto",
    },
    sections: {
      about: "Sobre mí",
      live: "On live",
      progress: "En proceso",
      services: "Servicios",
      contact: "Contacto",
    },
    hero: {
      onLive: "on live",
      inProgress: "en proceso",
    },
    status: {
      live: "On live",
      progress: "En proceso",
    },
    actions: {
      viewLive: "Ver en vivo",
      code: "Código",
      prev: "Anterior",
      next: "Siguiente",
      talk: "Hablemos",
    },
    contact: {
      lead: "¿Tienes un proyecto en mente? Escríbeme y lo conversamos.",
    },
    a11y: {
      langToggle: "Cambiar idioma",
      carousel: "Carrusel de proyectos",
    },
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      services: "Services",
      contact: "Contact",
    },
    sections: {
      about: "About me",
      live: "On live",
      progress: "In progress",
      services: "Services",
      contact: "Contact",
    },
    hero: {
      onLive: "on live",
      inProgress: "in progress",
    },
    status: {
      live: "On live",
      progress: "In progress",
    },
    actions: {
      viewLive: "View live",
      code: "Code",
      prev: "Previous",
      next: "Next",
      talk: "Let's talk",
    },
    contact: {
      lead: "Got a project in mind? Drop me a line and let's talk.",
    },
    a11y: {
      langToggle: "Switch language",
      carousel: "Projects carousel",
    },
  },
} as const;

export type Dict = (typeof dict)[Lang];

export const SECTIONS = {
  about: "sobre-mi",
  projects: "proyectos",
  services: "servicios",
  contact: "contacto",
} as const;
