"use client";

import type { ProjectStatus } from "@/lib/projects";
import { useLang } from "./LanguageProvider";

const config = {
  live: { dot: "bg-accent", text: "text-accent", pulse: true },
  progress: { dot: "bg-progress", text: "text-progress", pulse: false },
} as const;

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const { t } = useLang();
  const c = config[status];
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] ${c.text}`}
    >
      <span className="relative flex h-1.5 w-1.5">
        {c.pulse && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
        )}
        <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${c.dot}`} />
      </span>
      {t.status[status]}
    </span>
  );
}
