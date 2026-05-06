const projects = [
  {
    title: "Library Management System",
    desc: "Backend REST API for managing books, authors, members, and borrowing operations. Features 3-tier role-based access control (Admin, Librarian, Member), advanced book search, loan tracking with automated fine calculation, and Swagger API documentation.",
    tags: ["Java", "Spring Boot", "MySQL", "JWT", "REST APIs", "Swagger"],
    github: "https://github.com/Bhargav-0007/library_management_system",
  },
  {
    title: "E-Commerce Platform",
    desc: "Full-stack e-commerce app (in progress) with a React/TypeScript frontend and a Java Spring Boot backend. Features a product catalog API with search, filtering, and pagination; a persistent shopping cart (Zustand); and a seeded product database with 30 items across 6 categories.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Zustand", "Java", "Spring Boot"],
    github: "https://github.com/Bhargav-0007/ecommerce-app",
  },
  /*{
    title: "Job Application Tracker",
    desc: "Full-stack app to track job applications, interview stages, and follow-ups. Includes dashboard analytics, status filters, and email reminders.",
    tags: ["Spring Boot", "React.js", "PostgreSQL", "Docker", "REST APIs"],
    github: "https://github.com/Bhargav-0007",
  },*/
];

function Projects() {
  return (
    <section id="projects" className="bg-gray-900 text-white py-24 px-8">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-xl mx-auto">
            A selection of projects built with production-level technologies across the full stack.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="View on GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">{project.desc}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, j) => (
                  <span key={j} className="px-2 py-1 bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
