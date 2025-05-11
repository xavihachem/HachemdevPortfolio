import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import MouseTrailEffect from "./components/MouseTrailEffect";
import BackgroundGradient from "./components/BackgroundGradient";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    // Apply theme
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="min-h-screen bg-light dark:bg-dark text-gray-900 dark:text-gray-100 transition-colors duration-300 relative overflow-hidden">
      {/* Animated background elements - layered for depth */}
      <BackgroundGradient theme={theme} />
      <ParticleBackground theme={theme} />
      <MouseTrailEffect theme={theme} />

      {/* Gradient orbs that move slowly with the scroll */}
      <div className="fixed top-1/4 -left-20 w-96 h-96 bg-primary-500 dark:bg-primary-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 dark:opacity-10 animate-float"></div>
      <div
        className="fixed top-3/4 -right-20 w-80 h-80 bg-secondary-500 dark:bg-secondary-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 dark:opacity-10 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div className="fixed bottom-1/4 left-1/3 w-64 h-64 bg-indigo-500 dark:bg-indigo-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-15 dark:opacity-10 animate-pulse-slow"></div>
      <div className="fixed top-1/3 right-1/4 w-72 h-72 bg-pink-500 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-10 dark:opacity-5 animate-spin-slow"></div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;