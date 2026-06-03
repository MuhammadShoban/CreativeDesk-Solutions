import { useEffect } from 'react';

const BASE_URL = 'https://www.creativedesksolutions.online';
const BRAND    = 'CreativeDesk Solutions';

interface SEOConfig {
  title: string;
  description: string;
  canonical: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  /** Optional: Override OG image for specific pages */
  ogImage?: string;
  /** noindex pages (404, 500, etc.) */
  noindex?: boolean;
}

const SEO_MAP: Record<string, SEOConfig> = {
  home: {
    title: `${BRAND} | Website Development, Mobile App & Custom Software Development Agency`,
    description: `${BRAND} is a top-rated website development company & mobile app development agency. We deliver custom software, ecommerce, Android apps, React Native, and AI automation services for businesses worldwide. Get a free quote today.`,
    canonical: `${BASE_URL}/`,
    breadcrumbs: [{ name: 'Home', url: `${BASE_URL}/` }],
  },
  services: {
    title: `Our Services | Website, Mobile App & AI Development — ${BRAND}`,
    description: `Explore all digital services by ${BRAND}: website development, mobile app development, custom software development, ecommerce development, AI automation, and more. Worldwide delivery.`,
    canonical: `${BASE_URL}/services`,
    breadcrumbs: [
      { name: 'Home', url: `${BASE_URL}/` },
      { name: 'Services', url: `${BASE_URL}/services` },
    ],
  },
  about: {
    title: `About Us | Who We Are & Our Process — ${BRAND}`,
    description: `Learn about ${BRAND} — a fast-growing digital agency founded in 2023. Discover our team, our proven 5-step development process, and why 1.3L+ audience members trust us with their business.`,
    canonical: `${BASE_URL}/about`,
    breadcrumbs: [
      { name: 'Home', url: `${BASE_URL}/` },
      { name: 'About', url: `${BASE_URL}/about` },
    ],
  },
  portfolio: {
    title: `Portfolio | Our Work & Case Studies — ${BRAND}`,
    description: `View ${BRAND}'s portfolio of websites, mobile apps, and custom software projects. Real results for real businesses — ecommerce, SaaS, healthcare, fintech, and more.`,
    canonical: `${BASE_URL}/portfolio`,
    breadcrumbs: [
      { name: 'Home', url: `${BASE_URL}/` },
      { name: 'Portfolio', url: `${BASE_URL}/portfolio` },
    ],
  },
  contact: {
    title: `Contact Us | Get a Free Quote — ${BRAND}`,
    description: `Ready to build your project? Contact ${BRAND} today for a free consultation and quote. We respond within 24 hours. Reach us via email, WhatsApp, or our contact form.`,
    canonical: `${BASE_URL}/contact`,
    breadcrumbs: [
      { name: 'Home', url: `${BASE_URL}/` },
      { name: 'Contact', url: `${BASE_URL}/contact` },
    ],
  },
  blog: {
    title: `Blog | Web Dev, Mobile App & AI Insights — ${BRAND}`,
    description: `Read the ${BRAND} blog for expert guides on website development costs, Flutter vs React Native, custom software development, AI automation, ecommerce, and more.`,
    canonical: `${BASE_URL}/blog`,
    breadcrumbs: [
      { name: 'Home', url: `${BASE_URL}/` },
      { name: 'Blog', url: `${BASE_URL}/blog` },
    ],
  },
  'top-projects': {
    title: `Top Projects | Featured Case Studies — ${BRAND}`,
    description: `Explore the top development projects by ${BRAND}. From ecommerce platforms to AI-powered apps — see the work that sets us apart.`,
    canonical: `${BASE_URL}/top-projects`,
    breadcrumbs: [
      { name: 'Home', url: `${BASE_URL}/` },
      { name: 'Top Projects', url: `${BASE_URL}/top-projects` },
    ],
  },
  '404': {
    title: `Page Not Found (404) — ${BRAND}`,
    description: `The page you're looking for doesn't exist. Return to the ${BRAND} homepage.`,
    canonical: `${BASE_URL}/`,
    noindex: true,
  },
  '500': {
    title: `Server Error (500) — ${BRAND}`,
    description: `Something went wrong on our end. Please try again later or contact ${BRAND} support.`,
    canonical: `${BASE_URL}/`,
    noindex: true,
  },
};

/** Per-service-page SEO configs */
const SERVICE_SEO: Record<string, SEOConfig> = {
  'services/web-development': {
    title: `Website Development Services | Custom & Ecommerce — ${BRAND}`,
    description: `Professional website development services by ${BRAND}. Custom website development, ecommerce website development, WordPress, SEO-optimized sites, and web apps for businesses worldwide. From $500.`,
    canonical: `${BASE_URL}/services/web-development`,
    breadcrumbs: [
      { name: 'Home', url: `${BASE_URL}/` },
      { name: 'Services', url: `${BASE_URL}/services` },
      { name: 'Website Development', url: `${BASE_URL}/services/web-development` },
    ],
  },
  'services/mobile-app': {
    title: `Mobile App Development Services | iOS & Android — ${BRAND}`,
    description: `Custom mobile app development by ${BRAND}. iOS & Android apps, React Native cross-platform development, android app development, and healthcare mobile apps for startups and enterprises. From $3,000.`,
    canonical: `${BASE_URL}/services/mobile-app`,
    breadcrumbs: [
      { name: 'Home', url: `${BASE_URL}/` },
      { name: 'Services', url: `${BASE_URL}/services` },
      { name: 'Mobile App Development', url: `${BASE_URL}/services/mobile-app` },
    ],
  },
  'services/custom-software': {
    title: `Custom Software Development Services | Startups & Enterprise — ${BRAND}`,
    description: `End-to-end custom software development by ${BRAND}. Custom software solutions for startups, healthcare, fintech, and enterprise clients. Agile process, full source code ownership. From $5,000.`,
    canonical: `${BASE_URL}/services/custom-software`,
    breadcrumbs: [
      { name: 'Home', url: `${BASE_URL}/` },
      { name: 'Services', url: `${BASE_URL}/services` },
      { name: 'Custom Software Development', url: `${BASE_URL}/services/custom-software` },
    ],
  },
  'services/ai-automations': {
    title: `AI Automation & Chatbot Services | LLM Integration — ${BRAND}`,
    description: `Intelligent AI automation services by ${BRAND}. Custom LLM integrations, AI-powered chatbots, workflow automation, and business process automation for companies worldwide.`,
    canonical: `${BASE_URL}/services/ai-automations`,
    breadcrumbs: [
      { name: 'Home', url: `${BASE_URL}/` },
      { name: 'Services', url: `${BASE_URL}/services` },
      { name: 'AI Automation', url: `${BASE_URL}/services/ai-automations` },
    ],
  },
};

/** Blog post SEO — covers each post slug */
const BLOG_SEO: Record<string, SEOConfig> = {
  'blog/how-much-does-web-development-cost': {
    title: `How Much Does Website Development Cost in 2026? — ${BRAND}`,
    description: `Complete guide to website development costs in 2026. Landing pages ($500–$3,000), business websites ($2,000–$10,000), ecommerce ($5,000–$30,000+). Real pricing from ${BRAND}.`,
    canonical: `${BASE_URL}/blog/how-much-does-web-development-cost`,
    breadcrumbs: [
      { name: 'Home', url: `${BASE_URL}/` },
      { name: 'Blog', url: `${BASE_URL}/blog` },
      { name: 'Website Development Cost', url: `${BASE_URL}/blog/how-much-does-web-development-cost` },
    ],
  },
  'blog/flutter-vs-react-native': {
    title: `Flutter vs React Native in 2026: Which Should You Choose? — ${BRAND}`,
    description: `Flutter vs React Native: a detailed comparison for 2026. Performance, ecosystem, cost, hiring, and use cases explained by ${BRAND}'s mobile development experts.`,
    canonical: `${BASE_URL}/blog/flutter-vs-react-native`,
    breadcrumbs: [
      { name: 'Home', url: `${BASE_URL}/` },
      { name: 'Blog', url: `${BASE_URL}/blog` },
      { name: 'Flutter vs React Native', url: `${BASE_URL}/blog/flutter-vs-react-native` },
    ],
  },
  'blog/how-to-hire-web-developer': {
    title: `How to Hire a Web Developer in 2026: Complete Guide — ${BRAND}`,
    description: `Learn how to hire a web developer in 2026. What to look for, where to find talent, interview questions, and red flags. Expert advice from ${BRAND}.`,
    canonical: `${BASE_URL}/blog/how-to-hire-web-developer`,
    breadcrumbs: [
      { name: 'Home', url: `${BASE_URL}/` },
      { name: 'Blog', url: `${BASE_URL}/blog` },
      { name: 'How to Hire a Web Developer', url: `${BASE_URL}/blog/how-to-hire-web-developer` },
    ],
  },
  'blog/react-vs-nextjs-for-business': {
    title: `React vs Next.js for Business Websites in 2026 — ${BRAND}`,
    description: `React vs Next.js: which is better for your business website in 2026? SEO, performance, cost, and real-world use cases compared by ${BRAND}.`,
    canonical: `${BASE_URL}/blog/react-vs-nextjs-for-business`,
    breadcrumbs: [
      { name: 'Home', url: `${BASE_URL}/` },
      { name: 'Blog', url: `${BASE_URL}/blog` },
      { name: 'React vs Next.js', url: `${BASE_URL}/blog/react-vs-nextjs-for-business` },
    ],
  },
  'blog/ai-automation-for-business': {
    title: `AI Automation for Business: A Practical Guide (2026) — ${BRAND}`,
    description: `How AI automation transforms business operations in 2026. Chatbots, workflow automation, LLM integration, and ROI data. Practical guide by ${BRAND}.`,
    canonical: `${BASE_URL}/blog/ai-automation-for-business`,
    breadcrumbs: [
      { name: 'Home', url: `${BASE_URL}/` },
      { name: 'Blog', url: `${BASE_URL}/blog` },
      { name: 'AI Automation for Business', url: `${BASE_URL}/blog/ai-automation-for-business` },
    ],
  },
  'blog/custom-software-development-guide': {
    title: `Custom Software Development: Complete Guide for 2026 — ${BRAND}`,
    description: `Everything you need to know about custom software development: process, cost, timeline, technologies, and how to choose the right partner. By ${BRAND}.`,
    canonical: `${BASE_URL}/blog/custom-software-development-guide`,
    breadcrumbs: [
      { name: 'Home', url: `${BASE_URL}/` },
      { name: 'Blog', url: `${BASE_URL}/blog` },
      { name: 'Custom Software Guide', url: `${BASE_URL}/blog/custom-software-development-guide` },
    ],
  },
  'blog/best-website-development-company-guide': {
    title: `How to Choose the Best Website Development Company (2026) — ${BRAND}`,
    description: `A step-by-step guide to choosing the best website development company in 2026. Questions to ask, red flags to avoid, and how ${BRAND} compares.`,
    canonical: `${BASE_URL}/blog/best-website-development-company-guide`,
    breadcrumbs: [
      { name: 'Home', url: `${BASE_URL}/` },
      { name: 'Blog', url: `${BASE_URL}/blog` },
      { name: 'Best Website Development Company', url: `${BASE_URL}/blog/best-website-development-company-guide` },
    ],
  },
  'blog/ecommerce-website-development-guide': {
    title: `Ecommerce Website Development Guide for 2026 — ${BRAND}`,
    description: `Complete ecommerce website development guide: platforms, costs, must-have features, and how to launch a high-converting online store. By ${BRAND}.`,
    canonical: `${BASE_URL}/blog/ecommerce-website-development-guide`,
    breadcrumbs: [
      { name: 'Home', url: `${BASE_URL}/` },
      { name: 'Blog', url: `${BASE_URL}/blog` },
      { name: 'Ecommerce Website Development', url: `${BASE_URL}/blog/ecommerce-website-development-guide` },
    ],
  },
  'blog/android-app-development-guide': {
    title: `Android App Development Guide 2026: Cost, Process & Tips — ${BRAND}`,
    description: `Everything you need to know about Android app development in 2026. Cost, timeline, tech stack, and how to find the right Android development partner. By ${BRAND}.`,
    canonical: `${BASE_URL}/blog/android-app-development-guide`,
    breadcrumbs: [
      { name: 'Home', url: `${BASE_URL}/` },
      { name: 'Blog', url: `${BASE_URL}/blog` },
      { name: 'Android App Development', url: `${BASE_URL}/blog/android-app-development-guide` },
    ],
  },
  'blog/react-native-app-development-guide': {
    title: `React Native App Development Guide 2026 — ${BRAND}`,
    description: `Complete React Native app development guide: what it is, when to use it, cost, performance, and how to hire React Native developers. By ${BRAND}.`,
    canonical: `${BASE_URL}/blog/react-native-app-development-guide`,
    breadcrumbs: [
      { name: 'Home', url: `${BASE_URL}/` },
      { name: 'Blog', url: `${BASE_URL}/blog` },
      { name: 'React Native App Development', url: `${BASE_URL}/blog/react-native-app-development-guide` },
    ],
  },
  'blog/mobile-app-development-cost-guide': {
    title: `Mobile App Development Cost in 2026: Full Breakdown — ${BRAND}`,
    description: `How much does mobile app development cost in 2026? Real pricing for iOS, Android, and cross-platform apps. Detailed breakdown by ${BRAND}.`,
    canonical: `${BASE_URL}/blog/mobile-app-development-cost-guide`,
    breadcrumbs: [
      { name: 'Home', url: `${BASE_URL}/` },
      { name: 'Blog', url: `${BASE_URL}/blog` },
      { name: 'Mobile App Development Cost', url: `${BASE_URL}/blog/mobile-app-development-cost-guide` },
    ],
  },
  'blog/custom-software-development-company-guide': {
    title: `How to Choose a Custom Software Development Company (2026) — ${BRAND}`,
    description: `A definitive guide to selecting the right custom software development company in 2026. Evaluation criteria, questions to ask, and red flags. By ${BRAND}.`,
    canonical: `${BASE_URL}/blog/custom-software-development-company-guide`,
    breadcrumbs: [
      { name: 'Home', url: `${BASE_URL}/` },
      { name: 'Blog', url: `${BASE_URL}/blog` },
      { name: 'Custom Software Company Guide', url: `${BASE_URL}/blog/custom-software-development-company-guide` },
    ],
  },
};

function getSEOConfig(activePage: string, currentPath: string): SEOConfig {
  const cleanPath = currentPath.replace(/^\/+/, '').replace(/\/+$/, '');

  // Service detail pages
  if (activePage === 'service-detail' && SERVICE_SEO[cleanPath]) {
    return SERVICE_SEO[cleanPath];
  }

  // Blog posts
  if (activePage === 'blog' && cleanPath.startsWith('blog/') && BLOG_SEO[cleanPath]) {
    return BLOG_SEO[cleanPath];
  }

  // Static pages
  return SEO_MAP[activePage] ?? SEO_MAP['home'];
}

function setMetaTag(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLinkTag(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function injectBreadcrumbLD(breadcrumbs: Array<{ name: string; url: string }>) {
  // Remove existing breadcrumb script if any
  const existing = document.getElementById('breadcrumb-ld');
  if (existing) existing.remove();

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = 'breadcrumb-ld';
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  });
  document.head.appendChild(script);
}

function injectNoindex(noindex: boolean) {
  let el = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', 'robots');
    document.head.appendChild(el);
  }
  el.setAttribute(
    'content',
    noindex
      ? 'noindex, nofollow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
  );
}

/**
 * useSEO — Dynamic per-page SEO for React SPA
 *
 * Updates on every route change:
 * - document.title
 * - <meta name="description">
 * - <link rel="canonical">
 * - <meta property="og:title"> / og:description / og:url
 * - <meta name="twitter:title"> / twitter:description
 * - <meta name="robots"> (noindex for error pages)
 * - BreadcrumbList JSON-LD (Guideline #14)
 */
export function useSEO(activePage: string, currentPath: string) {
  useEffect(() => {
    const config = getSEOConfig(activePage, currentPath);

    // 1. Title
    document.title = config.title;

    // 2. Meta description
    setMetaTag('description', config.description);

    // 3. Canonical
    setLinkTag('canonical', config.canonical);

    // 4. OG tags
    setMetaTag('og:title', config.title, 'property');
    setMetaTag('og:description', config.description, 'property');
    setMetaTag('og:url', config.canonical, 'property');
    if (config.ogImage) {
      setMetaTag('og:image', config.ogImage, 'property');
    }

    // 5. Twitter tags
    setMetaTag('twitter:title', config.title);
    setMetaTag('twitter:description', config.description);

    // 6. Robots (noindex for error pages)
    injectNoindex(config.noindex ?? false);

    // 7. BreadcrumbList JSON-LD
    if (config.breadcrumbs && config.breadcrumbs.length > 0) {
      injectBreadcrumbLD(config.breadcrumbs);
    }

  }, [activePage, currentPath]);
}
