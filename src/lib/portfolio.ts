export type PortfolioProject = {
  title: string;
  category: string;
  description: string;
  tech: string[];
  cover: string;
  images: string[];
};

const p = (folder: string, ...files: string[]) =>
  files.map((f) => `/portfolio/${folder}/${encodeURIComponent(f)}`);

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    title: "Hilalfolio Platform",
    category: "AI Web App",
    description:
      "AI-powered crypto portfolio platform with real-time analytics, secure payments, and mobile-first experience.",
    tech: ["React Native", "Next.js", "Stripe"],
    cover: "/portfolio/hilalfolio/phone1.jpg",
    images: p(
      "hilalfolio",
      "phone1.jpg",
      "phone2.jpg",
      "3phone.jpg",
      "4phone.jpg",
      "5phone.jpg",
      "6phone.jpg",
      "7phone.jpg",
      "8phone.jpg",
      "9phone.jpg",
      "10phone.jpg"
    ),
  },
  {
    title: "Ecommerce Store",
    category: "Ecommerce",
    description:
      "Full-featured online shopping platform with wallet integration, live search, and push notifications.",
    tech: ["React.js", "Firebase", "Redux"],
    cover: "/portfolio/ecommerce/pro7.jpg",
    images: p(
      "ecommerce",
      "pro7.jpg",
      "pro8.jpg",
      "pro9.jpg",
      "pro1.png",
      "pro2.png",
      "pro3.png",
      "pro4.png",
      "pro6.png"
    ),
  },
  {
    title: "Reviewer Dashboard",
    category: "Admin Panel",
    description:
      "Enterprise content management system with AI moderation, rich editor, and real-time analytics.",
    tech: ["React.js", "Material UI", "Chart.js"],
    cover: p("reviewer", "admin 5.jpg")[0],
    images: p("reviewer", "admin 5.jpg", "admin 1.jpg", "admin 2.jpg", "admin 3.jpg", "admin 4.jpg"),
  },
  {
    title: "Hajj & Umrah App",
    category: "Mobile App",
    description:
      "Comprehensive pilgrimage companion with rituals tracking, maps, dua library, and visa updates.",
    tech: ["React Native", "Maps API", "i18n"],
    cover: "/portfolio/hajj/hajj1.png",
    images: p(
      "hajj",
      "hajj1.png",
      "hajj2.png",
      "hajj3.png",
      "hajj4.png",
      "hajj5.png",
      "hajj6.png",
      "hajj7.png",
      "hajj8.png"
    ),
  },
  {
    title: "Invoice Management",
    category: "Business Software",
    description:
      "Automated invoicing, payment tracking, and financial analytics for growing businesses.",
    tech: ["React.js", "Stripe", "Express"],
    cover: "/portfolio/invoice/inv1.jpeg",
    images: p("invoice", "inv1.jpeg", "inv2.jpeg", "inv3.jpeg", "inv4.jpeg", "inv5.jpeg", "inv6.jpeg"),
  },
  {
    title: "Water Delivery System",
    category: "Custom Software",
    description:
      "End-to-end water delivery management with orders, routes, billing, and customer portal.",
    tech: ["Next.js", "Firebase", "Maps"],
    cover: "/portfolio/water/1mr.jpg",
    images: p("water", "1mr.jpg", "2mr.jpg", "3mr.jpg"),
  },
];
