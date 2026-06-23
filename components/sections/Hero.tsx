"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import AmbientBg from "@/components/ui/AmbientBg";

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  } as const;

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-bg-primary pt-28 pb-16 lg:py-0"
    >
      {/* Moving Ambient Glowing Orbs Background */}
      <AmbientBg />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center text-left">
        {/* Left Column: Headline and stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 space-y-6 md:space-y-8 flex flex-col items-start"
        >

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[0.95]"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-accent-2 via-accent-1 to-accent-3 bg-clip-text text-transparent">
              Luv Sharma
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-text-primary/90"
          >
            Full Stack Developer & Freelance Creator
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-base sm:text-lg text-text-muted leading-relaxed"
          >
            I architect fast, visually stunning, motion-rich web applications that captivate audiences and turn visitors into paying clients. Let&apos;s build the future together.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 pt-2"
          >
            <Button href="/#contact" variant="accent" size="lg" cursorType="cta">
              Hire Me Now <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/projects" variant="secondary" size="lg" cursorType="pointer">
              View My Work
            </Button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 md:gap-12 border-t border-border-primary/50 pt-8 w-full max-w-xl text-left"
          >
            <div className="space-y-1">
              <h3 className="font-display text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent-2 to-accent-1 bg-clip-text text-transparent">
                5+
              </h3>
              <p className="text-[10px] md:text-xs font-mono text-text-muted uppercase tracking-wider">
                Years Experience
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="font-display text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent-1 to-accent-3 bg-clip-text text-transparent">
                40+
              </h3>
              <p className="text-[10px] md:text-xs font-mono text-text-muted uppercase tracking-wider">
                Projects Completed
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="font-display text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent-2 via-accent-1 to-accent-3 bg-clip-text text-transparent">
                99%
              </h3>
              <p className="text-[10px] md:text-xs font-mono text-text-muted uppercase tracking-wider">
                Satisfaction
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Hero Profile Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
          className="lg:col-span-5 flex justify-center items-center relative w-full max-w-sm mx-auto"
        >
          {/* Glowing backdrop shadow */}
          <div
            className="absolute inset-0 -z-10 opacity-20 filter blur-3xl w-72 h-72 rounded-full mx-auto"
            style={{
              background: "radial-gradient(circle, #7B5EA7 0%, #00D4FF 100%)",
            }}
          />

          {/* Profile image frame */}
          <div className="glass-panel w-full aspect-square rounded-3xl overflow-hidden p-3.5 border border-border-primary/80 relative group">
            <div className="w-full h-full rounded-2xl overflow-hidden relative bg-bg-secondary/40 flex items-center justify-center">
              {!imageError ? (
                <img
                  src="/images/profile.png"
                  alt="Luv Sharma"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-bg-secondary/80 text-text-muted text-center p-6 space-y-3 font-mono">
                  <span className="text-accent-2 text-sm font-bold">&lt; Luv Sharma /&gt;</span>
                  <p className="text-[10px] leading-relaxed max-w-[200px]">
                    Place your photo inside public/images/ as profile.png to display here!
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 text-text-muted opacity-60 hover:opacity-100 transition-opacity cursor-pointer lg:flex hidden"
      >
        <Link href="#projects" className="flex flex-col items-center">
          <span className="font-mono text-[9px] tracking-widest uppercase">
            Scroll Down
          </span>
          <ArrowDown className="h-4 w-4 mt-1" />
        </Link>
      </motion.div>
    </section>
  );
}
