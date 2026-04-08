import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, BarChart3, Flame, Dumbbell, Target, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getWorkoutBySlug } from "../data/workouts";

export default function WorkoutDetail() {
  const { slug } = useParams();
  const workout = getWorkoutBySlug(slug);
  const [completedExercises, setCompletedExercises] = useState(new Set());
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);

  useEffect(() => {
    let id;
    if (timerRunning) {
      id = setInterval(() => setTimerSeconds((s) => s + 1), 1000);
    }
    return () => clearInterval(id);
  }, [timerRunning]);

  if (!workout) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "2.25rem", fontWeight: 700, fontFamily: "var(--font-display)", marginBottom: "1rem" }}>Workout Not Found</h1>
          <p style={{ color: "var(--muted-foreground)", marginBottom: "1.5rem" }}>This workout doesn't exist.</p>
          <Link to="/workouts"><button className="btn btn-primary">Browse Workouts</button></Link>
        </div>
      </div>
    );
  }

  const Icon = workout.icon;
  const toggleExercise = (index) => {
    setCompletedExercises((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index); else next.add(index);
      return next;
    });
  };
  const formatTime = (s) => `${Math.floor(s / 60).toString().padStart(2, "0")}:${(s % 60).toString().padStart(2, "0")}`;
  const progress = workout.exercises.length > 0 ? Math.round((completedExercises.size / workout.exercises.length) * 100) : 0;

  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <section style={{ paddingTop: "6rem", paddingBottom: "3rem" }}>
        <div className="container" style={{ maxWidth: "56rem" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "var(--muted-foreground)", marginBottom: "2rem" }}>
            <Link to="/workouts" style={{ transition: "color 0.2s" }}>Workouts</Link>
            <ChevronRight size={16} />
            <span style={{ color: "var(--foreground)", fontWeight: 500 }}>{workout.title}</span>
          </div>

          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
              <div style={{ width: "3.5rem", height: "3.5rem", borderRadius: "1rem", backgroundColor: "rgba(110,231,183,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)" }}>
                <Icon size={28} />
              </div>
              <div>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--primary)" }}>{workout.category}</span>
                <h1 style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: 700, fontFamily: "var(--font-display)" }}>{workout.title}</h1>
              </div>
            </div>
            <p style={{ color: "var(--muted-foreground)", lineHeight: 1.6, maxWidth: "42rem" }}>{workout.longDescription}</p>
          </motion.div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", marginBottom: "2.5rem" }}>
            {[
              { icon: Clock, label: "Duration", value: workout.duration },
              { icon: BarChart3, label: "Level", value: workout.level },
              { icon: Flame, label: "Calories", value: `${workout.calories} cal` },
              { icon: Target, label: "Exercises", value: `${workout.exercises.length}` },
            ].map((stat) => (
              <div key={stat.label} className="card" style={{ padding: "1rem", textAlign: "center" }}>
                <stat.icon size={20} color="var(--primary)" style={{ margin: "0 auto 0.5rem" }} />
                <div style={{ fontSize: "0.75rem", color: "var(--muted-foreground)", marginBottom: "0.25rem" }}>{stat.label}</div>
                <div style={{ fontWeight: 700, fontFamily: "var(--font-display)" }}>{stat.value}</div>
              </div>
            ))}
          </div>

          {/* Equipment & Muscles */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2.5rem" }}>
            <div className="card" style={{ padding: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, fontFamily: "var(--font-display)", fontSize: "0.875rem", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Dumbbell size={16} color="var(--primary)" /> Equipment Needed
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {workout.equipment.map((e) => (
                  <span key={e} style={{ padding: "0.25rem 0.75rem", borderRadius: "9999px", fontSize: "0.75rem", fontWeight: 500, backgroundColor: "var(--secondary)", color: "var(--secondary-foreground)" }}>{e}</span>
                ))}
              </div>
            </div>
            <div className="card" style={{ padding: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, fontFamily: "var(--font-display)", fontSize: "0.875rem", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Target size={16} color="var(--primary)" /> Target Muscles
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {workout.targetMuscles.map((m) => (
                  <span key={m} style={{ padding: "0.25rem 0.75rem", borderRadius: "9999px", fontSize: "0.75rem", fontWeight: 500, backgroundColor: "rgba(110,231,183,0.1)", color: "var(--primary)" }}>{m}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Timer */}
          <div className="glow-border" style={{ borderRadius: "0.75rem", border: "1px solid rgba(110,231,183,0.2)", backgroundColor: "rgba(110,231,183,0.05)", padding: "1.5rem", marginBottom: "2.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <div style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", marginBottom: "0.25rem" }}>Workout Timer</div>
              <div className="gradient-text" style={{ fontSize: "2.25rem", fontWeight: 700, fontFamily: "var(--font-display)" }}>{formatTime(timerSeconds)}</div>
            </div>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <button onClick={() => setTimerRunning(!timerRunning)} className={timerRunning ? "btn btn-destructive" : "btn btn-primary"} style={{ fontWeight: 600 }}>
                {timerRunning ? "Pause" : "Start"}
              </button>
              <button onClick={() => { setTimerRunning(false); setTimerSeconds(0); }} className="btn btn-outline" style={{ fontWeight: 600 }}>Reset</button>
            </div>
          </div>

          {/* Progress */}
          <div style={{ marginBottom: "1.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
              <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--muted-foreground)" }}>Progress</span>
              <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--primary)" }}>{progress}%</span>
            </div>
            <div className="progress-bar"><div className="progress-fill" style={{ width: `${progress}%` }} /></div>
          </div>

          {/* Exercises */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "3rem" }}>
            {workout.exercises.map((exercise, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: i * 0.05 }} onClick={() => toggleExercise(i)} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", borderRadius: "0.75rem", border: `1px solid ${completedExercises.has(i) ? "rgba(110,231,183,0.3)" : "var(--border)"}`, backgroundColor: completedExercises.has(i) ? "rgba(110,231,183,0.05)" : "var(--card)", padding: "1.25rem", cursor: "pointer", transition: "all 0.2s" }}>
                <div style={{ marginTop: "0.125rem", width: "1.5rem", height: "1.5rem", borderRadius: "50%", border: `2px solid ${completedExercises.has(i) ? "var(--primary)" : "var(--muted-foreground)"}`, backgroundColor: completedExercises.has(i) ? "var(--primary)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "var(--primary-foreground)" }}>
                  {completedExercises.has(i) && <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.25rem" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--muted-foreground)", width: "1.5rem" }}>{i + 1}.</span>
                    <h4 style={{ fontWeight: 700, fontFamily: "var(--font-display)", textDecoration: completedExercises.has(i) ? "line-through" : "none", color: completedExercises.has(i) ? "var(--muted-foreground)" : "var(--foreground)" }}>{exercise.name}</h4>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", fontSize: "0.75rem", color: "var(--muted-foreground)", marginLeft: "2.25rem" }}>
                    <span>{exercise.sets} sets × {exercise.reps}</span>
                    {exercise.rest !== "—" && <span>Rest: {exercise.rest}</span>}
                  </div>
                  {exercise.notes && <p style={{ fontSize: "0.75rem", color: "rgba(136,136,168,0.7)", marginTop: "0.25rem", marginLeft: "2.25rem", fontStyle: "italic" }}>💡 {exercise.notes}</p>}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Actions */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <Link to="/workouts"><button className="btn btn-outline" style={{ fontWeight: 600 }}><ArrowLeft size={16} /> Back to Workouts</button></Link>
            <Link to="/calories"><button className="btn btn-primary" style={{ fontWeight: 600 }}>Calculate Calories</button></Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
