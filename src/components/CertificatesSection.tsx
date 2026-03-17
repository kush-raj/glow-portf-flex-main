// import { motion } from "framer-motion";
// import { Award, ExternalLink } from "lucide-react";

// const certs = [
//   { title: "Data Analytics Internship", issuer: "Internship Studio", date: "2024", emoji: "☁️" },
//   { title: "Meta Front-End Developer", issuer: "Coursera / Meta", date: "2024", emoji: "⚛️" },
//   { title: "Full Stack Open", issuer: "University of Helsinki", date: "2023", emoji: "🎓" },
//   { title: "Google UX Design", issuer: "Coursera / Google", date: "2023", emoji: "🎨" },
// ];

// const CertificatesSection = () => (
//   <section id="certificates" className="section-padding relative noise">
//     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
//     <div className="max-w-6xl mx-auto">   
//       <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
//         <p className="text-xs font-mono text-accent mb-2 tracking-widest uppercase">// achievements</p>
//         <h2 className="text-3xl md:text-4xl font-bold mb-10">My <span className="text-gradient">Certificates</span></h2>
//         <div className="grid sm:grid-cols-2 gap-4">
//           {certs.map((c, i) => (
//             <motion.div key={c.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
//               className="flex items-center gap-4 p-5 rounded-xl glass card-glow hover:border-primary/20 transition-all group">
//               <div className="text-2xl shrink-0">{c.emoji}</div>
//               <div className="flex-1 min-w-0">
//                 <h3 className="font-semibold text-sm mb-0.5 group-hover:text-primary transition-colors truncate">{c.title}</h3>
//                 <p className="text-xs text-muted-foreground font-mono">{c.issuer} · {c.date}</p>
//               </div>
//               <a href="#" className="text-muted-foreground hover:text-accent transition-colors shrink-0" aria-label="View certificate">
//                 <ExternalLink size={14} />
//               </a>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   </section>
// );

// export default CertificatesSection;







import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const certs = [
  {
    title: "Data Analytics Internship",
    issuer: "Internship Studio",
    date: "Aug - Sep 2024",
    emoji: "📊",
    link: "https://drive.google.com/file/d/14zDHjcWbr7C-dT0iyF2A2SuFlhZcs9od/preview"
  },
  {
    title: "Digital Marketing Fundamentals",
    issuer: "IIDE – The Digital School",
    date: "22 March 2025",
    emoji: "📢",
    link: "https://drive.google.com/file/d/1dZUYsDz5MAZZetGE3aku_M2WUM0wdhgX/preview"
  },
  {
    title: "30-Days Power BI Micro Course",
    issuer: "CoursePe",
    date: "July 2025",
    emoji: "📈",
    link: "https://drive.google.com/file/d/1R1jqRUDNLznGuOFQ4ObmVr0cpJjg1Gzh/preview"
  },
  {
    title: "Junior Business Analyst",
    issuer: "Insta International Service Pvt. Ltd.",
    date: "10 Aug 2025",
    emoji: "💼",
    link: "https://drive.google.com/file/d/1eKv7Vuza9yg-gll1Lf_e316hGxHX1O9V/preview"
  },
  {
    title: "Data Skills Bootcamp on Analytics for the Future ",
    issuer: "Sharda University",
    date: "2025",
    emoji: "📘",
    link: "https://drive.google.com/file/d/1oYLQeIET4pmzQVCZYuyFVmPS_Vbn-It7/preview"
  },
  {
    title: "National Financial Literacy Quiz",
    issuer: "NISM / SEBI · Sharda University",
    date: "2026",
    emoji: "🎓",
    link: "https://drive.google.com/file/d/19qfv3r175B7e7ecudKHcdpf_iatBuznD/preview"
  },
  {
    title: "Data Skills Bootcamp on Analytics for the Future ",
    issuer: "Sharda University",
    date: "2025",
    emoji: "🎓",
    link: "https://drive.google.com/file/d/1oYLQeIET4pmzQVCZYuyFVmPS_Vbn-It7/preview"
  },
  
];

const CertificatesSection = () => (
  <section id="certificates" className="section-padding relative noise">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <p className="text-xs font-mono text-accent mb-2 tracking-widest uppercase">
          // achievements
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          My <span className="text-gradient">Certificates</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
  {certs.map((c, i) => (
    <motion.a
      key={c.title}
      href={c.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08 }}
      className="flex items-center gap-4 p-5 rounded-xl glass card-glow hover:border-primary/20 transition-all group cursor-pointer"
    >

      <div className="text-2xl shrink-0">{c.emoji}</div>

      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-sm mb-0.5 group-hover:text-primary transition-colors truncate">
          {c.title}
        </h3>
        <p className="text-xs text-muted-foreground font-mono">
          {c.issuer} · {c.date}
        </p>
      </div>

      <ExternalLink size={14} />

    </motion.a>
  ))}
</div>

      </motion.div>
    </div>
  </section>
);

export default CertificatesSection;
