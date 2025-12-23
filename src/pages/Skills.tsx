import { Shield, Server, Network, Wrench, Zap } from "lucide-react";

const skillCategories = [
  {
    category: "Systèmes & Serveurs",
    icon: Server,
    color: "primary",
    skills: [
      { name: "Windows Server", level: 85 },
      { name: "Debian / Linux", level: 80 },
      { name: "Active Directory", level: 85 },
      { name: "Intune / Jamf", level: 80 },
    ],
  },
  {
    category: "Réseaux & Sécurité",
    icon: Network,
    color: "secondary",
    skills: [
      { name: "LAN / WAN / VPN", level: 80 },
      { name: "OpenVPN", level: 75 },
      { name: "Apache / Nginx", level: 70 },
      { name: "Squid Proxy", level: 70 },
    ],
  },
  {
    category: "Virtualisation & Supervision",
    icon: Shield,
    color: "accent",
    skills: [
      { name: "Hyper-V / VMware", level: 80 },
      { name: "Centreon", level: 75 },
      { name: "GLPI", level: 85 },
      { name: "ServiceNow", level: 80 },
    ],
  },
  {
    category: "Outils & Langues",
    icon: Wrench,
    color: "primary",
    skills: [
      { name: "Office 365", level: 90 },
      { name: "Français", level: 100 },
      { name: "Anglais (C1)", level: 85 },
    ],
  },
];

const technologies = [
  "Windows Server", "Debian", "Active Directory", "Intune", "Jamf",
  "OpenVPN", "Centreon", "ServiceNow", "GLPI", "Apache", "Nginx",
  "Squid", "Hyper-V", "VMware", "Office 365"
];

const softSkills = [
  "Curieux", "Rigoureux", "Motivé", "Travail d'équipe", 
  "Méthode Agile", "Autonomie", "Communication", "Résolution de problèmes"
];

const cyberInterests = [
  { name: "Pentesting", icon: "🔓" },
  { name: "Analyse de vulnérabilités", icon: "🔍" },
  { name: "SOC/SIEM", icon: "📊" },
  { name: "Forensics", icon: "🔬" },
  { name: "Ethical Hacking", icon: "🎩" },
  { name: "Hardening", icon: "🛡️" },
];

const ProgressBar = ({ value, color = "primary" }: { value: number; color?: string }) => {
  return (
    <div className="relative h-2 bg-muted rounded-full overflow-hidden">
      <div 
        className="absolute top-0 left-0 h-full rounded-full transition-all duration-500"
        style={{ 
          width: `${value}%`,
          background: color === "primary" 
            ? "linear-gradient(90deg, hsl(165 100% 50%), hsl(200 100% 50%))"
            : color === "secondary"
            ? "linear-gradient(90deg, hsl(200 100% 50%), hsl(220 100% 60%))"
            : "linear-gradient(90deg, hsl(280 100% 65%), hsl(320 100% 60%))"
        }}
      />
    </div>
  );
};

const Skills = () => {
  return (
    <div className="min-h-screen py-16 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <header className="mb-16">
          <div className="glass px-4 py-2 rounded-xl w-fit mb-6">
            <code className="text-primary text-sm font-mono">cat /proc/skills</code>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Compétences</span>
            <span className="text-foreground"> & Expertise</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Stack technique et savoir-faire
          </p>
        </header>

        {/* Technical Skills Grid */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <article
                  key={index}
                  className="cyber-card group"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 glass rounded-lg group-hover:scale-110 transition-transform">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-lg font-semibold gradient-text">
                      {category.category}
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-foreground">{skill.name}</span>
                          <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                        </div>
                        <ProgressBar value={skill.level} color={category.color} />
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Cybersecurity Interests */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 glass rounded-lg">
              <Shield className="h-5 w-5 text-secondary" />
            </div>
            <h2 className="text-xl font-bold">
              <span className="text-secondary">Centres d'intérêt</span> Cybersécurité
            </h2>
          </div>
          <div className="cyber-card border-secondary/20">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {cyberInterests.map((interest, index) => (
                <div
                  key={index}
                  className="glass p-4 rounded-xl text-center group hover:scale-105 transition-all cursor-default"
                >
                  <span className="text-2xl mb-2 block">{interest.icon}</span>
                  <span className="text-sm text-foreground">{interest.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 glass rounded-lg">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold gradient-text">Technologies</h2>
          </div>
          <div className="cyber-card">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="cyber-badge hover:scale-105 transition-transform cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Soft Skills */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 glass rounded-lg">
              <Server className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold gradient-text">Soft Skills</h2>
          </div>
          <div className="cyber-card">
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm rounded-full glass text-foreground hover:scale-105 transition-transform cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <div className="glass px-6 py-3 rounded-xl inline-block">
            <code className="text-muted-foreground text-sm font-mono">
              [EOF] System ready for cybersecurity challenges
            </code>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Skills;
