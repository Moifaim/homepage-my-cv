import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";

interface TerminalLine {
  type: "input" | "output" | "error" | "success" | "ascii";
  content: string;
  prompt?: string;
}

const ASCII_BANNER = `
 ╭─────────────────────────────────────────╮
 │                                         │
 │   ██╗     ██╗ ██████╗ ███╗   ██╗███████╗██╗     │
 │   ██║     ██║██╔═══██╗████╗  ██║██╔════╝██║     │
 │   ██║     ██║██║   ██║██╔██╗ ██║█████╗  ██║     │
 │   ██║     ██║██║   ██║██║╚██╗██║██╔══╝  ██║     │
 │   ███████╗██║╚██████╔╝██║ ╚████║███████╗███████╗│
 │   ╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚══════╝│
 │                                         │
 ╰─────────────────────────────────────────╯
`;

const HELP_TEXT = `
┌─────────────────────────────────────────┐
│            COMMANDES DISPONIBLES        │
├─────────────────────────────────────────┤
│                                         │
│  Navigation                             │
│    cd <page>     Naviguer vers une page │
│    ls            Lister les pages       │
│                                         │
│  Informations                           │
│    cat about     Mes informations       │
│    cat skills    Mes compétences        │
│    cat exp       Parcours pro           │
│    cat contact   Me contacter           │
│                                         │
│  Système                                │
│    whoami        Qui suis-je ?          │
│    neofetch      Infos système          │
│    clear         Effacer le terminal    │
│    help          Afficher cette aide    │
│                                         │
│  Easter eggs                            │
│    hack          🔓                      │
│    sudo rm -rf / À vos risques...       │
│                                         │
└─────────────────────────────────────────┘
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
    { type: "success", content: "✨ Bienvenue sur le terminal de Lionel Togbe" },
    { type: "output", content: "→ Tapez 'help' pour les commandes ou 'ls' pour naviguer" },
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

    addOutput([
      { 
        type: "input", 
        content: cmd, 
        prompt: `${username}@${hostname}:${currentPath}$` 
      }
    ]);

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
          { type: "output", content: "\n  📂 Pages disponibles\n" },
          { type: "success", content: "     home        → Page d'accueil" },
          { type: "success", content: "     experience  → Expérience professionnelle" },
          { type: "success", content: "     education   → Formation et diplômes" },
          { type: "success", content: "     skills      → Compétences techniques" },
          { type: "success", content: "     contact     → Me contacter\n" },
          { type: "output", content: "  💡 Tapez 'cd <nom>' pour naviguer\n" },
        ]);
        break;

      case "cd":
        const page = args[1];
        if (!page) {
          addOutput([{ type: "error", content: "  ✗ Usage: cd <page>" }]);
        } else if (page in PAGES) {
          addOutput([{ type: "success", content: `  ✓ Navigation vers ${page}...` }]);
          setTimeout(() => navigate(PAGES[page as keyof typeof PAGES]), 500);
        } else {
          addOutput([{ type: "error", content: `  ✗ Page introuvable: ${page}` }]);
        }
        break;

      case "cat":
        const file = args[1];
        if (!file) {
          addOutput([{ type: "error", content: "  ✗ Usage: cat <fichier>" }]);
        } else {
          handleCatCommand(file);
        }
        break;

      case "whoami":
        addOutput([
          { type: "output", content: "\n  👤 Lionel Togbe" },
          { type: "output", content: "  🎓 Bachelor Administrateur Système et Réseaux" },
          { type: "success", content: "  🔒 Passionné de Cybersécurité\n" },
        ]);
        break;

      case "uname":
        addOutput([
          { type: "output", content: "\n  LionelOS 2025.1 x86_64 GNU/Linux" },
          { type: "output", content: "  Kernel: 6.5.0-cyber-security\n" },
        ]);
        break;

      case "neofetch":
        addOutput([
          { type: "ascii", content: `
       ___       visitor@lionel-cv
      (.. |      ──────────────────
      (<> |      OS     LionelOS 2025.1
     / __  \\     Host   Portfolio CV
    ( /  \\ /|    Kernel 6.5.0-cyber
   _/\\ __)/_)    Shell  bash 5.2.15
   \\/-____\\/     Term   web-terminal
                 CPU    Neural Net v3
                 Memory 16GB DDR5
                 ─────────────────
                 🔒 Cybersécurité
` },
        ]);
        break;

      case "sudo":
        if (trimmedCmd.includes("rm -rf /")) {
          addOutput([
            { type: "error", content: "\n  🚨 ALERTE SÉCURITÉ 🚨" },
            { type: "error", content: "  Tentative de destruction système détectée!" },
            { type: "output", content: "\n  Nice try... mais ce terminal est protégé 😉" },
            { type: "success", content: "  Pro tip: En cyber, on protège, on ne détruit pas!\n" },
          ]);
        } else {
          addOutput([{ type: "error", content: `  ✗ ${username} is not in the sudoers file.` }]);
        }
        break;

      case "hack":
        addOutput([
          { type: "success", content: "\n  ⚡ Initialisation du module de hacking..." },
          { type: "output", content: "  [██████████████████████████] 100%" },
          { type: "success", content: "  ✓ Accès autorisé! 🔓\n" },
          { type: "output", content: "  Just kidding! Je suis un professionnel éthique 🎩" },
          { type: "output", content: "  La vraie cyber, c'est protéger, pas attaquer.\n" },
        ]);
        break;

      case "exit":
        addOutput([{ type: "output", content: "  👋 Au revoir!" }]);
        break;

      case "":
        break;

      default:
        addOutput([{ type: "error", content: `  ✗ Commande introuvable: ${command}. Tapez 'help'.` }]);
    }

    setCurrentInput("");
    setHistoryIndex(-1);
  };

  const handleCatCommand = (file: string) => {
    switch (file) {
      case "about":
        addOutput([
          { type: "output", content: "\n  ┌─────────────────────────────────┐" },
          { type: "output", content: "  │         À PROPOS DE MOI        │" },
          { type: "output", content: "  └─────────────────────────────────┘\n" },
          { type: "success", content: "  Nom      Lionel Togbe" },
          { type: "output", content: "  Titre    Bachelor Admin Système & Réseaux" },
          { type: "success", content: "  Passion  Cybersécurité 🔒\n" },
          { type: "output", content: "  Étudiant en fin de BTS SIO, actuellement en" },
          { type: "output", content: "  alternance chez Cornerstone OnDemand.\n" },
          { type: "success", content: "  🎯 Objectif: Master en Cybersécurité\n" },
        ]);
        break;

      case "skills":
        addOutput([
          { type: "output", content: "\n  ┌─────────────────────────────────┐" },
          { type: "output", content: "  │       COMPÉTENCES TECH         │" },
          { type: "output", content: "  └─────────────────────────────────┘\n" },
          { type: "success", content: "  ▸ Systèmes" },
          { type: "output", content: "    Windows Server  ████████░░  85%" },
          { type: "output", content: "    Debian/Linux    ████████░░  80%" },
          { type: "output", content: "    Active Dir      ████████░░  85%\n" },
          { type: "success", content: "  ▸ Réseaux & Sécurité" },
          { type: "output", content: "    LAN/WAN/VPN     ████████░░  80%" },
          { type: "output", content: "    OpenVPN         ███████░░░  75%" },
          { type: "output", content: "    Firewall        ███████░░░  75%\n" },
          { type: "success", content: "  ▸ Outils" },
          { type: "output", content: "    GLPI/ServiceNow ████████░░  85%" },
          { type: "output", content: "    Hyper-V/VMware  ████████░░  80%\n" },
        ]);
        break;

      case "exp":
      case "experience":
        addOutput([
          { type: "output", content: "\n  ┌─────────────────────────────────┐" },
          { type: "output", content: "  │    EXPÉRIENCE PROFESSIONNELLE  │" },
          { type: "output", content: "  └─────────────────────────────────┘\n" },
          { type: "success", content: "  ▸ 2023 - Présent | Cornerstone OnDemand" },
          { type: "output", content: "    Apprenti Admin Systèmes et Réseaux" },
          { type: "output", content: "    → Gestion parc informatique" },
          { type: "output", content: "    → Migration infrastructure" },
          { type: "output", content: "    → Méthode Agile\n" },
          { type: "success", content: "  ▸ 2023 | NES" },
          { type: "output", content: "    Technicien Support N1" },
          { type: "output", content: "    → Support utilisateur GLPI" },
          { type: "output", content: "    → Diagnostic pannes\n" },
        ]);
        break;

      case "edu":
      case "education":
        addOutput([
          { type: "output", content: "\n  ┌─────────────────────────────────┐" },
          { type: "output", content: "  │           FORMATION            │" },
          { type: "output", content: "  └─────────────────────────────────┘\n" },
          { type: "success", content: "  ▸ 2023-2025 | BTS SIO option SISR" },
          { type: "output", content: "    AFTEC Orléans" },
          { type: "output", content: "    Administration systèmes et réseaux\n" },
          { type: "success", content: "  ▸ 2019-2021 | Titre Pro Tech Support" },
          { type: "output", content: "    Cformat Pro, Cergy\n" },
          { type: "success", content: "  🎯 Prochain objectif" },
          { type: "output", content: "    Master Cybersécurité\n" },
        ]);
        break;

      case "contact":
        addOutput([
          { type: "output", content: "\n  ┌─────────────────────────────────┐" },
          { type: "output", content: "  │           CONTACT              │" },
          { type: "output", content: "  └─────────────────────────────────┘\n" },
          { type: "success", content: "  📧  lionel.togbe@icloud.com" },
          { type: "success", content: "  📱  +33 7 44 96 78 87" },
          { type: "success", content: "  📍  Orléans, France\n" },
          { type: "output", content: "  💡 Tapez 'cd contact' pour le formulaire\n" },
        ]);
        break;

      default:
        addOutput([{ type: "error", content: `  ✗ Fichier introuvable: ${file}` }]);
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
    <div className="terminal-window scanlines w-full max-w-4xl mx-auto animate-pulse-glow" onClick={focusInput}>
      {/* Terminal Header */}
      <div className="terminal-header">
        <div className="flex items-center gap-2.5">
          <div className="terminal-dot bg-[#ff5f57] hover:brightness-110"></div>
          <div className="terminal-dot bg-[#febc2e] hover:brightness-110"></div>
          <div className="terminal-dot bg-[#28c840] hover:brightness-110"></div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <span className="text-xs text-muted-foreground/60 font-mono flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            visitor@lionel-cv — bash
          </span>
        </div>
      </div>
      
      {/* Terminal Body */}
      <div ref={terminalRef} className="terminal-body">
        {history.map((line, index) => (
          <div key={index} className="leading-relaxed mb-0.5">
            {line.type === "input" && (
              <div className="flex items-center gap-2">
                <span className="terminal-prompt">{line.prompt}</span>
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
              <div className="terminal-success font-medium">{line.content}</div>
            )}
            {line.type === "ascii" && (
              <pre className="terminal-success text-[9px] md:text-[11px] leading-tight opacity-70">{line.content}</pre>
            )}
          </div>
        ))}
        
        {/* Current input line */}
        <div className="flex items-center mt-3">
          <span className="terminal-prompt">
            {username}@{hostname}:{currentPath}${" "}
          </span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-foreground font-mono ml-1 caret-primary text-sm"
            autoFocus
            spellCheck={false}
            autoComplete="off"
          />
          <span className="cursor-blink text-primary text-lg">▊</span>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
