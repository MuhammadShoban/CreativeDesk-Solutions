import { useState, useEffect } from 'react';
import { services } from '../data/content';
import { IconCheck } from './Icons';

export default function Estimator() {
  const [selected, setSelected] = useState(['web-dev']);
  const [scale, setScale]       = useState(2);
  const [sla, setSla]           = useState(false);
  const [price, setPrice]       = useState(0);
  const [modal, setModal]       = useState(false);

  const basePrices: Record<string,number> = {
    'web-dev':1200,'mobile-dev':2000,'maintenance':400,
    'digital-marketing':800,'ai-automations':1500,
  };
  const scaleMulti = [0, 0.75, 1.0, 1.6];

  useEffect(() => {
    const base = selected.reduce((acc, id) => acc + (basePrices[id] ?? 0), 0);
    setPrice(Math.round(base * scaleMulti[scale] + (sla ? 300 : 0)));
  }, [selected, scale, sla]);

  const toggle = (id: string) => {
    setSelected(prev =>
      prev.includes(id)
        ? prev.length > 1 ? prev.filter(x => x !== id) : prev
        : [...prev, id]
    );
  };

  const scaleLbls = ['', 'MVP / Startup', 'Growth Business', 'Enterprise Scale'];
  const timelines = ['','4–6 wks','8–12 wks','16–24 wks'];
  const teams     = ['','1–2 Engineers','3–5 Engineers','Dedicated Team'];

  return (
    <section id="estimator" className="py-28 bg-white relative overflow-hidden">
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(90deg, rgba(150,120,255,0.06) 1px, transparent 1px), linear-gradient(180deg, rgba(150,120,255,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 80%)',
      }} />

      {/* Radial glow blobs */}
      <div className="absolute top-20 -left-48 w-[400px] h-[400px] rounded-full pointer-events-none opacity-20 blur-3xl"
           style={{ background: 'radial-gradient(circle, #0ed2da 0%, transparent 70%)' }} />
      <div className="absolute bottom-10 -right-48 w-[450px] h-[450px] rounded-full pointer-events-none opacity-25 blur-3xl"
           style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }} />

      {/* Floating dot pattern */}
      <div className="absolute top-12 right-12 w-20 h-20 opacity-15 pointer-events-none hidden lg:block select-none text-brand-400">
        <svg width="80" height="80" fill="currentColor">
          <pattern id="dot-estimator" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" />
          </pattern>
          <rect width="80" height="80" fill="url(#dot-estimator)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-badge">Price Estimator</span>
          <h2 className="font-jakarta font-extrabold text-4xl lg:text-5xl text-slate-900 mt-2 mb-4">
            Estimate Your Budget
          </h2>
          <p className="text-slate-500 text-lg">
            Select services and project scale to get an instant ballpark budget.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8">

          {/* ── Controls ── */}
          <div className="glass-card p-8 flex flex-col gap-8">

            {/* Services checkboxes */}
            <div>
              <p className="font-jakarta font-bold text-xs uppercase tracking-wider text-slate-400 mb-4">
                1 · Select Services
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map(s => {
                  const on = selected.includes(s.id);
                  return (
                    <button
                      key={s.id}
                      onClick={() => toggle(s.id)}
                      className={`flex items-start gap-3 p-3.5 rounded-xl border text-left
                                  transition-all duration-200 cursor-pointer
                                  ${on
                                    ? 'bg-white border-brand-300 shadow-brand-sm'
                                    : 'bg-brand-50/60 border-brand-100 hover:border-brand-200'
                                  }`}
                    >
                      <span className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded flex items-center justify-center
                                        border transition-colors ${on ? 'bg-brand-600 border-brand-600' : 'border-slate-300'}`}>
                        {on && <span className="text-white"><IconCheck /></span>}
                      </span>
                      <span>
                        <span className="font-jakarta font-bold text-sm text-slate-800 block">{s.title}</span>
                        <span className="text-xs text-slate-500">{s.subtitle}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Scale slider */}
            <div>
              <p className="font-jakarta font-bold text-xs uppercase tracking-wider text-slate-400 mb-3">
                2 · Project Scale
              </p>
              <div className="flex justify-between text-xs font-jakarta font-bold text-slate-400 mb-2">
                {scaleLbls.slice(1).map((l,i) => (
                  <span key={l} className={scale === i+1 ? 'text-brand-600' : ''}>{l}</span>
                ))}
              </div>
              <input
                type="range" min={1} max={3} step={1} value={scale}
                onChange={e => setScale(+e.target.value)}
                className="styled-range w-full"
              />
            </div>

            {/* SLA toggle */}
            <div>
              <p className="font-jakarta font-bold text-xs uppercase tracking-wider text-slate-400 mb-3">
                3 · SLA Add-on
              </p>
              <button
                onClick={() => setSla(v => !v)}
                className={`flex items-start gap-3 p-4 rounded-xl border w-full text-left
                            transition-all ${sla ? 'bg-white border-brand-300 shadow-brand-sm' : 'bg-brand-50/60 border-brand-100'}`}
              >
                <span className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded flex items-center justify-center
                                  border transition-colors ${sla ? 'bg-brand-600 border-brand-600' : 'border-slate-300'}`}>
                  {sla && <span className="text-white"><IconCheck /></span>}
                </span>
                <span>
                  <span className="font-jakarta font-bold text-sm text-slate-800 block">Premium 24/7 SLA</span>
                  <span className="text-xs text-slate-500">Priority response within 1hr + dedicated developer.</span>
                </span>
              </button>
            </div>
          </div>

          {/* ── Output ── */}
          <div className="flex items-stretch">
            <div className="glass-card p-8 w-full flex flex-col gap-6
                            bg-gradient-to-br from-brand-50/60 to-white">
              <h3 className="font-jakarta font-bold text-slate-500 text-sm uppercase tracking-wider">
                Estimated Investment
              </h3>

              {/* Price */}
              <div className="flex items-end gap-1">
                <span className="font-jakarta font-extrabold text-2xl text-brand-700 mb-2">$</span>
                <span className="font-jakarta font-extrabold text-6xl text-brand-800 leading-none">
                  {price.toLocaleString()}
                </span>
                <span className="text-slate-400 text-sm font-medium mb-2 ml-1">est.</span>
              </div>

              {/* Bullets */}
              <ul className="flex flex-col gap-3 border-t border-brand-100 pt-5">
                {[
                  `Timeline: ${timelines[scale]}`,
                  `Team: ${teams[scale]}`,
                  'GitHub Access included',
                  'NDA & IP protection',
                ].map(t => (
                  <li key={t} className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                    <span className="text-emerald-500 flex-shrink-0"><IconCheck /></span>
                    {t}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setModal(true)}
                className="btn-primary w-full justify-center mt-auto"
              >
                Request Custom Proposal
              </button>
              <p className="text-xs text-slate-400 text-center -mt-3">
                *Estimate only. Final quote after spec review.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm
                     flex items-center justify-center p-4"
          onClick={() => setModal(false)}
        >
          <div
            className="glass-card p-8 w-full max-w-md animate-[modalIn_0.3s_cubic-bezier(0.175,0.885,0.32,1.275)]"
            onClick={e => e.stopPropagation()}
          >
            <h3 className="font-jakarta font-extrabold text-xl text-slate-900 mb-2">
              Request Custom Quote
            </h3>
            <p className="text-slate-500 text-sm mb-6">
              Estimated at <strong className="text-brand-700">${price.toLocaleString()}</strong>. Share
              your contact and receive an itemized proposal within 24 hrs.
            </p>
            <form onSubmit={e => { e.preventDefault(); setModal(false); }} className="flex flex-col gap-4">
              <input required placeholder="Full Name"       className="form-input" />
              <input required type="email" placeholder="Business Email" className="form-input" />
              <button type="submit" className="btn-primary justify-center">Send Request</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
