import { Badge } from "@/components/ui/badge";
import { Terminal } from "lucide-react";

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
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Terminal className="h-6 w-6 text-primary" />
            <code className="text-primary text-sm">cat /var/log/experience.log</code>
          </div>
          <h1 className="text-3xl font-bold font-mono text-glow mb-2">
            EXPÉRIENCE PROFESSIONNELLE
          </h1>
          <p className="text-muted-foreground font-mono text-sm">
            // Parcours professionnel et réalisations
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="cyber-card group hover:border-primary transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold font-mono text-foreground group-hover:text-glow transition-all">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-mono text-sm">{exp.company}</p>
                  </div>
                  <div className="text-muted-foreground text-xs font-mono">
                    <p className="text-secondary">{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm font-mono">{exp.description}</p>

                {/* Achievements */}
                <div>
                  <h4 className="font-mono text-xs text-primary mb-2">
                    $ ls -la ./achievements/
                  </h4>
                  <ul className="space-y-1 ml-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-muted-foreground text-sm font-mono flex items-start gap-2">
                        <span className="text-primary">→</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-mono text-xs text-primary mb-2">
                    $ echo $TECH_STACK
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="font-mono text-xs border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <code className="text-muted-foreground text-xs font-mono">
            [EOF] experience.log - 3 entries
          </code>
        </div>
      </div>
    </div>
  );
};

export default Experience;
