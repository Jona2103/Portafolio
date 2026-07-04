"use client";

import { profile, liveProjects, progressProjects } from "@/lib/projects";
import { useLang } from "./LanguageProvider";
import { SECTIONS } from "@/lib/i18n";

export function Hero() {
  const { lang, t } = useLang();

  return (
    <header
      id="top"
      className="relative z-10 pt-[clamp(7rem,16vh,11rem)] pb-[clamp(3rem,8vh,6rem)]"
    >
      <p className="rise font-mono text-xs uppercase tracking-[0.22em] text-accent-dim">
        {profile.role[lang]}
      </p>

      <h1 className="rise mt-6 text-[clamp(0.75rem,9vw,3.5rem)] font-medium leading-[0.95] tracking-tight">
        {profile.name}
      </h1>

      <p
        className="rise mt-8 max-w-[46ch] text-lg leading-relaxed text-muted sm:text-xl"
        style={{ animationDelay: "80ms" }}
      >
        {profile.intro[lang]}
      </p>

      <div
        className="rise mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs text-muted"
        style={{ animationDelay: "160ms" }}
      >
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-300 hover:text-text"
        >
          GitHub ↗
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-300 hover:text-text"
        >
          LinkedIn ↗
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="transition-colors duration-300 hover:text-text"
        >
          {profile.email}
        </a>
      </div>

      <div
        className="rise mt-12 flex gap-8 border-t border-line pt-6 font-mono text-xs uppercase tracking-[0.15em] text-faint"
        style={{ animationDelay: "240ms" }}
      >
        <a
          href={`#${SECTIONS.projects}`}
          className="flex items-center gap-2 transition-colors hover:text-accent"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {liveProjects.length} {t.hero.onLive}
        </a>
        <a
          href={`#${SECTIONS.projects}`}
          className="flex items-center gap-2 transition-colors hover:text-progress"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-progress" />
          {progressProjects.length} {t.hero.inProgress}
        </a>
      </div>
    </header>
  );
}
