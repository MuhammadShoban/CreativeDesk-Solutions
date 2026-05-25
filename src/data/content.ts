export const services = [
  {
    id: 'web-dev',
    title: 'Website Development',
    subtitle: 'High-performance, SEO-focused platforms',
    desc: 'We build blazing-fast, visually arresting websites customized to scale your audience using advanced modern architectures.',
    bullets: ['Next.js & React Applications', 'Headless CMS Integration', 'E-Commerce Portals', 'Performance Optimization'],
    tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'GraphQL'],
    color: '#7c3aed',
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    subtitle: 'Immersive iOS & Android apps',
    desc: 'Native-feeling, fluid mobile apps optimized for frictionless experiences — from design to App Store launch.',
    bullets: ['Cross-Platform React Native', 'Smooth Gestures & UI', 'Biometric Auth', 'Offline-First Support'],
    tech: ['React Native', 'Flutter', 'iOS/Swift', 'Firebase', 'Android/Kotlin'],
    color: '#2563eb',
  },
  {
    id: 'maintenance',
    title: 'Web & App Maintenance',
    subtitle: 'Proactive monitoring & 24/7 support',
    desc: 'Eliminate downtime. Proactive monitoring, security patches, updates, and instant bug fixes keep your software flawless.',
    bullets: ['24/7 Server Monitoring', 'Security Audits', 'DB Backups & Cleanups', 'Framework Upgrades'],
    tech: ['Sentry', 'AWS CloudWatch', 'Docker', 'GitHub Actions', 'Linux'],
    color: '#059669',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    subtitle: 'Data-driven growth strategies',
    desc: 'Drive traffic and boost leads with SEO, targeted PPC, and high-impact social campaigns that convert.',
    bullets: ['Technical SEO Audits', 'PPC Management', 'Growth Funnel Design', 'Social Media Branding'],
    tech: ['Google Analytics', 'Ahrefs', 'Meta Ads', 'SEMrush', 'HubSpot'],
    color: '#d97706',
  },
  {
    id: 'ai-automations',
    title: 'AI Automations',
    subtitle: 'Intelligent bots & workflow automation',
    desc: 'Streamline operations with custom AI chatbots, semantic search, and agentic workflows that integrate into your stack.',
    bullets: ['Custom LLM Integrations', 'RAG Chatbots', 'Workflow Automation', 'Data Extraction & Structuring'],
    tech: ['OpenAI API', 'LangChain', 'Python', 'Pinecone', 'n8n', 'Make.com'],
    color: '#db2777',
  },
];

import imgSweetMart from '../assets/project_sweetmart.png';
import imgAuraJewelry from '../assets/project_aura_jewelry.png';
import imgVogueThread from '../assets/project_vogue_thread.png';
import imgFitSphere from '../assets/project_fitsphere.png';
import imgFinPay from '../assets/project_finpay.png';
import imgZipDelivery from '../assets/project_zipdelivery.png';

export const projects = [
  { id: 1, title: 'SweetMart E-Commerce Website', category: 'web-dev', label: 'Web Dev', stat: 'E-Commerce', desc: 'Premium sweets storefront with modern UI and smooth responsive design.', img: imgSweetMart },
  { id: 2, title: 'Aura Luxury Jewelry Store', category: 'web-dev', label: 'Web Dev', stat: 'Luxury UX', desc: 'High-end diamond and jewellery boutique with refined shopping experiences.', img: imgAuraJewelry },
  { id: 3, title: 'Vogue Thread Designer Store', category: 'web-dev', label: 'Web Dev', stat: 'Fashion Store', desc: 'Bespoke modern online apparel and curated designer fashion brand.', img: imgVogueThread },
  { id: 4, title: 'FitSphere Fitness App', category: 'mobile-dev', label: 'Mobile App', stat: 'Fitness Tracker', desc: 'Interactive workout tracking application featuring custom native health charts.', img: imgFitSphere },
  { id: 5, title: 'FinPay Digital Wallet', category: 'mobile-dev', label: 'Mobile App', stat: 'Fintech Wallet', desc: 'Secure contactless mobile transaction app with real-time financial dashboards.', img: imgFinPay },
  { id: 6, title: 'ZipDelivery Courier App', category: 'mobile-dev', label: 'Mobile App', stat: 'Courier App', desc: 'On-demand parcel and food courier tracking application with live maps.', img: imgZipDelivery },
];

export const testimonials = [
  { name: 'Sarah Jenkins', role: 'CEO, ApexRetail', text: 'CreativeDesk Solutions transformed our presence. Site speed up 200% — directly mapped to a huge spike in revenue. Incredible team.', rating: 5 },
  { name: 'Imran Malik', role: 'Co-Founder, FitSphere', text: 'The mobile app is spectacular. Smooth animations, native UI, bulletproof security. They guided us from mockup to App Store seamlessly.', rating: 5 },
  { name: 'David Thorne', role: 'Director of Ops, FinCorp', text: 'Their AI automation restructured our back-office completely. We went from manual form processing to an autonomous pipeline in weeks.', rating: 5 },
];

export const processSteps = [
  { num: '01', title: 'Discovery & Scope', desc: 'Deep-dive sessions mapping features, data structures, and tech specs with your team.' },
  { num: '02', title: 'UX/UI Engineering', desc: 'Figma mockups showing interactions, responsive views, accessibility, and aesthetic polish.' },
  { num: '03', title: 'Agile Development', desc: 'Incremental sprints with TypeScript, Git versioning, and continuous peer code review.' },
  { num: '04', title: 'QA & Performance', desc: 'Unit testing, speed tuning, cross-browser audits, and real-user mock testing sessions.' },
  { num: '05', title: 'Launch & Care', desc: 'Zero-downtime deployments, continuous backup schedules, and dedicated SLA support.' },
];
