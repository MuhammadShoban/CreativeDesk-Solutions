
const logos = [
  {
    name: 'Quantum',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="12" rx="3" ry="9" transform="rotate(45 12 12)" />
        <ellipse cx="12" cy="12" rx="3" ry="9" transform="rotate(-45 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
    color: '#7c3aed',
  },
  {
    name: 'Vortex',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 0-10 10c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 15a5 5 0 0 1-5-5c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1-.3 2-.8 2.8" />
      </svg>
    ),
    color: '#2563eb',
  },
  {
    name: 'Specter Inc',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    color: '#0891b2',
  },
  {
    name: 'Acme Corp',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    color: '#d97706',
  },
  {
    name: 'Nova Labs',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    color: '#db2777',
  },
  {
    name: 'Apex Design',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 22h20L12 2z" />
        <path d="M12 10L7 20h10L12 10z" strokeWidth="1.5" />
      </svg>
    ),
    color: '#059669',
  },
  {
    name: 'Synthetix',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="3" />
        <circle cx="5" cy="19" r="3" />
        <circle cx="19" cy="19" r="3" />
        <line x1="8.5" y1="7.5" x2="6.5" y2="16.5" />
        <line x1="15.5" y1="7.5" x2="17.5" y2="16.5" />
        <line x1="8" y1="19" x2="16" y2="19" />
      </svg>
    ),
    color: '#c026d3',
  },
];

function LogoCard({ logo }: { logo: typeof logos[0] }) {
  return (
    <div
      className="flex items-center gap-2.5 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl border border-slate-200/70 bg-white/80 backdrop-blur-sm
                 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(124,58,237,0.14)]
                 hover:border-brand-200 hover:-translate-y-0.5
                 transition-all duration-300 cursor-default select-none group"
    >
      <span
        className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-xl transition-transform duration-300 group-hover:scale-110 flex-shrink-0"
        style={{ color: logo.color, background: `${logo.color}18` }}
      >
        {logo.icon}
      </span>
      <span className="font-jakarta font-bold text-[0.85rem] sm:text-[0.97rem] text-slate-600 group-hover:text-slate-800 transition-colors tracking-tight whitespace-nowrap">
        {logo.name}
      </span>
    </div>
  );
}

export default function PartnersMarquee() {
  return (
    <section className="relative pt-10 sm:pt-14 pb-20 sm:pb-28 bg-white overflow-hidden w-full">

      {/* ── Top decorative separator line ── */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-200/60 to-transparent" />
      </div>

      {/* ── Subtle background tint ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,92,246,0.04) 0%, transparent 70%)',
        }}
      />

      {/* ── Label ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 mb-6 sm:mb-8 flex flex-col items-center gap-3">
        {/* Glowing pill badge */}
        <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 shadow-[0_0_16px_rgba(139,92,246,0.10)]">
          <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-500" />
          </span>
          <span className="text-[0.65rem] sm:text-[0.72rem] font-jakarta font-bold text-brand-600 uppercase tracking-[0.15em] sm:tracking-[0.20em] text-center">
            Trusted by Leaders in Enterprise &amp; Fast-Growing Tech
          </span>
        </div>

        {/* Decorative dot-line under label */}
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-px bg-brand-200" />
          <div className="w-1.5 h-1.5 rounded-full bg-brand-300" />
          <div className="w-12 h-px bg-brand-200" />
          <div className="w-1.5 h-1.5 rounded-full bg-brand-400" />
          <div className="w-12 h-px bg-brand-200" />
          <div className="w-1.5 h-1.5 rounded-full bg-brand-300" />
          <div className="w-6 h-px bg-brand-200" />
        </div>
      </div>

      {/* ── Marquee Wrapper ── */}
      <div className="relative w-full overflow-hidden flex flex-col gap-3 sm:gap-4">

        {/* Left / Right fade overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Row 1 — scrolls left */}
        <div className="animate-marquee hover:[animation-play-state:paused] flex gap-3 sm:gap-4 cursor-pointer">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <LogoCard key={`r1-${i}`} logo={logo} />
          ))}
        </div>

        {/* Row 2 — scrolls right (reversed) */}
        <div
          className="hover:[animation-play-state:paused] flex gap-3 sm:gap-4 cursor-pointer"
          style={{ animation: 'marquee-reverse 35s linear infinite' }}
        >
          {[...[...logos].reverse(), ...[...logos].reverse(), ...[...logos].reverse()].map((logo, i) => (
            <LogoCard key={`r2-${i}`} logo={logo} />
          ))}
        </div>
      </div>

      {/* ── Bottom Wave Separator ── */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[40px] sm:h-[65px] md:h-[90px]">
          <path d="M0,45 C240,90 480,0 720,45 C960,90 1200,0 1440,45 L1440,90 L0,90 Z" fill="rgba(139,92,246,0.07)" />
        </svg>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[35px] sm:h-[55px] md:h-[72px] -mt-[24px] sm:-mt-[36px] md:-mt-[48px]">
          <path d="M0,48 C360,8 720,68 1080,28 C1260,8 1380,48 1440,48 L1440,80 L0,80 Z" fill="#f8f5ff" />
        </svg>
      </div>

      {/* CSS for reverse marquee */}
      <style>{`
        @keyframes marquee-reverse {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </section>
  );
}
