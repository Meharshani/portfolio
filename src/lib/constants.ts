export const SITE = {
  name: "MHR Solution",
  url: "https://mhrsolution.online",
  email: "info@mhrsolution.online",
  phone: "+923174893006",
  phoneDisplay: "0317-4893006",
  whatsapp: "https://wa.me/923174893006",
  location: "Lahore, Pakistan",
  description:
    "MHR Solution is a professional website development company in Pakistan. We build modern, fast, and scalable websites, ecommerce stores, and custom web applications using React.js, Next.js, and Firebase.",
} as const;

export const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
  { href: "/teaching", label: "Teaching" },
] as const;

export const SERVICES = [
  {
    title: "Website Development",
    description:
      "Custom business websites built with modern technologies for speed, security, and conversion.",
    icon: "Globe",
    tags: ["React.js", "Next.js", "SEO"],
  },
  {
    title: "Ecommerce Development",
    description:
      "Full-featured online stores with payment gateways, inventory, and mobile-first shopping experiences.",
    icon: "ShoppingCart",
    tags: ["Shopify-style", "Payments", "Admin"],
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications with native performance and seamless backend integration.",
    icon: "Smartphone",
    tags: ["React Native", "iOS", "Android"],
  },
  {
    title: "Custom Software Solutions",
    description:
      "Tailored web applications including school systems, madrasa platforms, and water delivery management.",
    icon: "Code2",
    tags: ["Dashboards", "CRM", "Automation"],
  },
  {
    title: "Firebase Solutions",
    description:
      "Real-time databases, authentication, cloud functions, and push notifications with Firebase.",
    icon: "Flame",
    tags: ["Auth", "Firestore", "Hosting"],
  },
] as const;

export const ALL_SERVICES = [
  "Website Development",
  "Custom Web Applications",
  "React.js Development",
  "Next.js Development",
  "Ecommerce Websites",
  "Business Websites",
  "School & Madrasa Websites",
  "Water Delivery Management Systems",
  "Mobile App Development",
  "Firebase Integration",
  "UI/UX Design",
] as const;

export const WHY_CHOOSE_US = [
  {
    title: "Fast Delivery",
    description: "Agile development with clear milestones and on-time project delivery.",
    icon: "Zap",
  },
  {
    title: "Modern Technologies",
    description: "React.js, Next.js, TypeScript, and Firebase for future-proof solutions.",
    icon: "Cpu",
  },
  {
    title: "SEO Optimized",
    description: "Built-in technical SEO, fast Core Web Vitals, and search-friendly architecture.",
    icon: "Search",
  },
  {
    title: "Mobile Responsive",
    description: "Pixel-perfect designs that work flawlessly on every device and screen size.",
    icon: "MonitorSmartphone",
  },
  {
    title: "Affordable Pricing",
    description: "Premium quality development at competitive rates for Pakistani businesses.",
    icon: "BadgeDollarSign",
  },
  {
    title: "Ongoing Support",
    description: "Post-launch maintenance, updates, and dedicated technical support.",
    icon: "Headphones",
  },
] as const;

export const PORTFOLIO = [
  {
    title: "Hilalfolio Platform",
    category: "AI Web App",
    description: "AI-powered crypto portfolio platform with real-time analytics and secure payments.",
    gradient: "from-violet-600 to-indigo-600",
    tech: ["React Native", "Next.js", "Stripe"],
  },
  {
    title: "Ecommerce Store",
    category: "Ecommerce",
    description: "Full-featured online shopping platform with wallet, search, and push notifications.",
    gradient: "from-rose-500 to-orange-500",
    tech: ["React.js", "Firebase", "Redux"],
  },
  {
    title: "Reviewer Dashboard",
    category: "Admin Panel",
    description: "Enterprise content management system with AI moderation and analytics.",
    gradient: "from-cyan-500 to-blue-600",
    tech: ["React.js", "Material UI", "Chart.js"],
  },
  {
    title: "Hajj & Umrah App",
    category: "Mobile App",
    description: "Comprehensive pilgrimage companion with rituals tracking and real-time guidance.",
    gradient: "from-emerald-500 to-teal-600",
    tech: ["React Native", "Maps API", "i18n"],
  },
  {
    title: "Invoice Management",
    category: "Business Software",
    description: "Automated invoicing, payment tracking, and financial analytics for businesses.",
    gradient: "from-amber-500 to-yellow-500",
    tech: ["React.js", "Stripe", "Express"],
  },
  {
    title: "Water Delivery System",
    category: "Custom Software",
    description: "End-to-end water delivery management with orders, routes, and customer portal.",
    gradient: "from-sky-500 to-blue-600",
    tech: ["Next.js", "Firebase", "Maps"],
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Ahmed Khan",
    role: "Business Owner, Lahore",
    content:
      "MHR Solution delivered our ecommerce website ahead of schedule. The site is fast, beautiful, and our sales increased within the first month.",
    rating: 5,
  },
  {
    name: "Fatima Zahra",
    role: "School Administrator",
    content:
      "They built a complete school management website with online admissions. Professional team, excellent communication, and great ongoing support.",
    rating: 5,
  },
  {
    name: "Usman Ali",
    role: "Startup Founder",
    content:
      "Our React.js web application was built with clean code and modern UI. MHR Solution understood our vision and exceeded expectations.",
    rating: 5,
  },
  {
    name: "Hassan Raza",
    role: "Water Delivery Company",
    content:
      "The custom water delivery management system transformed our operations. Orders, routes, and billing are all automated now.",
    rating: 5,
  },
] as const;

export const SEO_KEYWORDS = [
  "Website Development Company Pakistan",
  "Web Design Agency Lahore",
  "Ecommerce Website Development",
  "React Developer Pakistan",
  "Custom Website Development",
  "Business Website Development",
  "Professional Website Design",
  "Software House Pakistan",
  "Next.js Development Pakistan",
  "Firebase Developer Lahore",
] as const;
