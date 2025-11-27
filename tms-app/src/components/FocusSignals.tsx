export function FocusSignals({ signals }: { signals: { title: string; detail: string }[] }) {
  return (
    <div className="grid gap-3">
      {signals.map((signal) => (
        <div
          key={signal.title}
          className="rounded-2xl border border-zinc-200 bg-white/70 p-4 dark:border-zinc-800 dark:bg-zinc-900/70"
        >
          <p className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            {signal.title}
          </p>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{signal.detail}</p>
        </div>
      ))}
    </div>
  );
}
