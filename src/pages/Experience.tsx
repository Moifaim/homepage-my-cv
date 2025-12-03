import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Chef d'Équipe",
    company: "The King Cut",
    period: "2023 - Aujourd'hui",
    location: "Paris, France",
    description: "Intégré au sein d'une équipe de coiffeurs, responsable de la gestion et de l'amélioration de l'expérience client.",
    achievements: [
      "Gestion et supervision d'une équipe de coiffeurs",
      "Participation à des projets d'évolution de l'expérience client",
      "Collaboration en méthode agile avec les équipes techniques et métiers",
    ],
    technologies: ["Management", "Gestion d'équipe", "Expérience client", "Méthode Agile"],
  },
  {
    title: "Vendeur",
    company: "Nike",
    period: "2019 - 2022",
    location: "Tours, France",
    description: "Accueil et conseil de la clientèle dans un environnement retail dynamique.",
    achievements: [
      "Développement d'un excellent sens du relationnel",
      "Accueil et conseil personnalisé de la clientèle",
      "Garant de la qualité du service client",
      "Respect des délais de livraison",
    ],
    technologies: ["Vente", "Conseil client", "Service client", "Retail"],
  },
  {
    title: "Chef d'Équipe",
    company: "OCV Barber",
    period: "2018 - 2019",
    location: "Orléans, France",
    description: "Poste orienté gestion et management d'une équipe de professionnels.",
    achievements: [
      "Planification des tâches et répartition des rôles au sein de l'équipe",
      "Suivi des indicateurs de performance et gestion des imprévus",
      "Garant de la qualité du service client et du respect des délais",
      "Formation des nouveaux collaborateurs",
    ],
    technologies: ["Management", "Planification", "Formation", "Performance"],
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Expérience Professionnelle</h1>
          <p className="text-xl text-muted-foreground">
            Mon parcours professionnel et mes réalisations
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-lg text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="text-muted-foreground text-sm">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>

                <p className="text-muted-foreground">{exp.description}</p>

                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Réalisations clés :</h4>
                  <ul className="space-y-1 ml-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-muted-foreground list-disc">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Compétences :</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
