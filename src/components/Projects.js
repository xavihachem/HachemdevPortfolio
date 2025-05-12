import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaLaptopCode, FaLayerGroup } from 'react-icons/fa';

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
        {/* Fancy decorative elements */}
        <div className="relative mb-24">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Animated code symbols for dark mode */}
            <div className="dark:block hidden">
              {["/>", "{", "}", "()", "[]", "</>", "*", "=>"].map((symbol, index) => (
                <motion.div
                  key={index}
                  className="absolute text-primary-500/10 font-mono font-bold"
                  style={{
                    fontSize: `${Math.random() * 40 + 60}px`,
                    left: `${Math.random() * 80 + 10}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 0.3, 0],
                    y: [0, -20, 0],
                    rotate: [0, Math.random() * 20 - 10, 0],
                  }}
                  transition={{
                    duration: Math.random() * 5 + 5,
                    delay: index * 0.5,
                    repeat: Infinity,
                    repeatDelay: Math.random() * 2,
                  }}
                >
                  {symbol}
                </motion.div>
              ))}
            </div>

            {/* Light mode decorative elements */}
            <div className="dark:hidden block">
              <motion.div 
                className="absolute -top-10 left-1/4 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
              <motion.div 
                className="absolute -bottom-20 right-1/4 w-80 h-80 bg-secondary-500/5 rounded-full blur-3xl"
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ 
                  duration: 10,
                  delay: 1,
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
            </div>
          </div>
          
          {/* Header content */}
          <motion.div
            className="text-center relative z-10"
          >
            {/* Animated badge */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <div className="relative inline-flex items-center px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 overflow-hidden group">
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-primary-500/20 dark:from-primary-500/30 dark:via-secondary-500/30 dark:to-primary-500/30 rounded-full"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                />
                <FaCode className="mr-2 text-primary-600 dark:text-primary-400" />
                <span className="font-semibold text-lg text-primary-600 dark:text-primary-400 relative z-10">
                  My Work
                </span>
              </div>
            </motion.div>
            
            {/* Main heading with animated letters */}
            <div className="overflow-hidden mb-6">
              <motion.h3 
                className="text-5xl md:text-6xl lg:text-7xl font-bold"
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">
                  Featured Projects
                </span>
              </motion.h3>
            </div>
            
            {/* Animated underline */}
            <div className="relative h-1 max-w-md mx-auto mb-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500"></div>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
                style={{ filter: "brightness(1.5) blur(2px)" }}
              />
            </div>
            
            {/* Description with staggered animation */}
            <div className="overflow-hidden">
              <motion.p 
                className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg"
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Here are some of my recent projects. Each project is unique and
                demonstrates my skills and experience in different areas of web
                development.
              </motion.p>
            </div>
            
            {/* Decorative icons */}
            <motion.div 
              className="flex justify-center mt-8 mb-4 space-x-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {[FaCode, FaLaptopCode, FaLayerGroup].map((Icon, index) => (
                <motion.div 
                  key={index}
                  className="text-primary-500/30 dark:text-primary-400/20"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ 
                    y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 },
                    scale: { duration: 0.3 }
                  }}
                >
                  <Icon className="text-4xl" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          <div className="p-1.5 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-100 dark:border-gray-700 shadow-lg inline-flex flex-wrap justify-center gap-2">
            {['all', 'featured', 'frontend', 'backend', 'fullstack'].map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden ${filter === category 
                  ? 'text-white shadow-md' 
                  : 'bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-700/80'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 17,
                  delay: index * 0.05 
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {/* Background for active button */}
                {filter === category && (
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-500 dark:to-secondary-500 rounded-full z-0"
                    layoutId="activeFilterBackground"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                
                {/* Button text */}
                <span className="relative z-10">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
                
                {/* Subtle glow effect for active button */}
                {filter === category && (
                  <div className="absolute inset-0 -z-10 rounded-full bg-primary-500/20 dark:bg-primary-400/20 blur-md"></div>
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="relative group"
              whileHover={{ y: -10 }}
            >
              {/* Glass morphism card effect */}
              <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl opacity-0 group-hover:opacity-80 dark:group-hover:opacity-20 blur-xl transition-all duration-500 transform group-hover:scale-105"></div>
              
              {/* Card with glass effect */}
              <div className="card overflow-hidden backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-500 relative z-10 rounded-2xl">
                {/* Project Image with gradient overlay */}
                <div className="relative overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Permanent gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
                  
                  {/* Project title on image */}
                  <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-2xl font-bold text-white drop-shadow-md">{project.title}</h4>
                  </div>
                  
                  {/* Animated action links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {project.github && (
                      <motion.a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-4 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-900 dark:text-white hover:bg-primary-500 hover:text-white shadow-lg transition-all duration-300 transform hover:scale-110"
                        aria-label="View GitHub Repository"
                        whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <FaGithub className="text-2xl" />
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-4 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-900 dark:text-white hover:bg-primary-500 hover:text-white shadow-lg transition-all duration-300 transform hover:scale-110"
                        aria-label="View Live Demo"
                        whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        <FaExternalLinkAlt className="text-2xl" />
                      </motion.a>
                    )}
                  </div>
                </div>
                
                {/* Project Info with improved styling */}
                <div className="p-6 relative z-10">
                  {/* Description with gradient text for dark mode */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies with improved styling */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <motion.span 
                        key={index} 
                        className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/40 dark:to-primary-800/40 text-primary-700 dark:text-primary-300 rounded-full border border-primary-100 dark:border-primary-800/50 backdrop-blur-sm"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Featured badge for featured projects */}
                  {project.featured && (
                    <div className="absolute top-0 right-0 mt-6 mr-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary-500 blur-sm opacity-50 rounded-full"></div>
                        <span className="relative px-3 py-1 text-xs font-semibold text-white bg-primary-500 rounded-full inline-block">
                          Featured
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-24 mb-8 relative"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div 
              className="absolute left-1/4 top-1/2 -translate-y-1/2 w-32 h-32 bg-primary-500/5 dark:bg-primary-500/10 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
            <motion.div 
              className="absolute right-1/4 top-1/2 -translate-y-1/2 w-32 h-32 bg-secondary-500/5 dark:bg-secondary-500/10 rounded-full blur-3xl"
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ 
                duration: 8,
                delay: 1,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
          </div>
          
          <div className="relative z-10">
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Discover more of my projects and contributions on GitHub
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <a 
                href="https://github.com/xavihachem" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative inline-flex items-center px-8 py-4 overflow-hidden rounded-full group bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-full opacity-10"></span>
                <span className="relative flex items-center">
                  <FaGithub className="mr-3 text-xl" />
                  <span>View More on GitHub</span>
                  <motion.span 
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  >
                    →
                  </motion.span>
                </span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;