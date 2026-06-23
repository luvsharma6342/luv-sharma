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
      overview: "Bookze is a WhatsApp-first storefront and automated booking platform built for local Indian service businesses. It enables salons, clinics, and independent professionals to instantly launch a branded digital storefront and accept appointments without requiring customers to download any external applications.",
      problem: "Local service businesses constantly lose leads and revenue to the manual DM chase game. Managing appointments through Instagram messages, WhatsApp texts, and missed calls leads to delayed responses, double bookings, and frustrated clients. Furthermore, without a structured scheduling system and automated reminders, businesses suffer from an average 15% no-show rate and waste over 10 hours a week on administrative follow-ups.",
      solution: "I developed a lightweight, hyper-fast web application that generates a clean, SEO-optimized booking page in under five minutes. Customers simply click a link in the business's bio, view real-time availability, select a service, and book a slot. The platform then processes the appointment and sends automated, localized WhatsApp confirmation and reminder messages directly to the client, bridging the gap between web discovery and instant WhatsApp communication.",
      outcome: "Businesses streamline their entire appointment pipeline, effectively reducing the back-and-forth messaging to zero. The automated WhatsApp reminders drop no-show rates by up to 70%, while the frictionless booking flow prevents lead drop-off. Owners reclaim hours of their week from manual admin work, allowing them to focus entirely on scaling their billable services and delivering a premium client experience.",
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
      overview: "Ridge Metre is an interactive application designed to analyze, critique, and elevate users' social media presence. By allowing users to upload screenshots of their profiles (such as Instagram feeds, LinkedIn pages, or WhatsApp DPs), the platform delivers a humorous roast alongside constructive, actionable feedback. Core features include a First Impression Score, detailed photo ratings, personalized bio rewrites, and a comprehensive Glow - up Plan tailored to improve their digital footprint.",
      problem: "In today's digital age, a user's online profile is their modern first impression, yet many people struggle to curate a strong, engaging presence. Users often lack objective, honest feedback regarding how their photos, bios, and overall aesthetics are perceived by others. This can lead to missed professional networking opportunities on platforms like LinkedIn, or diminished personal branding on Instagram, with no clear direction on how to diagnose and fix the issues.",
      solution: "I developed Ridge Metre to bridge the gap between entertaining social critique and practical profile optimization. Users seamlessly upload their profile screenshots, and the application processes the data to generate a multi-tiered report. The solution provides brutally honest, engaging roasts to hook the user, immediately followed by constructive tools: an objective First Impression Score, granular photo ratings, newly generated bio suggestions, and a step-by-step social media Glow-up Plan.",
      outcome: "The project successfully transformed the often-tedious task of profile auditing into a highly engaging, shareable experience. By balancing humor with actionable insights, Ridge Metre empowers users to confidently revamp their social media accounts. The final product is a polished, user-centric tool that demonstrates a strong grasp of user engagement strategies, UI/UX design principles, and creative problem-solving in web development.",
    },
  },
];
