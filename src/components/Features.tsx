import ScrollReveal from './ScrollReveal'

const FEATURES = [
  {
    icon: '🤖',
    title: 'Multi-Agent Selection',
    description:
      'Switch between Claude Code, Grok Build, OpenCode, and more. Pick the best model for each task without vendor lock-in.',
  },
  {
    icon: '🐳',
    title: 'Isolated Docker Execution',
    description:
      'Every agent runs in its own container with per-agent APIs. Secure, isolated, and reproducible — no cross-contamination.',
  },
  {
    icon: '🔗',
    title: 'Deep GitHub Integration',
    description:
      'Connect repos, auto-commit, open PRs. Agents work directly on your codebase with full git history and branch management.',
  },
  {
    icon: '⚡',
    title: 'Real-Time Visibility',
    description:
      'Watch agents think, code, and refactor live. Stream logs, view diffs, and inspect file changes as they happen via WebSockets.',
  },
  {
    icon: '💬',
    title: 'Interactive Agent Chat',
    description:
      'Chat directly with your agents. Give feedback, steer direction, approve changes, or jump in to pair-program mid-task.',
  },
  {
    icon: '📐',
    title: 'Kubernetes-Native Scaling',
    description:
      'Built on K8s with KEDA autoscaling. Spin up one agent or one hundred — the infrastructure scales to meet demand.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative z-10 py-28 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-accent-light mb-4">
            Features
          </span>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.02em] mb-5">
            Everything you need to
            <br />
            run AI agents in production
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="text-lg text-text-secondary max-w-[560px] leading-relaxed mb-16">
            DeepNano handles orchestration, isolation, and real-time visibility so you can focus on building.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <ScrollReveal key={feature.title}>
              <div className="group relative bg-bg-card border border-border rounded-[20px] p-8 transition-all duration-200 hover:bg-bg-card-hover hover:border-border-light hover:-translate-y-0.5 hover:shadow-[0_1px_2px_rgba(0,0,0,0.4),0_4px_24px_rgba(0,0,0,0.3),0_0_40px_rgba(108,92,231,0.08)]">
                {/* Top shimmer line on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 bg-accent/10 border border-accent/15">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold tracking-[-0.01em] mb-2">{feature.title}</h3>
                <p className="text-[0.95rem] text-text-secondary leading-relaxed">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
