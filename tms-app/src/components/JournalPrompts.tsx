import { JournalPrompt } from "@/data/tms";

export function JournalPrompts({ prompts }: { prompts: JournalPrompt[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {prompts.map((prompt) => (
        <div
          key={prompt.title}
          className="rounded-2xl border border-zinc-200 bg-gradient-to-br from-white via-white to-zinc-100 p-4 dark:border-zinc-800 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800"
        >
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            {prompt.title}
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{prompt.prompt}</p>
        </div>
      ))}
    </div>
  );
}
