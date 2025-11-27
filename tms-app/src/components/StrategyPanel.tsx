import { Strategy } from "@/data/tms";

const qualityStyles: Record<Strategy["executionQuality"], string> = {
  dialed: "bg-emerald-100 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300",
  watch: "bg-amber-100 text-amber-700 border border-amber-200 dark:bg-amber-500/10 dark:text-amber-200",
  broken: "bg-rose-100 text-rose-700 border border-rose-200 dark:bg-rose-500/10 dark:text-rose-300",
};

export function StrategyPanel({ strategy }: { strategy: Strategy }) {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-white/80 p-5 shadow-sm shadow-zinc-100 transition hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/70 dark:shadow-black/30">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
            {strategy.name}
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            {strategy.objective}
          </p>
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${qualityStyles[strategy.executionQuality]}`}>
          {strategy.executionQuality.toUpperCase()}
        </span>
      </div>
      <dl className="mt-4 grid grid-cols-2 gap-4 text-xs text-zinc-500 dark:text-zinc-400 sm:grid-cols-4">
        <div>
          <dt className="font-medium text-zinc-500 dark:text-zinc-400">Hold</dt>
          <dd className="text-sm text-zinc-900 dark:text-zinc-100">{strategy.holdingPeriod}</dd>
        </div>
        <div>
          <dt className="font-medium text-zinc-500 dark:text-zinc-400">Conviction</dt>
          <dd className="text-sm text-zinc-900 dark:text-zinc-100">{strategy.conviction}%</dd>
        </div>
        <div>
          <dt className="font-medium text-zinc-500 dark:text-zinc-400">Capital</dt>
          <dd className="text-sm text-zinc-900 dark:text-zinc-100">{strategy.capitalAllocation}</dd>
        </div>
        <div>
          <dt className="font-medium text-zinc-500 dark:text-zinc-400">Status</dt>
          <dd className="text-sm text-zinc-900 dark:text-zinc-100">{strategy.recentOutcome}</dd>
        </div>
      </dl>
      <div className="mt-5 grid gap-3 text-sm text-zinc-600 dark:text-zinc-300">
        <div>
          <p className="font-semibold text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Key Conditions
          </p>
          <ul className="mt-2 space-y-1">
            {strategy.conditions.map((condition) => (
              <li key={condition} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                <span>{condition}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Corrective Action
          </p>
          <p>{strategy.correctiveAction}</p>
        </div>
      </div>
    </article>
  );
}
