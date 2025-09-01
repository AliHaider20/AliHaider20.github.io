import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import resumeData from "@/data/resumeData";

export default function Experience() {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <section
      id="experience"
      className="py-20 px-6 bg-slate-200"
      ref={ref}
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Work Experience
        </motion.h2>

        {/* Experience Timeline */}
        {resumeData.experience.map((exp, index) => (
          <motion.div
            key={index}
            className={`${index === resumeData.experience.length - 1 ? "" : "mb-24"} border-l-4 border-secondary pl-6 ml-3`}
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 * index, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-secondary"></div>
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-primary">{exp.company}</h3>
                  <p className="text-lg text-gray-600 font-medium">{exp.position}</p>
                </div>
                <div className="md:text-right">
                  <p className="text-accent font-medium">
                    {exp.startDate} – {exp.endDate}
                  </p>
                  <p className="text-gray-600">{exp.location}</p>
                </div>
              </div>
              <div className="mt-4">
                <ul className="space-y-3 text-gray-700">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex">
                      <span className="text-xs text-accent mt-1.5 mr-3">
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
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
