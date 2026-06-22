export default function TerminalPreview() {
  return (
    <div className="max-w-[800px] mx-auto mt-20 bg-[#0d0d24] border border-border rounded-[20px] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.4),0_4px_24px_rgba(0,0,0,0.3),0_0_60px_rgba(192,68,238,0.15),0_0_120px_rgba(94,179,231,0.08)] animate-fade-in-up">
      <div className="flex items-center gap-2 px-[18px] py-3.5 bg-white/[0.02] border-b border-border">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="flex-1 text-center font-mono text-xs text-text-muted">
          deepnano agent — claude-opus-4-8
        </span>
      </div>

      <div className="p-5 md:p-6 font-mono text-sm md:text-[0.85rem] leading-relaxed text-text-secondary">
        <div>
          <span className="text-accent-light">deepnano</span>{' '}
          <span className="text-cyan">deploy</span> --agent claude-opus --repo deepnano/api
        </div>
        <div className="text-text-muted">→ Provisioning container…</div>
        <div className="text-text-muted">→ Cloning repository…</div>
        <div className="text-text-muted">→ Agent connected. Listening on ws://agent-7x2a:4096</div>
        <div className="text-text-muted">→ Agent analyzing codebase…</div>
        <div>
          <span className="text-green">✓ Agent ready.</span>{' '}
          <span className="text-text-muted">Open dash.deepnano.dev to interact.</span>
        </div>
        <div>
          <span className="text-accent-light">deepnano</span>{' '}
          <span className="inline-block w-2 h-4 bg-accent-light animate-blink align-text-bottom ml-0.5" />
        </div>
      </div>
    </div>
  )
}
