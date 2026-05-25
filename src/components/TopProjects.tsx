import { useState } from 'react';
import imgSweetMart from '../assets/project_sweetmart.png';
import imgAuraJewelry from '../assets/project_aura_jewelry.png';
import imgVogueThread from '../assets/project_vogue_thread.png';
import imgTradePulse from '../assets/project_tradepulse.png';
import imgEcoHaven from '../assets/project_eco_haven.png';
import imgLuxDecor from '../assets/project_luxdecor.png';
import imgFitSphere from '../assets/project_fitsphere.png';
import imgFinPay from '../assets/project_finpay.png';
import imgZipDelivery from '../assets/project_zipdelivery.png';

interface ProjectDetail {
  id: number;
  title: string;
  category: 'websites' | 'applications';
  bullets: string[];
  img: string;
  link: string;
}

const topProjectsData: ProjectDetail[] = [
  {
    id: 1,
    title: 'SweetMart E-Commerce Website',
    category: 'websites',
    bullets: [
      'Premium sweets storefront with modern UI and smooth responsive design.',
      'Category-wise sweets, snacks, and festive combo listings.',
      'Quick checkout with discounts and first-order offers.',
      'SEO-friendly structure with dynamic product showcase.'
    ],
    img: imgSweetMart,
    link: '#contact'
  },
  {
    id: 2,
    title: 'Aura Luxury Jewelry Store',
    category: 'websites',
    bullets: [
      'High-end diamond and jewellery boutique with refined shopping experiences.',
      '1,500+ certified designs neatly organised for quick browsing.',
      'Integrated filters (metal type, gemstone, price) to refine search fast.',
      'Mobile-first responsive checkout designed to boost conversions on smaller devices.'
    ],
    img: imgAuraJewelry,
    link: '#contact'
  },
  {
    id: 3,
    title: 'Vogue Thread Designer Store',
    category: 'websites',
    bullets: [
      'Bespoke modern online apparel and curated designer fashion brand.',
      'Interactive size guide and seamless zoom-in product galleries.',
      'Secure payment gateways and instant order tracking updates.',
      'Lightning-fast page transitions designed for high mobile conversion rates.'
    ],
    img: imgVogueThread,
    link: '#contact'
  },
  {
    id: 4,
    title: 'TradePulse AI Dashboard',
    category: 'websites',
    bullets: [
      'Built a sleek journaling platform for tracking trades with AI-backed analytics.',
      'Enabled seamless CSV/broker upload to sync trading activity in real time.',
      'Designed interactive dashboards showing win rate, profit/loss & strategy insights.',
      'Created mobile-friendly UI optimised for Indian traders and multi-broker support.'
    ],
    img: imgTradePulse,
    link: '#contact'
  },
  {
    id: 5,
    title: 'Eco Haven Eco-Store',
    category: 'websites',
    bullets: [
      'Eco-friendly product showcase featuring custom organic design elements.',
      'Carbon-offset checkout tracking and sustainable impact calculators.',
      'Optimized media assets ensuring perfect mobile performance and zero lag.',
      'Direct headless CMS integration for fast weekly product updates.'
    ],
    img: imgEcoHaven,
    link: '#contact'
  },
  {
    id: 6,
    title: 'LuxDecor Boutique',
    category: 'websites',
    bullets: [
      'Ultra-premium design with smooth parallax scrolling and luxury aesthetic.',
      'Gift registry builder and personalized engraving preview options.',
      'Seamless checkout experience optimized for high-value orders.',
      'Built-in analytical tools tracking user behavior to optimize retention.'
    ],
    img: imgLuxDecor,
    link: '#contact'
  },
  {
    id: 7,
    title: 'FitSphere Fitness App',
    category: 'applications',
    bullets: [
      'Interactive workout tracking application featuring custom native health charts.',
      'Integrates with Apple HealthKit & Google Fit for real-time calorie syncing.',
      'In-app social feed allowing users to share workouts and achievements.',
      'Smooth offline-first caching for tracking outdoor workouts without internet.'
    ],
    img: imgFitSphere,
    link: '#contact'
  },
  {
    id: 8,
    title: 'FinPay Digital Wallet',
    category: 'applications',
    bullets: [
      'Secure contactless mobile transaction app with real-time financial dashboards.',
      'Two-factor biometric authentication ensuring bank-grade protection.',
      'Dynamic peer-to-peer money transfers via phone contacts and QR codes.',
      'Interactive expense analyzer categorization with custom monthly budgets.'
    ],
    img: imgFinPay,
    link: '#contact'
  },
  {
    id: 9,
    title: 'ZipDelivery Courier App',
    category: 'applications',
    bullets: [
      'On-demand parcel and food courier tracking application with live maps.',
      'Real-time socket-based driver location updates and accurate ETA displays.',
      'Dynamic fare calculations based on traffic density and package distance.',
      'Secure customer signature verification and contactless drop-off options.'
    ],
    img: imgZipDelivery,
    link: '#contact'
  }
];

export default function TopProjects() {
  const [activeTab, setActiveTab] = useState<'websites' | 'applications'>('websites');

  const filtered = topProjectsData.filter(p => p.category === activeTab);

  const handleBackToMain = () => {
    window.location.hash = '#/portfolio';
  };

  return (
    <div className="bg-white min-h-screen pt-24 sm:pt-32 pb-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="section-badge bg-slate-100 text-slate-800 border-none px-4 py-1.5 rounded-full text-xs font-bold font-jakarta">
            Projects
          </span>
          <h1 className="font-jakarta font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-slate-900 mt-4 mb-8 leading-tight tracking-tight">
            Our Top Projects
          </h1>

          {/* Websites & Applications Tabs */}
          <div className="flex justify-center gap-3">
            <button
              onClick={() => setActiveTab('websites')}
              className={`px-6 py-2.5 rounded-full font-jakarta font-bold text-sm transition-all duration-200 border ${
                activeTab === 'websites'
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
              }`}
            >
              Websites
            </button>
            <button
              onClick={() => setActiveTab('applications')}
              className={`px-6 py-2.5 rounded-full font-jakarta font-bold text-sm transition-all duration-200 border ${
                activeTab === 'applications'
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
              }`}
            >
              Applications
            </button>
          </div>
        </div>

        {/* Project Alternating Rows */}
        <div className="flex flex-col gap-24 sm:gap-32">
          {filtered.map((p, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={p.id}
                className={`flex flex-col ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 lg:gap-16 items-center`}
              >
                {/* Image side */}
                <div className="w-full lg:w-1/2">
                  <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-4 sm:p-8 flex items-center justify-center shadow-sm">
                    <div className="relative overflow-hidden rounded-2xl w-full aspect-[4/3] bg-white shadow-sm">
                      <img
                        src={p.img}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

                {/* Text side */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                  <h2 className="font-jakarta font-extrabold text-2xl sm:text-3xl text-slate-900 leading-snug">
                    {p.title}
                  </h2>
                  
                  {/* Bullets */}
                  <div className="flex flex-col gap-4">
                    {p.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex gap-4 items-start">
                        {/* Number badge */}
                        <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-slate-50 text-slate-500 border border-slate-100 text-xs font-bold font-jakarta">
                          {String(bIdx + 1).padStart(2, '0')}
                        </span>
                        {/* Description */}
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-0.5">
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>


                </div>
              </div>
            );
          })}
        </div>

        {/* Return Button */}
        <div className="mt-24 text-center">
          <button
            onClick={handleBackToMain}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-slate-200 text-slate-700 hover:border-slate-400 font-jakarta font-bold text-sm transition-all"
          >
            ← Back to Main Page
          </button>
        </div>

      </div>
    </div>
  );
}
