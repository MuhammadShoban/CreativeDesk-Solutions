import './App.css';
import { lazy, Suspense, useState, useEffect } from 'react';

// ── Critical path: load Navbar + Hero immediately (above-the-fold) ──
import Navbar from './components/Navbar';
import Hero   from './components/Hero';

// ── Below-the-fold: lazy load everything else ──
const PartnersMarquee     = lazy(() => import('./components/PartnersMarquee'));
const Challenges          = lazy(() => import('./components/Challenges'));
const VideoShowcase       = lazy(() => import('./components/VideoShowcase'));
const Services            = lazy(() => import('./components/Services'));
const Portfolio           = lazy(() => import('./components/Portfolio'));
const Testimonials        = lazy(() => import('./components/Testimonials'));
const WhyUs               = lazy(() => import('./components/WhyUs'));
const ProcessComp         = lazy(() =>
  import('./components/ProcessAndTestimonials').then(m => ({ default: m.Process }))
);
const FAQ                 = lazy(() => import('./components/FAQ'));
const Contact             = lazy(() => import('./components/Contact'));
const Footer              = lazy(() => import('./components/Footer'));
const FloatingContact     = lazy(() => import('./components/FloatingContact'));
const TopProjects         = lazy(() => import('./components/TopProjects'));
const ServiceDetail       = lazy(() => import('./components/ServiceDetail'));

// ── Lightweight skeleton loader for below-fold sections ──
function SectionSkeleton() {
  return (
    <div className="w-full py-24 flex items-center justify-center" aria-hidden="true">
      <div className="w-12 h-12 rounded-full border-4 border-brand-200 border-t-brand-600 animate-spin" />
    </div>
  );
}

function getPageFromPath(path: string) {
  const cleanPath = path.replace(/^\/+/, '').replace(/\/+$/, '');
  if (cleanPath.startsWith('services/')) return 'service-detail';
  if (cleanPath === 'services') return 'services';
  if (cleanPath === 'about' || cleanPath === 'process') return 'about';
  if (cleanPath === 'portfolio') return 'portfolio';
  if (cleanPath === 'contact') return 'contact';
  if (cleanPath === 'top-projects') return 'top-projects';
  return 'home';
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handleLocationChange);

    // Intercept local link clicks globally for a smooth SPA routing experience
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (
        anchor &&
        anchor.href &&
        (anchor.getAttribute('href')?.startsWith('/') || anchor.getAttribute('href')?.startsWith('#')) &&
        !anchor.getAttribute('target') &&
        !e.defaultPrevented &&
        e.button === 0 && // Left click only
        !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey // No modifier keys
      ) {
        const href = anchor.getAttribute('href') || '/';
        
        // Handle pure hash links like #estimator
        if (href.startsWith('#')) {
          e.preventDefault();
          window.history.pushState(null, '', `/${href}`);
          window.dispatchEvent(new Event('popstate'));
          const el = document.getElementById(href.substring(1));
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
          return;
        }

        const [path, hash] = href.split('#');
        const currentPathname = window.location.pathname;

        if (path === currentPathname || (path === '/' && currentPathname === '/')) {
          // Same page, just let hash scroll happen if present
          if (hash) {
            e.preventDefault();
            window.history.pushState(null, '', href);
            window.dispatchEvent(new Event('popstate'));
            const el = document.getElementById(hash);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          } else {
            e.preventDefault();
            window.history.pushState(null, '', href);
            window.dispatchEvent(new Event('popstate'));
          }
        } else {
          e.preventDefault();
          window.history.pushState(null, '', href);
          window.dispatchEvent(new Event('popstate'));
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  useEffect(() => {
    // Scroll to section on route load if hash exists
    const hash = window.location.hash || window.location.href.split('#')[1];
    if (hash) {
      const cleanHash = hash.replace(/^#\/?/, '');
      if (cleanHash) {
        setTimeout(() => {
          const el = document.getElementById(cleanHash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      }
    }
  }, [currentPath]);

  const activePage = getPageFromPath(currentPath);

  return (
    <>
      {/* Floating contact: lazy but loads quickly, minimal JS */}
      <Suspense fallback={null}>
        <FloatingContact />
      </Suspense>

      {/* Critical path: no suspense needed, imported directly */}
      <Navbar />

      <main>
        {activePage === 'home' && (
          <>
            {/* Hero loads synchronously (LCP element) */}
            <Hero />

            {/* All below-fold sections are code-split and lazy loaded */}
            <Suspense fallback={<SectionSkeleton />}>
              <PartnersMarquee />
            </Suspense>

            <Suspense fallback={<SectionSkeleton />}>
              <Challenges />
            </Suspense>

            <Suspense fallback={<SectionSkeleton />}>
              <VideoShowcase />
            </Suspense>

            <Suspense fallback={<SectionSkeleton />}>
              <Services />
            </Suspense>

            <Suspense fallback={<SectionSkeleton />}>
              <Portfolio />
            </Suspense>

            <Suspense fallback={<SectionSkeleton />}>
              <Testimonials />
            </Suspense>

            <Suspense fallback={<SectionSkeleton />}>
              <WhyUs />
            </Suspense>

            <Suspense fallback={<SectionSkeleton />}>
              <ProcessComp />
            </Suspense>

            <Suspense fallback={<SectionSkeleton />}>
              <FAQ />
            </Suspense>

            <Suspense fallback={<SectionSkeleton />}>
              <Contact />
            </Suspense>
          </>
        )}

        {activePage === 'services' && (
          <Suspense fallback={<SectionSkeleton />}>
            <Services isPage={true} />
          </Suspense>
        )}

        {activePage === 'about' && (
          <>
            <Suspense fallback={<SectionSkeleton />}>
              <WhyUs isPage={true} />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
              <ProcessComp isPage={true} />
            </Suspense>
          </>
        )}

        {activePage === 'portfolio' && (
          <Suspense fallback={<SectionSkeleton />}>
            <Portfolio isPage={true} />
          </Suspense>
        )}

        {activePage === 'contact' && (
          <Suspense fallback={<SectionSkeleton />}>
            <Contact isPage={true} />
          </Suspense>
        )}

        {activePage === 'top-projects' && (
          <Suspense fallback={<SectionSkeleton />}>
            <TopProjects />
          </Suspense>
        )}

        {activePage === 'service-detail' && (
          <Suspense fallback={<SectionSkeleton />}>
            <ServiceDetail currentPath={currentPath} />
          </Suspense>
        )}
      </main>

      {/* CREATIVEDESK SOLUTIONS loader section above footer */}
      <div className="bg-slate-950 flex justify-center items-center py-20 overflow-hidden select-none">
        <div className="loader-wrapper scale-75 sm:scale-100 md:scale-125 lg:scale-150 my-0">
          <span className="loader-letter">C</span>
          <span className="loader-letter">R</span>
          <span className="loader-letter">E</span>
          <span className="loader-letter">A</span>
          <span className="loader-letter">T</span>
          <span className="loader-letter">I</span>
          <span className="loader-letter">V</span>
          <span className="loader-letter">E</span>
          <span className="loader-letter">D</span>
          <span className="loader-letter">E</span>
          <span className="loader-letter">S</span>
          <span className="loader-letter">K</span>
          
          <span className="mr-5 sm:mr-8 md:mr-10"></span>
          
          <span className="loader-letter">S</span>
          <span className="loader-letter">O</span>
          <span className="loader-letter">L</span>
          <span className="loader-letter">U</span>
          <span className="loader-letter">T</span>
          <span className="loader-letter">I</span>
          <span className="loader-letter">O</span>
          <span className="loader-letter">N</span>
          <span className="loader-letter">S</span>
          <div className="loader" />
        </div>
      </div>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
