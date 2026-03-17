// import { motion } from "framer-motion";
// import { User, Briefcase, GraduationCap, Zap } from "lucide-react";

// const cards = [
//   { icon: User, title: "Who I Am", desc: "I am Niraj Kumar, an entry-level Business Analytics professional with an MBA specialization in Business Analytics from Sharda University. Skilled in Excel, SQL, and Power BI, with hands-on academic and project experience in data analysis and dashboard development.", color: "text-primary" },
//   { icon: Briefcase, title: "Experience", desc: "3+ years shipping production apps. Startups, freelance, open source — I've done it all.", color: "text-accent" },
//   { icon: GraduationCap, title: "Education", desc: "B.Tech in CS. Self-taught the rest. YouTube University never disappoints.", color: "text-primary" },
//   { icon: Zap, title: "Superpower", desc: "Turning Figma designs into pixel-perfect, performant code faster than your CI/CD pipeline.", color: "text-accent" },
// ];

// const AboutSection = () => (
//   <section id="about" className="section-padding relative noise">
//     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
//     <div className="max-w-6xl mx-auto">
//       <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
//         <p className="text-xs font-mono text-accent mb-2 tracking-widest uppercase">// about me</p>
//         <h2 className="text-3xl md:text-4xl font-bold mb-10">Know <span className="text-gradient">Me Better</span></h2>
//         <div className="grid sm:grid-cols-2 gap-4">
//           {cards.map((item, i) => (
//             <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
//               className="group p-6 rounded-xl glass card-glow hover:border-primary/20 transition-all">
//               <item.icon className={`${item.color} mb-3`} size={24} />
//               <h3 className="font-semibold text-base mb-1.5">{item.title}</h3>
//               <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   </section>
// );

// export default AboutSection;


import { motion } from "framer-motion";
import { User } from "lucide-react";

const WhoIAmSection = () => (
  <section id="whoiam" className="section-padding relative noise">

    <div className="max-w-6xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <p className="text-xs font-mono text-accent mb-2 tracking-widest uppercase">
          // who i am
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          About <span className="text-gradient">Me</span>
        </h2>

        {/* GRID LAYOUT */}
        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* LEFT CARD (YOUR ORIGINAL CODE - UNCHANGED) */}
          <div className="p-6 rounded-xl glass card-glow hover:border-primary/20 transition-all max-w-xl">

            <User className="text-primary mb-3" size={24} />

            <h3 className="font-semibold text-base mb-3">
              Who I Am
            </h3>

            <div className="space-y-4 text-sm leading-relaxed text-white">

              <p>
                I am Niraj Kumar, an entry-level{" "}
                <span className="text-primary glow-primary font-semibold">
                  Business Analytics
                </span>{" "}
                professional with an MBA specialization in Business Analytics from{" "}
                <span className="text-accent glow-accent font-semibold">
                  Sharda University.
                </span>
              </p>

              <p>
                Skilled in{" "}
                <span className="text-primary glow-primary font-semibold">
                  Excel, SQL, and Power BI
                </span>{" "}
                , with hands-on academic and project experience in data analysis and dashboard development. I bring a unique blend of sales, HR, and analytics experience — enabling me to bridge the gap between people, processes, and data.
              </p>

              <p>
              I enjoy solving{" "}
                <span className="text-primary glow-primary font-semibold">
                real-world
                </span>{" "}
                business problems and helping organizations make{" "}
                <span className="text-accent glow-accent font-semibold">
                data-driven decisions.
                </span>
              </p>

            </div>
          </div>

          {/* RIGHT SIDE INFO PANEL */}
          <div className="space-y-4">

            <div className="glass p-4 rounded-lg flex justify-between">
              <span className="text-xs text-gray-400 tracking-widest">ROLE</span>
              <span className="font-semibold">Business Analyst</span>
            </div>

            <div className="glass p-4 rounded-lg flex justify-between">
              <span className="text-xs text-gray-400 tracking-widest">EDUCATION</span>
              <span className="font-semibold text-right">
                MBA – Business Analytics <br />
                <span className="text-sm text-accent">Sharda University (Pursuing)</span>
              </span>
            </div>

            <div className="glass p-4 rounded-lg flex justify-between">
              <span className="text-xs text-gray-400 tracking-widest">LOCATION</span>
              <span className="font-semibold text-right">
                Alpha 1, Greater Noida, UP - 201310
              </span>
            </div>

            <div className="glass p-4 rounded-lg flex justify-between">
              <span className="text-xs text-gray-400 tracking-widest">PHONE</span>
              <span className="font-semibold">
                +91 9731733706
              </span>
            </div>

            <div className="glass p-4 rounded-lg flex justify-between">
              <span className="text-xs text-gray-400 tracking-widest">EMAIL</span>
              <span className="font-semibold text-accent">
                nirajkumar.official1202@gmail.com
              </span>
            </div>

            <div className="glass p-4 rounded-lg flex justify-between">
              <span className="text-xs text-gray-400 tracking-widest">STATUS</span>
              <span className="text-green-400 font-semibold">
                ● Open to Opportunities
              </span>
            </div>

          </div>

        </div>

      </motion.div>

    </div>

  </section>
);

export default WhoIAmSection;