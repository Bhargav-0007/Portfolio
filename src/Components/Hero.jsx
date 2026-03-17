function Hero() {
  return (
<section className="relative min-h-screen flex items-center justify-center bg-black text-white px-8 pt-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute z-0 w-[500px] h-[500px] bg-blue-500 opacity-20 blur-3xl rounded-full top-[-100px] left-[-100px]"></div>

<div className="absolute z-0 w-[400px] h-[400px] bg-purple-500 opacity-20 blur-3xl rounded-full bottom-[-100px] right-[-100px]"></div>
      {/* Content */}
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl w-full">
        {/* LEFT */}
        <div className="md:w-1/2 text-center md:text-left">

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Hi, I'm <span className="text-blue-500">Bhargav</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8">
Full Stack Java Developer specializing in Spring Boot, Microservices, and React, with experience building secure, high-performance systems handling 500K+ requests/day. Passionate about scalable architecture, cloud deployment (AWS), and performance optimization.
          </p>

          <div className="flex gap-4 justify-center md:justify-start flex-wrap">

            <a
              href="#"
              className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              GitHub
            </a>

            <a
                href="https://www.linkedin.com/in//venu-bhargav-pavuluri-aabb6634b"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black"
            >
            LinkedIn
            </a>

            <a
                href="/resume.docx"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300"
            >
            Resume
            </a>
          </div>
        </div>

        {/* RIGHT - IMAGE */}
        <div className="md:w-1/2 flex justify-center mt-12 md:mt-0 relative">

          {/* Glow Ring */}
          <div className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full bg-blue-500 opacity-20 blur-2xl"></div>

          <img
            src="/profile.jpg"
            alt="Bhargav"
            className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-gray-700 shadow-2xl"
          />

        </div>

      </div>

    </section>
  )
}

export default Hero