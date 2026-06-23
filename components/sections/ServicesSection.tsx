"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Bot, Code, Cpu, Zap, Eye } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const services = [
  {
    icon: Bot,
    title: "Custom AI Voice Agent Development",
    description: "Intelligent, conversational AI voice bots designed to handle customer inquiries, qualify leads, and manage objection handling 24/7. These agents seamlessly extract critical data from natural conversations and automatically route it to your spreadsheets or CRM systems.",
    pricing: "Starting from ₹40,000",
    color: "purple" as const,
  },
  {
    icon: Code,
    title: "Code Review & Bug Fixing",
    description: "Comprehensive repository audits, rapid debugging, and architectural optimization for your existing projects. Identify and resolve critical errors, refactor inefficient codebases for scalability, and ensure your software runs smoothly before deployment.",
    pricing: "Starting from ₹10,000",
    color: "cyan" as const,
  },
  {
    icon: Cpu,
    title: "Custom Feature Integration",
    description: "End-to-end development and integration of complex new functionalities into your existing software infrastructure. Whether it is adding automated webhook triggers, third-party API connections, or secure administrative dashboards, the integration is tailored to your specific technical requirements.",
    pricing: "Starting from ₹25,000",
    color: "coral" as const,
  },
  {
    icon: Zap,
    title: "Business Workflow Automation",
    description: "Custom scripts and automation pipelines designed to eliminate manual data entry and connect disconnected systems. Transform missed calls and disorganized lead data into a streamlined, automated funnel that captures, organizes, and notifies you instantly.",
    pricing: "Starting from ₹20,000",
    color: "purple" as const,
  },
  {
    icon: Eye,
    title: "Machine Learning & Computer Vision Solutions",
    description: "Advanced predictive modeling and data analysis leveraging deep learning frameworks. Development of specialized models, such as Convolutional Neural Networks (CNNs), for complex problem-solving in areas like medical imaging analysis and computer vision.",
    pricing: "Starting from ₹50,000",
    color: "cyan" as const,
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
                className={`flex flex-col justify-between ${idx === 4 ? "md:col-span-2" : ""}`}
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div
                    className="h-12 w-12 rounded-2xl flex items-center justify-center border border-border-primary"
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

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="font-display text-2xl font-bold text-text-primary">
                      {service.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Pricing CTA */}
                <div className="mt-8 pt-4 border-t border-border-primary/40 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-text-muted">
                    {service.pricing}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-accent-2 transition-transform group-hover:translate-x-1 duration-300">
                    Book Session <ArrowRight className="h-3.5 w-3.5" />
                  </span>
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
            <Button href="/#contact" variant="accent" size="lg" cursorType="cta">
              Book a Session Now <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
