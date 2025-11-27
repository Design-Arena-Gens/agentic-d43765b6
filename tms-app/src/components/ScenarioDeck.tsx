import { ScenarioPlay } from "@/data/tms";

export function ScenarioDeck({ scenarios }: { scenarios: ScenarioPlay[] }) {
  return (
    <div className="space-y-4">
      {scenarios.map((scenario) => (
        <article
          key={scenario.label}
          className="rounded-2xl border border-zinc-200 bg-white/80 p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70"
        >
          <header className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                {scenario.label}
              </h3>
              <p className="mt-1 text-base font-medium text-zinc-900 dark:text-zinc-100">
                {scenario.thesis}
              </p>
            </div>
          </header>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Trigger map
              </p>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                {scenario.triggers.map((trigger) => (
                  <li key={trigger} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <span>{trigger}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Playbook
              </p>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                {scenario.playbook.map((step) => (
                  <li key={step} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <footer className="mt-4 rounded-xl bg-zinc-100/80 p-3 text-xs text-zinc-600 dark:bg-zinc-800/70 dark:text-zinc-300">
            Failure condition: {scenario.failState}
          </footer>
        </article>
      ))}
    </div>
  );
}
