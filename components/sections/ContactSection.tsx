"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, Send, Sparkles, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import Button from "@/components/ui/Button";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const emailAddress = "luvsharma105@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus("error");
      setErrorMessage("Please fill out all fields before submitting.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });

        // Trigger canvas-confetti blast
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#7B5EA7", "#00D4FF", "#FF6B6B"],
        });
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Failed to send message. Check your network connection.");
    }
  };

  return (
    <section id="contact" className="relative z-10 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Direct info & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-accent-1">
                <Sparkles className="h-3.5 w-3.5" /> Connections
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
                Let&apos;s start a{" "}
                <span className="bg-gradient-to-r from-accent-2 to-accent-1 bg-clip-text text-transparent">
                  Conversation
                </span>
              </h2>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed max-w-sm">
                Have an idea, timeline scope, or project consult request? Fill out the sheet or drop a direct line.
              </p>
            </div>

            {/* Interactive Email Copy panel */}
            <div className="glass-panel p-6 rounded-2xl border border-border-primary/60 max-w-sm flex items-center justify-between space-x-4 bg-bg-secondary/20">
              <div className="flex items-center space-x-3.5">
                <div className="h-10 w-10 rounded-xl bg-accent-2/10 flex items-center justify-center text-accent-2">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-text-muted">
                    Email Address
                  </span>
                  <p className="text-xs font-semibold text-text-primary">
                    {emailAddress}
                  </p>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className={`p-2 rounded-lg border transition-all duration-300 ${copied
                    ? "border-green-500/40 bg-green-500/10 text-green-400"
                    : "border-border-primary bg-bg-secondary hover:border-accent-2/40 text-text-muted hover:text-text-primary"
                  }`}
                title="Copy Email"
                data-cursor="pointer"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>

            {/* Quick availability stats indicator */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center space-x-3">
                <span className="relative flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500"></span>
                </span>
                <span className="text-sm font-semibold text-text-primary">
                  Currently accepting consulting clients
                </span>
              </div>
              <p className="text-text-muted text-xs leading-relaxed max-w-xs pl-6">
                Response time for verified emails is typically under 12 hours.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-3xl border border-border-primary/60 bg-bg-secondary/15 relative overflow-hidden">

              {/* Form header blur orb */}
              <div
                className="absolute top-0 right-0 h-40 w-40 opacity-10 filter blur-3xl pointer-events-none"
                style={{
                  background: `radial-gradient(circle, #00D4FF 0%, transparent 80%)`,
                }}
              />

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                {/* Status Messages */}
                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 rounded-xl border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-semibold flex items-center gap-2"
                    >
                      <Sparkles className="h-4.5 w-4.5 text-green-400 shrink-0" />
                      Message sent successfully! Confetti incoming.
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 rounded-xl border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-semibold flex items-center gap-2"
                    >
                      <AlertCircle className="h-4.5 w-4.5 text-red-400 shrink-0" />
                      {errorMessage}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-mono font-bold uppercase tracking-wider text-text-muted">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    disabled={status === "loading" || status === "success"}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-border-primary/60 bg-bg-primary/50 px-4 py-3 text-sm text-text-primary placeholder-text-muted/50 focus:border-accent-2/65 focus:outline-none transition-all duration-300 disabled:opacity-50"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-mono font-bold uppercase tracking-wider text-text-muted">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    disabled={status === "loading" || status === "success"}
                    placeholder="name@company.com"
                    className="w-full rounded-xl border border-border-primary/60 bg-bg-primary/50 px-4 py-3 text-sm text-text-primary placeholder-text-muted/50 focus:border-accent-2/65 focus:outline-none transition-all duration-300 disabled:opacity-50"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-mono font-bold uppercase tracking-wider text-text-muted">
                    Project Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleInputChange}
                    disabled={status === "loading" || status === "success"}
                    placeholder="Briefly describe your project requirements..."
                    className="w-full rounded-xl border border-border-primary/60 bg-bg-primary/50 px-4 py-3 text-sm text-text-primary placeholder-text-muted/50 focus:border-accent-2/65 focus:outline-none transition-all duration-300 disabled:opacity-50 resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    cursorType="cta"
                    className="w-full"
                    disabled={status === "loading" || status === "success"}
                  >
                    {status === "loading" ? (
                      <span className="flex items-center gap-2">
                        Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message <Send className="h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
