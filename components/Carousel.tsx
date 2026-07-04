"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { Project } from "@/lib/projects";
import { useLang } from "./LanguageProvider";
import { ProjectCard } from "./ProjectCard";

export function Carousel({
  projects,
  startIndex,
}: {
  projects: Project[];
  startIndex: number;
}) {
  const { lang, t } = useLang();

  // Referencia estable: opciones nuevas en cada render harían que embla
  // re-inicialice en bucle y deje de responder a los controles.
  const options = useMemo(
    () => ({ align: "start", loop: true, containScroll: "trimSnaps" }) as const,
    [],
  );
  const [emblaRef, embla] = useEmblaCarousel(options);

  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelected(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    setSnaps(embla.scrollSnapList());
    onSelect();
    embla.on("select", onSelect);
    embla.on("reInit", onSelect);
    return () => {
      embla.off("select", onSelect);
      embla.off("reInit", onSelect);
    };
  }, [embla, onSelect]);

  // El ancho del contenido cambia con el idioma → re-mide los snaps.
  useEffect(() => {
    embla?.reInit();
  }, [embla, lang]);

  const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);
  const scrollTo = useCallback((i: number) => embla?.scrollTo(i), [embla]);

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carousel"
      aria-label={t.a11y.carousel}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y -ml-4 sm:-ml-6">
          {projects.map((project, i) => (
            <div
              key={`${project.name}-${i}`}
              className="min-w-0 shrink-0 grow-0 basis-[88%] pl-4 sm:basis-[55%] sm:pl-6 lg:basis-[46%]"
            >
              <ProjectCard project={project} index={startIndex + i} />
            </div>
          ))}
        </div>
      </div>

      {/* controls */}
      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-2">
          {snaps.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`${i + 1}`}
              aria-current={i === selected}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === selected
                  ? "w-6 bg-accent"
                  : "w-1.5 bg-line-bright hover:bg-faint"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <CtrlButton onClick={scrollPrev} label={t.actions.prev}>
            ←
          </CtrlButton>
          <CtrlButton onClick={scrollNext} label={t.actions.next}>
            →
          </CtrlButton>
        </div>
      </div>
    </div>
  );
}

function CtrlButton({
  onClick,
  label,
  children,
}: {
  onClick: () => void;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-line font-mono text-sm text-muted transition-colors duration-300 hover:border-line-bright hover:text-text"
    >
      {children}
    </button>
  );
}
