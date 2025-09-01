import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import resumeData from "@/data/resumeData";
import { useRef } from "react";

export default function Projects() {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -750, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 750, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-slate-100"
      ref={ref}
    >
      <div className="container mx-auto">
        <motion.div
          className="flex justify-between items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Featured Projects</h2>
          <div className="hidden md:flex space-x-3">
            <button 
              onClick={scrollLeft}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-primary focus:outline-none"
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={scrollRight}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-primary focus:outline-none"
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 md:hidden">
            <button 
              onClick={scrollLeft}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 text-primary focus:outline-none"
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 md:hidden">
            <button 
              onClick={scrollRight}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 text-primary focus:outline-none"
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Group projects into rows of 2 columns */}
            <div className="flex w-max">
              {/* Create pairs of projects */}
              {Array.from({ length: Math.ceil(resumeData.projects.length / 2) }).map((_, pairIndex) => {
                const startIndex = pairIndex * 2;
                return (
                  <div key={pairIndex} className="flex-shrink-0 flex-grow-0 mr-8 snap-start" style={{ width: "90vw", maxWidth: "1100px", minWidth: "800px" }}>
                    <div className="grid grid-cols-2 gap-8">
                      {resumeData.projects.slice(startIndex, startIndex + 2).map((project, index) => (
                        <motion.div
                          key={startIndex + index}
                          className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                          initial={{ opacity: 0, y: 20 }}
                          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ duration: 0.6, delay: 0.1 * ((startIndex + index) % 5), ease: "easeOut" }}
                        >
                          <div className="bg-gradient-to-r from-secondary to-accent h-3"></div>
                          <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                              <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                              <span className="text-xs bg-blue-100 text-secondary px-2 py-1 rounded-full">
                                {project.date}
                              </span>
                            </div>
                            <div className="mb-4">
                              <span className="text-sm text-gray-600">{project.category}</span>
                            </div>
                            <p className="text-gray-700 mb-6">{project.description}</p>
                            <ul className="space-y-2 mb-6 text-gray-700 text-sm">
                              {project.details.map((detail, i) => (
                                <li key={i} className="flex">
                                  <span className="text-xs text-accent mt-1 mr-3 flex-shrink-0">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-3 w-3"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, i) => (
                                <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <div className="mt-6">
                              <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-secondary hover:text-blue-700 flex items-center text-sm font-medium transition-colors"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 mr-2"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                View on GitHub
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
