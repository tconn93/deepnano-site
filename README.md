# deepnano.dev

Landing page for [DeepNano](https://deepnano.dev) — a multi-agent AI coding platform that lets you deploy Claude Code, Grok Build, OpenCode, and custom coding agents at scale.

**Stack:** TypeScript + Vite + React + TailwindCSS v4

## Development

```bash
npm install
npm run dev        # Start dev server (http://localhost:5173)
npm run build      # Type-check + production build → dist/
npm run preview    # Preview production build locally
```

## Deploy

Static output in `dist/`. Deploy anywhere that serves HTML:

```bash
npx serve dist
# or upload dist/ to Vercel, Netlify, Cloudflare Pages, S3, etc.
```

## Structure

```
src/
  App.tsx                   # Root component, composes all sections
  main.tsx                  # Vite entry point
  index.css                 # Tailwind v4 + custom theme + animations
  vite-env.d.ts             # Vite client type declarations
  hooks/
    useScrollReveal.ts      # IntersectionObserver hook for scroll animations
    useScrollNav.ts         # Nav bar scroll state
  components/
    Nav.tsx                 # Fixed nav with blur backdrop
    Hero.tsx                # Hero with gradient headline + CTAs
    TerminalPreview.tsx     # Animated terminal mockup
    Features.tsx            # 6 feature cards
    HowItWorks.tsx          # 4-step numbered flow
    Agents.tsx              # Supported agent cards
    Pricing.tsx             # Free / Pro ($20/mo) / Enterprise
    CTA.tsx                 # Bottom call-to-action
    Footer.tsx              # Copyright + links
    ScrollReveal.tsx        # Scroll-triggered reveal wrapper
```

## Product

The main dashboard is at [dash.deepnano.dev](https://dash.deepnano.dev).

DeepNano orchestrates AI coding agents in isolated Docker containers with:
- Real-time WebSocket communication
- GitHub integration (clone, branch, PR)
- Live code viewer with diffs
- Interactive agent chat
- Kubernetes-native autoscaling
