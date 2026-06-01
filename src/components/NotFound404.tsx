import { useEffect, useRef } from 'react';

export default function NotFound404() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated floating particles background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles: { x: number; y: number; r: number; dx: number; dy: number; alpha: number }[] = [];
    for (let i = 0; i < 55; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 3 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  const navigate = (path: string) => {
    window.history.pushState(null, '', path);
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-violet-950 to-slate-900">
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        {/* Glitchy 404 */}
        <div className="relative mb-6 select-none" aria-hidden="true">
          <span
            className="block text-[9rem] sm:text-[12rem] font-extrabold leading-none tracking-tighter"
            style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              background: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 50%, #c084fc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 40px rgba(139,92,246,0.5))',
            }}
          >
            404
          </span>
          {/* Ghost icon floating */}
          <div
            className="absolute top-0 right-0 text-5xl"
            style={{ animation: 'float404 3s ease-in-out infinite' }}
          >
            👻
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/20 border border-violet-400/30 mb-5">
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          <span className="text-violet-300 text-xs font-semibold tracking-widest uppercase">
            Page Not Found
          </span>
        </div>

        <h1
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
          style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
        >
          Oops! You've drifted into the void
        </h1>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-10">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track — your next great project awaits.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white text-sm transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
            style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              background: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)',
              boxShadow: '0 4px 24px rgba(124,58,237,0.4)',
            }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Home
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-violet-300 text-sm border border-violet-500/40 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-violet-400 hover:-translate-y-0.5"
            style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Us
          </button>
        </div>

        {/* Quick links */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {[
            { label: 'Services', path: '/services' },
            { label: 'Portfolio', path: '/portfolio' },
            { label: 'Blog', path: '/blog' },
            { label: 'About', path: '/about' },
          ].map((link) => (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              className="px-4 py-1.5 rounded-full text-xs font-semibold text-slate-400 border border-slate-700 bg-white/5 hover:border-violet-500/50 hover:text-violet-300 transition-all duration-200"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float404 {
          0%, 100% { transform: translateY(0px) rotate(-5deg); }
          50% { transform: translateY(-18px) rotate(5deg); }
        }
      `}</style>
    </div>
  );
}
