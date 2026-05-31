import { IconArrow } from './Icons';

const avatarShriya = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80';
const avatarAjay = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80';
const avatarYash = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80';

// ── Background styles ──────────────────────────────────────────────────────
// Base gradient: teal → purple (left to right)
const heroBg: React.CSSProperties = {
  background: 'linear-gradient(to right, #0ed2da, #5f29c7)',
  position: 'relative',
};

// White fade overlay: covers top ~50%, fades to transparent — keeps grid visible at top
const whiteFadeOverlay: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(to bottom, #ffffff 0%, #ffffff 45%, rgba(255,255,255,0) 100%)',
  pointerEvents: 'none',
  zIndex: 1,
};

// Square grid lines (both axes) — fade out downward, matching the reference
const squareGrid: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  backgroundImage: `
    linear-gradient(90deg, rgba(160,160,180,0.25) 1px, transparent 1px),
    linear-gradient(0deg,  rgba(160,160,180,0.25) 1px, transparent 1px)
  `,
  backgroundSize: '52px 52px',
  pointerEvents: 'none',
  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0) 100%)',
  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0) 100%)',
  zIndex: 2,
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden flex flex-col"
      style={heroBg}
    >
      {/* ── White top fade overlay ── */}
      <div style={whiteFadeOverlay} aria-hidden="true" />

      {/* ── Square grid (matches reference) ── */}
      <div style={squareGrid} aria-hidden="true" />

      {/* ── Subtle floating accent shapes ── */}
      <div
        className="absolute top-[15%] left-[8%] w-7 h-7 rounded-full border-2 border-slate-300/30 border-dashed animate-spin-slow pointer-events-none hidden lg:block"
        style={{ zIndex: 3 }}
      />
      <div
        className="absolute top-[20%] right-[8%] w-5 h-5 border-2 border-slate-300/30 rotate-45 animate-float-delayed pointer-events-none hidden lg:block"
        style={{ zIndex: 3 }}
      />
      <div
        className="absolute bottom-[30%] left-[14%] w-3 h-3 rounded-full bg-brand-400/20 animate-float pointer-events-none hidden lg:block"
        style={{ zIndex: 3 }}
      />
      <div
        className="absolute bottom-[35%] right-[12%] text-2xl font-light text-slate-400/30 animate-float pointer-events-none hidden lg:block select-none"
        style={{ zIndex: 3 }}
      >
        ✦
      </div>

      {/* ── Bottom Wave Separator ── */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[40px] sm:h-[65px] md:h-[90px]"
        >
          <path
            d="M0,45 C240,90 480,0 720,45 C960,90 1200,0 1440,45 L1440,90 L0,90 Z"
            fill="rgba(139,92,246,0.07)"
          />
        </svg>
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[35px] sm:h-[55px] md:h-[72px] -mt-[24px] sm:-mt-[36px] md:-mt-[48px]"
        >
          <path
            d="M0,48 C360,8 720,68 1080,28 C1260,8 1380,48 1440,48 L1440,80 L0,80 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* ── Main content ── */}
      <div
        className="relative flex-1 flex flex-col items-center justify-center text-center
                      max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8
                      pt-32 sm:pt-40 pb-32 sm:pb-28 z-10"
      >

        {/* ── Welcome badge ── */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 sm:mb-8
                        bg-white/70 backdrop-blur-sm border border-slate-200/70
                        shadow-sm animate-fade-in"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
          <span className="font-jakarta font-bold text-[0.65rem] sm:text-[0.72rem] tracking-widest text-slate-600 uppercase">
            Now Accepting New Clients
          </span>
        </div>

        {/* ── Headline ── */}
        <h1
          className="font-jakarta font-black text-slate-900 tracking-tight
                       text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.2rem] xl:text-[5.8rem]
                       leading-[1.06] sm:leading-[1.04] mb-8 sm:mb-10
                       max-w-4xl mx-auto animate-fade-in"
          style={{ animationDelay: '0.05s' }}
        >
          Build Your Business<br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(90deg, #0891b2 0%, #5f29c7 100%)' }}
          >
            with CreativeDesk
          </span>
        </h1>

        {/* ── Sub-headline ── */}
        <p
          className="text-slate-500 text-base sm:text-lg md:text-xl leading-relaxed
                       mb-10 sm:mb-12 max-w-lg mx-auto animate-fade-in"
          style={{ animationDelay: '0.1s' }}
        >
          We craft blazing-fast websites, mobile apps, and AI-powered workflows
          that scale your growth.
        </p>

        {/* ── CTA Buttons ── */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4
                        mb-10 sm:mb-12 w-full px-4 sm:px-0 animate-fade-in"
          style={{ animationDelay: '0.15s' }}
        >
          {/* Primary — dark pill (matches reference "Let's Explore") */}
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2
                         font-jakarta font-bold text-sm sm:text-base text-white
                         bg-slate-900 hover:bg-slate-700
                         px-7 sm:px-8 py-3.5 sm:py-4 rounded-full
                         shadow-[0_4px_20px_rgba(15,23,42,0.25)]
                         hover:shadow-[0_6px_28px_rgba(15,23,42,0.35)]
                         transition-all duration-300 hover:-translate-y-0.5
                         w-full sm:w-auto"
          >
            Let's Explore <IconArrow />
          </a>

          {/* Secondary — ghost pill (matches reference "Contact Us") */}
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2
                         font-jakarta font-bold text-sm sm:text-base text-slate-800
                         bg-white/80 backdrop-blur-sm hover:bg-white
                         border border-slate-200 hover:border-slate-300
                         px-7 sm:px-8 py-3.5 sm:py-4 rounded-full
                         shadow-sm hover:shadow-md
                         transition-all duration-300 hover:-translate-y-0.5
                         w-full sm:w-auto"
          >
            Contact Us
          </a>
        </div>

        {/* ── Social Proof — inline style matching reference ── */}
        <div
          className="flex items-center justify-center gap-3 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          {/* Stacked avatars */}
          <div className="flex -space-x-2.5 animate-fade-in" aria-hidden="true">
            <img
              src={avatarShriya}
              alt="Client 1"
              width="36"
              height="36"
              decoding="async"
              className="w-9 h-9 rounded-full border-2 border-white shadow-sm object-cover"
            />
            <img
              src={avatarAjay}
              alt="Client 2"
              width="36"
              height="36"
              decoding="async"
              className="w-9 h-9 rounded-full border-2 border-white shadow-sm object-cover"
            />
            <img
              src={avatarYash}
              alt="Client 3"
              width="36"
              height="36"
              decoding="async"
              className="w-9 h-9 rounded-full border-2 border-white shadow-sm object-cover"
            />
          </div>

          {/* Inline text — exactly like reference */}
          <p className="text-sm font-jakarta font-semibold text-slate-600">
            Trusted by{' '}
            <span
              className="font-bold"
              style={{ color: '#5f29c7' }}
            >
              1.3L+
            </span>{' '}
            Audience
          </p>
        </div>

      </div>
    </section>
  );
}
