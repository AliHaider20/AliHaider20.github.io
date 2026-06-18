import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import resumeData from "@/data/resumeData";

export default function Experience() {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <section id="experience" className="py-20 px-6 bg-slate-200 dark:bg-slate-800" ref={ref}>
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-14 text-primary dark:text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Work Experience
        </motion.h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-secondary/30 dark:bg-secondary/20" />

          <div className="space-y-12">
            {resumeData.experience.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-16"
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.2 * index, ease: "easeOut" }}
              >
                {/* Timeline dot */}
                <div className="absolute left-3 top-1.5 w-5 h-5 rounded-full bg-secondary border-4 border-white dark:border-slate-800 shadow-md" />

                <div className="bg-white dark:bg-slate-700 rounded-xl shadow-md border border-gray-100 dark:border-slate-600 p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary dark:text-gray-100">{exp.company}</h3>
                      <p className="text-secondary font-medium">{exp.position}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{exp.location}</p>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20 flex-shrink-0">
                      {exp.startDate} – {exp.endDate}
                    </span>
                  </div>
                  <ul className="space-y-2.5 text-gray-700 dark:text-gray-300 text-sm">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex">
                        <span className="text-accent mt-1 mr-2.5 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
