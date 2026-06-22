import ScrollReveal from './ScrollReveal'
import TerminalPreview from './TerminalPreview'

export default function Hero() {
  return (
    <section className="relative z-10 pt-40 pb-24 md:pt-44 md:pb-28 text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-accent-light mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-green shadow-[0_0_8px_rgba(140,241,249,0.4)] animate-pulse-dot" />
          Now in Early Access
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(2.8rem,7vw,5.5rem)] font-black leading-[1.05] tracking-[-0.03em] mb-6 animate-fade-in-up">
          Cloud Agents for
          <br />
          <span className="bg-gradient-to-r from-accent via-cyan to-green bg-clip-text text-transparent">
            Coding — Bring Your Own Keys
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-[clamp(1.1rem,2vw,1.3rem)] text-text-secondary max-w-[640px] mx-auto mb-10 leading-relaxed animate-fade-in-up">
          Pick your agent, connect your repo, and ship faster. DeepNano runs Claude Code,
          Grok Build, OpenCode, and more — in secure isolated containers with real-time
          visibility and full GitHub integration. No markup on your API keys.
        </p>

        {/* CTAs */}
        <div className="flex gap-4 justify-center flex-wrap animate-fade-in-up">
          <a
            href="https://dash.deepnano.dev"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-accent rounded-[16px] no-underline transition-all duration-200 shadow-[0_0_24px_rgba(192,68,238,0.3),0_4px_16px_rgba(192,68,238,0.3)] hover:bg-[#d670f5] hover:-translate-y-px hover:shadow-[0_0_36px_rgba(192,68,238,0.3),0_6px_24px_rgba(192,68,238,0.4)]"
          >
            Get Started Free
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-text-primary border border-border-light rounded-[16px] bg-transparent no-underline transition-all duration-200 hover:border-accent-light hover:bg-accent/8 hover:shadow-[0_0_20px_rgba(192,68,238,0.1)]"
          >
            See Pricing
          </a>
        </div>

        {/* Terminal Preview */}
        <ScrollReveal>
          <TerminalPreview />
        </ScrollReveal>
      </div>
    </section>
  )
}
