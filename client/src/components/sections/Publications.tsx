import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import resumeData from "@/data/resumeData";

export default function Publications() {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <section
      id="publications"
      className="py-20 px-6 bg-slate-100 dark:bg-slate-900"
      ref={ref}
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-primary dark:text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Research & Publications
        </motion.h2>

        <div className="space-y-6">
          {resumeData.publications.map((pub, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-md border border-gray-100 dark:border-slate-600 p-6 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 * index, ease: "easeOut" }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="mt-1 text-accent flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </span>
                    <h3 className="text-lg font-bold text-primary dark:text-gray-100 leading-snug">
                      {pub.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 ml-8">
                    {pub.journal} &middot; {pub.year}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 ml-8 leading-relaxed">
                    {pub.summary}
                  </p>
                  <div className="flex flex-wrap gap-2 ml-8">
                    {pub.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-blue-50 dark:bg-slate-700 text-secondary dark:text-blue-300 rounded text-xs font-medium border border-blue-100 dark:border-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {pub.doiLink && (
                  <div className="ml-8 md:ml-0 flex-shrink-0 flex flex-col gap-2">
                    <a
                      href={pub.doiLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View Paper
                    </a>
                    <a
                      href={resumeData.orcidUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-500 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors"
                    >
                      <svg className="w-4 h-4 text-[#A6CE39]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 01-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 3.872-2.484 3.872-3.722 0-2.016-1.284-3.722-3.872-3.722h-2.297z"/>
                      </svg>
                      ORCID Profile
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
