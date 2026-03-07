import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import {
  reviewerAdmin, admin1, admin2, admin3, admin4,
  mr1, mr2, mr3, mr4, mr5, mr6, mr7, mr8, mr9,
  phone1, phone2, phone3, phone4, phone5, phone6, phone7,
  phone8, phone9, phone10, phone11, phone12,
  phone13, phone14, phone15, phone16, phone17, phone18, phone19, phone20, phone21, phone22,
  proshop1, proshop2, proshop3, proshop4, proshop6, proshop7, proshop8, proshop9,
  hajj1, hajj2, hajj3, hajj4, hajj5, hajj6, hajj7, hajj8, hajj9, hajj10, hajj11, hajj12, hajj13, hajj14, hajj15, hajj16, hajj17, hajj18,
  inv1, inv2, inv3, inv4, inv5, inv6, inv7, inv8, inv9, inv10, inv11,
  hilalweb1, hilalweb2, hilalweb3, hilalweb4, hilalweb5, hilalweb6, hilalweb7, hilalweb8, hilalweb9, hilalweb10, hilalweb11, hilalweb12,
  profilepic,
} from '../images/image';

// Projects definition remains unchanged
const projects = [
  {
    title: 'Hilalfolio App',
    badge: 'AI App',
    description: 'A state-of-the-art crypto analyst & portfolio platform, powered by AI, offering secure payments, instant data, and immersive charts. Elevating decision-making for modern investors.',
    about: 'Hilalfolio is an AI-driven platform that arms users with actionable crypto insights and portfolio tools. Dynamic dashboards and real-time market analysis raise the bar for crypto enthusiasts.',
    features: [
      'AI Chat Assistant for market queries',
      'Crypto portfolio & wallet management',
      'Secure Stripe & PayPal payments',
      'Dynamic charts & customizable dashboards',
      'Push notifications & alerting',
      'User profile & settings',
      'Mobile-first, lightning-fast experience'
    ],
    libraries: [
      'React Native',
      'Redux Toolkit',
      'Tailwind CSS',
      'Socket.IO',
      'Stripe API',
      'Chart.js',
      'OpenAI API Integration'
    ],
    images: [
      phone1, phone2, phone3, phone4, phone5, phone6, phone7, phone8, phone9, phone10, phone11, phone12, phone13, phone14, phone15, phone16, phone17, phone18, phone19, phone20, phone21, phone22
    ],
  },
  {
    title: 'Hilalfolio Website',
    badge: 'Web App',
    description: 'A modern, visually captivating website for the Hilalfolio AI crypto platform—showcasing features, team, and tech. Built for conversions and user engagement.',
    about: 'The Hilalfolio website delivers an immersive presentation layer for the Hilalfolio AI app, featuring highly responsive layouts, interactive animations, and informative content. It includes announcement banners, live pricing sections, an FAQ, and secure contact forms.',
    features: [
      'Responsive design with Next.js & Tailwind',
      'Feature highlights and live market showcases',
      'Team & partners showcase',
      'Animated hero and stats sections',
      'Customer testimonials',
      'Newsletter sign-up integration',
      'Contact form with spam-protection',
      'SEO optimization and lightning-fast loading'
    ],
    libraries: [
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'Framer Motion',
      'Formik & Yup (forms)',
      'React-Icons',
      'HeadlessUI & Swiper',
      'SendGrid API'
    ],
    images: [hilalweb1, hilalweb2, hilalweb3, hilalweb4, hilalweb5, hilalweb6, hilalweb7, hilalweb8, hilalweb9, hilalweb10, hilalweb11, hilalweb12],
  },
  
  {
    title: 'Reviewer Dashboard',
    badge: 'Admin Dashboard',
    description: 'Next-generation admin dashboard for streamlined content management, AI-powered moderation, and real-time reporting.',
    about: 'Built for editors and admins, this dashboard enables robust content publishing with real-time analytics, a rich text editor, and AI-based review features to boost productivity and reliability.',
    features: [
      'Secured multi-role login & access control',
      'AI-based content moderation and auto-suggestions',
      'Rich text & Markdown editor',
      'Review assignment workflows',
      'Comprehensive charts & analytics',
      'User activity feed'
    ],
    libraries: [
      'React.js',
      'Material UI',
      'Quill Editor',
      'Redux',
      'Chart.js',
      'OpenAI NLP Integration',
      'Express.js Backend'
    ],
    images: [reviewerAdmin, admin1, admin2, admin3, admin4],
  },
  {
    title: 'E-commerce Apps (ShopPro, Ittu)',
    badge: 'E-Commerce',
    description: 'Elegant online shopping built for scale: modern UI, wallet integration, live search, and instant notifications. SHEIN-inspired experience for global users.',
    about: 'ShopPro & Ittu offer a seamless e-commerce journey from discovery to checkout—supporting wallets, real-time filters, and push notifications for best-in-class mobile shopping.',
    features: [
      'AI-driven product recommendations',
      'Digital wallet & coupon management',
      'Real-time product search & filtering',
      'Order tracking, rating & review system',
      'Structured admin dashboard',
      'Personalized push notifications',
      'Highly responsive for mobile & web'
    ],
    libraries: [
      'React Native & React.js',
      'Redux Toolkit',
      'Firebase & FCM',
      'Ant Design',
      'Tailwind CSS',
      'Socket.IO',
      'Node.js/Express API'
    ],
    images: [proshop7, proshop6, proshop8, proshop9, proshop1, proshop2, proshop3, proshop4],
  },
  {
    title: 'Mr Whippy Hire Van (UK)',
    badge: 'Booking Platform',
    description: 'On-demand Wall ice cream van hire service for all UK events. Perfect for festivals, celebrations, and corporate functions.',
    about: 'A feature-rich booking platform connects UK event planners with reliable ice cream van hire, offering seamless reservations and prompt communications.',
    features: [
      'One-tap quote & booking requests',
      'Location-based availability',
      'Secure Stripe deposits',
      'Automated email & SMS confirmations',
      'Feedback & rating after event',
      'Gallery of past events & trucks'
    ],
    libraries: [
      'React.js',
      'Bootstrap',
      'Express.js',
      'MongoDB',
      'Nodemailer',
      'Stripe Payments'
    ],
    images: [mr1, mr2, mr3, mr4, mr5, mr6, mr7, mr8, mr9],
  },
  {
    title: 'Hajj & Umrah Mobile App',
    badge: 'Travel Companion',
    description: 'All-in-one guide for pilgrims performing Hajj and Umrah. Features interactive rituals checklist, real-time location guidance, dua library, emergency services, and visa tracking.',
    about: 'This comprehensive mobile app supports pilgrims with step-by-step rituals tracking, location-aware notifications, curated dua/prayer collections, instant emergency contact features, and powerful visa tracking. Designed for a seamless and informed pilgrimage experience.',
    features: [
      'Step-by-step Hajj & Umrah rituals tracking',
      'Real-time Kaaba & holy site navigation',
      'Integrated prayer times and Qibla finder',
      'Visa tracking with real-time status updates',
      'Curated dua library with audio support',
      'Emergency services: SMS/call within one tap',
      'Multilingual interface (Arabic, English, Urdu, Bahasa)',
      'Personalized checklists & progress saving',
      'Beautiful interactive gallery of holy places',
      'Push notifications for time-sensitive rituals'
    ],
    libraries: [
      'React Native',
      'Expo',
      'Redux Toolkit',
      'Google Maps API',
      'Moment.js',
      'i18next (internationalization)',
      'Twilio (for emergency contact services)',
      'Axios (for visa status API integration)'
    ],
    images: [hajj1, hajj2, hajj3, hajj4, hajj5, hajj6, hajj7, hajj8, hajj9, hajj10, hajj11, hajj12, hajj13, hajj14, hajj15, hajj16, hajj17, hajj18],
  },
  {
    title: 'Invoice Management System',
    badge: 'Invoice Platform',
    description: 'Automated invoice generation, tracking, and payment processing for businesses. Features secure payment gateways, automated reminders, and real-time analytics.',
    about: 'This system simplifies invoice management with automated generation, tracking, and payment processing. It supports multiple payment gateways, automated reminders, and real-time analytics for efficient financial management.',
    features: [
      'Automated invoice generation',
      'Payment gateway integration',
      'Automated reminders',
      'Real-time analytics',
      'Secure payment processing',
      'Multi-currency support',
      'Customizable templates',
      'User-friendly interface'
    ],
    libraries: [
      'React.js',
      'Material UI',
      'Redux',
      'Chart.js',
      'Stripe API',
      'Express.js Backend'
    ],
    images: [inv1, inv2, inv3, inv4, inv5, inv6, inv7, inv8, inv9, inv10, inv11],
  },
];

function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllFeatures, setShowAllFeatures] = useState(null); // Track which project is showing all features
  const [gridProject, setGridProject] = useState(null); // Track which project is open in grid view
  const [lightboxIndex, setLightboxIndex] = useState(0); // Track which image is active in lightbox

  // Open the image gallery lightbox for a project
  const openLightbox = (project, startIndex = 0) => {
    setCurrentImages(project.images);
    setSelectedProject(project);
    setLightboxIndex(startIndex);
    setIsOpen(true);
  };

  // "More" show all features in card details
  const handleShowAllFeatures = (i) => {
    setShowAllFeatures(i);
  };

  return (
    <main className="projects-page bg-gradient-to-b from-gray-100 via-blue-50 to-purple-50 min-h-screen">

      {/* Header */}
      <section className="bg-white/90 backdrop-blur-md py-14 px-6 md:px-20 text-center shadow">
        <h1 className="text-5xl md:text-6xl font-extrabold text-primary drop-shadow">
          Recently Completed Projects
        </h1>
        <p className="mt-5 text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
          Explore the portfolio of cutting-edge web and mobile applications built for global clients, showcasing rich features, modern technologies, and professional design.
        </p>
        <div className="flex justify-center mt-8">
          <div className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-3 shadow text-white text-xl font-semibold animate-bounce">
            25+ Clients | 40+ Projects | 300K+ Users
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 md:px-20 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden border border-blue-100 relative transition-all duration-300 hover:-translate-y-2"
            >
              {/* Card Top Heading */}
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2">
                <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">
                  Recently Completed Project
                </span>
              </div>
              {/* Image with badge positioned at bottom right */}
              <div
                className="relative cursor-pointer"
                onClick={() => openLightbox(project)}
                tabIndex={0}
                aria-disabled={false}
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute bottom-4 right-4 bg-blue-600 text-white rounded-full px-3 py-1 text-xs font-extrabold shadow">
                  {project.badge}
                </span>
              </div>
              <div className="p-6 relative">
                {/* Removed badge here, now only in the image section */}
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{project.title}</h3>
                <p className="text-gray-700 text-base mt-1 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-1 mb-2">
                  {(showAllFeatures === i ? project.features : project.features.slice(0, 3)).map((f, j) => (
                    <span
                      key={j}
                      className="inline-block bg-gradient-to-br from-purple-400 to-blue-500 text-white text-xs px-2 py-1 rounded font-medium shadow"
                    >
                      {f}
                    </span>
                  ))}
                  {project.features.length > 3 && showAllFeatures !== i && (
                    <button
                      tabIndex={0}
                      className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded font-medium hover:bg-blue-200 focus:outline-none"
                      onClick={() => handleShowAllFeatures(i)}
                    >
                      +{project.features.length - 3} more
                    </button>
                  )}
                </div>
                <p
                  className="mt-2 text-blue-600 font-bold underline cursor-pointer select-none"
                  onClick={() => openLightbox(project)}
                >
                  Click to view details & gallery
                </p>
                <button
                  type="button"
                  className="mt-2 text-xs font-semibold text-purple-700 underline hover:text-purple-900 focus:outline-none"
                  onClick={() => setGridProject(project)}
                >
                  View gallery in grid
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Gallery Lightbox - Only gallery images, no details */}
      {isOpen && selectedProject && (
        <div className="fixed inset-0 z-40 bg-black/50 flex items-center justify-center transition-all duration-200">
          <div className="relative max-w-3xl w-full bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row animate-fade-in border border-blue-100">
            <div className="flex-1">
              <Lightbox
                open={isOpen}
                index={lightboxIndex}
                close={() => setIsOpen(false)}
                slides={currentImages.map((src) => ({ src }))}
                on={{ view: ({ index }) => setLightboxIndex(index) }}
                carousel={{ finite: true, preload: 2 }}
                styles={{
                  container: { backgroundColor: 'rgba(20,20,40,0.98)' },
                  navigation: { color: '#fff' }
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Image Grid View Modal */}
      {gridProject && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
          <div className="relative max-w-5xl w-full max-h-[80vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <h3 className="text-lg font-semibold">
                {gridProject.title} – Image Grid
              </h3>
              <button
                type="button"
                className="text-white/90 hover:text-white text-xl leading-none px-2 focus:outline-none"
                onClick={() => setGridProject(null)}
                aria-label="Close image grid"
              >
                ×
              </button>
            </div>
            <div className="p-4 overflow-y-auto max-h-[calc(80vh-56px)]">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {gridProject.images.map((src, index) => (
                  <button
                    key={index}
                    type="button"
                    className="group relative block focus:outline-none"
                    onClick={() => {
                      openLightbox(gridProject, index);
                      setGridProject(null);
                    }}
                  >
                    <img
                      src={src}
                      alt={`${gridProject.title} image ${index + 1}`}
                      className="w-full h-32 sm:h-40 object-cover rounded-lg shadow-sm group-hover:shadow-md group-hover:opacity-90 transition"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Collaboration & Team Projects Section */}
      <section className="my-16 px-6 md:px-20">
        <div className="max-w-3xl mx-auto bg-white/90 rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-3">Open for Team Projects and Collaborations</h2>
          <p className="text-gray-700 mb-4 text-lg">
            I thrive in collaborative environments and regularly work together with teams and other software companies to deliver larger, ambitious projects. 
            If you're seeking partnership or looking to augment your team with a dedicated developer who can integrate seamlessly into existing workflows, let's connect!
          </p>
          <ul className="mb-5 text-left text-gray-700 max-w-lg mx-auto list-disc list-inside">
            <li>Joint-venture app development</li>
            <li>Team-based agile sprints & standups</li>
            <li>Collaborative codebases & version control (GitHub, GitLab, Bitbucket)</li>
            <li>Integration with remote and hybrid teams</li>
            <li>White-label solutions for agencies & B2B</li>
          </ul>
          <div className="flex flex-col gap-3 sm:flex-row justify-center">
            <a
              href="mailto:meharshani741@gmail.com?subject=Collaboration%20Opportunity"
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-800 text-white font-semibold py-2 px-7 rounded shadow-lg transition"
            >
              Contact for Collaboration
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-usman-778016210/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-blue-600 text-blue-700 bg-white hover:bg-blue-600 hover:text-white font-semibold py-2 px-6 rounded shadow transition"
            >
              Connect on LinkedIn
            </a>
          </div>
          <div className="mt-6 text-gray-600 text-sm">
            <span className="font-semibold text-purple-600">Let's discuss your next team project &amp; build lasting partnerships!</span>
          </div>
        </div>
      </section>

      {/* Signature profile attractor section */}
      <section className="max-w-3xl mx-auto my-20 text-center px-4">
        <div className="inline-block rounded-xl shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 p-1">
          <div className="bg-white/90 rounded-xl px-10 py-8">
            <img
              src={profilepic}
              alt="Muhammad Usman profile"
              className="mx-auto w-16 h-16 rounded-full object-cover border-2 border-blue-500 shadow-lg mb-3"
              loading="lazy"
            />
            <h3 className="text-2xl font-bold text-blue-700 mb-1">Let's Build Something Amazing Together!</h3>
            <p className="text-gray-700 text-md max-w-lg mx-auto mb-3">
              Crafting world-class apps that combine innovation, design, and robust functionality.
              <span className="block mt-1 text-blue-700 font-semibold">Open for freelance & collaborations worldwide.</span>
            </p>
            <a
              href="mailto:meharshani741@gmail.com?subject=Project%20Proposal"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-800 hover:to-purple-700 text-white font-bold py-2 px-8 rounded shadow-lg transition"
            >
              Email Me
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;