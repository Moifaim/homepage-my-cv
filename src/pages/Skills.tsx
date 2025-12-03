import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    category: "Systèmes & Serveurs",
    skills: [
      { name: "Windows Server", level: 85 },
      { name: "Debian / Linux", level: 80 },
      { name: "Active Directory", level: 85 },
      { name: "Intune / Jamf", level: 80 },
    ],
  },
  {
    category: "Réseaux & Sécurité",
    skills: [
      { name: "LAN / WAN / VPN", level: 80 },
      { name: "OpenVPN", level: 75 },
      { name: "Apache / Nginx", level: 70 },
      { name: "Squid Proxy", level: 70 },
    ],
  },
  {
    category: "Virtualisation & Supervision",
    skills: [
      { name: "Hyper-V / VMware", level: 80 },
      { name: "Centreon", level: 75 },
      { name: "GLPI", level: 85 },
      { name: "ServiceNow", level: 80 },
    ],
  },
  {
    category: "Outils & Langues",
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
  "Curieux", "Rigoureux", "Motivé", "Travail d'équipe", "Méthode Agile", "Autonomie", "Communication", "Résolution de problèmes"
];

const Skills = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Compétences & Expertise</h1>
          <p className="text-xl text-muted-foreground">
            Compétences techniques en administration systèmes et réseaux
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Compétences Techniques</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Technologies & Outils</h2>
          <Card className="p-6">
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-base py-2 px-4 bg-primary/10 text-primary hover:bg-primary/20 transition-all"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        </div>

        {/* Soft Skills */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Qualités Personnelles</h2>
          <Card className="p-6">
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-base py-2 px-4 bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 transition-all"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;
