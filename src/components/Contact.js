import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [formStatus, setFormStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "hachem@example.com",
      link: "mailto:hachem@example.com",
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+33 123 456 789",
      link: "tel:+33123456789",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Paris, France",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      link: "https://linkedin.com",
      color: "#0077B5",
    },
    {
      icon: FaGithub,
      title: "GitHub",
      link: "https://github.com",
      color: "#333",
    },
    {
      icon: FaTwitter,
      title: "Twitter",
      link: "https://twitter.com",
      color: "#1DA1F2",
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
    <section
      id="contact"
      className="section-padding bg-gray-50 dark:bg-gray-900"
    >
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-xl text-primary-600 dark:text-primary-400 font-medium mb-2">
            Get In Touch
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Contact Me</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out to me using the form below or through my
            contact information.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="card p-8">
              <h4 className="text-2xl font-bold mb-6">Send Me a Message</h4>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="input-field"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    {formStatus === "submitting" ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>

                  {formStatus === "success" && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 text-center text-green-600 dark:text-green-400"
                    >
                      Your message has been sent successfully! I'll get back to
                      you soon.
                    </motion.p>
                  )}
                </div>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Contact Details */}
            <motion.div variants={itemVariants} className="card p-8">
              <h4 className="text-2xl font-bold mb-6">Contact Information</h4>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg font-medium">{item.title}</h5>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="card p-8">
              <h4 className="text-2xl font-bold mb-6">Connect With Me</h4>

              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 w-12 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center hover:scale-110 transition-transform"
                    style={{ color: social.color }}
                    aria-label={social.title}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              variants={itemVariants}
              className="card p-8 bg-gradient-to-r from-primary-500 to-secondary-500 text-white"
            >
              <h4 className="text-2xl font-bold mb-4">Work Availability</h4>
              <p className="mb-4">
                I'm currently available for freelance work and open to
                discussing new opportunities.
              </p>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse mr-2"></div>
                <span className="font-medium">Available for new projects</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;