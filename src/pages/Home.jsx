import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Dumbbell, Flame, Heart, Salad, Timer, Trophy, Zap, Apple, Beef, Wheat, ArrowRight, Play } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionHeading from "../components/SectionHeading";
import FeatureCard from "../components/FeatureCard";
import PlanCard from "../components/PlanCard";
import StatBadge from "../components/StatBadge";
import TestimonialCard from "../components/TestimonialCard";
import heroImg from "../assets/hero-fitness.jpg";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      {/* Hero */}
      <section style={{ position: "relative", paddingTop: "4rem", overflow: "hidden" }}>
        <div className="container" style={{ padding: "5rem 1.5rem 3rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", alignItems: "center" }} className="hero-grid">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <span className="badge" style={{ marginBottom: "1.5rem" }}>🔥 #1 Fitness Platform 2026</span>
              <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, fontFamily: "var(--font-display)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
                Train Hard. <span className="gradient-text text-glow">Eat Smart.</span> Live Bold.
              </h1>
              <p style={{ marginTop: "1.5rem", fontSize: "1.125rem", color: "var(--muted-foreground)", maxWidth: "32rem", lineHeight: 1.6 }}>
                Personalized workout routines and science-backed diet plans crafted for your goals. No guesswork — just results.
              </p>
              <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <Link to="/workouts"><button className="btn btn-primary btn-lg">Start Free Trial <ArrowRight size={20} /></button></Link>
                <Link to="/about"><button className="btn btn-outline btn-lg"><Play size={16} /> Learn More</button></Link>
              </div>
              <div style={{ marginTop: "3rem", display: "flex", gap: "2.5rem" }}>
                <StatBadge value="50K+" label="Active Users" delay={0.3} />
                <StatBadge value="200+" label="Workout Plans" delay={0.4} />
                <StatBadge value="98%" label="Success Rate" delay={0.5} />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} style={{ position: "relative" }}>
              <div style={{ position: "absolute", inset: "-1rem", backgroundColor: "rgba(110,231,183,0.1)", borderRadius: "1.5rem", filter: "blur(48px)" }} />
              <img src={heroImg} alt="Athlete training" style={{ position: "relative", borderRadius: "1rem", width: "100%", objectFit: "cover", aspectRatio: "4/3", border: "1px solid var(--border)" }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container" style={{ padding: "6rem 1.5rem" }}>
        <SectionHeading badge="Why JeeraFit" title="Everything You Need to" highlight="Crush Your Goals" description="From custom workout plans to macro-optimized meal preps — we've got your entire fitness journey covered." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          <FeatureCard icon={<Dumbbell size={24} />} title="Smart Workouts" description="AI-powered workout plans that adapt to your progress, recovery, and schedule in real-time." />
          <FeatureCard icon={<Salad size={24} />} title="Nutrition Plans" description="Macro-calculated meal plans tailored to your body type, goals, and dietary preferences." delay={0.1} />
          <FeatureCard icon={<Flame size={24} />} title="Calorie Tracking" description="Effortlessly track calories and macros with our smart food scanner and barcode reader." delay={0.2} />
          <FeatureCard icon={<Timer size={24} />} title="HIIT Programs" description="High-intensity interval training sessions designed to maximize fat burn in minimal time." delay={0.3} />
          <FeatureCard icon={<Heart size={24} />} title="Recovery Coach" description="Guided recovery protocols including stretching, foam rolling, and sleep optimization." delay={0.4} />
          <FeatureCard icon={<Trophy size={24} />} title="Progress Tracking" description="Visual dashboards showing your strength gains, body composition, and milestone achievements." delay={0.5} />
        </div>
      </section>

      {/* Workout Plans */}
      <section style={{ backgroundColor: "rgba(25,26,43,0.3)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container" style={{ padding: "6rem 1.5rem" }}>
          <SectionHeading badge="Workout Plans" title="Train Like a" highlight="Pro Athlete" description="Choose from beginner to advanced programs." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <PlanCard icon={<Zap size={20} />} title="Starter" description="Perfect for beginners building a fitness foundation." price="$19" features={["3 workouts/week", "Video demonstrations", "Basic progress tracking", "Community access"]} />
            <PlanCard icon={<Flame size={20} />} title="Pro" description="For dedicated athletes pushing their limits." price="$39" featured features={["5 workouts/week", "AI-adaptive programming", "1-on-1 coaching chat", "Advanced analytics", "Recovery protocols"]} delay={0.1} />
            <PlanCard icon={<Trophy size={20} />} title="Elite" description="Competition-level training with expert guidance." price="$79" features={["6 workouts/week", "Personal trainer calls", "Competition prep", "Priority support", "Custom supplements guide"]} delay={0.2} />
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link to="/workouts"><button className="btn btn-outline btn-lg">View All Workouts <ArrowRight size={16} /></button></Link>
          </div>
        </div>
      </section>

      {/* Diet Plans */}
      <section className="container" style={{ padding: "6rem 1.5rem" }}>
        <SectionHeading badge="Diet Plans" title="Fuel Your Body" highlight="The Right Way" description="Science-backed nutrition plans customized to your metabolism, food preferences, and fitness goals." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          <PlanCard icon={<Apple size={20} />} title="Clean Eating" description="Whole foods approach for sustainable health." price="$15" features={["Weekly meal plans", "Grocery lists", "Macro breakdowns", "Swap alternatives"]} />
          <PlanCard icon={<Beef size={20} />} title="High Protein" description="Optimized for muscle building and recovery." price="$25" featured features={["40/30/30 macro split", "Supplement timing", "Pre/post workout meals", "Recipes library", "Meal prep guides"]} delay={0.1} />
          <PlanCard icon={<Wheat size={20} />} title="Keto / Low Carb" description="Ketogenic plans for rapid fat loss." price="$25" features={["Keto-adapted recipes", "Carb cycling options", "Electrolyte guide", "Fat-adapted training tips"]} delay={0.2} />
        </div>
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Link to="/diet"><button className="btn btn-outline btn-lg">Explore Diet Plans <ArrowRight size={16} /></button></Link>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ backgroundColor: "rgba(25,26,43,0.3)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container" style={{ padding: "6rem 1.5rem" }}>
          <SectionHeading badge="Testimonials" title="Real People." highlight="Real Results." description="Join thousands who've transformed their lives with JeeraFit." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <TestimonialCard name="Sarah Chen" role="Lost 30 lbs in 4 months" quote="JeeraFit changed everything. The meal plans are delicious and the workouts are challenging but doable." rating={5} />
            <TestimonialCard name="Marcus Rodriguez" role="Gained 15 lbs muscle" quote="The AI workout adjustments are insane. It's like having a personal trainer who actually knows what they're doing." rating={5} delay={0.1} />
            <TestimonialCard name="Priya Sharma" role="Marathon finisher" quote="From couch to marathon in 8 months. The progressive training plan and nutrition guidance made it all possible." rating={5} delay={0.2} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container" style={{ padding: "6rem 1.5rem" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glow-border" style={{ textAlign: "center", borderRadius: "1.5rem", border: "1px solid rgba(110,231,183,0.2)", backgroundColor: "rgba(110,231,183,0.05)", padding: "4rem" }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, fontFamily: "var(--font-display)", marginBottom: "1rem" }}>
            Ready to <span className="gradient-text">Transform?</span>
          </h2>
          <p style={{ fontSize: "1.125rem", color: "var(--muted-foreground)", maxWidth: "36rem", margin: "0 auto 2rem" }}>
            Start your free 7-day trial today. No credit card required.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
            <Link to="/workouts"><button className="btn btn-primary btn-lg">Get Started Free <ArrowRight size={20} /></button></Link>
            <Link to="/bmi"><button className="btn btn-outline btn-lg">Calculate Your BMI</button></Link>
          </div>
        </motion.div>
      </section>

      <Footer />

      <style>{`
        @media (min-width: 1024px) { .hero-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </div>
  );
}
