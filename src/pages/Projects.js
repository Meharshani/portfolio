import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // Lightbox styles
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const projects = [
  {
    title: 'Hilalfolio App',
    description: 'AI-integrated crypto analyst platform with secure payments, real-time data, and dynamic visualizations.',
    images: ['/assets/project1-1.jpg', '/assets/project1-2.jpg'],
  },
  {
    title: 'Reviewer Dashboard',
    description: 'Secure admin panel for content management, advanced text editor, and comprehensive reporting system.',
    images: ['/assets/project2-1.jpg', '/assets/project2-2.jpg'],
  },
  {
    title: 'E-commerce Apps (SheinPro, Ittu)',
    description: 'Wallet management, push notifications, real-time search, and user profile management features.',
    images: ['/assets/project3-1.jpg', '/assets/project3-2.jpg'],
  },
  {
    title: 'IFRS Job Portal',
    description: 'Comprehensive job portal with video support, notifications, and applicant tracking system.',
    images: ['/assets/project4-1.jpg', '/assets/project4-2.jpg'],
  },
];

function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (images) => {
    setCurrentImages(images);
    setPhotoIndex(0);
    setIsOpen(true);
  };

  return (
    <main className="projects-page bg-gray-50 min-h-screen">

      {/* Header */}
      <section className="py-20 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Projects</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          A selection of web and mobile applications I've built for global clients.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="px-6 md:px-20 pb-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl cursor-pointer transition transform hover:-translate-y-1 duration-300"
              onClick={() => openLightbox(project.images)}
            >
              <img 
                src={project.images[0]} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900">{project.title}</h3>
                <p className="mt-3 text-gray-600">{project.description}</p>
                <p className="mt-2 text-blue-600 font-semibold underline">Click to view gallery</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          mainSrc={currentImages[photoIndex]}
          nextSrc={currentImages[(photoIndex + 1) % currentImages.length]}
          prevSrc={currentImages[(photoIndex + currentImages.length - 1) % currentImages.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + currentImages.length - 1) % currentImages.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % currentImages.length)
          }
        />
      )}

    </main>
  );
}

export default Projects;