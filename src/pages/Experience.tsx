import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Company Inc.",
    period: "2022 - Present",
    location: "Remote",
    description: "Leading development of scalable web applications using modern technologies. Mentoring junior developers and establishing best practices.",
    achievements: [
      "Reduced application load time by 40% through optimization",
      "Led migration to microservices architecture",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2020 - 2022",
    location: "New York, NY",
    description: "Developed and maintained multiple client-facing applications. Collaborated with design team to implement pixel-perfect interfaces.",
    achievements: [
      "Built 5+ production applications from scratch",
      "Improved test coverage from 40% to 85%",
      "Implemented real-time features using WebSockets",
    ],
    technologies: ["React", "TypeScript", "Express", "MongoDB", "Redis"],
  },
  {
    title: "Junior Developer",
    company: "StartUp Ventures",
    period: "2019 - 2020",
    location: "San Francisco, CA",
    description: "Started career working on various frontend and backend projects. Gained experience in agile development and version control.",
    achievements: [
      "Contributed to 10+ sprint releases",
      "Developed reusable component library",
      "Participated in code reviews and pair programming",
    ],
    technologies: ["JavaScript", "React", "REST API", "Git"],
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Work Experience</h1>
          <p className="text-xl text-muted-foreground">
            My professional journey and key accomplishments
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
                  <h4 className="font-semibold mb-2 text-foreground">Key Achievements:</h4>
                  <ul className="space-y-1 ml-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-muted-foreground list-disc">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Technologies:</h4>
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
