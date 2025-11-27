import { Integration } from "@/data/tms";

const statusStyles: Record<Integration["syncStatus"], string> = {
  live: "text-emerald-500",
  manual: "text-amber-500",
  planned: "text-sky-500",
};

export function IntegrationMatrix({ integrations }: { integrations: Integration[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white/70 dark:border-zinc-800 dark:bg-zinc-900/80">
      <table className="min-w-full divide-y divide-zinc-200 text-sm dark:divide-zinc-800">
        <thead className="bg-zinc-50/80 text-left uppercase text-xs tracking-wide text-zinc-500 dark:bg-zinc-900/60 dark:text-zinc-400">
          <tr>
            <th className="px-4 py-3">Integration</th>
            <th className="px-4 py-3">Scope</th>
            <th className="px-4 py-3">Sync</th>
            <th className="px-4 py-3">Reliability</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
          {integrations.map((integration) => (
            <tr key={integration.name} className="bg-white/60 text-zinc-700 hover:bg-zinc-100/60 dark:bg-transparent dark:text-zinc-300 dark:hover:bg-zinc-800/50">
              <td className="px-4 py-4 font-medium text-zinc-900 dark:text-zinc-100">
                {integration.name}
              </td>
              <td className="px-4 py-4">{integration.scope}</td>
              <td className={`px-4 py-4 font-semibold ${statusStyles[integration.syncStatus]}`}>
                {integration.syncStatus.toUpperCase()}
              </td>
              <td className="px-4 py-4">{integration.reliability}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
