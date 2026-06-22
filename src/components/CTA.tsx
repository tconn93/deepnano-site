import ScrollReveal from './ScrollReveal'

export default function CTA() {
  return (
    <section className="relative z-10 py-36 text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.02em] mb-4">
            Ready to ship faster?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="text-lg text-text-secondary max-w-[500px] mx-auto mb-9">
            Deploy your first AI coding agent in under a minute. No infrastructure to manage.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://dash.deepnano.dev"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-accent rounded-[16px] no-underline transition-all duration-200 shadow-[0_0_24px_rgba(108,92,231,0.3),0_4px_16px_rgba(108,92,231,0.3)] hover:bg-[#7c6ff0] hover:-translate-y-px hover:shadow-[0_0_36px_rgba(108,92,231,0.3),0_6px_24px_rgba(108,92,231,0.4)]"
            >
              Start Building
            </a>
            <a
              href="mailto:tyler@tyler.ag"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-text-primary border border-border-light rounded-[16px] bg-transparent no-underline transition-all duration-200 hover:border-accent-light hover:bg-accent/8 hover:shadow-[0_0_20px_rgba(108,92,231,0.1)]"
            >
              Talk to Sales
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
