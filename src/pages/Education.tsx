import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Formation</h1>
          <p className="text-xl text-muted-foreground">
            Mon parcours académique et mes certifications
          </p>
        </div>

        <div className="mb-16 space-y-8">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            Diplômes et Formations
          </h2>
          
          {education.map((edu, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-secondary">
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                    <p className="text-lg text-secondary font-medium">{edu.institution}</p>
                  </div>
                  <div className="text-muted-foreground text-sm">
                    <p>{edu.period}</p>
                    <p>{edu.location}</p>
                  </div>
                </div>

                <p className="text-muted-foreground">{edu.description}</p>

                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Compétences développées :</h4>
                  <ul className="space-y-1 ml-4">
                    {edu.courses.map((course, i) => (
                      <li key={i} className="text-muted-foreground list-disc text-sm">
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Certifications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <Badge variant="outline" className="text-xs">
                    {cert.date}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
