import { Shield } from 'lucide-react';

export default function TryHackMe() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-[#F5F1EB]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-serif text-[#2C2C2C] mb-6">
            TryHackMe
          </h2>
          <p className="text-lg text-[#2C2C2C]/70 max-w-2xl mx-auto">
            Explore my cybersecurity journey and completed challenges on TryHackMe
          </p>
        </div>

        <div className="flex justify-center">
          <a
            href="https://tryhackme.com/p/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-lg font-semibold text-white bg-[#7A9B7E] hover:bg-[#6A8B6E] transition-all duration-300 hover:shadow-lg hover:shadow-[#7A9B7E]/30 transform hover:scale-105"
          >
            <Shield className="w-5 h-5" />
            <span>View My Profile</span>
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-lg transition-colors duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  );
}
