const SECTIONS = [
  {
    num: '1',
    title: 'Introduction',
    body: 'This Privacy Policy explains how DeepNano ("we", "us") collects, uses, and protects your information when you use the Service.',
  },
  {
    num: '2',
    title: 'Information We Collect',
    body: [
      'Account Information: Name, email, payment details (processed by Stripe or similar).',
      'Repository & Code Data: Repositories you connect, code, diffs, task descriptions (processed in isolated environments).',
      'Usage Data: Task history, analytics, dashboard interactions (non-sensitive).',
      'BYOK Data: API keys (encrypted, used transiently; not stored long-term).',
      'Technical Data: Logs, IP addresses, device info for security and improvement.',
    ],
    note: 'We do not train models on your private code unless explicitly permitted.',
  },
  {
    num: '3',
    title: 'How We Use Information',
    body: [
      'Provide and improve the Service (agent execution, sync, dashboards).',
      'Billing and account management.',
      'Security, fraud prevention, and compliance.',
      'Communicate updates and support.',
    ],
  },
  {
    num: '4',
    title: 'Sharing Information',
    body: [
      'With service providers (hosting, payment processors, GitHub as authorized).',
      'Third-party AI providers only when you use BYOK (your keys are sent directly).',
      'As required by law.',
    ],
    note: 'We do not sell your data.',
  },
  {
    num: '5',
    title: 'Data Storage and Security',
    body: 'Data is stored in secure cloud environments (e.g., isolated Docker containers). We use encryption for sensitive data. However, no system is 100% secure.',
  },
  {
    num: '6',
    title: 'Your Rights',
    body: [
      'Access, correct, or delete your data (subject to legitimate business needs).',
      'For California / GDPR users: Additional rights apply — contact us.',
      'You control repository access via GitHub permissions.',
    ],
  },
  {
    num: '7',
    title: 'Data Retention',
    body: 'We retain data as long as your account is active or as needed for legal obligations. You may request deletion upon cancellation (subject to backups/logs).',
  },
  {
    num: '8',
    title: 'International Transfers',
    body: 'If you are outside the US, your data may be transferred to and processed in the United States.',
  },
  {
    num: '9',
    title: "Children's Privacy",
    body: 'Service is not for users under 18.',
  },
  {
    num: '10',
    title: 'Changes to This Policy',
    body: 'We will notify you of material changes.',
  },
  {
    num: '11',
    title: 'Contact Us',
    body: 'For questions, reach out to tyler@tyler.ag.',
  },
]

export default function PrivacyPolicy() {
  return (
    <div className="relative z-10 min-h-screen bg-bg-primary text-text-primary">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-[760px] mx-auto px-6 py-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5 font-extrabold text-xl tracking-tight text-text-primary no-underline">
            <img src="/deepnano-logo.jpg" alt="DeepNano" className="w-[34px] h-[34px] rounded-[9px] shadow-[0_0_20px_rgba(192,68,238,0.3)]" />
            DeepNano
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-[760px] mx-auto px-6 py-16 md:py-20">
        <h1 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.02em] mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-text-muted mb-16">
          Effective Date: June 22, 2026
        </p>

        <div className="space-y-10">
          {SECTIONS.map((s) => (
            <section key={s.num}>
              <h2 className="text-lg font-bold mb-3 flex items-start gap-2">
                <span className="text-accent-light font-mono text-sm mt-[5px]">{s.num}.</span>
                {s.title}
              </h2>
              {Array.isArray(s.body) ? (
                <ul className="list-disc list-outside pl-6 space-y-2 text-[0.95rem] text-text-secondary leading-relaxed">
                  {s.body.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-[0.95rem] text-text-secondary leading-relaxed pl-6">{s.body}</p>
              )}
              {s.note && (
                <p className="mt-3 pl-6 text-sm text-accent-light font-medium">{s.note}</p>
              )}
            </section>
          ))}
        </div>

        <hr className="border-border mt-16 mb-8" />
        <p className="text-sm text-text-muted">
          Contact:{' '}
          <a href="mailto:tyler@tyler.ag" className="text-accent-light no-underline hover:underline">
            tyler@tyler.ag
          </a>
        </p>
      </main>
    </div>
  )
}
