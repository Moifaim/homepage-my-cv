import { Badge } from "@/components/ui/badge";
import { Terminal, Shield, Server, Network, Wrench } from "lucide-react";

const skillCategories = [
  {
    category: "Systèmes & Serveurs",
    icon: Server,
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
  "Pentesting", "Analyse de vulnérabilités", "SOC/SIEM", 
  "Forensics", "Ethical Hacking", "Hardening"
];

const ProgressBar = ({ value }: { value: number }) => {
  const filled = Math.floor(value / 10);
  const empty = 10 - filled;
  
  return (
    <div className="font-mono text-xs flex items-center gap-2">
      <span className="text-primary">
        {"█".repeat(filled)}
        <span className="text-muted-foreground/30">{"░".repeat(empty)}</span>
      </span>
      <span className="text-muted-foreground w-8">{value}%</span>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Terminal className="h-6 w-6 text-primary" />
            <code className="text-primary text-sm">cat /proc/skills</code>
          </div>
          <h1 className="text-3xl font-bold font-mono text-glow mb-2">
            COMPÉTENCES & EXPERTISE
          </h1>
          <p className="text-muted-foreground font-mono text-sm">
            // Compétences techniques en administration systèmes et réseaux
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="mb-12">
          <h2 className="text-xl font-bold font-mono text-primary mb-6">
            $ htop --skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="cyber-card hover:border-primary transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold font-mono text-primary">
                      {category.category}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="font-mono text-sm text-foreground">{skill.name}</span>
                        </div>
                        <ProgressBar value={skill.level} />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cybersecurity Interests */}
        <div className="mb-12">
          <h2 className="text-xl font-bold font-mono text-secondary mb-6">
            $ cat ~/.cyber_interests
          </h2>
          <div className="cyber-card border-secondary">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-secondary" />
              <span className="font-mono text-lg text-secondary text-glow-cyan">
                Centres d'intérêt Cybersécurité
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {cyberInterests.map((interest, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-sm py-2 px-4 font-mono border-secondary/50 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all"
                >
                  🔒 {interest}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-12">
          <h2 className="text-xl font-bold font-mono text-primary mb-6">
            $ dpkg --list | grep installed
          </h2>
          <div className="cyber-card">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-sm py-2 px-3 font-mono border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h2 className="text-xl font-bold font-mono text-primary mb-6">
            $ whoami --verbose
          </h2>
          <div className="cyber-card">
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-sm py-2 px-3 font-mono border-muted-foreground/50 text-muted-foreground hover:border-primary hover:text-primary transition-all"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <code className="text-muted-foreground text-xs font-mono">
            [EOF] /proc/skills - System ready for cybersecurity challenges
          </code>
        </div>
      </div>
    </div>
  );
};

export default Skills;
