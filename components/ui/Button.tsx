"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "secondary" | "accent" | "glass";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  cursorType?: "pointer" | "cta" | "brand";
  isMagnetic?: boolean;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  cursorType = "pointer",
  isMagnetic = true,
  className = "",
  href,
  target,
  rel,
  ...props
}: ButtonProps) {
  const buttonRef = useRef<HTMLElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!isMagnetic || !buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    
    // Calculate distance from center of the button
    const x = (clientX - (left + width / 2)) * 0.35; // 35% magnetic pull strength
    const y = (clientY - (top + height / 2)) * 0.35;
    
    setCoords({ x, y });
  };

  const handleMouseLeave = () => {
    setCoords({ x: 0, y: 0 });
  };

  // Variant classes
  const baseClasses = "relative inline-flex items-center justify-center font-medium rounded-full overflow-hidden transition-all duration-300 focus:outline-none select-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
  
  const variantClasses = {
    primary: "bg-accent-1 text-text-primary hover:shadow-[0_0_20px_rgba(123,94,167,0.5)] border border-accent-1/40",
    secondary: "bg-bg-secondary text-text-primary border border-border-primary hover:border-accent-2/60 hover:shadow-[0_0_15px_rgba(0,212,255,0.2)]",
    accent: "bg-accent-3 text-bg-primary font-bold hover:shadow-[0_0_20px_rgba(255,107,107,0.5)] border border-accent-3/30",
    glass: "glass-panel text-text-primary hover:bg-bg-secondary/80 hover:border-accent-2/40",
  };

  const sizeClasses = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const innerContent = (
    <>
      {/* Background Shimmer (sweep) animation for primary / accent buttons */}
      {(variant === "primary" || variant === "accent") && (
        <span className="absolute inset-0 block overflow-hidden rounded-full pointer-events-none">
          <span className="absolute inset-0 block h-full w-[200%] -translate-x-[70%] bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-[shimmer_3s_infinite]" 
            style={{
              animation: "shimmer 2.5s infinite linear"
            }}
          />
        </span>
      )}

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      
      {/* Inline Shimmer keyframe helper */}
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-150%) skewX(-12deg);
          }
          100% {
            transform: translateX(150%) skewX(-12deg);
          }
        }
      `}</style>
    </>
  );

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto');
    if (isExternal) {
      return (
        <motion.a
          href={href}
          target={target || "_blank"}
          rel={rel || "noopener noreferrer"}
          ref={buttonRef as any}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{ x: coords.x, y: coords.y }}
          transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
          whileTap={{ scale: 0.95 }}
          data-cursor={cursorType}
          className={combinedClasses}
          {...(props as any)}
        >
          {innerContent}
        </motion.a>
      );
    }
    
    return (
      <Link href={href} passHref legacyBehavior>
        <motion.a
          ref={buttonRef as any}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{ x: coords.x, y: coords.y }}
          transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
          whileTap={{ scale: 0.95 }}
          data-cursor={cursorType}
          className={combinedClasses}
          {...(props as any)}
        >
          {innerContent}
        </motion.a>
      </Link>
    );
  }

  return (
    <motion.button
      ref={buttonRef as any}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: coords.x, y: coords.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      whileTap={{ scale: 0.95 }}
      data-cursor={cursorType}
      className={combinedClasses}
      {...(props as any)}
    >
      {innerContent}
    </motion.button>
  );
}
