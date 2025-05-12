import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { HiOutlineCode, HiOutlineHome, HiOutlineUser, HiOutlineBriefcase, HiOutlineMail } from "react-icons/hi";
import { FaCode, FaLayerGroup } from "react-icons/fa";

const navigation = [
  { name: "Home", href: "hero", offset: 0, icon: HiOutlineHome },
  { name: "About", href: "about", offset: -100, icon: HiOutlineUser },
  { name: "Skills", href: "skills", offset: -100, icon: FaCode },
  { name: "Projects", href: "projects", offset: -100, icon: FaLayerGroup },
  { name: "Experience", href: "experience", offset: -100, icon: HiOutlineBriefcase },
  { name: "Contact", href: "contact", offset: -100, icon: HiOutlineMail },
];

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const navbarRef = useRef(null);

  // For parallax effect on navbar
  const { scrollY } = useScroll();
  const navbarOpacity = useTransform(scrollY, [0, 100], [1, 0.98]);
  const navbarBlur = useTransform(scrollY, [0, 100], [0, 8]);

  // For hover effects
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Update active section based on scroll position
      const sections = navigation.map(item => item.href);
      let foundSection = false;
      
      // First try to find a section that's in the viewport
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // More generous viewport check
          if (rect.top <= 200 && rect.bottom >= 0) {
            if (section !== activeSection) {
              setActiveSection(section);
            }
            foundSection = true;
            break;
          }
        }
      }
      
      // If no section is found in viewport and we're at the top, set to hero
      if (!foundSection && window.scrollY < 100) {
        setActiveSection("hero");
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled, activeSection]);

  return (
    <motion.header
      ref={navbarRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{ opacity: navbarOpacity }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300`}
    >
      {/* Animated background with glassmorphism */}
      <motion.div
        className="absolute inset-0 w-full h-full transition-all duration-500"
        style={{
          backdropFilter: `blur(${scrolled ? 12 : 0}px)`,
          background: scrolled
            ? theme === 'dark'
              ? 'rgba(17, 24, 39, 0.85)'
              : 'rgba(255, 255, 255, 0.85)'
            : 'transparent'
        }}
      >
        {/* Animated gradient border at bottom */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary-500 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{
            scaleX: scrolled ? 1 : 0,
            opacity: scrolled ? 1 : 0
          }}
          transition={{ duration: 0.6 }}
        />

        {/* Decorative elements */}
        {scrolled && (
          <>
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary-500/5 rounded-full blur-3xl"></div>
          </>
        )}
      </motion.div>

      <nav className="container-custom py-4 flex items-center justify-between relative z-10">
        {/* Majestic Logo with 3D effects and animations */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-shrink-0 relative group"
        >
          <a href="#" className="flex items-center">
            {/* Enhanced 3D Logo icon with animated effects */}
            <div className="relative mr-3">
              <div className="relative z-20 w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-600 dark:from-primary-400 dark:to-secondary-500 flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-12">
                {/* Inner icon container with 3D effect */}
                <div className="w-8 h-8 rounded-md bg-white dark:bg-gray-800 flex items-center justify-center transform transition-all duration-300 group-hover:scale-90">
                  <HiOutlineCode className="text-xl text-primary-600 dark:text-primary-400 transform transition-all duration-300 group-hover:scale-110" />
                </div>
                
                {/* Animated corner accents */}
                <motion.div 
                  className="absolute top-0 right-0 w-2 h-2 bg-yellow-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute bottom-0 left-0 w-2 h-2 bg-blue-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
              </div>
              
              {/* Multi-layered glow effect */}
              <motion.div
                className="absolute inset-0 bg-primary-500/20 dark:bg-primary-500/30 rounded-lg blur-md z-10"
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
              <motion.div
                className="absolute inset-0 bg-secondary-500/20 dark:bg-secondary-500/30 rounded-lg blur-xl -z-10"
                animate={{
                  scale: [1.1, 0.9, 1.1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                style={{ transform: 'translateZ(-10px)' }}
              />
            </div>

            {/* Enhanced 3D Text logo with multi-layered effects */}
            <div className="relative">
              <div className="relative z-10 perspective-1000">
                <motion.div
                  className="transform transition-all duration-300 group-hover:translate-y-[-2px] group-hover:translate-x-[2px]"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Main text with enhanced gradient */}
                  <span className="text-2xl font-black font-display tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 dark:from-primary-400 dark:via-secondary-400 dark:to-primary-400">
                    Hachem<span className="text-gray-800 dark:text-white font-black">.</span><span className="text-secondary-600 dark:text-secondary-400">Dev</span>
                  </span>
                  
                  {/* 3D shadow effect */}
                  <span className="absolute -bottom-[2px] left-[2px] text-2xl font-black font-display tracking-tight text-primary-300/20 dark:text-primary-700/20 select-none blur-[1px] -z-10">
                    Hachem.Dev
                  </span>
                </motion.div>
              </div>

              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 z-20"
                animate={{ 
                  opacity: [0, 0.5, 0],
                  left: ["-100%", "100%"],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 5,
                }}
                style={{ mixBlendMode: "overlay" }}
              />

              {/* Enhanced animated underline with glow */}
              <div className="relative h-[3px] mt-1 overflow-hidden rounded-full">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 rounded-full"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute inset-0 w-1/3 h-full bg-white opacity-0 group-hover:opacity-50"
                  animate={{ x: ["-100%", "300%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5 }}
                  style={{ filter: "blur(8px)" }}
                />
              </div>
            </div>
          </a>
        </motion.div>

        {/* Desktop Navigation - Fancy version */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden md:block"
        >
          <div className="relative">
            {/* Background pill that slides under active item */}
            <motion.div
              className="absolute h-10 rounded-full bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm"
              layoutId="navPill"
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              style={{
                width: hoveredItem ? '100px' : '80px',
                left: navigation.findIndex(item =>
                  hoveredItem ? item.name === hoveredItem : item.href === activeSection
                ) * 110 + 15,
                top: '-5px'
              }}
            />

            <div className="flex items-center space-x-1">
              {navigation.map((item, index) => {
                const isActive = activeSection === item.href;
                const isHovered = hoveredItem === item.name;

                return (
                   <Link
                    key={item.name}
                    to={item.href}
                    spy={true}
                    smooth={true}
                    offset={item.offset}
                    duration={500}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`relative z-10 px-5 py-2 rounded-full flex items-center transition-all duration-300 group ${isActive ? 'text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'}`}
                  >
                    {/* Hover background that includes the icon */}
                    {!isActive && (
                      <motion.div 
                        className="absolute inset-0 rounded-full bg-primary-50/0 dark:bg-primary-900/0 -z-10 transition-all duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        style={{
                          backgroundColor: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)',
                        }}
                      />
                    )}
                    
                    <motion.div
                      animate={{
                        scale: isActive || isHovered ? 1 : 0.9,
                        opacity: isActive || isHovered ? 1 : 0.7
                      }}
                      className="mr-1.5 transition-all duration-300 group-hover:text-primary-500 dark:group-hover:text-primary-400"
                    >
                      <item.icon className={`h-4 w-4 ${isActive ? 'text-primary-600 dark:text-primary-400' : ''}`} />
                    </motion.div>

                    <motion.span
                      animate={{
                        fontWeight: isActive || isHovered ? 600 : 500,
                      }}
                      className="text-sm"
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Theme Toggle - Fancy version - Hidden on mobile */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onClick={toggleTheme}
          className="relative p-2 rounded-full overflow-hidden group hidden md:block"
          aria-label="Toggle theme"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Background with animated gradient */}
          <motion.div
            className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden"
            animate={{
              background: theme === 'dark'
                ? 'linear-gradient(45deg, #1e293b, #334155)'
                : 'linear-gradient(45deg, #f3f4f6, #e5e7eb)'
            }}
          >
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: theme === 'dark'
                  ? 'radial-gradient(circle at center, rgba(59, 130, 246, 0.3) 0%, transparent 70%)'
                  : 'radial-gradient(circle at center, rgba(250, 204, 21, 0.3) 0%, transparent 70%)'
              }}
            />
          </motion.div>

          {/* Icon with animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={theme}
              initial={{ y: -20, opacity: 0, rotate: -90 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: 20, opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5 text-yellow-400" />
              ) : (
                <MoonIcon className="h-5 w-5 text-blue-600" />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.button>

        {/* Mobile menu button and theme toggle - Fancy version */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Mobile Theme Toggle */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={toggleTheme}
            className="relative p-2 rounded-full overflow-hidden group"
            aria-label="Toggle theme"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden"
              animate={{
                background: theme === 'dark'
                  ? 'linear-gradient(45deg, #1e293b, #334155)'
                  : 'linear-gradient(45deg, #f3f4f6, #e5e7eb)'
              }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: theme === 'dark'
                    ? 'radial-gradient(circle at center, rgba(59, 130, 246, 0.3) 0%, transparent 70%)'
                    : 'radial-gradient(circle at center, rgba(250, 204, 21, 0.3) 0%, transparent 70%)'
                }}
              />
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={theme}
                initial={{ y: -20, opacity: 0, rotate: -90 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: 20, opacity: 0, rotate: 90 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                {theme === "dark" ? (
                  <SunIcon className="h-5 w-5 text-yellow-400" />
                ) : (
                  <MoonIcon className="h-5 w-5 text-blue-600" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>
          
          {/* Hamburger Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative p-2 rounded-full overflow-hidden group"
          >
            {/* Button background with hover effect */}
            <motion.div
              className="absolute inset-0 bg-gray-100/50 dark:bg-gray-800/50 rounded-full backdrop-blur-sm"
              whileHover={{ scale: 1.1 }}
            />

            {/* Animated hamburger icon */}
            <div className="relative z-10 w-6 h-5 flex flex-col justify-between">
              <motion.span
                className="w-full h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full"
                animate={{
                  rotate: mobileMenuOpen ? 45 : 0,
                  y: mobileMenuOpen ? 8 : 0
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full"
                animate={{
                  opacity: mobileMenuOpen ? 0 : 1
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full"
                animate={{
                  rotate: mobileMenuOpen ? -45 : 0,
                  y: mobileMenuOpen ? -8 : 0
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>
      </nav>

      {/* Mobile menu - Fancy version */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden relative z-10"
          >
            <motion.div
              className="absolute inset-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <div className="px-4 py-3 space-y-1 relative z-10">
              {navigation.map((item, index) => {
                const isActive = activeSection === item.href;

                return (
                  <motion.div
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.href}
                      spy={true}
                      smooth={true}
                      offset={item.offset}
                      duration={500}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg relative group ${isActive
                        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50'}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {/* Hover effect that includes the icon */}
                      {!isActive && (
                        <motion.div 
                          className="absolute inset-0 rounded-lg bg-primary-50/0 dark:bg-primary-900/0 -z-10 transition-all duration-300"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          style={{
                            backgroundColor: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)',
                          }}
                        />
                      )}
                      
                      <item.icon className={`h-5 w-5 transition-colors duration-300 group-hover:text-primary-500 dark:group-hover:text-primary-400 ${isActive ? 'text-primary-600 dark:text-primary-400' : 'text-gray-500 dark:text-gray-400'}`} />
                      <span className="font-medium">{item.name}</span>

                      {isActive && (
                        <motion.div
                          layoutId="activeMobileIndicator"
                          className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-600 dark:bg-primary-400"
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;