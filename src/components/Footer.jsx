import { Link } from "react-router-dom";
import { Dumbbell } from "lucide-react";
   
const linkGroups = [
  { heading: "Product", items: [{ label: "Workouts", to: "/workouts" }, { label: "Diet Plans", to: "/diet" }, { label: "BMI Calculator", to: "/bmi" }] },
  { heading: "Company", items: [{ label: "About", to: "/about" }, { label: "Contact", to: "/contact" }] },
];
    
export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", backgroundColor: "rgba(28,29,46,0.5)" }}>
      <div className="container" style={{ padding: "4rem 1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2.5rem" }}>
          <div>
            <Link to="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.25rem", marginBottom: "1rem" }}>
              <Dumbbell size={20} color="var(--primary)" />
              JEERA<span style={{ color: "var(--primary)" }}>FIT</span>
            </Link>
            <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.6 }}>
              Transform your body and mind with personalized fitness and nutrition plans.
            </p>
          </div>
          {linkGroups.map((group) => (
            <div key={group.heading}>
              <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.875rem", marginBottom: "1rem" }}>{group.heading}</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {group.items.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", transition: "color 0.2s" }}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}   
        </div>
        <div style={{ marginTop: "3.5rem", paddingTop: "2rem", borderTop: "1px solid var(--border)", textAlign: "center", fontSize: "0.75rem", color: "var(--muted-foreground)" }}>
          © {new Date().getFullYear()} JeeraFit. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
