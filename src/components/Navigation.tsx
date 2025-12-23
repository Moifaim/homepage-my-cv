import { Link, useLocation } from "react-router-dom";
import { Shield, Briefcase, GraduationCap, Code, Mail, Home } from "lucide-react";

const navItems = [
  { path: "/", label: "Home", icon: Home, cmd: "~" },
  { path: "/experience", label: "Exp", icon: Briefcase, cmd: "/exp" },
  { path: "/education", label: "Edu", icon: GraduationCap, cmd: "/edu" },
  { path: "/skills", label: "Skills", icon: Code, cmd: "/skills" },
  { path: "/contact", label: "Contact", icon: Mail, cmd: "/contact" },
];

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-xl border-b border-primary/10" />
      
      <div className="container mx-auto px-4 relative">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group"
          >
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 group-hover:border-primary/40 group-hover:bg-primary/20 transition-all duration-300">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <span className="font-mono font-semibold text-sm hidden sm:block">
              <span className="text-muted-foreground">root@</span>
              <span className="text-foreground group-hover:text-primary transition-colors">lionel-cv</span>
            </span>
          </Link>
          
          {/* Navigation items */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    relative flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs
                    transition-all duration-300 group
                    ${isActive
                      ? "bg-primary/20 text-primary border border-primary/30"
                      : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                    }
                  `}
                >
                  <Icon className={`h-4 w-4 transition-transform duration-300 ${isActive ? '' : 'group-hover:scale-110'}`} />
                  <span className="hidden md:inline font-medium">{item.label}</span>
                  <span className={`
                    text-[10px] opacity-50 hidden lg:inline font-normal
                    ${isActive ? 'text-primary' : ''}
                  `}>
                    {item.cmd}
                  </span>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full" />
                  )}
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
