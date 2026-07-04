"use client";

import { profile } from "@/lib/projects";
import { useLang } from "./LanguageProvider";
import { Section } from "./Section";
import { SECTIONS } from "@/lib/i18n";

export function AboutSection() {
  const { lang, t } = useLang();
  return (
    <Section id={SECTIONS.about} label={t.sections.about}>
      <p className="rise max-w-[60ch] text-lg leading-relaxed text-muted">
        {profile.about[lang]}
      </p>
    </Section>
  );
}
