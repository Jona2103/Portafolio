"use client";

export function Section({
  id,
  label,
  count,
  children,
}: {
  id?: string;
  label: string;
  count?: number;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative z-10 scroll-mt-24">
      <header className="rise flex items-baseline justify-between border-b border-line-bright pb-3">
        <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-text">
          {label}
        </h2>
        {count !== undefined && (
          <span className="font-mono text-xs tabular-nums text-faint">
            {String(count).padStart(2, "0")}
          </span>
        )}
      </header>

      <div className="mt-8">{children}</div>
    </section>
  );
}
