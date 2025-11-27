import { Protocol } from "@/data/tms";

export function ProtocolGrid({ protocols }: { protocols: Protocol[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {protocols.map((protocol) => (
        <div
          key={protocol.name}
          className="rounded-2xl border border-zinc-200 bg-white/70 p-4 dark:border-zinc-800 dark:bg-zinc-900/70"
        >
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
            {protocol.name}
          </h3>
          <p className="mt-2 text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Trigger
          </p>
          <p className="text-sm text-zinc-700 dark:text-zinc-300">{protocol.trigger}</p>
          <p className="mt-3 text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Pattern break
          </p>
          <p className="text-sm text-zinc-700 dark:text-zinc-300">{protocol.patternBreak}</p>
          <p className="mt-3 text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Accountability
          </p>
          <p className="text-sm text-zinc-700 dark:text-zinc-300">{protocol.accountability}</p>
        </div>
      ))}
    </div>
  );
}
