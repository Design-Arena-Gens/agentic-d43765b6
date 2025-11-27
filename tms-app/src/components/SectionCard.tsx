import { ReactNode } from "react";

interface SectionCardProps {
  title: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
}

export function SectionCard({ title, description, action, children }: SectionCardProps) {
  return (
    <section className="rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm shadow-zinc-100 backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/80 dark:shadow-black/30">
      <header className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            {title}
          </h2>
          {description ? (
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
          ) : null}
        </div>
        {action ? <div className="shrink-0 text-sm text-zinc-500">{action}</div> : null}
      </header>
      <div className="space-y-4 text-sm text-zinc-700 dark:text-zinc-300">{children}</div>
    </section>
  );
}
