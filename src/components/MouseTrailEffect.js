import React, { useEffect, useRef } from "react";

const MouseTrailEffect = ({ theme }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let points = [];
    let mouse = { x: 0, y: 0 };

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Track mouse movement
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Add point to the trail - only add every other movement for performance
      if (Math.random() > 0.5) {
        points.push({
          x: mouse.x,
          y: mouse.y,
          // Adjust size based on theme - larger for dark mode to be more visible
          size:
            theme === "dark" ? Math.random() * 4 + 2 : Math.random() * 2 + 0.5,
          // Store only the color type for dark mode, we'll apply the full hsla in drawTrail
          color:
            theme === "dark"
              ? "dark" // Just store a marker that this is a dark theme point
              : `hsla(${Math.random() * 60 + 180}, 100%, 50%, 0.15)`,
          // Shorter lifetime for quicker fading
          lifetime: 15 + Math.random() * 8,
        });
      }
    };

    // Draw trail
    const drawTrail = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw points
      for (let i = 0; i < points.length; i++) {
        const point = points[i];

        // Reduce lifetime
        point.lifetime -= 0.5;

        // Remove dead points
        if (point.lifetime <= 0) {
          points.splice(i, 1);
          i--;
          continue;
        }

        // Calculate opacity based on remaining lifetime
        const opacity = point.lifetime / 30;

        // Draw point
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        // Apply color based on theme marker or direct color value
        if (point.color === "dark" || theme === "dark") {
          ctx.fillStyle = `hsla(0, 0%, 100%, ${opacity})`;
        } else {
          ctx.fillStyle = point.color.replace(")", `, ${opacity})`);
        }
        ctx.fill();
      }

      // Limit the number of points to prevent performance issues and visual clutter
      if (points.length > 50) {
        points = points.slice(-50);
      }
    };

    // Animation loop
    const animate = () => {
      drawTrail();
      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize
    setCanvasSize();
    animate();

    // Event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", setCanvasSize);

    // Touch support for mobile
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        mouse.x = touch.clientX;
        mouse.y = touch.clientY;

        // Add point to the trail - only add every other touch for performance
        if (Math.random() > 0.5) {
          points.push({
            x: mouse.x,
            y: mouse.y,
            // Adjust size based on theme - larger for dark mode to be more visible
            size:
              theme === "dark"
                ? Math.random() * 4.5 + 2.5
                : Math.random() * 2.5 + 1,
            // Store only the color type for dark mode, we'll apply the full hsla in drawTrail
            color:
              theme === "dark"
                ? "dark" // Just store a marker that this is a dark theme point
                : `hsla(${Math.random() * 60 + 180}, 100%, 50%, 0.15)`,
            // Shorter lifetime for quicker fading
            lifetime: 12 + Math.random() * 8,
          });
        }
      }
    };

    window.addEventListener("touchmove", handleTouchMove);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-5"
      style={{ opacity: theme === "dark" ? 1 : 0.5 }}
    />
  );
};

export default MouseTrailEffect;
