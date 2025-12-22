import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";

interface TerminalLine {
  type: "input" | "output" | "error" | "success" | "ascii";
  content: string;
  prompt?: string;
}

const ASCII_BANNER = `
 ██╗     ██╗ ██████╗ ███╗   ██╗███████╗██╗     
 ██║     ██║██╔═══██╗████╗  ██║██╔════╝██║     
 ██║     ██║██║   ██║██╔██╗ ██║█████╗  ██║     
 ██║     ██║██║   ██║██║╚██╗██║██╔══╝  ██║     
 ███████╗██║╚██████╔╝██║ ╚████║███████╗███████╗
 ╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚══════╝
 ████████╗ ██████╗  ██████╗ ██████╗ ███████╗   
 ╚══██╔══╝██╔═══██╗██╔════╝ ██╔══██╗██╔════╝   
    ██║   ██║   ██║██║  ███╗██████╔╝█████╗     
    ██║   ██║   ██║██║   ██║██╔══██╗██╔══╝     
    ██║   ╚██████╔╝╚██████╔╝██████╔╝███████╗   
    ╚═╝    ╚═════╝  ╚═════╝ ╚═════╝ ╚══════╝   
`;

const HELP_TEXT = `
Commandes disponibles:
  
  Navigation:
    cd <page>     - Naviguer vers une page
    ls            - Lister les pages disponibles
    
  Informations:
    cat about     - Afficher mes informations
    cat skills    - Voir mes compétences
    cat exp       - Parcours professionnel
    cat edu       - Formation et diplômes
    cat contact   - Informations de contact
    
  Système:
    whoami        - Qui suis-je ?
    uname -a      - Informations système
    clear         - Effacer le terminal
    help          - Afficher cette aide
    neofetch      - Afficher les infos système
    
  Easter eggs:
    sudo rm -rf / - À vos risques et périls...
    hack          - 🔓
`;

const PAGES = {
  home: "/",
  accueil: "/",
  experience: "/experience",
  exp: "/experience",
  education: "/education",
  formation: "/education",
  edu: "/education",
  skills: "/skills",
  competences: "/skills",
  contact: "/contact",
};

const Terminal = () => {
  const navigate = useNavigate();
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: "ascii", content: ASCII_BANNER },
    { type: "success", content: "Bienvenue sur le terminal de Lionel Togbe" },
    { type: "output", content: "Tapez 'help' pour voir les commandes disponibles" },
    { type: "output", content: "Tapez 'ls' pour voir les pages ou 'cd <page>' pour naviguer" },
    { type: "output", content: "" },
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const currentPath = "~";
  const username = "visitor";
  const hostname = "lionel-cv";

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const addOutput = (lines: TerminalLine[]) => {
    setHistory((prev) => [...prev, ...lines]);
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const args = trimmedCmd.split(" ");
    const command = args[0];

    // Add input to history
    addOutput([
      { 
        type: "input", 
        content: cmd, 
        prompt: `${username}@${hostname}:${currentPath}$` 
      }
    ]);

    // Add to command history
    if (cmd.trim()) {
      setCommandHistory((prev) => [...prev, cmd]);
    }

    switch (command) {
      case "help":
        addOutput([{ type: "output", content: HELP_TEXT }]);
        break;

      case "clear":
        setHistory([]);
        break;

      case "ls":
        addOutput([
          { type: "output", content: "Pages disponibles:" },
          { type: "success", content: "  📁 home        - Page d'accueil" },
          { type: "success", content: "  📁 experience  - Expérience professionnelle" },
          { type: "success", content: "  📁 education   - Formation et diplômes" },
          { type: "success", content: "  📁 skills      - Compétences techniques" },
          { type: "success", content: "  📁 contact     - Me contacter" },
          { type: "output", content: "" },
          { type: "output", content: "Utilisez 'cd <nom>' pour naviguer" },
        ]);
        break;

      case "cd":
        const page = args[1];
        if (!page) {
          addOutput([{ type: "error", content: "Usage: cd <page>" }]);
        } else if (page in PAGES) {
          addOutput([{ type: "success", content: `Navigation vers ${page}...` }]);
          setTimeout(() => navigate(PAGES[page as keyof typeof PAGES]), 500);
        } else {
          addOutput([{ type: "error", content: `bash: cd: ${page}: Aucun fichier ou dossier de ce type` }]);
        }
        break;

      case "cat":
        const file = args[1];
        if (!file) {
          addOutput([{ type: "error", content: "Usage: cat <fichier>" }]);
        } else {
          handleCatCommand(file);
        }
        break;

      case "whoami":
        addOutput([
          { type: "output", content: "Lionel Togbe" },
          { type: "output", content: "Bachelor Administrateur Système et Réseaux" },
          { type: "output", content: "Passionné de cybersécurité 🔒" },
        ]);
        break;

      case "uname":
        addOutput([
          { type: "output", content: "LionelOS 2025.1 x86_64 GNU/Linux" },
          { type: "output", content: "Kernel: 6.5.0-cyber-security" },
        ]);
        break;

      case "neofetch":
        addOutput([
          { type: "ascii", content: `
       _,met\$\$\$\$\$gg.           visitor@lionel-cv
    ,g\$\$\$\$\$\$\$\$\$\$\$\$\$\$P.        ─────────────────
  ,g\$\$P"     """Y\$\$."$.        OS: LionelOS 2025.1
 ,\$\$P'              \`\$\$\$.      Host: Portfolio CV
',\$\$P       ,ggs.     \`\$\$b:    Kernel: 6.5.0-cyber
\`d\$\$'     ,\$P"'   .    \$\$\$    Uptime: ∞
 \$\$P      d\$'     ,    \$\$P    Shell: bash 5.2.15
 \$\$:      \$\$.   -    ,d\$\$'    Terminal: web-term
 \$\$;      Y\$b._   _,d\$P'      CPU: Neural Net v3
 Y\$\$.    \`.\`"Y\$\$\$\$P"'         Memory: 16GB
 \`\$\$b      "-.__              Skills: Sysadmin
  \`Y\$\$                        Passion: Cybersecurity
   \`Y\$\$.
     \`\$\$b.
       \`Y\$\$b.
          \`"Y\$b._
              \`"""` },
        ]);
        break;

      case "sudo":
        if (trimmedCmd.includes("rm -rf /")) {
          addOutput([
            { type: "error", content: "🚨 ALERTE SÉCURITÉ 🚨" },
            { type: "error", content: "Tentative de destruction système détectée!" },
            { type: "output", content: "Nice try... mais ce terminal est en lecture seule 😉" },
            { type: "success", content: "Pro tip: En cybersécurité, on protège, on ne détruit pas!" },
          ]);
        } else {
          addOutput([{ type: "error", content: `${username} is not in the sudoers file. This incident will be reported.` }]);
        }
        break;

      case "hack":
        addOutput([
          { type: "success", content: "Initialisation du module de hacking..." },
          { type: "output", content: "[████████████████████] 100%" },
          { type: "success", content: "Accès autorisé! 🔓" },
          { type: "output", content: "" },
          { type: "output", content: "Just kidding! Je suis un professionnel éthique 🎩" },
          { type: "output", content: "La vraie cybersécurité, c'est protéger, pas attaquer." },
        ]);
        break;

      case "exit":
        addOutput([{ type: "output", content: "Au revoir! Tapez n'importe quelle touche pour continuer..." }]);
        break;

      case "":
        break;

      default:
        addOutput([{ type: "error", content: `bash: ${command}: commande introuvable. Tapez 'help' pour l'aide.` }]);
    }

    setCurrentInput("");
    setHistoryIndex(-1);
  };

  const handleCatCommand = (file: string) => {
    switch (file) {
      case "about":
        addOutput([
          { type: "output", content: "╔══════════════════════════════════════╗" },
          { type: "output", content: "║           À PROPOS DE MOI            ║" },
          { type: "output", content: "╚══════════════════════════════════════╝" },
          { type: "output", content: "" },
          { type: "success", content: "Nom: Lionel Togbe" },
          { type: "output", content: "Titre: Bachelor Administrateur Système et Réseaux" },
          { type: "output", content: "Passion: Cybersécurité 🔒" },
          { type: "output", content: "" },
          { type: "output", content: "Étudiant en fin de BTS SIO, actuellement en alternance" },
          { type: "output", content: "chez Cornerstone OnDemand. Curieux, rigoureux et motivé." },
          { type: "output", content: "" },
          { type: "success", content: "Objectif: Master en Cybersécurité 🎯" },
        ]);
        break;

      case "skills":
        addOutput([
          { type: "output", content: "╔══════════════════════════════════════╗" },
          { type: "output", content: "║          COMPÉTENCES TECH            ║" },
          { type: "output", content: "╚══════════════════════════════════════╝" },
          { type: "output", content: "" },
          { type: "success", content: "[Systèmes]" },
          { type: "output", content: "  ├── Windows Server ████████░░ 85%" },
          { type: "output", content: "  ├── Debian/Linux  ████████░░ 80%" },
          { type: "output", content: "  └── Active Directory ████████░░ 85%" },
          { type: "output", content: "" },
          { type: "success", content: "[Réseaux & Sécurité]" },
          { type: "output", content: "  ├── LAN/WAN/VPN   ████████░░ 80%" },
          { type: "output", content: "  ├── OpenVPN       ███████░░░ 75%" },
          { type: "output", content: "  └── Firewall      ███████░░░ 75%" },
          { type: "output", content: "" },
          { type: "success", content: "[Outils]" },
          { type: "output", content: "  ├── GLPI/ServiceNow ████████░░ 85%" },
          { type: "output", content: "  ├── Hyper-V/VMware ████████░░ 80%" },
          { type: "output", content: "  └── Intune/Jamf   ████████░░ 80%" },
        ]);
        break;

      case "exp":
      case "experience":
        addOutput([
          { type: "output", content: "╔══════════════════════════════════════╗" },
          { type: "output", content: "║      EXPÉRIENCE PROFESSIONNELLE      ║" },
          { type: "output", content: "╚══════════════════════════════════════╝" },
          { type: "output", content: "" },
          { type: "success", content: "[2023 - Présent] Cornerstone OnDemand" },
          { type: "output", content: "  Apprenti Admin Systèmes et Réseaux" },
          { type: "output", content: "  → Gestion parc informatique" },
          { type: "output", content: "  → Migration infrastructure" },
          { type: "output", content: "  → Méthode Agile" },
          { type: "output", content: "" },
          { type: "success", content: "[2023] NES - Technicien Support N1" },
          { type: "output", content: "  → Support utilisateur GLPI" },
          { type: "output", content: "  → Diagnostic pannes" },
        ]);
        break;

      case "edu":
      case "education":
        addOutput([
          { type: "output", content: "╔══════════════════════════════════════╗" },
          { type: "output", content: "║             FORMATION                ║" },
          { type: "output", content: "╚══════════════════════════════════════╝" },
          { type: "output", content: "" },
          { type: "success", content: "[2023-2025] BTS SIO option SISR" },
          { type: "output", content: "  AFTEC Orléans" },
          { type: "output", content: "  Administration systèmes et réseaux" },
          { type: "output", content: "" },
          { type: "success", content: "[2019-2021] Titre Pro Technicien Support" },
          { type: "output", content: "  Cformat Pro, Cergy" },
          { type: "output", content: "" },
          { type: "success", content: "[Prochain objectif]" },
          { type: "output", content: "  🎯 Master Cybersécurité" },
        ]);
        break;

      case "contact":
        addOutput([
          { type: "output", content: "╔══════════════════════════════════════╗" },
          { type: "output", content: "║             CONTACT                  ║" },
          { type: "output", content: "╚══════════════════════════════════════╝" },
          { type: "output", content: "" },
          { type: "success", content: "📧 Email: lionel.togbe@icloud.com" },
          { type: "success", content: "📱 Tél: +33 7 44 96 78 87" },
          { type: "success", content: "📍 Localisation: Orléans, France" },
          { type: "output", content: "" },
          { type: "output", content: "Tapez 'cd contact' pour le formulaire complet" },
        ]);
        break;

      default:
        addOutput([{ type: "error", content: `cat: ${file}: Aucun fichier ou dossier de ce type` }]);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(currentInput);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
      } else {
        setHistoryIndex(-1);
        setCurrentInput("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      // Simple autocomplete
      const pages = Object.keys(PAGES);
      const match = pages.find((p) => p.startsWith(currentInput.replace("cd ", "")));
      if (currentInput.startsWith("cd ") && match) {
        setCurrentInput(`cd ${match}`);
      }
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="terminal-window w-full max-w-4xl mx-auto" onClick={focusInput}>
      <div className="terminal-header">
        <div className="terminal-dot bg-red-500"></div>
        <div className="terminal-dot bg-yellow-500"></div>
        <div className="terminal-dot bg-green-500"></div>
        <span className="ml-4 text-xs text-muted-foreground font-mono">
          visitor@lionel-cv: ~
        </span>
      </div>
      
      <div ref={terminalRef} className="terminal-body">
        {history.map((line, index) => (
          <div key={index} className="leading-relaxed">
            {line.type === "input" && (
              <div>
                <span className="terminal-prompt">{line.prompt} </span>
                <span className="terminal-command">{line.content}</span>
              </div>
            )}
            {line.type === "output" && (
              <div className="terminal-output whitespace-pre-wrap">{line.content}</div>
            )}
            {line.type === "error" && (
              <div className="terminal-error">{line.content}</div>
            )}
            {line.type === "success" && (
              <div className="terminal-success">{line.content}</div>
            )}
            {line.type === "ascii" && (
              <pre className="terminal-success text-xs md:text-sm leading-none">{line.content}</pre>
            )}
          </div>
        ))}
        
        {/* Current input line */}
        <div className="flex items-center">
          <span className="terminal-prompt">
            {username}@{hostname}:{currentPath}${" "}
          </span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-foreground font-mono"
            autoFocus
            spellCheck={false}
          />
          <span className="cursor-blink text-primary">█</span>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
