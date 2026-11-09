export interface Project {
  id: string;
  number: string;
  title: string;
  client: string;
  location: string;
  category: string;
  year: string;
  shortDesc: string;
  fullDesc: string;
  challenge: string;
  solution: string;
  features: string[];
  tags: string[];
  metrics: { label: string; value: string }[];
  image: string;
  secondaryImage?: string;
  liveUrl?: string;
  status: "Live Project" | "Client Branding" | "Featured Production";
  rtlSupport?: boolean;
}

export interface ServiceDetail {
  id: string;
  number: string;
  title: string;
  arabicTitle: string;
  tagline: string;
  description: string;
  deliverables: string[];
  valueProps: string[];
  tools: string[];
  timeline: string;
}

export interface CapabilityCard {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlightTag: string;
  features: string[];
  colSpanDesktop: string; // for bento asymmetric layout
}

export const BRAND_INFO = {
  brandName: "ARK®",
  subBrand: "ARK STUDIO",
  founderName: "Abdul Rehman",
  legalName: "Abdulrehman Khalid",
  roleTitle: "Independent Web Designer, Frontend Developer & Graphic Designer",
  shortRole: "Creative Developer & Web Designer",
  location: "Sargodha, Pakistan",
  coordinates: "32.0836° N, 72.6711° E",
  timezone: "PKT (UTC+5)",
  availability: "Available for Freelance Projects Worldwide",
  availabilityShort: "Available for Projects",
  targetRegions: ["Saudi Arabia", "United Arab Emirates", "Pakistan", "United States", "Worldwide"],
  contact: {
    email: "ark203777@gmail.com",
    phoneDisplay: "0314 1495630",
    phoneIntl: "+92 314 1495630",
    whatsappRaw: "923141495630",
    whatsappUrl: "https://wa.me/923141495630",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  stats: [
    { value: "02+", label: "Years Experience", description: "Focused on modern web & brand design" },
    { value: "50+", label: "Projects Completed", description: "Across web development, UI/UX & branding" },
    { value: "100%", label: "Client Satisfaction", description: "Dedicated 1-on-1 collaborative delivery" },
    { value: "EN / AR", label: "Bilingual Mastery", description: "Native LTR and RTL architectural support" },
  ],
  heroTickerTech: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Three.js / 3D WebGL",
    "Tailwind CSS",
    "GSAP & Framer Motion",
    "Figma & UI Systems",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Bilingual AR/EN RTL",
    "Technical SEO & Schema",
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "mian-saqib-hussain",
    number: "01",
    title: "Mian Saqib Hussain",
    client: "Mian Saqib Industrial Fleet",
    location: "Dammam, Saudi Arabia",
    category: "Industrial Services Website",
    year: "2025",
    shortDesc: "Bilingual English and Arabic high-performance website for an established industrial boom truck rental operator in Dammam, KSA.",
    fullDesc: "Engineered a robust, mobile-optimized digital platform tailored to the Saudi Arabian industrial contracting market. Features dual-language Arabic (RTL) and English (LTR) layouts, high-contrast machinery showcases, direct WhatsApp/Call lead generation, and targeted local Dammam search optimization.",
    challenge: "Industrial fleet operators in the Gulf region depend heavily on immediate on-site dispatch calls and WhatsApp communication. The client needed a site that loaded instantaneously in harsh desert connectivity conditions, communicated authority to corporate contractors, and respected Arabic typographic rhythm.",
    solution: "Designed a high-contrast industrial aesthetic with instant click-to-WhatsApp and click-to-call triggers. Built dedicated bilingual architecture using bidirectional CSS and tailored Arabic typography (Cairo/Tajawal feel) with structured schema markup for local Saudi business directories.",
    features: [
      "Bilingual English and Arabic layout with full RTL support",
      "Immediate WhatsApp & Call lead conversion triggers",
      "Optimized imagery of boom truck fleet and technical capabilities",
      "Local SEO targeting Dallah Industrial Area & Eastern Province",
      "Sub-second load times on 4G/5G mobile devices",
    ],
    tags: ["Next.js", "Bilingual RTL/LTR", "Arabic Typography", "Local SEO", "Mobile First", "WhatsApp Engine"],
    metrics: [
      { label: "Target Market", value: "Dammam, KSA" },
      { label: "Language Flow", value: "Arabic & English" },
      { label: "Primary Action", value: "Instant Call / WhatsApp" },
    ],
    image: "/projects/miansaqib-screenshot.jpg",
    secondaryImage: "/projects/boom-truck.webp",
    liveUrl: "https://miansaqib.com/",
    status: "Live Project",
    rtlSupport: true,
  },
  {
    id: "ac-technical-services",
    number: "02",
    title: "AC Technical Services",
    client: "AC Technical Services LLC",
    location: "Dubai & Across UAE",
    category: "Commercial Business Website",
    year: "2025",
    shortDesc: "Comprehensive service presentation and conversion engine for HVAC repair, maintenance and installation across Dubai, Abu Dhabi, Sharjah & Ajman.",
    fullDesc: "Designed and developed a customer-first commercial service platform built to capture high-intent air conditioning repair inquiries throughout the United Arab Emirates. Integrated prominent 24/7 service dispatch badges, structured diagnostic breakdowns, and multi-channel instant contact options.",
    challenge: "In the intense UAE climate, residential and commercial customers require immediate emergency assistance. Competitor websites were cluttered, slow-loading, and lacked clear pricing or response commitments.",
    solution: "Crafted a crisp, trustworthy blue-and-crimson visual language with sticky conversion docks (Call Now, WhatsApp Chat, Book Service). Structured service areas across all emirates to maximize local search indexing and boost inquiry volume.",
    features: [
      "Targeted coverage across Dubai, Abu Dhabi, Sharjah, Ajman & Al Ain",
      "Sticky mobile action dock for zero-friction client dispatch",
      "Structured breakdowns for repair, chemical cleaning & duct installation",
      "Local business Schema.org microdata for Google Search prominence",
      "Ultra-clean typographic hierarchy and intuitive booking navigation",
    ],
    tags: ["React", "Commercial UI/UX", "WhatsApp Conversion", "UAE Local SEO", "Performance First"],
    metrics: [
      { label: "Service Region", value: "Dubai & UAE" },
      { label: "Availability", value: "24/7 Emergency" },
      { label: "Inquiry Channels", value: "WhatsApp / Direct Call" },
    ],
    image: "/projects/actech-screenshot.png",
    secondaryImage: "/projects/ac-technical.webp",
    liveUrl: "https://actech-services.netlify.app/",
    status: "Live Project",
  },
  {
    id: "ark-fast-foodies",
    number: "03",
    title: "ARK Fast Foodies",
    client: "ARK Food & Hospitality Group",
    location: "Pakistan",
    category: "Branding & Promotional Graphic Design",
    year: "2024 - 2025",
    shortDesc: "Complete visual identity, mouth-watering product artwork, social campaigns, and promotional posters for a gourmet burger and fast-food brand.",
    fullDesc: "Executed comprehensive art direction and visual identity design for ARK Fast Foodies. Designed signature promotional posters, hunger-inducing product photography compositions, bold display typography, packaging concepts, and consistent digital marketing assets.",
    challenge: "Fast food branding requires high-energy visual appetite appeal, bold typography that cuts through busy social feeds, and adaptable vector assets for print menus and digital signage.",
    solution: "Established a warm, golden-amber brand palette with deep contrasting charcoal backgrounds. Created high-impact burger hero compositions with rich lighting, dynamic steam and smoke treatments, and punchy promotional lockups ('Delicious Burgers Made with Love').",
    features: [
      "Full brand identity system, color tokens and logo application",
      "High-resolution promotional key visuals and social advertising campaigns",
      "Menu layout hierarchy optimized for rapid customer decision-making",
      "Packaging and print collateral mockups for takeaway and dine-in",
      "Consistent graphic design assets across Instagram, Facebook & store banners",
    ],
    tags: ["Graphic Design", "Brand Identity", "Adobe Photoshop", "Adobe Illustrator", "Art Direction", "Print Collateral"],
    metrics: [
      { label: "Discipline", value: "Brand & Graphic Art" },
      { label: "Assets Created", value: "Logos, Posters, Menus" },
      { label: "Aesthetic", value: "Bold & High-Contrast" },
    ],
    image: "/projects/ark-fast-foodies.webp",
    status: "Client Branding",
  },
  {
    id: "ark-portfolio-creative",
    number: "04",
    title: "ARK Creative Engineering",
    client: "ARK Studio Flagship",
    location: "Sargodha / Worldwide",
    category: "Creative Developer Experience",
    year: "2025 - 2026",
    shortDesc: "Experimental 3D portfolio and digital laboratory showcasing WebGL shaders, kinetic typography, and fluid micro-interactions.",
    fullDesc: "An advanced creative developer showcase blending luxury editorial typography, real-time 3D geometry, interactive cursor physics, and sub-second Next.js page generation. Demonstrates the cutting edge of modern frontend craftsmanship.",
    challenge: "Demonstrating high-end 3D visual capabilities without compromising Lighthouse performance scores, mobile battery life, or accessible keyboard navigation.",
    solution: "Built a customized Three.js WebGL rendering pipeline with procedural chrome and iridescent shaders, coupled with smooth Lenis inertia scrolling and responsive touch fallbacks.",
    features: [
      "Custom procedural 3D sculpture reacting to cursor velocity and scroll",
      "Fluid inertia smooth scrolling powered by Lenis engine",
      "Adaptive dark/light editorial sections with high-contrast readability",
      "Live LTR and RTL toggle demonstrating bilingual layout competence",
      "Sub-second First Contentful Paint with zero layout shift",
    ],
    tags: ["Next.js", "Three.js", "WebGL Shaders", "Tailwind CSS", "GSAP", "TypeScript"],
    metrics: [
      { label: "Performance", value: "95+ Lighthouse" },
      { label: "3D Engine", value: "Three.js WebGL" },
      { label: "Frame Rate", value: "60 - 120 FPS" },
    ],
    image: "/projects/ark-creative-engineering.webp",
    secondaryImage: "/projects/ark-portfolio.webp",
    liveUrl: "https://env-three-kohl.vercel.app/",
    status: "Featured Production",
  },
];

export const BENTO_CAPABILITIES: CapabilityCard[] = [
  {
    id: "bento-web-dev",
    number: "01",
    title: "Website Design & Development",
    subtitle: "Custom Digital Architectures",
    description: "I build bespoke, blazing-fast web experiences from ground zero using Next.js, React, and TypeScript. No generic templates, bloated page builders, or messy spaghetti code.",
    highlightTag: "Engineering Core",
    features: ["Next.js App Router & Server Components", "Microsecond Interactions & Fluid Transitions", "Modular Component Architecture", "100% Responsive Across Every Device"],
    colSpanDesktop: "col-span-12 lg:col-span-8",
  },
  {
    id: "bento-brand-identity",
    number: "02",
    title: "Brand Identity & Graphic Art",
    subtitle: "Distinctive Visual Systems",
    description: "From striking wordmarks and iconography to social campaigns and promotional print assets, I craft brand identities that command respect and remain unforgettable.",
    highlightTag: "Visual Direction",
    features: ["Vector Logo Systems & Monograms", "Typography Hierarchies & Color Theory", "Promotional Key Visuals & Posters", "Social Media Kits & Marketing Graphics"],
    colSpanDesktop: "col-span-12 lg:col-span-4",
  },
  {
    id: "bento-ui-ux",
    number: "03",
    title: "UI/UX & Interactive Design",
    subtitle: "Conversion-Focused Interfaces",
    description: "Every layout, button, and visual rhythm is engineered around user psychology. I design clean editorial interfaces in Figma that turn curious visitors into committed clients.",
    highlightTag: "Human Psychology",
    features: ["Figma Wireframes & Interactive Prototypes", "Design Systems & Tokenized Component Libraries", "Frictionless Checkout & Inquiry Flows", "Accessible Contrast & Micro-interactions"],
    colSpanDesktop: "col-span-12 lg:col-span-4",
  },
  {
    id: "bento-bilingual",
    number: "04",
    title: "Bilingual English & Arabic Builds",
    subtitle: "Native RTL Architecture",
    description: "Specialized in bidirectional web design for Middle Eastern and international markets (Saudi Arabia, UAE, Qatar). Flawless Arabic typography, inverted layout logic, and cultural nuance.",
    highlightTag: "Regional Specialization",
    features: ["Bi-directional CSS & True RTL Layout Mirroring", "Arabic Font Pairing & Typographic Kerning", "Saudi Arabia & UAE Local SEO Architecture", "Cultural Alignment & Conversion Strategy"],
    colSpanDesktop: "col-span-12 lg:col-span-8",
  },
  {
    id: "bento-ai-assisted",
    number: "05",
    title: "AI-Assisted Accelerated Workflow",
    subtitle: "Modern Engineering Velocity",
    description: "Harnessing cutting-edge AI tools to accelerate prototyping, automate tedious boilerplate, and deliver agency-grade websites at freelance speed and unmatched value.",
    highlightTag: "Velocity & Agility",
    features: ["Rapid Prototype Iterations", "Smart Data Modeling & Logic Synthesis", "Clean Code Auditing & Accessibility Validation", "Fast Time-to-Market Without Compromise"],
    colSpanDesktop: "col-span-12 lg:col-span-6",
  },
  {
    id: "bento-seo-perf",
    number: "06",
    title: "Technical SEO & Performance",
    subtitle: "Rank Higher, Load Faster",
    description: "A website is useless if nobody finds it. I bake semantic HTML5, Schema.org structured data, Open Graph tags, and Core Web Vitals optimization into every single page.",
    highlightTag: "Measurable Growth",
    features: ["Schema.org JSON-LD (Person & Service)", "Sub-Second First Contentful Paint", "Google Lighthouse 90+ Score Targets", "Search Console & Analytics Integration"],
    colSpanDesktop: "col-span-12 lg:col-span-6",
  },
];

export const SERVICES: ServiceDetail[] = [
  {
    id: "srv-web-dev",
    number: "01",
    title: "Website Design & Development",
    arabicTitle: "تصميم وتطوير المواقع الإلكترونية",
    tagline: "Custom platforms built for performance, conversion, and long-term business scalability.",
    description: "I engineer tailor-made websites designed specifically around your commercial objectives. From corporate business presences to interactive agency portfolios, each site is developed with clean code, sub-second load times, and intuitive content management.",
    deliverables: [
      "Custom responsive UI design in Figma",
      "Clean Next.js / React production codebase",
      "Full cross-browser & multi-device optimization",
      "Interactive micro-animations & smooth interactions",
      "Contact form & WhatsApp conversion integration",
      "Deployment to Vercel with automated CI/CD",
    ],
    valueProps: [
      "Zero generic template bloat or slow page builders",
      "High-speed performance ensuring lower bounce rates",
      "Clear call-to-actions engineered to maximize inquiries",
    ],
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Figma", "Vercel"],
    timeline: "2 – 4 Weeks typical delivery",
  },
  {
    id: "srv-ui-ux",
    number: "02",
    title: "UI/UX & Interface Design",
    arabicTitle: "تصميم واجهات وتجربة المستخدم",
    tagline: "User-centered layouts, systematic design tokens, and friction-free user journeys.",
    description: "Exceptional design balances luxury aesthetics with effortless usability. I analyze your audience's behavior, craft strategic wireframes, and produce high-fidelity interactive design prototypes that eliminate confusion and drive action.",
    deliverables: [
      "User research & competitive design analysis",
      "Information architecture & site wireframing",
      "High-fidelity clickable Figma prototype",
      "Design system with reusable typography & color tokens",
      "Interactive states (hover, active, focus, disabled)",
      "Developer-ready specs with exported SVG assets",
    ],
    valueProps: [
      "Intuitive layouts that guide visitors straight to purchase or inquiry",
      "Consistent visual identity across every breakpoint",
      "Reduced development revisions through precise Figma handover",
    ],
    tools: ["Figma", "FigJam", "Design Systems", "Prototyping"],
    timeline: "1 – 3 Weeks typical delivery",
  },
  {
    id: "srv-brand-identity",
    number: "03",
    title: "Brand Identity & Graphic Art",
    arabicTitle: "الهوية البصرية وتصميم الجرافيك",
    tagline: "Memorable logos, cohesive typography systems, and high-impact marketing collateral.",
    description: "Your brand is the reputation that precedes you. I create complete visual identity systems — from bold typographic logos and custom monograms to social campaign creatives, promotional posters, and packaging art that make your business instantly recognizable.",
    deliverables: [
      "Primary logo, secondary marks & brand icons",
      "Brand style guide (colors, typography, usage rules)",
      "Social media post & story template system",
      "Promotional posters & marketing key visuals",
      "Print collateral (business cards, stationery, menus)",
      "Vector asset pack in SVG, EPS, PNG and PDF formats",
    ],
    valueProps: [
      "Instant premium brand recognition in competitive markets",
      "Consistent visual standard across both digital and physical touchpoints",
      "Distinct personality that sets you apart from commoditized rivals",
    ],
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "Vector Math"],
    timeline: "1 – 2 Weeks typical delivery",
  },
  {
    id: "srv-bilingual",
    number: "04",
    title: "Bilingual English & Arabic Websites",
    arabicTitle: "مواقع ثنائية اللغة إنجليزية وعربية",
    tagline: "True bidirectional RTL/LTR architectures engineered for Saudi Arabia and Gulf expansion.",
    description: "Designing for Arabic users requires far more than basic auto-translation. It requires reversing visual hierarchy, adjusting reading eye-paths, and honoring Arabic typographic proportions. I build robust bilingual platforms that feel native to both Arab and Western audiences.",
    deliverables: [
      "Native bidirectional LTR / RTL layout switching",
      "Handpicked Arabic typography pairings (Cairo, Tajawal, IBM Plex Arabic)",
      "Localized forms, calendars, and navigation bars",
      "Regional lead capture (WhatsApp & direct phone dialing)",
      "Schema.org multi-language metadata configuration",
      "Localized SEO keywords for Saudi Arabia and UAE markets",
    ],
    valueProps: [
      "Tap directly into high-value Gulf business and contracting markets",
      "Respect cultural aesthetic norms and reading behaviors",
      "Seamless single-click language toggle without page reloads",
    ],
    tools: ["Bi-directional CSS", "Next.js i18n", "Arabic Typographic Glyphs", "RTL Testing Harness"],
    timeline: "3 – 5 Weeks typical delivery",
  },
  {
    id: "srv-seo-perf",
    number: "05",
    title: "SEO & Performance Optimization",
    arabicTitle: "تحسين محركات البحث والأداء",
    tagline: "Speed optimization, technical structured data, and local search visibility.",
    description: "I ensure your digital investment yields measurable organic visibility. By implementing clean semantic HTML5, JSON-LD structured data schemas, optimized image compression, and Core Web Vitals best practices, I help your business climb Google rankings.",
    deliverables: [
      "Comprehensive Core Web Vitals performance audit",
      "Semantic HTML5 header and article architecture",
      "Schema.org JSON-LD microdata (Organization, LocalBusiness, FAQ)",
      "XML Sitemap and robots.txt configuration",
      "Open Graph and Twitter Card social preview metadata",
      "Asset compression with modern WebP/AVIF formats",
    ],
    valueProps: [
      "Faster load speeds directly correlate with higher Google search ranking",
      "Rich snippet cards in Google Search results to boost click-through rates",
      "Enhanced local visibility for regional service providers",
    ],
    tools: ["Google Search Console", "Lighthouse", "Schema.org", "PageSpeed Insights"],
    timeline: "1 – 2 Weeks typical delivery",
  },
];

export const CREATIVE_PROCESS = [
  {
    step: "01",
    phase: "DISCOVER",
    title: "Business & Audience Audit",
    timeframe: "Days 1 – 3",
    description: "We begin with a deep dive into your business model, customer psychology, core competitors, and conversion objectives. I uncover what makes your offering unique and define clear, measurable targets.",
    actions: [
      "Competitive landscape analysis",
      "Target customer persona profiling",
      "Technical requirements & feature scoping",
      "Content & media asset inventory",
    ],
  },
  {
    step: "02",
    phase: "STRATEGY",
    title: "Architecture & User Journey",
    timeframe: "Days 4 – 7",
    description: "Before designing visuals, we map out the exact structural blueprint. I design the information architecture, wireframe high-intent user flows, and position conversion triggers for maximum impact.",
    actions: [
      "Sitemap & content hierarchy mapping",
      "Low-fidelity wireframing of key pages",
      "Conversion funnel & CTA placement strategy",
      "Bilingual copy alignment (if applicable)",
    ],
  },
  {
    step: "03",
    phase: "DESIGN",
    title: "Art Direction & Interface",
    timeframe: "Days 8 – 14",
    description: "Translating brand strategy into a breathtaking visual reality. I create bespoke Figma prototypes with custom typography, bespoke color palettes, tailored imagery, and refined micro-interactions.",
    actions: [
      "Visual direction exploration & mood boards",
      "High-fidelity desktop & mobile UI prototypes",
      "Design system creation with tokenized components",
      "Collaborative client review & refinement rounds",
    ],
  },
  {
    step: "04",
    phase: "DEVELOP",
    title: "Modern Frontend Engineering",
    timeframe: "Days 15 – 24",
    description: "Bringing the approved designs to life using modern Next.js, React, and TypeScript. I write clean, maintainable, modular code optimized for ultra-fast rendering, fluid animations, and rock-solid stability.",
    actions: [
      "Component-driven frontend development",
      "Fluid scroll animations and micro-interactions",
      "Bi-directional RTL/LTR logic implementation",
      "Form validation & direct WhatsApp/Email dispatch",
    ],
  },
  {
    step: "05",
    phase: "DELIVER",
    title: "Testing, Launch & Growth",
    timeframe: "Days 25 – 28",
    description: "Rigorous quality assurance across browsers, screen sizes, and network speeds. We verify SEO tags, launch to a global Vercel edge network, and provide comprehensive handover documentation.",
    actions: [
      "Cross-browser and mobile device QA testing",
      "Lighthouse performance and accessibility audit",
      "Domain DNS connection & SSL security setup",
      "Post-launch support & client training walkthrough",
    ],
  },
];

export const TECH_STACK = {
  frontend: [
    { name: "HTML5 & CSS3", level: "Semantic Markup & Modern Layouts", icon: "code" },
    { name: "JavaScript (ESNext)", level: "Modern Asynchronous Programming", icon: "cpu" },
    { name: "TypeScript", level: "Type-Safe Robust Codebases", icon: "shield" },
    { name: "React 19", level: "Component Lifecycle & State Management", icon: "zap" },
    { name: "Next.js 16", level: "App Router, SSR, SSG & Edge Caching", icon: "layers" },
    { name: "Tailwind CSS", level: "Utility-First Responsive Design", icon: "palette" },
  ],
  design: [
    { name: "Figma", level: "UI/UX, Wireframes & Design Systems", icon: "layout" },
    { name: "Adobe Photoshop", level: "Photo Manipulation & Art Direction", icon: "sparkles" },
    { name: "Adobe Illustrator", level: "Vector Logo & Brand Iconography", icon: "compass" },
  ],
  motionAnd3D: [
    { name: "Three.js", level: "Interactive 3D WebGL & Shaders", icon: "box" },
    { name: "GSAP (GreenSock)", level: "High-Performance Timeline Animations", icon: "play" },
    { name: "Lenis", level: "Cinematic Inertia Smooth Scrolling", icon: "wind" },
  ],
  deploymentAndSEO: [
    { name: "Vercel", level: "Global Edge CDN & Instant Deployments", icon: "globe" },
    { name: "GitHub", level: "Git Version Control & Collaboration", icon: "git-branch" },
    { name: "Technical SEO", level: "Schema.org, JSON-LD & Open Graph", icon: "search" },
  ],
};

export const FAQ_ITEMS = [
  {
    q: "How does the freelance collaboration process work?",
    a: "We begin with a brief discovery chat via WhatsApp or email to understand your goals, timeline, and scope. Once we agree on terms, I provide an initial design prototype within 5 to 7 business days, iterate based on your feedback, and then engineer the production-ready website with full deployment and post-launch support."
  },
  {
    q: "Can you build websites in both Arabic and English?",
    a: "Yes! Bilingual and RTL (right-to-left) web development is one of my core specializations. Having delivered real client projects for companies in Saudi Arabia (Mian Saqib Hussain in Dammam) and the UAE (AC Technical Services), I design authentic RTL layouts with proper Arabic typography rather than crude auto-translations."
  },
  {
    q: "What is your typical project turnaround time?",
    a: "A focused business landing page or brand identity typically takes 1 to 2 weeks. A comprehensive multi-page corporate or bilingual website takes 3 to 4 weeks. I maintain transparent, daily or weekly progress updates with live staging links so you always see exactly what is being built."
  },
  {
    q: "How will my website generate leads for my business?",
    a: "Every design decision is optimized for conversion. I place prominent, zero-friction contact points — such as sticky WhatsApp chat triggers, direct phone dialers, and custom inquiry forms — right where visitors make buying decisions, paired with fast sub-second load times that keep visitors engaged."
  },
  {
    q: "Do you offer post-launch support and maintenance?",
    a: "Absolutely. Every project includes a 30-day post-launch warranty period where I handle any adjustments, bug fixes, or minor content updates free of charge. Long-term monthly maintenance packages are also available for continuous feature additions and SEO monitoring."
  }
];
