import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { FaCode, FaUsers, FaProjectDiagram, FaLayerGroup, FaUserAlt, FaMapMarkerAlt, FaCalendarAlt, FaBriefcase, FaPhone } from "react-icons/fa";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const stats = [
    { 
      label: "Years Experience", 
      value: "5+", 
      icon: FaCode,
      color: "#4f46e5",
      description: "Building web solutions"
    },
    { 
      label: "Projects Completed", 
      value: "50+", 
      icon: FaProjectDiagram,
      color: "#0ea5e9",
      description: "From concept to launch"
    },
    { 
      label: "Satisfied Clients", 
      value: "30+", 
      icon: FaUsers,
      color: "#10b981",
      description: "Happy collaborations"
    },
    { 
      label: "Technologies", 
      value: "15+", 
      icon: FaLayerGroup,
      color: "#f59e0b",
      description: "In my tech stack"
    },
  ];
  
  // Dark mode animation elements
  const [darkModeElements] = useState([
    { x: '10%', y: '20%', size: 120, delay: 0, duration: 25 },
    { x: '85%', y: '15%', size: 90, delay: 5, duration: 30 },
    { x: '70%', y: '60%', size: 150, delay: 2, duration: 22 },
    { x: '30%', y: '70%', size: 80, delay: 8, duration: 28 },
    { x: '50%', y: '30%', size: 100, delay: 12, duration: 20 },
  ]);

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Dark mode animated elements */}
      <div className="dark:block hidden">
        {darkModeElements.map((el, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-gradient-to-br from-primary-500/10 to-secondary-500/5 backdrop-blur-3xl pointer-events-none"
            style={{ 
              left: el.x, 
              top: el.y, 
              width: el.size, 
              height: el.size,
            }}
            animate={{
              x: [20, -20, 20],
              y: [20, -20, 20],
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: el.duration,
              delay: el.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      <div className="container-custom" ref={ref}>
        <div className="relative mb-20">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <motion.div 
              className="absolute -top-20 left-1/4 w-64 h-64 bg-primary-500/5 dark:bg-primary-500/10 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 15, 0]
              }}
              transition={{ 
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
            <motion.div 
              className="absolute top-10 right-1/4 w-40 h-40 bg-secondary-500/5 dark:bg-secondary-500/10 rounded-full blur-3xl"
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.7, 0.4],
                rotate: [0, -15, 0]
              }}
              transition={{ 
                duration: 10,
                delay: 1,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10 mb-16"
          >
            {/* Animated badge */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block relative mb-4"
            >
              <div className="relative inline-block">
                <span className="relative inline-block px-6 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-semibold text-lg z-10">
                  About Me
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 blur-md z-0 animate-pulse"></div>
              </div>
            </motion.div>
            
            {/* Main heading with gradient text */}
            <motion.h3 
              className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get to know me better
            </motion.h3>
            
            {/* Animated underline */}
            <div className="relative max-w-xs mx-auto mb-8 overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500"></div>
              <motion.div 
                className="absolute inset-0 h-full w-full bg-white dark:bg-gray-900"
                initial={{ x: "0%" }}
                animate={isInView ? { x: "100%" } : { x: "0%" }}
                transition={{ 
                  duration: 1.5, 
                  delay: 0.3,
                  ease: "easeInOut" 
                }}
              />
              <motion.div 
                className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary-300 to-transparent"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column with 3D tilt effect */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
              className="relative mx-auto max-w-md"
              whileHover={{ scale: 1.02 }}
            >
              {/* Animated background elements */}
              <div className="absolute -inset-4 -z-10">
                <div className="absolute top-0 left-0 w-full h-full">
                  <motion.div 
                    className="absolute -top-10 -left-10 w-40 h-40 bg-primary-500/20 dark:bg-primary-500/10 rounded-full blur-3xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, 0],
                      opacity: [0.5, 0.7, 0.5]
                    }}
                    transition={{ 
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  />
                  <motion.div 
                    className="absolute -bottom-10 -right-10 w-60 h-60 bg-secondary-500/10 dark:bg-secondary-500/5 rounded-full blur-3xl"
                    animate={{ 
                      scale: [1.2, 1, 1.2],
                      rotate: [0, -5, 0],
                      opacity: [0.3, 0.5, 0.3]
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
              
              {/* 3D Card Container */}
              <div className="perspective-1000">
                <motion.div 
                  className="relative preserve-3d my-rotatable-card"
                  whileHover={{ rotateY: 10, rotateX: -10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  {/* Background shape with gradient and animation */}
                  <motion.div 
                    className="absolute -bottom-6 -right-6 w-full h-full rounded-3xl bg-gradient-to-br from-primary-500 to-secondary-500 dark:from-primary-600 dark:to-secondary-600 shadow-xl"
                    animate={{ 
                      boxShadow: [
                        "0 20px 30px -10px rgba(79, 70, 229, 0.2)", 
                        "0 30px 40px -15px rgba(79, 70, 229, 0.4)", 
                        "0 20px 30px -10px rgba(79, 70, 229, 0.2)"
                      ]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  />
                  
                  {/* Image with floating animation */}
                  <motion.div 
                    className="relative aspect-[3/4] rounded-3xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl"
                    animate={{ y: ["-2px", "2px", "-2px"] }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  >
                    <img
                      src="/mainportfoliopic.png"
                      alt="Hachem Djefafla"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "0 0" }}
                    />
                    
                    {/* Subtle overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
                    
                    {/* Decorative elements */}
                    <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                      <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-sm font-medium">Available for work</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Decorative floating badges */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-full shadow-lg px-3 py-1 text-sm font-medium text-primary-600 dark:text-primary-400 border border-gray-100 dark:border-gray-700"
                animate={{ y: ["-5px", "5px", "-5px"], rotate: ["-5deg", "0deg", "-5deg"] }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                <span className="flex items-center gap-1">
                  <FaCode className="text-xs" />
                  Developer
                </span>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-full shadow-lg px-3 py-1 text-sm font-medium text-secondary-600 dark:text-secondary-400 border border-gray-100 dark:border-gray-700"
                animate={{ y: ["5px", "-5px", "5px"], rotate: ["5deg", "0deg", "5deg"] }}
                transition={{ 
                  duration: 5, 
                  delay: 0.5,
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                <span className="flex items-center gap-1">
                  <FaLayerGroup className="text-xs" />
                  Designer
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Content Column with fancy animations */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Decorative elements */}
            <div className="absolute -inset-4 -z-10 opacity-70 dark:opacity-30 pointer-events-none">
              <svg className="absolute right-0 top-0 h-40 w-40 text-primary-100 dark:text-primary-900/20" width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.2">
                  <circle cx="200" cy="200" r="200" fill="currentColor" />
                </g>
              </svg>
              <svg className="absolute left-1/2 bottom-0 h-24 w-24 text-secondary-100 dark:text-secondary-900/20" width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.3">
                  <path d="M100 0L200 100L100 200L0 100L100 0Z" fill="currentColor" />
                </g>
              </svg>
            </div>
            
            {/* Title with animated gradient */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h4 className="text-3xl font-bold mb-6 inline-block relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">
                  Web Developer & UI/UX Designer
                </span>
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-500/50 to-secondary-500/50 rounded-full"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </h4>
            </motion.div>
            
            {/* Bio paragraphs with staggered animation */}
            <div className="space-y-4 mb-8">
              <motion.p 
                className="text-gray-600 dark:text-gray-300 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Hello! I'm <span className="font-semibold text-gray-800 dark:text-white">Hachem</span>, a passionate web developer and UI/UX designer with 5+ years of experience creating beautiful, functional websites and applications. I specialize in frontend development with a strong focus on creating intuitive user experiences.
              </motion.p>
              
              <motion.p 
                className="text-gray-600 dark:text-gray-300 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                My journey in web development began during my university years, and since then, I've worked with various clients from startups to established businesses. I'm constantly learning and exploring new technologies to stay at the forefront of web development trends.
              </motion.p>
            </div>

            {/* Personal Info with fancy cards */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { icon: FaUserAlt, label: "Email", value: "hachem02000@gmail.com", color: "#ea4335" },
                { icon: FaPhone, label: "Phone", value: "+213 781226974", color: "#4285f4" },
                { icon: FaMapMarkerAlt, label: "Location", value: "Algeria / Algiers", color: "#fbbc05" },
                { icon: FaBriefcase, label: "Availability", value: "Freelance/Full-time", color: "#34a853" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden group"
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                  whileHover={{ y: -5 }}
                >
                  <div className="p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-3 group-hover:bg-gray-50 dark:group-hover:bg-gray-800">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ background: `${item.color}15`, color: item.color }}>
                      <item.icon className="text-sm" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">{item.label}</p>
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{item.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section - Redesigned with Majestic Style */}
        <div className="mt-32 relative">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div 
              className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 dark:bg-primary-500/10 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                x: [-20, 20, -20],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ 
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
            <motion.div 
              className="absolute bottom-0 right-1/3 w-80 h-80 bg-secondary-500/5 dark:bg-secondary-500/10 rounded-full blur-3xl"
              animate={{ 
                scale: [1.2, 1, 1.2],
                y: [0, -30, 0],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ 
                duration: 12,
                delay: 1,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
          </div>
          
          {/* Section header with fancy styling */}
          <motion.div 
            className="text-center relative z-10 mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated badge */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <div className="relative inline-flex items-center px-6 py-3 rounded-full bg-primary-50 dark:bg-primary-900/30 overflow-hidden group">
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-primary-500/20 dark:from-primary-500/30 dark:via-secondary-500/30 dark:to-primary-500/30 rounded-full"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                />
                <FaLayerGroup className="mr-3 text-xl text-primary-600 dark:text-primary-400" />
                <span className="font-display font-bold text-xl text-primary-600 dark:text-primary-400 relative z-10">
                  ACHIEVEMENTS
                </span>
              </div>
            </motion.div>
            
            {/* Main heading with fancy font and gradient */}
            <h3 className="font-display text-5xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-primary-700 to-gray-800 dark:from-white dark:via-primary-300 dark:to-white tracking-tight">
              My Journey in Numbers
            </h3>
            
            {/* Animated underline */}
            <div className="relative h-1.5 max-w-sm mx-auto mb-10 overflow-hidden rounded-full">
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
          </motion.div>
          
          {/* Stats cards with 3D effect and fancy styling */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={cardVariants}
                whileHover={{ 
                  y: -15, 
                  scale: 1.03,
                  transition: { duration: 0.3 } 
                }}
                className="relative group"
              >
                {/* Card with 3D perspective effect */}
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 group-hover:shadow-2xl border border-gray-100 dark:border-gray-700/30 h-full">
                  {/* Gradient overlay */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ 
                      background: `linear-gradient(135deg, ${stat.color}15 0%, transparent 100%)`,
                    }}
                  />
                  
                  {/* Top accent bar */}
                  <div 
                    className="h-2 w-full"
                    style={{ background: `linear-gradient(to right, ${stat.color}, ${stat.color}99)` }}
                  />
                  
                  <div className="p-8 text-center">
                    {/* Icon with floating animation - Fixed to appear in front of cards */}
                    <motion.div 
                      className="relative mx-auto mb-6 w-20 h-20 z-20"
                      animate={{ y: [0, -8, 0] }}
                      transition={{ 
                        duration: 3 + index, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                      style={{ pointerEvents: 'auto' }}
                    >
                      {/* Glowing background */}
                      <motion.div 
                        className="absolute inset-0 rounded-full blur-xl z-10"
                        style={{ backgroundColor: stat.color }}
                        animate={{ 
                          opacity: [0.3, 0.6, 0.3],
                          scale: [0.8, 1, 0.8],
                        }}
                        transition={{ 
                          duration: 4, 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          delay: index * 0.2
                        }}
                      />
                      
                      {/* Icon container with improved visibility */}
                      <div 
                        className="relative h-20 w-20 rounded-full flex items-center justify-center shadow-lg z-20"
                        style={{ 
                          background: `linear-gradient(135deg, ${stat.color} 0%, ${stat.color}99 100%)`,
                          boxShadow: `0 10px 15px -3px ${stat.color}40`,
                          position: 'relative'
                        }}
                      >
                        <stat.icon className="h-10 w-10 text-white relative z-30" />
                        
                        {/* Additional shine effect to enhance visibility */}
                        <motion.div
                          className="absolute inset-0 bg-white/10 rounded-full z-20"
                          animate={{ opacity: [0, 0.3, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </div>
                    </motion.div>
                    
                    {/* Value with fancy font and animation */}
                    <div className="relative mb-2 h-24 flex items-center justify-center">
                      <AnimatePresence mode="wait">
                        <motion.div 
                          key={`value-${index}`}
                          className="font-display font-black text-6xl md:text-7xl tracking-tighter"
                          style={{ color: stat.color }}
                          initial={{ opacity: 0, y: 20, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -20, scale: 0.9 }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 300, 
                            delay: index * 0.1 + 0.3 
                          }}
                        >
                          {stat.value}
                          
                          {/* Shine effect */}
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                            animate={{ 
                              opacity: [0, 0.5, 0],
                              left: ["-100%", "100%"],
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 5 + index,
                            }}
                            style={{ mixBlendMode: "overlay" }}
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                    
                    {/* Label with fancy styling */}
                    <h6 className="font-display text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {stat.label}
                    </h6>
                    
                    {/* Description with subtle animation */}
                    <motion.p 
                      className="text-gray-600 dark:text-gray-400 font-medium"
                      animate={{ opacity: [0.8, 1, 0.8] }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        delay: index * 0.2 
                      }}
                    >
                      {stat.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;