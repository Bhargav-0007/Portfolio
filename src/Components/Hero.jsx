import { useState, useEffect } from "react";

function Hero() {
  const roles = [
    "Full Stack Java Developer",
    "Spring Boot Specialist",
    "React.js Engineer",
    "Cloud-Native Architect",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: "4+", label: "Years Exp." },
    { value: "500K+", label: "Req / Day" },
    { value: "99.9%", label: "Uptime" },
    { value: "12+", label: "Microservices" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white px-8 pt-20 overflow-hidden">

      {/* Background Glows */}
      <div className="absolute z-0 w-[500px] h-[500px] bg-blue-500 opacity-20 blur-3xl rounded-full top-[-100px] left-[-100px]"></div>
      <div className="absolute z-0 w-[400px] h-[400px] bg-purple-500 opacity-20 blur-3xl rounded-full bottom-[-100px] right-[-100px]"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl w-full gap-12">

        {/* LEFT */}
        <div className="md:w-1/2 text-center md:text-left">

          <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-4">
            Welcome to my portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
            Hi, I'm <span className="text-blue-500">Bhargav</span>
          </h1>

          {/* Animated Role */}
          <div className="h-10 mb-6 overflow-hidden">
            <p
              className="text-2xl md:text-3xl font-semibold text-gray-300"
              style={{ opacity: visible ? 1 : 0, transition: "opacity 0.4s ease" }}
            >
              {roles[roleIndex]}
            </p>
          </div>

          <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
            Building enterprise-grade microservices and modern React frontends. Currently at{" "}
            <span className="text-white font-semibold">Wells Fargo</span>, architecting systems
            handling{" "}
            <span className="text-blue-400 font-semibold">500K+ requests/day</span> at{" "}
            <span className="text-blue-400 font-semibold">99.9% uptime</span>.
          </p>

          {/* Inline Stats */}
          <div className="flex gap-8 mb-10 justify-center md:justify-start flex-wrap">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-extrabold text-blue-400">{s.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center md:justify-start flex-wrap">
            <a
              href="https://github.com/Bhargav-0007"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/venu-bhargav-pavuluri-aabb6634b"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition duration-300 font-semibold"
            >
              LinkedIn
            </a>
            <a
              href="/Bhargav_Pavuluri.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 font-semibold"
            >
              Resume
            </a>
          </div>
        </div>

        {/* RIGHT — Profile Image */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full bg-blue-500 opacity-20 blur-2xl"></div>
          <img
            src="/profile.jpg"
            alt="Bhargav Pavuluri"
            className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20"
          />
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <svg
          className="w-5 h-5 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

    </section>
  );
}

export default Hero;
