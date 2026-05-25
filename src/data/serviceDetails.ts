export interface Offering {
  title: string;
  desc: string;
  image: string;
  btnText: string;
  link: string;
}

export interface Benefit {
  title: string;
  desc: string;
}

export interface TechItem {
  name: string;
  iconUrl: string;
}

export interface ServiceDetailData {
  id: string;
  title: string;
  subtitle: string;
  valueStatement: string;
  priceStatement: string;
  ctaText: string;
  heroImage: string;
  offeringsTitle: string;
  offeringsDesc: string;
  offerings: Offering[];
  whyChooseUsTitle: string;
  whyChooseUsDesc: string;
  whyChooseUsMiddleImage: string;
  whyChooseUs: Benefit[];
  techTitle: string;
  techDesc: string;
  techItems: TechItem[];
}

export const serviceDetails: Record<string, ServiceDetailData> = {
  'custom-software': {
    id: 'custom-software',
    title: 'Custom Enterprise Software Solutions',
    subtitle: 'Bespoke systems engineered specifically to streamline your business logic, optimize operations, and scale with your growth.',
    valueStatement: 'Replace fragmented spreadsheets and legacy systems with a single unified, secure platform built for your workflows.',
    priceStatement: 'Bespoke systems starting from just Rs.150,000/-',
    ctaText: 'Request Custom Quote',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    offeringsTitle: 'What All We Offer',
    offeringsDesc: 'Every component of our custom software suites is built with scalability, auditability, and speed in mind.',
    offerings: [
      {
        title: 'Interactive Dashboards',
        desc: 'Real-time reporting on operations, financial metrics, and user analytics with granular export features.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80',
        btnText: 'View Mockup',
        link: '#/contact'
      },
      {
        title: 'Bespoke Admin Panel',
        desc: 'Manage users, permissions, logs, settings, and workflows without touching a single line of code.',
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=500&q=80',
        btnText: 'Explore System',
        link: '#/contact'
      },
      {
        title: 'Core Backend APIs',
        desc: 'High-throughput, fully documented RESTful and GraphQL APIs built with rock-solid server-side logic.',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=80',
        btnText: 'See Docs',
        link: '#/contact'
      },
      {
        title: 'Database Architectures',
        desc: 'Relational and document databases optimized with indexing, partition, and automated backup pipelines.',
        image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=500&q=80',
        btnText: 'Database Specs',
        link: '#/contact'
      }
    ],
    whyChooseUsTitle: 'Why Choose CreativeDesk?',
    whyChooseUsDesc: 'We make developing and deploying custom enterprise software easy, secure, and hassle-free.',
    whyChooseUsMiddleImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80',
    whyChooseUs: [
      { title: 'Tailored Business Logic', desc: 'Every line of code is structured to align with your exact business processes.' },
      { title: 'Granular Access Control', desc: 'Secure authorization layers to safeguard sensitive business and user records.' },
      { title: 'Real-time WebSockets', desc: 'Live data streaming for instant system synchronization and push notifications.' },
      { title: 'Enterprise-Grade Security', desc: 'Advanced threat protection, security auditing, and continuous bug scans.' },
      { title: 'Automated Operations', desc: 'Set up cron jobs, report dispatching, and email queues in a couple of clicks.' },
      { title: 'Clean Architecture', desc: 'Highly modular, documented codebase making future additions fast and inexpensive.' }
    ],
    techTitle: 'Built with Modern Enterprise Stack',
    techDesc: 'We use high-performance, robust, and secure technologies to ensure maximum responsiveness and longevity.',
    techItems: [
      { name: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'TypeScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'PostgreSQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'AWS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'GraphQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' }
    ]
  },
  'saas-prebuilt': {
    id: 'saas-prebuilt',
    title: 'Ready-to-Launch Prebuilt SaaS Solutions',
    subtitle: 'Deploy highly-converting, fully customized multi-vendor marketplaces, delivery platforms, and digital booking suites in days.',
    valueStatement: 'Launch a proven business model without the risk and expense of starting from scratch.',
    priceStatement: 'Prebuilt software worth Lakhs starting at just Rs.60,000/-',
    ctaText: 'Deploy SaaS Solution',
    heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80',
    offeringsTitle: 'What All We Offer',
    offeringsDesc: 'Our prebuilt suites come with everything needed to start selling and managing operations out of the box.',
    offerings: [
      {
        title: 'Seller Dashboard',
        desc: 'Dedicated panel for store owners to manage inventories, view orders, track income, and arrange payouts.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80',
        btnText: 'Check Out',
        link: '#/contact'
      },
      {
        title: 'Powerful Admin Panel',
        desc: 'System control center to manage commissions, payments, vendors, users, and review insights.',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=500&q=80',
        btnText: 'Check Out',
        link: '#/contact'
      },
      {
        title: 'Customer Android & iOS App',
        desc: 'Feature-rich native mobile applications for customers with address locators, cart flows, and live tracking.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=500&q=80',
        btnText: 'Download Now',
        link: '#/contact'
      },
      {
        title: 'Responsive Web Storefront',
        desc: 'Gorgeous customer web application with fast indexing, payment integrations, and dynamic searching.',
        image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=500&q=80',
        btnText: 'Explore Demo',
        link: '#/contact'
      },
      {
        title: 'Delivery Boy App & Panel',
        desc: 'Dedicated mobile workflow for riders to accept shipments, manage drop-offs, and trace earning histories.',
        image: 'https://images.unsplash.com/photo-1526367790999-015078648c7e?auto=format&fit=crop&w=500&q=80',
        btnText: 'Check Out',
        link: '#/contact'
      },
      {
        title: 'Partner App Manager',
        desc: 'Mobile manager allowing merchant managers to adjust stock, modify prices, and process orders on the fly.',
        image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=500&q=80',
        btnText: 'Download Now',
        link: '#/contact'
      }
    ],
    whyChooseUsTitle: 'Why Choose Our Prebuilt SaaS?',
    whyChooseUsDesc: 'We make launching your commercial marketplace quick, scalable, and fully optimized.',
    whyChooseUsMiddleImage: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=600&q=80',
    whyChooseUs: [
      { title: 'Geo-Location Data Insights', desc: 'Analyze delivery radii and target local client hotspots automatically.' },
      { title: 'Specially Engineered Logic', desc: 'Optimized specifically for quick-commerce, groceries, and multi-vendor suites.' },
      { title: 'Versatile Payment Gateways', desc: 'Secure integrations with Stripe, PayPal, Razorpay, Cash on Delivery, and more.' },
      { title: 'All-Inclusive Package', desc: 'Includes rider app, client app, seller panel, and administrative center.' },
      { title: 'Enhanced Security Features', desc: 'Secure logins, OTP authentication, and automated audit histories.' },
      { title: 'Broad Custom Categories', desc: 'Easily organize products into tags, variants, and flexible catalogues.' }
    ],
    techTitle: 'Robust Multi-Platform Tech Stack',
    techDesc: 'Engineered for seamless performance across Android, iOS, and responsive web browsers.',
    techItems: [
      { name: 'Flutter', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      { name: 'Laravel', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
      { name: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Android', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
      { name: 'Apple', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg' },
      { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
    ]
  },
  'website-development': {
    id: 'website-development',
    title: 'High-Performance Website Development',
    subtitle: 'Blazing-fast, stunning Next.js and React storefronts built with precise visual hierarchy, headless CMS, and technical SEO focus.',
    valueStatement: 'First impressions matter. We design and build online experiences that capture attention and turn traffic into revenue.',
    priceStatement: 'Premium speed-optimized websites starting from just Rs.40,000/-',
    ctaText: 'Build Your Site',
    heroImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80',
    offeringsTitle: 'What All We Offer',
    offeringsDesc: 'Every website we deliver is audited for Core Web Vitals, responsiveness, and conversion layout.',
    offerings: [
      {
        title: 'React & Next.js Builds',
        desc: 'Server-side rendered and static websites offering unmatched loading speed and interactive layout.',
        image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=500&q=80',
        btnText: 'View Showcase',
        link: '#/contact'
      },
      {
        title: 'Headless CMS Architecture',
        desc: 'Allow your team to publish blogs, update portfolios, and edit copy easily without code edits.',
        image: 'https://images.unsplash.com/photo-1545670723-196ed0954986?auto=format&fit=crop&w=500&q=80',
        btnText: 'See Configs',
        link: '#/contact'
      },
      {
        title: 'Modern E-Commerce Storefronts',
        desc: 'Lightning-fast product checkouts, dynamic cart models, and secure payment integrations.',
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=500&q=80',
        btnText: 'Launch Shop',
        link: '#/contact'
      },
      {
        title: 'Conversion Landing Pages',
        desc: 'Tailored single-page funnel sites engineered with clear call-to-actions, hooks, and high copy layouts.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80',
        btnText: 'Boost Leads',
        link: '#/contact'
      }
    ],
    whyChooseUsTitle: 'Why Choose CreativeDesk Websites?',
    whyChooseUsDesc: 'We bridge premium visual aesthetics with lightning-fast load times for maximum conversion.',
    whyChooseUsMiddleImage: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=600&q=80',
    whyChooseUs: [
      { title: 'Core Web Vitals Focus', desc: '100% Google PageSpeed scores, fast paint times, and fluid interactions.' },
      { title: 'Tailored Modern Layouts', desc: 'Custom Tailwind stylesheets without generic, boring layouts.' },
      { title: 'Technical SEO Configs', desc: 'Semantic markup, schema structures, meta tags, and robots configurations.' },
      { title: 'Fully Responsive UI', desc: 'Seamless transition across wide-screen monitors, laptops, tablets, and phones.' },
      { title: 'Secure HTTPS Layers', desc: 'SSL certificates, secure headers, and protected client side routes.' },
      { title: 'Robust Analytics Setup', desc: 'Custom event tagging, hotjar maps, and conversion tracking ready.' }
    ],
    techTitle: 'Built with Modern Web Architectures',
    techDesc: 'We develop using fast, modern libraries and styling architectures to make your site stand out.',
    techItems: [
      { name: 'Next.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Tailwind CSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg' },
      { name: 'HTML5', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Figma', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' }
    ]
  },
  'mobile-apps-development': {
    id: 'mobile-apps-development',
    title: 'Cross-Platform Mobile Apps Development',
    subtitle: 'Immersive, fluid, and robust Flutter & React Native applications tailored to put your business directly in your customers\' pockets.',
    valueStatement: 'Scale sales and customer loyalty with feature-rich mobile apps engineered for fluid gestures, fast loading, and offline access.',
    priceStatement: 'Cross-platform app packages starting from just Rs.120,000/-',
    ctaText: 'Build Your App',
    heroImage: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=1000&q=80',
    offeringsTitle: 'What All We Offer',
    offeringsDesc: 'We handle everything from initial UI/UX designs to Apple Store and Google Play Store launch.',
    offerings: [
      {
        title: 'Flutter Mobile App',
        desc: 'Stunning single-codebase application with native rendering speed, custom widgets, and smooth layouts.',
        image: 'https://images.unsplash.com/photo-1617042375876-a13e36732a04?auto=format&fit=crop&w=500&q=80',
        btnText: 'See Mockup',
        link: '#/contact'
      },
      {
        title: 'React Native Apps',
        desc: 'Highly modular applications incorporating native components for immediate UI response and fast updates.',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500&q=80',
        btnText: 'View Tech',
        link: '#/contact'
      },
      {
        title: 'Store Publishing Support',
        desc: 'Complete assistance setting up Apple Developer accounts, preparing store listings, assets, and passing review.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80',
        btnText: 'App Store Specs',
        link: '#/contact'
      },
      {
        title: 'Offline-First Database',
        desc: 'Local state caching so your customers can browse catalogues, add notes, and check profiles without internet.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80',
        btnText: 'Database Specs',
        link: '#/contact'
      }
    ],
    whyChooseUsTitle: 'Why Choose Our Mobile Apps?',
    whyChooseUsDesc: 'We specialize in building lightweight, interactive, and high-performance cross-platform applications.',
    whyChooseUsMiddleImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80',
    whyChooseUs: [
      { title: 'Frictionless Gestures & UI', desc: 'Custom transitions, scroll animations, and swipe actions that feel natural.' },
      { title: 'Unified Codebase System', desc: 'Single codebase powering both Android and iOS devices, halving update costs.' },
      { title: 'Secure Payment Portals', desc: 'Integrated credit cards, mobile wallets, Apple Pay, and Google Pay SDKs.' },
      { title: 'Push Notifications Manager', desc: 'Target customers directly with live updates, alerts, and marketing popups.' },
      { title: 'Fast Image Optimization', desc: 'Cached image loaders ensuring zero stutter while scrolling catalogues.' },
      { title: 'Device Hardware Access', desc: 'Secure integrations with device camera, biometric face ID, maps, and Bluetooth.' }
    ],
    techTitle: 'Mobile Native Performance Stack',
    techDesc: 'Leveraging top-tier frameworks to compile native binaries for fast loading speed.',
    techItems: [
      { name: 'Flutter', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      { name: 'Dart', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
      { name: 'React Native', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Firebase', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg' },
      { name: 'Swift', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
      { name: 'Kotlin', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' }
    ]
  },
  'software-maintenance': {
    id: 'software-maintenance',
    title: 'Proactive Software Maintenance & Support',
    subtitle: 'Zero downtime monitoring, continuous backups, database optimizations, security updates, and instant hotfixes to keep your platforms running.',
    valueStatement: 'Focus on scaling your business. Leave server management, security audits, and bug fixes to our expert engineering team.',
    priceStatement: 'Comprehensive maintenance support starting from just Rs.25,000/- monthly',
    ctaText: 'Get Maintenance Plan',
    heroImage: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1000&q=80',
    offeringsTitle: 'What All We Offer',
    offeringsDesc: 'We monitor your servers and codebase 24/7 to catch and resolve glitches before they affect users.',
    offerings: [
      {
        title: '24/7 Server Monitoring',
        desc: 'Uptime trackers, latency alerts, CPU usage logs, and automated script re-runs.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&q=80',
        btnText: 'View Logs Flow',
        link: '#/contact'
      },
      {
        title: 'Continuous Data Backups',
        desc: 'Daily encrypted backups stored on multiple cloud locations to ensure zero data loss.',
        image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=500&q=80',
        btnText: 'See Safety Specs',
        link: '#/contact'
      },
      {
        title: 'Security Audits & Patches',
        desc: 'Continuous package updates, SQL injection checks, dependency auditing, and SSL management.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=500&q=80',
        btnText: 'Auditing Flow',
        link: '#/contact'
      },
      {
        title: 'Database Tune-ups',
        desc: 'Query auditing, database indexing, log clearing, and server storage cleanup cycles.',
        image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=500&q=80',
        btnText: 'Database Specs',
        link: '#/contact'
      }
    ],
    whyChooseUsTitle: 'Why Choose Our Support Plan?',
    whyChooseUsDesc: 'We act as your dedicated DevOps and engineering department, responding instantly to system issues.',
    whyChooseUsMiddleImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
    whyChooseUs: [
      { title: 'Guaranteed SLA Uptime', desc: 'Our team monitors and maintains systems to ensure 99.9% uptime compliance.' },
      { title: 'Immediate Glitch Hotfixes', desc: 'Direct access to senior developer queues for immediate critical bug fixes.' },
      { title: 'Version Upgrade Audits', desc: 'Careful testing and updating of frameworks, libraries, and Node runtime.' },
      { title: 'Dedicated Helpdesk Access', desc: 'Create tasks, check support tickets, and chat with engineers directly on WhatsApp.' },
      { title: 'Traffic Load Balancing', desc: 'Setup cloud auto-scalers to keep software fast during high traffic spikes.' },
      { title: 'Performance Logs Dispatch', desc: 'Receive monthly summaries detailing system health, backup status, and speed logs.' }
    ],
    techTitle: 'DevOps & Monitoring Stack',
    techDesc: 'We use industry-standard server, automation, and logging tools to watch over your codebase.',
    techItems: [
      { name: 'Docker', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Sentry', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sentry/sentry-original.svg' },
      { name: 'GitHub Actions', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'AWS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'Linux', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
      { name: 'Nginx', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' }
    ]
  },
  'ai-automations': {
    id: 'ai-automations',
    title: 'Intelligent AI & Workflow Automations',
    subtitle: 'Automate manual operations, connect internal apps, and build intelligent chatbots utilizing custom RAG systems and LLM integrations.',
    valueStatement: 'Reduce overhead expenses and human error by connecting your platforms with automated n8n/Zapier pipelines and AI agents.',
    priceStatement: 'Custom automation systems starting from just Rs.80,000/-',
    ctaText: 'Automate Your Flow',
    heroImage: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1000&q=80',
    offeringsTitle: 'What All We Offer',
    offeringsDesc: 'We build autonomous agentic pipelines that run in the background, syncing data and handling clients.',
    offerings: [
      {
        title: 'Custom RAG Chatbots',
        desc: 'AI customer assistants fed with your company databases to answer client queries accurately.',
        image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&w=500&q=80',
        btnText: 'Test Bot',
        link: '#/contact'
      },
      {
        title: 'Zapier & n8n Workflows',
        desc: 'Seamless data sharing across CRM, Google Sheets, Slack, Stripe, email systems, and custom APIs.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80',
        btnText: 'Explore Workflows',
        link: '#/contact'
      },
      {
        title: 'Document Data Extraction',
        desc: 'Autonomous reading and categorization of invoices, emails, receipts, and user PDFs into databases.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=80',
        btnText: 'Run Extraction',
        link: '#/contact'
      },
      {
        title: 'Semantic Data Search',
        desc: 'Build smart internal search tools that understand user search intent instead of just keywords.',
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=500&q=80',
        btnText: 'Try Search',
        link: '#/contact'
      }
    ],
    whyChooseUsTitle: 'Why Automate with CreativeDesk?',
    whyChooseUsDesc: 'We design intelligent workflows that eliminate hours of routine administrative data entries.',
    whyChooseUsMiddleImage: 'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&w=600&q=80',
    whyChooseUs: [
      { title: 'Zero Hallucinations Guarantee', desc: 'Secure system limits preventing LLMs from fabricating wrong info.' },
      { title: 'Drastic Operation Savings', desc: 'Perform hundreds of back-office entries in seconds for pennies.' },
      { title: 'Real-time Lead Ingestion', desc: 'Send ads leads immediately into sales pipelines and notify reps on Slack.' },
      { title: 'Custom API Integrations', desc: 'Connect old internal databases and software packages with modern systems.' },
      { title: 'Autonomous Email Sorters', desc: 'Read support mail, draft answers, categorize issues, and flag managers.' },
      { title: 'Secure Data Auditing', desc: 'Enterprise data safety guaranteeing proprietary information remains private.' }
    ],
    techTitle: 'Modern AI & Pipeline Tech Stack',
    techDesc: 'Integrating cutting-edge AI networks with secure background automation frameworks.',
    techItems: [
      { name: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'OpenAI', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg' },
      { name: 'Make.com', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/make/make-original.svg' },
      { name: 'LangChain', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'FastAPI', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
    ]
  }
};
