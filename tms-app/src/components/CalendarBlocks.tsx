import { CalendarBlock } from "@/data/tms";

export function CalendarBlocks({ blocks }: { blocks: CalendarBlock[] }) {
  return (
    <div className="space-y-4">
      {blocks.map((block) => (
        <div
          key={block.name}
          className="rounded-2xl border border-zinc-200 bg-white/70 p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2 text-sm">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{block.name}</h3>
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
              {block.time}
            </span>
          </div>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{block.intent}</p>
          <ul className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            {block.checklist.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
