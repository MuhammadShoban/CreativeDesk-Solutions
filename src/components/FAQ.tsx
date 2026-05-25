import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'How long does it take to deliver a pre-built application or website?',
    answer: 'Typically, pre-built websites or applications are deployed and ready within 2 to 5 business days, including minor customizations, domain integration, and branding setup.'
  },
  {
    question: 'Do you provide the complete source code after development?',
    answer: 'Yes, we provide 100% ownership and transfer full source code access via GitHub repositories along with all related assets once the project is finalized.'
  },
  {
    question: "What's the difference between a pre-built and a custom development project?",
    answer: 'Pre-built solutions use optimized ready-to-go premium modules, making deployment fast and cost-effective. Custom development is engineered entirely from scratch to support unique layouts, complex custom features, and specific API integrations.'
  },
  {
    question: 'Do you provide maintenance and support after delivery?',
    answer: 'Yes, we offer monthly maintenance packages covering technical support, performance monitoring, security updates, regular database backups, and quick troubleshooting.'
  },
  {
    question: 'What technologies do you use for development?',
    answer: 'We utilize high-performance modern frameworks like React, Next.js, TypeScript, TailwindCSS, Node.js, Express, MongoDB, and secure cloud platforms to ensure peak speeds and 100/100 Lighthouse scores.'
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 relative overflow-hidden bg-slate-50 z-10">
      
      {/* Polka Dot Background texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', 
             backgroundSize: '24px 24px' 
           }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading */}
          <div className="lg:sticky lg:top-32">
            <span className="section-badge bg-brand-50 text-brand-600 border-none px-4 py-1.5 rounded-full text-xs font-bold font-jakarta">
              Help Center
            </span>
            <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-slate-900 mt-4 leading-tight tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-base sm:text-lg mt-4 max-w-md leading-relaxed">
              Have questions about how we build, deploy, or support your applications? We have answers.
            </p>
          </div>

          {/* Right Column: Accordion */}
          <div className="flex flex-col gap-4">
            {faqData.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-100/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]
                             overflow-hidden transition-all duration-300 relative"
                >
                  {/* Styled left accent bar */}
                  <div 
                    className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${
                      isOpen ? 'bg-brand-600' : 'bg-slate-300'
                    }`} 
                  />

                  {/* Header click area */}
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full text-left p-5 sm:p-6 pl-6 sm:pl-8 flex items-center justify-between gap-4 font-jakarta font-bold text-slate-800 text-sm sm:text-base hover:text-brand-600 transition-colors"
                  >
                    <span>{item.question}</span>
                    <svg
                      className={`w-5 h-5 text-slate-400 transform transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-180 text-brand-500' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Expanding content wrapper */}
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? 'max-h-[300px]' : 'max-h-0'
                    }`}
                  >
                    <div className="p-5 sm:p-6 pl-6 sm:pl-8 pt-0 text-slate-500 text-xs sm:text-sm leading-relaxed border-t border-slate-50">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Wavy transition separator to the next section */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[30px] md:h-[45px]"
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
