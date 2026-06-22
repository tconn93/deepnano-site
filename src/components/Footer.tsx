export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border py-12">
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center flex-wrap gap-5 max-sm:flex-col max-sm:text-center">
        <div className="flex items-center gap-2.5 text-sm text-text-muted">
          <img src="/deepnano-logo.jpg" alt="DeepNano" className="w-6 h-6 rounded-md" />
          &copy; 2026 DeepNano from <a href='https://tyler.ag'>Tyler's AI Company.</a> All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="https://dash.deepnano.dev" className="text-sm text-text-muted no-underline transition-colors duration-200 hover:text-text-primary">
            Dashboard
          </a>
          <a href="mailto:tyler@tyler.ag" className="text-sm text-text-muted no-underline transition-colors duration-200 hover:text-text-primary">
            Contact
          </a>
          <a href="/terms.html" className="text-sm text-text-muted no-underline transition-colors duration-200 hover:text-text-primary">
            Terms
          </a>
          <a href="/privacy.html" className="text-sm text-text-muted no-underline transition-colors duration-200 hover:text-text-primary">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  )
}
