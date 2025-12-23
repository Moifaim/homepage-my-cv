import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Target, Calendar, MapPin, ChevronRight, Rocket } from "lucide-react";

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
    degree: "Bac Professionnel ELEEC",
    institution: "Lycée Professionnel Paul Le Rolland",
    period: "2015 - 2018",
    location: "Drancy",
    description: "Électrotechnique, Énergie, Équipements Communicants",
    courses: [
      "Lecture de plans, câblage, installation d'équipements électriques",
      "Mise en sécurité et conformité des installations",
      "Initiation à l'automatisme et à la domotique",
    ],
  },
];

const certifications = [
  { name: "BTS SIO option SISR", issuer: "AFTEC Orléans", date: "2025 (en cours)" },
  { name: "Titre Professionnel Technicien Support", issuer: "Cformat Pro", date: "2021" },
];

const Education = () => {
  return (
    <div className="min-h-screen py-16 relative z-10">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <header className="mb-16">
          <div className="glass px-4 py-2 rounded-xl w-fit mb-6">
            <code className="text-primary text-sm font-mono">cat /etc/education/diplomas.conf</code>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Formation</span>
            <span className="text-foreground"> & Diplômes</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Parcours académique et certifications
          </p>
        </header>

        {/* Future Goal - Cybersecurity Master */}
        <section className="mb-12">
          <div className="cyber-card border-secondary/30 relative group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-t-2xl"></div>
            <div className="flex items-start gap-5">
              <div className="p-3 glass rounded-xl">
                <Target className="h-7 w-7 text-secondary" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">
                  <span className="gradient-text-accent">Objectif: Master Cybersécurité</span>
                </h2>
                <p className="text-muted-foreground mb-4">
                  Passionné par la cybersécurité, je recherche une alternance Bac+3 à Bac+5 
                  pour me spécialiser dans ce domaine en constante évolution.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Pentest", "SOC", "SIEM", "Forensics", "Ethical Hacking"].map((skill) => (
                    <span key={skill} className="cyber-badge" style={{ borderColor: 'hsl(280 100% 65% / 0.3)', color: 'hsl(280 100% 70%)' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <Rocket className="h-12 w-12 text-secondary/20 hidden md:block animate-float" />
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 glass rounded-lg">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold gradient-text">Diplômes</h2>
          </div>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <article
                key={index}
                className="cyber-card group"
              >
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:gradient-text transition-all">
                        {edu.degree}
                      </h3>
                      <p className="text-primary font-medium mt-1">{edu.institution}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground">{edu.description}</p>

                  <ul className="space-y-2">
                    {edu.courses.map((course, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 glass rounded-lg">
              <Award className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold gradient-text">Certifications</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="cyber-card"
              >
                <h3 className="font-medium text-foreground mb-2">{cert.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>
                <span className="cyber-badge">{cert.date}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <div className="glass px-6 py-3 rounded-xl inline-block">
            <code className="text-muted-foreground text-sm font-mono">
              [EOF] Ready for cybersecurity specialization
            </code>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Education;
