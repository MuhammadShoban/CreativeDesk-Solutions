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

// ── Lightweight skeleton loader for below-fold sections ──
function SectionSkeleton() {
  return (
    <div className="w-full py-24 flex items-center justify-center" aria-hidden="true">
      <div className="w-12 h-12 rounded-full border-4 border-brand-200 border-t-brand-600 animate-spin" />
    </div>
  );
}

function App() {
  const [isTopProjects, setIsTopProjects] = useState(window.location.hash === '#top-projects');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const isTopProj = hash === '#top-projects';
      
      setIsTopProjects(isTopProj);

      if (isTopProj) {
        window.scrollTo({ top: 0 });
      } else if (hash && hash !== '#') {
        // If navigating to a specific section anchor, scroll to it smoothly
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 120);
      } else {
        // If Home/Empty hash, scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Check initial hash on mount
    if (window.location.hash && window.location.hash !== '#top-projects') {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    }
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      {/* Floating contact: lazy but loads quickly, minimal JS */}
      <Suspense fallback={null}>
        <FloatingContact />
      </Suspense>

      {/* Critical path: no suspense needed, imported directly */}
      <Navbar />

      <main>
        {isTopProjects ? (
          <Suspense fallback={<SectionSkeleton />}>
            <TopProjects />
          </Suspense>
        ) : (
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
