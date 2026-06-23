"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-border-primary/60 bg-bg-primary py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
          {/* Logo & Tagline */}
          <div className="md:col-span-2 space-y-4">
            <Link
              href="/"
              className="font-display text-xl font-bold tracking-tight bg-gradient-to-r from-accent-2 to-accent-1 bg-clip-text text-transparent"
              data-cursor="brand"
            >
              LUV SHARMA
            </Link>
            <p className="text-text-muted text-sm max-w-sm">
              Full Stack Developer & Freelance Creator. Building high-performance, visually stunning web experiences that convert.
            </p>
            {/* Availability Indicator */}
            <div className="flex items-center space-x-2.5 pt-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-xs font-semibold text-green-400/90 tracking-wide uppercase">
                Available for freelance projects
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-text-primary">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>
                <Link href="/projects" className="hover:text-accent-2 transition-colors duration-300" data-cursor="pointer">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-accent-2 transition-colors duration-300" data-cursor="pointer">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-accent-2 transition-colors duration-300" data-cursor="pointer">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info & Socials */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-text-primary">
              Connect
            </h4>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border-primary bg-bg-secondary hover:border-accent-2 hover:text-accent-2 transition-all duration-300 flex items-center justify-center"
                aria-label="GitHub"
                data-cursor="pointer"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border-primary bg-bg-secondary hover:border-accent-2 hover:text-accent-2 transition-all duration-300 flex items-center justify-center"
                aria-label="LinkedIn"
                data-cursor="pointer"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border-primary bg-bg-secondary hover:border-accent-2 hover:text-accent-2 transition-all duration-300 flex items-center justify-center"
                aria-label="Twitter"
                data-cursor="pointer"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@ohNoMyCode"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border-primary bg-bg-secondary hover:border-accent-3 hover:text-accent-3 transition-all duration-300 flex items-center justify-center"
                aria-label="YouTube"
                data-cursor="pointer"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.498 5.814a3.016 3.016 0 0 0 2.122 2.136C4.495 20.5 12 20.5 12 20.5s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="mailto:luvsharma@example.com"
                className="p-2 rounded-full border border-border-primary bg-bg-secondary hover:border-accent-2 hover:text-accent-2 transition-all duration-300"
                aria-label="Email"
                data-cursor="pointer"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
            <p className="text-xs text-text-muted pt-2 font-mono">
              luvsharma105@gmail.com
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border-primary/60 flex flex-col md:flex-row items-center justify-between text-xs text-text-muted">
          <p>© {currentYear} Luv Sharma. All rights reserved.</p>
          <p className="mt-2 md:mt-0 font-mono">
            Designed & Built by Luv Sharma · Premium Motion Experience
          </p>
        </div>
      </div>
    </footer>
  );
}
