import {
  calendar,
  experiments,
  focusQuestions,
  focusSignals,
  guardrails,
  integrations,
  journalPrompts,
  performanceMetrics,
  protocols,
  scenarioPlays,
  strategies,
} from "@/data/tms";
import { CalendarBlocks } from "@/components/CalendarBlocks";
import { ExperimentList } from "@/components/ExperimentList";
import { FocusSignals } from "@/components/FocusSignals";
import { GuardrailList } from "@/components/GuardrailList";
import { IntegrationMatrix } from "@/components/IntegrationMatrix";
import { JournalPrompts } from "@/components/JournalPrompts";
import { KpiCard } from "@/components/KpiCard";
import { ProtocolGrid } from "@/components/ProtocolGrid";
import { ScenarioDeck } from "@/components/ScenarioDeck";
import { SectionCard } from "@/components/SectionCard";
import { StrategyPanel } from "@/components/StrategyPanel";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-sky-50 pb-16 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-900">
      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.12),_transparent_45%)]" />
        <header className="mb-12 flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-sky-600 dark:text-sky-400">
                Trading Management System
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
                Psychological prosthetic for discretionary traders
              </h1>
            </div>
            <div className="rounded-2xl border border-sky-200 bg-sky-50 px-5 py-3 text-sm text-sky-700 shadow-sm dark:border-sky-900/60 dark:bg-sky-900/30 dark:text-sky-200">
              <p className="font-semibold uppercase tracking-wide">Operating condition</p>
              <p className="mt-1 text-xs text-sky-600 dark:text-sky-200/80">
                Objective: protect edge through structured cognition + guardrail enforcement
              </p>
            </div>
          </div>
          <p className="max-w-3xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
            The TMS externalises memory, discipline, and risk processes so outcomes can be
            evaluated without bias. It fuses execution telemetry, scenario planning, and
            psychological capital tracking into one command surface designed for high-agency
            traders operating across brokers and regimes.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-12">
          <SectionCard
            title="Performance telemetry"
            description="Current read on capital efficiency, risk exposure, and psychological bandwidth"
          >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {performanceMetrics.map((metric) => (
                <KpiCard key={metric.label} metric={metric} />
              ))}
            </div>
          </SectionCard>

          <SectionCard
            title="Today\'s focus signals"
            description="Forces attention toward the levers that shift expectancy the most"
          >
            <FocusSignals signals={focusSignals} />
          </SectionCard>

          <SectionCard
            title="Active strategy desk"
            description="Execution state and maintenance routines across concurrent playbooks"
          >
            <div className="grid gap-4 lg:grid-cols-2">
              {strategies.map((strategy) => (
                <StrategyPanel key={strategy.name} strategy={strategy} />
              ))}
            </div>
          </SectionCard>

          <SectionCard
            title="Risk guardrails"
            description="Hard boundaries that protect capital and discipline when noise hits"
          >
            <GuardrailList guardrails={guardrails} />
          </SectionCard>

          <SectionCard
            title="Scenario deck"
            description="Pre-planned responses for the regimes most likely to surface this week"
          >
            <ScenarioDeck scenarios={scenarioPlays} />
          </SectionCard>

          <SectionCard
            title="Psychological protocols"
            description="Codified pattern breaks that prevent emotional hijack"
          >
            <ProtocolGrid protocols={protocols} />
          </SectionCard>

          <SectionCard
            title="Rhythm of operations"
            description="Structured blocks keep cognition, execution, and review in sync"
          >
            <CalendarBlocks blocks={calendar} />
          </SectionCard>

          <SectionCard
            title="Experiments in flight"
            description="Edge renewal loops with explicit hypotheses and kill switches"
          >
            <ExperimentList experiments={experiments} />
          </SectionCard>

          <SectionCard
            title="Integrations"
            description="System coverage across brokers, analytics, and knowledge base"
          >
            <IntegrationMatrix integrations={integrations} />
          </SectionCard>

          <SectionCard
            title="Cognitive prompts"
            description="Daily journaling questions to separate signal from noise"
          >
            <JournalPrompts prompts={journalPrompts} />
          </SectionCard>

          <SectionCard
            title="Evening reflection anchors"
            description="Keep the system self-healing and future focused"
          >
            <ul className="grid gap-3 text-sm text-zinc-700 dark:text-zinc-300 sm:grid-cols-3">
              {focusQuestions.map((question) => (
                <li
                  key={question}
                  className="rounded-2xl border border-zinc-200 bg-white/70 p-4 dark:border-zinc-800 dark:bg-zinc-900/70"
                >
                  {question}
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}
