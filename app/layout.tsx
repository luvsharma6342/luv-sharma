import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";

export const metadata: Metadata = {
  title: "Luv Sharma | Full Stack Developer & Freelance Creator",
  description: "Stunning Gen Z-aesthetic personal portfolio website for Luv Sharma, showcasing high-performance web applications, UI/UX designs, and digital creation services.",
  keywords: ["Full Stack Developer", "Freelance Creator", "Web Developer", "React Developer", "Next.js", "Tailwind CSS", "Premium Design"],
  openGraph: {
    title: "Luv Sharma | Full Stack Developer & Freelance Creator",
    description: "Stunning Gen Z-aesthetic personal portfolio website for Luv Sharma, showcasing high-performance web applications, UI/UX designs, and digital creation services.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luv Sharma | Full Stack Developer & Freelance Creator",
    description: "Stunning Gen Z-aesthetic personal portfolio website for Luv Sharma, showcasing high-performance web applications, UI/UX designs, and digital creation services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Inline Theme Initialization Script to Prevent Flicker */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  if (savedTheme === 'light') {
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary antialiased font-sans transition-colors duration-300">
        {/* Grainy Noise Overlay */}
        <div className="noise-overlay" />

        {/* Scroll Container */}
        <SmoothScroll>
          <div className="flex flex-col min-h-screen">
            {/* Header Sticky Navigation */}
            <Navbar />

            {/* Content Body */}
            <main className="flex-grow">
              {children}
            </main>

            {/* Footer Information */}
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
