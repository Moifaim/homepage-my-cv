import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University of Technology",
    period: "2017 - 2019",
    location: "Boston, MA",
    gpa: "3.9/4.0",
    description: "Specialized in Software Engineering and Machine Learning",
    courses: [
      "Advanced Algorithms",
      "Distributed Systems",
      "Machine Learning",
      "Software Architecture",
    ],
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "State University",
    period: "2013 - 2017",
    location: "Seattle, WA",
    gpa: "3.7/4.0",
    description: "Major in Computer Science with minor in Mathematics",
    courses: [
      "Data Structures",
      "Database Systems",
      "Web Development",
      "Operating Systems",
    ],
  },
];

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
  },
  {
    name: "Professional Scrum Master I",
    issuer: "Scrum.org",
    date: "2022",
  },
  {
    name: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "2021",
  },
];

const Education = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Education</h1>
          <p className="text-xl text-muted-foreground">
            Academic background and certifications
          </p>
        </div>

        {/* Degrees Section */}
        <div className="mb-16 space-y-8">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            Degrees
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

                <div className="flex items-center gap-4">
                  <Badge variant="outline" className="border-primary text-primary">
                    GPA: {edu.gpa}
                  </Badge>
                </div>

                <p className="text-muted-foreground">{edu.description}</p>

                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Relevant Coursework:</h4>
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
