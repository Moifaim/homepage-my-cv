import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Mail, Phone, MapPin } from "lucide-react";
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
              En recherche d'alternance Bac+3 à Bac+5
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Bonjour, je suis <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Lionel Togbe</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Bachelor Administrateur Système et Réseaux Informatique
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Étudiant en fin de BTS SIO, actuellement en alternance chez Cornerstone OnDemand. 
              Compétences en gestion d'infrastructure et déploiement de solutions techniques.
              Curieux, rigoureux et motivé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                <Link to="/contact">
                  Me Contacter <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#" download>
                  <Download className="mr-2 h-4 w-4" /> Télécharger CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Banner */}
      <section className="py-8 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm">
            <a href="tel:+33744967887" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              +33 7 44 96 78 87
            </a>
            <a href="mailto:lionel.togbe@icloud.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              lionel.togbe@icloud.com
            </a>
            <span className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              Orléans, France
            </span>
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
              <h3 className="text-xl font-semibold">Expérience</h3>
              <p className="text-muted-foreground">Alternance et expériences professionnelles en IT</p>
            </Link>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
            <Link to="/skills" className="block space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-2xl text-white">🚀</span>
              </div>
              <h3 className="text-xl font-semibold">Compétences</h3>
              <p className="text-muted-foreground">Systèmes, réseaux, virtualisation et outils IT</p>
            </Link>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
            <Link to="/education" className="block space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-2xl text-white">🎓</span>
              </div>
              <h3 className="text-xl font-semibold">Formation</h3>
              <p className="text-muted-foreground">BTS SIO SISR et formations certifiantes</p>
            </Link>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-center mb-8">À Propos de Moi</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p>
                Étudiant en fin de BTS SIO, je poursuis mon parcours dans le domaine de l'administration 
                systèmes et réseaux. Actuellement en alternance chez Cornerstone OnDemand, j'ai développé 
                des compétences concrètes en gestion d'infrastructure et déploiement de solutions techniques.
              </p>
              <p>
                Curieux, rigoureux et motivé, je cherche à intégrer une école pour poursuivre mes études 
                en alternance (niveau Bac+3 à Bac+5), tout en continuant à contribuer au sein de mon 
                entreprise actuelle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Centres d'Intérêt</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Football Américain", "Judo", "Football", "Flag Football"].map((interest) => (
              <span key={interest} className="px-6 py-3 bg-primary/10 rounded-full text-primary font-medium">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
