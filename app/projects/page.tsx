"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Code } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/lib/projectsData";
import Card from "@/components/ui/Card";
import AmbientBg from "@/components/ui/AmbientBg";

const categories = [
  { id: "all", name: "All Projects" },
  { id: "Web Development", name: "Web Dev" },
  { id: "Mobile App", name: "Mobile Apps" },
  { id: "Design / Creative", name: "Design / Creative" },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all"
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <div className="relative min-h-screen bg-bg-primary pt-32 pb-24 md:pb-32 overflow-hidden flex flex-col justify-between">
      {/* Background orbs */}
      <AmbientBg />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex-grow">
        {/* Header content */}
        <div className="max-w-2xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-accent-2">
            <Sparkles className="h-3.5 w-3.5" /> Portfolio Archive
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Creative{" "}
            <span className="bg-gradient-to-r from-accent-2 to-accent-1 bg-clip-text text-transparent">
              Architectures
            </span>
          </h1>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            A comprehensive catalog of applications, API libraries, tools, and UI wireframes built with performance targets in mind.
          </p>
        </div>

        {/* Categories toggles */}
        <div className="flex flex-wrap gap-2.5 mb-12 pb-2 border-b border-border-primary/40">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold border transition-all duration-300 ${
                filter === cat.id
                  ? "border-accent-2 bg-accent-2/10 text-accent-2 shadow-[0_0_10px_rgba(0,212,255,0.2)]"
                  : "border-border-primary bg-bg-secondary/40 text-text-muted hover:border-border-primary/80 hover:text-text-primary"
              }`}
              data-cursor="pointer"
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Filtered Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto min-h-[400px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const glowColors = ["cyan" as const, "purple" as const, "coral" as const];
              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  <Link href={`/projects/${project.id}`} className="h-full block">
                    <Card
                      glowColor={glowColors[idx % 3]}
                      className="h-full flex flex-col justify-between"
                    >
                      <div className="space-y-6">
                        {/* Project Thumbnail Image Preview */}
                        <div className="relative aspect-video rounded-lg overflow-hidden border border-border-primary/80 bg-bg-primary flex items-center justify-center">
                          <div
                            className="absolute inset-0 opacity-15 filter blur-xl"
                            style={{
                              background: `radial-gradient(circle, ${project.color} 0%, transparent 70%)`,
                            }}
                          />
                          
                          {/* Image Thumbnail */}
                          {project.image && (
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-105"
                              onError={(e) => {
                                const target = e.target as HTMLElement;
                                target.style.display = "none";
                              }}
                            />
                          )}
                        </div>

                        {/* Title details */}
                        <div className="space-y-3">
                          <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-text-muted">
                            {project.category}
                          </span>
                          <h3 className="font-display text-2xl font-bold text-text-primary">
                            {project.title}
                          </h3>
                          <p className="text-text-muted text-sm leading-relaxed line-clamp-3">
                            {project.shortDescription}
                          </p>
                        </div>
                      </div>

                      {/* Tech stack list */}
                      <div className="mt-8 pt-4 border-t border-border-primary/40 space-y-4">
                        <div className="flex flex-wrap gap-1">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded bg-bg-secondary px-2 py-0.5 font-mono text-[9px] text-text-muted border border-border-primary"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-bold text-text-primary">
                          View Case Study <ArrowRight className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
