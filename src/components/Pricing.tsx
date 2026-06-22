import ScrollReveal from './ScrollReveal'

const TIERS = [
  {
    name: 'Free',
    desc: 'Try it out, no credit card required',
    price: 'Free',
    period: 'No time limit',
    badge: 'BYOK',
    features: [
      '1 concurrent cloud agent',
      '2 tasks per day',
      'Bring Your Own API Keys',
      'Basic real-time dashboard & code viewer',
      'GitHub integration (private repos)',
    ],
    cta: 'Get Started Free',
    href: 'https://dash.deepnano.dev',
    featured: false,
  },
  {
    name: 'Starter',
    desc: 'For individuals & light experimentation',
    price: '$5',
    period: 'per month',
    badge: 'BYOK',
    features: [
      '2 concurrent cloud agents',
      '5 tasks per day',
      'Bring Your Own API Keys',
      'Basic real-time dashboard & code viewer',
      'GitHub integration (private repos)',
      'Community support (Discord / docs)',
    ],
    cta: 'Get Started',
    href: 'https://dash.deepnano.dev',
    featured: false,
  },
  {
    name: 'Pro',
    desc: 'For serious indie developers & small teams',
    price: '$15',
    period: 'per month',
    badge: 'BYOK',
    features: [
      '5 concurrent cloud agents',
      '15 tasks per day',
      'Bring Your Own API Keys',
      'Priority support (email + Discord priority)',
      'Advanced agent configuration',
      'Custom prompts, roles, longer sessions',
      'Usage analytics & export',
    ],
    cta: 'Start Free Trial',
    href: 'https://dash.deepnano.dev',
    featured: true,
  },
  {
    name: 'Enterprise',
    desc: 'For teams & organizations',
    price: 'Custom',
    period: 'Contact sales for pricing',
    features: [
      'Unlimited agents & tasks',
      'Dedicated instances / VPC',
      'Custom token volumes & volume discounts',
      'SSO, SCIM, advanced compliance (SOC2, GDPR)',
      'On-prem / private cloud options',
      'Dedicated success manager & SLA',
      'Custom integrations & white-glove onboarding',
    ],
    cta: 'Contact Sales',
    href: 'mailto:tyler@tyler.ag',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative z-10 py-28 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-accent-light mb-4">
            Pricing
          </span>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.02em] mb-5">
            Simple, transparent pricing
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="text-lg text-text-secondary max-w-[560px] leading-relaxed mb-16">
            Bring your own keys or go fully managed. Scale when you're ready.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
          {TIERS.map((tier) => (
            <ScrollReveal key={tier.name}>
              <div
                className={`relative bg-bg-card border rounded-[28px] p-10 md:p-8 transition-all duration-200 h-full flex flex-col ${
                  tier.featured
                    ? 'border-accent shadow-[0_0_40px_rgba(108,92,231,0.12)] bg-bg-card-hover'
                    : 'border-border'
                }`}
              >
                {/* Featured gradient border */}
                {tier.featured && (
                  <div className="absolute inset-[-1px] rounded-[28px] bg-gradient-to-br from-accent/40 to-cyan/30 pointer-events-none [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude]" />
                )}

                <div className="flex gap-2 flex-wrap mb-5">
                  {tier.featured && (
                    <span className="inline-block px-3 py-1 rounded-full bg-green/10 border border-green/20 text-xs font-semibold text-green">
                      Most Popular
                    </span>
                  )}
                  {tier.badge && (
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-semibold text-accent-light">
                      {tier.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <p className="text-sm text-text-secondary mb-5">{tier.desc}</p>

                <div className="text-5xl font-black tracking-[-0.03em] mt-2 mb-1">{tier.price}</div>
                <p className="text-sm text-text-muted mb-7">{tier.period}</p>

                <ul className="list-none mb-8 space-y-2 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-text-secondary py-1">
                      <span className="text-green font-bold flex-shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={tier.href}
                  className={`inline-flex items-center justify-center w-full gap-2 px-6 py-3 rounded-xl font-semibold text-sm no-underline transition-all duration-200 ${
                    tier.featured
                      ? 'bg-accent text-white shadow-[0_0_24px_rgba(108,92,231,0.3),0_4px_16px_rgba(108,92,231,0.3)] hover:bg-[#7c6ff0] hover:-translate-y-px hover:shadow-[0_0_36px_rgba(108,92,231,0.3),0_6px_24px_rgba(108,92,231,0.4)]'
                      : 'text-text-primary border border-border-light bg-transparent hover:border-accent-light hover:bg-accent/8 hover:shadow-[0_0_20px_rgba(108,92,231,0.1)]'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
