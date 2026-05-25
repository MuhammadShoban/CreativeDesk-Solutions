import { IconArrow } from './Icons';

// Base gradient: teal → purple (left to right)
const heroBg: React.CSSProperties = {
  background: 'linear-gradient(to right, #0ed2da, #5f29c7)',
  position: 'relative',
};

// White fade overlay: covers top 40%, fades to transparent
const whiteFadeOverlay: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(to bottom, #fff 0%, #fff 40%, rgba(255,255,255,0) 100%)',
  pointerEvents: 'none',
  zIndex: 1,
};

// Vertical grid lines: fade out at 70% via mask-image
const gridLines: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  backgroundImage: 'linear-gradient(90deg, #ccc 1px, transparent 1px)',
  backgroundSize: '50px 100%',
  pointerEvents: 'none',
  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)',
  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)',
  zIndex: 2,
};

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col" style={heroBg}>

      {/* ── White top fade overlay ── */}
      <div style={whiteFadeOverlay} aria-hidden="true" />

      {/* ── Vertical grid lines (fades out downward) ── */}
      <div style={gridLines} aria-hidden="true" />


      {/* ── Floating abstract shapes (desktop only) ── */}
      <div className="absolute top-[18%] left-[20%] w-8 h-8 rounded-full border-2 border-white/20 border-dashed animate-spin-slow pointer-events-none hidden lg:block" style={{ zIndex: 3 }} />
      <div className="absolute top-[75%] left-[12%] text-2xl font-light text-white/30 animate-float pointer-events-none hidden lg:block select-none" style={{ zIndex: 3 }}>+</div>
      <div className="absolute top-[25%] right-[15%] w-6 h-6 border-2 border-white/20 rotate-12 animate-float-delayed pointer-events-none hidden lg:block" style={{ zIndex: 3 }} />
      <div className="absolute bottom-[22%] left-[45%] w-3 h-3 rounded-full bg-white/20 animate-float pointer-events-none hidden lg:block" style={{ zIndex: 3 }} />


      {/* ── Bottom Wave Separator ── */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[40px] sm:h-[65px] md:h-[90px]">
          <path d="M0,45 C240,90 480,0 720,45 C960,90 1200,0 1440,45 L1440,90 L0,90 Z" fill="rgba(139,92,246,0.07)" />
        </svg>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[35px] sm:h-[55px] md:h-[72px] -mt-[24px] sm:-mt-[36px] md:-mt-[48px]">
          <path d="M0,48 C360,8 720,68 1080,28 C1260,8 1380,48 1440,48 L1440,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* ── Main content ── */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-24 sm:pb-20
                      flex flex-col items-center justify-center text-center flex-1 z-10 w-full">

        <div className="flex flex-col items-center text-center z-10 w-full max-w-3xl">

          {/* Welcome Badge */}
          <div className="flex items-center justify-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full mb-5 sm:mb-6
                          bg-[#fff5f0] border border-[#ffe3d6]
                          shadow-[0_2px_10px_rgba(249,115,22,0.06)] animate-fade-in">
            <span className="font-jakarta font-bold text-[0.65rem] sm:text-[0.75rem] tracking-wider text-orange-600 uppercase">
              WELCOME TO CREATIVEDESK
            </span>
          </div>

          {/* Headline — responsive font sizes */}
          <h1 className="font-jakarta font-extrabold text-slate-900 
                         text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem]
                         leading-[1.15] sm:leading-[1.1] tracking-tight mb-5 sm:mb-6 max-w-2xl text-center px-2 sm:px-0">
            High-Performance Websites &{' '}
            <span className="text-[#2563eb] font-bold">Mobile Apps</span>
          </h1>

          {/* Subtext */}
          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed mb-7 sm:mb-8 max-w-xl text-center mx-auto px-2 sm:px-0">
            We build blazing-fast platforms, mobile applications, and automated workflows that streamline your operations and scale your growth.
          </p>

          {/* CTA Buttons — stack on very small screens */}
          <div className="flex flex-col xs:flex-row items-center justify-center flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10 w-full px-4 sm:px-0">
            <a href="#contact" className="btn-primary shadow-[0_4px_24px_rgba(95,41,199,0.35)] flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 text-sm w-full xs:w-auto justify-center">
              Get Started <IconArrow />
            </a>
            <a href="#services"
               className="flex items-center gap-2.5 font-jakarta font-bold text-sm text-slate-800
                          hover:text-brand-700 transition-colors py-2.5 px-4 sm:px-5 rounded-xl bg-white/60 backdrop-blur-sm border border-slate-200/50 shadow-sm w-full xs:w-auto justify-center">
              <span className="w-8 h-8 rounded-full bg-white shadow-brand-sm flex items-center justify-center text-brand-600 border border-brand-100 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 translate-x-[1px]">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </span>
              Watch Intro
            </a>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-3 pt-5 sm:pt-6 border-t border-slate-200/60 w-full max-w-xs sm:max-w-md mx-auto">
            <div className="flex -space-x-2.5 animate-pulse-subtle" aria-hidden="true">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80" alt="User 1" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white shadow-sm object-cover flex-shrink-0" />
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80" alt="User 2" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white shadow-sm object-cover flex-shrink-0" />
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80" alt="User 3" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white shadow-sm object-cover flex-shrink-0" />
            </div>
            <p className="text-xs sm:text-sm font-jakarta font-semibold text-slate-600">
              Trusted by <span className="text-brand-600 font-bold">1.3L+</span> Audience
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
