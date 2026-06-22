import ScrollReveal from './ScrollReveal'

const STEPS = [
  {
    title: 'Connect Your GitHub Repository',
    description:
      'Link your repo with one click. DeepNano securely clones it into an isolated cloud environment and keeps everything in sync across branches and PRs.',
  },
  {
    title: 'Choose Your AI Agent',
    description:
      'Select from Claude Code (Anthropic), Grok Build (xAI), OpenCode (open source), or bring your own custom agent. Each runs in its own secure Docker container with dedicated resources.',
  },
  {
    title: 'Assign Tasks & Collaborate',
    description:
      'Describe tasks naturally in chat. Watch agents think, code, and execute in real-time — live streams, code diffs, terminal output, and easy human intervention at any step.',
  },
  {
    title: 'Review, Approve & Ship',
    description:
      'Agents propose changes via pull requests. Review diffs, approve with one click, merge, and deploy. Full CI/CD compatibility ensures it fits your existing workflow.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative z-10 py-28 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-accent-light mb-4">
            How It Works
          </span>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.02em] mb-16">
            From zero to deployed agent
            <br />
            in under a minute
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-8">
          {STEPS.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 100}>
              <div className="group flex gap-7 items-start p-8 bg-bg-card border border-border rounded-[20px] transition-all duration-200 hover:border-border-light hover:shadow-[0_1px_2px_rgba(0,0,0,0.4),0_4px_24px_rgba(0,0,0,0.3)] max-sm:flex-col max-sm:gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/[0.12] border border-accent/20 flex items-center justify-center font-extrabold text-lg text-accent-light">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-[-0.01em] mb-1.5">{step.title}</h3>
                  <p className="text-[0.95rem] text-text-secondary leading-relaxed">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="text-center text-text-muted text-sm mt-12 font-medium">
            No local setup. No hardware limits. Agents work while you focus on higher-level work.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
