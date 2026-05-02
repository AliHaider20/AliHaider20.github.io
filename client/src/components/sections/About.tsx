import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import resumeData from "@/data/resumeData";

export default function About() {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <section
      id="about"
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
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            className="md:w-2/3"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-lg mb-6 leading-relaxed">
              I'm an AI Engineer with a strong background in machine learning, computer vision, and generative AI. 
              Currently completing my Master's in Artificial Intelligence at Yeshiva University, I combine theoretical 
              knowledge with practical implementation across various domains.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              My expertise includes developing machine learning models, computer vision solutions, and natural 
              language processing applications. I've worked on projects spanning from medical image analysis 
              to language models and predictive analytics.
            </p>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">Education</h3>
              {resumeData.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">{edu.degree}</h4>
                      <p className="text-gray-600">{edu.institution}</p>
                    </div>
                    <span className="text-secondary font-medium">{edu.endDate}</span>
                  </div>
                  <p className="text-gray-700 mt-2">
                    Coursework: {edu.coursework.join(", ")}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Achievement Highlights</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {resumeData.achievements.map((achievement, index) => (
                  <li key={index}>{achievement.title}</li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/3 flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-primary">Focus Areas</h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.focusAreas.map((area, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-secondary rounded-full text-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
