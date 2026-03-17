// import { motion } from "framer-motion";
// import { Mail, MessageCircle, Github, Send, Sparkles } from "lucide-react";
// import { useState } from "react";

// const ContactSection = () => {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     window.location.href = `mailto:nirajkumar.official1202@gmail.com?subject=Portfolio Contact from ${form.name}&body=${form.message}`;
//   };

//   return (
//     <section id="contact" className="section-padding relative noise">
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
//       <div className="absolute bottom-1/3 -left-32 w-72 h-72 rounded-full bg-primary/5 blur-[100px]" />
//       <div className="max-w-6xl mx-auto relative z-10">
//         <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
//           <p className="text-xs font-mono text-accent mb-2 tracking-widest uppercase">// let's connect</p>
//           <h2 className="text-3xl md:text-4xl font-bold mb-10">Get in <span className="text-gradient">Touch</span></h2>
//           <div className="grid md:grid-cols-2 gap-10">
//             <div>
//               <p className="text-muted-foreground mb-6 leading-relaxed">Got a project idea? Want to collab? Or just want to say hi? My DMs are always open. 💬</p>
//               <div className="space-y-3">
//                 {[
//                   { icon: Mail, label: "nirajkumar.official1202@gmail.com", href: "mailto:nirajkumar.official1202@gmail.com" },
//                   { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/9731733706" },
//                   { icon: Github, label: "github.com/Niraj", href: "https://github.com/NirajK1202" },
//                 ].map((c) => (
//                   <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
//                     className="flex items-center gap-3 p-3.5 rounded-xl glass hover:border-primary/20 transition-all text-sm text-muted-foreground hover:text-foreground group">
//                     <c.icon size={16} className="text-primary group-hover:text-accent transition-colors shrink-0" />
//                     <span className="font-mono text-xs">{c.label}</span>
//                   </a>
//                 ))}
//               </div>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input type="text" placeholder="your name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
//                 className="w-full px-4 py-3 rounded-xl glass text-sm font-mono placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all" />
//               <input type="email" placeholder="your email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
//                 className="w-full px-4 py-3 rounded-xl glass text-sm font-mono placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all" />
//               <textarea placeholder="your message" required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
//                 className="w-full px-4 py-3 rounded-xl glass text-sm font-mono placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 resize-none transition-all" />
//               <button type="submit" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity glow-primary">
//                 <Send size={14} /> Send it <Sparkles size={12} />
//               </button>
//             </form>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

import { motion } from "framer-motion";
import { Mail, MessageCircle, Github, Send, Sparkles, Linkedin } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      "SERVICE_ID",
      "TEMPLATE_ID",
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      "PUBLIC_KEY"
    )
    .then(() => {
      alert("Message sent successfully 🚀");
      setForm({ name: "", email: "", message: "" });
    })
    .catch(() => {
      alert("Failed to send message ❌");
    });
  };

  return (
    <section id="contact" className="section-padding relative noise">

      <div className="max-w-6xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Get in <span className="text-gradient">Touch</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Contact Links */}
            <div className="space-y-3">

              <a
                href="mailto:nirajkumar.official1202@gmail.com"
                className="flex items-center gap-3 p-3.5 rounded-xl glass text-sm"
              >
                <Mail size={16}/> Email
              </a>

              <a
                href="https://wa.me/9731733706"
                target="_blank"
                className="flex items-center gap-3 p-3.5 rounded-xl glass text-sm"
              >
                <MessageCircle size={16}/> WhatsApp
              </a>

              <a
                href="https://github.com/NirajK1202"
                target="_blank"
                className="flex items-center gap-3 p-3.5 rounded-xl glass text-sm"
              >
                <Github size={16}/> Github
              </a>
              <a
                href="https://linkedin.com/in/niraj-kumar-6a9512314"
                target="_blank"
                className="flex items-center gap-3 p-3.5 rounded-xl glass text-sm"
              >
                <Linkedin size={16}/> Linkedin
              </a>

            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                placeholder="your name"
                required
                value={form.name}
                onChange={(e)=>setForm({...form,name:e.target.value})}
                className="w-full px-4 py-3 rounded-xl glass text-sm font-mono"
              />

              <input
                type="email"
                placeholder="your email"
                required
                value={form.email}
                onChange={(e)=>setForm({...form,email:e.target.value})}
                className="w-full px-4 py-3 rounded-xl glass text-sm font-mono"
              />

              <textarea
                placeholder="your message"
                required
                rows={4}
                value={form.message}
                onChange={(e)=>setForm({...form,message:e.target.value})}
                className="w-full px-4 py-3 rounded-xl glass text-sm font-mono"
              />

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm glow-primary"
              >
                <Send size={14}/> Send it <Sparkles size={12}/>
              </button>

            </form>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default ContactSection;