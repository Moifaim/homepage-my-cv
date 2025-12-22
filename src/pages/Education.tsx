import { Badge } from "@/components/ui/badge";
import { Terminal, GraduationCap, Award, Target } from "lucide-react";

const education = [
  {
    degree: "BTS SIO – Services Informatiques aux Organisations (option SISR)",
    institution: "AFTEC",
    period: "Septembre 2023 - Mai 2025",
    location: "Orléans",
    description: "Formation axée sur l'administration des systèmes et des réseaux (SISR)",
    courses: [
      "Configuration et sécurisation des réseaux (LAN, WAN, VPN)",
      "Déploiement de serveurs (Linux, Windows Server)",
      "Virtualisation (Hyper-V, VMware), supervision, sauvegarde",
      "Gestion de projets informatiques et maintenance d'infrastructure",
    ],
  },
  {
    degree: "Technicien Support Informatique – Titre Professionnel",
    institution: "Cformat Pro",
    period: "Avril 2019 - Janvier 2021",
    location: "Cergy",
    description: "Formation certifiante orientée support IT utilisateur",
    courses: [
      "Diagnostic et résolution des incidents logiciels et matériels",
      "Gestion de tickets, intervention sur site ou à distance",
      "Installation et configuration de postes de travail",
      "Suivi de parc informatique et assistance réseau de niveau 1",
    ],
  },
  {
    degree: "Bac Professionnel ELEEC – Électrotechnique, Énergie, Équipements Communicants",
    institution: "Lycée Professionnel Paul Le Rolland",
    period: "2015 - 2018",
    location: "Drancy",
    description: "Apprentissage des fondamentaux de l'électricité et de l'électronique",
    courses: [
      "Lecture de plans, câblage, installation d'équipements électriques",
      "Mise en sécurité et conformité des installations",
      "Initiation à l'automatisme et à la domotique",
    ],
  },
];

const certifications = [
  { name: "BTS SIO option SISR", issuer: "AFTEC Orléans", date: "2025 (en cours)" },
  { name: "Titre Professionnel Technicien Support Informatique", issuer: "Cformat Pro", date: "2021" },
];

const Education = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Terminal className="h-6 w-6 text-primary" />
            <code className="text-primary text-sm">cat /etc/education/diplomas.conf</code>
          </div>
          <h1 className="text-3xl font-bold font-mono text-glow mb-2">
            FORMATION
          </h1>
          <p className="text-muted-foreground font-mono text-sm">
            // Parcours académique et certifications
          </p>
        </div>

        {/* Future Goal - Cybersecurity Master */}
        <div className="cyber-card border-secondary mb-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
          <div className="flex items-start gap-4">
            <Target className="h-8 w-8 text-secondary flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold font-mono text-secondary text-glow-cyan">
                OBJECTIF: MASTER CYBERSÉCURITÉ
              </h3>
              <p className="text-muted-foreground font-mono text-sm mt-2">
                Passionné par la cybersécurité, je recherche une alternance Bac+3 à Bac+5 
                pour me spécialiser dans ce domaine en constante évolution.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {["Pentest", "SOC", "SIEM", "Forensics", "Ethical Hacking"].map((skill) => (
                  <Badge key={skill} variant="outline" className="font-mono text-xs border-secondary/50 text-secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold font-mono text-primary">
              ./diplomes/
            </h2>
          </div>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="cyber-card group hover:border-secondary transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold font-mono text-foreground">
                        {edu.degree}
                      </h3>
                      <p className="text-secondary font-mono text-sm">{edu.institution}</p>
                    </div>
                    <div className="text-muted-foreground text-xs font-mono">
                      <p className="text-primary">{edu.period}</p>
                      <p>{edu.location}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm font-mono">{edu.description}</p>

                  <div>
                    <h4 className="font-mono text-xs text-primary mb-2">
                      $ cat modules.txt
                    </h4>
                    <ul className="space-y-1 ml-4">
                      {edu.courses.map((course, i) => (
                        <li key={i} className="text-muted-foreground text-sm font-mono flex items-start gap-2">
                          <span className="text-secondary">→</span>
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Award className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold font-mono text-primary">
              ./certifications/
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="cyber-card hover:border-primary transition-all duration-300"
              >
                <div className="space-y-2">
                  <h3 className="font-mono text-sm text-foreground">{cert.name}</h3>
                  <p className="text-xs text-muted-foreground font-mono">{cert.issuer}</p>
                  <Badge variant="outline" className="text-xs font-mono border-primary/50 text-primary">
                    {cert.date}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <code className="text-muted-foreground text-xs font-mono">
            [EOF] education.conf - Ready for cybersecurity specialization
          </code>
        </div>
      </div>
    </div>
  );
};

export default Education;
