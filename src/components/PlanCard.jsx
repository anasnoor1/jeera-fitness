import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function PlanCard({ title, description, features, price, period = "/month", featured, icon, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay }}
      className={featured ? "card glow-border" : "card"}
      style={{
        padding: "2rem",
        position: "relative",
        backgroundColor: featured ? "rgba(110,231,183,0.05)" : "var(--card)",
        borderColor: featured ? "rgba(110,231,183,0.3)" : undefined,
        transition: "transform 0.3s",
      }}
    >
      {featured && (
        <span style={{ position: "absolute", top: "-0.75rem", left: "50%", transform: "translateX(-50%)", padding: "0.25rem 1rem", borderRadius: "9999px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}>
          Most Popular
        </span>
      )}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
        <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "0.75rem", backgroundColor: "rgba(110,231,183,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)" }}>
          {icon}
        </div>
        <h3 style={{ fontSize: "1.25rem", fontWeight: 700, fontFamily: "var(--font-display)" }}>{title}</h3>
      </div>
      <p style={{ color: "var(--muted-foreground)", fontSize: "0.875rem", marginBottom: "1.5rem" }}>{description}</p>
      <div style={{ marginBottom: "1.5rem" }}>
        <span style={{ fontSize: "2.25rem", fontWeight: 700, fontFamily: "var(--font-display)" }}>{price}</span>
        <span style={{ color: "var(--muted-foreground)", fontSize: "0.875rem" }}>{period}</span>
      </div>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
        {features.map((f) => (
          <li key={f} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "var(--surface-foreground)" }}>
            <Check size={16} color="var(--primary)" /> {f}
          </li>
        ))}
      </ul>
      <button className={featured ? "btn btn-primary btn-full" : "btn btn-outline btn-full"} style={{ height: "3rem", fontSize: "0.875rem" }}>
        Get Started
      </button>
    </motion.div>
  );
}
