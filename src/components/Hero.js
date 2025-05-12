import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

// Import Three.js for background animation
import * as THREE from 'three';

const Hero = () => {
  const canvasRef = useRef(null);

  // Three.js background animation with realistic majestic stars
  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Create optimized star texture using a procedural approach
    const createStarTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext('2d');
      
      // Clear canvas
      ctx.fillStyle = 'rgba(0,0,0,0)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Create radial gradient for the star glow
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width / 2
      );
      
      // Star colors from center to edge - more realistic star glow
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.05, 'rgba(255, 255, 255, 0.9)');
      gradient.addColorStop(0.2, 'rgba(240, 240, 255, 0.6)');
      gradient.addColorStop(0.4, 'rgba(220, 225, 255, 0.3)');
      gradient.addColorStop(0.6, 'rgba(180, 200, 255, 0.1)');
      gradient.addColorStop(1, 'rgba(100, 150, 255, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Create a subtle cross-shaped highlight in the center
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.fillRect(canvas.width / 2 - 1, canvas.height / 2 - 30, 2, 60);
      ctx.fillRect(canvas.width / 2 - 30, canvas.height / 2 - 1, 60, 2);
      
      // Add some subtle flare effects
      ctx.globalAlpha = 0.4;
      ctx.fillRect(canvas.width / 2 - 0.5, 0, 1, canvas.height);
      ctx.fillRect(0, canvas.height / 2 - 0.5, canvas.width, 1);
      
      // Create texture from canvas
      const texture = new THREE.Texture(canvas);
      texture.needsUpdate = true;
      return texture;
    };
    
    const starTexture = createStarTexture();
    
    // Create multiple star layers with different characteristics
    const createStarField = (count, size, depth, colorRange) => {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      const sizes = new Float32Array(count);
      
      // Create random stars with varying positions, colors and sizes
      for (let i = 0; i < count; i++) {
        // Position
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * depth;
        positions[i3 + 1] = (Math.random() - 0.5) * depth;
        positions[i3 + 2] = (Math.random() - 0.5) * depth;
        
        // Size variation
        const sizeVariation = Math.random();
        sizes[i] = size * (0.5 + sizeVariation * 0.8);
        
        // Color variation
        const colorChoice = Math.random();
        if (colorChoice < 0.2) {
          // Blue-white stars (hot)
          colors[i3] = 0.8 + Math.random() * 0.2; // R
          colors[i3 + 1] = 0.8 + Math.random() * 0.2; // G
          colors[i3 + 2] = 1.0; // B
        } else if (colorChoice < 0.4) {
          // Yellow stars
          colors[i3] = 1.0; // R
          colors[i3 + 1] = 0.9 + Math.random() * 0.1; // G
          colors[i3 + 2] = 0.6 + Math.random() * 0.2; // B
        } else if (colorChoice < 0.5) {
          // Red stars
          colors[i3] = 1.0; // R
          colors[i3 + 1] = 0.5 + Math.random() * 0.3; // G
          colors[i3 + 2] = 0.5 + Math.random() * 0.2; // B
        } else {
          // White/silver stars
          const brightness = 0.8 + Math.random() * 0.2;
          colors[i3] = brightness; // R
          colors[i3 + 1] = brightness; // G
          colors[i3 + 2] = brightness; // B
        }
      }
      
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
      
      // Use a simpler approach with PointsMaterial for better compatibility
      const material = new THREE.PointsMaterial({
        size: size,
        map: starTexture,
        transparent: true,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true
      });
      
      return new THREE.Points(geometry, material);
    };
    
    // Create multiple layers of stars with different characteristics for a more majestic look
    // All star sizes significantly reduced with more uniform sizing
    const starField1 = createStarField(1500, 0.012, 10, [0.8, 1.0]); // Distant tiny stars (background layer)
    const starField2 = createStarField(800, 0.018, 8, [0.7, 1.0]);   // Small stars
    const starField3 = createStarField(300, 0.025, 6, [0.6, 1.0]);   // Medium stars
    const starField4 = createStarField(100, 0.035, 4, [0.5, 1.0]);   // Large stars
    const starField5 = createStarField(30, 0.045, 3, [0.4, 1.0]);    // Bright foreground stars
    
    scene.add(starField1);
    scene.add(starField2);
    scene.add(starField3);
    scene.add(starField4);
    scene.add(starField5);
    
    // Camera position
    camera.position.z = 3;
    
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
    
    // Animation with very slow rotation for majestic star movement
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Very slow rotation - different speeds for each layer creates parallax effect
      starField1.rotation.x += 0.00001; // Slowest (background)
      starField1.rotation.y += 0.00002;
      
      starField2.rotation.x += 0.000015;
      starField2.rotation.y += 0.000025;
      
      starField3.rotation.x += 0.00002;
      starField3.rotation.y += 0.00003;
      
      starField4.rotation.x += 0.000025;
      starField4.rotation.y += 0.000035;
      
      starField5.rotation.x += 0.00003; // Fastest (foreground)
      starField5.rotation.y += 0.00004;
      
      // Subtle mouse interaction - stronger effect on closer stars (parallax)
      starField1.rotation.x += mouseY * 0.0005; // Least affected by mouse
      starField1.rotation.y += mouseX * 0.0005;
      
      starField2.rotation.x += mouseY * 0.001;
      starField2.rotation.y += mouseX * 0.001;
      
      starField3.rotation.x += mouseY * 0.0015;
      starField3.rotation.y += mouseX * 0.0015;
      
      starField4.rotation.x += mouseY * 0.002;
      starField4.rotation.y += mouseX * 0.002;
      
      starField5.rotation.x += mouseY * 0.0025; // Most affected by mouse
      starField5.rotation.y += mouseX * 0.0025;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup all resources
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      // Remove all star fields from scene
      scene.remove(starField1);
      scene.remove(starField2);
      scene.remove(starField3);
      scene.remove(starField4);
      scene.remove(starField5);
      
      // Dispose of all geometries and materials
      starField1.geometry.dispose();
      starField1.material.dispose();
      starField2.geometry.dispose();
      starField2.material.dispose();
      starField3.geometry.dispose();
      starField3.material.dispose();
      starField4.geometry.dispose();
      starField4.material.dispose();
      starField5.geometry.dispose();
      starField5.material.dispose();
      
      // Dispose of renderer
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
          {/* Majestic Text Content with Advanced Animations */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left relative"
          >
            {/* Decorative elements - removed middle gradient circle */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary-500/5 dark:bg-primary-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-secondary-500/5 dark:bg-secondary-500/10 rounded-full blur-3xl"></div>
            
            {/* Redesigned intro section with cohesive styling */}
            <div className="relative mb-8">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-2"
              >
                <div className="inline-flex items-center">
                  <motion.span
                    animate={{ rotate: [0, 10, 0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-block mr-3 text-3xl md:text-4xl"
                  >
                    👋
                  </motion.span>
                  <div className="relative">
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-200">
                      Hello, I'm
                    </h2>
                    <motion.div 
                      className="absolute -bottom-1 left-0 h-[3px] bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    />
                  </div>
                </div>
              </motion.div>
              
              {/* Main name with fancy 3D effect - now more cohesive with intro */}
              <motion.h1 
                className="font-display text-6xl md:text-7xl lg:text-8xl font-black tracking-tight relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="relative inline-block">
                  {/* 3D Text with gradient */}
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 dark:from-primary-400 dark:via-secondary-400 dark:to-primary-400">
                    Hachem
                  </span>
                  
                  {/* Enhanced text shadow effect */}
                  <span className="absolute -bottom-2 left-1 z-0 text-primary-300/20 dark:text-primary-700/20 select-none blur-[3px]">
                    Hachem
                  </span>
                </span>
                
                {/* Animated shine effect */}
                <motion.div 
                  className="absolute inset-0 w-full h-full overflow-hidden z-20 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <motion.div
                    className="absolute top-0 -left-[100%] h-full w-[50%] bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
                    animate={{ left: '200%' }}
                    transition={{ 
                      duration: 2.5, 
                      repeat: Infinity, 
                      repeatDelay: 5,
                      ease: "easeInOut" 
                    }}
                  />
                </motion.div>
              </motion.h1>
            </div>
            
            {/* Animated role with enhanced styling */}
            <motion.div 
              className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-gray-700 dark:text-gray-200 mb-8 h-16 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="relative">
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
                  className="relative z-10 inline-block"
                />
                
                {/* Animated highlight effect */}
                <motion.span 
                  className="absolute bottom-0 left-0 h-3 bg-primary-200/40 dark:bg-primary-700/40 rounded-full -z-10"
                  animate={{ width: ['0%', '100%', '0%'] }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.5, 1]
                  }}
                />
              </div>
            </motion.div>
            
            {/* Description with animated reveal */}
            <motion.p 
              className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Crafting beautiful, interactive, and high-performance web experiences with modern technologies and creative solutions.
            </motion.p>
            
            {/* Buttons with enhanced styling and animations */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="relative group overflow-hidden"
              >
                <span className="btn-primary inline-flex items-center justify-center gap-2 group-hover:gap-3 transition-all duration-300 z-10 relative">
                  <span>View My Work</span>
                  <motion.span 
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.span>
                </span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-md -z-10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                />
              </Link>
              
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="relative group overflow-hidden"
              >
                <span className="btn-secondary inline-flex items-center justify-center gap-2 group-hover:gap-3 transition-all duration-300 z-10 relative">
                  <span>Contact Me</span>
                  <motion.span 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </motion.span>
                </span>
                <motion.span 
                  className="absolute inset-0 bg-primary-100 dark:bg-primary-900/30 rounded-md -z-10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                />
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Hero Image/Illustration - Simplified Version */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex justify-center items-center"
          >
            {/* Simple avatar container with orbiting badges */}
            <motion.div
              className="relative w-[320px] h-[320px]"
              animate={{ y: [0, -8, 0] }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Simple glow effect */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 dark:from-primary-500/30 dark:to-secondary-500/30 blur-xl"></div>
              
              {/* 3D Orbiting Badges - Circling around the avatar edges */}
              <div className="absolute inset-0 pointer-events-none">
                {/* First Orbiting Badge - Lightning */}
                <motion.div
                  className="absolute w-10 h-10 z-30"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    x: [160, 113, 0, -113, -160, -113, 0, 113, 160],
                    y: [0, 113, 160, 113, 0, -113, -160, -113, 0],
                    rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360]
                  }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: 0.2 },
                    x: { duration: 15, repeat: Infinity, ease: "linear" },
                    y: { duration: 15, repeat: Infinity, ease: "linear" },
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" }
                  }}
                  style={{ 
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                    top: '50%',
                    left: '50%',
                    marginLeft: '-5px',
                    marginTop: '-5px'
                  }}
                >
                  <motion.div 
                    className="w-full h-full rounded-lg overflow-hidden shadow-lg"
                    animate={{ rotateY: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    style={{ 
                      transformStyle: "preserve-3d",
                      transform: "translateZ(20px)"
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-primary-600 rounded-lg"></div>
                    <div className="absolute inset-0.5 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Second Orbiting Badge - Code */}
                <motion.div
                  className="absolute w-8 h-8 z-30"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    x: [0, 80, 113, 80, 0, -80, -113, -80, 0],
                    y: [-113, -80, 0, 80, 113, 80, 0, -80, -113],
                    rotate: [0, -45, -90, -135, -180, -225, -270, -315, -360]
                  }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: 0.4 },
                    x: { duration: 12, repeat: Infinity, ease: "linear" },
                    y: { duration: 12, repeat: Infinity, ease: "linear" },
                    rotate: { duration: 12, repeat: Infinity, ease: "linear" }
                  }}
                  style={{ 
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                    top: '50%',
                    left: '50%',
                    marginLeft: '-4px',
                    marginTop: '-4px'
                  }}
                >
                  <motion.div 
                    className="w-full h-full rounded-full overflow-hidden shadow-lg"
                    animate={{ rotateY: -360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    style={{ 
                      transformStyle: "preserve-3d",
                      transform: "translateZ(10px)"
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full"></div>
                    <div className="absolute inset-0.5 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-secondary-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Third Orbiting Badge - Small Accent */}
                <motion.div
                  className="absolute w-6 h-6 z-30"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    x: [140, 99, 0, -99, -140, -99, 0, 99, 140],
                    y: [0, 99, 140, 99, 0, -99, -140, -99, 0],
                    rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360]
                  }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: 0.6 },
                    x: { duration: 20, repeat: Infinity, ease: "linear" },
                    y: { duration: 20, repeat: Infinity, ease: "linear" },
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                  }}
                  style={{ 
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                    top: '50%',
                    left: '50%',
                    marginLeft: '-3px',
                    marginTop: '-3px'
                  }}
                >
                  <motion.div 
                    className="w-full h-full rounded-full overflow-hidden shadow-lg"
                    animate={{ rotateZ: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    style={{ 
                      transformStyle: "preserve-3d",
                      transform: "translateZ(15px)"
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary-400 to-primary-500 rounded-full"></div>
                    <div className="absolute inset-0.5 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-secondary-500"></div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Avatar frame */}
              <div className="relative w-full h-full">
                {/* Border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 p-[3px]">
                  {/* Inner container */}
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 p-1 overflow-hidden">
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
              </div>
            </motion.div>
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