import { Shield, Lock, Terminal as TerminalIcon, Zap, Server, Globe, ChevronRight, Sparkles } from "lucide-react";
import Terminal from "@/components/Terminal";

const Home = () => {
  return (
    <div className="min-h-screen relative z-10">
      {/* Decorative background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
      </div>

      {/* Hero Section */}
      <header className="pt-24 pb-20 px-4 relative">
        <div className="max-w-5xl mx-auto text-center">
          {/* Floating icons with glassmorphism */}
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-12">
            {[
              { Icon: Shield, color: 'text-primary', delay: '0s' },
              { Icon: Server, color: 'text-secondary', delay: '0.5s' },
              { Icon: Lock, color: 'text-accent', delay: '1s' },
            ].map(({ Icon, color, delay }, i) => (
              <div 
                key={i}
                className="p-4 glass rounded-2xl animate-float hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: delay }}
              >
                <Icon className={`h-6 w-6 md:h-8 md:w-8 ${color}`} />
              </div>
            ))}
          </div>

          {/* Main title with modern typography */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              <span className="gradient-text">LIONEL</span>
              <span className="text-foreground ml-4">TOGBE</span>
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-5 h-5 text-primary/60" />
            <p className="text-lg md:text-xl text-muted-foreground font-mono tracking-wide">
              Bachelor Administrateur Système et Réseaux
            </p>
            <span className="cursor-blink text-primary">▊</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {[
              { icon: Zap, label: 'Cybersécurité' },
              { icon: Server, label: 'Infrastructure' },
              { icon: Globe, label: 'Réseaux' },
            ].map(({ icon: Icon, label }) => (
              <span key={label} className="cyber-badge">
                <Icon className="w-3.5 h-3.5" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Terminal Section */}
      <section className="px-4 pb-12 relative">
        <div className="max-w-4xl mx-auto">
          {/* Terminal instructions */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="glass px-5 py-3 rounded-2xl flex items-center gap-3">
              <TerminalIcon className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                Terminal interactif — Tapez <code className="text-primary font-mono">help</code> pour explorer
              </span>
              <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
            </div>
          </div>

          {/* Interactive Terminal */}
          <Terminal />
        </div>
      </section>

      {/* Quick Commands */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-xs font-mono text-muted-foreground/70 mb-10 uppercase tracking-[0.3em]">
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
                <span className="text-3xl mb-4 block group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                <code className="text-primary text-sm font-bold block mb-2 group-hover:text-glow transition-all">
                  {item.cmd}
                </code>
                <p className="text-muted-foreground/70 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Status Footer */}
      <footer className="px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass px-8 py-5 rounded-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
              <div className="flex items-center status-online text-muted-foreground font-mono text-xs uppercase tracking-widest">
                <span>Système actif</span>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span className="font-mono text-xs">Recherche alternance Bac+3 à Bac+5</span>
                <span className="w-1 h-1 rounded-full bg-primary/60" />
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
