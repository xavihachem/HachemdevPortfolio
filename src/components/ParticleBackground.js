import React, { useEffect, useRef } from "react";

const ParticleBackground = ({ theme }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];
    let shootingStars = [];
    let nebulaPoints = [];
    let time = 0;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Create particles (stars)
    const createParticles = () => {
      const particleCount = Math.min(Math.floor(window.innerWidth / 8), 150);
      particles = [];

      // Create stars with different sizes and properties
      for (let i = 0; i < particleCount; i++) {
        // Determine if this will be a twinkling star
        const isTwinkling = Math.random() > 0.7;
        const starSize = Math.random();
        const starType = Math.random();

        // Create different types of stars based on size and properties
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: starSize * 3 + 0.5, // Varied star sizes
          color: getStarColor(starType, theme),
          speedX: Math.random() * 0.2 - 0.1,
          speedY: Math.random() * 0.2 - 0.1,
          baseOpacity: Math.random() * 0.5 + 0.3,
          opacity: Math.random() * 0.5 + 0.3,
          twinkle: isTwinkling,
          twinkleSpeed: Math.random() * 0.03 + 0.01,
          twinklePhase: Math.random() * Math.PI * 2, // Random starting phase
          pulseSize: isTwinkling && Math.random() > 0.7, // Some stars pulse in size
        });
      }

      // Create nebula cloud points
      createNebulaPoints();
    };

    // Create nebula effect points
    const createNebulaPoints = () => {
      nebulaPoints = [];
      // Fewer nebula points in light theme for cleaner look
      const nebulaCount = theme === "dark" 
        ? Math.min(Math.floor(window.innerWidth / 30), 30)
        : Math.min(Math.floor(window.innerWidth / 60), 15);

      for (let i = 0; i < nebulaCount; i++) {
        nebulaPoints.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 80 + 40,
          color: getNebulaColor(theme),
          // Much lower opacity in light theme
          opacity: theme === "dark" 
            ? Math.random() * 0.05 + 0.01 
            : Math.random() * 0.02 + 0.005,
        });
      }
    };

    // Get star color based on type and theme
    const getStarColor = (type, theme) => {
      if (theme === "dark") {
        // Different star colors for dark theme
        if (type < 0.2) return "rgba(255, 255, 255, 1)"; // White stars
        if (type < 0.4) return "rgba(173, 216, 230, 1)"; // Light blue stars
        if (type < 0.6) return "rgba(255, 223, 186, 1)"; // Warm yellow stars
        if (type < 0.8) return "rgba(255, 192, 203, 1)"; // Pink stars
        return "rgba(202, 225, 255, 1)"; // Light cyan stars
      } else {
        // Subtle colors for light theme
        if (type < 0.3) return "rgba(0, 0, 0, 0.6)";
        if (type < 0.6) return "rgba(30, 30, 60, 0.5)";
        return "rgba(60, 60, 90, 0.4)";
      }
    };

    // Get nebula color based on theme
    const getNebulaColor = (theme) => {
      if (theme === "dark") {
        const colors = [
          "rgba(75, 0, 130, 1)", // Indigo
          "rgba(138, 43, 226, 1)", // Purple
          "rgba(0, 0, 255, 1)", // Blue
          "rgba(30, 144, 255, 1)", // Dodger blue
          "rgba(0, 191, 255, 1)", // Deep sky blue
          "rgba(220, 20, 60, 1)", // Crimson
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      } else {
        // More subtle, professional colors for light theme
        const colors = [
          "rgba(200, 220, 255, 1)", // Very light blue
          "rgba(230, 240, 255, 1)", // Almost white blue
          "rgba(220, 225, 235, 1)", // Light gray blue
          "rgba(240, 248, 255, 1)", // Alice blue
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }
    };

    // Create a shooting star
    const createShootingStar = () => {
      // Only create if we have fewer than 3 active shooting stars
      if (shootingStars.length < 3 && Math.random() > 0.995) {
        const angle = (Math.random() * Math.PI) / 4 + Math.PI / 8; // Angle between PI/8 and 3PI/8
        const length = Math.random() * 150 + 100;
        const speed = Math.random() * 15 + 10;

        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * (canvas.height / 2),
          length: length,
          speed: speed,
          angle: angle,
          progress: 0, // 0 to 1 for animation
          opacity: 1,
          thickness: Math.random() * 2 + 1,
        });
      }
    };

    // Draw nebula clouds
    const drawNebula = () => {
      // Draw nebula cloud points with gradients
      nebulaPoints.forEach((point) => {
        const gradient = ctx.createRadialGradient(
          point.x,
          point.y,
          0,
          point.x,
          point.y,
          point.radius
        );

        // Create a gradient with the nebula color fading to transparent
        const color = point.color.replace("1)", `${point.opacity})`);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    // Draw particles (stars)
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw nebula effect first (background layer)
      if (theme === "dark") {
        drawNebula();
      }

      // Draw stars
      particles.forEach((particle) => {
        // Calculate current radius with pulse effect if applicable
        let currentRadius = particle.radius;
        if (particle.pulseSize) {
          const pulseFactor =
            Math.sin(time * 0.001 + particle.twinklePhase) * 0.3 + 1;
          currentRadius *= pulseFactor;
        }

        // Draw the star
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, currentRadius, 0, Math.PI * 2);

        // Apply twinkling effect by modulating opacity
        let opacity = particle.opacity;
        if (particle.twinkle) {
          opacity =
            particle.baseOpacity *
            (0.5 +
              0.5 *
                Math.sin(time * particle.twinkleSpeed + particle.twinklePhase));
        }

        // For dark theme stars, add a glow effect
        if (theme === "dark" && currentRadius > 1.5) {
          // Create a glow effect for larger stars
          const glow = ctx.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            currentRadius * 3
          );

          const colorParts = particle.color.match(/\d+/g);
          if (colorParts && colorParts.length >= 3) {
            const r = colorParts[0];
            const g = colorParts[1];
            const b = colorParts[2];

            glow.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${opacity})`);
            glow.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${opacity * 0.3})`);
            glow.addColorStop(1, "rgba(0, 0, 0, 0)");

            ctx.fillStyle = glow;
            ctx.fill();
          }
        }

        // Fill the star with its color
        if (particle.color.includes("rgba")) {
          ctx.fillStyle = particle.color.replace(
            /\d+(\.\d+)?\)/,
            `${opacity})`
          );
        } else {
          ctx.fillStyle = particle.color.replace("1)", `${opacity})`);
        }
        ctx.fill();
      });

      // Draw connections between nearby stars (constellation effect)
      if (theme === "dark") {
        const connectionDistance = 150;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < connectionDistance) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              const opacity = 1 - distance / connectionDistance;
              ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.08})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }

      // Draw shooting stars
      shootingStars.forEach((star, index) => {
        // Calculate the current position based on progress
        const progress = star.progress;

        // Only draw if the star is visible (progress between 0 and 1)
        if (progress >= 0 && progress <= 1) {
          // Calculate the current position
          const currentX =
            star.x + Math.cos(star.angle) * star.speed * progress * 20;
          const currentY =
            star.y + Math.sin(star.angle) * star.speed * progress * 20;

          // Create a gradient for the shooting star trail
          const gradient = ctx.createLinearGradient(
            currentX,
            currentY,
            currentX - Math.cos(star.angle) * star.length * (1 - progress),
            currentY - Math.sin(star.angle) * star.length * (1 - progress)
          );

          // Fade out as the star progresses
          const tailOpacity = Math.min(1, (1 - progress) * 2) * star.opacity;

          gradient.addColorStop(0, `rgba(255, 255, 255, ${tailOpacity})`);
          gradient.addColorStop(
            0.1,
            `rgba(200, 200, 255, ${tailOpacity * 0.8})`
          );
          gradient.addColorStop(
            0.5,
            `rgba(180, 180, 255, ${tailOpacity * 0.4})`
          );
          gradient.addColorStop(1, "rgba(100, 100, 255, 0)");

          // Draw the shooting star trail
          ctx.beginPath();
          ctx.strokeStyle = gradient;
          ctx.lineWidth = star.thickness * (1 - progress * 0.7);
          ctx.lineCap = "round";

          // Draw the line for the shooting star
          ctx.beginPath();
          ctx.moveTo(currentX, currentY);
          ctx.lineTo(
            currentX - Math.cos(star.angle) * star.length * (1 - progress),
            currentY - Math.sin(star.angle) * star.length * (1 - progress)
          );
          ctx.stroke();

          // Draw a small glow at the head of the shooting star
          ctx.beginPath();
          ctx.arc(currentX, currentY, star.thickness * 2, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255, 255, 255, " + tailOpacity + ")";
          ctx.fill();
        } else {
          // Remove shooting stars that have completed their animation
          shootingStars.splice(index, 1);
        }
      });
    };

    // Update particles and effects
    const updateParticles = () => {
      // Increment time for animations
      time += 16; // Approximately 60fps

      // Update star positions
      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX;
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY;
        }

        // Update twinkling effect
        if (particle.twinkle) {
          particle.opacity =
            particle.baseOpacity *
            (0.5 +
              0.5 *
                Math.sin(time * particle.twinkleSpeed + particle.twinklePhase));
        }
      });

      // Update shooting stars
      shootingStars.forEach((star) => {
        star.progress += 0.01 * (star.speed / 10);
      });

      // Randomly create new shooting stars
      createShootingStar();
    };

    // Animation loop
    const animate = () => {
      updateParticles();
      drawParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize
    setCanvasSize();
    createParticles();
    animate();

    // Handle resize
    const handleResize = () => {
      setCanvasSize();
      createParticles();
    };

    // Handle visibility change to improve performance
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        animate();
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{
        opacity: theme === "dark" ? 1 : 0.4, // Reduced opacity in light theme
        filter: theme === "dark" ? "blur(0px)" : "blur(1px)", // Increased blur in light theme
      }}
    />
  );
};

export default ParticleBackground;
