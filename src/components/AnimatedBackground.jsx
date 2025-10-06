import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const connectionsRef = useRef([]);
  const [isDarkMode, setIsDarkMode] = React.useState(true);

  useEffect(() => {
    // Detect theme changes by observing the main-container class
    const detectTheme = () => {
      const mainContainer = document.querySelector('.main-container');
      if (mainContainer) {
        const isLight = mainContainer.classList.contains('light-mode');
        setIsDarkMode(!isLight);
      }
    };

    // Initial detection
    detectTheme();

    // Create observer for theme changes
    const observer = new MutationObserver(detectTheme);
    const mainContainer = document.querySelector('.main-container');

    if (mainContainer) {
      observer.observe(mainContainer, {
        attributes: true,
        attributeFilter: ['class']
      });
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Set canvas size
    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.opacity = Math.random() * 0.8 + 0.2;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulse = 0;

        // AI/Tech themed properties
        this.isNode = Math.random() < 0.3; // 30% chance to be a special node
        this.glowIntensity = Math.random() * 0.5 + 0.5;
        this.type = Math.random() < 0.5 ? 'data' : 'neural';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.pulse += this.pulseSpeed;

        // Wrap around edges
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        // Pulsing effect
        this.currentSize = this.size + Math.sin(this.pulse) * 0.5;
        this.currentOpacity = this.opacity + Math.sin(this.pulse * 2) * 0.2;
      }

      draw() {
        ctx.save();

        if (this.isNode) {
          // Special nodes with glow effect
          const gradient = ctx.createRadialGradient(
            this.x, this.y, 0,
            this.x, this.y, this.currentSize * 4
          );

          if (this.type === 'neural') {
            if (isDarkMode) {
              gradient.addColorStop(0, `rgba(80, 0, 202, ${this.currentOpacity})`); // Purple
              gradient.addColorStop(0.3, `rgba(80, 0, 202, ${this.currentOpacity * 0.6})`);
              gradient.addColorStop(1, 'rgba(80, 0, 202, 0)');
            } else {
              gradient.addColorStop(0, `rgba(80, 0, 202, ${this.currentOpacity * 0.8})`); // Slightly more transparent for light mode
              gradient.addColorStop(0.3, `rgba(80, 0, 202, ${this.currentOpacity * 0.4})`);
              gradient.addColorStop(1, 'rgba(80, 0, 202, 0)');
            }
          } else {
            if (isDarkMode) {
              gradient.addColorStop(0, `rgba(0, 255, 255, ${this.currentOpacity})`); // Cyan
              gradient.addColorStop(0.3, `rgba(0, 255, 255, ${this.currentOpacity * 0.6})`);
              gradient.addColorStop(1, 'rgba(0, 255, 255, 0)');
            } else {
              gradient.addColorStop(0, `rgba(0, 150, 150, ${this.currentOpacity * 0.7})`); // Darker cyan for light mode
              gradient.addColorStop(0.3, `rgba(0, 150, 150, ${this.currentOpacity * 0.4})`);
              gradient.addColorStop(1, 'rgba(0, 150, 150, 0)');
            }
          }

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.currentSize * 4, 0, Math.PI * 2);
          ctx.fill();
        }

        // Main particle
        if (isDarkMode) {
          ctx.fillStyle = `rgba(255, 255, 255, ${this.currentOpacity})`;
        } else {
          ctx.fillStyle = `rgba(50, 50, 50, ${this.currentOpacity * 0.8})`; // Dark particles for light background
        }
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.currentSize, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }
    }

    // Connection line class
    class Connection {
      constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
        this.opacity = 0;
        this.maxOpacity = 0.3;
      }

      update() {
        const dx = this.p1.x - this.p2.x;
        const dy = this.p1.y - this.p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          this.opacity = Math.min(this.maxOpacity, (120 - distance) / 120 * this.maxOpacity);
        } else {
          this.opacity = 0;
        }
      }

      draw() {
        if (this.opacity > 0) {
          ctx.save();

          // Create gradient line
          const gradient = ctx.createLinearGradient(
            this.p1.x, this.p1.y, this.p2.x, this.p2.y
          );

          if (this.p1.isNode || this.p2.isNode) {
            if (isDarkMode) {
              gradient.addColorStop(0, `rgba(80, 0, 202, ${this.opacity})`);
              gradient.addColorStop(1, `rgba(0, 255, 255, ${this.opacity})`);
            } else {
              gradient.addColorStop(0, `rgba(80, 0, 202, ${this.opacity * 0.8})`);
              gradient.addColorStop(1, `rgba(0, 150, 150, ${this.opacity * 0.8})`);
            }
          } else {
            if (isDarkMode) {
              gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
              gradient.addColorStop(1, `rgba(255, 255, 255, ${this.opacity * 0.5})`);
            } else {
              gradient.addColorStop(0, `rgba(100, 100, 100, ${this.opacity * 0.6})`);
              gradient.addColorStop(1, `rgba(100, 100, 100, ${this.opacity * 0.3})`);
            }
          }

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(this.p1.x, this.p1.y);
          ctx.lineTo(this.p2.x, this.p2.y);
          ctx.stroke();

          ctx.restore();
        }
      }
    }

    // Initialize particles
    const initParticles = () => {
      const numParticles = Math.min(Math.floor((width * height) / 8000), 100);
      particlesRef.current = [];

      for (let i = 0; i < numParticles; i++) {
        particlesRef.current.push(new Particle());
      }
    };

    // Create connections between nearby particles
    const updateConnections = () => {
      connectionsRef.current = [];
      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            connectionsRef.current.push(new Connection(particles[i], particles[j]));
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      if (isDarkMode) {
        ctx.fillStyle = 'rgba(13, 17, 22, 0.05)'; // Dark trail effect
      } else {
        ctx.fillStyle = 'rgba(248, 249, 250, 0.1)'; // Light trail effect
      }
      ctx.fillRect(0, 0, width, height);

      // Update and draw connections
      connectionsRef.current.forEach(connection => {
        connection.update();
        connection.draw();
      });

      // Update and draw particles
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Periodically update connections (performance optimization)
      if (Math.random() < 0.01) {
        updateConnections();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize and start animation
    initParticles();
    updateConnections();
    animate();

    // Mouse interaction
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      particlesRef.current.forEach(particle => {
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          const force = (100 - distance) / 100;
          particle.speedX += (dx / distance) * force * 0.01;
          particle.speedY += (dy / distance) * force * 0.01;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDarkMode]); // Add isDarkMode as dependency so animation updates when theme changes

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        backgroundColor: isDarkMode ? '#0d1116' : '#f8f9fa',
        pointerEvents: 'none'
      }}
    />
  );
};

export default AnimatedBackground;