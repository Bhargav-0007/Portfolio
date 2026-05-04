function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      gradient: "from-blue-600 to-blue-800",
      badge: "bg-blue-500/10 text-blue-300 border-blue-500/30",
      skills: ["Java 8/11", "JavaScript (ES6+)", "TypeScript", "Python", "SQL"],
    },
    {
      title: "Backend",
      gradient: "from-purple-600 to-purple-800",
      badge: "bg-purple-500/10 text-purple-300 border-purple-500/30",
      skills: ["Spring Boot", "Spring MVC", "Spring Security", "Spring Data JPA", "Hibernate", "JWT", "OAuth2"],
    },
    {
      title: "Frontend",
      gradient: "from-cyan-600 to-cyan-800",
      badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
      skills: ["React.js", "Redux", "Angular", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
    },
    {
      title: "Data & Messaging",
      gradient: "from-green-600 to-green-800",
      badge: "bg-green-500/10 text-green-300 border-green-500/30",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Apache Kafka"],
    },
    {
      title: "Cloud & DevOps",
      gradient: "from-orange-600 to-orange-800",
      badge: "bg-orange-500/10 text-orange-300 border-orange-500/30",
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "Maven", "Gradle", "Git"],
    },
    {
      title: "APIs & Testing",
      gradient: "from-pink-600 to-pink-800",
      badge: "bg-pink-500/10 text-pink-300 border-pink-500/30",
      skills: ["RESTful APIs", "Swagger / OpenAPI", "Postman", "JUnit 5", "Mockito"],
    },
    {
      title: "Architecture & Practices",
      gradient: "from-indigo-600 to-indigo-800",
      badge: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
      skills: ["Microservices", "SOLID Principles", "Design Patterns", "CI/CD Automation", "Agile / Scrum", "System Design", "Application Resiliency"],
    },
  ];

  return (
    <section id="skills" className="bg-black text-white py-24 px-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-xl mx-auto">
            A full-stack toolkit spanning backend systems, frontend interfaces, cloud infrastructure,
            and data engineering — built across 4+ years of enterprise development.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <div
              key={i}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-colors duration-300"
            >
              <div className={`bg-gradient-to-r ${cat.gradient} px-5 py-3`}>
                <h3 className="font-bold text-white tracking-wide">{cat.title}</h3>
              </div>
              <div className="p-5 flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <span
                    key={j}
                    className={`px-3 py-1 rounded-full text-sm border ${cat.badge} hover:scale-105 transition-transform duration-200 cursor-default`}
                  >
                    {skill}
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

export default Skills;
