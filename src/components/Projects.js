import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [filter, setFilter] = useState('all');

  // Project data
  const projects = [
    {
      id: 1,
      title: 'Modern E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product management, cart functionality, user authentication, and payment processing.',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
      category: 'fullstack',
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: true,
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website with smooth animations, dark mode, and interactive elements to showcase projects and skills.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      category: 'frontend',
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: true,
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A productivity application for managing tasks, projects, and deadlines with real-time updates and collaboration features.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Context API'],
      category: 'frontend',
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: false,
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A weather application that provides current conditions and forecasts for locations worldwide using weather API integration.',
      image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      technologies: ['JavaScript', 'HTML', 'CSS', 'API Integration'],
      category: 'frontend',
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: false,
    },
    {
      id: 5,
      title: 'Blog API',
      description: 'A RESTful API for a blog platform with authentication, authorization, and CRUD operations for posts and comments.',
      image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      category: 'backend',
      github: 'https://github.com',
      demo: null,
      featured: false,
    },
    {
      id: 6,
      title: 'Social Media Dashboard',
      description: 'An analytics dashboard for social media platforms with data visualization, reporting, and insights.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80',
      technologies: ['React', 'D3.js', 'Node.js', 'Express', 'MongoDB'],
      category: 'fullstack',
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: true,
    },
  ];

  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured'
      ? projects.filter(project => project.featured)
      : projects.filter(project => project.category === filter);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-xl text-primary-600 dark:text-primary-400 font-medium mb-2">My Work</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore a selection of my recent projects showcasing my skills and expertise in web development, design, and problem-solving.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {['all', 'featured', 'frontend', 'backend', 'fullstack'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === category 
                ? 'bg-primary-600 text-white shadow-md' 
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="card overflow-hidden group"
              whileHover={{ y: -10 }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay with links */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white dark:bg-gray-800 rounded-full text-gray-900 dark:text-white hover:bg-primary-500 hover:text-white transition-colors duration-300"
                      aria-label="View GitHub Repository"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white dark:bg-gray-800 rounded-full text-gray-900 dark:text-white hover:bg-primary-500 hover:text-white transition-colors duration-300"
                      aria-label="View Live Demo"
                    >
                      <FaExternalLinkAlt className="text-xl" />
                    </a>
                  )}
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center"
          >
            <FaGithub className="mr-2" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;