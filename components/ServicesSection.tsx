"use client";

import { services } from "@/lib/projects";
import { useLang } from "./LanguageProvider";
import { Section } from "./Section";
import { SECTIONS } from "@/lib/i18n";

export function ServicesSection() {
  const { lang, t } = useLang();
  return (
    <Section id={SECTIONS.services} label={t.sections.services} count={services.length}>
      <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
        {services.map((service, i) => (
          <div
            key={service.title.es}
            style={{ animationDelay: `${i * 70}ms` }}
            className="rise group bg-bg p-6 transition-colors duration-500 hover:bg-surface/50 sm:p-8"
          >
            <span className="font-mono text-xs tabular-nums text-faint transition-colors group-hover:text-accent-dim">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 text-xl font-medium tracking-tight text-text">
              {service.title[lang]}
            </h3>
            <p className="mt-2 max-w-[42ch] text-[0.95rem] leading-relaxed text-muted">
              {service.description[lang]}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
