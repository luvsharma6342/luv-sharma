import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Sparkles } from "lucide-react";
import { projectsData } from "@/lib/projectsData";
import Button from "@/components/ui/Button";
import AmbientBg from "@/components/ui/AmbientBg";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((p) => ({
    slug: p.id,
  }));
}

export default async function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const projectIdx = projectsData.findIndex((p) => p.id === resolvedParams.slug);

  if (projectIdx === -1) {
    notFound();
  }

  const project = projectsData[projectIdx];

  // Calculate Next and Previous projects for easy cross-navigation
  const prevProject = projectsData[projectIdx === 0 ? projectsData.length - 1 : projectIdx - 1];
  const nextProject = projectsData[projectIdx === projectsData.length - 1 ? 0 : projectIdx + 1];

  return (
    <div className="relative min-h-screen bg-bg-primary pt-32 pb-24 overflow-hidden">
      {/* Background orbs */}
      <AmbientBg />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 space-y-12">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-mono font-bold text-text-muted hover:text-accent-2 transition-colors duration-300"
          data-cursor="pointer"
        >
          <ArrowLeft className="h-4 w-4" /> Back to projects
        </Link>

        {/* Hero Section */}
        <div className="space-y-6 border-b border-border-primary/60 pb-10">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-accent-1">
            <Sparkles className="h-3.5 w-3.5" /> Project Case Study
          </div>
          
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight">
            {project.title}
          </h1>

          <p className="text-text-muted text-base sm:text-lg leading-relaxed max-w-3xl">
            {project.shortDescription}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Button href={project.liveUrl} target="_blank" rel="noopener noreferrer" variant="accent" cursorType="cta">
              Launch Demo <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button href={project.githubUrl} target="_blank" rel="noopener noreferrer" variant="secondary" cursorType="pointer">
              View Repository 
              <svg className="h-4 w-4 fill-current ml-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </Button>
          </div>
        </div>

        {/* Case Study Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start pt-4">
          {/* Sidebar Specs */}
          <div className="glass-panel p-6 rounded-2xl border border-border-primary/60 bg-bg-secondary/15 space-y-6">
            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                Category
              </h4>
              <p className="text-sm font-bold text-text-primary">
                {project.category}
              </p>
            </div>
            
            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                Technologies
              </h4>
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
            </div>
          </div>

          {/* Core Case Study Content */}
          <div className="md:col-span-2 space-y-10">
            {/* Overview */}
            <div className="space-y-3">
              <h3 className="font-display text-2xl font-bold text-text-primary">
                Overview
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {project.caseStudy.overview}
              </p>
            </div>

            {/* Problem Statement */}
            <div className="space-y-3">
              <h3 className="font-display text-2xl font-bold text-text-primary">
                The Problem
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {project.caseStudy.problem}
              </p>
            </div>

            {/* Solution */}
            <div className="space-y-3">
              <h3 className="font-display text-2xl font-bold text-text-primary">
                The Solution
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {project.caseStudy.solution}
              </p>
            </div>

            {/* Outcome */}
            <div className="space-y-3">
              <h3 className="font-display text-2xl font-bold text-text-primary">
                The Outcome
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {project.caseStudy.outcome}
              </p>
            </div>
          </div>
        </div>

        {/* Cross-Navigation Footer */}
        <div className="mt-16 pt-8 border-t border-border-primary/60 flex items-center justify-between text-sm font-mono">
          <Link
            href={`/projects/${prevProject.id}`}
            className="group flex flex-col items-start gap-1"
            data-cursor="pointer"
          >
            <span className="text-[10px] text-text-muted uppercase font-bold tracking-wider">
              Previous Project
            </span>
            <span className="text-xs font-semibold text-text-primary hover:text-accent-2 transition-colors flex items-center gap-1">
              ← {prevProject.title}
            </span>
          </Link>
          
          <Link
            href={`/projects/${nextProject.id}`}
            className="group flex flex-col items-end gap-1"
            data-cursor="pointer"
          >
            <span className="text-[10px] text-text-muted uppercase font-bold tracking-wider">
              Next Project
            </span>
            <span className="text-xs font-semibold text-text-primary hover:text-accent-2 transition-colors flex items-center gap-1">
              {nextProject.title} →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
