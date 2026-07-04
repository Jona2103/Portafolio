"use client";

import { profile } from "@/lib/projects";
import { useLang } from "./LanguageProvider";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="relative z-10 mt-12 flex flex-col gap-4 border-t border-line py-10 font-mono text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
      <span>
        © {new Date().getFullYear()} {profile.name} · {profile.handle}
      </span>
      <a
        href={`mailto:${profile.email}`}
        className="text-muted transition-colors duration-300 hover:text-accent"
      >
        {t.actions.talk} ↗
      </a>
    </footer>
  );
}
