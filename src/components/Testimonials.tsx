import { useState, useRef } from 'react';

// Import cropped testimonial card images
import mukteshImg from '../assets/testimonial_muktesh.png';
import shriyaImg from '../assets/testimonial_shriya.png';
import yashImg from '../assets/testimonial_yash.png';
import ajayImg from '../assets/testimonial_ajay.png';

interface TestimonialCard {
  name: string;
  role: string;
  image: string;
  videoUrl: string;
}

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);


  const list: TestimonialCard[] = [
    {
      name: 'Muktesh Narula',
      role: 'DOVESOFT',
      image: mukteshImg,
      videoUrl: 'https://www.youtube.com/embed/5F_C1A8s4bM?autoplay=1'
    },
    {
      name: 'Shriya Sadneni',
      role: 'MURZBAN',
      image: shriyaImg,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
    },
    {
      name: 'Yash Goswami',
      role: 'BITEBEE FOUNDER',
      image: yashImg,
      videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1'
    },
    {
      name: 'Ajay Agarwal',
      role: 'AVEENA CO-FOUNDER',
      image: ajayImg,
      videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1'
    }
  ];

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const containerCenter = scrollLeft + container.clientWidth / 2;
    
    let closestIndex = 0;
    let minDistance = Infinity;
    
    for (let i = 0; i < container.children.length; i++) {
      const card = container.children[i] as HTMLElement;
      if (!card) continue;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - containerCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    }
    
    setActiveIndex(closestIndex);
  };

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const card = container.children[index] as HTMLElement;
    if (!card) return;
    
    const containerCenter = container.clientWidth / 2;
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    const targetScrollLeft = cardCenter - containerCenter;

    container.scrollTo({
      left: targetScrollLeft,
      behavior: 'smooth'
    });
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      
      {/* ── Background Gradients & Consistent Theme ── */}
      <div className="absolute inset-0 -z-10"
           style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8f5ff 100%)' }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 pointer-events-none -z-10" style={{
        backgroundImage: 'linear-gradient(90deg, rgba(124,58,237,0.03) 1px, transparent 1px), linear-gradient(180deg, rgba(124,58,237,0.02) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
      }} />

      {/* Radial glow blobs */}
      <div className="absolute top-1/3 -left-48 w-[400px] h-[400px] rounded-full pointer-events-none opacity-20 blur-3xl"
           style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/3 -right-48 w-[400px] h-[400px] rounded-full pointer-events-none opacity-20 blur-3xl"
           style={{ background: 'radial-gradient(circle, #0ed2da 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-brand-50 border border-brand-100/80
                          shadow-[0_2px_10px_rgba(124,58,237,0.04)] mb-5">
            <span className="text-[0.7rem] font-jakarta font-extrabold text-brand-600 uppercase tracking-[0.2em]">
              Client Testimonials
            </span>
          </div>
          <h2 className="font-jakarta font-extrabold text-4xl lg:text-5xl text-slate-900 leading-tight">
            Happy Clients Testimonials
          </h2>
          <p className="text-slate-500 text-sm mt-4 leading-relaxed max-w-md mx-auto">
            Listen to our happy clients share their stories about building scalable web apps and launching custom SaaS tools.
          </p>
        </div>

        {/* ── Testimonial Video Cards: Mobile Carousel / Desktop Grid ── */}

        {/* Mobile: horizontal snap-scroll */}
        <div className="lg:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="relative flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-1 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {list.map((t, idx) => (
              <div
                key={idx}
                onClick={() => setActiveVideo(t.videoUrl)}
                className="snap-center flex-shrink-0 w-[72vw] max-w-[260px] aspect-[9/16] rounded-3xl overflow-hidden relative cursor-pointer shadow-lg border border-slate-100 bg-slate-950"
              >
                <img src={t.image} alt={t.name} className="w-full h-full object-cover opacity-90" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
                <div className="absolute top-3 left-3 z-20 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
                <div className="absolute bottom-4 left-4 right-4 z-20 text-white select-none">
                  <h4 className="font-jakarta font-extrabold text-sm tracking-tight leading-snug">{t.name}</h4>
                  <p className="text-[0.6rem] text-slate-300 font-extrabold uppercase tracking-wider mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Dot indicators */}
          <div className="flex justify-center gap-0.5 mt-4">
            {list.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className="p-2 cursor-pointer outline-none group"
                aria-label={`Go to slide ${i + 1}`}
              >
                <div
                  className={`transition-all duration-300 h-2 rounded-full ${
                    activeIndex === i 
                      ? 'bg-brand-500 w-5' 
                      : 'bg-slate-200 group-hover:bg-slate-300 w-2'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Desktop: 4-col grid */}
        <div className="hidden lg:grid grid-cols-4 gap-8 justify-center max-w-6xl mx-auto">
          {list.map((t, idx) => (
            <div
              key={idx}
              onClick={() => setActiveVideo(t.videoUrl)}
              className="relative group rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border border-slate-100 bg-slate-950 aspect-[9/16] w-full"
            >
              <img src={t.image} alt={t.name} className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none z-10" />
              <div className="absolute top-4 left-4 z-20">
                <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/95 group-hover:bg-brand-600 group-hover:scale-110 transition duration-300">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
              </div>
              <div className="absolute top-4 right-4 z-20">
                <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zM3 9v6h4l5 5V4L7 9H3z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-5 left-5 right-5 z-20 text-white select-none">
                <h4 className="font-jakarta font-extrabold text-sm tracking-tight leading-snug">{t.name}</h4>
                <p className="text-[0.62rem] text-slate-300 font-extrabold uppercase tracking-wider mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ── Bottom Wave Separator transitioning to Price Estimator ── */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        {/* Back wave — subtle violet tint */}
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[65px] md:h-[90px]"
        >
          <path
            d="M0,45 C240,90 480,0 720,45 C960,90 1200,0 1440,45 L1440,90 L0,90 Z"
            fill="rgba(139,92,246,0.06)"
          />
        </svg>
        {/* Front wave — solid Estimator section entry floor (#ffffff) */}
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[55px] md:h-[72px] -mt-[36px] md:-mt-[48px]"
        >
          <path
            d="M0,48 C360,8 720,68 1080,28 C1260,8 1380,48 1440,48 L1440,80 L0,80 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* ── Video Modal ── */}
      {activeVideo && (
        <div 
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4 transition-all duration-300"
          onClick={() => setActiveVideo(null)}
        >
          <div 
            className="relative w-full max-w-lg bg-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center font-bold transition z-50"
              onClick={() => setActiveVideo(null)}
            >
              ✕
            </button>

            {/* Video iframe container */}
            <div className="aspect-[9/16] max-h-[80vh] w-full">
              <iframe
                className="w-full h-full"
                src={activeVideo}
                title="Client Testimonial"
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
