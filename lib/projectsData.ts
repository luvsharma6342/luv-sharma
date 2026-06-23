export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  color: string; // Theme accent color
  image: string; // Path to thumbnail image
  caseStudy: {
    overview: string;
    problem: string;
    solution: string;
    outcome: string;
  };
}

export const projectsData: Project[] = [
  {
    id: "bookze",
    title: "Bookze",
    category: "Web Development",
    shortDescription: "Bookze lets local service businesses launch instant web storefronts to accept automated appointment bookings directly on WhatsApp with zero friction.",
    techStack: ["Next.js", "Tailwind CSS", "PostgreSQL", "Framer Motion"],
    liveUrl: "https://bookze.vercel.app/",
    githubUrl: "https://github.com/luvsharma6342/bookzy",
    color: "#00D4FF", // Cyan Accent
    image: "/images/bookze.png",
    caseStudy: {
      overview: "Bookze is an enterprise-ready calendar scheduling application. It addresses slow booking conversions by compiling real-time availability states on client clients, reducing loading times under 200ms.",
      problem: "Traditional scheduling tools feel sluggish and often lose potential clients during checkout pipelines due to disjointed authentication steps and multi-page configurations.",
      solution: "We designed a unified single-sheet checkout scheduler that queries availability timelines dynamically. It includes automatic time-zone synchronization and offline synchronization patterns using React Server Components.",
      outcome: "Successfully increased onboarding completions by 35% and reduced time-to-book metric by 50% across 200 early-adopter businesses.",
    },
  },
  {
    id: "rizzmeter",
    title: "Rizzmeter",
    category: "Mobile App",
    shortDescription: "A fun AI-powered analyzer that rates your conversational charisma (rizz) based on chat screenshot uploads.",
    techStack: ["React Native", "Next.js", "Tailwind CSS", "Gemini API"],
    liveUrl: "https://rizzmeter.vercel.app/",
    githubUrl: "https://github.com/luvsharma6342/Rizzmeter",
    color: "#FF6B6B", // Coral Accent
    image: "/images/rizzmeter.png",
    caseStudy: {
      overview: "Rizzmeter leverages custom generative AI vision models to evaluate dating and social text screenshots, outputting action-oriented dialogue advice and score metrics.",
      problem: "Modern chat diagnostics feel dry and complex, lacking the prompt feedback loops required by Gen Z audiences to refine their conversational flows.",
      solution: "Engineered a serverless vision pipeline using Gemini API. Integrated dynamic card sliders and score counter dials using Framer Motion.",
      outcome: "Shared globally across TikTok and Instagram, logging over 50,000+ screenshot uploads and securing top trending spots.",
    },
  },
];
