import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import resumeData from "@/data/resumeData";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import profilePhoto from "@assets/headshot.jpeg";

const typewriterTitles = [
  "Artificial Intelligence Engineer",
  "Machine Learning Engineer",
  "Computer Vision Engineer",
  "Generative AI Engineer",
];

const metrics = [
  { value: "4+", label: "Years in AI" },
  { value: "10+", label: "Projects" },
  { value: "2", label: "Publications" },
  { value: "3", label: "Volunteer Orgs" },
];

export default function Hero() {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = typewriterTitles[titleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < current.length) {
        setCharIndex(c => c + 1);
      } else if (!isDeleting && charIndex === current.length) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex(c => c - 1);
      } else {
        setIsDeleting(false);
        setTitleIndex(i => (i + 1) % typewriterTitles.length);
      }
    }, isDeleting ? 40 : charIndex === typewriterTitles[titleIndex].length ? 99999 : 80);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  const displayTitle = typewriterTitles[titleIndex].slice(0, charIndex);

  return (
    <section
      id="hero"
      className="pt-24 pb-16 md:pt-32 md:pb-20 px-6 shadow-lg"
      ref={ref}
      style={{
        backgroundImage: "linear-gradient(135deg, #007AFF 0%, #00478F 100%)",
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-white">
              {resumeData.name}
            </h1>

            {/* Typewriter title */}
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white/90 min-h-[2.5rem]">
              {displayTitle}
              <span className="inline-block w-0.5 h-6 bg-white/80 ml-1 animate-pulse align-middle" />
            </h2>

            <p className="text-lg md:text-xl mb-6 text-white/80 font-light">
              {resumeData.subtitle}
            </p>

            <blockquote className="italic text-base md:text-lg border-l-4 border-white/60 pl-4 mb-8 text-white/85 bg-white/5 p-4 rounded-r-md">
              "Building AI that empowers humanity, solves our greatest
              challenges, and leaves the world better than I found it."
            </blockquote>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="px-6 py-3 bg-white text-[#007AFF] font-semibold rounded-md hover:bg-white/90 transition duration-300 shadow-md"
              >
                View Projects
              </a>
              {/* Add your resume PDF to client/public/resume.pdf */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-transparent hover:bg-white/15 border-2 border-white text-white rounded-md transition duration-300 font-medium flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="mt-8 md:mt-0 flex-shrink-0"
          >
            <div className="w-56 h-56 md:w-64 md:h-64 relative overflow-hidden rounded-full border-4 border-white/90 shadow-xl">
              <img
                src={profilePhoto}
                alt={resumeData.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>
        </div>

        {/* Metrics strip */}
        <motion.div
          className="mt-12 pt-8 border-t border-white/20 flex flex-wrap justify-center md:justify-start gap-6 md:gap-10"
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          {metrics.map((m, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-white">{m.value}</p>
              <p className="text-xs text-white/70 mt-0.5 uppercase tracking-wide">{m.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
