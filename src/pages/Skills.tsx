import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js / Express", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "REST APIs", level: 95 },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "CI/CD", level: 80 },
    ],
  },
  {
    category: "Other Technologies",
    skills: [
      { name: "GraphQL", level: 75 },
      { name: "Redis", level: 70 },
      { name: "WebSockets", level: 80 },
      { name: "Testing (Jest, Cypress)", level: 85 },
    ],
  },
];

const softSkills = [
  "Problem Solving",
  "Team Collaboration",
  "Agile/Scrum",
  "Code Review",
  "Technical Documentation",
  "Mentoring",
  "Communication",
  "Time Management",
];

const Skills = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Skills & Expertise</h1>
          <p className="text-xl text-muted-foreground">
            Technical skills and professional competencies
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
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
          <h2 className="text-2xl font-bold mb-6">Professional Skills</h2>
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
