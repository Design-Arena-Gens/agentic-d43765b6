import { Experiment } from "@/data/tms";

export function ExperimentList({ experiments }: { experiments: Experiment[] }) {
  return (
    <div className="space-y-4">
      {experiments.map((experiment) => (
        <div
          key={experiment.focus}
          className="rounded-2xl border border-dashed border-zinc-300 bg-white/60 p-4 dark:border-zinc-700 dark:bg-zinc-900/60"
        >
          <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            {experiment.focus}
          </h3>
          <p className="mt-2 text-base font-medium text-zinc-900 dark:text-zinc-100">
            {experiment.hypothesis}
          </p>
          <dl className="mt-4 grid gap-3 text-sm text-zinc-600 dark:text-zinc-300 sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase text-zinc-500 dark:text-zinc-400">Control</dt>
              <dd>{experiment.control}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase text-zinc-500 dark:text-zinc-400">Measurement</dt>
              <dd>{experiment.measurement}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase text-zinc-500 dark:text-zinc-400">Sunset</dt>
              <dd>{experiment.sunsetCriteria}</dd>
            </div>
          </dl>
        </div>
      ))}
    </div>
  );
}
