import { Award, Briefcase, BookOpen } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  items: string[];
}

const skills: SkillCategory[] = [
  {
    title: "Security & Compliance",
    icon: Award,
    items: [
      "Network Security & Firewalls",
      "Penetration Testing",
      "Vulnerability Assessment",
      "OWASP Top 10",
      "Incident Response",
      "Risk Management",
      "Compliance (ISO 27001, GDPR, HIPAA)",
      "Zero Trust Architecture"
    ]
  },
  {
    title: "Technical Expertise",
    icon: Briefcase,
    items: [
      "Python & JavaScript/TypeScript",
      "Cloud Security (AWS, Azure, GCP)",
      "Docker & Kubernetes",
      "CI/CD Pipelines",
      "API Security",
      "Database Security",
      "Cryptography & Encryption",
      "System Architecture Design"
    ]
  },
  {
    title: "Certifications & Education",
    icon: BookOpen,
    items: [
      "CompTIA Security+",
      "Correlation One Cybersecurity Analyst Boot Camp",
      "HND Level 5 Network Engineer",
      "HNC Level 4 in Computer Systems & Development"
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-serif text-[#2C2C2C] mb-6">
            Skills & Qualifications
          </h2>
          <p className="text-lg text-[#2C2C2C]/70 max-w-2xl mx-auto">
            A comprehensive overview of expertise, technical skills, and professional certifications
            in cybersecurity and IT infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-[#F5F1EB] to-white rounded-2xl p-8 border border-[#7A9B7E]/20 hover:shadow-xl hover:shadow-[#7A9B7E]/10 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#7A9B7E]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative space-y-6">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="p-3 bg-[#7A9B7E]/10 rounded-lg group-hover:bg-[#7A9B7E]/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-[#7A9B7E]" />
                    </div>
                    <h3 className="text-2xl font-serif text-[#2C2C2C]">
                      {category.title}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {category.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#7A9B7E] mt-2 flex-shrink-0"></div>
                        <span className="text-[#2C2C2C]/80 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
