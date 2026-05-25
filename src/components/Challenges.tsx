
// Custom inline SVG icons representing each challenge with orange/red accents
const IconSearchMaps = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="11" r="6" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 16L20 20" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 8C9.5 8 10 8.5 10 9" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconBrowserOutdated = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="15" rx="2" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="3" y1="8" x2="21" y2="8" stroke="#0f172a" strokeWidth="2" />
    <circle cx="6" cy="6" r="1.2" fill="#ef4444" />
    <circle cx="9" cy="6" r="1.2" fill="#0f172a" />
    <circle cx="12" cy="6" r="1.2" fill="#0f172a" />
    <rect x="6" y="11" width="12" height="4" rx="1" fill="#fee2e2" stroke="#ef4444" strokeWidth="1.5" />
  </svg>
);

const IconLeadFunnel = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V6C21 6.37878 20.7857 6.72445 20.4472 6.89443L14 10.118V18.1708C14 18.5284 13.8087 18.8576 13.4991 19.037L10.4991 20.7766C9.9701 21.0827 9.3 20.0856 9.3 20.0856V10.118L2.55279 6.89443C2.21431 6.72445 2 6.37878 2 6V4Z" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 6L17 6L14.5 8H9.5L7 6Z" fill="#fee2e2" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconRevenueCoins = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="18" rx="7" ry="3" stroke="#0f172a" strokeWidth="2" />
    <path d="M5 12V18" stroke="#0f172a" strokeWidth="2" />
    <path d="M19 12V18" stroke="#0f172a" strokeWidth="2" />
    
    <ellipse cx="12" cy="13" rx="7" ry="3" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
    <path d="M5 7V13" stroke="#0f172a" strokeWidth="2" />
    <path d="M19 7V13" stroke="#0f172a" strokeWidth="2" />
    
    <ellipse cx="12" cy="8" rx="7" ry="3" fill="#fee2e2" stroke="#ef4444" strokeWidth="2" />
    {/* Dollar symbol inside the top coin */}
    <path d="M12 6V10M10.5 7.25C10.5 7.25 11 6.5 12 6.5C13 6.5 13.5 7 13.5 7.5C13.5 8.25 10.5 8.25 10.5 9C10.5 9.5 11 10 12 10C13 10 13.5 9.25 13.5 9.25" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconGoogleReviews = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 12C20 15.866 16.4183 19 12 19C10.7486 19 9.56956 18.7397 8.52456 18.2764L4 20L5.2929 16.2739C3.87677 15.0345 3 13.5936 3 12C3 8.13401 6.58172 5 12 5C17.4183 5 20 8.13401 20 12Z" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <g fill="#ef4444">
      {/* Star 1 */}
      <path d="M8 9.5L8.5 10.5L9.5 10.5L8.7 11.1L9 12.1L8 11.5L7 12.1L7.3 11.1L6.5 10.5L7.5 10.5L8 9.5Z" />
      {/* Star 2 */}
      <path d="M12 9.5L12.5 10.5L13.5 10.5L12.7 11.1L13 12.1L12 11.5L11 12.1L11.3 11.1L10.5 10.5L11.5 10.5L12 9.5Z" />
      {/* Star 3 */}
      <path d="M16 9.5L16.5 10.5L17.5 10.5L16.7 11.1L17 12.1L16 11.5L15 12.1L15.3 11.1L14.5 10.5L15.5 10.5L16 9.5Z" />
    </g>
  </svg>
);

const IconCostPerLead = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="14" width="3" height="6" rx="0.5" fill="#0f172a" />
    <rect x="9" y="10" width="3" height="10" rx="0.5" fill="#0f172a" />
    <rect x="14" y="6" width="3" height="14" rx="0.5" fill="#fee2e2" stroke="#ef4444" strokeWidth="1.5" />
    <path d="M17 5H21V9M21 5L13 13" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="2" y1="20" x2="22" y2="20" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const challengesList = [
  {
    icon: <IconSearchMaps />,
    title: 'Not Appearing in Google Maps',
    solution: 'Web Development & Local SEO',
  },
  {
    icon: <IconBrowserOutdated />,
    title: 'Website is Old and Outdated',
    solution: 'React & Next.js Rebuilds',
  },
  {
    icon: <IconLeadFunnel />,
    title: 'Need Better Quality Leads',
    solution: 'AI & Workflow Automations',
  },
  {
    icon: <IconRevenueCoins />,
    title: 'Need More Revenue',
    solution: 'Custom Enterprise Software',
  },
  {
    icon: <IconGoogleReviews />,
    title: 'Need More Google Reviews',
    solution: 'SaaS Review Integrations',
  },
  {
    icon: <IconCostPerLead />,
    title: 'Our Cost Per Lead is Too High',
    solution: 'High-Converting Landing Pages',
  },
];

export default function Challenges() {
  return (
    <section id="challenges" className="relative py-20 sm:py-28 overflow-hidden w-full">
      {/* ── Background Gradients consistent with Services/Video ── */}
      <div className="absolute inset-0 -z-10"
           style={{ background: 'linear-gradient(180deg, #f8f5ff 0%, #ffffff 100%)' }} />

      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 pointer-events-none -z-10" style={{
        backgroundImage: 'linear-gradient(90deg, rgba(124,58,237,0.03) 1px, transparent 1px), linear-gradient(180deg, rgba(124,58,237,0.02) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
      }} />

      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full -z-10 blur-3xl opacity-30"
           style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[300px] rounded-full -z-10 blur-3xl opacity-20"
           style={{ background: 'radial-gradient(circle, rgba(239,68,68,0.1) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100/80
                          shadow-[0_2px_10px_rgba(124,58,237,0.06)] mb-5">
            <span className="text-[0.7rem] font-jakarta font-extrabold text-brand-600 uppercase tracking-[0.2em]">
              Agency Focus
            </span>
          </div>

          {/* Headline with custom underline */}
          <h2 className="font-jakarta font-extrabold text-2xl sm:text-4xl lg:text-[3.2rem] text-slate-900 leading-[1.15] tracking-tight mb-8">
            We Solve Your{' '}
            <span className="relative inline-block text-brand-700">
              Biggest Challenges
              <svg className="absolute left-0 bottom-[-10px] w-full h-[14px] text-brand-500" viewBox="0 0 250 14" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 11C80 3.5 160 2.5 247 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <path d="M25 13C100 6.5 175 5.5 235 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
              </svg>
            </span>
          </h2>

          <p className="text-slate-500 text-xs sm:text-sm mt-4 max-w-xl mx-auto leading-relaxed">
            Running a business is hard enough. Don't let slow software, weak branding, or manual workflows drag you down. We engineer solutions to optimize every pixel.
          </p>
        </div>

        {/* ── Grid/Row of Cards ── */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4 items-stretch justify-center">
          {challengesList.map((challenge, idx) => (
            <div
              key={idx}
              className="bg-white/90 backdrop-blur-xl border border-slate-100 rounded-2xl p-4 sm:p-5 py-6 sm:py-8 flex flex-col items-center justify-between text-center
                         transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(124,58,237,0.12)]
                         hover:border-brand-200 group"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-xl bg-slate-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                {challenge.icon}
              </div>

              {/* Title / Info */}
              <div className="flex-1 flex flex-col justify-between mt-2 w-full">
                <h3 className="font-jakarta font-extrabold text-xs sm:text-[0.9rem] text-slate-800 leading-snug group-hover:text-brand-600 transition-colors">
                  {challenge.title}
                </h3>
                
                {/* Solved by Badge/Text */}
                <div className="mt-4 pt-3 border-t border-slate-100/60 flex flex-col items-center w-full">
                  <span className="text-[0.55rem] sm:text-[0.62rem] font-jakarta font-extrabold uppercase tracking-wider text-slate-400">
                    Solved By
                  </span>
                  <span className="text-[0.68rem] sm:text-[0.72rem] font-jakarta font-bold text-brand-600 mt-1 leading-tight">
                    {challenge.solution}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ── Bottom Wave Separator transitioning to next section ── */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        {/* Back wave */}
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[40px] sm:h-[65px] md:h-[90px]">
          <path d="M0,45 C240,90 480,0 720,45 C960,90 1200,0 1440,45 L1440,90 L0,90 Z" fill="rgba(139,92,246,0.04)" />
        </svg>
        {/* Front wave */}
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[35px] sm:h-[55px] md:h-[72px] -mt-[24px] sm:-mt-[36px] md:-mt-[48px]">
          <path d="M0,48 C360,8 720,68 1080,28 C1260,8 1380,48 1440,48 L1440,80 L0,80 Z" fill="#f8f5ff" />
        </svg>
      </div>
    </section>
  );
}
