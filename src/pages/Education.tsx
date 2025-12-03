import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Formation APS + Opérateur Rayon X – Titre Professionnel",
    institution: "BCFormation",
    period: "Mai 2024 - Août 2024",
    location: "Saran",
    description: "Formation certifiante orientée sécurité",
    courses: ["Sensibilisation engins explosifs", "Analyse images Rayon X", "Rigueur missions", "Mesures sécurité"],
  },
  {
    degree: "Formation Employé Commercial en Magasin",
    institution: "INFREP",
    period: "2012 - 2013",
    location: "Orléans",
    description: "Formation axée sur le développement des compétences en relation client",
    courses: ["Sens du service", "Animation et fidélisation", "Relation client", "Gestion de projets"],
  },
  {
    degree: "Bac Professionnel Vente – Prospection et Négociation Client",
    institution: "Lycée Professionnel Jean Lurçat",
    period: "2007 - 2011",
    location: "Orléans",
    description: "Apprentissage des fondamentaux de la vente et la relation client",
    courses: ["Relation client", "Sens de l'accueil", "Qualité d'écoute", "Gestion espace de vente"],
  },
];

const certifications = [
  { name: "Titre Professionnel APS + Opérateur Rayon X", issuer: "BCFormation", date: "2024" },
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

        {/* Degrees Section */}
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
                    <h3 className="text-2xl font-semibold text-foreground">{edu.degree}</h3>
                    <p className="text-lg text-secondary font-medium">{edu.institution}</p>
                  </div>
                  <div className="text-muted-foreground text-sm">
                    <p>{edu.period}</p>
                    <p>{edu.location}</p>
                  </div>
                </div>


                <p className="text-muted-foreground">{edu.description}</p>

                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Contenu de la formation :</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, i) => (
                      <Badge key={i} variant="secondary" className="bg-secondary/10 text-secondary hover:bg-secondary/20">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications Section */}
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
