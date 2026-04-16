import { motion } from "framer-motion";
   
export default function FeatureCard({ icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay }}
      className="card"
      style={{ padding: "2rem" }}
    >
      <div style={{ width: "3rem", height: "3rem", borderRadius: "0.75rem", backgroundColor: "rgba(110,231,183,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", marginBottom: "1.25rem" }}>
        {icon}
      </div>
      <h3 style={{ fontSize: "1.125rem", fontWeight: 700, fontFamily: "var(--font-display)", marginBottom: "0.5rem" }}>{title}</h3>
      <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.6 }}>{description}</p>
    </motion.div>
  );
}
