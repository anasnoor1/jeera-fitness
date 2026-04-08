import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calculator, Flame, ArrowRight, Activity, Target, Utensils } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionHeading from "../components/SectionHeading";

const activityLevels = [
  { value: 1.2, label: "Sedentary", description: "Little or no exercise" },
  { value: 1.375, label: "Light", description: "1-3 days/week" },
  { value: 1.55, label: "Moderate", description: "3-5 days/week" },
  { value: 1.725, label: "Active", description: "6-7 days/week" },
  { value: 1.9, label: "Very Active", description: "Intense + physical job" },
];

const goals = [
  { value: -500, label: "Lose Weight", description: "~0.5 kg/week", icon: "🔥" },
  { value: 0, label: "Maintain", description: "Keep current", icon: "⚖️" },
  { value: 300, label: "Lean Bulk", description: "~0.3 kg/week", icon: "💪" },
  { value: 500, label: "Bulk", description: "~0.5 kg/week", icon: "🏋️" },
];

export default function Calories() {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState(1.55);
  const [goal, setGoal] = useState(0);
  const [unit, setUnit] = useState("metric");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const a = parseFloat(age);
    let h = parseFloat(height);
    let w = parseFloat(weight);
    if (!a || !h || !w) return;
    if (unit === "imperial") { h *= 2.54; w *= 0.453592; }
    let bmr = gender === "male" ? 10 * w + 6.25 * h - 5 * a + 5 : 10 * w + 6.25 * h - 5 * a - 161;
    const tdee = Math.round(bmr * activity);
    const target = Math.round(tdee + goal);
    const protein = Math.round(w * 2);
    const fat = Math.round((target * 0.25) / 9);
    const carbs = Math.max(Math.round((target - protein * 4 - fat * 9) / 4), 50);
    setResult({ bmr: Math.round(bmr), tdee, target, protein, carbs, fat });
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <section style={{ paddingTop: "7rem", paddingBottom: "6rem" }}>
        <div className="container" style={{ maxWidth: "56rem" }}>
          <SectionHeading badge="Nutrition Tool" title="Calorie" highlight="Calculator" description="Calculate your daily caloric needs using the Mifflin-St Jeor equation, with personalized macro breakdowns." />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="card" style={{ padding: "2rem 2.5rem" }}>
            {/* Unit */}
            <div style={{ display: "flex", gap: "0.75rem", marginBottom: "2rem" }}>
              {["metric", "imperial"].map((u) => (
                <button key={u} onClick={() => { setUnit(u); setResult(null); }} className={`filter-btn ${unit === u ? "active" : ""}`}>
                  {u === "metric" ? "Metric (kg/cm)" : "Imperial (lb/in)"}
                </button>
              ))}
            </div>
            {/* Gender */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--muted-foreground)", marginBottom: "0.5rem" }}>Gender</label>
              <div style={{ display: "flex", gap: "0.75rem" }}>
                {["male", "female"].map((g) => (
                  <button key={g} onClick={() => setGender(g)} style={{ flex: 1, height: "3rem", borderRadius: "0.75rem", fontSize: "0.875rem", fontWeight: 600, border: gender === g ? "none" : "1px solid var(--border)", backgroundColor: gender === g ? "var(--primary)" : "var(--secondary)", color: gender === g ? "var(--primary-foreground)" : "var(--muted-foreground)", cursor: "pointer", transition: "all 0.2s", fontFamily: "var(--font-body)" }}>
                    {g === "male" ? "♂ Male" : "♀ Female"}
                  </button>
                ))}
              </div>
            </div>
            {/* Body Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", marginBottom: "1.5rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--muted-foreground)", marginBottom: "0.5rem" }}>Age</label>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="25" className="input" />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--muted-foreground)", marginBottom: "0.5rem" }}>Height ({unit === "metric" ? "cm" : "inches"})</label>
                <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder={unit === "metric" ? "170" : "67"} className="input" />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--muted-foreground)", marginBottom: "0.5rem" }}>Weight ({unit === "metric" ? "kg" : "lbs"})</label>
                <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder={unit === "metric" ? "70" : "154"} className="input" />
              </div>
            </div>
            {/* Activity */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--muted-foreground)", marginBottom: "0.75rem" }}>Activity Level</label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0.5rem" }}>
                {activityLevels.map((level) => (
                  <button key={level.value} onClick={() => setActivity(level.value)} style={{ borderRadius: "0.75rem", padding: "0.75rem", textAlign: "center", border: `1px solid ${activity === level.value ? "var(--primary)" : "var(--border)"}`, backgroundColor: activity === level.value ? "rgba(110,231,183,0.1)" : "var(--secondary)", color: activity === level.value ? "var(--primary)" : "var(--muted-foreground)", cursor: "pointer", transition: "all 0.2s", fontFamily: "var(--font-body)" }}>
                    <div style={{ fontSize: "0.75rem", fontWeight: 700 }}>{level.label}</div>
                    <div style={{ fontSize: "0.625rem", marginTop: "0.125rem", opacity: 0.7 }}>{level.description}</div>
                  </button>
                ))}
              </div>
            </div>
            {/* Goal */}
            <div style={{ marginBottom: "2rem" }}>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--muted-foreground)", marginBottom: "0.75rem" }}>Goal</label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.5rem" }}>
                {goals.map((g) => (
                  <button key={g.value} onClick={() => setGoal(g.value)} style={{ borderRadius: "0.75rem", padding: "0.75rem", textAlign: "center", border: `1px solid ${goal === g.value ? "var(--primary)" : "var(--border)"}`, backgroundColor: goal === g.value ? "rgba(110,231,183,0.1)" : "var(--secondary)", color: goal === g.value ? "var(--primary)" : "var(--muted-foreground)", cursor: "pointer", transition: "all 0.2s", fontFamily: "var(--font-body)" }}>
                    <div style={{ fontSize: "1.125rem", marginBottom: "0.25rem" }}>{g.icon}</div>
                    <div style={{ fontSize: "0.75rem", fontWeight: 700 }}>{g.label}</div>
                    <div style={{ fontSize: "0.625rem", marginTop: "0.125rem", opacity: 0.7 }}>{g.description}</div>
                  </button>
                ))}
              </div>
            </div>
            <button onClick={calculate} className="btn btn-primary btn-full btn-lg"><Calculator size={20} /> Calculate Calories</button>

            {result && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
                  <div className="card" style={{ padding: "1.5rem", textAlign: "center" }}>
                    <Activity size={20} color="var(--muted-foreground)" style={{ margin: "0 auto 0.5rem" }} />
                    <div style={{ fontSize: "0.75rem", color: "var(--muted-foreground)", marginBottom: "0.25rem" }}>BMR</div>
                    <div style={{ fontSize: "1.5rem", fontWeight: 700, fontFamily: "var(--font-display)" }}>{result.bmr}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--muted-foreground)" }}>cal/day at rest</div>
                  </div>
                  <div className="card" style={{ padding: "1.5rem", textAlign: "center" }}>
                    <Flame size={20} color="var(--muted-foreground)" style={{ margin: "0 auto 0.5rem" }} />
                    <div style={{ fontSize: "0.75rem", color: "var(--muted-foreground)", marginBottom: "0.25rem" }}>TDEE</div>
                    <div style={{ fontSize: "1.5rem", fontWeight: 700, fontFamily: "var(--font-display)" }}>{result.tdee}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--muted-foreground)" }}>cal/day maintenance</div>
                  </div>
                  <div className="glow-border" style={{ borderRadius: "1rem", border: "1px solid rgba(110,231,183,0.2)", backgroundColor: "rgba(110,231,183,0.05)", padding: "1.5rem", textAlign: "center" }}>
                    <Target size={20} color="var(--primary)" style={{ margin: "0 auto 0.5rem" }} />
                    <div style={{ fontSize: "0.75rem", color: "var(--muted-foreground)", marginBottom: "0.25rem" }}>Target Intake</div>
                    <div className="gradient-text" style={{ fontSize: "1.875rem", fontWeight: 700, fontFamily: "var(--font-display)" }}>{result.target}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--muted-foreground)" }}>cal/day</div>
                  </div>
                </div>
                {/* Macros */}
                <div className="card" style={{ padding: "1.5rem" }}>
                  <h3 style={{ fontWeight: 700, fontFamily: "var(--font-display)", fontSize: "0.875rem", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Utensils size={16} color="var(--primary)" /> Daily Macro Breakdown
                  </h3>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
                    {[
                      { label: "Protein", value: result.protein, unit: "g", cals: result.protein * 4, color: "var(--chart-1)" },
                      { label: "Carbs", value: result.carbs, unit: "g", cals: result.carbs * 4, color: "var(--chart-2)" },
                      { label: "Fat", value: result.fat, unit: "g", cals: result.fat * 9, color: "var(--chart-3)" },
                    ].map((macro) => (
                      <div key={macro.label} style={{ textAlign: "center" }}>
                        <div style={{ width: "0.75rem", height: "0.75rem", borderRadius: "50%", backgroundColor: macro.color, margin: "0 auto 0.5rem" }} />
                        <div style={{ fontSize: "1.5rem", fontWeight: 700, fontFamily: "var(--font-display)" }}>{macro.value}<span style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>{macro.unit}</span></div>
                        <div style={{ fontSize: "0.75rem", color: "var(--muted-foreground)" }}>{macro.label}</div>
                        <div style={{ fontSize: "0.75rem", color: "var(--muted-foreground)", marginTop: "0.25rem" }}>{macro.cals} cal</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: "1rem", display: "flex", height: "0.75rem", borderRadius: "9999px", overflow: "hidden" }}>
                    <div style={{ backgroundColor: "var(--chart-1)", width: `${(result.protein * 4 / result.target) * 100}%` }} />
                    <div style={{ backgroundColor: "var(--chart-2)", width: `${(result.carbs * 4 / result.target) * 100}%` }} />
                    <div style={{ backgroundColor: "var(--chart-3)", width: `${(result.fat * 9 / result.target) * 100}%` }} />
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", paddingTop: "1rem" }}>
                  <Link to="/diet"><button className="btn btn-primary" style={{ fontWeight: 600 }}><ArrowRight size={16} /> Browse Diet Plans</button></Link>
                  <Link to="/workouts"><button className="btn btn-outline" style={{ fontWeight: 600 }}>Find Workouts</button></Link>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
