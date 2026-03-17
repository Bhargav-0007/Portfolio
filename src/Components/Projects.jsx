function Projects() {
  return (
    <section id="projects" className="bg-gray-900 text-white py-20 px-8">

      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* Project 1 */}
        <div className="bg-black p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">E-Commerce App</h3>
          <p className="text-gray-400 mb-4">
            Full stack application with Spring Boot and React.
          </p>
          <a href="#" className="text-blue-500">View Code</a>
        </div>

        {/* Project 2 */}
        <div className="bg-black p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Job Tracker</h3>
          <p className="text-gray-400 mb-4">
            Track job applications with backend APIs.
          </p>
          <a href="#" className="text-blue-500">View Code</a>
        </div>

        {/* Project 3 */}
        <div className="bg-black p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Chat App</h3>
          <p className="text-gray-400 mb-4">
            Real-time chat using WebSockets.
          </p>
          <a href="#" className="text-blue-500">View Code</a>
        </div>

      </div>

    </section>
  )
}

export default Projects