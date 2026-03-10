import { useState } from "react";
import { Moon, Sun, Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const links = ["About", "Skills", "Projects", "Certificates", "Contact"];

const Navbar = ({ isDark, toggleTheme }: NavbarProps) => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-8 h-16">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2 text-lg font-display font-bold">
          <Sparkles size={18} className="text-primary" />
          <span className="text-gradient">Portfolio</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all">
              {l}
            </button>
          ))}
          <div className="w-px h-5 bg-border mx-2" />
          <button onClick={toggleTheme} className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all" aria-label="Toggle theme">
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button onClick={toggleTheme} className="p-2 rounded-lg bg-secondary/50 text-muted-foreground" aria-label="Toggle theme">
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button onClick={() => setOpen(!open)} className="p-2 rounded-lg bg-secondary/50 text-muted-foreground" aria-label="Menu">
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden overflow-hidden glass border-t border-border/50">
            <div className="flex flex-col p-3 gap-1">
              {links.map((l) => (
                <button key={l} onClick={() => scrollTo(l)} className="text-left py-2.5 px-4 rounded-lg text-sm font-medium text-muted-foreground hover:bg-secondary/50 hover:text-foreground transition-all">
                  {l}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
