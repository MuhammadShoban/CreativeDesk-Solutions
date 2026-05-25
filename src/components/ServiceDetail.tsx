import { useState, useEffect, useRef } from 'react';
import { serviceDetails } from '../data/serviceDetails';

interface ServiceDetailProps {
  currentHash: string;
}

export default function ServiceDetail({ currentHash }: ServiceDetailProps) {
  // Parse hash to get the service ID (e.g. #/services/custom-software -> custom-software)
  const cleanHash = currentHash.replace(/^#\/?/, '');
  const serviceId = cleanHash.split('/')[1] || '';
  const detail = serviceDetails[serviceId];

  // Carousel Ref & State
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    brandName: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Scroll to top on page load/hash change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0 });
    }
    setActiveDot(0);
  }, [serviceId]);

  if (!detail) {
    return (
      <div className="pt-40 pb-20 text-center min-h-[60vh] flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-2xl font-bold text-slate-800">Service Not Found</h2>
        <p className="text-slate-500 mt-2">The requested service detail page could not be located.</p>
        <a href="#/services" className="btn-primary mt-6">Back to Services</a>
      </div>
    );
  }

  // Handle Form Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle Form Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        brandName: '',
        message: ''
      });
      // Reset success message after 5s
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const handleScrollToForm = () => {
    const formElement = document.getElementById('enquiry-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Carousel handlers
  const scroll = (direction: 'left' | 'right') => {
    const totalItems = detail.offerings.length;
    let nextIndex = activeDot;
    if (direction === 'left') {
      nextIndex = Math.max(0, activeDot - 1);
    } else {
      nextIndex = Math.min(totalItems - 1, activeDot + 1);
    }
    scrollToIdx(nextIndex);
  };

  const scrollToIdx = (idx: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const card = container.children[idx] as HTMLElement;
    if (!card) return;
    
    const paddingLeft = parseFloat(window.getComputedStyle(container).paddingLeft) || 0;
    const targetScrollLeft = card.offsetLeft - paddingLeft;
    
    container.scrollTo({
      left: targetScrollLeft,
      behavior: 'smooth'
    });
    setActiveDot(idx);
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    
    const paddingLeft = parseFloat(window.getComputedStyle(container).paddingLeft) || 0;
    const targetLine = scrollLeft + paddingLeft;
    
    let closestIndex = 0;
    let minDistance = Infinity;
    
    for (let i = 0; i < container.children.length; i++) {
      const card = container.children[i] as HTMLElement;
      if (!card) continue;
      const distance = Math.abs(card.offsetLeft - targetLine);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    }
    
    setActiveDot(closestIndex);
  };

  return (
    <div className="bg-slate-50 min-h-screen font-jakarta selection:bg-brand-500 selection:text-white relative">
      
      {/* ── HERO SECTION ── */}
      <section className="relative pt-32 sm:pt-40 pb-20 overflow-hidden bg-white border-b border-slate-100">
        {/* Developer Grid Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] opacity-80 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Breadcrumb back link */}
          <div className="mb-6 flex justify-center">
            <a href="#/services" className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-400 hover:text-brand-600 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
              All Services
            </a>
          </div>

          {/* Heading */}
          <h1 className="font-extrabold text-3xl sm:text-5xl lg:text-[3.5rem] text-slate-900 leading-[1.15] tracking-tight max-w-4xl mx-auto">
            {detail.title}
          </h1>

          {/* Subtitle */}
          <p className="text-slate-500 text-sm sm:text-lg mt-6 max-w-2xl mx-auto leading-relaxed font-medium">
            {detail.subtitle}
          </p>

          {/* Value / Value statement */}
          <p className="text-slate-600 text-xs sm:text-sm mt-3 max-w-xl mx-auto font-semibold">
            {detail.valueStatement}
          </p>

          {/* Price statement styled exactly like the crawled page */}
          <p className="text-slate-900 text-base sm:text-xl mt-6 font-extrabold font-jakarta">
            {detail.priceStatement.split('starting').map((part, index) => 
              index === 1 ? (
                <span key={index}>starting <span className="text-brand-600">{part}</span></span>
              ) : (
                part
              )
            )}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={handleScrollToForm}
              className="px-8 py-4 bg-brand-gradient hover:brightness-105 text-white font-extrabold text-xs sm:text-sm rounded-full shadow-lg shadow-brand-500/20 transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              {detail.ctaText}
            </button>
            <a 
              href="#/portfolio"
              className="px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs sm:text-sm rounded-full transition-all"
            >
              View Portfolio
            </a>
          </div>

          {/* Social Proof */}
          <div className="mt-6 flex justify-center items-center gap-3">
            <div className="flex -space-x-2">
              <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Audience 1" />
              <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Audience 2" />
              <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&q=80" alt="Audience 3" />
            </div>
            <p className="text-xs sm:text-sm font-extrabold text-slate-500">
              Trusted by <span className="text-brand-600 font-bold">50+ Business Owners</span>
            </p>
          </div>

          {/* Hero Mockup Device Image */}
          <div className="mt-16 max-w-4xl mx-auto relative rounded-3xl border border-slate-150 shadow-2xl overflow-hidden bg-slate-50 p-2 group hover:shadow-brand-500/10 transition-shadow duration-500">
            <div className="w-full h-auto rounded-2xl overflow-hidden border border-slate-100 relative bg-white aspect-[16/9]">
              <img 
                src={detail.heroImage} 
                alt={detail.title} 
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" 
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── WHAT WE OFFER SECTION ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-brand-50 border border-brand-100/80 shadow-[0_2px_10px_rgba(124,58,237,0.06)] mb-5">
              <span className="text-[0.7rem] font-jakarta font-extrabold text-brand-600 uppercase tracking-[0.2em]">
                Offerings
              </span>
            </div>
            <h2 className="font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              {detail.offeringsTitle}
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-4 max-w-xl mx-auto leading-relaxed">
              {detail.offeringsDesc}
            </p>
          </div>

          {/* Offerings Scroll Track */}
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="relative flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none scroll-smooth pb-4 px-4 sm:px-0"
          >
            {detail.offerings.map((offering, idx) => (
              <div 
                key={idx}
                className="w-[85vw] sm:w-[calc((100%-24px)/2)] md:w-[calc((100%-48px)/3)] flex-shrink-0 snap-start bg-[#f4f5f7] rounded-[32px] p-6 pb-8 flex flex-col items-center text-center justify-between shadow-none hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group border border-transparent hover:border-slate-200/50"
              >
                {/* Offering Image Container */}
                <div className="w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-slate-200/40 mb-6 flex items-center justify-center relative p-1.5">
                  <img 
                    src={offering.image} 
                    alt={offering.title} 
                    className="w-full h-full object-cover rounded-[18px] group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>

                {/* Content Details */}
                <div className="flex-1 flex flex-col items-center justify-between w-full">
                  <div>
                    <h3 className="font-jakarta font-extrabold text-base sm:text-[1.05rem] text-slate-900 mb-2 leading-snug group-hover:text-brand-600 transition-colors">
                      {offering.title}
                    </h3>
                    <p className="text-slate-500 text-[0.82rem] leading-relaxed mb-6 font-medium max-w-[210px] mx-auto">
                      {offering.desc}
                    </p>
                  </div>

                  <button 
                    onClick={handleScrollToForm}
                    className="px-7 py-2.5 bg-slate-950 hover:bg-brand-600 text-white text-[0.72rem] font-extrabold rounded-full transition-all tracking-wider shadow-sm cursor-pointer transform active:scale-95 inline-block"
                  >
                    {offering.btnText}
                  </button>
                </div>
              </div>
            ))}
            {/* Spacer to allow scrolling the last cards to the left edge on desktop/tablet */}
            <div className="hidden sm:block sm:w-[calc((100%-24px)/2)] md:w-[calc(2*(100%-48px)/3+24px)] flex-shrink-0 pointer-events-none" />
          </div>

          {/* Carousel Navigation Controls */}
          <div className="flex flex-col items-center justify-center gap-4 mt-10">
            <div className="flex items-center gap-6">
              <button 
                onClick={() => scroll('left')}
                disabled={activeDot === 0}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-sm active:scale-95 ${
                  activeDot === 0 
                    ? 'bg-slate-100 text-slate-300 cursor-not-allowed opacity-50' 
                    : 'bg-[#f4f5f7] hover:bg-slate-200 text-slate-800 cursor-pointer hover:shadow-md'
                }`}
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <span className="text-sm font-jakarta font-extrabold text-slate-700 bg-slate-100/80 px-4 py-1.5 rounded-full select-none shadow-sm min-w-[70px] text-center">
                {activeDot + 1} / {detail.offerings.length}
              </span>

              <button 
                onClick={() => scroll('right')}
                disabled={activeDot === detail.offerings.length - 1}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-sm active:scale-95 ${
                  activeDot === detail.offerings.length - 1 
                    ? 'bg-slate-100 text-slate-300 cursor-not-allowed opacity-50' 
                    : 'bg-[#f4f5f7] hover:bg-slate-200 text-slate-800 cursor-pointer hover:shadow-md'
                }`}
                aria-label="Next slide"
              >
                <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-0.5">
              {detail.offerings.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToIdx(idx)}
                  className="p-2 cursor-pointer outline-none group"
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <div
                    className={`transition-all duration-300 h-2.5 rounded-full ${
                      activeDot === idx 
                        ? 'bg-slate-800 w-7' 
                        : 'bg-slate-200 group-hover:bg-slate-300 w-2.5'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── WHY CHOOSE US SECTION (Split grid with central mockup image) ── */}
      <section className="py-20 bg-white border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              {detail.whyChooseUsTitle}
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-4 max-w-xl mx-auto leading-relaxed">
              {detail.whyChooseUsDesc}
            </p>
          </div>

          {/* Benefits Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6 items-center">
            
            {/* Left side benefits */}
            <div className="space-y-10">
              {detail.whyChooseUs.slice(0, 3).map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0 font-bold ring-4 ring-brand-50/50">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-800 text-base leading-snug">{benefit.title}</h3>
                    <p className="text-slate-500 text-xs mt-2 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Central Mockup Image */}
            <div className="flex justify-center items-center">
              <div className="w-full max-w-xs md:max-w-sm rounded-[32px] overflow-hidden border border-slate-100 bg-slate-50 shadow-2xl p-2 relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/10 to-transparent rounded-[32px] pointer-events-none z-10" />
                <div className="aspect-[3/4] rounded-[24px] overflow-hidden bg-white">
                  <img 
                    src={detail.whyChooseUsMiddleImage} 
                    alt="Core dashboard preview" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </div>
            </div>

            {/* Right side benefits */}
            <div className="space-y-10">
              {detail.whyChooseUs.slice(3, 6).map((benefit, i) => (
                <div key={i} className="flex gap-4 lg:flex-row">
                  <div className="w-12 h-12 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0 font-bold ring-4 ring-brand-50/50">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-800 text-base leading-snug">{benefit.title}</h3>
                    <p className="text-slate-500 text-xs mt-2 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ── TECH STACK SECTION (Arch/Semi-circle layout) ── */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-brand-50 border border-brand-100/80 shadow-[0_2px_10px_rgba(124,58,237,0.06)] mb-5">
              <span className="text-[0.7rem] font-jakarta font-extrabold text-brand-600 uppercase tracking-[0.2em]">
                Tech Stack
              </span>
            </div>
            <h2 className="font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              {detail.techTitle}
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-4 max-w-xl mx-auto leading-relaxed">
              {detail.techDesc}
            </p>
          </div>

          {/* Curved Tech Arch / Grid */}
          <div className="relative max-w-3xl mx-auto mt-10">
            {/* Background Arch SVG */}
            <div className="absolute inset-0 flex justify-center items-end opacity-20 z-0 pointer-events-none">
              <svg viewBox="0 0 600 200" className="w-full max-w-2xl h-auto fill-none stroke-brand-500 stroke-2" strokeDasharray="6 6">
                <path d="M 50 200 A 250 250 0 0 1 550 200" />
              </svg>
            </div>

            {/* Symmetrical Tech Grid/Flex list */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10 relative z-10">
              {detail.techItems.map((tech, i) => (
                <div 
                  key={i} 
                  className="bg-white border border-slate-100 shadow-md rounded-2xl p-4 sm:p-6 w-28 sm:w-36 flex flex-col items-center gap-3 transition-transform duration-300 hover:-translate-y-1.5"
                >
                  <img src={tech.iconUrl} alt={tech.name} className="w-10 h-10 sm:w-14 sm:h-14 object-contain" />
                  <span className="font-extrabold text-slate-800 text-xs sm:text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── ENQUIRY FORM SECTION (Exactly matching the style requested) ── */}
      <section id="enquiry-form-section" className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(#7c3aed_0.02rem,transparent_0.02rem)] bg-[size:1.5rem_1.5rem] opacity-30 pointer-events-none" />
        
        <div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10">
          
          <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl p-8 sm:p-12">
            <div className="text-center mb-10">
              <div className="w-10 h-1 rounded-full bg-slate-950 mx-auto mb-4" />
              <h2 className="font-extrabold text-3xl text-slate-900 font-jakarta tracking-tight">
                Send us your Enquiry
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-3 font-medium">
                Let us know what you need, and our experts will get back to you within 24 hours.
              </p>
            </div>

            {submitSuccess ? (
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 text-center text-emerald-800 animate-fade-in">
                <svg className="w-12 h-12 text-emerald-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-extrabold text-lg">Enquiry Sent Successfully!</h3>
                <p className="text-xs text-emerald-600 mt-2">
                  Thank you for reaching out. We have received your inquiry and will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs sm:text-sm font-extrabold text-slate-700 mb-2">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white placeholder-slate-400 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all"
                  />
                </div>

                {/* Contact Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-extrabold text-slate-700 mb-2">
                    Contact Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your contact number"
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white placeholder-slate-400 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all"
                  />
                </div>

                {/* Email ID */}
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-extrabold text-slate-700 mb-2">
                    Email ID <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white placeholder-slate-400 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all"
                  />
                </div>

                {/* Brand Name */}
                <div>
                  <label htmlFor="brandName" className="block text-xs sm:text-sm font-extrabold text-slate-700 mb-2">
                    Your Brand Name
                  </label>
                  <input
                    type="text"
                    id="brandName"
                    name="brandName"
                    value={formData.brandName}
                    onChange={handleChange}
                    placeholder="Enter your brand name"
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white placeholder-slate-400 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-extrabold text-slate-700 mb-2">
                    Describe your requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your project goals..."
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white placeholder-slate-400 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-slate-950 hover:bg-brand-600 disabled:bg-slate-400 text-white rounded-xl text-xs sm:text-sm font-extrabold transition-all shadow-md cursor-pointer flex justify-center items-center gap-2 transform active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit'
                  )}
                </button>

              </form>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}
