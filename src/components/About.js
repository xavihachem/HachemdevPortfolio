import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

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
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Satisfied Clients", value: "30+" },
    { label: "Technologies", value: "15+" },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-xl text-primary-600 dark:text-primary-400 font-medium mb-2">
            About Me
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Get to know me better
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary-500 dark:border-primary-400 rounded-lg z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-secondary-500 dark:border-secondary-400 rounded-lg z-0"></div>

              {/* Main image */}
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <div className="aspect-w-4 aspect-h-5">
                  {/* User profile image */}
                  <img 
                    src="/mainportfoliopic.png" 
                    alt="Hachem" 
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "0 0" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-2xl font-bold mb-4">Who am I?</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I'm a passionate web developer with a strong focus on creating
                beautiful, functional, and user-friendly websites. With a
                background in both design and development, I bring a unique
                perspective to every project I work on.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                My journey in web development started 5 years ago, and since
                then, I've been constantly learning and improving my skills to
                stay up-to-date with the latest technologies and trends in the
                industry.
              </p>
            </motion.div>

            {/* Personal Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Name:</span> Hachem
                </p>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Email:</span>{" "}
                  hachem@example.com
                </p>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Location:</span> Paris, France
                </p>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Availability:</span>{" "}
                  Freelance/Full-time
                </p>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Download Resume
              </a>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              className="card p-6 text-center"
            >
              <h5 className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {stat.value}
              </h5>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;