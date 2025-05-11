import React, { useEffect, useRef } from 'react';

const BackgroundGradient = ({ theme }) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let gradientAngle = 0;
    
    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Create gradient
    const createGradient = (angle) => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.max(canvas.width, canvas.height);
      
      // Calculate gradient start and end points based on angle
      const startX = centerX + Math.cos(angle) * radius;
      const startY = centerY + Math.sin(angle) * radius;
      const endX = centerX + Math.cos(angle + Math.PI) * radius;
      const endY = centerY + Math.sin(angle + Math.PI) * radius;
      
      const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
      
      if (theme === 'dark') {
        // Dark theme gradient
        gradient.addColorStop(0, 'rgba(10, 15, 30, 0.4)');
        gradient.addColorStop(0.3, 'rgba(17, 24, 39, 0.2)');
        gradient.addColorStop(0.6, 'rgba(30, 41, 59, 0.2)');
        gradient.addColorStop(1, 'rgba(15, 23, 42, 0.4)');
      } else {
        // Light theme gradient
        gradient.addColorStop(0, 'rgba(240, 249, 255, 0.4)');
        gradient.addColorStop(0.3, 'rgba(248, 250, 252, 0.2)');
        gradient.addColorStop(0.6, 'rgba(224, 242, 254, 0.2)');
        gradient.addColorStop(1, 'rgba(240, 249, 255, 0.4)');
      }
      
      return gradient;
    };
    
    // Draw gradient
    const drawGradient = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update gradient angle
      gradientAngle += 0.001;
      
      // Create and apply gradient
      const gradient = createGradient(gradientAngle);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    
    // Animation loop
    const animate = () => {
      drawGradient();
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Initialize
    setCanvasSize();
    animate();
    
    // Handle resize
    const handleResize = () => {
      setCanvasSize();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-20 pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
};

export default BackgroundGradient;