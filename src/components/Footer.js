import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp, FaHeart } from "react-icons/fa";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  return (
    <footer className="relative bg-gray-900 text-white pt-10 pb-6 overflow-hidden">
      {/* Simple wave decoration */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-full">
        <svg
          className="relative block w-full h-12"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            className="fill-gray-800"
          />
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        {/* Simple Footer Content */}
        <div className="flex flex-col items-center justify-center">
          {/* Subtle divider with gradient */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent mb-6"></div>
          
          {/* Copyright Section */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400 text-sm mb-2">
              &copy; {new Date().getFullYear()} <span className="text-gray-300">Hachem</span>. All rights reserved.
            </p>
            <div className="flex items-center">
              <FaHeart className="text-red-500 animate-pulse mx-2 h-3 w-3" />
              <p className="text-gray-500 text-xs">
                Made with <span className="text-primary-400">React</span> & <span className="text-secondary-400">Tailwind CSS</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="fixed bottom-6 right-6 h-12 w-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white flex items-center justify-center shadow-lg shadow-primary-500/20 z-50"
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