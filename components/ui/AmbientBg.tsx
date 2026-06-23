"use client";

import { motion } from "framer-motion";

export default function AmbientBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {/* Orb 1: Purple (Top Left) */}
      <motion.div
        className="glow-orb absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-accent-1/20"
        animate={{
          x: [0, 80, -40, 0],
          y: [0, 60, 100, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orb 2: Cyan (Top Right / Center) */}
      <motion.div
        className="glow-orb absolute top-20 right-[-10%] h-[550px] w-[550px] rounded-full bg-accent-2/15"
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 80, -60, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orb 3: Coral (Middle Left) */}
      <motion.div
        className="glow-orb absolute top-[50%] left-[-20%] h-[500px] w-[500px] rounded-full bg-accent-3/10"
        animate={{
          x: [0, 120, -60, 0],
          y: [0, -90, 80, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orb 4: Purple (Bottom Right) */}
      <motion.div
        className="glow-orb absolute bottom-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-accent-1/15"
        animate={{
          x: [0, -80, 40, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.1, 0.85, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
