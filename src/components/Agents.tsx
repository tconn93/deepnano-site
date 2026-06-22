import ScrollReveal from './ScrollReveal'
import claudeCodeImg from '../media/claude-code.png'
import grokBuildImg from '../media/grok-build.png'
import opencodeImg from '../media/opencode.png'

const AGENTS = [
  { img: claudeCodeImg, label: 'Claude Code', sub: 'Anthropic — high-reasoning, production-grade' },
  { img: grokBuildImg, label: 'Grok Build', sub: 'xAI — fast, creative, real-time knowledge' },
  { img: opencodeImg, label: 'OpenCode', sub: 'Open Source — flexible, community-driven' },
  { initials: '+', label: 'Custom Agent', sub: 'Bring Your Own — any OpenAI-compatible endpoint or self-hosted model', bg: 'bg-white/6', color: 'text-text-secondary' },
]

export default function Agents() {
  return (
    <section id="agents" className="relative z-10 py-28 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-accent-light mb-4">
            Supported Agents
          </span>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.02em] mb-5">
            Bring your favorite
            <br />
            coding agent
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="text-lg text-text-secondary max-w-[620px] leading-relaxed mb-16">
            First-class, zero-markup support for the leading AI coding agents.
            Connect your own API keys and switch models instantly. More agents
            and providers added regularly.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {AGENTS.map((agent) => (
            <ScrollReveal key={agent.label}>
              <div className="group bg-bg-card border border-border rounded-[20px] py-7 px-5 text-center transition-all duration-200 hover:border-border-light hover:-translate-y-0.5 hover:shadow-[0_1px_2px_rgba(0,0,0,0.4),0_4px_24px_rgba(0,0,0,0.3)]">
                {'img' in agent ? (
                  <img
                    src={agent.img}
                    alt={agent.label}
                    className="w-[52px] h-[52px] rounded-xl mx-auto mb-3.5 object-contain"
                  />
                ) : (
                  <div
                    className={`w-[52px] h-[52px] rounded-xl mx-auto mb-3.5 flex items-center justify-center text-2xl font-extrabold ${agent.bg} ${agent.color}`}
                  >
                    {agent.initials}
                  </div>
                )}
                <h4 className="text-[0.95rem] font-semibold mb-1">{agent.label}</h4>
                <span className="text-xs text-text-muted">{agent.sub}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="text-center text-text-muted text-sm mt-12 font-medium max-w-[640px] mx-auto leading-relaxed">
            Full BYOK freedom: Pay your provider directly. No platform surcharges.
            Use the best model for each task — cheap/fast for volume, frontier for
            complex reasoning.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
