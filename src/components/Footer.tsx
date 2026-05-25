import React, { useState } from 'react';
import logoImg from '../assets/logo.png';

const cols = [
  {
    title: 'Services',
    links: [
      'Website Development',
      'Mobile App Development',
      'SLA Maintenance',
      'Digital Marketing',
      'AI Automations'
    ],
    hrefs: [
      '#services',
      '#services',
      '#services',
      '#services',
      '#services'
    ],
  },
  {
    title: 'Explore',
    links: [
      'Why Choose Us',
      'Development Pipeline',
      'Client Testimonials',
      'Video Showcase',
      'Cost Estimator'
    ],
    hrefs: [
      '#why-us',
      '#process',
      '#testimonials',
      '#video-showcase',
      '#estimator'
    ],
  },
  {
    title: 'Legal & Support',
    links: [
      'Privacy Policy',
      'Terms of Service',
      'Refund Policy',
      'SLA Agreement',
      'WhatsApp Support'
    ],
    hrefs: [
      '#privacy',
      '#terms',
      '#refund',
      '#sla',
      'https://wa.me/923400744384'
    ],
  },
];

export default function Footer() {
  const [activePolicy, setActivePolicy] = useState<string | null>(null);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, label: string) => {
    if (href.startsWith('#') && ['Privacy Policy', 'Terms of Service', 'Refund Policy', 'SLA Agreement'].includes(label)) {
      e.preventDefault();
      setActivePolicy(label);
    }
  };

  const getPolicyContent = () => {
    switch (activePolicy) {
      case 'Privacy Policy':
        return {
          title: 'Privacy Policy',
          lastUpdated: 'May 2026',
          sections: [
            {
              heading: '1. Introduction',
              text: 'CreativeDesk Solutions respects your privacy and is committed to protecting your personal data. This Privacy Policy details how we handle information collected through our contact and project estimation forms.'
            },
            {
              heading: '2. Data We Collect',
              text: 'We collect name, email address, phone number, required service type, and project briefs when voluntarily submitted by visitors to schedule discovery calls or request estimates.'
            },
            {
              heading: '3. How We Use Your Data',
              text: 'Collected information is used exclusively to schedule free discovery calls, formulate design/development roadmap proposals, and coordinate ongoing agency projects. We never sell, lease, or share your data with third parties.'
            },
            {
              heading: '4. Data Security',
              text: 'We implement industry-standard encryption, SSL protocols, and secure cloud storage to safeguard your submitted details. All inquiries and documents remain strictly confidential.'
            },
            {
              heading: '5. Your Rights & Access',
              text: 'You may request to view, update, or completely delete your information from our database at any time by emailing us directly at hirecreativedesksolutions@gmail.com.'
            }
          ]
        };
      case 'Terms of Service':
        return {
          title: 'Terms of Service',
          lastUpdated: 'May 2026',
          sections: [
            {
              heading: '1. Engagement Scope',
              text: 'These terms apply to all digital agency, website development, mobile application, SaaS deployment, maintenance, and AI automation services provided by CreativeDesk Solutions.'
            },
            {
              heading: '2. Free Discovery & Estimation',
              text: 'All initial consultations, discovery sessions, and project estimation calculators are provided free of charge, with no obligation to purchase.'
            },
            {
              heading: '3. Payments & Milestones',
              text: 'Projects are structured in clear milestones. Work begins upon receipt of a milestone deposit and continues sequentially as outlined in the customized project agreement.'
            },
            {
              heading: '4. Intellectual Property',
              text: 'Upon full completion of payment for a milestone/project, all intellectual property rights, database schemas, and source code are fully transferred to the client.'
            },
            {
              heading: '5. Limitation of Liability',
              text: 'While we build highly optimized, performing software, CreativeDesk Solutions is not liable for indirect losses, hosting service interruptions, or third-party API changes.'
            }
          ]
        };
      case 'Refund Policy':
        return {
          title: 'Refund Policy',
          lastUpdated: 'May 2026',
          sections: [
            {
              heading: '1. Milestone Structuring',
              text: 'Because our agency works on structured milestones, clients retain clear control over payments. You pay only as work progresses and gets approved.'
            },
            {
              heading: '2. Refund Eligibility',
              text: 'Refunds can be requested for any milestone that has not yet commenced. Once planning, design, or coding begins on a milestone, deposits for that specific block are non-refundable.'
            },
            {
              heading: '3. Revisions & Satisfaction',
              text: 'We offer multiple feedback cycles during both the high-fidelity Figma mockup phase and interactive staging phase to ensure the final product meets your requirements.'
            },
            {
              heading: '4. Termination',
              text: 'Either party may terminate the project agreement with a 14-day notice, with payments settled for all work completed up to the date of notice.'
            }
          ]
        };
      case 'SLA Agreement':
        return {
          title: 'Service Level Agreement (SLA)',
          lastUpdated: 'May 2026',
          sections: [
            {
              heading: '1. Support Channels',
              text: 'Priority support is available through dedicated Slack/Discord rooms, direct WhatsApp, and email (hirecreativedesksolutions@gmail.com).'
            },
            {
              heading: '2. Response & Resolution Times',
              text: 'For critical bugs, response time is within 4 hours, and target resolution is within 12 hours. For minor adjustments or non-blocking queries, support response is within 24 hours.'
            },
            {
              heading: '3. Uptime Targets',
              text: 'We target a 99.99% uptime benchmark for all production applications deployed under our managed cloud setups (AWS, Vercel, or DigitalOcean).'
            },
            {
              heading: '4. Scheduled Maintenance',
              text: 'Periodic server diagnostics, library updates, database optimization, and backup sweeps are conducted during off-peak hours (1:00 AM - 4:00 AM UTC).'
            }
          ]
        };
      default:
        return null;
    }
  };

  const policy = getPolicyContent();

  return (
    <footer className="bg-slate-950 text-slate-400 pt-14 sm:pt-20 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top grid: 1 col mobile → 2 col sm → 3 col md → 5 col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.6fr_1fr_1fr_1.1fr_1.5fr] gap-8 sm:gap-10 pb-10 sm:pb-14 border-b border-white/10">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3.5">
              <img
                src={logoImg}
                alt="CreativeDesk"
                className="h-11 w-11 object-contain"
              />
              {/* Text: mirrors logoDesign.png */}
              <div className="flex flex-col leading-none gap-[3px]">
                <div className="flex items-baseline gap-0">
                  <span className="font-jakarta font-bold text-[1rem] tracking-tight text-white/90">
                    CREATIVE
                  </span>
                  <span className="font-jakarta font-extrabold text-[1rem] tracking-tight text-white">
                    DESK
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="block w-4 h-px bg-white/30" />
                  <span className="block w-[5px] h-[5px] rounded-full bg-brand-400 flex-shrink-0" />
                  <span className="font-jakarta font-semibold text-[0.55rem] tracking-[0.22em] text-white/50 uppercase">
                    Solutions
                  </span>
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Creating your digital legacy with enterprise-grade development and
              intelligent automation.
            </p>
            {/* Social & Direct Call Links */}
            <div className="flex flex-wrap gap-2.5 mt-1">
              <a
                href="https://wa.me/923400744384"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#25D366]/40 hover:bg-[#25D366]/10 text-slate-400 hover:text-[#25D366] flex items-center justify-center transition-all duration-300"
                title="Chat on WhatsApp"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.394 9.805-9.795.001-2.617-1.01-5.079-2.862-6.93C16.366 2.03 13.914.993 11.298.993c-5.405 0-9.806 4.399-9.808 9.8.001 1.93.506 3.8 1.462 5.438l-.963 3.52 3.606-.946zm11.573-5.267c-.302-.15-1.786-.882-2.06-.982-.275-.099-.474-.15-.674.15-.2.299-.775.98-.95 1.18-.175.199-.35.224-.652.075-1.127-.565-1.958-.985-2.73-2.312-.199-.343-.199-.556.05-.806.223-.223.3-.35.45-.525.15-.175.2-.299.3-.499.1-.2.05-.375-.025-.525-.075-.15-.674-1.625-.924-2.225-.244-.589-.493-.51-.674-.519-.175-.009-.375-.01-.575-.01-.2 0-.525.075-.8 3.75.275.3 1.05 1.6 2.525 2.25 1.475.65 2.125.8 2.875.725.75-.075 2.225-.9 2.525-1.775.3-.875.3-1.625.2-1.775-.1-.15-.375-.225-.675-.375z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/creativedesksolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#ee2a7b]/40 hover:bg-[#ee2a7b]/10 text-slate-400 hover:text-[#ee2a7b] flex items-center justify-center transition-all duration-300"
                title="Follow on Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/creativedesksolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#1877F2]/40 hover:bg-[#1877F2]/10 text-slate-400 hover:text-[#1877F2] flex items-center justify-center transition-all duration-300"
                title="Follow on Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/creativedesksolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10 text-slate-400 hover:text-[#0A66C2] flex items-center justify-center transition-all duration-300"
                title="Connect on LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <p className="font-jakarta font-bold text-xs uppercase tracking-widest text-white/60 mb-2">
                {col.title}
              </p>
              {col.links.map((l, i) => (
                <a
                  key={l}
                  href={col.hrefs[i]}
                  onClick={(e) => handleLinkClick(e, col.hrefs[i], l)}
                  className="text-sm hover:text-brand-400 transition-colors duration-150"
                  {...(col.hrefs[i].startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {l}
                </a>
              ))}
            </div>
          ))}

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <p className="font-jakarta font-bold text-xs uppercase tracking-widest text-white/60 mb-2">
              Newsletter
            </p>
            <p className="text-sm leading-relaxed">
              Tech tips and case studies delivered quarterly.
            </p>
            {/* Newsletter input — stacks on very small screens */}
            <div className="flex flex-col xs:flex-row gap-2">
              <input
                type="email"
                placeholder="you@domain.com"
                className="flex-1 min-w-0 px-4 py-2.5 rounded-full bg-white/5 border border-white/10
                           text-sm text-white placeholder-slate-500 outline-none
                           focus:border-brand-500 transition-colors"
              />
              <button className="btn-primary btn-sm flex-shrink-0 whitespace-nowrap">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar — stacks on mobile */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-3 sm:gap-4 pt-6 sm:pt-8 text-xs">
          <p>
            © {new Date().getFullYear()} CreativeDesk Solutions. All Rights
            Reserved.
          </p>
          <div className="flex gap-6">
            <button
              onClick={() => setActivePolicy("Privacy Policy")}
              className="hover:text-brand-400 cursor-pointer transition-colors outline-none"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActivePolicy("Terms of Service")}
              className="hover:text-brand-400 cursor-pointer transition-colors outline-none"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* ── Policy Dialog / Modal ── */}
      {policy && (
        <div
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4 transition-all duration-300 animate-fade-in"
          onClick={() => setActivePolicy(null)}
        >
          <div
            className="bg-white rounded-t-3xl sm:rounded-3xl w-full sm:max-w-2xl max-h-[90vh] sm:max-h-[85vh] flex flex-col shadow-2xl border border-slate-100 relative overflow-hidden animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <div>
                <h3 className="font-jakarta font-extrabold text-2xl text-slate-900">
                  {policy.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 font-semibold uppercase tracking-wider">
                  Last Updated: {policy.lastUpdated}
                </p>
              </div>
              <button
                onClick={() => setActivePolicy(null)}
                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center font-bold transition duration-200 outline-none"
              >
                ✕
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6 max-h-[60vh] custom-scroll text-left">
              {policy.sections.map((section, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="font-jakarta font-bold text-base text-slate-900">
                    {section.heading}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Footer button */}
            <div className="p-6 border-t border-slate-100 flex justify-end bg-slate-50/30">
              <button
                onClick={() => setActivePolicy(null)}
                className="px-6 py-2.5 rounded-full bg-brand-800 text-white font-jakarta font-bold text-sm transition-all duration-200 hover:bg-brand-900 shadow-sm"
              >
                Close Agreement
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
