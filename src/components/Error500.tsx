interface Error500Props {
  onRetry?: () => void;
}

export default function Error500({ onRetry }: Error500Props) {
  const navigate = (path: string) => {
    window.history.pushState(null, '', path);
    window.dispatchEvent(new Event('popstate'));
  };

  const handleRetry = () => {
    if (onRetry) {
      onRetry();
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-rose-950/30 to-slate-900">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#8b5cf6 1px, transparent 1px), linear-gradient(90deg, #8b5cf6 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        {/* Animated 500 with glitch */}
        <div className="relative mb-6 select-none" aria-hidden="true">
          <span
            className="glitch-text block text-[9rem] sm:text-[12rem] font-extrabold leading-none tracking-tighter"
            data-text="500"
            style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              background: 'linear-gradient(135deg, #fb7185 0%, #f43f5e 50%, #e11d48 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 40px rgba(244,63,94,0.4))',
            }}
          >
            500
          </span>
          {/* Server icon */}
          <div
            className="absolute top-2 right-0 text-4xl"
            style={{ animation: 'shake500 2.5s ease-in-out infinite' }}
          >
            ⚡
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/20 border border-rose-400/30 mb-5">
          <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
          <span className="text-rose-300 text-xs font-semibold tracking-widest uppercase">
            Internal Server Error
          </span>
        </div>

        <h1
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
          style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
        >
          Something went wrong on our end
        </h1>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-10">
          Our servers hit an unexpected snag. Our team has been notified and
          is working on a fix. Please try again in a moment.
        </p>

        {/* Status indicators */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {[
            { label: 'Database', ok: true },
            { label: 'API', ok: false },
            { label: 'CDN', ok: true },
          ].map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <span
                className={`w-2.5 h-2.5 rounded-full ${s.ok ? 'bg-emerald-400' : 'bg-rose-400 animate-pulse'}`}
              />
              <span className="text-slate-300 text-sm font-medium">{s.label}</span>
              <span className={`text-xs font-semibold ${s.ok ? 'text-emerald-400' : 'text-rose-400'}`}>
                {s.ok ? 'Operational' : 'Degraded'}
              </span>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleRetry}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white text-sm transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
            style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              background: 'linear-gradient(135deg, #e11d48 0%, #be123c 100%)',
              boxShadow: '0 4px 24px rgba(225,29,72,0.35)',
            }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Try Again
          </button>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-violet-300 text-sm border border-violet-500/40 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-violet-400 hover:-translate-y-0.5"
            style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Home
          </button>
        </div>

        {/* Support note */}
        <p className="mt-10 text-slate-500 text-sm">
          Still having trouble?{' '}
          <button
            onClick={() => navigate('/contact')}
            className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors"
          >
            Contact our support team →
          </button>
        </p>
      </div>

      <style>{`
        @keyframes shake500 {
          0%, 100% { transform: rotate(0deg); }
          10%, 30%, 50%, 70%, 90% { transform: rotate(-8deg) scale(1.1); }
          20%, 40%, 60%, 80% { transform: rotate(8deg) scale(1.1); }
        }
        .glitch-text {
          position: relative;
        }
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0; left: 0; right: 0;
          overflow: hidden;
          background: inherit;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .glitch-text::before {
          animation: glitch-before 3s infinite;
          clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
          transform: translate(-4px, 0);
          opacity: 0.7;
        }
        .glitch-text::after {
          animation: glitch-after 3s infinite;
          clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
          transform: translate(4px, 0);
          opacity: 0.7;
        }
        @keyframes glitch-before {
          0%, 90%, 100% { transform: translate(0, 0); opacity: 0; }
          91% { transform: translate(-4px, 2px); opacity: 0.7; }
          93% { transform: translate(4px, -2px); opacity: 0.7; }
          95% { transform: translate(-2px, 0); opacity: 0.7; }
          97% { transform: translate(0, 0); opacity: 0; }
        }
        @keyframes glitch-after {
          0%, 90%, 100% { transform: translate(0, 0); opacity: 0; }
          92% { transform: translate(4px, 2px); opacity: 0.7; }
          94% { transform: translate(-4px, -2px); opacity: 0.7; }
          96% { transform: translate(2px, 0); opacity: 0.7; }
          98% { transform: translate(0, 0); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
