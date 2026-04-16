import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, BarChart3, Flame, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionHeading from "../components/SectionHeading";
import { workouts } from "../data/workouts";
           
const categories = ["All", "Strength", "HIIT", "Cardio", "Flexibility", "Recovery"];
         
export default function Workouts() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? workouts : workouts.filter((w) => w.category === activeCategory);
    
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <section style={{ paddingTop: "7rem", paddingBottom: "3rem" }}>
        <div className="container">
          <SectionHeading badge="Workout Library" title="Find Your Perfect" highlight="Workout" description="Browse our extensive library of workout programs designed for every fitness level and goal." />
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.75rem", marginBottom: "3rem" }}>
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`filter-btn ${activeCategory === cat ? "active" : ""}`}>{cat}</button>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {filtered.map((workout, i) => {
              const Icon = workout.icon;
              return (
                <motion.div key={workout.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} className="card" style={{ padding: "1.75rem", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                    <div style={{ width: "2.75rem", height: "2.75rem", borderRadius: "0.75rem", backgroundColor: "rgba(110,231,183,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)" }}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 style={{ fontWeight: 700, fontFamily: "var(--font-display)" }}>{workout.title}</h3>
                      <span style={{ fontSize: "0.75rem", color: "var(--primary)", fontWeight: 600 }}>{workout.category}</span>
                    </div>
                  </div>
                  <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.6, marginBottom: "1.25rem", flex: 1 }}>{workout.description}</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.75rem", marginBottom: "1.25rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontSize: "0.75rem", color: "var(--muted-foreground)" }}><Clock size={14} /> {workout.duration}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontSize: "0.75rem", color: "var(--muted-foreground)" }}><BarChart3 size={14} /> {workout.level}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontSize: "0.75rem", color: "var(--muted-foreground)" }}><Flame size={14} /> {workout.calories} cal</div>
                  </div>
                  <Link to={`/workouts/${workout.slug}`}>
                    <button className="btn btn-outline btn-full" style={{ fontSize: "0.875rem", fontWeight: 600 }}>View Details <ArrowRight size={16} /></button>
                  </Link>
                </motion.div>
              );        
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
