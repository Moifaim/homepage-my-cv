import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Apprenti Administrateur Systèmes et Réseau",
    company: "Cornerstone OnDemand",
    period: "Septembre 2023 - Aujourd'hui",
    location: "Paris, France",
    description: "Intégré au sein de l'équipe IT dans un environnement international.",
    achievements: [
      "Gestion et supervision du parc informatique (postes, serveurs, équipements réseau)",
      "Participation à des projets d'évolution d'infrastructure (migration, déploiement)",
      "Collaboration en méthode agile avec les équipes techniques et métiers",
    ],
    technologies: ["Windows Server", "AD", "Intune", "Jamf", "ServiceNow"],
  },
  {
    title: "Technicien Support Informatique – Niveau 1",
    company: "NES (National Électronique Service)",
    period: "Juin - Août 2023",
    location: "St-Cyr-en-Val, France",
    description: "Poste orienté assistance utilisateur et gestion des incidents.",
    achievements: [
      "Prise en charge des tickets d'assistance de niveau 1 (via GLPI)",
      "Diagnostic et résolution des pannes matérielles/logicielles à distance ou sur site",
      "Suivi des interventions et rédaction de procédures techniques",
    ],
    technologies: ["GLPI", "Support N1", "Diagnostic", "Documentation"],
  },
  {
    title: "Chef d'Équipe Logistique",
    company: "E.Leclerc Drive",
    period: "Août 2021 - Août 2023",
    location: "Orléans, France",
    description: "Encadrement opérationnel d'une équipe logistique.",
    achievements: [
      "Planification des tâches et répartition des rôles au sein de l'équipe",
      "Suivi des indicateurs de performance et gestion des imprévus",
      "Garant de la qualité du service client et du respect des délais de livraison",
      "Formation des nouveaux collaborateurs",
    ],
    technologies: ["Management", "Logistique", "KPIs", "Formation"],
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
                  <h4 className="font-semibold mb-2 text-foreground">Technologies :</h4>
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
