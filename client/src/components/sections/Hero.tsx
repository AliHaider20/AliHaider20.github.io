import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import resumeData from "@/data/resumeData";
import { motion } from "framer-motion";
import profilePhoto from "@assets/image_1743818166760.png";

export default function Hero() {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <section
      id="hero"
      className="pt-24 pb-20 md:pt-32 md:pb-28 px-6 bg-gradient-to-br from-primary to-primary/95 text-white shadow-lg"
      ref={ref}
      style={{
        backgroundImage: "linear-gradient(135deg, #007AFF 0%, #00478F 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
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
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
              {resumeData.name}
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white/90">
              {resumeData.title}
            </h2>
            <p className="text-xl md:text-2xl mb-6 text-white/85 font-light">
              {resumeData.subtitle}
            </p>
            <blockquote className="italic text-lg md:text-xl border-l-4 border-white/80 pl-4 mb-8 text-white/90 backdrop-blur-sm bg-white/5 p-4 rounded-r-md shadow-sm">
              "Building AI that empowers humanity, solves our greatest
              challenges, and leaves the world better than I found it."
            </blockquote>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-transparent hover:bg-white/20 border-2 border-white text-white hover:border-white/80 rounded-md transition duration-300 font-medium shadow-sm"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-transparent hover:bg-white/20 border-2 border-white text-white hover:border-white/80 rounded-md transition duration-300 font-medium shadow-sm"
              >
                Get in touch
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="mt-8 md:mt-0"
          >
            <div className="w-60 h-60 md:w-72 md:h-72 relative overflow-hidden rounded-full border-4 border-white/90 shadow-xl">
              <img
                src={profilePhoto}
                alt={resumeData.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
