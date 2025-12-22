import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Terminal, Send, Shield } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    label: "Téléphone",
    value: "+33 7 44 96 78 87",
    link: "tel:+33744967887",
    cmd: "phone",
  },
  {
    icon: Mail,
    label: "Email",
    value: "lionel.togbe@icloud.com",
    link: "mailto:lionel.togbe@icloud.com",
    cmd: "email",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Orléans, France",
    link: null,
    cmd: "location",
  },
];

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message envoyé avec succès !", {
      description: "Je vous répondrai dans les plus brefs délais.",
    });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Terminal className="h-6 w-6 text-primary" />
            <code className="text-primary text-sm">./contact --interactive</code>
          </div>
          <h1 className="text-3xl font-bold font-mono text-glow mb-2">
            CONTACTEZ-MOI
          </h1>
          <p className="text-muted-foreground font-mono text-sm">
            // Établir une connexion sécurisée
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="cyber-card">
            <div className="flex items-center gap-2 mb-6">
              <Send className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-bold font-mono text-primary">
                $ sendmail --compose
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-muted-foreground mb-2">
                  &gt; Votre nom_
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  required
                  className="font-mono bg-muted/50 border-border focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-mono text-muted-foreground mb-2">
                  &gt; Votre email_
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="font-mono bg-muted/50 border-border focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-muted-foreground mb-2">
                  &gt; Sujet_
                </label>
                <Input
                  id="subject"
                  placeholder="Opportunité d'alternance"
                  required
                  className="font-mono bg-muted/50 border-border focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-muted-foreground mb-2">
                  &gt; Message_
                </label>
                <Textarea
                  id="message"
                  placeholder="Votre message..."
                  className="min-h-[120px] font-mono bg-muted/50 border-border focus:border-primary"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full cyber-button bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Send className="mr-2 h-4 w-4" />
                ENVOYER LE MESSAGE
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="cyber-card">
              <h2 className="text-xl font-bold font-mono text-primary mb-6">
                $ cat /etc/contact.conf
              </h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-center gap-4 p-3 rounded border border-border hover:border-primary transition-colors group">
                      <div className="w-10 h-10 rounded border border-primary/50 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-mono">
                          ${info.cmd}
                        </p>
                        <p className="font-mono text-sm text-foreground">{info.value}</p>
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
            </div>

            {/* Alternance Search */}
            <div className="cyber-card border-secondary relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-secondary flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold font-mono text-secondary text-glow-cyan">
                    RECHERCHE ALTERNANCE
                  </h3>
                  <p className="text-muted-foreground font-mono text-sm mt-2">
                    Je recherche une alternance Bac+3 à Bac+5 pour me spécialiser 
                    en cybersécurité. Motivé, rigoureux et passionné par la sécurité 
                    informatique.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="text-xs font-mono px-2 py-1 bg-secondary/20 text-secondary rounded">
                      Master Cybersécurité
                    </span>
                    <span className="text-xs font-mono px-2 py-1 bg-primary/20 text-primary rounded">
                      Disponible maintenant
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="cyber-card">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="font-mono text-sm text-muted-foreground">
                  Status: <span className="text-primary">ONLINE</span> - Réponse sous 24h
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <code className="text-muted-foreground text-xs font-mono">
            [EOF] Connexion sécurisée établie - En attente de votre message
          </code>
        </div>
      </div>
    </div>
  );
};

export default Contact;
