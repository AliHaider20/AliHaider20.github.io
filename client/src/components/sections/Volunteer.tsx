import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import resumeData from "@/data/resumeData";

export default function Volunteer() {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <section
      id="volunteer"
      className="py-20 px-6 bg-slate-100"
      ref={ref}
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Volunteer Experience
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Row - First 2 Experiences */}
          {resumeData.volunteerExperiences.slice(0, 2).map((exp, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md border border-gray-100 h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 * index, ease: "easeOut" }}
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-primary">{exp.organization}</h3>
                <p className="text-lg text-gray-600 font-medium">{exp.position}</p>
                <p className="text-accent font-medium">
                  {exp.startDate} – {exp.endDate}
                </p>
              </div>
              <div>
                <ul className="space-y-2 text-gray-700">
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
            </motion.div>
          ))}
          
          {/* Second Row - Third Experience */}
          {resumeData.volunteerExperiences.length > 2 && (
            <motion.div
              className="md:col-span-2 mt-4"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div
                className="p-6 bg-white rounded-lg shadow-md border border-gray-100 md:w-1/2 mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-primary">{resumeData.volunteerExperiences[2].organization}</h3>
                  <p className="text-lg text-gray-600 font-medium">{resumeData.volunteerExperiences[2].position}</p>
                  <p className="text-accent font-medium">
                    {resumeData.volunteerExperiences[2].startDate} – {resumeData.volunteerExperiences[2].endDate}
                  </p>
                </div>
                <div>
                  <ul className="space-y-2 text-gray-700">
                    {resumeData.volunteerExperiences[2].description.map((item, i) => (
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
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}