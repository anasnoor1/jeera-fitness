import { motion } from "framer-motion";

export default function SectionHeading({ badge, title, highlight, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      style={{ textAlign: "center", marginBottom: "4rem" }}
    >
      {badge && <span className="badge" style={{ marginBottom: "1.5rem", display: "inline-block" }}>{badge}</span>}
      <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", fontWeight: 700, fontFamily: "var(--font-display)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {description && (
        <p style={{ marginTop: "1.25rem", fontSize: "1.125rem", color: "var(--muted-foreground)", maxWidth: "42rem", margin: "1.25rem auto 0", lineHeight: 1.6 }}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
