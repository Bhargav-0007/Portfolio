function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-20 px-8 text-center">

      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

      <p className="text-gray-400 mb-8">
        Feel free to reach out for opportunities or collaborations.
      </p>

      <div className="flex flex-col gap-4 items-center">

        <p>Email: bhargavpavuluri13@gmail.com</p>

        <div className="flex gap-6">
          <a href="#" className="text-blue-500">GitHub</a>
          <a href="#" className="text-blue-500">LinkedIn</a>
        </div>

      </div>

    </section>
  )
}

export default Contact