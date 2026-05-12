import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  GraduationCap,
  Calendar,
  Mail,
  Globe,
  Phone,
  Award,
  Users,
  Clock,
  Monitor,
  Sparkles,
  AlertTriangle,
  Target,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import fdpAiEducationS2 from "@/assets/events/fdp-ai-education-s2.jpg";

const REGISTRATION_FORM = "https://forms.gle/AusAqC4kQrdVzrMj9";

const eventDetails = [
  { label: "Date", value: "20th June 2026", icon: Calendar },
  { label: "Time", value: "11:00 AM – 5:30 PM", icon: Clock },
  { label: "Mode", value: "Google Meet (Online)", icon: Monitor },
  { label: "Registration Fee", value: "₹350 (Inclusive of GST)", icon: Award },
];

const audience = [
  "Faculty Members",
  "Research Scholars",
  "College Students",
  "Educators & Academic Leaders",
  "EdTech Professionals",
  "Anyone interested in AI in Education",
];

const gains = [
  "Hands-on experience with 20+ AI Tools",
  "AI-based Lesson Planning & Assessment",
  "Student Engagement Strategies",
  "Practical AI Classroom Training",
  "Ethical AI & Academic Integrity Framework",
  "Ready-to-use Teaching Resources",
];

const importantDates = [
  { label: "Registration Closes", value: "15th June 2026" },
  { label: "Event Date", value: "20th June 2026" },
  { label: "Seats Available", value: "Only 30 (First-come basis)" },
];

const FdpAiEducation = () => {
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
                Back to Workshops
              </Button>
            </Link>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">
                Faculty Development Program · Series 2
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 leading-tight">
              AI-Powered Education:{" "}
              <span className="text-primary italic">Enhancing Student Engagement and Outcomes</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Step into the future of teaching with APRA Group of Knowledge — a hands-on Faculty
              Development Program empowering educators to harness AI in the classroom.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a href={REGISTRATION_FORM} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 shadow-lg"
                >
                  <GraduationCap className="mr-2" size={20} />
                  Register Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brochure */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden shadow-lg border border-border/50"
          >
            <img
              src={fdpAiEducationS2}
              alt="FDP Series 2 — AI Powered Education brochure"
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
            />
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

      {/* Who Can Join & What You'll Gain */}
      <section className="py-12 sm:py-16">
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
                <Users className="text-primary" size={22} /> Who Can Join?
              </h2>
              <ul className="space-y-2">
                {audience.map((a) => (
                  <li key={a} className="flex gap-2 text-sm text-foreground">
                    <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" /> {a}
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
                <Target className="text-primary" size={22} /> What You Will Gain
              </h2>
              <ul className="space-y-2">
                {gains.map((g) => (
                  <li key={g} className="flex gap-2 text-sm text-foreground">
                    <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" /> {g}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certificate */}
      <section className="py-12 sm:py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm text-center"
          >
            <Award className="mx-auto text-primary mb-4" size={42} />
            <h2 className="text-2xl font-serif font-bold text-foreground mb-3">
              6-Hour Completion Certificate
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Participants will receive a recognized 6-Hour Completion Certificate, valued for
              Academic Upliftment and API Enhancement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Important Dates & Seats */}
      <section className="py-12 sm:py-16">
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
                <Calendar className="text-primary" size={22} /> Important Dates
              </h2>
              <ul className="space-y-4">
                {importantDates.map((d) => (
                  <li key={d.label} className="flex flex-col">
                    <span className="text-sm text-muted-foreground">{d.label}</span>
                    <span className="text-base font-semibold text-foreground">{d.value}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-border/40">
                <a href={REGISTRATION_FORM} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                    Register Now
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 sm:p-8 rounded-2xl border border-primary/20 shadow-sm flex flex-col"
            >
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-5 flex items-center gap-2">
                <AlertTriangle className="text-primary" size={22} /> Limited Seats
              </h2>
              <p className="text-foreground mb-3">
                <span className="font-semibold">Only 30 seats available.</span> Registration will
                close on <span className="font-semibold">15th June 2026</span> or upon confirmation
                of 30 participants — whichever is earlier.
              </p>
              <p className="text-sm text-muted-foreground mt-auto">
                Register early to secure your seat in this exclusive cohort.
              </p>
            </motion.div>
          </div>
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
            <p className="text-muted-foreground">
              Reach out to APRA Group of Knowledge for any queries about the program.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-card p-5 rounded-2xl border border-border/50 shadow-sm flex items-start gap-3">
              <Mail className="text-primary mt-1 shrink-0" size={20} />
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium text-foreground break-all">
                  apra.publication@gmail.com
                </p>
              </div>
            </div>
            <div className="bg-card p-5 rounded-2xl border border-border/50 shadow-sm flex items-start gap-3">
              <Phone className="text-primary mt-1 shrink-0" size={20} />
              <div>
                <p className="text-xs text-muted-foreground">Contact</p>
                <p className="text-sm font-medium text-foreground">8766251527</p>
                <p className="text-sm font-medium text-foreground">9716245200</p>
                <p className="text-sm font-medium text-foreground">9718706256</p>
              </div>
            </div>
            <div className="bg-card p-5 rounded-2xl border border-border/50 shadow-sm flex items-start gap-3">
              <Globe className="text-primary mt-1 shrink-0" size={20} />
              <div>
                <p className="text-xs text-muted-foreground">Website</p>
                <p className="text-sm font-medium text-foreground">www.APRAGoK.com</p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a href={REGISTRATION_FORM} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 shadow-lg"
              >
                <BookOpen className="mr-2" size={20} />
                Secure Your Seat
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FdpAiEducation;
