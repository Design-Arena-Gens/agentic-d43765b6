import { Guardrail } from "@/data/tms";

const guardrailStatus: Record<Guardrail["status"], string> = {
  "in-bounds": "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300",
  "at-risk": "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-200",
  breached: "bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300",
};

export function GuardrailList({ guardrails }: { guardrails: Guardrail[] }) {
  return (
    <div className="space-y-4">
      {guardrails.map((guardrail) => (
        <div
          key={guardrail.name}
          className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-4 dark:border-zinc-800 dark:bg-zinc-900/60"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                {guardrail.name}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Limit: {guardrail.limit}</p>
            </div>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${guardrailStatus[guardrail.status]}`}
            >
              {guardrail.status.toUpperCase()}
            </span>
          </div>
          <div className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
            <p>
              Current: <span className="font-medium text-zinc-900 dark:text-zinc-100">{guardrail.current}</span>
            </p>
            <p className="mt-2 text-xs uppercase text-zinc-500 dark:text-zinc-400">Contingency</p>
            <p className="text-sm">{guardrail.contingency}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
