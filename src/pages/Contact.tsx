import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    label: "Téléphone",
    value: "+33 7 67 32 57 81",
    link: "tel:+33767325781",
  },
  {
    icon: Mail,
    label: "Email",
    value: "didiserge90@gmail.com",
    link: "mailto:didiserge90@gmail.com",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "05 Avenue Jean Jaurès, 06800 Cagnes-sur-mer",
    link: null,
  },
];

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message envoyé avec succès ! Je vous répondrai bientôt.");
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contactez-moi</h1>
          <p className="text-xl text-muted-foreground">
            Je serais ravi d'échanger avec vous !
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Envoyez-moi un message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom
                </label>
                <Input id="name" placeholder="Votre nom" required />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input id="email" type="email" placeholder="votre.email@exemple.com" required />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Sujet
                </label>
                <Input id="subject" placeholder="De quoi s'agit-il ?" required />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Votre message..."
                  className="min-h-[150px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                Envoyer le message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Informations de Contact</h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium">{info.value}</p>
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
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
              <h3 className="text-xl font-bold mb-2">À la recherche d'opportunités</h3>
              <p className="text-muted-foreground">
                Je suis actuellement disponible pour de nouvelles opportunités professionnelles. 
                N'hésitez pas à me contacter !
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
