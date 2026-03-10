import { Github, Mail, MessageCircle, Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-8 px-4 border-t border-border/50 relative noise">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-xs text-muted-foreground font-mono flex items-center gap-1.5">
        built with <Heart size={12} className="text-primary" /> by Niraj Kumar © 2026
      </p>
      <div className="flex gap-2">
        {[
          { icon: Github, href: "https://github.com/NirajK1202", label: "GitHub" },
          { icon: MessageCircle, href: "https://wa.me/9731733706", label: "WhatsApp" },
          { icon: Mail, href: "mailto:nirajkumar.official1202@gmail.com", label: "Email" },
        ].map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all" aria-label={s.label}>
            <s.icon size={16} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
