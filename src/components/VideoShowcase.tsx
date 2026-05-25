import { useState } from 'react';

export default function VideoShowcase() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="video-showcase" className="py-24 relative overflow-hidden">
      
      {/* ── Background Gradients & Theme ── */}
      <div className="absolute inset-0 -z-10"
           style={{ background: 'linear-gradient(180deg, #f8f5ff 0%, #ffffff 100%)' }} />

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none -z-10" style={{
        backgroundImage: 'linear-gradient(90deg, rgba(124,58,237,0.03) 1px, transparent 1px), linear-gradient(180deg, rgba(124,58,237,0.02) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
      }} />

      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full -z-10 blur-3xl opacity-30"
           style={{ background: 'radial-gradient(circle, rgba(217,119,6,0.18) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* ── Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-amber-50 border border-amber-100
                          shadow-[0_2px_10px_rgba(217,119,6,0.04)] mb-5">
            <span className="text-[0.7rem] font-jakarta font-extrabold text-amber-700 uppercase tracking-[0.2em]">
              Video Demo
            </span>
          </div>
          <h2 className="font-jakarta font-extrabold text-4xl lg:text-[3rem] text-slate-900 leading-[1.15] tracking-tight">
            Streamline Business with our <span className="gradient-text">Flexible options</span>
          </h2>
          <p className="text-slate-500 text-sm mt-4 max-w-xl mx-auto leading-relaxed">
            Watch our showcase detailing how we build, scale, and launch premium prebuilt and custom applications in record time.
          </p>
        </div>

        {/* ── Video Player Mockup Container ── */}
        <div className="max-w-4xl mx-auto relative group">
          
          {/* Custom Bouncing Gold/Amber Glow Blob behind the player */}
          <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-amber-500/20 via-brand-500/10 to-orange-500/20 blur-xl opacity-80 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          
          {/* The main video player window */}
          <div className="relative bg-slate-950 rounded-3xl p-3 shadow-2xl border border-white/10 overflow-hidden cursor-pointer"
               onClick={() => setIsOpen(true)}>
            
            {/* Header info bar */}
            <div className="flex items-center gap-3 p-3 text-white/90 relative z-20">
              <div className="w-8 h-8 rounded-full bg-slate-900 border border-white/20 flex items-center justify-center text-[0.8rem] font-bold text-amber-500 shadow-sm">
                F
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-jakarta font-extrabold text-xs sm:text-sm tracking-tight truncate">
                  Build Your Startup APP in ₹50K.
                </p>
                <p className="text-[0.65rem] text-slate-400 font-semibold">
                  Futuredesks
                </p>
              </div>
            </div>

            {/* Video Thumbnail Display */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-white/5 bg-slate-900 flex flex-col justify-between">
              
              {/* Overlay shadow gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10 pointer-events-none" />

              {/* Main split content */}
              <div className="flex-1 flex items-stretch">
                
                {/* Left side: Landing Page Mockup */}
                <div className="flex-[1.3] bg-white p-4 flex flex-col justify-between border-r border-slate-100 relative">
                  {/* Subtle Grid backdrop */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                    backgroundImage: 'linear-gradient(90deg, #000 1px, transparent 1px), linear-gradient(180deg, #000 1px, transparent 1px)',
                    backgroundSize: '10px 10px'
                  }} />
                  
                  {/* Mock Navbar */}
                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-[0.38rem] font-extrabold text-slate-900 tracking-wider">FUTUREDESKS</span>
                    <div className="flex gap-2">
                      <span className="w-4 h-1 bg-slate-100 rounded" />
                      <span className="w-4 h-1 bg-slate-100 rounded" />
                    </div>
                  </div>

                  {/* Mock Hero content with illustration placeholders */}
                  <div className="text-center my-auto relative z-10 flex flex-col items-center gap-1.5 py-2">
                    {/* Tiny avatar group / illustration outline */}
                    <div className="flex justify-center -space-x-1.5">
                      <div className="w-6 h-6 rounded-full bg-amber-100 border border-white flex items-center justify-center text-[0.4rem]">👨‍💻</div>
                      <div className="w-6 h-6 rounded-full bg-purple-100 border border-white flex items-center justify-center text-[0.4rem]">👩‍💻</div>
                    </div>
                    <p className="font-jakarta font-extrabold text-[0.62rem] sm:text-[0.8rem] text-slate-900 leading-tight">
                      Build your Start<br/>with Futuredesks
                    </p>
                    <div className="flex gap-1">
                      <div className="px-1.5 py-0.5 bg-slate-900 text-white rounded text-[0.3rem] font-bold">Let's Explore</div>
                      <div className="px-1.5 py-0.5 border border-slate-200 rounded text-[0.3rem] font-bold">Contact Us</div>
                    </div>
                  </div>

                  {/* Mock Footer Client Logos */}
                  <div className="flex justify-around items-center opacity-40 border-t border-slate-100 pt-1 relative z-10 text-[0.3rem] text-slate-500 font-bold">
                    <span>minitpe.</span>
                    <span>plom.</span>
                    <span>ceya.</span>
                    <span>whatsapp</span>
                  </div>
                </div>

                {/* Right side: Speaking Presenter Video */}
                <div className="flex-1 bg-[#251e18] relative overflow-hidden flex flex-col justify-end p-3">
                  {/* Subtle warm halo */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-amber-500/10 blur-xl pointer-events-none" />
                  
                  {/* Presenter avatar illustration */}
                  <div className="w-full h-full flex items-center justify-center relative z-10">
                    <div className="relative flex flex-col items-center">
                      {/* Avatar with glasses */}
                      <div className="w-16 h-16 rounded-full bg-slate-800/80 border border-white/20 flex items-center justify-center text-2xl shadow-lg">
                        👨‍🏫
                      </div>
                      {/* Interactive talking wave */}
                      <div className="flex items-center gap-0.5 mt-2 h-3">
                        <div className="w-0.5 h-1 bg-amber-400 rounded animate-pulse" />
                        <div className="w-0.5 h-3 bg-amber-500 rounded animate-pulse" />
                        <div className="w-0.5 h-2 bg-amber-400 rounded animate-pulse" />
                        <div className="w-0.5 h-1.5 bg-amber-500 rounded animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Presenter mini badge */}
                  <div className="bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded text-[0.38rem] text-amber-400 font-bold self-start relative z-10">
                    Live Session
                  </div>
                </div>

              </div>

              {/* YouTube Play Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-14 h-10 bg-red-650 hover:bg-red-700 active:scale-95 transition-all duration-300 rounded-[14px] flex items-center justify-center shadow-lg group-hover:scale-110">
                  <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Controls bar at bottom */}
              <div className="p-3.5 flex items-center justify-between relative z-20">
                {/* Share arrow icon */}
                <button className="w-7 h-7 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z" />
                  </svg>
                </button>

                {/* "Watch on YouTube" pill */}
                <span className="px-3 py-1.5 bg-black/70 hover:bg-black/90 text-white rounded-full text-[0.62rem] font-bold flex items-center gap-1.5 border border-white/10 transition">
                  Watch on <span className="text-red-500 font-extrabold flex items-center gap-0.5">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.163c-.272-.98-1.09-1.755-2.083-2.023C19.516 3.6 12 3.6 12 3.6s-7.516 0-9.414.54c-.99.268-1.81.1.8-2.082.1.8-2.33 2.083-2.33 2.083S0 9.774 0 12s.54 4.316.54 4.316 1.09 1.756 2.083 2.024C4.484 18.88 12 18.88 12 18.88s7.516 0 9.414-.54c.99-.268 1.81-1.044 2.083-2.024C24 14.316 24 12 24 12s0-2.316-.502-5.837z" />
                    </svg>
                    YouTube
                  </span>
                </span>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* ── Bottom Wave Separator transitioning to Services ── */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        {/* Back wave — subtle amber/orange tint */}
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[65px] md:h-[90px]"
        >
          <path
            d="M0,45 C240,90 480,0 720,45 C960,90 1200,0 1440,45 L1440,90 L0,90 Z"
            fill="rgba(217,119,6,0.05)"
          />
        </svg>
        {/* Front wave — solid Services section entry floor (#f8f5ff) */}
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[55px] md:h-[72px] -mt-[36px] md:-mt-[48px]"
        >
          <path
            d="M0,48 C360,8 720,68 1080,28 C1260,8 1380,48 1440,48 L1440,80 L0,80 Z"
            fill="#f8f5ff"
          />
        </svg>
      </div>

      {/* ── Interactive Video Modal ── */}
      {isOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4 transition-all duration-300"
             onClick={() => setIsOpen(false)}>
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
               onClick={(e) => e.stopPropagation()}>
            
            {/* Close button */}
            <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center font-bold transition z-50"
                    onClick={() => setIsOpen(false)}>
              ✕
            </button>

            {/* Video container */}
            <div className="aspect-[16/9]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1"
                title="Build Your Startup APP in ₹50K."
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
