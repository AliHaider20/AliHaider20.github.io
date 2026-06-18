import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import resumeData from "@/data/resumeData";

export default function Skills() {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <section id="skills" className="py-20 px-6 bg-slate-200 dark:bg-slate-800" ref={ref}>
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary dark:text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Technical Skills
        </motion.h2>

        {/* Core Proficiency Bars */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <h3 className="text-xl font-bold text-primary dark:text-gray-100 mb-6 text-center">Core Proficiencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 max-w-4xl mx-auto">
            {resumeData.technicalSkills.flatMap((group) =>
              group.skills.map((skill, i) => (
                <div key={`${group.category}-${i}`}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-sm font-semibold text-secondary">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full"
                      style={{ backgroundColor: skill.color || "#007AFF" }}
                      initial={{ width: 0 }}
                      animate={isVisible ? { width: `${skill.percentage}%` } : { width: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 + i * 0.05, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        </motion.div>

        {/* Skill Category Chips */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.skillCategories.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              className="bg-white dark:bg-slate-700 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-slate-600 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 * groupIndex, ease: "easeOut" }}
            >
              <h3 className="text-lg font-bold text-primary dark:text-gray-100 mb-4 border-b-2 border-accent pb-2">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1.5 bg-blue-50 dark:bg-slate-600 text-secondary dark:text-blue-300 border border-blue-100 dark:border-slate-500 rounded-lg text-sm font-medium hover:bg-blue-100 dark:hover:bg-slate-500 hover:scale-105 transition-all duration-200 cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: 0.1 * groupIndex + 0.05 * index }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
