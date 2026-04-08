import { motion } from "framer-motion";
import { Target, Users, Award, Lightbulb } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionHeading from "../components/SectionHeading";
import StatBadge from "../components/StatBadge";
import aboutImg from "../assets/about-team.jpg";

const values = [
  { icon: Target, title: "Results-Driven", description: "Every program is designed with measurable outcomes in mind." },
  { icon: Users, title: "Community First", description: "50,000+ members supporting each other on their fitness journey." },
  { icon: Award, title: "Expert-Backed", description: "Programs designed by certified trainers, nutritionists, and sports scientists." },
  { icon: Lightbulb, title: "Innovation", description: "AI-powered adaptive training that evolves with your progress." },
];

const team = [
  { name: "Alex Rivera", role: "Founder & CEO", bio: "Former D1 athlete with 10+ years in sports science." },
  { name: "Dr. Meena Patel", role: "Head of Nutrition", bio: "PhD in Clinical Nutrition, specializing in performance diets." },
  { name: "Jordan Kim", role: "Lead Trainer", bio: "NASM-certified with expertise in strength & conditioning." },
  { name: "Tara Osei", role: "Head of Product", bio: "Built fitness apps used by 1M+ people worldwide." },
];

export default function About() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <section style={{ paddingTop: "7rem", paddingBottom: "3rem" }}>
        <div className="container">
          <SectionHeading badge="Our Story" title="Making Fitness" highlight="Accessible" description="JeeraFit was born from a simple belief: everyone deserves a personalized path to health." />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ position: "relative", borderRadius: "1rem", overflow: "hidden", marginBottom: "5rem" }}>
            <img src={aboutImg} alt="JeeraFit team" style={{ width: "100%", height: "26rem", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, var(--background), transparent)" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "2rem 3rem" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "2.5rem" }}>
                <StatBadge value="50K+" label="Active Members" />
                <StatBadge value="200+" label="Programs" delay={0.1} />
                <StatBadge value="15+" label="Expert Coaches" delay={0.2} />
                <StatBadge value="30+" label="Countries" delay={0.3} />
              </div>
            </div>
          </motion.div>
          <SectionHeading badge="Our Values" title="What We" highlight="Stand For" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem", marginBottom: "5rem" }}>
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="card" style={{ padding: "1.75rem", textAlign: "center" }}>
                  <div style={{ width: "3rem", height: "3rem", borderRadius: "0.75rem", backgroundColor: "rgba(110,231,183,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", margin: "0 auto 1rem" }}>
                    <Icon size={24} />
                  </div>
                  <h3 style={{ fontWeight: 700, fontFamily: "var(--font-display)", marginBottom: "0.5rem" }}>{v.title}</h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.6 }}>{v.description}</p>
                </motion.div>
              );
            })}
          </div>
          <SectionHeading badge="The Team" title="Meet the" highlight="Experts" description="Our team combines decades of experience in fitness, nutrition, and technology." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {team.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="card" style={{ padding: "1.75rem", textAlign: "center" }}>
                <div style={{ width: "4rem", height: "4rem", borderRadius: "50%", backgroundColor: "rgba(110,231,183,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", margin: "0 auto 1rem", fontSize: "1.5rem", fontWeight: 700, fontFamily: "var(--font-display)" }}>
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 style={{ fontWeight: 700, fontFamily: "var(--font-display)" }}>{member.name}</h3>
                <div style={{ fontSize: "0.75rem", color: "var(--primary)", fontWeight: 600, marginBottom: "0.5rem" }}>{member.role}</div>
                <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.6 }}>{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
