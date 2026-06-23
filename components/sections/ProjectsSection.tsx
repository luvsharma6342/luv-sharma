"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Code, ExternalLink } from "lucide-react";
import { projectsData } from "@/lib/projectsData";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function ProjectsSection() {
  // Showcase only the first 3 projects for the home page preview
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <section id="projects" className="relative z-10 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-accent-1">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" /> Showcase
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
              Selected{" "}
              <span className="bg-gradient-to-r from-accent-2 to-accent-1 bg-clip-text text-transparent">
                Masterpieces
              </span>
            </h2>
            <p className="text-text-muted text-sm sm:text-base">
              A hand-picked selection of web applications, custom platforms, and creative design work designed with motion and performance.
            </p>
          </div>
          <div>
            <Button href="/projects" variant="secondary" cursorType="pointer">
              View All Projects <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {featuredProjects.map((project, idx) => {
            const glowColors = ["cyan" as const, "purple" as const, "coral" as const];
            return (
              <Link href={`/projects/${project.id}`} key={project.id}>
                <Card
                  glowColor={glowColors[idx % 3]}
                  className="h-full flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    {/* Project Thumbnail Image Preview */}
                    <div className="relative aspect-video rounded-lg overflow-hidden border border-border-primary/80 bg-bg-primary flex items-center justify-center group-hover:border-accent-2/40 transition-colors duration-300">
                      {/* Gradient Backdrop glow */}
                      <div
                        className="absolute inset-0 opacity-20 filter blur-xl"
                        style={{
                          background: `radial-gradient(circle, ${project.color} 0%, transparent 70%)`,
                        }}
                      />

                      {/* Project Image */}
                      {project.image && (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            // Render clean fallback text/icon on failure
                            const target = e.target as HTMLElement;
                            target.style.display = "none";
                          }}
                        />
                      )}
                    </div>

                    {/* Metadata & Description */}
                    <div className="space-y-3">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-text-muted">
                        {project.category}
                      </span>
                      <h3 className="font-display text-2xl font-bold text-text-primary group-hover:text-accent-2 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-text-muted text-sm line-clamp-2 leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </div>
                  </div>

                  {/* Tech stack & Action link */}
                  <div className="mt-6 pt-4 border-t border-border-primary/40 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded bg-bg-secondary px-2.5 py-0.5 font-mono text-[9px] text-text-muted border border-border-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-text-primary group-hover:text-accent-2 transition-colors duration-300">
                      View Case Study <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
