import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    category: "Vente & Relation Client",
    skills: [
      { name: "Accueil et conseil client", level: 95 },
      { name: "Fidélisation clientèle", level: 90 },
      { name: "Sens du service", level: 95 },
      { name: "Qualité d'écoute", level: 90 },
    ],
  },
  {
    category: "Management & Leadership",
    skills: [
      { name: "Gestion d'équipe", level: 90 },
      { name: "Formation collaborateurs", level: 85 },
      { name: "Planification des tâches", level: 85 },
      { name: "Suivi de performance", level: 80 },
    ],
  },
  {
    category: "Sécurité",
    skills: [
      { name: "Analyse images Rayon X", level: 85 },
      { name: "Mesures de sécurité", level: 85 },
      { name: "Gestion d'incidents", level: 80 },
    ],
  },
  {
    category: "Outils & Langues",
    skills: [
      { name: "Office 365", level: 75 },
      { name: "Français", level: 100 },
      { name: "Anglais (A1)", level: 30 },
    ],
  },
];

const softSkills = ["Sens du détail", "Gestion du stress", "Sang-froid", "Rigueur", "Ponctualité", "Relationnel", "Esprit d'équipe", "Adaptabilité"];

const Skills = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Compétences & Expertise</h1>
          <p className="text-xl text-muted-foreground">
            Compétences techniques et qualités professionnelles
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

        {/* Learning Section */}
        <div className="mt-12">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold">Continuous Learning</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I'm always expanding my skillset and staying current with industry trends. 
                Currently exploring: Rust, Kubernetes, and Advanced System Design patterns.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;
