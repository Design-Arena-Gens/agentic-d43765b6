import { PerformanceMetric } from "@/data/tms";

const sentimentStyles: Record<PerformanceMetric["sentiment"], string> = {
  positive: "text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10",
  neutral: "text-amber-500 bg-amber-50 dark:bg-amber-500/10",
  negative: "text-rose-500 bg-rose-50 dark:bg-rose-500/10",
};

export function KpiCard({ metric }: { metric: PerformanceMetric }) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white/80 p-4 shadow-sm shadow-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/70 dark:shadow-black/30">
      <span className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
        {metric.label}
      </span>
      <span className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
        {metric.primary}
      </span>
      <span
        className={`w-fit rounded-full px-3 py-1 text-xs font-medium ${sentimentStyles[metric.sentiment]}`}
      >
        {metric.secondary}
      </span>
    </div>
  );
}
