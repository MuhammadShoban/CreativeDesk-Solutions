import { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';
import { IconMenu, IconX } from './Icons';

const navLinks = [
  { label: 'Home',         href: '/' },
  { label: 'Services',     href: '/services' },
  { label: 'About',        href: '/about' },
  { label: 'Portfolio',    href: '/portfolio' },
  { label: 'Blog',         href: '/blog' },
  { label: 'Contact',      href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handlePathChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePathChange);
    return () => window.removeEventListener('popstate', handlePathChange);
  }, []);

  const isActive = (href: string) => {
    const cleanCurrent = currentPath.replace(/^\/+/, '').replace(/\/+$/, '');
    const cleanHref = href.replace(/^\/+/, '').replace(/\/+$/, '');
    if (cleanCurrent === '' && cleanHref === '') return true;
    if (cleanHref === 'services' && cleanCurrent.startsWith('services')) return true;
    if (cleanHref === 'blog' && cleanCurrent.startsWith('blog')) return true;
    return cleanCurrent === cleanHref;
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Floating Pill Navbar ── */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center
                    px-3 sm:px-6 transition-all duration-500
                    ${scrolled ? 'pt-2 sm:pt-4' : 'pt-3 sm:pt-6'}`}
      >
        <nav
          className={`w-full max-w-5xl flex items-center justify-between
                      rounded-full transition-all duration-300
                      ${scrolled
                        ? 'bg-white/95 backdrop-blur-2xl shadow-[0_8px_40px_rgba(91,33,182,0.14)] border border-brand-100/80 px-4 sm:px-8 h-[64px] sm:h-[72px]'
                        : 'bg-white/85 backdrop-blur-xl shadow-[0_4px_28px_rgba(91,33,182,0.10)] border border-brand-100/70 px-4 sm:px-8 h-[68px] sm:h-[76px]'
                      }`}
        >
          {/* ── Left: Logo Mark + Text ── */}
          <a
            href="/"
            className="flex items-center gap-2 sm:gap-3 group select-none flex-shrink-0"
            aria-label="CreativeDesk Solutions Home"
          >
            <img
              src={logoImg}
              alt="CreativeDesk Solutions"
              className="h-12 w-12 sm:h-16 sm:w-16 object-contain drop-shadow-md
                         group-hover:scale-105 transition-transform duration-200"
              fetchPriority="high"
              decoding="sync"
              width="64"
              height="64"
            />

            {/* Brand text */}
            <div className="flex flex-col leading-none gap-[3px]">
              <div className="flex items-baseline">
                <span className="font-jakarta font-bold text-[0.85rem] sm:text-[1.05rem] tracking-tight text-slate-800">
                  CREATIVE
                </span>
                <span className="font-jakarta font-extrabold text-[0.85rem] sm:text-[1.05rem] tracking-tight text-slate-900">
                  DESK
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="block w-3 sm:w-4 h-px bg-slate-400/50" />
                <span className="block w-[5px] h-[5px] rounded-full bg-brand-500 flex-shrink-0" />
                <span className="font-jakarta font-semibold text-[0.5rem] sm:text-[0.58rem] tracking-[0.20em] sm:tracking-[0.24em]
                                 text-slate-500 uppercase">
                  Solutions
                </span>
              </div>
            </div>
          </a>

          {/* ── Center: Menu Links (desktop) ── */}
          <div className="hidden lg:flex items-center justify-center gap-7 xl:gap-9 flex-1 mx-6 xl:mx-8">
            {navLinks.map(l => (
              <a
                key={l.href}
                href={l.href}
                className={`font-jakarta font-semibold text-[0.9rem] xl:text-[1rem] transition-colors duration-150
                           relative group whitespace-nowrap
                           ${isActive(l.href) ? 'text-brand-700' : 'text-slate-600 hover:text-brand-700'}`}
              >
                {l.label}
                <span className={`absolute -bottom-0.5 left-0 h-[2px] bg-brand-500
                                 rounded-full transition-all duration-200 group-hover:w-full
                                 ${isActive(l.href) ? 'w-full' : 'w-0'}`} />
              </a>
            ))}
          </div>

          {/* ── Right: CTA (desktop) ── */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-9 flex-shrink-0">
            <span className="w-px h-5 bg-brand-100" />
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-full
                         font-jakarta font-bold text-[0.85rem] xl:text-[0.9rem] text-white whitespace-nowrap
                         transition-all duration-300 hover:-translate-y-px"
              style={{
                background: 'linear-gradient(15deg,#880088,#aa2068,#cc3f47,#de6f3d,#f09f33,#de6f3d,#cc3f47,#aa2068,#880088) no-repeat',
                backgroundSize: '300%',
                backgroundPosition: 'left center',
                textShadow: '1px 1px 3px rgba(136,0,136,0.5)',
                boxShadow: '0 4px 20px rgba(204,63,71,0.35)',
                transition: 'background-position 0.3s ease, background-size 0.3s ease, transform 0.2s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundSize = '320%';
                el.style.backgroundPosition = 'right center';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundSize = '300%';
                el.style.backgroundPosition = 'left center';
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24" className="w-4 h-4" style={{ fill: '#f09f33' }}>
                <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z" />
              </svg>
              Start Project
            </a>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            className="lg:hidden p-2 text-slate-700 hover:text-brand-600
                       transition-colors ml-auto rounded-lg hover:bg-brand-50"
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <IconX /> : <IconMenu />}
          </button>
        </nav>
      </div>

      {/* ── Mobile Full-Screen Overlay Menu ── */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl flex flex-col lg:hidden"
          style={{ paddingTop: '80px' }}
        >
          {/* Nav links */}
          <nav className="flex flex-col px-6 pt-6 gap-0">
            {navLinks.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className={`font-jakarta font-bold text-xl transition-colors py-4
                           border-b border-slate-100 last:border-0 flex items-center justify-between group
                           ${isActive(l.href) ? 'text-brand-600' : 'text-slate-800 hover:text-brand-600'}`}
              >
                {l.label}
                <svg className="w-4 h-4 text-slate-300 group-hover:text-brand-400 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </nav>

          {/* CTA button */}
          <div className="px-6 mt-8">
            <a
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-4 rounded-2xl
                         font-jakarta font-bold text-lg text-white w-full"
              style={{
                background: 'linear-gradient(15deg,#880088,#aa2068,#cc3f47,#de6f3d,#f09f33,#de6f3d,#cc3f47,#aa2068,#880088) no-repeat',
                backgroundSize: '300%',
                backgroundPosition: 'left center',
                textShadow: '1px 1px 3px rgba(136,0,136,0.5)',
                boxShadow: '0 4px 20px rgba(204,63,71,0.35)',
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24" className="w-5 h-5" style={{ fill: '#f09f33' }}>
                <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z" />
              </svg>
              Start Your Project
            </a>

            {/* Quick contact links */}
            <div className="flex gap-3 mt-4">
              <a
                href="tel:+923400744384"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-brand-100 bg-brand-50 text-brand-700 font-jakarta font-bold text-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M21.384 17.752a15.908 15.908 0 01-2.928-1.747 1.024 1.024 0 00-1.408.16l-1.28 1.6a11.954 11.954 0 01-5.552-5.552l1.6-1.28a1.02 1.02 0 00.16-1.408 15.932 15.932 0 01-1.747-2.928c-.24-.56-.784-.912-1.392-.912H5.056c-.736 0-1.36.56-1.424 1.296C3.12 12.56 7.44 20.88 16.704 20.368c.736-.064 1.296-.688 1.296-1.424v-3.792c0-.608-.352-1.152-.916-1.392z"/>
                </svg>
                Call Now
              </a>
              <a
                href="https://wa.me/923400744384"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 text-[#128C7E] font-jakarta font-bold text-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
