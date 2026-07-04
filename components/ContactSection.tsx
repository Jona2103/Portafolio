"use client";

import { profile } from "@/lib/projects";
import { useLang } from "./LanguageProvider";
import { Section } from "./Section";
import { SECTIONS } from "@/lib/i18n";

export function ContactSection() {
  const { t } = useLang();
  return (
    <Section id={SECTIONS.contact} label={t.sections.contact}>
      <div className="rise">
        <p className="max-w-[46ch] text-lg leading-relaxed text-muted">
          {t.contact.lead}
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="group mt-8 inline-flex items-center gap-3 text-[clamp(1.75rem,5vw,3rem)] font-medium tracking-tight text-text transition-colors hover:text-accent"
        >
          {profile.email}
          <span
            aria-hidden
            className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:-translate-y-1"
          >
            ↗
          </span>
        </a>

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs text-muted">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-text"
          >
            GitHub ↗
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-text"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </Section>
  );
}
