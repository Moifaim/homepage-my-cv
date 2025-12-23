import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar, ChevronRight } from "lucide-react";

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
    <div className="min-h-screen py-16 relative z-10">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <header className="mb-16">
          <div className="glass px-4 py-2 rounded-xl w-fit mb-6">
            <code className="text-primary text-sm font-mono">cat /var/log/experience.log</code>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Expérience</span>
            <span className="text-foreground"> Professionnelle</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Parcours professionnel et réalisations clés
          </p>
        </header>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <article
              key={index}
              className="cyber-card group"
            >
              <div className="space-y-5">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-semibold text-foreground group-hover:gradient-text transition-all duration-300">
                      {exp.title}
                    </h2>
                    <p className="text-primary font-medium mt-1">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground">{exp.description}</p>

                {/* Achievements */}
                <div>
                  <h3 className="font-mono text-xs text-primary mb-3 uppercase tracking-wider">
                    Réalisations
                  </h3>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="cyber-badge"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <div className="glass px-6 py-3 rounded-xl inline-block">
            <code className="text-muted-foreground text-sm font-mono">
              [EOF] experience.log — 3 entrées
            </code>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Experience;
