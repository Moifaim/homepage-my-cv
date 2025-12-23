import { Shield, Lock, Terminal as TerminalIcon, Zap, Server, Globe, Sparkles } from "lucide-react";
import Terminal from "@/components/Terminal";

const Home = () => {
  return (
    <div className="min-h-screen relative z-10">
      {/* Hero Section */}
      <header className="pt-24 pb-16 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Floating icons */}
          <div className="flex items-center justify-center gap-5 mb-10">
            {[
              { Icon: Shield, delay: '0s' },
              { Icon: Server, delay: '0.3s' },
              { Icon: Lock, delay: '0.6s' },
            ].map(({ Icon, delay }, i) => (
              <div 
                key={i}
                className="p-3 bg-card rounded-xl border border-border shadow-sm animate-float"
                style={{ animationDelay: delay }}
              >
                <Icon className="h-5 w-5 text-primary" />
              </div>
            ))}
          </div>

          {/* Main title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            <span className="gradient-text">Lionel</span>
            <span className="text-foreground"> Togbe</span>
          </h1>
          
          {/* Subtitle */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary/50" />
            <p className="text-base md:text-lg text-muted-foreground">
              Bachelor Administrateur Système et Réseaux
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
            {[
              { icon: Zap, label: 'Cybersécurité' },
              { icon: Server, label: 'Infrastructure' },
              { icon: Globe, label: 'Réseaux' },
            ].map(({ icon: Icon, label }) => (
              <span key={label} className="cyber-badge">
                <Icon className="w-3 h-3" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Terminal Section */}
      <section className="px-4 pb-10 relative">
        <div className="max-w-3xl mx-auto">
          {/* Terminal label */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="glass px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
              <TerminalIcon className="h-4 w-4 text-primary" />
              <span className="text-xs text-muted-foreground">
                Tapez <code className="text-primary font-mono font-medium">help</code> pour commencer
              </span>
            </div>
          </div>

          {/* Interactive Terminal */}
          <Terminal />
        </div>
      </section>

      {/* Quick Commands */}
      <section className="px-4 py-14">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-xs text-muted-foreground mb-8 uppercase tracking-[0.2em] font-medium">
            Commandes
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { cmd: "ls", desc: "Pages", icon: "📁" },
              { cmd: "cd", desc: "Naviguer", icon: "🚀" },
              { cmd: "cat", desc: "Infos", icon: "👤" },
              { cmd: "help", desc: "Aide", icon: "💡" },
            ].map((item) => (
              <div
                key={item.cmd}
                className="cyber-card text-center py-5 group"
              >
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <code className="text-primary text-sm font-semibold block mb-1">
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
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border px-6 py-4 rounded-xl shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
              <div className="flex items-center status-online text-muted-foreground text-xs uppercase tracking-wider">
                <span>Disponible</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground text-xs">
                <span>Recherche alternance</span>
                <span className="w-1 h-1 rounded-full bg-primary/40" />
                <span className="text-primary font-medium">Cybersécurité</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
