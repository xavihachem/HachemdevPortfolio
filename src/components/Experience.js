import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const experiences = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      location: "Paris, France",
      period: "2021 - Present",
      description:
        "Leading the frontend development team in creating responsive and accessible web applications. Implementing modern UI/UX designs and optimizing performance for large-scale applications.",
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
      company: "Digital Solutions Agency",
      location: "Lyon, France",
      period: "2019 - 2021",
      description:
        "Developed and maintained multiple client websites and web applications. Collaborated with designers to implement pixel-perfect interfaces and improved site performance.",
      type: "work",
      skills: ["JavaScript", "React", "CSS/SASS", "Responsive Design"],
    },
    {
      id: 3,
      title: "Web Development Bootcamp",
      company: "Code Academy",
      location: "Online",
      period: "2018 - 2019",
      description:
        "Completed an intensive full-stack web development program covering frontend and backend technologies, database management, and deployment strategies.",
      type: "education",
      skills: ["HTML/CSS", "JavaScript", "Node.js", "MongoDB"],
    },
    {
      id: 4,
      title: "Junior Web Developer",
      company: "Startup Hub",
      location: "Marseille, France",
      period: "2017 - 2019",
      description:
        "Assisted in the development of web applications and websites for early-stage startups. Gained hands-on experience with various web technologies and agile development methodologies.",
      type: "work",
      skills: ["HTML/CSS", "JavaScript", "WordPress", "PHP"],
    },
    {
      id: 5,
      title: "Bachelor of Computer Science",
      company: "University of Technology",
      location: "Paris, France",
      period: "2014 - 2017",
      description:
        "Studied computer science with a focus on software development, algorithms, and data structures. Completed several web development projects as part of the curriculum.",
      type: "education",
      skills: ["Java", "Python", "Data Structures", "Algorithms"],
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-xl text-primary-600 dark:text-primary-400 font-medium mb-2">
            My Journey
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Experience & Education
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto"></div>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative w-full max-w-4xl"
          >
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full"></div>

            {/* Experience items */}
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-gray-800 border-4 border-primary-500 z-10 flex items-center justify-center">
                  {exp.type === "work" ? (
                    <FaBriefcase className="text-primary-500" />
                  ) : (
                    <FaGraduationCap className="text-primary-500" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div className="card p-6 hover:shadow-lg transition-all duration-300">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold mb-1">{exp.title}</h4>
                    <h5 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                      {exp.company} • {exp.location}
                    </h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            View Full Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;