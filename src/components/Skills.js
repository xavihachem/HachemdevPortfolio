import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiAdobephotoshop,
  SiRedux,
} from "react-icons/si";

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-xl text-primary-600 dark:text-primary-400 font-medium mb-2">
            My Skills
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Technical Expertise
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="space-y-6"
            >
              <h4 className="text-2xl font-bold text-gray-800 dark:text-white">
                {category.title}
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                    className="card p-6 hover:shadow-lg transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center mb-4">
                      <div
                        className="mr-4 text-3xl"
                        style={{ color: skill.color }}
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
                      <div>
                        <h5 className="text-lg font-semibold">{skill.name}</h5>
                      </div>
                    </div>

                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-1">
                      <motion.div
                        className="h-2.5 rounded-full"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        animate={
                          isInView ? { width: `${skill.level}%` } : { width: 0 }
                        }
                        transition={{
                          duration: 1,
                          delay: 0.2 + skillIndex * 0.1,
                        }}
                      />
                    </div>
                    <div className="flex justify-end">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Cloud */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-900 dark:border dark:border-gray-700"
        >
          <h4 className="text-2xl font-bold text-center mb-8">
            Technologies I Work With
          </h4>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: FaReact, color: "#61DAFB", name: "React" },
              { icon: SiNextdotjs, color: "#000000", name: "Next.js" },
              { icon: FaJs, color: "#F7DF1E", name: "JavaScript" },
              { icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
              { icon: FaNodeJs, color: "#339933", name: "Node.js" },
              { icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind" },
              { icon: SiMongodb, color: "#47A248", name: "MongoDB" },
              { icon: FaGitAlt, color: "#F05032", name: "Git" },
              { icon: FaFigma, color: "#F24E1E", name: "Figma" },
              { icon: SiRedux, color: "#764ABC", name: "Redux" },
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -5, scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <tech.icon
                  className="text-4xl mb-2"
                  style={{ color: tech.color }}
                />
                <span className="text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;