import { motion } from "framer-motion";
import { Apple, Beef, Wheat, Salad, Leaf, Fish } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionHeading from "../components/SectionHeading";
import PlanCard from "../components/PlanCard";

const sampleMeals = [
  { time: "Breakfast", meal: "Oatmeal with berries, almonds, and whey protein", calories: 420, protein: 35, carbs: 55, fat: 12 },
  { time: "Snack", meal: "Greek yogurt with honey and granola", calories: 250, protein: 18, carbs: 30, fat: 8 },
  { time: "Lunch", meal: "Grilled chicken breast with quinoa and roasted veggies", calories: 550, protein: 45, carbs: 50, fat: 15 },
  { time: "Snack", meal: "Protein shake with banana and peanut butter", calories: 350, protein: 30, carbs: 35, fat: 12 },
  { time: "Dinner", meal: "Salmon fillet with sweet potato and steamed broccoli", calories: 580, protein: 40, carbs: 45, fat: 20 },
];

export default function Diet() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <section style={{ paddingTop: "7rem", paddingBottom: "3rem" }}>
        <div className="container">
          <SectionHeading badge="Nutrition" title="Fuel Your Body" highlight="The Right Way" description="Science-backed nutrition plans customized to your metabolism, food preferences, and fitness goals." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginBottom: "5rem" }}>
            <PlanCard icon={<Apple size={20} />} title="Clean Eating" description="Whole foods approach for sustainable health." price="$15" features={["Weekly meal plans", "Grocery lists", "Macro breakdowns", "Swap alternatives"]} />
            <PlanCard icon={<Beef size={20} />} title="High Protein" description="Optimized for muscle building and recovery." price="$25" featured features={["40/30/30 macro split", "Supplement timing", "Pre/post workout meals", "Recipes library", "Meal prep guides"]} delay={0.1} />
            <PlanCard icon={<Wheat size={20} />} title="Keto / Low Carb" description="Ketogenic plans for rapid fat loss." price="$25" features={["Keto-adapted recipes", "Carb cycling options", "Electrolyte guide", "Fat-adapted training tips"]} delay={0.2} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginBottom: "5rem" }}>
            <PlanCard icon={<Leaf size={20} />} title="Vegan Power" description="Plant-based nutrition without compromising gains." price="$20" features={["Complete amino acid combos", "B12 & iron tracking", "High-protein vegan recipes", "Meal prep schedule"]} />
            <PlanCard icon={<Fish size={20} />} title="Mediterranean" description="Heart-healthy eating for longevity." price="$20" features={["Olive oil & fish focus", "Anti-inflammatory foods", "Wine pairing guide", "Seasonal meal plans"]} delay={0.1} />
            <PlanCard icon={<Salad size={20} />} title="Intermittent Fasting" description="Timed eating for fat loss and mental clarity." price="$18" features={["16:8 & 20:4 protocols", "Fasting window tracker", "Breaking-fast recipes", "Supplement guide"]} delay={0.2} />
          </div>

          <SectionHeading badge="Sample Day" title="A Day of" highlight="Clean Eating" description="Here's what a typical day looks like on our High Protein plan." />
          <div style={{ maxWidth: "48rem", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {sampleMeals.map((meal, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="card" style={{ display: "flex", alignItems: "center", gap: "1.5rem", padding: "1.25rem" }}>
                <div style={{ width: "5rem", textAlign: "center" }}>
                  <div style={{ fontSize: "0.75rem", color: "var(--primary)", fontWeight: 700, textTransform: "uppercase" }}>{meal.time}</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.875rem", marginBottom: "0.25rem" }}>{meal.meal}</div>
                  <div style={{ display: "flex", gap: "1rem", fontSize: "0.75rem", color: "var(--muted-foreground)" }}>
                    <span>{meal.calories} cal</span>
                    <span>P: {meal.protein}g</span>
                    <span>C: {meal.carbs}g</span>
                    <span>F: {meal.fat}g</span>
                  </div>
                </div>
              </motion.div>
            ))}
            <div style={{ textAlign: "center", paddingTop: "1rem" }}>
              <div className="glow-border" style={{ display: "inline-block", borderRadius: "0.75rem", border: "1px solid rgba(110,231,183,0.2)", backgroundColor: "rgba(110,231,183,0.05)", padding: "1rem 2rem" }}>
                <div style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", marginBottom: "0.25rem" }}>Daily Total</div>
                <div className="gradient-text" style={{ fontSize: "1.5rem", fontWeight: 700, fontFamily: "var(--font-display)" }}>2,150 cal</div>
                <div style={{ fontSize: "0.75rem", color: "var(--muted-foreground)", marginTop: "0.25rem" }}>P: 168g · C: 215g · F: 67g</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
