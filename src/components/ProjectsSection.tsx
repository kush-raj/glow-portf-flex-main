// import { motion } from "framer-motion";
// import { ExternalLink, Github, Sparkles } from "lucide-react";

// const projects = [
//   { title: "Blinkit Sales Analytics Dashboard", desc: "An interactive Tableau dashboard analyzing Blinkit's sales performance — covering outlet-wise revenue, item category breakdown, fat content analysis, and customer ratings. Built to demonstrate end-to-end BI reporting skills.", tags: ["Tableau", "Data Visualization", "Sales Analytics","BI Reporting","E-Commerce"], featured: true },
//   { title: "Crypto Dashboard", desc: "Live crypto tracker with portfolio management, charts & price alerts.", tags: ["Next.js", "Web3", "Charts"], featured: false },
//   { title: "Dev Tools CLI", desc: "Productivity CLI for scaffolding projects, managing configs & automation.", tags: ["Node.js", "CLI", "TypeScript"], featured: false },
//   { title: "Social Media App", desc: "Instagram-style social app with stories, reels, real-time DMs.", tags: ["React Native", "Firebase", "AI"], featured: true },
// ];

// const ProjectsSection = () => (
//   <section id="projects" className="section-padding relative noise">
//     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
//     <div className="max-w-6xl mx-auto">
//       <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
//         <p className="text-xs font-mono text-accent mb-2 tracking-widest uppercase">// projects</p>
//         <h2 className="text-3xl md:text-4xl font-bold mb-10">Things I <span className="text-gradient">Built</span></h2>
//         <div className="grid sm:grid-cols-2 gap-5">
//           {projects.map((p, i) => (
//             <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
//               className="group p-6 rounded-xl glass card-glow hover:border-primary/20 transition-all relative">
//               {p.featured && (
//                 <div className="absolute top-4 right-4 flex items-center gap-1 text-xs font-mono text-primary">
//                   <Sparkles size={12} /> featured
//                 </div>
//               )}
//               <h3 className="font-semibold text-lg mb-2 group-hover:text-gradient transition-colors">{p.title}</h3>
//               <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
//               <div className="flex flex-wrap gap-2 mb-5">
//                 {p.tags.map((t) => (
//                   <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-secondary/80 text-secondary-foreground font-mono">{t}</span>
//                 ))}
//               </div>
//               <div className="flex gap-3">
//                 <a href="#" className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
//                   <Github size={14} /> Code
//                 </a>
//                 <a href="#" className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-accent transition-colors">
//                   <ExternalLink size={14} /> Live
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   </section>
// );

// export default ProjectsSection;





import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Blinkit Sales Analytics Dashboard",
    desc: "An interactive Tableau dashboard analyzing Blinkit's sales performance — covering outlet-wise revenue, item category breakdown, fat content analysis, and customer ratings. Built to demonstrate end-to-end BI reporting skills.",
    tags: ["Tableau","Data Visualization","Sales Analytics","BI Reporting","E-Commerce"],
    featured: true,
    live: "https://public.tableau.com/views/blinkitDashboard/Dashboard1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    code: "#"
  },
  // {
  //   title: "Crypto Dashboard",
  //   desc: "Live crypto tracker with portfolio management, charts & price alerts.",
  //   tags: ["Next.js","Web3","Charts"],
  //   featured: false,
  //   live: "#",
  //   code: "#"
  // },
  // {
  //   title: "Dev Tools CLI",
  //   desc: "Productivity CLI for scaffolding projects, managing configs & automation.",
  //   tags: ["Node.js","CLI","TypeScript"],
  //   featured: false,
  //   live: "#",
  //   code: "#"
  // },
  // {
  //   title: "Social Media App",
  //   desc: "Instagram-style social app with stories, reels, real-time DMs.",
  //   tags: ["React Native","Firebase","AI"],
  //   featured: true,
  //   live: "#",
  //   code: "#"
  // }
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding relative noise">

    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

    <div className="max-w-6xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <p className="text-xs font-mono text-accent mb-2 tracking-widest uppercase">
          // projects
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Things I <span className="text-gradient">Built</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-5">

          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-xl glass card-glow hover:border-primary/20 transition-all relative cursor-pointer"
            >

              {p.featured && (
                <div className="absolute top-4 right-4 flex items-center gap-1 text-xs font-mono text-primary">
                  <Sparkles size={12}/> featured
                </div>
              )}

              <h3 className="font-semibold text-lg mb-2 text-primary drop-shadow-[0_0_6px_rgba(59,130,246,0.7)] group-hover:text-accent transition-colors">
                {p.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-secondary/80 text-secondary-foreground font-mono border border-primary/40 shadow-[0_0_6px_rgba(59,130,246,0.6)] hover:shadow-[0_0_12px_rgba(59,130,246,0.9)] transition-all"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">

                <a
                  href={p.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={14}/> Code
                </a>

                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-accent transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={14}/> Live
                </a>

              </div>

            </motion.a>
          ))}

        </div>

      </motion.div>

    </div>

  </section>
);

export default ProjectsSection;