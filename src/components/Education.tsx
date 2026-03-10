import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    title: "MBA - Business Analytics",
    institute: "Sharda University",
    date: "Pursuing",
    percentage: "7.3 CGPA"
  },
  {
    title: "Bachelor of Business Administration (BBA)",
    institute: "East Point College",
    date: "2023",
    percentage: "6.53 CGPA"
  },
  {
    title: "Intermediate",
    institute: "Ujjval Vidyalaya",
    date: "2020",
    percentage: "62%"
  },
  {
    title: "High School",
    institute: "Florence Public School",
    date: "2018",
    percentage: "61.60%"
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding relative noise">
      <div className="max-w-6xl mx-auto">

        <p className="text-xs font-mono text-accent mb-2 tracking-widest uppercase">
          // education
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          My <span className="text-gradient">Education</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl glass card-glow hover:border-primary/20 transition-all"
            >

              {/* Date */}
              <p className="text-xs text-accent mb-2 font-mono">
                {edu.date}
              </p>

              {/* Title */}
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="text-primary" size={20}/>
                <h3 className="font-semibold text-lg">
                  {edu.title}
                </h3>
              </div>

              {/* Institute */}
              <p className="text-muted-foreground text-sm mb-4">
                {edu.institute}
              </p>

              {/* Percentage Glowing Box */}
              <div className="inline-block px-4 py-1 rounded-md border border-primary/30 glow-primary text-sm font-medium">
                {edu.percentage}
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default EducationSection;