# Project Plan for DeepNano Coding Agents Platform

## 1. Project Overview
- **Name**: DeepNano (landing page at deepnano.dev; dashboard deployed to dash.deepnano.dev)
- **Description**: A web application that allows users to select AI coding agents (Claude Code, Grok Build, OpenCode, etc.), deploy them to work on GitHub-integrated projects via Docker containers on server nodes, with real-time status updates, agent interaction, and live code visibility in the UI via API communication.
- **Core Value**: Enable scalable, multi-agent coding workflows with easy switching between AI providers/models, isolated execution, and direct user-agent collaboration.
- **Key Differentiator**: Full BYOK (Bring Your Own Keys) — zero platform markup on API usage. Pay providers directly.

## 2. Objectives
- User authentication and project management.
- Agent selection and deployment.
- GitHub integration for code repos.
- Docker/K8s-based isolated agent execution with per-container APIs.
- Real-time bidirectional communication, monitoring, code viewing, and user intervention.
- Secure, scalable, resilient infrastructure.

## 3. Tech Stack
- **Frontend**: TypeScript + Vite + React with TailwindCSS (dashboard, live code viewer, agent chat, diffs).
- **Backend**: TypeScript + Express.js (or NestJS) for Main API + WebSocket handling.
- **Database**: PostgreSQL (users, projects, deployments, sessions).
- **Queue/State**: Redis + BullMQ.
- **Containerization**: Docker.
- **Orchestration**: Kubernetes (KEDA/HPA for scaling).
- **Real-time/Comms**: WebSockets (Socket.io) + optional gRPC between Main API and Agent containers.
- **Code Sync**: Git integration + file watchers/diffs (e.g., via rsync, Git worktrees, or volume-mounted shared FS with polling).

## 4. Architecture (Decoupled Event-Driven)
- **Main Orchestrator API (Server A)**: Handles user requests, enqueues jobs, coordinates.
- **Agent Containers**: Each worker/agent pod runs:
  - The AI coding agent logic.
  - A lightweight internal API (Express + WebSocket server) for:
    - Receiving commands from Main API / users.
    - Streaming logs, thoughts, file changes.
    - Exposing current code state (file tree, contents, diffs).
- **Communication**:
  - Main API ↔ Agent APIs: Persistent WebSocket/gRPC connections for real-time sync.
  - WebUI ↔ Main API: WebSockets for live updates, code viewer, and chat/intervention.
  - Code Visibility: Agents push diffs/changes to Main API (or shared volume + watcher); UI renders Monaco/VS Code-like editor with highlights.
- **Kubernetes Flow**: BullMQ jobs trigger pod scaling; agents register their API endpoint on startup.

**Pros**: Users can chat with agents, approve edits, and see live code updates directly in the dashboard.

## 5. Key Features
1. User Dashboard: Projects, active agents, history.
2. Agent Selector & Deployment.
3. Live Agent Interface: Chat, send tasks, view thoughts/logs.
4. **Real-time Code Viewer**: File tree, editable diffs, change highlights (updated via agent API).
5. GitHub Sync: Auto-commit/PR from agents with user approval.
6. Management: Intervene, pause, stop agents.
7. Multi-agent collaboration.

## 6. Development Phases
### Phase 1: MVP Setup
- Monorepo, auth, DB, GitHub, BullMQ + basic K8s/Docker Compose.

### Phase 2: Agent Runtime
- Docker images with agent + internal Express/WebSocket API.
- Code change detection & reporting.

### Phase 3: Real-time UI
- Vite/React with live code components (e.g., Monaco Editor + diff viewer).

### Phase 4: Orchestration & Scaling
- Full K8s integration, agent registration.

### Phase 5: Polish & Security
- Sandboxing, auth on agent APIs, testing.

## 7. Risks and Considerations
- Security: Expose minimal agent API surface; use mTLS/auth tokens; strict network policies.
- Performance: Efficient diffing for large repos (e.g., only changed files).
- State Management: Persistent volumes or Git for code; DB for sessions.
- Complexity: Real-time code sync requires careful handling of conflicts.

## 8. Pricing Tiers
| Tier | Price | Agents | Tasks/Day | Key Features |
|---|---|---|---|---|
| **Free (BYOK)** | Free | 1 concurrent | 2 | BYOK, basic dashboard, GitHub integration |
| **Starter (BYOK)** | $5/mo | 2 concurrent | 5 | BYOK, basic dashboard, GitHub integration, community support |
| **Pro (BYOK)** | $15/mo | 5 concurrent | 15 | BYOK, priority support, advanced config, usage analytics |
| **Enterprise** | Custom | Unlimited | Unlimited | Dedicated VPC, SSO/SCIM, SOC2/GDPR, on-prem, SLA, custom integrations |

## 9. Landing Page Structure
1. **Hero** — "Cloud Agents for Coding — Bring Your Own Keys" + tagline + CTAs ("Get Started Free" / "See Pricing")
2. **Features** — 6-card grid: Multi-Agent, Docker Isolation, GitHub Integration, Real-Time Visibility, Agent Chat, K8s Scaling
3. **How It Works** — 4-step flow: Connect Repo → Choose Agent → Assign Tasks → Review & Ship
4. **Supported Agents** — Logo grid: Claude Code, Grok Build, OpenCode, Custom Agent + BYOK freedom tagline
5. **Pricing** — 4 tiers: Free, Starter ($5), Pro ($15), Enterprise (Custom)
6. **CTA** — "Ready to ship faster?" + Get Started / Talk to Sales
7. **Footer**

## 10. Next Steps
- Design Agent API endpoints (e.g., `/status`, `/files`, `/chat`, WebSocket events).
- Prototype a sample agent Docker image with internal server.
- Choose code sync strategy (Git push vs. volume watcher).
- Wireframes for live code UI.

This plan will be updated iteratively.
