"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Bot, Code, Cpu, Zap, Eye } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const services = [
  {
    icon: Bot,
    title: "24/7 AI Receptionist & Lead Generation System",
    description: "A custom, conversational AI voice assistant that interacts naturally over the phone. Never lose revenue to missed calls again—the AI operates around the clock to answer queries, handle objections, qualify leads, and automatically sync critical client data directly into your CRM.",
    pricing: "₹15,000 - ₹25,000+ / setup",
    color: "purple" as const,
    image: "/images/service_ai_receptionist.png",
  },
  {
    icon: Code,
    title: "Software Rescue & System Optimization",
    description: "Rapid diagnostic and repair services for underperforming or broken internal software and customer-facing apps. Stop losing sales to bugs—get on-demand technical expertise to quickly identify root causes and implement permanent, scalable fixes without hiring an expensive full-time team.",
    pricing: "₹299 - ₹499 diagnostic fee",
    color: "cyan" as const,
    image: "/images/service_software_rescue.png",
  },
  {
    icon: Zap,
    title: "Business Workflow & Automation Integrations",
    description: "Custom backend pipelines that connect your disconnected business tools so they communicate autonomously. Reclaim hundreds of hours by eliminating manual, error-prone data entry and fully automating repetitive administrative tasks like lead syncing and platform updates.",
    pricing: "₹2,000 - ₹5,000+ / workflow",
    color: "coral" as const,
    image: "/images/service_workflow_automation.png",
  },
  {
    icon: Eye,
    title: "Predictive AI & Custom Data Models",
    description: "Turn raw data into an unfair competitive advantage. By implementing advanced capabilities like automated image analysis or predictive trend forecasting, your business can make faster, smarter, data-driven decisions without relying on manual human analysis.",
    pricing: "Custom quote from ₹8,000",
    color: "purple" as const,
    image: "/images/service_predictive_ai.png",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative z-10 py-24 md:py-32 bg-bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-accent-3">
            <Sparkles className="h-3.5 w-3.5 text-accent-3" /> Services
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
            Need help with your{" "}
            <span className="bg-gradient-to-r from-accent-3 to-accent-1 bg-clip-text text-transparent">
              Project?
            </span>
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            I offer focused digital services designed to optimize conversions, refine identity, and build resilient structures. Let&apos;s select a fit.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Card
                key={idx}
                glowColor={service.color}
                className="flex flex-col justify-between overflow-hidden"
              >
                <div className="space-y-6">
                  {/* Service Image */}
                  <div className="w-full aspect-video rounded-xl overflow-hidden bg-bg-secondary/40 border border-border-primary/40 relative">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div
                      className="h-12 w-12 rounded-2xl flex-shrink-0 flex items-center justify-center border border-border-primary"
                      style={{
                        background: `rgba(255, 255, 255, 0.02)`,
                      }}
                    >
                      <Icon
                        className="h-6 w-6"
                        style={{
                          color:
                            service.color === "cyan"
                              ? "#00D4FF"
                              : service.color === "purple"
                              ? "#7B5EA7"
                              : "#FF6B6B",
                        }}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl font-bold text-text-primary leading-tight mt-1">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-text-muted text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Pricing CTA */}
                <div className="mt-8 pt-4 border-t border-border-primary/40 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-text-muted">
                    {service.pricing}
                  </span>
                  <a 
                    href="https://bookze.vercel.app/book/luv-services" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-accent-2 transition-colors hover:text-accent-1"
                    data-cursor="pointer"
                  >
                    Book Session <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Booking CTA Call-Out Box */}
        <div className="mt-16 glass-panel max-w-4xl mx-auto rounded-3xl p-8 md:p-10 border border-border-primary/80 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div
            className="absolute inset-0 -z-10 opacity-10 filter blur-2xl"
            style={{
              background: `radial-gradient(circle, #7B5EA7 0%, transparent 80%)`,
            }}
          />
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-text-primary">
              Ready to accelerate?
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Book a direct discovery session to map your architecture, address bottlenecks, and align on timeline scope.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Button href="https://bookze.vercel.app/book/luv-services" target="_blank" rel="noopener noreferrer" variant="accent" size="lg" cursorType="cta">
              Book a Session Now <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
