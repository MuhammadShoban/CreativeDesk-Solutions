import { useState } from 'react';
import { IconMail, IconPhone, IconPin, IconCheck } from './Icons';
import whatsappIcon from '../assets/whatsapp.png';

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', service:'web-dev', message:'' });
  const [done, setDone] = useState(false);

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
    setTimeout(() => {
      setDone(false);
      setForm({ name:'', email:'', phone:'', service:'web-dev', message:'' });
    }, 5000);
  };

  const infos = [
    { icon: <IconMail />, label:'Email Us', value:'hirecreativedesksolutions@gmail.com', href:'mailto:hirecreativedesksolutions@gmail.com' },
    { icon: <IconPhone />, label:'Phone',  value:'+92 340 0744384',                      href:'tel:+923400744384' },
    { icon: <IconPin />,   label:'HQ',     value:'Gulberg, Lahore, Pakistan',            href:null },
  ];

  return (
    <section id="contact" className="pt-24 sm:pt-36 pb-24 sm:pb-36 relative overflow-hidden bg-slate-100">
      {/* Uiverse Contact Polka Dot Background */}
      <div className="contact-polka-background" />

      {/* Radial glow blobs */}
      <div className="absolute top-20 -right-48 w-[400px] h-[400px] rounded-full pointer-events-none opacity-30 blur-3xl z-10"
           style={{ background: 'radial-gradient(circle, #0ed2da 0%, transparent 70%)' }} />
      <div className="absolute bottom-24 -left-48 w-[450px] h-[450px] rounded-full pointer-events-none opacity-35 blur-3xl z-10"
           style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }} />

      {/* ── Top Wave Separator transitioning from Process (F3F3F3) ── */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none rotate-180">
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
            fill="#f3f4f6"
          />
        </svg>
      </div>

      {/* ── Bottom Wave Separator transitioning to Footer Loader (slate-950) ── */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
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
            fill="#020617"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Details */}
          <div>
            <span className="section-badge">Get In Touch</span>
            <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mt-3 mb-4 sm:mb-5 leading-tight">
              Let's Build Something
              <span className="gradient-text"> Legacy-Defining</span>
            </h2>
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-7 sm:mb-10">
              Fill out the form and our tech lead will contact you within 4 business hours
              to schedule a Discovery Call.
            </p>

            <div className="flex flex-col gap-3">
              {infos.map(info => (
                <div key={info.label} className="flex items-center gap-4">
                  <span className="w-11 h-11 rounded-full bg-brand-50 border border-brand-100
                                   flex items-center justify-center text-brand-600 flex-shrink-0">
                    {info.icon}
                  </span>
                  <div>
                    <p className="text-xs font-jakarta font-bold uppercase tracking-wider text-slate-400">
                      {info.label}
                    </p>
                    {info.href
                      ? <a href={info.href} className="font-jakarta font-semibold text-slate-800 hover:text-brand-600 transition-colors">
                          {info.value}
                        </a>
                      : <p className="font-jakarta font-semibold text-slate-800">{info.value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* Social & Call buttons */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8">
              <a
                href="https://wa.me/923400744384"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 text-[#128C7E] font-jakarta font-bold text-xs sm:text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              >
                <img src={whatsappIcon} alt="" className="w-5 h-5 object-contain rounded-full" />
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/creativedesksolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#f9ce34]/10 via-[#ee2a7b]/10 to-[#6228d7]/10 hover:from-[#f9ce34]/20 hover:via-[#ee2a7b]/20 hover:to-[#6228d7]/20 border border-[#ee2a7b]/20 text-[#ee2a7b] font-jakarta font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                Instagram
              </a>
              <a
                href="tel:+923400744384"
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-brand-50 hover:bg-brand-100 border border-brand-200/60 text-brand-700 font-jakarta font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M21.384 17.752a15.908 15.908 0 01-2.928-1.747 1.024 1.024 0 00-1.408.16l-1.28 1.6a11.954 11.954 0 01-5.552-5.552l1.6-1.28a1.02 1.02 0 00.16-1.408 15.932 15.932 0 01-1.747-2.928c-.24-.56-.784-.912-1.392-.912H5.056c-.736 0-1.36.56-1.424 1.296C3.12 12.56 7.44 20.88 16.704 20.368c.736-.064 1.296-.688 1.296-1.424v-3.792c0-.608-.352-1.152-.916-1.392z"/>
                </svg>
                Call Now
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass-card p-5 sm:p-8 lg:p-10">
            {done ? (
              <div className="flex flex-col items-center text-center py-10 gap-5">
                <span className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200
                                 flex items-center justify-center text-emerald-500 text-3xl">
                  <IconCheck />
                </span>
                <h3 className="font-jakarta font-extrabold text-2xl text-slate-900">
                  Message Sent!
                </h3>
                <p className="text-slate-500">
                  Thank you, <strong>{form.name || 'friend'}</strong>. We'll reply within 4 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handle} className="flex flex-col gap-5">
                <div>
                  <h3 className="font-jakarta font-extrabold text-xl text-slate-900 mb-1">
                    Request a Discovery Call
                  </h3>
                  <p className="text-sm text-slate-500">All inquiries are strictly confidential.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-jakarta font-bold text-xs text-slate-700 uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      required placeholder="e.g. Sarah Jenkins" className="form-input"
                      value={form.name} onChange={e => setForm({...form, name:e.target.value})}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-jakarta font-bold text-xs text-slate-700 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      required type="tel" placeholder="e.g. +92 300 1234567" className="form-input"
                      value={form.phone} onChange={e => setForm({...form, phone:e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-jakarta font-bold text-xs text-slate-700 uppercase tracking-wider">
                      Work Email
                    </label>
                    <input
                      required type="email" placeholder="sarah@company.com" className="form-input"
                      value={form.email} onChange={e => setForm({...form, email:e.target.value})}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-jakarta font-bold text-xs text-slate-700 uppercase tracking-wider">
                      Required Service
                    </label>
                    <select
                      className="form-input"
                      value={form.service} onChange={e => setForm({...form, service:e.target.value})}
                    >
                      <option value="web-dev">Website Development</option>
                      <option value="mobile-dev">Mobile App Development</option>
                      <option value="maintenance">Web & App Maintenance</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="ai-automations">AI Automations</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-jakarta font-bold text-xs text-slate-700 uppercase tracking-wider">
                    Project Brief
                  </label>
                  <textarea
                    required rows={4} className="form-input resize-none"
                    placeholder="Describe your goals, scale, and timeline..."
                    value={form.message} onChange={e => setForm({...form, message:e.target.value})}
                  />
                </div>

                <button type="submit" className="btn-primary justify-center w-full py-4 text-base">
                  Submit Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
