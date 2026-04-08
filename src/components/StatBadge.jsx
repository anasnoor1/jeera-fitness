import { motion } from "framer-motion";

export default function StatBadge({ value, label, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      style={{ textAlign: "center" }}
    >
      <div className="gradient-text" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, fontFamily: "var(--font-display)" }}>{value}</div>
      <div style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", marginTop: "0.25rem" }}>{label}</div>
    </motion.div>
  );
}
