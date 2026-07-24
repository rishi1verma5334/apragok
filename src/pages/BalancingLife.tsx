import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Mail,
  Phone,
  Award,
  Users,
  Clock,
  Monitor,
  Sparkles,
  Target,
  Heart,
  Gift,
  UserCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const REGISTRATION_FORM = "https://forms.gle/NdD6NocoECVtvJey5";

const eventDetails = [
  { label: "Date", value: "08 August 2026 (Saturday)", icon: Calendar },
  { label: "Time", value: "10:30 AM – 1:30 PM", icon: Clock },
  { label: "Mode", value: "Online via Google Meet", icon: Monitor },
  { label: "Registration Fee", value: "FREE", icon: Gift },
];

const audience = [
  "Students",
  "Teachers",
  "Professionals",
  "Homemakers",
  "Everyone seeking balance & harmony",
];

const learnings = [
  "Manage Stress & Emotions",
  "Achieve Work–Life Balance",
  "Practice Mindfulness",
  "Improve Emotional Well-being",
  "Build Sustainable Life Habits",
];

const perks = [
  "FREE E-Certificate for every participant",
  "Expert Learning Session",
  "Interactive Q&A",
  "National Networking Opportunity",
];

const BalancingLife = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 bg-gradient-to-b from-primary/10 via-secondary/40 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Link to="/workshops">
              <Button variant="ghost" className="mb-6 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="mr-2" size={18} />
                Back to Events
              </Button>
            </Link>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">
                Free Online Seminar · Free E-Certificate
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 leading-tight">
              The Art of Balancing Life:{" "}
              <span className="text-primary italic">From Comfort to Harmony</span>
            </h1>
            <p className="text-lg text-muted-foreground italic mb-2">
              जीवन को संतुलित करने की कला
            </p>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              APRA Group of Knowledge invites you to a 3-hour transformative session on
              mindfulness, emotional well-being, and sustainable life habits.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a href={REGISTRATION_FORM} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 shadow-lg"
                >
                  <Heart className="mr-2" size={20} />
                  Register FREE Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-12 sm:py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-6 flex items-center gap-3">
              <Calendar className="text-primary" /> Event Details
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {eventDetails.map((d) => (
                <div
                  key={d.label}
                  className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <d.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{d.label}</p>
                    <p className="text-base font-semibold text-foreground">{d.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resource Person */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm text-center"
          >
            <UserCircle2 className="mx-auto text-primary mb-4" size={48} />
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
              Resource Person
            </p>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
              Dr. N. K. Sharma
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Learn & Gain */}
      <section className="py-12 sm:py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card p-6 sm:p-8 rounded-2xl border border-border/50 shadow-sm"
            >
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-5 flex items-center gap-2">
                <Target className="text-primary" size={22} /> Learn How To
              </h2>
              <ul className="space-y-2">
                {learnings.map((l) => (
                  <li key={l} className="flex gap-2 text-sm text-foreground">
                    <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" /> {l}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card p-6 sm:p-8 rounded-2xl border border-border/50 shadow-sm"
            >
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-5 flex items-center gap-2">
                <Gift className="text-primary" size={22} /> Every Participant Receives
              </h2>
              <ul className="space-y-2">
                {perks.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-foreground">
                    <Award size={16} className="text-primary mt-0.5 shrink-0" /> {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl border border-primary/20 shadow-sm"
          >
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-5 flex items-center gap-2">
              <Users className="text-primary" size={22} /> Who Can Join?
            </h2>
            <div className="flex flex-wrap gap-2">
              {audience.map((a) => (
                <span
                  key={a}
                  className="px-4 py-2 bg-card border border-border/50 rounded-full text-sm text-foreground"
                >
                  {a}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 sm:py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-3">
              Questions? <span className="text-primary">Get in Touch</span>
            </h2>
            <p className="text-muted-foreground italic">
              Take just 3 hours to discover a lifetime of balance and harmony.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-card p-5 rounded-2xl border border-border/50 shadow-sm flex items-start gap-3">
              <Phone className="text-primary mt-1 shrink-0" size={20} />
              <div>
                <p className="text-xs text-muted-foreground">Contact</p>
                <p className="text-sm font-medium text-foreground">8766251527</p>
                <p className="text-sm font-medium text-foreground">9990107533</p>
              </div>
            </div>
            <div className="bg-card p-5 rounded-2xl border border-border/50 shadow-sm flex items-start gap-3">
              <Mail className="text-primary mt-1 shrink-0" size={20} />
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium text-foreground break-all">
                  apra.publication@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a href={REGISTRATION_FORM} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 shadow-lg"
              >
                <Heart className="mr-2" size={20} />
                Register FREE Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BalancingLife;
