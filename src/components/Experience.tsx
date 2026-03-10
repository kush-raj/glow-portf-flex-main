import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    date: "Current Role",
    role: "Junior Business Analyst",
    company: "Insta International Service Pvt. Ltd. (NGO)",
    logo: "/logos/insta-international-ngo.svg",
    work: [
      "Worked in Finance & Marketing sector.",
      "Supported business analysis tasks across finance and marketing functions.",
      "Contributed to process documentation and stakeholder reporting."
    ],
    skills: ["Finance", "Marketing", "NGO"]
  },
  {
    date: "Jan 2023 – Jun 2023",
    role: "HR Consultant",
    company: "Mankind",
    logo: "/logos/mankind.svg",
    work: [
      "Supported HR operations including recruitment coordination.",
      "Managed employee documentation and onboarding processes.",
      "Collaborated with cross-functional teams on HR initiatives."
    ],
    skills: ["HR Operaions", "Recruiment", "Onboarding"]
  },
  {
    date: "Feb 2022 – Dec 2022",
    role: "Sales Executive",
    company: "KreditBee",
    logo: "/logos/kreditbee.svg",
    work: [
      "Gained hands-on experience in customer engagement and sales coordination.",
      "Managed relationship building with clients and prospects.",
      "Developed strong communication and persuasion skills in a fast-paced fintech environment."
    ],
    skills: ["Sales", "Fintech", "CRM"]
  }
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding relative noise">

    <div className="max-w-6xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <p className="text-xs font-mono text-accent mb-2 tracking-widest uppercase">
          // experience
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          My <span className="text-gradient">Experience</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-5">

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl glass card-glow hover:border-primary/20 transition-all"
            >

              {/* Date */}
              <p className="text-xs text-muted-foreground mb-2">
                {exp.date}
              </p>

              {/* Company Logo + Name */}
              <div className="flex items-center gap-2 mb-3">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-6 h-6 object-contain"
                />
                <span className="text-sm text-accent font-medium">
                  {exp.company}
                </span>
              </div>

              {/* Role */}
              <h3 className="font-semibold text-base mb-2 flex items-center gap-2">
                <Briefcase size={16} />
                {exp.role}
              </h3>

              {/* Work */}
              <ul className="text-muted-foreground text-sm mb-4 space-y-1 list-disc list-inside">
                {exp.work.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs rounded-md border border-primary/30 text-primary bg-primary/10 hover:shadow-[0_0_10px_rgba(99,102,241,0.6)] transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}

        </div>

      </motion.div>

    </div>

  </section>
);

export default ExperienceSection;