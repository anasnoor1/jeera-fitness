import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionHeading from "../components/SectionHeading";

function getBmiCategory(bmi) {
  if (bmi < 18.5) return { label: "Underweight", color: "var(--chart-2)", advice: "You may need to gain some weight. Focus on calorie-dense nutritious foods and strength training." };
  if (bmi < 25) return { label: "Normal Weight", color: "var(--primary)", advice: "Great job! Maintain your weight with balanced nutrition and regular exercise." };
  if (bmi < 30) return { label: "Overweight", color: "var(--chart-5)", advice: "Consider increasing physical activity and adjusting your diet." };
  return { label: "Obese", color: "var(--destructive)", advice: "We recommend consulting a healthcare provider. Start with low-impact exercises and our structured diet plans." };
}

export default function Bmi() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [unit, setUnit] = useState("metric");
  const [result, setResult] = useState(null);

  const calculateBmi = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (!h || !w) return;
    let bmi;
    if (unit === "metric") { bmi = w / ((h / 100) * (h / 100)); }
    else { bmi = (703 * w) / (h * h); }
    setResult({ bmi: Math.round(bmi * 10) / 10, category: getBmiCategory(bmi) });
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <section style={{ paddingTop: "7rem", paddingBottom: "6rem" }}>
        <div className="container" style={{ maxWidth: "48rem" }}>
          <SectionHeading badge="Health Tool" title="BMI" highlight="Calculator" description="Calculate your Body Mass Index and get personalized recommendations." />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="card" style={{ padding: "2rem 2.5rem" }}>
            <div style={{ display: "flex", gap: "0.75rem", marginBottom: "2rem" }}>
              {["metric", "imperial"].map((u) => (
                <button key={u} onClick={() => { setUnit(u); setResult(null); }} className={`filter-btn ${unit === u ? "active" : ""}`}>
                  {u === "metric" ? "Metric (kg/cm)" : "Imperial (lb/in)"}
                </button>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", marginBottom: "2rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--muted-foreground)", marginBottom: "0.5rem" }}>Height ({unit === "metric" ? "cm" : "inches"})</label>
                <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder={unit === "metric" ? "170" : "67"} className="input" />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--muted-foreground)", marginBottom: "0.5rem" }}>Weight ({unit === "metric" ? "kg" : "lbs"})</label>
                <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder={unit === "metric" ? "70" : "154"} className="input" />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--muted-foreground)", marginBottom: "0.5rem" }}>Age (optional)</label>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="25" className="input" />
              </div>
            </div>
            <button onClick={calculateBmi} className="btn btn-primary btn-full btn-lg"><Calculator size={20} /> Calculate BMI</button>
            {result && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ marginTop: "2rem", borderRadius: "0.75rem", border: "1px solid rgba(110,231,183,0.2)", backgroundColor: "rgba(110,231,183,0.05)", padding: "2rem", textAlign: "center" }}>
                <div style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", marginBottom: "0.5rem" }}>Your BMI</div>
                <div className="gradient-text" style={{ fontSize: "3.75rem", fontWeight: 700, fontFamily: "var(--font-display)", marginBottom: "0.5rem" }}>{result.bmi}</div>
                <div style={{ fontSize: "1.125rem", fontWeight: 700, fontFamily: "var(--font-display)", color: result.category.color, marginBottom: "1rem" }}>{result.category.label}</div>
                <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", maxWidth: "28rem", margin: "0 auto", lineHeight: 1.6 }}>{result.category.advice}</p>
              </motion.div>
            )}
            <div style={{ marginTop: "2rem" }}>
              <div style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--muted-foreground)", marginBottom: "0.75rem" }}>BMI Scale Reference</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.5rem" }}>
                {[
                  { range: "< 18.5", label: "Underweight", bg: "rgba(56,189,248,0.2)", color: "var(--chart-2)" },
                  { range: "18.5–24.9", label: "Normal", bg: "rgba(110,231,183,0.2)", color: "var(--primary)" },
                  { range: "25–29.9", label: "Overweight", bg: "rgba(249,115,22,0.2)", color: "var(--chart-5)" },
                  { range: "30+", label: "Obese", bg: "rgba(239,68,68,0.2)", color: "var(--destructive)" },
                ].map((item) => (
                  <div key={item.label} style={{ borderRadius: "0.5rem", padding: "0.75rem", textAlign: "center", fontSize: "0.75rem", fontWeight: 600, backgroundColor: item.bg, color: item.color }}>
                    <div>{item.range}</div>
                    <div style={{ marginTop: "0.25rem", opacity: 0.8 }}>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
