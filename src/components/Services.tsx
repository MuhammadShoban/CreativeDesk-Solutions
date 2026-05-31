import { IconCheck } from './Icons';

// Import the user's provided images and the generated AI image
import customSoftwareImg from '../assets/custom_software.png';
import saasPrebuiltImg from '../assets/saas_prebuilt.png';
import websiteDevImg from '../assets/website_development.jpg';
import mobileAppsImg from '../assets/mobile_apps.png';
import softwareMaintImg from '../assets/software_maintenance.jpg';
import aiAutomationsImg from '../assets/ai_automations.png';

interface ServicesProps {
  isPage?: boolean;
}

export default function Services({ isPage = false }: ServicesProps) {
  // Unified list of services with imported images
  const cards = [
    {
      title: 'Custom Software',
      description: 'Custom-built digital platforms and business systems designed to automate your workflows, manage company operations, and scale as you grow.',
      blobColor: '#7c3aed',
      btnText: 'Request Custom Quote',
      btnBg: 'bg-brand-gradient hover:brightness-110',
      image: customSoftwareImg,
      bullets: ['Custom Enterprise Apps', 'Tailored Business Logic', 'Database Architectures', 'Scalable Backend APIs'],
      detailPath: '/services/custom-software'
    },
    {
      title: 'SaaS Prebuilt',
      description: 'Ready-to-use business apps like multi-vendor marketplaces, delivery platforms, and booking portals, fully customized and launched in just a few days.',
      blobColor: '#059669',
      btnText: 'Deploy SaaS Solution',
      btnBg: 'bg-emerald-600 hover:bg-emerald-700',
      image: saasPrebuiltImg,
      bullets: ['Multivendor Platforms', 'Fully Configured Apps', 'Ready to Launch Suite', 'Free Deploy Support'],
      detailPath: '/services/saas-prebuilt'
    },
    {
      title: 'Website Development',
      description: 'Stunning, lightning-fast React & Next.js websites designed to capture visitors\' attention, load instantly, and turn traffic into regular customers.',
      blobColor: '#2563eb',
      btnText: 'Request Website Quote',
      btnBg: 'bg-blue-600 hover:bg-blue-700',
      image: websiteDevImg,
      bullets: ['Next.js & React Frontends', 'Headless CMS Configs', 'Speed & Web Vitals', 'Technical SEO Setup'],
      detailPath: '/services/website-development'
    },
    {
      title: 'Mobile Apps Development',
      description: 'High-performance Android and iOS mobile applications designed with smooth scrolling, beautiful graphics, and offline availability.',
      blobColor: '#db2777',
      btnText: 'Build Your App',
      btnBg: 'bg-rose-600 hover:bg-rose-700',
      image: mobileAppsImg,
      bullets: ['Cross-platform Flutter/RN', 'Apple & Google Play launch', 'Frictionless Gestures/UI', 'Offline-first Storage'],
      detailPath: '/services/mobile-apps-development'
    },
    {
      title: 'Software Maintenance',
      description: 'Uptime monitoring, secure daily backups, regular updates, and instant bug fixes to keep your platforms running smoothly without any interruptions.',
      blobColor: '#d97706',
      btnText: 'Get Maintenance Plan',
      btnBg: 'bg-amber-600 hover:bg-amber-700',
      image: softwareMaintImg,
      bullets: ['24/7 Server Monitoring', 'Security Patches & Audits', 'Database Backups', 'Framework Version Upgrades'],
      detailPath: '/services/software-maintenance'
    },
    {
      title: 'AI Automations',
      description: 'Smart AI assistants, custom chatbots, and automated workflows that connect your apps together to eliminate manual tasks and save hours of work.',
      blobColor: '#0284c7',
      btnText: 'Automate Your Flow',
      btnBg: 'bg-sky-600 hover:bg-sky-700',
      image: aiAutomationsImg,
      bullets: ['Custom RAG Systems', 'Zapier & n8n Workflows', 'Agentic Chatbots', 'Data Extraction APIs'],
      detailPath: '/services/ai-automations'
    }
  ];

  return (
    <section id="services" className={`relative overflow-hidden ${isPage ? 'pt-32 sm:pt-40 pb-20 sm:pb-28' : 'py-20 sm:py-28'}`}>

      {/* ── Multi-layer background (Unchanged theme and bg) ── */}
      <div className="absolute inset-0 -z-10"
           style={{ background: 'linear-gradient(160deg, #f8f5ff 0%, #faf9ff 40%, #eef2ff 100%)' }} />

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none -z-10" style={{
        backgroundImage: 'linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(180deg, rgba(124,58,237,0.03) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
      }} />

      {/* Glow orbs */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full -z-10 blur-3xl"
           style={{ background: 'radial-gradient(circle, rgba(14,210,218,0.13) 0%, transparent 70%)' }} />
      <div className="absolute -bottom-40 -right-40 w-[560px] h-[560px] rounded-full -z-10 blur-3xl"
           style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 70%)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full -z-10 blur-3xl opacity-40"
           style={{ background: 'radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 70%)' }} />

      {/* Floating dot grid */}
      <div className="absolute top-10 right-10 w-28 h-28 opacity-[0.12] pointer-events-none hidden lg:block -z-10 text-brand-500">
        <svg width="112" height="112" fill="currentColor">
          <pattern id="dp-svc" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" />
          </pattern>
          <rect width="112" height="112" fill="url(#dp-svc)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-brand-50 border border-brand-100/80
                          shadow-[0_2px_10px_rgba(124,58,237,0.06)] mb-5">
            <span className="text-[0.7rem] font-jakarta font-extrabold text-brand-600 uppercase tracking-[0.2em]">
              Features
            </span>
          </div>
          <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl lg:text-[3.2rem] text-slate-900 leading-[1.15] tracking-tight">
            Streamline Business with our <span className="gradient-text">Flexible Options</span>
          </h2>
        </div>

        {/* ── Responsive Service Cards Grid (3 Columns on Desktop) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 items-stretch">
          {cards.map((c, i) => (
            <div 
              key={i} 
              onClick={() => {
                window.history.pushState(null, '', c.detailPath);
                window.dispatchEvent(new Event('popstate'));
              }}
              className="uiverse-card rounded-[28px] flex flex-col relative transition-all duration-500 hover:-translate-y-3.5 hover:scale-[1.035] group hover:shadow-2xl cursor-pointer"
            >
              {/* Animated blob with service color */}
              <div className="uiverse-blob animate-pulse" style={{ backgroundColor: c.blobColor, opacity: 0.55 }} />

              <div className="uiverse-bg rounded-[22px] m-1.5 flex-1 flex flex-col relative">
                {/* Image showcase */}
                <div className="p-5 pb-1">
                  <div className="w-full h-60 rounded-2xl border border-slate-100 overflow-hidden relative bg-slate-50 flex items-center justify-center shadow-sm">
                    <img 
                      src={c.image} 
                      alt={c.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108" 
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-7 pt-6 flex flex-col flex-1 justify-between gap-6 relative z-10">
                  <div className="space-y-3">
                    <h3 className="font-jakarta font-extrabold text-2xl text-slate-900 leading-snug transition-colors duration-300"
                        style={{ color: '#0f172a' }}>
                      {c.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-[0.85rem] font-medium">
                      {c.description}
                    </p>
                  </div>

                  {/* Bullet features */}
                  <div className="space-y-4 border-t border-slate-100 pt-6">
                    <p className="font-jakarta font-extrabold text-[0.7rem] uppercase tracking-wider text-slate-400">Core Focus</p>
                    <ul className="space-y-3 text-[0.8rem] text-slate-600 font-semibold">
                      {c.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-center gap-2.5">
                          <span className="w-4 h-4 rounded-full bg-slate-50 text-slate-800 flex items-center justify-center ring-1 ring-slate-200/50 flex-shrink-0">
                            <IconCheck />
                          </span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      window.history.pushState(null, '', c.detailPath);
                      window.dispatchEvent(new Event('popstate'));
                    }}
                    className={`w-full mt-2 py-3.5 text-white rounded-xl text-xs font-jakarta font-extrabold shadow-sm transition-all cursor-pointer ${c.btnBg}`}>
                    {c.btnText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
