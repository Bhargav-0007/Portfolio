function Navbar() {
  return (
<nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md text-white px-8 py-4 flex justify-between items-center border-b border-gray-800">      <h1 className="text-xl font-bold">Bhargav</h1>

      <div className="flex gap-6">
        <a href="#about" className="hover:text-gray-400">About</a>
        <a href="#skills" className="hover:text-gray-400">Skills</a>
        <a href="#projects" className="hover:text-gray-400">Projects</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar