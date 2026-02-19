export default function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-[#F5F1EB] via-[#F5F1EB] to-transparent pt-12 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#7A9B7E]/5 rounded-full blur-3xl"></div>

          <div className="relative text-center space-y-4">
            <div className="inline-flex flex-col items-center gap-3">
              <div className="h-1 w-12 bg-[#7A9B7E] rounded-full"></div>
              <h1 className="text-6xl lg:text-7xl font-serif text-[#2C2C2C] tracking-tight">
                Arthur Smelkovs
              </h1>
              <div className="h-1 w-12 bg-[#7A9B7E] rounded-full"></div>
            </div>

            <p className="text-lg text-[#2C2C2C]/70 font-light tracking-wide">
              Cybersecurity & IT Solutions Architect
            </p>

            <nav className="pt-8 flex flex-wrap justify-center gap-3 lg:gap-4">
              <a
                href="#projects"
                className="px-6 py-2 rounded-lg bg-[#2C2C2C] text-white hover:bg-[#2C2C2C]/90 transition-all duration-300 text-sm font-medium"
              >
                My Projects
              </a>
              <a
                href="#skills"
                className="px-6 py-2 rounded-lg bg-white/60 backdrop-blur-sm border border-[#2C2C2C]/10 text-[#2C2C2C] hover:bg-white/80 transition-all duration-300 text-sm font-medium"
              >
                Skills & Qualifications
              </a>
              <a
                href="#contact"
                className="px-6 py-2 rounded-lg bg-[#7A9B7E] text-white hover:bg-[#7A9B7E]/90 transition-all duration-300 text-sm font-medium"
              >
                Contact Me
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
