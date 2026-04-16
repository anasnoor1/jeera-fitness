import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Dumbbell, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Workouts", to: "/workouts" },
  { label: "Diet Plans", to: "/diet" },
  { label: "Calories", to: "/calories" },
  { label: "BMI", to: "/bmi" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];
   
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: "rgba(20,21,32,0.8)", backdropFilter: "blur(16px)", borderBottom: "1px solid var(--border)" }}>
      <div className="container" style={{ height: "4rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.25rem" }}>
          <Dumbbell size={24} color="var(--primary)" />
          <span>JEERA<span style={{ color: "var(--primary)" }}>FIT</span></span>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }} className="desktop-nav">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} style={{ fontSize: "0.875rem", fontWeight: 500, color: location.pathname === l.to ? "var(--primary)" : "var(--muted-foreground)", transition: "color 0.2s" }}>
              {l.label}
            </Link>
          ))}
          <button className="btn btn-primary btn-sm">Start Free Trial</button>
        </div>

        <button className="mobile-menu-btn" onClick={() => setOpen(!open)} style={{ background: "none", border: "none", color: "var(--foreground)", cursor: "pointer" }}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-nav"
            style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--background)", padding: "1rem 1.5rem" }}
          >
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} style={{ display: "block", padding: "0.5rem 0", fontSize: "0.875rem", fontWeight: 500, color: location.pathname === l.to ? "var(--primary)" : "var(--muted-foreground)" }}>
                {l.label}
              </Link>
            ))}
            <button className="btn btn-primary btn-full" style={{ marginTop: "0.75rem" }}>Start Free Trial</button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .desktop-nav { display: flex; }
        .mobile-menu-btn { display: none; }
        .mobile-nav { display: block; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-nav { display: none !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
