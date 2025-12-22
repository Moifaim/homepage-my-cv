import Terminal from "@/components/Terminal";
import { Shield, Terminal as TerminalIcon, Lock } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      {/* Header */}
      <header className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Shield className="h-8 w-8 text-primary text-glow" />
          <h1 className="text-3xl md:text-4xl font-bold text-glow font-mono">
            LIONEL TOGBE
          </h1>
          <Lock className="h-8 w-8 text-primary text-glow" />
        </div>
        <p className="text-muted-foreground font-mono text-sm md:text-base">
          <span className="text-primary">&gt;</span> Bachelor Administrateur Système et Réseaux
          <span className="cursor-blink ml-1">_</span>
        </p>
        <p className="text-muted-foreground font-mono text-xs mt-2">
          <span className="text-secondary">// Passionné de Cybersécurité</span>
        </p>
      </header>

      {/* Terminal Instructions */}
      <div className="max-w-4xl mx-auto mb-6">
        <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono mb-4">
          <TerminalIcon className="h-4 w-4 text-primary" />
          <span>Terminal interactif - Tapez des commandes Linux pour naviguer</span>
        </div>
      </div>

      {/* Interactive Terminal */}
      <Terminal />

      {/* Quick Commands Reference */}
      <div className="max-w-4xl mx-auto mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { cmd: "ls", desc: "Lister les pages" },
          { cmd: "cd <page>", desc: "Naviguer" },
          { cmd: "cat about", desc: "À propos" },
          { cmd: "help", desc: "Aide" },
        ].map((item) => (
          <div
            key={item.cmd}
            className="cyber-card text-center p-4 hover:border-primary transition-colors"
          >
            <code className="text-primary text-sm">{item.cmd}</code>
            <p className="text-muted-foreground text-xs mt-1">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Footer Status */}
      <footer className="max-w-4xl mx-auto mt-12 text-center">
        <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground font-mono">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            SYSTÈME EN LIGNE
          </span>
          <span>|</span>
          <span>Recherche alternance Bac+3 à Bac+5</span>
          <span>|</span>
          <span>Cybersécurité 🔒</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
