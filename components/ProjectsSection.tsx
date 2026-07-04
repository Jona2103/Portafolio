"use client";

import { liveProjects, progressProjects } from "@/lib/projects";
import { useLang } from "./LanguageProvider";
import { Section } from "./Section";
import { Carousel } from "./Carousel";
import { SECTIONS } from "@/lib/i18n";

export function ProjectsSection() {
  const { t } = useLang();
  return (
    <div id={SECTIONS.projects} className="flex scroll-mt-24 flex-col gap-24">
      <Section label={t.sections.live} count={liveProjects.length}>
        <Carousel projects={liveProjects} startIndex={0} />
      </Section>

      <Section label={t.sections.progress} count={progressProjects.length}>
        <Carousel projects={progressProjects} startIndex={liveProjects.length} />
      </Section>
    </div>
  );
}
