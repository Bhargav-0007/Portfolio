const experiences = [
  {
    company: "Wells Fargo",
    role: "Full Stack Developer",
    period: "Mar 2025 – Present",
    location: "Irving, TX",
    highlights: [
      "Architected and delivered 12+ production microservices using Java 11 and Spring Boot, handling 500K+ daily requests at 99.9% uptime.",
      "Implemented JWT and OAuth2 authentication via Spring Security, reducing unauthorized access incidents by 40%.",
      "Built responsive React.js, Redux, and TypeScript frontends improving page load performance by 30%.",
      "Integrated Apache Kafka for event-driven communication, increasing system throughput by 35%.",
      "Containerized services with Docker and Kubernetes on AWS & Azure; Jenkins CI/CD pipelines cut deployment time by 50%.",
    ],
    tags: ["Java 11", "Spring Boot", "React.js", "Kafka", "Docker", "Kubernetes", "AWS"],
  },
  {
    company: "Optum",
    role: "Software Engineer",
    period: "Aug 2020 – Jul 2023",
    location: "Hyderabad, India",
    highlights: [
      "Developed RESTful APIs using Java, Spring Boot, and Spring MVC for payroll and HR modules serving 100K+ active users.",
      "Built responsive frontend components in React.js and JavaScript (ES6), reducing page load times by 20%.",
      "Optimized MySQL and PostgreSQL operations through query tuning and schema redesign, improving DB performance by 25%.",
      "Achieved 80% test code coverage using JUnit 5 and Mockito, reducing production defects by 30%.",
      "Streamlined CI/CD pipelines using Git, Maven, and Jenkins, reducing manual deployment efforts by 40%.",
    ],
    tags: ["Java", "Spring Boot", "React.js", "MySQL", "PostgreSQL", "Jenkins", "Maven"],
  },
];

const education = {
  degree: "Master of Science in Computer Science",
  school: "University of Central Missouri",
  location: "Warrensburg, MO",
  period: "Graduated Dec 2024",
  courses: ["Advanced Algorithms", "Distributed Systems", "Cloud Computing", "Database Management", "Machine Learning"],
};

function Experience() {
  return (
    <section id="experience" className="bg-black text-white py-24 px-8">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Work Experience */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gray-800"></div>

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-12 md:pl-16">
                {/* Dot */}
                <div className="absolute left-2.5 md:left-4 top-1.5 w-3 h-3 rounded-full bg-blue-500 border-2 border-black ring-2 ring-blue-500/30"></div>

                <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-blue-400 font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-right text-sm text-gray-400">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed">
                        <span className="text-blue-500 mt-1 flex-shrink-0">▹</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, j) => (
                      <span key={j} className="px-3 py-1 bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-blue-400">Education</h3>
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
              <div>
                <h4 className="text-lg font-bold text-white">{education.degree}</h4>
                <p className="text-blue-400">{education.school}</p>
                <p className="text-gray-500 text-sm">{education.location}</p>
              </div>
              <span className="text-sm text-gray-400 sm:text-right">{education.period}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {education.courses.map((c, i) => (
                <span key={i} className="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-xs border border-gray-700">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;
