import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaArrowUp,
  FaCheckCircle,
} from "react-icons/fa";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    // Simulate subscription success
    setSubscribed(true);
    setEmail("");

    // Reset subscription status after 5 seconds
    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  const socialLinks = [
    { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com", label: "GitHub" },
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FaEnvelope, href: "mailto:hachem@example.com", label: "Email" },
  ];

  const footerLinks = [
    { name: "Home", href: "hero" },
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Experience", href: "experience" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <footer className="relative bg-gray-900 text-white pt-16 pb-8">
      {/* Decorative Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-full">
        <svg
          className="relative block w-full h-12"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-gray-900"
          ></path>
        </svg>
      </div>
      <div className="container-custom">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Logo & Description */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h3
              className="text-2xl font-bold text-gradient"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Hachem
            </motion.h3>
            <p className="text-gray-400 max-w-xs leading-relaxed">
              A passionate web developer focused on creating beautiful,
              functional, and user-friendly websites and applications.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 transition-colors duration-300"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <div>
            <motion.h4
              className="text-xl font-semibold mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Quick Links
            </motion.h4>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Link
                    to={link.href}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 cursor-pointer flex items-center group"
                  >
                    <span className="mr-2 text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      ›
                    </span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.h4
              className="text-xl font-semibold mb-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Stay Updated
            </motion.h4>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Subscribe to my newsletter to receive updates on my latest
              projects and tech articles.
            </p>
            <AnimatePresence>
              {subscribed ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-center space-x-2 text-green-500 bg-gray-800 p-3 rounded-md"
                >
                  <FaCheckCircle />
                  <span>Thank you for subscribing!</span>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  className="flex flex-col space-y-2"
                  onSubmit={handleSubscribe}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className={`px-4 py-2 w-full bg-gray-800 text-gray-200 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                        emailError ? "border-red-500" : ""
                      }`}
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                    <motion.button
                      type="submit"
                      className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-r-md transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Subscribe
                    </motion.button>
                  </div>
                  {emailError && (
                    <motion.p
                      className="text-red-500 text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {emailError}
                    </motion.p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-gray-800 my-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7 }}
        ></motion.div>

        {/* Copyright */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Hachem. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Designed & Built with{" "}
            <span className="text-red-500 animate-pulse">❤</span> using React &
            Tailwind CSS
          </p>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="fixed bottom-6 right-6 h-12 w-12 rounded-full bg-primary-600 text-white flex items-center justify-center shadow-lg hover:bg-primary-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 z-50"
            aria-label="Scroll to top"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;