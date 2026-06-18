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
          </motion.div>
          <motion.div
            className="md:w-1/3 flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold mb-5 text-primary">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "4+", label: "Years in AI" },
                  { value: "10+", label: "Projects Built" },
                  { value: "2+", label: "Research Papers" },
                  { value: "3+", label: "Companies" },
                ].map((stat, i) => (
                  <div key={i} className="text-center bg-slate-50 rounded-lg p-3">
                    <p className="text-2xl font-bold text-secondary">{stat.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold mb-5 text-primary">Connect</h3>
              <div className="flex flex-col gap-3">
                <a href={resumeData.linkedInUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-secondary transition-colors duration-200">
                  <svg className="w-5 h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a href={resumeData.githubUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-secondary transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="text-sm">GitHub</span>
                </a>
                <a href={`mailto:${resumeData.email}`}
                  className="flex items-center gap-3 text-gray-700 hover:text-secondary transition-colors duration-200">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span className="text-sm">{resumeData.email}</span>
                </a>
                <a href={resumeData.orcidUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-secondary transition-colors duration-200">
                  <svg className="w-5 h-5 text-[#A6CE39]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 01-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 3.872-2.484 3.872-3.722 0-2.016-1.284-3.722-3.872-3.722h-2.297z"/>
                  </svg>
                  <span className="text-sm">ORCID</span>
                </a>
                <a href={resumeData.leetCodeUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-secondary transition-colors duration-200">
                  <svg className="w-5 h-5 text-[#FFA116]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                  </svg>
                  <span className="text-sm">LeetCode</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
