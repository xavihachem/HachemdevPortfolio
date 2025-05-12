import { useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaFigma,
  FaCode,
  FaTools,
  FaLaptopCode,
  FaBrain,
  FaServer,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiAdobephotoshop,
  SiRedux,
  SiGraphql,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: FaReact, level: 90, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, level: 85, color: "#000000" },
        { name: "JavaScript", icon: FaJs, level: 92, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, level: 80, color: "#3178C6" },
        { name: "HTML5", icon: FaHtml5, level: 95, color: "#E34F26" },
        { name: "CSS3", icon: FaCss3Alt, level: 90, color: "#1572B6" },
        {
          name: "Tailwind CSS",
          icon: SiTailwindcss,
          level: 88,
          color: "#06B6D4",
        },
        { name: "Redux", icon: SiRedux, level: 82, color: "#764ABC" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: FaNodeJs, level: 85, color: "#339933" },
        { name: "Express", icon: SiExpress, level: 82, color: "#000000" },
        { name: "MongoDB", icon: SiMongodb, level: 78, color: "#47A248" },
        { name: "RESTful APIs", icon: null, level: 88, color: "#0096FF" },
        { name: "GraphQL", icon: null, level: 75, color: "#E535AB" },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: FaGitAlt, level: 88, color: "#F05032" },
        { name: "Figma", icon: FaFigma, level: 85, color: "#F24E1E" },
        {
          name: "Photoshop",
          icon: SiAdobephotoshop,
          level: 80,
          color: "#31A8FF",
        },
        { name: "Responsive Design", icon: null, level: 92, color: "#38B2AC" },
        { name: "UI/UX Design", icon: null, level: 85, color: "#FF61F6" },
      ],
    },
  ];

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
    <section id="skills" className="section-padding bg-white dark:bg-gray-800">
      <div className="container-custom" ref={ref}>
        <div className="relative mb-24">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Animated code symbols for dark mode */}
            <div className="dark:block hidden">
              {["<>", "{ }", "( )", "[]", "//", "/**/", "=>"].map((symbol, index) => (
                <motion.div
                  key={index}
                  className="absolute text-primary-500/10 font-mono font-bold"
                  style={{
                    fontSize: `${Math.random() * 30 + 40}px`,
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
                  ease: "easeInOut",
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
                  ease: "easeInOut",
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
                    ease: "easeInOut",
                  }}
                />
                <FaCode className="mr-2 text-primary-600 dark:text-primary-400" />
                <span className="font-semibold text-lg text-primary-600 dark:text-primary-400 relative z-10">
                  My Skills
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
                  Technical Expertise
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
                  ease: "easeInOut",
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
                Here's a showcase of my technical skills and proficiencies across various technologies,
                frameworks, and tools that I've mastered throughout my career.
              </motion.p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-20"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="relative"
            >
              {/* Category title with icon */}
              <div className="mb-10 relative z-10">
                <motion.div 
                  className="flex items-center justify-center md:justify-start gap-3 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                >
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white">
                      {categoryIndex === 0 ? (
                        <FaLaptopCode className="text-2xl" />
                      ) : categoryIndex === 1 ? (
                        <FaServer className="text-2xl" />
                      ) : (
                        <FaTools className="text-2xl" />
                      )}
                    </div>
                    <motion.div 
                      className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 blur-md opacity-50"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut" 
                      }}
                    />
                  </div>
                  <h4 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300">
                    {category.title}
                  </h4>
                </motion.div>
                
                {/* Decorative line */}
                <div className="relative h-0.5 w-full max-w-md mb-8 overflow-hidden opacity-50">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary-500 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  />
                </div>
              </div>
              
              {/* Decorative background elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="dark:block hidden">
                  <motion.div 
                    className="absolute top-1/4 -left-10 w-40 h-40 rounded-full bg-primary-500/5 blur-3xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      x: [-10, 10, -10],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ 
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  />
                  <motion.div 
                    className="absolute bottom-0 right-1/4 w-60 h-60 rounded-full bg-secondary-500/5 blur-3xl"
                    animate={{ 
                      scale: [1.2, 1, 1.2],
                      y: [0, -20, 0],
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

              {/* Skills grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                    className="relative group"
                    whileHover={{ y: -5 }}
                  >
                    {/* Card with glassmorphism effect */}
                    <div className="relative overflow-hidden rounded-xl bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-100 dark:border-gray-700/30 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      {/* Animated gradient overlay on hover */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 dark:from-primary-500/20 dark:to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                      
                      {/* Skill content */}
                      <div className="flex items-center mb-5">
                        <div className="relative mr-4">
                          <div 
                            className="w-12 h-12 rounded-lg flex items-center justify-center text-3xl"
                            style={{ color: skill.color, background: `${skill.color}15` }}
                          >
                            {skill.icon ? (
                              <skill.icon />
                            ) : (
                              <div
                                className="w-8 h-8 rounded-full"
                                style={{ backgroundColor: skill.color }}
                              ></div>
                            )}
                          </div>
                          <motion.div 
                            className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-100"
                            style={{ background: `${skill.color}20` }}
                            animate={{ 
                              scale: [1, 1.1, 1],
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut" 
                            }}
                          />
                        </div>
                        <div>
                          <h5 className="text-xl font-bold text-gray-800 dark:text-white">{skill.name}</h5>
                        </div>
                      </div>

                      {/* Skill progress bar with animated particles */}
                      <div className="relative">
                        <div className="w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-3 mb-2 overflow-hidden">
                          <motion.div
                            className="h-3 rounded-full relative overflow-hidden"
                            style={{ backgroundColor: skill.color }}
                            initial={{ width: 0 }}
                            animate={
                              isInView ? { width: `${skill.level}%` } : { width: 0 }
                            }
                            transition={{
                              duration: 1.5,
                              delay: 0.3 + skillIndex * 0.1,
                              ease: "easeOut"
                            }}
                          >
                            {/* Animated particles inside progress bar */}
                            <div className="absolute inset-0 overflow-hidden">
                              {[...Array(5)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="absolute w-2 h-6 bg-white/20 rounded-full"
                                  style={{ 
                                    left: `${i * 20}%`,
                                    top: "-50%",
                                    rotate: "30deg"
                                  }}
                                  animate={{
                                    x: ["-100%", "500%"],
                                  }}
                                  transition={{
                                    duration: 2 + i,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: i * 0.2
                                  }}
                                />
                              ))}
                            </div>
                          </motion.div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                            Proficiency
                          </span>
                          <motion.span 
                            className="text-sm font-bold"
                            style={{ color: skill.color }}
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 1 + skillIndex * 0.1 }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Technologies section as requested */}
      </div>
    </section>
  );
};

export default Skills;