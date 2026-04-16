import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionHeading from "../components/SectionHeading";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setFormData({ name: "", email: "", subject: "", message: "" }); }, 3000);
  };
  const update = (field) => (e) => setFormData((prev) => ({ ...prev, [field]: e.target.value }));
   
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <section style={{ paddingTop: "7rem", paddingBottom: "6rem" }}>
        <div className="container" style={{ maxWidth: "64rem" }}>
          <SectionHeading badge="Get In Touch" title="We'd Love to" highlight="Hear From You" description="Have questions about our programs? Want to partner with us? Drop us a message." />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "2rem" }} className="contact-grid">
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { icon: Mail, label: "Email", value: "hello@jeerafit.com" },
                { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                { icon: MapPin, label: "Location", value: "San Francisco, CA" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="card" style={{ display: "flex", alignItems: "flex-start", gap: "1rem", padding: "1.25rem" }}>
                    <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "0.5rem", backgroundColor: "rgba(110,231,183,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", flexShrink: 0 }}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.75rem", color: "var(--muted-foreground)", fontWeight: 500, marginBottom: "0.25rem" }}>{item.label}</div>
                      <div style={{ fontSize: "0.875rem", fontFamily: "var(--font-display)", fontWeight: 600 }}>{item.value}</div>
                    </div>
                  </motion.div>
                );
              })}
              <div className="card" style={{ padding: "1.25rem" }}>
                <div style={{ fontSize: "0.875rem", fontFamily: "var(--font-display)", fontWeight: 600, marginBottom: "0.5rem" }}>Business Hours</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
                  <div>Mon–Fri: 9:00 AM – 6:00 PM PST</div>
                  <div>Sat: 10:00 AM – 4:00 PM PST</div>
                  <div>Sun: Closed</div>
                </div>
              </div>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="card" style={{ padding: "2rem" }}>
              {submitted ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "4rem 0", textAlign: "center" }}>
                  <CheckCircle size={64} color="var(--primary)" style={{ marginBottom: "1rem" }} />
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 700, fontFamily: "var(--font-display)", marginBottom: "0.5rem" }}>Message Sent!</h3>
                  <p style={{ color: "var(--muted-foreground)" }}>We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--muted-foreground)", marginBottom: "0.5rem" }}>Name</label>
                      <input type="text" value={formData.name} onChange={update("name")} placeholder="John Doe" required className="input" />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--muted-foreground)", marginBottom: "0.5rem" }}>Email</label>
                      <input type="email" value={formData.email} onChange={update("email")} placeholder="john@example.com" required className="input" />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--muted-foreground)", marginBottom: "0.5rem" }}>Subject</label>
                    <select value={formData.subject} onChange={update("subject")} required className="input">
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="billing">Billing Question</option>
                      <option value="partnership">Partnership</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, color: "var(--muted-foreground)", marginBottom: "0.5rem" }}>Message</label>
                    <textarea value={formData.message} onChange={update("message")} placeholder="Tell us how we can help..." required rows={5} className="textarea" />
                  </div>
                  <button type="submit" className="btn btn-primary btn-full btn-lg"><Send size={20} /> Send Message</button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
      <style>{`
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
