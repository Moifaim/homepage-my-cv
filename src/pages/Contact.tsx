import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Shield, MessageSquare, Zap, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const contactInfo = [
  {
    icon: Phone,
    label: "Téléphone",
    value: "+33 7 44 96 78 87",
    link: "tel:+33744967887",
  },
  {
    icon: Mail,
    label: "Email",
    value: "lionel.togbe@icloud.com",
    link: "mailto:lionel.togbe@icloud.com",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Orléans, France",
    link: null,
  },
];

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast.success("Message envoyé avec succès !", {
        description: "Je vous répondrai dans les plus brefs délais.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast.error("Erreur lors de l'envoi", {
        description: "Veuillez réessayer ou me contacter directement par email.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-16 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <header className="mb-16">
          <div className="glass px-4 py-2 rounded-xl w-fit mb-6">
            <code className="text-primary text-sm font-mono">./contact --interactive</code>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Contactez</span>
            <span className="text-foreground">-moi</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Établir une connexion sécurisée
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <section className="cyber-card">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 glass rounded-lg">
                <MessageSquare className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold gradient-text">Envoyer un message</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                  Votre nom
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  required
                  className="cyber-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={isLoading}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                  Votre email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="cyber-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={isLoading}
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm text-muted-foreground mb-2">
                  Sujet
                </label>
                <Input
                  id="subject"
                  placeholder="Opportunité d'alternance"
                  required
                  className="cyber-input"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  disabled={isLoading}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Votre message..."
                  className="cyber-input min-h-[140px] resize-none"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  disabled={isLoading}
                />
              </div>

              <Button
                type="submit"
                className="w-full cyber-button bg-primary text-primary-foreground hover:bg-primary/90 border-primary"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Envoyer le message
                  </>
                )}
              </Button>
            </form>
          </section>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <section className="cyber-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 glass rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold gradient-text">Coordonnées</h2>
              </div>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-center gap-4 p-4 glass rounded-xl hover:scale-[1.02] transition-all group cursor-pointer">
                      <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:border-primary/40 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">
                          {info.label}
                        </p>
                        <p className="text-foreground font-medium">{info.value}</p>
                      </div>
                    </div>
                  );

                  return info.link ? (
                    <a key={index} href={info.link} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>
            </section>

            {/* Alternance Search */}
            <section className="cyber-card border-secondary/20 relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-t-2xl"></div>
              <div className="flex items-start gap-4">
                <div className="p-3 glass rounded-xl">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">
                    <span className="gradient-text-accent">Recherche Alternance</span>
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Je recherche une alternance Bac+3 à Bac+5 pour me spécialiser 
                    en cybersécurité. Motivé, rigoureux et passionné.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="cyber-badge" style={{ borderColor: 'hsl(280 100% 65% / 0.3)', color: 'hsl(280 100% 70%)' }}>
                      Master Cybersécurité
                    </span>
                    <span className="cyber-badge">
                      Disponible maintenant
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Status */}
            <section className="cyber-card">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Status: <span className="text-primary font-medium">ONLINE</span>
                  </span>
                </div>
                <div className="status-online text-sm text-muted-foreground">
                  <span>Réponse sous 24h</span>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <div className="glass px-6 py-3 rounded-xl inline-block">
            <code className="text-muted-foreground text-sm font-mono">
              [EOF] Connexion sécurisée — En attente de votre message
            </code>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
