function About() {
  const stats = [
    { value: "4+", label: "Years Experience" },
    { value: "500K+", label: "Daily Requests Handled" },
    { value: "99.9%", label: "System Uptime" },
    { value: "2", label: "Enterprise Companies" },
  ];

  const strengths = [
    {
      icon: "🏗️",
      title: "Microservices Architecture",
      desc: "Designing scalable distributed systems with Spring Boot and event-driven patterns using Apache Kafka.",
    },
    {
      icon: "🔐",
      title: "Enterprise Security",
      desc: "Implementing JWT & OAuth2 authentication flows via Spring Security, reducing unauthorized access by 40%.",
    },
    {
      icon: "☁️",
      title: "Cloud-Native Deployments",
      desc: "Containerizing services with Docker, orchestrating with Kubernetes on AWS & Azure, with Jenkins CI/CD pipelines.",
    },
    {
      icon: "⚡",
      title: "Performance Optimization",
      desc: "Strategic database indexing, Redis caching, and query tuning cutting response times by 25–30%.",
    },
  ];

  return (
    <section id="about" className="bg-gray-900 text-white py-24 px-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700 hover:border-blue-500 transition-colors duration-300"
            >
              <div className="text-3xl font-extrabold text-blue-400 mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — Summary */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Who I Am</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              I'm a{" "}
              <span className="text-white font-semibold">Java Full Stack Developer</span> with 4+
              years of experience building enterprise-grade microservices and modern React.js
              frontends. Currently at{" "}
              <span className="text-blue-400 font-semibold">Wells Fargo</span>, I architect systems
              processing 500K+ daily requests at 99.9% uptime.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              My backend expertise centers on{" "}
              <span className="text-white font-semibold">Spring Boot</span>,{" "}
              <span className="text-white font-semibold">Apache Kafka</span>, and enterprise
              security patterns (JWT/OAuth2). Prior to that, I built scalable RESTful APIs at{" "}
              <span className="text-blue-400 font-semibold">Optum</span> serving 100K+ active users
              with zero-downtime deployments.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              On the frontend, I build responsive, high-performance interfaces with{" "}
              <span className="text-white font-semibold">React, Redux, and TypeScript</span>. I
              hold an{" "}
              <span className="text-white font-semibold">M.S. in Computer Science</span> from the
              University of Central Missouri.
            </p>
            <a
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 rounded-lg font-semibold"
            >
              Get In Touch
            </a>
          </div>

          {/* Right — What I Bring */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-400">What I Bring</h3>
            <div className="space-y-4">
              {strengths.map((s, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-300"
                >
                  <span className="text-2xl flex-shrink-0">{s.icon}</span>
                  <div>
                    <div className="font-semibold text-white mb-1">{s.title}</div>
                    <div className="text-gray-400 text-sm leading-relaxed">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
