import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

// Import Three.js for background animation
import * as THREE from 'three';

const Hero = () => {
  const canvasRef = useRef(null);

  // Three.js background animation
  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    
    const posArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    // Materials
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: new THREE.Color(0x0ea5e9),
      transparent: true,
      blending: THREE.AdditiveBlending
    });
    
    // Mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Camera position
    camera.position.z = 2;
    
    // Mouse movement effect
    let mouseX = 0;
    let mouseY = 0;
    
    const handleMouseMove = (event) => {
      mouseX = event.clientX / window.innerWidth - 0.5;
      mouseY = event.clientY / window.innerHeight - 0.5;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      particlesMesh.rotation.x += 0.0003;
      particlesMesh.rotation.y += 0.0003;
      
      // Follow mouse
      particlesMesh.rotation.x += mouseY * 0.05;
      particlesMesh.rotation.y += mouseX * 0.05;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      scene.remove(particlesMesh);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Three.js Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-light dark:to-dark opacity-80 -z-10" />
      
      <div className="container-custom z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-xl md:text-2xl font-medium text-primary-600 dark:text-primary-400 mb-4">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient">Hachem</span>
            </h1>
            <div className="text-xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-8 h-16">
              <TypeAnimation
                sequence={[
                  'Web Developer',
                  2000,
                  'UI/UX Designer',
                  2000,
                  'Frontend Engineer',
                  2000,
                  'Creative Coder',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              Crafting beautiful, interactive, and high-performance web experiences with modern technologies and creative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="btn-primary"
              >
                View My Work
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="btn-secondary"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
          
          {/* Hero Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[500px] animate-float">
              {/* Different gradient effect based on theme */}
              <div className="absolute inset-0 dark:bg-gradient-radial dark:from-primary-400/20 dark:to-transparent light:from-primary-200/30 light:to-transparent rounded-full blur-2xl" />
              <div className="relative w-full h-full rounded-full border-2 border-primary-500/20 dark:border-primary-500/30 overflow-hidden shadow-xl">
                {/* Profile image */}
                <div className="w-full h-full rounded-full overflow-hidden">
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
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-gray-600 dark:text-gray-400 mb-2">Scroll Down</span>
        <ArrowDownIcon className="h-6 w-6 text-primary-600 dark:text-primary-400 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;