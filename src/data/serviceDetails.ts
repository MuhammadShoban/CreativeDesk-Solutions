import adminPanelMockup from '../assets/admin_panel_mockup.png';
import sqlDatabaseLogo from '../assets/sql_database_logo.png';
import whyChooseUsImg from '../assets/why_choose_us.png';
import prebuiltSaasWhyChoose from '../assets/prebuilt_saas_why_choose.png';
import webReactSites from '../assets/web_react_sites.png';
import webContentEditor from '../assets/web_content_editor.png';
import webEcommerceStore from '../assets/web_ecommerce_store.png';
import webLandingPages from '../assets/web_landing_pages.png';
import mobileAppsHero from '../assets/mobile_apps_hero.png';
import mobileFlutterApps from '../assets/mobile_flutter_apps.png';
import mobileReactNative from '../assets/mobile_react_native.png';
import mobileAppStoreLaunch from '../assets/mobile_app_store_launch.png';
import mobileOfflineDb from '../assets/mobile_offline_db.png';
import mobileWhyChooseUs from '../assets/mobile_why_choose_us.png';
import maintenanceHero from '../assets/maintenance_hero.png';
import maintenanceUptimeMonitoring from '../assets/maintenance_uptime_monitoring.png';
import maintenanceDailyBackups from '../assets/maintenance_daily_backups.png';

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
  // Optional SEO content section
  seoHeading?: string;
  seoContent?: string[];
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
    offeringsDesc: 'Every component of our custom software suites is built with scalability, security, and speed in mind.',
    offerings: [
      {
        title: 'Real-Time Dashboards',
        desc: 'Easy-to-read screens showing your sales, user activity, and business performance in real time.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80',
        btnText: '',
        link: ''
      },
      {
        title: 'Custom Admin Panels',
        desc: 'A simple control center that lets you manage users, update settings, and view reports without touching code.',
        image: adminPanelMockup,
        btnText: '',
        link: ''
      },
      {
        title: 'Secure App Connections',
        desc: 'Connects your different systems and apps together securely so information updates instantly.',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=80',
        btnText: '',
        link: ''
      },
      {
        title: 'Safe Database Storage',
        desc: 'A secure database that organizes and saves all your user details, orders, and company data with daily backups.',
        image: sqlDatabaseLogo,
        btnText: '',
        link: ''
      }
    ],
    whyChooseUsTitle: 'Why Choose CreativeDesk?',
    whyChooseUsDesc: 'We make developing and deploying custom enterprise software easy, secure, and hassle-free.',
    whyChooseUsMiddleImage: whyChooseUsImg,
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
        desc: 'A private dashboard for shop owners to upload items, check customer orders, and track their daily sales.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80',
        btnText: '',
        link: ''
      },
      {
        title: 'Master Control Center',
        desc: 'A main admin panel for you to manage platform commissions, review vendor listings, and handle all users.',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=500&q=80',
        btnText: '',
        link: ''
      },
      {
        title: 'Customer Android & iOS Apps',
        desc: 'Beautiful, fast mobile apps for customers to browse your products, add items to cart, and track orders.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=500&q=80',
        btnText: '',
        link: ''
      },
      {
        title: 'Fast Online Shop Website',
        desc: 'A modern, responsive e-commerce website that looks great and works perfectly on both phones and computers.',
        image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=500&q=80',
        btnText: '',
        link: ''
      },
      {
        title: 'Rider Delivery App',
        desc: 'A simple mobile app for delivery drivers to accept delivery requests, see addresses, and update order status.',
        image: 'https://images.unsplash.com/photo-1526367790999-015078648c7e?auto=format&fit=crop&w=500&q=80',
        btnText: '',
        link: ''
      },
      {
        title: 'Store Manager Mobile App',
        desc: 'A lightweight mobile app that lets shop managers process orders, edit item prices, and check stock on the go.',
        image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=500&q=80',
        btnText: '',
        link: ''
      }
    ],
    whyChooseUsTitle: 'Why Choose Our Prebuilt SaaS?',
    whyChooseUsDesc: 'We make launching your commercial marketplace quick, scalable, and fully optimized.',
    whyChooseUsMiddleImage: prebuiltSaasWhyChoose,
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
        title: 'Fast Next.js & React Sites',
        desc: 'High-performance websites built with the latest technology so your pages load instantly for visitors.',
        image: webReactSites,
        btnText: '',
        link: ''
      },
      {
        title: 'Easy Content Editor',
        desc: 'A simple dashboard that lets your team write blogs, add projects, and edit text without needing developer help.',
        image: webContentEditor,
        btnText: '',
        link: ''
      },
      {
        title: 'Modern E-Commerce Stores',
        desc: 'Super-fast online shops with smooth checkout processes, active shopping carts, and secure payment setups.',
        image: webEcommerceStore,
        btnText: '',
        link: ''
      },
      {
        title: 'High-Converting Landing Pages',
        desc: 'Clean, focused single-page websites engineered to showcase your product and turn visitors into buyers.',
        image: webLandingPages,
        btnText: '',
        link: ''
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
    heroImage: mobileAppsHero,
    offeringsTitle: 'What All We Offer',
    offeringsDesc: 'We handle everything from initial UI/UX designs to Apple Store and Google Play Store launch.',
    offerings: [
      {
        title: 'Stunning Flutter Apps',
        desc: 'Beautiful applications designed to run smoothly on both Android and iOS devices from one codebase.',
        image: mobileFlutterApps,
        btnText: '',
        link: ''
      },
      {
        title: 'Fast React Native Apps',
        desc: 'Highly responsive mobile apps that feel fast, scroll smoothly, and update with zero delay.',
        image: mobileReactNative,
        btnText: '',
        link: ''
      },
      {
        title: 'App Store Launch Support',
        desc: 'We handle the technical side of uploading and publishing your apps to Apple App Store and Google Play Store.',
        image: mobileAppStoreLaunch,
        btnText: '',
        link: ''
      },
      {
        title: 'Offline Database Support',
        desc: 'Your app will still show products, save settings, and open saved pages even when the customer has no internet.',
        image: mobileOfflineDb,
        btnText: '',
        link: ''
      }
    ],
    whyChooseUsTitle: 'Why Choose Our Mobile Apps?',
    whyChooseUsDesc: 'We specialize in building lightweight, interactive, and high-performance cross-platform applications.',
    whyChooseUsMiddleImage: mobileWhyChooseUs,
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
    heroImage: maintenanceHero,
    offeringsTitle: 'What All We Offer',
    offeringsDesc: 'We monitor your servers and codebase 24/7 to catch and resolve glitches before they affect users.',
    offerings: [
      {
        title: '24/7 Uptime Monitoring',
        desc: 'We watch your servers day and night to fix errors instantly and keep your platforms online.',
        image: maintenanceUptimeMonitoring,
        btnText: '',
        link: ''
      },
      {
        title: 'Safe Daily Backups',
        desc: 'Automated daily backups stored in secure cloud drives so your business data is always safe.',
        image: maintenanceDailyBackups,
        btnText: '',
        link: ''
      },
      {
        title: 'Security Audits & Patches',
        desc: 'Regular software updates, SSL certificates management, and bug scans to keep hackers away from your site.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=500&q=80',
        btnText: '',
        link: ''
      },
      {
        title: 'Database Tune-ups',
        desc: 'We clean up and optimize your database structure regularly to keep your app fast as your users grow.',
        image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=500&q=80',
        btnText: '',
        link: ''
      }
    ],
    whyChooseUsTitle: 'Why Choose Our Support Plan?',
    whyChooseUsDesc: 'We act as your dedicated DevOps and engineering department, responding instantly to system issues.',
    whyChooseUsMiddleImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
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
        title: 'Smart AI Chat Assistants',
        desc: 'Intelligent chatbots trained on your business data to answer customer questions correctly and instantly.',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=500&q=80',
        btnText: '',
        link: ''
      },
      {
        title: 'n8n & Zapier Integrations',
        desc: 'Automate repetitive tasks by linking Google Sheets, Gmail, CRMs, and Slack to share data automatically.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80',
        btnText: '',
        link: ''
      },
      {
        title: 'AI Document Scanners',
        desc: 'AI systems that read invoices, receipts, and emails, extracting the important data into your databases.',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500&q=80',
        btnText: '',
        link: ''
      },
      {
        title: 'Smart Internal Search',
        desc: 'A search engine for your database that understands what you mean, rather than just matching keywords.',
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=500&q=80',
        btnText: '',
        link: ''
      }
    ],
    whyChooseUsTitle: 'Why Automate with CreativeDesk?',
    whyChooseUsDesc: 'We design intelligent workflows that eliminate hours of routine administrative data entries.',
    whyChooseUsMiddleImage: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&w=600&q=80',
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
      { name: 'Pinecone', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' }
    ]
  }
};
