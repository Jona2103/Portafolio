"use client";

import Image from "next/image";
import type { Project } from "@/lib/projects";
import { useLang } from "./LanguageProvider";
import { StatusBadge } from "./StatusBadge";

function ProjectPreview({ project }: { project: Project }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-md border border-line bg-bg">
      {project.image ? (
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 640px) 88vw, (max-width: 1024px) 55vw, 46vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
        />
      ) : (
        // Placeholder cuando aún no hay imagen: se ve intencional, no roto.
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(120%_120%_at_20%_0%,var(--color-surface),var(--color-bg))]">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
            {"// preview"}
          </span>
        </div>
      )}
    </div>
  );
}

function ArrowLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors duration-300 hover:text-text focus-visible:text-text"
    >
      {children}
      <span
        aria-hidden
        className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
      >
        ↗
      </span>
    </a>
  );
}

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { lang, t } = useLang();
  const num = String(index + 1).padStart(2, "0");

  return (
    <article className="group flex h-full flex-col justify-between rounded-lg border border-line bg-surface/40 p-6 transition-colors duration-500 hover:border-line-bright sm:p-7">
      <div>
        <div className="flex items-start justify-between gap-4">
          <span className="select-none font-mono text-xs tabular-nums text-faint transition-colors duration-500 group-hover:text-accent-dim">
            {num}
          </span>
          <StatusBadge status={project.status} />
        </div>

        <div className="mt-4">
          <ProjectPreview project={project} />
        </div>

        <div className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-2xl font-medium tracking-tight text-text">
            {project.name}
          </h3>
          <span className="font-mono text-xs text-faint">{project.year}</span>
        </div>

        <p className="mt-1 font-mono text-sm text-accent-dim">
          {project.tagline[lang]}
        </p>

        <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">
          {project.description[lang]}
        </p>
      </div>

      <div className="mt-6">
        <ul className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[0.7rem] text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex items-center gap-4">
          {project.url && (
            <ArrowLink href={project.url}>{t.actions.viewLive}</ArrowLink>
          )}
          {project.repo && (
            <ArrowLink href={project.repo}>{t.actions.code}</ArrowLink>
          )}
        </div>
      </div>
    </article>
  );
}
