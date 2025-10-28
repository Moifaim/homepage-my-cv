import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard. Built with modern technologies for optimal performance and scalability.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    features: [
      "Real-time inventory tracking",
      "Secure payment processing",
      "Advanced search and filtering",
      "Admin analytics dashboard",
    ],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Task Management System",
    description: "Collaborative task management application with real-time updates, team workspaces, and productivity analytics. Features drag-and-drop interface and advanced filtering.",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    features: [
      "Real-time collaboration",
      "Drag-and-drop task boards",
      "Team workspaces",
      "Productivity analytics",
    ],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for managing multiple social media accounts. Provides insights, scheduling capabilities, and performance metrics across platforms.",
    technologies: ["Next.js", "MongoDB", "Chart.js", "OAuth"],
    features: [
      "Multi-platform integration",
      "Post scheduling",
      "Analytics and insights",
      "Engagement tracking",
    ],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Weather Forecasting App",
    description: "Beautiful weather application with detailed forecasts, interactive maps, and personalized weather alerts. Features clean UI and smooth animations.",
    technologies: ["React", "Weather API", "Mapbox", "PWA"],
    features: [
      "7-day forecast",
      "Interactive weather maps",
      "Weather alerts",
      "Offline support",
    ],
    github: "https://github.com",
    live: "https://example.com",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-muted-foreground">
            Featured projects and notable work
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="space-y-4 flex-1">
                <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>

                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Key Features:</h4>
                  <ul className="space-y-1 ml-4">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-muted-foreground text-sm list-disc">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6 pt-4 border-t">
                <Button asChild variant="outline" className="flex-1">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </a>
                </Button>
                <Button asChild className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
            <h3 className="text-2xl font-bold mb-3">More Projects</h3>
            <p className="text-muted-foreground mb-4">
              Check out my GitHub profile for more projects and open-source contributions
            </p>
            <Button asChild size="lg" variant="outline">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" /> View GitHub Profile
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
