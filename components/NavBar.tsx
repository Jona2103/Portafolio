"use client";

import { useEffect, useState } from "react";
import { useLang } from "./LanguageProvider";
import { SECTIONS } from "@/lib/i18n";

const links = [
  { id: SECTIONS.about, key: "about" },
  { id: SECTIONS.projects, key: "projects" },
  { id: SECTIONS.services, key: "services" },
  { id: SECTIONS.contact, key: "contact" },
] as const;

export function NavBar() {
  const { t, lang, toggle } = useLang();
  const [condensed, setCondensed] = useState(false);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="rise-down fixed inset-x-0 top-0 z-50">
      <nav
        className={`mx-auto flex max-w-5xl items-center justify-between px-6 transition-all duration-300 sm:px-8 ${
          condensed
            ? "border-b border-line bg-bg/80 py-3 backdrop-blur-md"
            : "border-b border-transparent bg-transparent py-5"
        }`}
      >
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight text-text transition-colors hover:text-accent"
        >
          {"// portafolio"}
        </a>

        <div className="hidden items-center gap-7 font-mono text-xs uppercase tracking-[0.14em] text-muted sm:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="relative py-1 transition-colors hover:text-text"
            >
              {t.nav[l.key]}
            </a>
          ))}
        </div>

        <LangToggle lang={lang} label={t.a11y.langToggle} onToggle={toggle} />
      </nav>
    </header>
  );
}

function LangToggle({
  lang,
  label,
  onToggle,
}: {
  lang: "es" | "en";
  label: string;
  onToggle: () => void;
}) {
  // Avoid hydration flash: render neutral state until mounted.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      className="group flex items-center gap-1 rounded-full border border-line px-2.5 py-1 font-mono text-[0.7rem] uppercase tracking-[0.16em] transition-colors hover:border-line-bright"
    >
      <Segment active={mounted && lang === "es"}>ES</Segment>
      <span className="text-faint">/</span>
      <Segment active={mounted && lang === "en"}>EN</Segment>
    </button>
  );
}

function Segment({
  active,
  children,
}: {
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`transition-colors ${
        active ? "text-accent" : "text-faint group-hover:text-muted"
      }`}
    >
      {children}
    </span>
  );
}
