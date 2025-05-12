import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaDownload,
  FaCalendarAlt
} from "react-icons/fa";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "hachem02000@gmail.com",
      link: "mailto:hachem02000@gmail.com",
      color: "#ea4335",
      description: "Feel free to email me anytime",
      animation: "hover:rotate-y-180"
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+213 781226974",
      link: "tel:+213781226974",
      color: "#4285f4",
      description: "Available weekdays 9AM-6PM",
      animation: "hover:scale-105"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Algeria / Algiers",
      link: "https://maps.google.com/?q=Algiers,Algeria",
      color: "#fbbc05",
      description: "Currently based in",
      animation: "hover:bounce"
    },
    {
      icon: FaCalendarAlt,
      title: "Schedule a Call",
      value: "Book a 30-min chat",
      link: "https://calendly.com",
      color: "#34a853",
      description: "Let's discuss your project",
      animation: "hover:pulse"
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/hachem-djefafla-9069042ba/",
      color: "#0077B5",
      bgColor: "rgba(0, 119, 181, 0.1)"
    },
    {
      icon: FaGithub,
      title: "GitHub",
      link: "https://github.com/xavihachem",
      color: "#333",
      bgColor: "rgba(51, 51, 51, 0.1)"
    },
    {
      icon: FaTwitter,
      title: "Twitter",
      link: "https://x.com/Hachem_Djefafla",
      color: "#1DA1F2",
      bgColor: "rgba(29, 161, 242, 0.1)"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.6,
      },
    },
  };

  const cardHoverVariants = {
    rest: { scale: 1, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" },
    hover: { 
      scale: 1.03, 
      boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  return (
    <section
      id="contact"
      className="section-padding bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      <div className="container-custom" ref={ref}>
        <div className="relative mb-24">
          {/* Decorative elements */}
          <motion.div 
            className="absolute -top-10 -left-10 w-40 h-40 bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-3xl z-0 hidden md:block"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary-500/10 dark:bg-secondary-500/5 rounded-full blur-3xl z-0 hidden md:block"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ 
              duration: 8,
              delay: 1,
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
            className="text-center relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block relative mb-4"
            >
              <span className="relative inline-block px-6 py-2 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-semibold text-lg z-10">
                Get In Touch
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 blur-md z-0 animate-pulse"></div>
            </motion.div>
            
            <motion.h3 
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Contact Me
            </motion.h3>
            
            <div className="relative h-1 max-w-xs mx-auto mb-8 overflow-hidden">
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
            
            <motion.p 
              className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Have a project in mind or want to discuss potential opportunities?
              Feel free to reach out through any of the channels below.
            </motion.p>
          </motion.div>
        </div>

        {/* Main Contact Grid - Redesigned Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-7">
            {/* Contact Cards Grid */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
            >
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target={item.link.startsWith('http') ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover="hover"
                  initial="rest"
                  whileTap={{ scale: 0.98 }}
                  className="card p-6 flex items-start hover:shadow-lg transition-all duration-300 group h-full"
                >
                  <div 
                    className="flex-shrink-0 h-14 w-14 rounded-full flex items-center justify-center text-white mr-5 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: item.color }}
                  >
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold mb-1">{item.title}</h5>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.description}</p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Work Availability Card */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mt-8"
            >
              <motion.div
                variants={cardHoverVariants}
                initial="rest"
                whileHover="hover"
                className="card p-0 overflow-hidden h-full"
              >
                <div className="relative">
                  {/* Background with blur effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-secondary-500 to-primary-700 opacity-90"></div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12 blur-xl"></div>
                  
                  <div className="relative p-8 flex flex-col md:flex-row items-start md:items-center gap-8 z-10 text-white">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <div className="h-10 w-1 bg-white mr-4 rounded-full"></div>
                        <h4 className="text-2xl font-bold">Work Availability</h4>
                      </div>
                      
                      <p className="mb-4 text-white/90 leading-relaxed">
                        I'm currently available for freelance work and open to
                        discussing new opportunities that align with my expertise and interests.
                      </p>

                      <div className="flex items-center mb-4">
                        <div className="h-4 w-4 rounded-full bg-green-400 animate-pulse mr-3 shadow-lg shadow-green-400/50"></div>
                        <span className="font-medium text-lg">Available for hire</span>
                        <div className="ml-4 text-xs font-medium bg-white/20 py-1 px-3 rounded-full">
                          OPEN TO WORK
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-2/5 w-full">
                      <div className="bg-black/20 backdrop-blur-sm rounded-xl p-5 border border-white/10 h-full">
                        <h5 className="text-lg font-semibold mb-3">Let's create something amazing</h5>
                        <p className="text-sm text-white/80 leading-relaxed">
                          I'm excited to bring your ideas to life with clean code and beautiful design. 
                          My schedule is flexible and I'm ready to start on your next project.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Connect With Me */}
          <div className="lg:col-span-5">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="h-full"
            >
              <div className="relative h-full">
                {/* Decorative background elements */}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                  <motion.div 
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/5 dark:bg-primary-500/10 rounded-full blur-3xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, 0],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ 
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  />
                  <motion.div 
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary-500/5 dark:bg-secondary-500/10 rounded-full blur-3xl"
                    animate={{ 
                      scale: [1.2, 1, 1.2],
                      rotate: [0, -5, 0],
                      opacity: [0.2, 0.4, 0.2]
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
                  variants={cardHoverVariants}
                  initial="rest"
                  whileHover="hover"
                  className="card backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 border border-gray-100 dark:border-gray-700 rounded-2xl overflow-hidden relative z-10 h-full flex flex-col"
                >
                  {/* Fancy header with gradient */}
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-secondary-600/90 dark:from-primary-500/90 dark:to-secondary-500/90"></div>
                    
                    {/* Animated particles for dark mode */}
                    <div className="absolute inset-0 dark:block hidden overflow-hidden">
                      {[...Array(20)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 rounded-full bg-white/30"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                          }}
                          transition={{
                            duration: Math.random() * 2 + 1,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                          }}
                        />
                      ))}
                    </div>
                    
                    <div className="relative py-8 px-6 text-center">
                      <motion.h4 
                        className="text-3xl font-bold text-white mb-2"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                      >
                        Connect With Me
                      </motion.h4>
                      <motion.div 
                        className="h-1 w-24 bg-white/50 mx-auto rounded-full overflow-hidden"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      >
                        <motion.div 
                          className="h-full w-full bg-white"
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            ease: "easeInOut" 
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Social icons with advanced animations */}
                  <div className="px-8 py-10 flex-1 flex flex-col justify-center">
                    <div className="flex flex-wrap justify-center gap-6 mb-8">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                          whileHover={{ y: -5 }}
                        >
                          {/* Outer glow effect */}
                          <motion.div 
                            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ 
                              background: `radial-gradient(circle, ${social.color}40 0%, transparent 70%)`,
                              filter: "blur(10px)"
                            }}
                            animate={{ scale: [0.8, 1.2, 0.8] }}
                            transition={{ 
                              duration: 3, 
                              repeat: Infinity,
                              ease: "easeInOut" 
                            }}
                          />
                          
                          {/* Icon container */}
                          <div className="flex flex-col items-center relative z-10">
                            <div 
                              className="w-16 h-16 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 bg-white dark:bg-gray-700 group-hover:shadow-lg border border-gray-100 dark:border-gray-600 group-hover:border-gray-200 dark:group-hover:border-gray-500"
                            >
                              {/* Dark mode special effect */}
                              <div className="absolute inset-0 rounded-xl overflow-hidden dark:block hidden">
                                <div 
                                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                  style={{ 
                                    background: `linear-gradient(45deg, ${social.color}10, ${social.color}30, ${social.color}10)`,
                                  }}
                                />
                                <motion.div 
                                  className="absolute inset-0"
                                  style={{ 
                                    background: `linear-gradient(90deg, transparent, ${social.color}30, transparent)`,
                                  }}
                                  animate={{ x: ["-100%", "100%"] }}
                                  transition={{ 
                                    duration: 2, 
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    repeatDelay: 1
                                  }}
                                />
                              </div>
                              
                              <social.icon 
                                className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
                                style={{ color: social.color }}
                              />
                            </div>
                            
                            <motion.span 
                              className="text-base font-medium"
                              style={{ color: social.color }}
                              animate={{ y: [0, -2, 0] }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 0.1
                              }}
                            >
                              {social.title}
                            </motion.span>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                    
                    <motion.div 
                      className="text-center mt-auto"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto leading-relaxed">
                        Feel free to reach out through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Bottom Animated Bar */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 mt-16 origin-left"
        />
      </div>
    </section>
  );
};

export default Contact;