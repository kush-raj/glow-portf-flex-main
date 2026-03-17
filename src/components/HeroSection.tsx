// import { motion } from "framer-motion";
// import { Github, Mail, Download, MessageCircle, ArrowDown, Terminal } from "lucide-react";
// import profileImg from "@/assets/niraj.png";

// const HeroSection = () => (
//   <section className="relative min-h-screen flex items-center section-padding pt-24 overflow-hidden noise">
//     {/* Bg glow orbs */}
//     <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
//     <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-accent/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
//     <div className="absolute inset-0 grid-pattern opacity-30" />

//     <div className="max-w-6xl mx-auto w-full relative z-10">
//       <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
//         <motion.div className="flex-1" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
//           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/60 border border-border/50 text-xs font-mono text-muted-foreground mb-6">
//             <Terminal size={12} className="text-accent" />
//             <span>available for work</span>
//             <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
//           </div>

//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 leading-[1.1] tracking-tight">
//             Niraj Kumar <br />
//             <span className="text-gradient text-4xl sm:text-5xl md:text-6xl lg:text-4xl font-bold mb-3 leading-[1.1] tracking-tight">Business Analyst</span>
//           </h1>
//           <p className="text-base md:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
//             Turning ideas into reality ⚡
//           </p>

//           <div className="flex flex-wrap gap-3 mb-8">
//             <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity glow-primary">
//               <Mail size={16} /> Let's Talk
//             </a>
//             <a href="/resume.pdf" download className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg glass text-foreground font-medium text-sm hover:bg-secondary/80 transition-all">
//               <Download size={16} /> Resume
//             </a>
//           </div>

//           <div className="flex gap-3">
//             {[
//               { icon: Github, href: "https://github.com/NirajK1202", label: "GitHub" },
//               { icon: MessageCircle, href: "https://wa.me/9731733706", label: "WhatsApp" },
//               { icon: Mail, href: "mailto:nirajkumar.official1202@gmail.com", label: "Email" },
//             ].map((s) => (
//               <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
//                 className="p-2.5 rounded-lg glass text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all" aria-label={s.label}>
//                 <s.icon size={18} />
//               </a>
//             ))}
//           </div>
//         </motion.div>

//         {/* Profile Photo */}
//         <motion.div className="relative" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
//           <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72">
//             <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 blur-2xl animate-pulse-glow" />
//             <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/30 glow-primary">
//             <img
//   src={profileImg}
//   alt="Niraj Kumar"
//   className="absolute inset-0 w-full h-full object-cover object-center"
// />
//             </div>
//             {/* Floating badges */}
//             <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -right-2 top-6 px-3 py-1.5 rounded-full glass text-xs font-mono text-accent border-accent/20 border">
//             🗄️ SQL
//             </motion.div>
//             <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -left-4 bottom-10 px-3 py-1.5 rounded-full glass text-xs font-mono text-primary border-primary/20 border">
//             📈 POWER BI
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
//         <ArrowDown size={20} className="text-muted-foreground" />
//       </motion.div>
//     </div>
//   </section>
// );

// export default HeroSection;



import { motion } from "framer-motion";
import { Github, Mail, Download, MessageCircle, ArrowDown, Terminal, Linkedin } from "lucide-react";
import profileImg from "@/assets/Niraj.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center section-padding pt-24 overflow-hidden noise">
    
    {/* Bg glow orbs */}
    <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
    <div
      className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-accent/10 blur-[100px] animate-pulse-glow"
      style={{ animationDelay: "1.5s" }}
    />
    <div className="absolute inset-0 grid-pattern opacity-30" />

    <div className="max-w-6xl mx-auto w-full relative z-10">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">

        {/* Left Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/60 border border-border/50 text-xs font-mono text-muted-foreground mb-6">
            <Terminal size={12} className="text-accent" />
            <span>available for work</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 leading-[1.1] tracking-tight">
            Niraj Kumar <br />
            <span className="text-gradient text-4xl sm:text-5xl md:text-6xl lg:text-4xl font-bold">
              Business Analyst
            </span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
            Turning ideas into reality ⚡
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity glow-primary"
            >
              <Mail size={16} /> Let's Talk
            </a>

            <a
              href="/Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg glass text-foreground font-medium text-sm hover:bg-secondary/80 transition-all"
            >
              <Download size={16} /> Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            {[
              { icon: Linkedin, href: "www.linkedin.com/in/niraj-kumar-6a9512314", label: "Linkedin" },
              { icon: Github, href: "https://github.com/NirajK1202", label: "GitHub" },
              { icon: MessageCircle, href: "https://wa.me/9731733706", label: "WhatsApp" },
              { icon: Mail, href: "mailto:nirajkumar.official1202@gmail.com", label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg glass text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
                aria-label={s.label}
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Profile Photo */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72">

            {/* Glow background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 blur-2xl animate-pulse-glow" />

            {/* Image container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/30 glow-primary">
             <img
   src={profileImg}
   alt="Niraj Kumar"
   className="absolute inset-0 w-full h-full object-cover object-center"
 />
 </div>
            {/* Floating badges */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -right-2 top-6 px-3 py-1.5 rounded-full glass text-xs font-mono text-accent border-accent/20 border"
            >
              🗄️ SQL
            </motion.div>

            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -left-4 bottom-10 px-3 py-1.5 rounded-full glass text-xs font-mono text-primary border-primary/20 border"
            >
              📈 POWER BI
            </motion.div>

          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={20} className="text-muted-foreground" />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;