import { useEffect, useState } from 'react';

interface WhyUsProps {
  isPage?: boolean;
}

export default function WhyUs({ isPage = false }: WhyUsProps) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Trigger animations after mount
    const timer = setTimeout(() => setAnimated(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="why-us" className={`why-us-grid-wrapper pb-16 md:pb-24 relative overflow-hidden ${isPage ? 'pt-32 md:pt-40' : 'py-16 md:py-24'}`}>
      
      {/* Gautammsharma Uiverse Grid Background */}
      <div className="why-us-grid-background" />

      {/* Decorative colored glow blur orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-brand-200/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-cyan-200/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* ── Section Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-brand-50 border border-brand-100 mb-4">
            <span className="text-[0.7rem] font-jakarta font-extrabold text-brand-600 uppercase tracking-[0.2em]">
              Why Choose Us
            </span>
          </div>
          <h2 className="font-jakarta font-extrabold text-4xl lg:text-5xl text-slate-900 leading-tight">
            Built for Extreme Performance
          </h2>
          <p className="text-slate-500 text-base mt-3 max-w-lg mx-auto">
            We build state-of-the-art systems designed to win. No bloat, no compromise.
          </p>
        </div>

        {/* ── Attractive Graphic Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          
          {/* Graphic Card 1: Speed Score */}
          <div className="glass-card p-5 md:p-8 flex flex-col items-center text-center transition-all duration-350 hover:-translate-y-1.5 hover:shadow-xl group">
            {/* Speedometer Ring Graphic */}
            <div className="relative w-36 h-36 flex items-center justify-center mb-6">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* Background track */}
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="transparent"
                  stroke="#e2e8f0"
                  strokeWidth="8"
                />
                {/* Foreground indicator */}
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="transparent"
                  stroke="url(#speedGrad)"
                  strokeWidth="8"
                  strokeDasharray="264"
                  strokeDashoffset={animated ? "8" : "264"}
                  className="transition-all duration-1000 ease-out"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="speedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
              {/* Text inside speedometer */}
              <div className="absolute flex flex-col items-center justify-center">
                <span className="font-jakarta font-extrabold text-3xl text-slate-900">
                  99
                </span>
                <span className="text-[0.62rem] font-bold text-slate-400 uppercase tracking-widest -mt-1">
                  Speed
                </span>
              </div>
            </div>

            <h3 className="font-jakarta font-extrabold text-lg text-slate-900 mb-2">
              Next-Gen Speed Optimization
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Load times below 0.8 seconds on Google Web Vitals mobile benchmark tests.
            </p>
          </div>

          {/* Graphic Card 2: Growth Chart */}
          <div className="glass-card p-5 md:p-8 flex flex-col items-center text-center transition-all duration-350 hover:-translate-y-1.5 hover:shadow-xl group">
            {/* Interactive Trend Chart Graphic */}
            <div className="w-full h-36 flex items-end justify-center mb-6 relative px-4">
              <svg className="w-full h-24 overflow-visible" viewBox="0 0 160 80">
                <defs>
                  <linearGradient id="chartAreaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Area under curve */}
                <path
                  d="M 10 70 Q 40 50, 70 55 T 130 20 T 150 10 L 150 70 Z"
                  fill="url(#chartAreaGrad)"
                />
                {/* Connecting Line */}
                <path
                  d="M 10 70 Q 40 50, 70 55 T 130 20 T 150 10"
                  fill="transparent"
                  stroke="#7c3aed"
                  strokeWidth="3.5"
                  strokeDasharray="300"
                  strokeDashoffset={animated ? "0" : "300"}
                  className="transition-all duration-1000 ease-out"
                />
                {/* Pulsing indicator node */}
                <circle
                  cx="150"
                  cy="10"
                  r="5"
                  className="fill-cyan-400 stroke-white stroke-2"
                />
                <circle
                  cx="150"
                  cy="10"
                  r="10"
                  className="fill-cyan-400/30 stroke-none animate-ping"
                />
              </svg>

              {/* Conversion badge */}
              <div className="absolute top-0 left-6 bg-brand-500 text-white text-[0.68rem] font-extrabold px-2.5 py-1 rounded-full shadow-lg border border-white/10 animate-bounce">
                +142% Conversion
              </div>
            </div>

            <h3 className="font-jakarta font-extrabold text-lg text-slate-900 mb-2">
              Conversion & Growth Engine
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Every interface element is optimized to drive click-throughs and conversions.
            </p>
          </div>

          {/* Graphic Card 3: Uptime Shield */}
          <div className="glass-card p-5 md:p-8 flex flex-col items-center text-center transition-all duration-350 hover:-translate-y-1.5 hover:shadow-xl group">
            {/* Live Uptime Heartbeat Graphic */}
            <div className="w-full h-36 flex items-center justify-center mb-6 relative">
              <div className="w-24 h-24 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center p-4 relative shadow-inner">
                {/* Grid matrix overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                  backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                  backgroundSize: '8px 8px',
                }} />
                
                {/* Pulse light */}
                <div className="w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_15px_#10b981] mb-2 relative flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
                </div>
                
                <span className="font-mono text-emerald-400 text-sm font-bold tracking-tight">
                  99.99%
                </span>
                <span className="text-[0.55rem] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                  Live Uptime
                </span>
              </div>
            </div>

            <h3 className="font-jakarta font-extrabold text-lg text-slate-900 mb-2">
              Rock-Solid Uptime
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Fault-tolerant server architecture with real-time health checks.
            </p>
          </div>

        </div>

      </div>

      {/* ── Bottom Wave Separator transitioning to Process ── */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
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

    </section>
  );
}
