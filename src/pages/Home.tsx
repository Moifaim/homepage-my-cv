import { Shield, Lock, Terminal as TerminalIcon, Zap, Server, Globe } from "lucide-react";
import Terminal from "@/components/Terminal";

const Home = () => {
  return (
    <div className="min-h-screen relative z-10">
      {/* Hero Section */}
      <header className="pt-20 pb-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Floating icons */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="p-3 glass rounded-xl animate-float" style={{ animationDelay: '0s' }}>
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div className="p-3 glass rounded-xl animate-float" style={{ animationDelay: '1s' }}>
              <Server className="h-6 w-6 text-secondary" />
            </div>
            <div className="p-3 glass rounded-xl animate-float" style={{ animationDelay: '2s' }}>
              <Lock className="h-6 w-6 text-accent" />
            </div>
          </div>

          {/* Main title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="gradient-text">LIONEL</span>
            <span className="text-foreground"> TOGBE</span>
          </h1>
          
          {/* Subtitle with typing effect style */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-primary text-xl">›</span>
            <p className="text-lg md:text-xl text-muted-foreground font-mono">
              Bachelor Administrateur Système et Réseaux
              <span className="cursor-blink text-primary ml-1">▊</span>
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <span className="cyber-badge">
              <Zap className="inline-block w-3 h-3 mr-1" />
              Cybersécurité
            </span>
            <span className="cyber-badge">
              <Server className="inline-block w-3 h-3 mr-1" />
              Infrastructure
            </span>
            <span className="cyber-badge">
              <Globe className="inline-block w-3 h-3 mr-1" />
              Réseaux
            </span>
          </div>
        </div>
      </header>

      {/* Terminal Section */}
      <section className="px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          {/* Terminal instructions */}
          <div className="flex items-center gap-3 mb-6 glass px-4 py-3 rounded-xl w-fit mx-auto">
            <TerminalIcon className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground font-mono">
              Terminal interactif — Tapez des commandes pour explorer
            </span>
          </div>

          {/* Interactive Terminal */}
          <Terminal />
        </div>
      </section>

      {/* Quick Commands */}
      <section className="px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-sm font-mono text-muted-foreground mb-8 uppercase tracking-widest">
            Commandes rapides
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { cmd: "ls", desc: "Lister les pages", icon: "📁" },
              { cmd: "cd <page>", desc: "Naviguer", icon: "🚀" },
              { cmd: "cat about", desc: "À propos", icon: "👤" },
              { cmd: "help", desc: "Aide", icon: "💡" },
            ].map((item) => (
              <div
                key={item.cmd}
                className="cyber-card text-center group cursor-default"
              >
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <code className="text-primary text-sm font-semibold block mb-2 group-hover:text-glow transition-all">
                  {item.cmd}
                </code>
                <p className="text-muted-foreground text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Status Footer */}
      <footer className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass px-6 py-4 rounded-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
              <div className="status-online text-muted-foreground font-mono">
                <span>SYSTÈME ACTIF</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <span className="font-mono">Recherche alternance Bac+3 à Bac+5</span>
                <span className="text-primary">•</span>
                <span className="gradient-text font-semibold">Cybersécurité</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
