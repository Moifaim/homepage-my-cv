import { Link, useLocation } from "react-router-dom";
import { Home, Briefcase, GraduationCap, Code, Mail, Terminal, Shield } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Terminal", icon: Terminal, cmd: "~" },
    { path: "/experience", label: "Exp", icon: Briefcase, cmd: "/exp" },
    { path: "/education", label: "Edu", icon: GraduationCap, cmd: "/edu" },
    { path: "/skills", label: "Skills", icon: Code, cmd: "/skills" },
    { path: "/contact", label: "Contact", icon: Mail, cmd: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <Shield className="h-5 w-5" />
            <span className="font-mono font-bold text-sm hidden sm:block">
              <span className="text-muted-foreground">root@</span>lionel-cv
            </span>
          </Link>
          
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded font-mono text-xs transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-[0_0_10px_hsl(120_100%_50%/0.5)]"
                      : "hover:bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span className="hidden md:inline">{item.label}</span>
                  <span className="text-[10px] opacity-60 hidden lg:inline">{item.cmd}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
