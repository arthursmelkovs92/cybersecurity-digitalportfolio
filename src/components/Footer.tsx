import { Github, Linkedin, Mail, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="py-16 px-6 bg-[#2C2C2C]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 pb-8 border-b border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <p className="text-white/60 text-sm uppercase tracking-wide mb-2">Get in Touch</p>
              <a
                href="mailto:arthursmelkovs@outloook.com"
                className="text-white text-lg hover:text-[#7A9B7E] transition-colors duration-300"
              >
                arthursmelkovs@outloook.com
              </a>
            </div>
            <p className="text-white/50 text-sm">Available for cybersecurity projects and consulting</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#7A9B7E] rounded-lg">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-serif text-lg">Secure. Reliable. Professional.</p>
              <p className="text-white/60 text-sm">Building tomorrow's secure systems today</p>
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/arthur-smelkovs-785543146"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:arthursmelkovs@outloook.com"
              className="p-3 bg-[#7A9B7E] rounded-lg text-white hover:bg-[#7A9B7E]/90 transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} All rights reserved. Built with security in mind.
          </p>
        </div>
      </div>
    </footer>
  );
}
