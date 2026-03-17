import { motion } from "framer-motion";

const skills = [

  { name: "PYTHON (Basic)", icon: "🐍", tag: "Analytics & Data" },
  { name: "POWER BI", icon: "📈", tag: "Analytics & Data" },
  { name: "SQL (Basic)", icon: "🗄️", tag: "Analytics & Data" },
  { name: "MS TOOLS", icon: "📊", tag: "Analytics & Data" },
  
];
const SkillsSection = () => (
  <section id="skills" className="section-padding relative noise">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="text-xs font-mono text-accent mb-2 tracking-widest uppercase">// tech stack</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">My <span className="text-gradient">Skills</span></h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="group relative glass rounded-xl p-5 flex flex-col items-center gap-3 cursor-default card-glow"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
              
              <span className="text-3xl relative z-10">{skill.icon}</span>
              <span className="text-sm font-medium font-mono relative z-10 text-foreground text-center">{skill.name}</span>
              <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full bg-primary/10 text-accent border border-accent/20 relative z-10">
                {skill.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
