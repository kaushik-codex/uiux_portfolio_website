'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  vx: number;
  vy: number;
}

interface StellarCanvasProps {
  className?: string;
  particleDensity?: 'low' | 'medium' | 'high';
  interactive?: boolean;
}

export const StellarCanvas: React.FC<StellarCanvasProps> = ({
  className = '',
  particleDensity = 'medium',
  interactive = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let isVisible = true;

    const handleResize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      // Restrain DPR to maximum 2 for GPU efficiency
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);

      initParticles();
    };

    const initParticles = () => {
      // Scale particle count based on screen area & density
      const area = width * height;
      const densityMultiplier = particleDensity === 'high' ? 1.4 : particleDensity === 'low' ? 0.6 : 1.0;
      const baseCount = Math.floor((area / 9000) * densityMultiplier);
      const count = Math.min(Math.max(baseCount, 40), 160);

      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.2 + 0.3, // Fine points of light
          baseAlpha: Math.random() * 0.65 + 0.25,
          twinkleSpeed: (Math.random() * 0.02 + 0.008) * (Math.random() > 0.5 ? 1 : -1),
          twinklePhase: Math.random() * Math.PI * 2,
          vx: (Math.random() - 0.5) * 0.08, // Slow, restrained drift
          vy: (Math.random() - 0.5) * 0.08,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive || prefersReducedMotion) return;
      const rect = canvas.getBoundingClientRect();
      // Mouse offset normalized between -1 and 1
      targetMouseX = ((e.clientX - rect.left) / width - 0.5) * 20;
      targetMouseY = ((e.clientY - rect.top) / height - 0.5) * 20;
    };

    const handleVisibilityChange = () => {
      isVisible = document.visibilityState === 'visible';
      if (isVisible && !animationFrameId) {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(render);
      }
    };

    let lastTime = performance.now();

    const render = (time: number) => {
      if (!isVisible) return;

      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Soft mouse dampening for parallax
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Clear with absolute deep black
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      // Render each celestial particle
      const len = particles.length;
      for (let i = 0; i < len; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          // Update twinkle phase
          p.twinklePhase += p.twinkleSpeed;
          // Drift position
          p.x += p.vx * (delta * 60);
          p.y += p.vy * (delta * 60);

          // Wrap boundaries
          if (p.x < 0) p.x = width;
          else if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          else if (p.y > height) p.y = 0;
        }

        // Calculate opacity with gentle sinusoidal twinkle
        const twinkle = Math.sin(p.twinklePhase) * 0.3;
        const alpha = Math.max(0.1, Math.min(1, p.baseAlpha + twinkle));

        // Parallax shift based on particle radius (depth)
        const parallaxFactor = p.radius * 0.8;
        const drawX = p.x + mouseX * parallaxFactor;
        const drawY = p.y + mouseY * parallaxFactor;

        // Draw particle
        ctx.beginPath();
        ctx.arc(drawX, drawY, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(226, 232, 240, ${alpha})`;
        ctx.fill();

        // Add soft subtle glow to the brightest larger stars
        if (p.radius > 1.1 && alpha > 0.6) {
          ctx.beginPath();
          ctx.arc(drawX, drawY, p.radius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.15})`;
          ctx.fill();
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    // Initial setup
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Initial draw
    if (prefersReducedMotion) {
      render(performance.now());
    } else {
      animationFrameId = requestAnimationFrame(render);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [particleDensity, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
};
