import { useState } from "react";
import { motion } from "framer-motion";
import resumeData, { PROJECT_GROUPS, type Project, type ProjectGroup } from "@/data/resumeData";

type Filter = "All" | ProjectGroup;
const FILTERS: Filter[] = ["All", ...PROJECT_GROUPS];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md border border-gray-100 dark:border-slate-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: 0.08 * (index % 2), ease: "easeOut" }}
    >
      <div className="bg-gradient-to-r from-secondary to-accent h-1.5" />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start gap-3 mb-1">
          <h4 className="text-lg font-bold text-primary leading-snug">{project.title}</h4>
          <span className="text-xs bg-blue-50 dark:bg-slate-700 text-secondary px-2 py-1 rounded-full whitespace-nowrap">
            {project.date}
          </span>
        </div>
        <span className="text-xs text-accent font-medium mb-3">{project.category}</span>
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
        <ul className="space-y-1.5 mb-4 text-gray-700 dark:text-gray-300 text-sm flex-1">
          {project.details.map((detail) => (
            <li key={detail} className="flex">
              <span className="text-accent mt-2 mr-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline flex items-center text-sm font-medium mt-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const groups = activeFilter === "All" ? PROJECT_GROUPS : [activeFilter];

  return (
    <section id="projects" className="py-20 px-6 bg-slate-100 dark:bg-slate-900">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Featured Projects</h2>

        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((filter) => {
            const count =
              filter === "All"
                ? resumeData.projects.length
                : resumeData.projects.filter((p) => p.group === filter).length;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? "bg-secondary text-white shadow-md"
                    : "bg-white dark:bg-slate-700 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-slate-600 hover:border-secondary hover:text-secondary"
                }`}
              >
                {filter} <span className="ml-1 text-xs opacity-70">({count})</span>
              </button>
            );
          })}
        </div>

        <div className="space-y-12">
          {groups.map((group) => (
            <div key={group}>
              <h3 className="text-xl md:text-2xl font-semibold text-primary mb-5 pb-2 border-b-2 border-accent inline-block">
                {group}
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {resumeData.projects
                  .filter((project) => project.group === group)
                  .map((project, index) => (
                    <ProjectCard key={project.title} project={project} index={index} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
