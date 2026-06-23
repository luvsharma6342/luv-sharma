import Hero from "@/components/sections/Hero";
import ProjectsSection from "@/components/sections/ProjectsSection";
import YoutubeSection from "@/components/sections/YoutubeSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-bg-primary overflow-hidden">
      {/* Hero section with floating background animations */}
      <Hero />

      {/* Projects selection grid preview */}
      <ProjectsSection />

      {/* Featured YouTube video and channel subscription CTA */}
      <YoutubeSection />

      {/* Services pricing and details layout */}
      <ServicesSection />

      {/* Contact sheets form validation */}
      <ContactSection />
    </div>
  );
}
