import { motion } from "framer-motion";
import {
  ArrowLeft,
  Award,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Mail,
  Globe,
  Phone,
  Users,
  Star,
  ClipboardList,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const editorBenefits = [
  "Official E-Certificate of Editorial Board Membership",
  "Complimentary Hard Copy of the ISBN Book",
  "National & International Academic Recognition",
  "Opportunity to Collaborate with Eminent Researchers & Academicians",
  "Enhance Your Academic Profile & Professional Portfolio",
  "Contribute to a High-Quality Interdisciplinary Publication",
];

const eligibility = [
  "Faculty Members",
  "Researchers",
  "Research Scholars",
  "Teachers & Educators",
  "Industry Professionals",
];

const EDITOR_FORM = "https://forms.gle/AREcoNV6rbX41PFL8";

const CallForEditors = () => {
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
            <Link to="/publications">
              <Button variant="ghost" className="mb-6 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="mr-2" size={18} />
                Back to Publications
              </Button>
            </Link>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Star size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Call for Editors · ISBN Publication</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 leading-tight">
              Spectrum of Knowledge <span className="text-primary">2026</span>
            </h1>
            <h2 className="text-lg sm:text-xl font-serif text-foreground/90 mb-4">
              A Quarterly Compendium
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Shape the future of academic excellence. Join the editorial board of a prestigious
              interdisciplinary publication and leave your mark on quality research.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a href={EDITOR_FORM} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 shadow-lg">
                  <Sparkles className="mr-2" size={20} />
                  Apply for Editor Position
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About the Role */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card p-6 sm:p-8 rounded-2xl border border-border/50 shadow-sm text-center"
          >
            <BookOpen className="text-primary mx-auto mb-4" size={36} />
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4">
              Shape the Future of Academic Excellence
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Are you an <span className="font-semibold text-foreground">Academician, Researcher, Faculty Member,
              Educator, Scholar, or Industry Professional</span> passionate about research and quality publications?
              Become an Editor of the prestigious{" "}
              <span className="font-semibold text-foreground">"Spectrum of Knowledge 2026: A Quarterly Compendium"</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 sm:py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-6 flex items-center gap-3">
              <Award className="text-primary" /> Exclusive Benefits for Editors
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {editorBenefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/50"
                >
                  <CheckCircle2 className="text-primary shrink-0" size={20} />
                  <span className="text-foreground text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Eligibility */}
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
                <Users className="text-primary" size={22} /> Who Can Apply?
              </h2>
              <ul className="space-y-3">
                {eligibility.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-foreground">
                    <GraduationCap size={16} className="text-primary mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card p-6 sm:p-8 rounded-2xl border border-border/50 shadow-sm flex flex-col justify-center"
            >
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                <ClipboardList className="text-primary" size={22} /> Limited Editorial Positions
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Applications will be accepted on a first-come, first-served basis. Don’t just publish knowledge—help shape it.
              </p>
              <a href={EDITOR_FORM} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                  <Sparkles className="mr-2" size={18} />
                  Register Now
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-primary/10 via-secondary/30 to-background border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4">
              Become an Editor. Inspire Excellence. Build Your Academic Legacy.
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Register now to secure your position on the editorial board of Spectrum of Knowledge 2026.
            </p>
            <a href={EDITOR_FORM} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 shadow-lg">
                <Sparkles className="mr-2" size={20} />
                Apply Now
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-6">For Any Query, Contact Us</h2>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <a href="mailto:apra.publication@gmail.com" className="flex items-center justify-center gap-2 p-4 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
                <Mail size={18} className="text-primary" />
                <span className="text-sm text-foreground break-all">apra.publication@gmail.com</span>
              </a>
              <a href="https://www.APRAGoK.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 p-4 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
                <Globe size={18} className="text-primary" />
                <span className="text-sm text-foreground">www.APRAGoK.com</span>
              </a>
              <div className="flex items-center justify-center gap-2 p-4 bg-card rounded-xl border border-border/50">
                <Phone size={18} className="text-primary" />
                <span className="text-sm text-foreground">8766251527</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Additional contact numbers: <span className="text-foreground font-medium">9558295218, 9990107533</span>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CallForEditors;
