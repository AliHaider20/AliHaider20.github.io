import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Volunteer from "@/components/sections/Volunteer";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import resumeData from "@/data/resumeData";

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <>
      <Helmet>
        <title>{resumeData.name} - {resumeData.title}</title>
        <meta name="description" content={`${resumeData.name} - ${resumeData.title}. ${resumeData.subtitle}`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <style>
          {`
            :root {
              --primary: #2D2D2D;
              --secondary: #007AFF;
              --background: #FFFFFF;
              --text: #333333;
              --accent: #00C7B7;
              --font-sans: 'Inter', sans-serif;
            }
          `}
        </style>
      </Helmet>

      <div className="bg-background text-text font-sans min-h-screen">
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Volunteer />
          <Achievements />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </>
  );
}
