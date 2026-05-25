import { projects } from '../data/content';

interface PortfolioProps {
  isPage?: boolean;
}

export default function Portfolio({ isPage = false }: PortfolioProps) {
  return (
    <section id="portfolio" className={`relative overflow-hidden bg-gray-50 ${isPage ? 'pt-32 sm:pt-40 pb-20 sm:pb-28' : 'py-20 sm:py-28'}`}>
      
      {/* Uiverse Projects Polka Dot Background */}
      <div className="projects-polka-background" />

      {/* Radial glow blobs */}
      <div className="absolute top-10 -right-48 w-[400px] h-[400px] rounded-full pointer-events-none opacity-20 blur-3xl"
           style={{ background: 'radial-gradient(circle, #0ed2da 0%, transparent 70%)' }} />
      <div className="absolute bottom-20 -left-48 w-[450px] h-[450px] rounded-full pointer-events-none opacity-25 blur-3xl"
           style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }} />

      {/* ── Top Wave Separator transitioning from Services ── */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none rotate-180">
        {/* Back wave */}
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[35px] md:h-[50px]"
        >
          <path
            d="M0,45 C240,90 480,0 720,45 C960,90 1200,0 1440,45 L1440,90 L0,90 Z"
            fill="rgba(139,92,246,0.06)"
          />
        </svg>
        {/* Front wave */}
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[25px] md:h-[36px] -mt-[18px] md:-mt-[24px]"
        >
          <path
            d="M0,48 C360,8 720,68 1080,28 C1260,8 1380,48 1440,48 L1440,80 L0,80 Z"
            fill="#f9fafb"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-badge">Social Presence</span>
          <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-slate-900 mt-3 leading-tight tracking-tight">
            Turning Visions Into Digital Reality
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {projects.map(p => (
            <article
              key={p.id}
              className="bg-white rounded-[2rem] border border-slate-100/80 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.04)]
                         hover:shadow-[0_25px_60px_-15px_rgba(91,33,182,0.08)] hover:-translate-y-1
                         transition-all duration-300 overflow-hidden flex flex-col group p-4 sm:p-5"
            >
              {/* Padded, rounded image container */}
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] w-full bg-slate-50">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              {/* Text content */}
              <div className="pt-5 pb-2 px-1 flex flex-col flex-1">
                <h3 className="font-jakarta font-extrabold text-lg sm:text-xl text-slate-900 mb-2 leading-snug">
                  {p.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">
                  {p.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
        {/* View All Button */}
        <div className="mt-16 text-center">
          <a
            href="#/top-projects"
            className="inline-flex items-center justify-center px-10 py-3 rounded-full border border-black text-black bg-white hover:bg-black hover:text-white transition-all duration-300 font-jakarta font-bold text-sm shadow-sm"
          >
            View All
          </a>
        </div>
      </div>

      {/* ── Bottom Wave Separator transitioning to Testimonials ── */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
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
