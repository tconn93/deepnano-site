import { useScrollNav } from '../hooks/useScrollNav'

const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#agents', label: 'Agents' },
  { href: '#pricing', label: 'Pricing' },
]

export default function Nav() {
  const scrolled = useScrollNav()

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-100 py-4 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-primary/85 backdrop-blur-xl border-b border-border shadow-[0_4px_32px_rgba(0,0,0,0.4)]'
          : ''
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 font-extrabold text-xl tracking-tight text-text-primary no-underline">
          <span className="w-[34px] h-[34px] rounded-[9px] bg-gradient-to-br from-accent via-cyan to-green flex items-center justify-center text-sm shadow-[0_0_20px_rgba(108,92,231,0.3)]">
            ⚛
          </span>
          DeepNano
        </a>

        <ul className="hidden md:flex items-center gap-8 list-none">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-text-secondary no-underline text-sm font-medium transition-colors duration-200 hover:text-text-primary"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://dash.deepnano.dev"
              className="inline-flex items-center px-4 py-2 text-sm font-semibold text-text-primary border border-border-light rounded-xl bg-transparent no-underline transition-all duration-200 hover:border-accent-light hover:bg-accent/8 hover:shadow-[0_0_20px_rgba(108,92,231,0.1)]"
            >
              Sign In
            </a>
          </li>
          <li>
            <a
              href="https://dash.deepnano.dev"
              className="inline-flex items-center px-[18px] py-2 text-sm font-semibold text-white bg-accent rounded-xl no-underline transition-all duration-200 shadow-[0_0_24px_rgba(108,92,231,0.3),0_4px_16px_rgba(108,92,231,0.3)] hover:bg-[#7c6ff0] hover:-translate-y-px hover:shadow-[0_0_36px_rgba(108,92,231,0.3),0_6px_24px_rgba(108,92,231,0.4)]"
            >
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
