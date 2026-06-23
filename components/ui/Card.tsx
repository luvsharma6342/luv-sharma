"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "purple" | "cyan" | "coral" | "none";
  onClick?: () => void;
  cursorType?: "pointer" | "cta" | "brand";
}

export default function Card({
  children,
  className = "",
  glowColor = "purple",
  onClick,
  cursorType = "pointer",
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Position mouse relative to card center (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out coordinate tracking
  const springConfig = { damping: 20, stiffness: 150, mass: 0.2 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Transform coordinates into rotations (-15deg to 15deg)
  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);

  // Translate coordinates into cursor shine effect (0% to 100%)
  const shineX = useTransform(springX, [-0.5, 0.5], ["0%", "100%"]);
  const shineY = useTransform(springY, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    
    // Relative coordinates (-0.5 to 0.5)
    const relX = (clientX - left) / width - 0.5;
    const relY = (clientY - top) / height - 0.5;

    x.set(relX);
    y.set(relY);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  // Border glow styles
  const glowClasses = {
    purple: "hover:border-accent-1/50 hover:shadow-[0_0_25px_rgba(123,94,167,0.25)]",
    cyan: "hover:border-accent-2/50 hover:shadow-[0_0_25px_rgba(0,212,255,0.25)]",
    coral: "hover:border-accent-3/50 hover:shadow-[0_0_25px_rgba(255,107,107,0.25)]",
    none: "hover:border-border-primary/80",
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`glass-panel relative flex flex-col rounded-2xl border border-border-primary/60 bg-bg-secondary/40 p-6 md:p-8 transition-all duration-500 cursor-pointer overflow-hidden ${glowClasses[glowColor]} ${className}`}
      data-cursor={cursorType}
    >
      {/* Light shine highlight overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 bg-radial-gradient from-white/10 to-transparent opacity-0 mix-blend-overlay transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(circle 180px at ${shineX.get()} ${shineY.get()}, rgba(255,255,255,0.12), transparent)`,
        }}
      />

      {/* Children content rendered in 3D space */}
      <div style={{ transform: "translateZ(30px)" }} className="relative z-20 h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
}
