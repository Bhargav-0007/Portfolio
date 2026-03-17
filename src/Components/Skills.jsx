function Skills() {
  return (
    <section id="skills" className="bg-black text-white py-20 px-8 text-center">

      <h2 className="text-4xl font-bold mb-10">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">

        <div className="bg-gray-900 p-6 rounded-lg">Java</div>
        <div className="bg-gray-900 p-6 rounded-lg">Spring Boot</div>
        <div className="bg-gray-900 p-6 rounded-lg">React</div>
        <div className="bg-gray-900 p-6 rounded-lg">AWS</div>

        <div className="bg-gray-900 p-6 rounded-lg">MySQL</div>
        <div className="bg-gray-900 p-6 rounded-lg">MongoDB</div>
        <div className="bg-gray-900 p-6 rounded-lg">Docker</div>
        <div className="bg-gray-900 p-6 rounded-lg">REST APIs</div>

      </div>

    </section>
  )
}

export default Skills