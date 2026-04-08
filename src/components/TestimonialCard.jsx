import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function TestimonialCard({ name, role, quote, rating, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay }}
      className="card"
      style={{ padding: "2rem" }}
    >
      <div style={{ display: "flex", gap: "0.25rem", marginBottom: "1rem" }}>
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={16} fill="var(--primary)" color="var(--primary)" />
        ))}
      </div>
      <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.6, marginBottom: "1.5rem" }}>"{quote}"</p>
      <div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.875rem" }}>{name}</div>
        <div style={{ fontSize: "0.75rem", color: "var(--muted-foreground)" }}>{role}</div>
      </div>
    </motion.div>
  );
}
