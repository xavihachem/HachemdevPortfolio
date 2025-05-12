import { useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaBuilding, FaLaptopCode, FaTools } from "react-icons/fa";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const experiences = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechSphere Solutions",
      location: "Remote",
      period: "2023 - Present",
      description:
        "Leading frontend development for international clients, creating responsive and accessible web applications with modern frameworks. Implementing advanced UI/UX designs and optimizing performance for enterprise-level applications.",
      type: "work",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Redux",
        "Performance Optimization",
      ],
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Digital Oasis Agency",
      location: "Algiers, Algeria",
      period: "2022 - 2023",
      description:
        "Developed and maintained client websites and web applications for local and international businesses. Collaborated with designers to implement pixel-perfect interfaces and improved site performance metrics by 40%.",
      type: "work",
      skills: ["JavaScript", "React", "CSS/SASS", "Responsive Design", "Tailwind CSS"],
    },
    {
      id: 3,
      title: "Master's Degree in Computer Science",
      company: "University of Biskra",
      location: "Biskra, Algeria",
      period: "2022 - 2024",
      description:
        "Completed Master's degree with specialization in Web Technologies and Information Systems. Thesis focused on developing scalable web applications using modern JavaScript frameworks. Graduated with honors.",
      type: "education",
      skills: ["Advanced JavaScript", "Web Architecture", "System Design", "Research Methodology", "Cloud Computing"],
    },
    {
      id: 4,
      title: "Freelance Web Developer",
      company: "Self-employed",
      location: "Biskra, Algeria",
      period: "2020 - 2022",
      description:
        "Designed and developed custom websites and web applications for small businesses and startups. Managed client relationships, project timelines, and delivered solutions that increased client engagement and conversion rates.",
      type: "work",
      skills: ["HTML/CSS", "JavaScript", "WordPress", "PHP", "UI/UX Design"],
    },
    {
      id: 5,
      title: "Bachelor's Degree in Computer Science",
      company: "University of Biskra",
      location: "Biskra, Algeria",
      period: "2019 - 2022",
      description:
        "Studied computer science with focus on software development, algorithms, and web technologies. Completed several practical projects including an e-commerce platform and a student management system. Active member of the university's coding club.",
      type: "education",
      skills: ["Java", "Python", "Data Structures", "Algorithms", "Web Development"],
    },
    {
      id: 6,
      title: "Web Development Internship",
      company: "AlgeriaTech Solutions",
      location: "Algiers, Algeria",
      period: "Summer 2021",
      description:
        "Three-month internship where I assisted in developing web applications for government agencies. Gained practical experience in full-stack development and working in an agile team environment.",
      type: "work",
      skills: ["React", "Node.js", "Express", "MongoDB", "Agile Methodology"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="experience"
      className="section-padding bg-white dark:bg-gray-800"
    >
      <div className="container-custom" ref={ref}>
        <div className="relative mb-24">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Animated shapes for dark mode */}
            <div className="dark:block hidden">
              {["⬡", "⬢", "◆", "⬣", "⬟"].map((symbol, index) => (
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
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
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
                <FaCalendarAlt className="mr-2 text-primary-600 dark:text-primary-400" />
                <span className="font-semibold text-lg text-primary-600 dark:text-primary-400 relative z-10">
                  My Journey
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
                  Experience & Education
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
                Explore my professional journey and educational background that have shaped my expertise in web development and design.
              </motion.p>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative w-full max-w-4xl"
          >
            {/* Timeline line with animated gradient */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-primary-500 via-secondary-500 to-primary-500"></div>
              <motion.div 
                className="absolute inset-0 w-full h-full bg-gradient-to-b from-primary-400 via-secondary-400 to-primary-400"
                animate={{ y: ["-100%", "100%"] }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
                style={{ filter: "brightness(1.5) blur(1px)" }}
              />
            </div>

            {/* Experience items */}
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row gap-8 mb-16 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline dot with animated pulse */}
                <motion.div 
                  className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-12 h-12 z-10"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {/* Pulse animation */}
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-primary-500/30 dark:bg-primary-500/20"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  />
                  
                  {/* Icon container */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 shadow-lg flex items-center justify-center">
                    {exp.type === "work" ? (
                      <FaBriefcase className="text-white text-sm" />
                    ) : (
                      <FaGraduationCap className="text-white text-sm" />
                    )}
                  </div>
                </motion.div>

                {/* Content with glass morphism effect */}
                <div
                  className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}
                >
                  <motion.div 
                    className="relative group"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {/* Glass blur effect on hover */}
                    <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl opacity-0 group-hover:opacity-80 dark:group-hover:opacity-30 blur-xl transition-all duration-500 transform group-hover:scale-105"></div>
                    
                    {/* Card content */}
                    <div className="card p-6 backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl relative z-10">
                      {/* Period badge with icon */}
                      <div className="mb-3 flex items-center gap-2 flex-wrap">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full ${index % 2 === 0 ? "ml-auto md:ml-0" : ""} bg-gradient-to-r from-primary-500/10 to-secondary-500/10 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-800/30`}>
                          <FaCalendarAlt className="text-primary-500" />
                          {exp.period}
                        </span>
                        
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full ${index % 2 === 0 ? "ml-auto md:ml-0" : ""} bg-gradient-to-r from-secondary-500/10 to-primary-500/10 text-secondary-700 dark:text-secondary-300 border border-secondary-200 dark:border-secondary-800/30`}>
                          <FaMapMarkerAlt className="text-secondary-500" />
                          {exp.location}
                        </span>
                      </div>
                      
                      {/* Title with gradient on hover */}
                      <h4 className="text-xl font-bold mb-1 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-secondary-600 dark:group-hover:from-primary-400 dark:group-hover:to-secondary-400 transition-all duration-300">
                        {exp.title}
                      </h4>
                      
                      {/* Company with icon */}
                      <h5 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
                        {index % 2 === 0 && (
                          <span className="inline-block">{exp.company}</span>
                        )}
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700">
                          {exp.type === "work" ? (
                            <FaBuilding className="text-gray-600 dark:text-gray-400 text-xs" />
                          ) : (
                            <FaGraduationCap className="text-gray-600 dark:text-gray-400 text-xs" />
                          )}
                        </span>
                        {index % 2 !== 0 && (
                          <span className="inline-block">{exp.company}</span>
                        )}
                      </h5>
                      
                      {/* Description with improved typography */}
                      <p className="text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Skills with improved styling */}
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "justify-end md:justify-end" : ""}`}>
                        {exp.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 flex items-center gap-1"
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ duration: 0.2 }}
                          >
                            <FaTools className="text-gray-400 dark:text-gray-500 text-xs" />
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;