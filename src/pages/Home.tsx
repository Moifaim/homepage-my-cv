import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 via-secondary/5 to-background"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.95)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
              Available for opportunities
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Hi, I'm <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Full Stack Developer & Creative Problem Solver
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about building elegant solutions to complex problems. 
              Specialized in modern web technologies and creating exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                <Link to="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#" download>
                  <Download className="mr-2 h-4 w-4" /> Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
            <Link to="/experience" className="block space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-2xl text-white">💼</span>
              </div>
              <h3 className="text-xl font-semibold">Experience</h3>
              <p className="text-muted-foreground">5+ years of professional development experience</p>
            </Link>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
            <Link to="/skills" className="block space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-2xl text-white">🚀</span>
              </div>
              <h3 className="text-xl font-semibold">Skills</h3>
              <p className="text-muted-foreground">Modern tech stack and best practices</p>
            </Link>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
            <Link to="/projects" className="block space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-2xl text-white">✨</span>
              </div>
              <h3 className="text-xl font-semibold">Projects</h3>
              <p className="text-muted-foreground">Innovative solutions and side projects</p>
            </Link>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p>
                I'm a passionate developer with a keen eye for detail and a love for creating 
                seamless user experiences. With expertise in both frontend and backend development, 
                I bring ideas to life through clean, efficient code.
              </p>
              <p>
                My journey in tech started with a curiosity about how things work, which evolved 
                into a career building innovative solutions. I thrive in collaborative environments 
                and am always eager to learn new technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
