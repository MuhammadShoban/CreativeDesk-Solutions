import { useState } from 'react';

export function Process() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const steps = [
    {
      num: '01',
      title: '1. Discover',
      desc: 'Scope, roadmap & features.',
      color: '#7c3aed', // Violet
      dotBg: 'bg-[#7c3aed]',
      borderStroke: '#7c3aed',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      num: '02',
      title: '2. Design',
      desc: 'High-fidelity Figma mockups.',
      color: '#6366f1', // Indigo
      dotBg: 'bg-[#6366f1]',
      borderStroke: '#6366f1',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2M12 19v2M3 12h2M19 12h2" />
        </svg>
      )
    },
    {
      num: '03',
      title: '3. Build',
      desc: 'Next.js & React development.',
      color: '#3b82f6', // Blue
      dotBg: 'bg-[#3b82f6]',
      borderStroke: '#3b82f6',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      )
    },
    {
      num: '04',
      title: '4. Test',
      desc: 'Speed & SEO optimization.',
      color: '#0d9488', // Teal
      dotBg: 'bg-[#0d9488]',
      borderStroke: '#0d9488',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      num: '05',
      title: '5. Launch',
      desc: 'Deployment & SLA support.',
      color: '#db2777', // Pink/Rose
      dotBg: 'bg-[#db2777]',
      borderStroke: '#db2777',
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 0M12 21V11m0 0l-3 3m3-3l3 3M19 10a7 7 0 00-14 0c0 4.418 3.582 8 8 8s8-3.582 8-8z" />
        </svg>
      )
    }
  ];

  return (
    <section id="process" className="pipeline-grid-wrapper pt-20 sm:pt-32 pb-20 sm:pb-32 relative overflow-hidden">
      {/* Uiverse Custom Grid Background */}
      <div className="pipeline-grid-background" />

      {/* Subtle overlay gradients to blend top/bottom of grid section */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#f8fafc] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

      {/* ── Top Wave Separator transitioning from WhyUs ── */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none rotate-180">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[35px] md:h-[50px]"
        >
          <path
            d="M0,48 C360,8 720,68 1080,28 C1260,8 1380,48 1440,48 L1440,80 L0,80 Z"
            fill="#f8fafc"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-2xl mx-auto mb-20 relative z-20">
          <span className="section-badge">Our Process</span>
          <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mt-2 mb-4">
            Development Pipeline
          </h2>
          <p className="text-slate-500 text-base">
            Our structured roadmap from initial roadmap definition to production launch and post-care support.
          </p>
        </div>

        {/* Desktop Layout: Horizontal Pipeline Flow */}
        <DesktopTimeline steps={steps} />

        {/* Mobile Layout: Vertical Pipeline Flow */}
        <div className="lg:hidden flex flex-col gap-5 sm:gap-6 pl-8 sm:pl-10 relative z-20">
          {/* Vertical Connecting Timeline Bar */}
          <div className="absolute top-0 left-[14px] bottom-0 w-0.5 bg-slate-100/90 rounded-full pointer-events-none" />

          {steps.map((s, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div 
                key={idx} 
                className="relative flex items-start gap-4 group cursor-pointer"
                onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
              >
                {/* Timeline circular dot node on the line */}
                <div
                  className={`absolute left-[-28px] top-4 w-4 h-4 rounded-full border-[3px] border-white shadow-md z-10 flex-shrink-0 transition-all duration-300 ${s.dotBg}`}
                  style={{
                    transform: isActive ? 'scale(1.35)' : 'none',
                    boxShadow: isActive ? `0 0 12px ${s.color}` : 'none',
                  }}
                />

                {/* Card */}
                <div 
                  className="relative flex-1 rounded-2xl bg-white shadow-sm border overflow-hidden transition-all duration-300"
                  style={{
                    borderColor: isActive ? s.color : '#f1f5f9',
                    transform: isActive ? 'translateY(-4px)' : 'none',
                    boxShadow: isActive ? `0 10px 25px ${s.color}15` : 'none',
                  }}
                >
                  {/* Coloured top accent bar */}
                  <div className="h-1 w-full" style={{ backgroundColor: s.color }} />

                  <div className="flex items-start gap-3 p-4">
                    {/* Icon badge */}
                    <div
                      className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center shadow-md transition-all duration-300"
                      style={{ 
                        backgroundColor: s.color,
                        transform: isActive ? 'scale(1.1) rotate(4deg)' : 'none',
                      }}
                    >
                      {s.icon}
                    </div>

                    {/* Text */}
                    <div className="transition-all duration-300">
                      <h4 
                        className="font-jakarta font-extrabold text-sm mb-0.5 transition-colors duration-300"
                        style={{ color: isActive ? s.color : '#1e293b' }}
                      >
                        {s.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}

function DesktopTimeline({ steps }: { steps: any[] }) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="hidden lg:block relative overflow-visible">
      
      {/* Main Horizontal Connecting Timeline Bar */}
      <div className="absolute bottom-3 left-[10%] right-[10%] h-1 bg-slate-100/90 rounded-full pointer-events-none z-0" />

      <div className="grid grid-cols-5 gap-6 relative z-10 overflow-visible">
        {steps.map((s, idx) => {
          const isHovered = hoveredIdx === idx;
          return (
            <div 
              key={idx} 
              className="flex flex-col items-center relative transition-all duration-300 overflow-visible"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{
                transform: isHovered ? 'translateY(-12px)' : 'none',
              }}
            >
              
              {/* ── Chevron Box Wrapper ── */}
              <div className="relative w-full pt-14 pb-8 pl-6 pr-10 flex flex-col justify-start min-h-[200px] cursor-pointer overflow-visible">
                {/* Circle Badge Icon */}
                <div 
                  className="absolute top-[-18px] left-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-20"
                  style={{ 
                    backgroundColor: s.color,
                    transform: isHovered ? 'scale(1.15) rotate(8deg)' : 'none',
                    boxShadow: isHovered ? `0 10px 20px ${s.color}50` : 'none',
                  }}
                >
                  {s.icon}
                </div>

                {/* Chevron SVG Outline Background */}
                <svg 
                  className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" 
                  preserveAspectRatio="none" 
                  viewBox="0 0 200 140" 
                  fill="none"
                >
                  <path
                    d="M 16,12 H 165 L 185,70 L 165,128 H 16"
                    stroke={s.color}
                    strokeWidth={isHovered ? "5.5" : "4"}
                    fill={isHovered ? `${s.color}0a` : "transparent"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-all duration-300"
                    style={{
                      filter: isHovered ? `drop-shadow(0 8px 16px ${s.color}35)` : 'none',
                    }}
                  />
                </svg>

                {/* Text Details */}
                <div className="relative z-10 pl-2">
                  <h4 className="font-jakarta font-extrabold text-[1.05rem] text-slate-800 leading-tight mb-2 transition-colors duration-200"
                      style={{ color: isHovered ? s.color : '#1e293b' }}>
                    {s.title}
                  </h4>
                  <p className="text-[0.82rem] text-slate-500 leading-relaxed font-semibold">
                    {s.desc}
                  </p>
                </div>
              </div>

              {/* ── Vertical Dotted Line ── */}
              <div 
                className="w-0.5 h-20 border-l-2 border-dashed my-2 transition-all duration-300"
                style={{ 
                  borderColor: s.color,
                  opacity: isHovered ? 1 : 0.6,
                }}
              />

              {/* ── Timeline Circular Dot Node ── */}
              <div 
                className={`w-6 h-6 rounded-full border-4 border-white shadow-md z-10 transition-all duration-300 ${s.dotBg}`}
                style={{
                  transform: isHovered ? 'scale(1.35)' : 'none',
                  boxShadow: isHovered ? `0 0 16px ${s.color}` : 'none',
                }}
              />

            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Testimonials() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const clientVideos = [
    {
      name: 'Muktesh Narula',
      role: 'DOVESOFT',
      thumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
      videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4', // Placeholder - user can change later
    },
    {
      name: 'Shriya Sadneni',
      role: 'MURZBAN',
      thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4',
    },
    {
      name: 'Yash Goswami',
      role: 'BITEBEE FOUNDER',
      thumbnail: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
      videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4',
    },
    {
      name: 'Ajay Agarwal',
      role: 'AVEENA CO-FOUNDER',
      thumbnail: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
      videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4',
    }
  ];

  return (
    <section id="testimonials" className="circuit-wrapper py-24 relative overflow-hidden">
      
      {/* Uiverse Circuit Background Pattern */}
      <div className="circuit-background" />

      {/* Subtle overlay gradients to blend top/bottom of the circuit section */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

      {/* ── Top Wave Separator transitioning from Portfolio ── */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none rotate-180">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[35px] md:h-[50px]"
        >
          <path
            d="M0,48 C360,8 720,68 1080,28 C1260,8 1380,48 1440,48 L1440,80 L0,80 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">

        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-brand-50 border border-brand-100/80
                          shadow-[0_2px_10px_rgba(124,58,237,0.04)] mb-4">
            <span className="text-[0.7rem] font-jakarta font-extrabold text-brand-600 uppercase tracking-[0.2em]">
              Client Testimonials
            </span>
          </div>
          <h2 className="font-jakarta font-extrabold text-4xl lg:text-[2.8rem] text-slate-900 leading-tight">
            Happy Clients Testimonials
          </h2>
        </div>

        {/* ── Testimonials: Mobile Snap Carousel / Desktop Grid ── */}

        {/* Mobile: horizontal snap-scroll carousel */}
        <div className="lg:hidden">
          <div
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {clientVideos.map((c, i) => (
              <div
                key={i}
                className="snap-center flex-shrink-0 w-[72vw] max-w-[280px] aspect-[9/16] rounded-[20px] overflow-hidden relative group cursor-pointer shadow-lg border border-slate-100 bg-slate-950"
                onClick={() => setActiveVideo(c.videoUrl)}
              >
                <img src={c.thumbnail} alt={c.name} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/35 z-10" />
                <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white z-20 border border-white/10">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
                <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                  <p className="font-jakarta font-extrabold text-sm tracking-tight leading-tight">{c.name}</p>
                  <p className="text-[0.6rem] font-bold text-slate-300 tracking-wider uppercase mt-1">{c.role}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Scroll hint dots */}
          <div className="flex justify-center gap-2 mt-4">
            {clientVideos.map((_, i) => (
              <span key={i} className={`block w-2 h-2 rounded-full ${i === 0 ? 'bg-brand-500 w-5' : 'bg-slate-200'} transition-all duration-300`} />
            ))}
          </div>
        </div>

        {/* Desktop: original 4-col grid */}
        <div className="hidden lg:grid grid-cols-4 gap-6 justify-center">
          {clientVideos.map((c, i) => (
            <div
              key={i}
              className="aspect-[9/16] w-full rounded-[20px] overflow-hidden relative group cursor-pointer shadow-lg border border-slate-100 bg-slate-950 transition-all duration-350 hover:-translate-y-1.5 hover:shadow-2xl"
              onClick={() => setActiveVideo(c.videoUrl)}
            >
              <img src={c.thumbnail} alt={c.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/35 group-hover:from-black/95 transition-all duration-300 z-10" />
              <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white z-20 group-hover:scale-110 transition-transform duration-300 border border-white/10">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white z-20 border border-white/10">
                <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                </svg>
              </div>
              <div className="absolute bottom-5 left-5 right-5 z-20 text-white">
                <p className="font-jakarta font-extrabold text-base tracking-tight leading-tight">{c.name}</p>
                <p className="text-[0.62rem] font-bold text-slate-300 tracking-wider uppercase mt-1">{c.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ── Bottom Wave Separator transitioning to WhyUs ── */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[35px] md:h-[50px]"
        >
          <path
            d="M0,48 C360,8 720,68 1080,28 C1260,8 1380,48 1440,48 L1440,80 L0,80 Z"
            fill="#f8fafc"
          />
        </svg>
      </div>

      {/* ── Testimonial Video Modal Player ── */}
      {activeVideo && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4 transition-all duration-300"
             onClick={() => setActiveVideo(null)}>
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
               onClick={(e) => e.stopPropagation()}>
            
            <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center font-bold transition z-50"
                    onClick={() => setActiveVideo(null)}>
              ✕
            </button>

            <div className="aspect-[16/9]">
              <iframe
                className="w-full h-full"
                src={`${activeVideo}?autoplay=1`}
                title="Client Testimonial Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
