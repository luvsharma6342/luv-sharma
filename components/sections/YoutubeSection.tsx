"use client";

import React from "react";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function YoutubeSection() {
  // Use a generic placeholder video ID. The user can swap this out with their own video ID.
  const videoId = "Bq46Mjf-Tfw"; // User's featured video ID
  const channelUrl = "https://www.youtube.com/@ohNoMyCode"; // Placeholder channel link

  return (
    <section id="youtube" className="relative z-10 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Info & CTA */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-accent-3">
              <Sparkles className="h-3.5 w-3.5 text-accent-3" /> YouTube Channel
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
              Sharing Knowledge With the{" "}
              <span className="bg-gradient-to-r from-accent-3 to-accent-1 bg-clip-text text-transparent">
                Developer Community
              </span>
            </h2>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed">
              I create high-production tutorials, UI coding walk-throughs, and development guides on YouTube. I break down complex architectures, animations, and bug fixes to help others build better software.
            </p>
            <div className="pt-2">
              <Button href={channelUrl} target="_blank" rel="noopener noreferrer" variant="accent" size="lg" cursorType="cta">
                Subscribe on YouTube 
                <svg className="h-5 w-5 ml-1 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.498 5.814a3.016 3.016 0 0 0 2.122 2.136C4.495 20.5 12 20.5 12 20.5s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </Button>
            </div>
          </div>

          {/* Right Column: Embedded Responsive Player */}
          <div className="lg:col-span-7 flex justify-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-2xl relative"
            >
              {/* Premium Glow Aura behind player */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-accent-3 to-accent-1 opacity-20 filter blur-3xl rounded-3xl" />

              {/* Player Container */}
              <Card glowColor="coral" className="overflow-hidden p-0 rounded-2xl border border-border-primary/80 bg-bg-secondary/40">
                <div className="relative aspect-video w-full h-full">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="Featured Developer Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
