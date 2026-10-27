'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import { useReducedMotion } from 'framer-motion';

interface Star {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  vx: number;
  vy: number;
  color: string;
  isBright?: boolean;
}

interface Meteoroid {
  startX: number;
  startY: number;
  length: number;
  speed: number;
  vx: number;
  vy: number;
  progress: number;
  tailWidth: number;
}

export const CosmicEnvironment: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const starsRef = useRef<Star[]>([]);
  const meteoroidsRef = useRef<Meteoroid[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const prefersReducedMotion = useReducedMotion();

  // Spawns a high-speed diagonal meteoroid from top-right to bottom-left
  const spawnMeteoroid = useCallback((width: number) => {
    // Start anywhere from upper-middle to beyond top-right
    const startX = width * (0.4 + Math.random() * 0.7);
    const startY = -40 - Math.random() * 80;
    
    // Diagonal vector: moving left (negative X) and down (positive Y)
    // Angle ~35° to 45° below horizontal
    const angleRad = (36 + Math.random() * 10) * (Math.PI / 180);
    const speed = 18 + Math.random() * 10; // high speed traversal
    const vx = -Math.cos(angleRad) * speed;
    const vy = Math.sin(angleRad) * speed;
    const length = 220 + Math.random() * 140; // long glowing tail
    const tailWidth = 2.2 + Math.random() * 1.4;

    meteoroidsRef.current.push({
      startX,
      startY,
      length,
      speed,
      vx,
      vy,
      progress: 0,
      tailWidth,
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let isVisible = true;
    let spawnTimer: NodeJS.Timeout | null = null;

    const starPalettes = [
      '255, 255, 255', // Pure diamond white
      '224, 242, 254', // Sapphire cyan
      '237, 233, 254', // Soft cosmic violet
      '254, 249, 195', // Warm celestial gold
    ];

    const initStars = () => {
      const area = width * height;
      // Vibrant density: ~220 stars on desktop, 90 on mobile
      const count = Math.min(Math.max(Math.floor(area / 6500), 90), 280);

      starsRef.current = [];
      for (let i = 0; i < count; i++) {
        const isBright = Math.random() < 0.12; // 12% prominent foreground stars
        const radius = isBright
          ? Math.random() * 1.4 + 1.6 // 1.6px to 3.0px
          : Math.random() * 1.1 + 0.6; // 0.6px to 1.7px

        starsRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius,
          baseAlpha: isBright ? Math.random() * 0.3 + 0.7 : Math.random() * 0.45 + 0.35,
          twinkleSpeed: (Math.random() * 0.025 + 0.01) * (Math.random() > 0.5 ? 1 : -1),
          twinklePhase: Math.random() * Math.PI * 2,
          vx: (Math.random() - 0.5) * 0.07,
          vy: (Math.random() - 0.5) * 0.07,
          color: starPalettes[Math.floor(Math.random() * starPalettes.length)],
          isBright,
        });
      }
    };

    const handleResize = () => {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);
      initStars();
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion) return;
      mouseRef.current.targetX = (e.clientX / width - 0.5) * 24;
      mouseRef.current.targetY = (e.clientY / height - 0.5) * 24;
    };

    const handleVisibilityChange = () => {
      isVisible = document.visibilityState === 'visible';
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Schedule regular shooting stars: every 2.0 to 3.6s
    const scheduleNextMeteor = () => {
      const delay = 2000 + Math.random() * 1600;
      spawnTimer = setTimeout(() => {
        if (isVisible && !prefersReducedMotion) {
          spawnMeteoroid(width);
          // 30% chance of double meteor cluster
          if (Math.random() < 0.3) {
            setTimeout(() => spawnMeteoroid(width), 260 + Math.random() * 220);
          }
        }
        scheduleNextMeteor();
      }, delay);
    };

    // Immediate spawn upon load (300ms) so user instantly sees meteors
    const initialTimer = setTimeout(() => {
      if (!prefersReducedMotion) {
        spawnMeteoroid(width);
      }
      scheduleNextMeteor();
    }, 300);

    let lastTime = performance.now();

    const render = (time: number) => {
      if (!isVisible) {
        animId = requestAnimationFrame(render);
        return;
      }

      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Mouse parallax dampening
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Clear transparently so background nebulae dust shines through
      ctx.clearRect(0, 0, width, height);

      // 1. RENDER TWINKLING STARS
      const stars = starsRef.current;
      const starLen = stars.length;
      for (let i = 0; i < starLen; i++) {
        const s = stars[i];

        if (!prefersReducedMotion) {
          s.twinklePhase += s.twinkleSpeed;
          s.x += s.vx * (delta * 60);
          s.y += s.vy * (delta * 60);

          if (s.x < 0) s.x = width;
          else if (s.x > width) s.x = 0;
          if (s.y < 0) s.y = height;
          else if (s.y > height) s.y = 0;
        }

        const twinkle = Math.sin(s.twinklePhase) * 0.35;
        const currentAlpha = Math.max(0.15, Math.min(1, s.baseAlpha + twinkle));

        const parallaxFactor = s.radius * 0.7;
        const drawX = s.x + mouseRef.current.x * parallaxFactor;
        const drawY = s.y + mouseRef.current.y * parallaxFactor;

        // Draw star core
        ctx.beginPath();
        ctx.arc(drawX, drawY, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color}, ${currentAlpha})`;
        ctx.fill();

        // Prominent stars: add soft outer radiant aura and 4-point cross diffraction
        if (s.isBright && currentAlpha > 0.6) {
          ctx.beginPath();
          ctx.arc(drawX, drawY, s.radius * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${s.color}, ${currentAlpha * 0.22})`;
          ctx.fill();

          // Delicate optical cross spikes
          const spikeLen = s.radius * 4.5;
          ctx.strokeStyle = `rgba(${s.color}, ${currentAlpha * 0.35})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(drawX - spikeLen, drawY);
          ctx.lineTo(drawX + spikeLen, drawY);
          ctx.moveTo(drawX, drawY - spikeLen);
          ctx.lineTo(drawX, drawY + spikeLen);
          ctx.stroke();
        }
      }

      // 2. RENDER PASSING METEOROIDS (SHOOTING STARS)
      if (!prefersReducedMotion) {
        const activeMeteors: Meteoroid[] = [];
        const meteors = meteoroidsRef.current;
        const totalTravel = Math.max(width, height) * 1.8;

        for (let i = 0; i < meteors.length; i++) {
          const m = meteors[i];
          m.progress += (m.speed * 60 * delta) / totalTravel;

          // Compute opacity envelope: fast ramp in, full burn, graceful dissolve
          let opacity = 1;
          if (m.progress < 0.1) {
            opacity = m.progress / 0.1;
          } else if (m.progress > 0.6) {
            opacity = Math.max(0, 1 - (m.progress - 0.6) / 0.4);
          }

          if (m.progress <= 1 && opacity > 0.02) {
            activeMeteors.push(m);

            // Head coordinates
            const currentTravel = m.progress * totalTravel;
            const headX = m.startX + (m.vx / m.speed) * currentTravel;
            const headY = m.startY + (m.vy / m.speed) * currentTravel;

            // Tail coordinates (trailing behind head)
            const tailX = headX - (m.vx / m.speed) * m.length;
            const tailY = headY - (m.vy / m.speed) * m.length;

            // Gradient from glowing incandescent head to dissolving tail
            const grad = ctx.createLinearGradient(headX, headY, tailX, tailY);
            grad.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
            grad.addColorStop(0.15, `rgba(56, 189, 248, ${opacity * 0.95})`); // electric cyan
            grad.addColorStop(0.5, `rgba(168, 85, 247, ${opacity * 0.6})`); // cosmic purple
            grad.addColorStop(1, 'rgba(147, 51, 234, 0)');

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(headX, headY);
            ctx.lineTo(tailX, tailY);
            ctx.strokeStyle = grad;
            ctx.lineWidth = m.tailWidth;
            ctx.lineCap = 'round';
            ctx.stroke();

            // Blinding Incandescent Meteor Nucleus
            ctx.beginPath();
            ctx.arc(headX, headY, m.tailWidth * 1.3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.shadowColor = 'rgba(255, 255, 255, 1)';
            ctx.shadowBlur = 10;
            ctx.fill();

            // Cyan/violet outer glow corona
            ctx.beginPath();
            ctx.arc(headX, headY, m.tailWidth * 3.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(56, 189, 248, ${opacity * 0.4})`;
            ctx.shadowBlur = 0;
            ctx.fill();
            ctx.restore();
          }
        }
        meteoroidsRef.current = activeMeteors;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (spawnTimer) clearTimeout(spawnTimer);
      clearTimeout(initialTimer);
    };
  }, [spawnMeteoroid, prefersReducedMotion]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 bg-[#000000] overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 
        COSMIC NEBULAE:
        Deep-space atmospheric dust & gas layers with rich, luminous hues of 
        space violet, cosmic indigo, vibrant cyan, and muted teal.
      */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 overflow-hidden mix-blend-screen pointer-events-none">
          {/* Nebula 1: Deep Space Violet & Magenta Dust (Top-Right / Central Field) */}
          <div
            className="absolute -top-[12%] -right-[10%] w-[90vw] h-[90vw] max-w-[1300px] max-h-[1300px] rounded-full blur-[70px] animate-nebula-violet pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at center, rgba(168, 85, 247, 0.24) 0%, rgba(147, 51, 234, 0.15) 38%, rgba(88, 28, 135, 0.06) 65%, transparent 75%)',
            }}
          />

          {/* Nebula 2: Cosmic Indigo & Electric Blue (Bottom-Left / Core Field) */}
          <div
            className="absolute -bottom-[15%] -left-[12%] w-[95vw] h-[95vw] max-w-[1400px] max-h-[1400px] rounded-full blur-[80px] animate-nebula-indigo pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at center, rgba(99, 102, 241, 0.25) 0%, rgba(79, 70, 229, 0.16) 42%, rgba(67, 56, 202, 0.06) 68%, transparent 80%)',
            }}
          />

          {/* Nebula 3: Muted Cosmic Teal & Emerald Dust (Mid-Right / Horizon Field) */}
          <div
            className="absolute top-[35%] right-[5%] w-[75vw] h-[75vw] max-w-[1100px] max-h-[1100px] rounded-full blur-[75px] animate-nebula-teal pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at center, rgba(20, 184, 166, 0.20) 0%, rgba(13, 148, 136, 0.12) 42%, rgba(15, 118, 110, 0.04) 65%, transparent 75%)',
            }}
          />

          {/* Nebula 4: Stellar Cyan & Deep Azure (Upper-Left Parallax Radiance) */}
          <div
            className="absolute top-[15%] left-[20%] w-[65vw] h-[65vw] max-w-[950px] max-h-[950px] rounded-full blur-[85px] animate-nebula-blue pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at center, rgba(56, 189, 248, 0.18) 0%, rgba(30, 64, 175, 0.09) 50%, transparent 75%)',
            }}
          />
        </div>
      )}

      {/* 
        COMBINED 60FPS CANVAS:
        Twinkling Stars + Rapid Shooting Meteoroids with glowing tails
      */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  );
};
