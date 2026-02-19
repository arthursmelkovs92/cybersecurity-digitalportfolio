import { Lock, Server, Code, Shield, Terminal, Database, ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  icon: React.ElementType;
  tags: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Splunk & MS Sentinel lab",
    category: "Cybersecurity",
    description: "Enterprise-grade authentication platform with multi-factor authentication, biometric integration, and advanced threat detection.",
    icon: Lock,
    tags: ["OAuth 2.0", "JWT", "MFA", "Zero Trust"],
  },
  {
    id: 2,
    title: "IPS snort home lab",
    category: "Security Monitoring",
    description: "Real-time network monitoring solution using machine learning to detect and prevent intrusion attempts and anomalous behavior.",
    icon: Shield,
    tags: ["Python", "TensorFlow", "Packet Analysis", "IDS"],
  },
  {
    id: 3,
    title: "Tryhack me labs",
    category: "DevSecOps",
    description: "Automated security scanning and compliance checking for cloud infrastructure with CI/CD integration and instant alerts.",
    icon: Server,
    tags: ["AWS", "Terraform", "Docker", "CI/CD"],
  },
];

export default function ProjectShowcase() {
  return (
    <section id="projects" className="py-32 px-6 bg-gradient-to-b from-[#F5F1EB] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-serif text-[#2C2C2C] mb-6">
            Project Showcase
          </h2>
          <p className="text-lg text-[#2C2C2C]/70 max-w-2xl mx-auto">
            A curated selection of security-focused projects demonstrating expertise
            in cybersecurity, secure architecture, and robust system design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="group relative bg-white/40 backdrop-blur-md rounded-2xl p-8 border border-white/60 hover:shadow-2xl hover:shadow-[#7A9B7E]/10 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#7A9B7E]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-[#7A9B7E]/10 rounded-xl group-hover:bg-[#7A9B7E]/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-[#7A9B7E]" />
                    </div>
                    <span className="text-xs font-medium text-[#2C2C2C]/60 tracking-wider uppercase">
                      {project.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif text-[#2C2C2C] mb-3 group-hover:text-[#7A9B7E] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-[#2C2C2C]/70 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium text-[#2C2C2C]/70 bg-white/60 rounded-full border border-[#2C2C2C]/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#2C2C2C] text-white rounded-lg text-sm font-medium hover:bg-[#2C2C2C]/90 transition-colors duration-300">
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </button>
                    <button className="p-2 bg-white/60 border border-[#2C2C2C]/10 rounded-lg hover:bg-white/80 transition-colors duration-300">
                      <Github className="w-4 h-4 text-[#2C2C2C]" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
