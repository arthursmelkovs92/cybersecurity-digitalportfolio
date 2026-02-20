import { Shield, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="space-y-8 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-[#2C2C2C]/10">
            <Shield className="w-4 h-4 text-[#7A9B7E]" />
            <span className="text-sm text-[#2C2C2C]/70 font-medium tracking-wide">
              IT Tech • Cybersecurity Enthusiast
            </span>
          </div>

          <div>
            <h1 className="text-5xl lg:text-7xl font-serif text-[#2C2C2C] mb-6 leading-tight">
              IT Tech & Cybersecurity
              <br />
              Engineer
            </h1>
            <div className="w-16 h-1 bg-[#7A9B7E] rounded-full mb-8"></div>
          </div>

          <div className="space-y-6 text-[#2C2C2C]/80 leading-relaxed">
            <p className="text-lg font-serif">
              Hello, I'm a passionate IT professional specializing in building robust,
              secure systems that protect what matters most. With a keen focus on
              cybersecurity, I transform complex challenges into elegant solutions.
            </p>
            <p className="text-base">
              My expertise spans network security, penetration testing, and secure
              application development. I believe that great security shouldn't compromise
              user experience—it should enhance it.
            </p>
            <p className="text-base">
              When I'm not fortifying digital infrastructure, you'll find me exploring
              the latest security frameworks, contributing to open-source projects,
              or sharing knowledge with the tech community.
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-[#2C2C2C] text-white rounded-lg hover:bg-[#2C2C2C]/90 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/arthur-smelkovs-785543146"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-white/60 backdrop-blur-sm border border-[#2C2C2C]/10 text-[#2C2C2C] rounded-lg hover:bg-white/80 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-medium">LinkedIn</span>
            </a>
            <a
              href="mailto:contact@example.com"
              className="group flex items-center gap-2 px-6 py-3 bg-[#7A9B7E] text-white rounded-lg hover:bg-[#7A9B7E]/90 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">Contact</span>
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#7A9B7E]/20 to-[#2C2C2C]/10 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <div className="relative aspect-[4/5] w-full max-w-md rounded-2xl overflow-hidden bg-white/40 backdrop-blur-sm border border-white/60 shadow-2xl">
              <img
                src="/ChatGPT_Image_Feb_19,_2026,_10_17_55_AM.png"
                alt="Professional Portrait"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/40 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
