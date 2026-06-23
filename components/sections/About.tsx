"use client";

import React, { useState } from "react";
import { Terminal, Code, Cpu, Shield, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Framer Motion", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "GraphQL", category: "backend" },
  { name: "Prisma", category: "backend" },
  { name: "Docker", category: "tools" },
  { name: "Git & GitHub", category: "tools" },
  { name: "Vercel / AWS", category: "tools" },
  { name: "Figma", category: "design" },
];

export default function About() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Technologies" },
    { id: "frontend", name: "Frontend / UI" },
    { id: "backend", name: "Backend / Database" },
    { id: "tools", name: "DevOps & Tools" },
    { id: "design", name: "UI/UX Design" },
  ];

  const filteredSkills = activeCategory === "all"
    ? skills
    : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="about" className="relative z-10 py-24 md:py-32 bg-bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Biography & Skills */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-accent-2">
                <Sparkles className="h-3.5 w-3.5" /> About Me
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
                Crafting digital systems at the intersection of{" "}
                <span className="bg-gradient-to-r from-accent-2 to-accent-1 bg-clip-text text-transparent">
                  Design and Logic
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-text-muted text-sm sm:text-base leading-relaxed">
              <p>
                I&apos;m Luv Sharma, a Full Stack Developer and Freelance Creator based in India. I specialize in building highly responsive interfaces, custom micro-interactions, and high-throughput server architectures.
              </p>
              <p>
                By bridging the gap between pixel-perfect design assets and highly scalable application code, I help early-stage startups and established creators translate complex ideas into fluid user experiences that retain users.
              </p>
            </div>

            {/* Interactive Tech Stack Filter */}
            <div className="space-y-6 pt-4">
              <h3 className="font-display text-xl font-bold text-text-primary">
                My Tech Stack
              </h3>
              
              {/* Category Toggles */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium font-mono border transition-all duration-300 ${
                      activeCategory === cat.id
                        ? "border-accent-2 bg-accent-2/10 text-accent-2 shadow-[0_0_12px_rgba(0,212,255,0.2)]"
                        : "border-border-primary bg-bg-secondary/40 text-text-muted hover:border-border-primary/80 hover:text-text-primary"
                    }`}
                    data-cursor="pointer"
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Skills Chips */}
              <div className="flex flex-wrap gap-2.5 min-h-[100px]">
                {filteredSkills.map((skill) => (
                  <motion.span
                    layout
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border-primary bg-bg-secondary/40 px-3.5 py-2 text-xs font-semibold text-text-primary hover:border-accent-2/40 hover:bg-bg-secondary transition-all duration-300"
                    data-cursor="pointer"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-1" />
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code Terminal Profile */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="glass-panel w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border border-border-primary/80 flex flex-col font-mono text-xs">
              {/* Terminal Title Bar */}
              <div className="bg-bg-secondary px-4 py-3 flex items-center justify-between border-b border-border-primary/60">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                  <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                  <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="text-[10px] text-text-muted flex items-center gap-1.5 font-semibold">
                  <Terminal className="h-3.5 w-3.5 text-accent-2" /> profile.ts — luv-sharma
                </div>
                <div className="w-10" />
              </div>

              {/* Terminal Content */}
              <div className="p-5 space-y-4 text-left overflow-x-auto text-[11px] leading-relaxed bg-bg-primary/40 select-text">
                <div>
                  <span className="text-accent-3">const</span> developer = &#123;
                  <div className="pl-4">
                    name: <span className="text-green-300">&apos;Luv Sharma&apos;</span>,
                  </div>
                  <div className="pl-4">
                    role: <span className="text-green-300">&apos;Full Stack Dev & Creator&apos;</span>,
                  </div>
                  <div className="pl-4">
                    location: <span className="text-green-300">&apos;India&apos;</span>,
                  </div>
                  <div className="pl-4">
                    availability: <span className="text-accent-2">true</span>,
                  </div>
                  <div className="pl-4">
                    focus: <span className="text-green-300">&apos;Bespoke High-Motion UIs & Scalable Backends&apos;</span>
                  </div>
                  &#125;;
                </div>

                <div>
                  <span className="text-accent-3">const</span> coreValues = [
                    <div className="pl-4">
                      <span className="text-green-300">&apos;Performance-first architecture (Lighthouse 90+)&apos;</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-green-300">&apos;Micro-animations & tactile feedback&apos;</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-green-300">&apos;Converting design assets into performant React systems&apos;</span>
                    </div>
                  ];
                </div>

                <div className="pt-2 text-text-muted text-[10px] border-t border-border-primary/50 flex flex-col gap-1">
                  <div>// Click chip filters to explore tech stack</div>
                  <div className="flex items-center gap-1">
                    <span className="text-accent-2">$</span> npm run build
                  </div>
                  <div className="text-green-400">✓ Compiled successfully in 0.42s</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
