import { Link, useLocation } from "react-router-dom";
import { Home, Briefcase, GraduationCap, Code, Mail } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Accueil", icon: Home },
    { path: "/experience", label: "Expérience", icon: Briefcase },
    { path: "/education", label: "Formation", icon: GraduationCap },
    { path: "/skills", label: "Compétences", icon: Code },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Serge Didi
          </Link>
          
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "hover:bg-muted text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="md:hidden flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`p-2 rounded-md transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
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
