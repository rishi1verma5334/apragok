import { motion } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  FileEdit,
  GraduationCap,
  Calendar,
  Mail,
  Globe,
  Phone,
  Award,
  FileText,
  Users,
  ClipboardList,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const units = [
  {
    title: "Unit 1: Foundations of Indian Educational Philosophy",
    chapters: [
      "Overview of Indian Schools of Philosophy",
      "Sankhya Philosophy and Education",
      "Yoga Philosophy and Learning Discipline",
      "Vedanta and Concept of Self-realization",
      "Buddhist Philosophy and Experiential Learning",
      "Jain Philosophy and Ethical Education",
      "Concept of Vidya and Dayanand Darshan",
      "Islamic Traditions in Education",
      "Methods of Acquiring Knowledge (Pramana)",
    ],
  },
  {
    title: "Unit 2: Western Philosophical Perspectives in Education",
    chapters: [
      "Introduction to Western Philosophy",
      "Idealism and its Educational Implications",
      "Realism and Scientific Approach",
      "Naturalism and Child-centered Education",
      "Pragmatism and Learning by Doing",
      "Marxism and Education for Social Equality",
      "Existentialism and Individual Freedom",
      "Information, Knowledge, and Wisdom: Conceptual Differences",
      "Comparative Analysis of Western Schools",
    ],
  },
  {
    title: "Unit 3: Sociological Perspectives in Education",
    chapters: [
      "Sociology of Education: Meaning and Scope",
      "Symbolic Interactionism in Education",
      "Structural Functionalism and Social Stability",
      "Conflict Theory and Educational Inequality",
      "Role of Education in Socialization",
      "Education as an Agent of Social Change",
    ],
  },
  {
    title: "Unit 4: Social Institutions and Educational Dynamics",
    chapters: [
      "Concept and Types of Social Institutions",
      "Family as an agent of Socialization",
      "School as a Formal Institution",
      "Society and Cultural Influence on Education",
      "Interrelationship between Family, School, and Society",
      "Institutional Functions in Educational Development",
    ],
  },
  {
    title: "Unit 5: Social Movements and Educational Change",
    chapters: [
      "Meaning and Characteristics of Social Movements",
      "Relative Deprivation Theory",
      "Resource Mobilization Theory",
      "Political Process Theory",
      "New Social Movement Theory",
      "Education as a Tool for Social Change",
      "Case Studies of Educational Movements",
    ],
  },
  {
    title: "Unit 6: Socialization, Culture, and Education",
    chapters: [
      "Concept of Socialization",
      "Types and Agencies of Socialization",
      "Culture: Meaning and Components",
      "Relationship between Culture and Education",
      "Cultural Transmission through Education",
      "Education and Cultural Change",
    ],
  },
  {
    title: "Unit 7: Contributions of Educational Thinkers",
    chapters: [
      "Swami Vivekananda: Spiritual Education",
      "Rabindranath Tagore: Naturalism and Creativity",
      "Mahatma Gandhi: Basic Education (Nai Talim)",
      "Sri Aurobindo: Integral Education",
      "J. Krishnamurti: Freedom in Learning",
      "Paulo Freire: Critical Pedagogy",
      "Mary Wollstonecraft: Feminist Education",
      "Nel Noddings: Ethics of Care",
      "Savitribai Phule: Social Justice in Education",
    ],
  },
  {
    title: "Unit 8: Education, Values, and the Indian Constitution",
    chapters: [
      "Concept of Values in Education",
      "Constitutional Values and Education",
      "Socialism and Educational Equality",
      "Secularism and Inclusive Education",
      "Justice, Liberty, and Equality in Education",
      "Democracy and Educational Participation",
      "Freedom and Rights in Education",
      "Role of Education in Nation Building",
    ],
  },
];

const technicalSpecs = [
  { label: "Format", value: "MS Word" },
  { label: "Line Spacing", value: "Single" },
  { label: "Font", value: "Times New Roman" },
  { label: "Font Size", value: "12 pt" },
  { label: "Heading Size", value: "14 pt" },
  { label: "Page Margins", value: "2.5 cm on all sides" },
  { label: "Referencing Style", value: "APA (7th Edition)" },
  { label: "Word Limit", value: "2,000–3,000 words" },
];

const contentRequirements = [
  "Abstract (100–150 words)",
  "Keywords (5–10)",
  "Case Study",
  "Concept Map",
  "Practice Questions: 3 Long & 5 Short Questions",
  "5 MCQs (with Answers)",
  "5 True/False (with Answers)",
  "5 Fill in the Blanks (with Answers)",
  "References (APA 7th Edition, 10–15 references, excluded from word count)",
];

const importantDates = [
  { label: "Last Date for Chapter Reservation", value: "30 July 2026" },
  { label: "Final Date for Chapter Submission", value: "20 August 2026" },
  { label: "Expected Date of Publication", value: "30 September 2026" },
];

const pricing = [
  { authors: "Single Author", price: "₹300/-" },
  { authors: "Two Authors", price: "₹500/-" },
  { authors: "Three Authors", price: "₹600/-" },
];

const benefits = [
  "ISBN Book Publication",
  "E-Certificate of Publication",
  "E-Copy of the Published Book Chapter",
  "Editorial & Formatting Support",
  "Academic Visibility",
];

const RESERVATION_FORM = "https://forms.gle/emvKcs5f8j9JBpgT9";

const CallForChapters = () => {
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
              <FileEdit size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Call for Chapters · Edited Book with ISBN</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 leading-tight">
              Educational Studies: <span className="text-primary">Philosophical and Sociological Perspectives</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              An invitation to Assistant Professors, Associate Professors, and Professors to contribute original chapters
              to our forthcoming peer-reviewed edited volume.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a href={RESERVATION_FORM} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 shadow-lg">
                  <GraduationCap className="mr-2" size={20} />
                  Reserve Your Chapter
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guidelines for Authors */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-6 flex items-center gap-3">
              <ClipboardList className="text-primary" /> Guidelines for Authors
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm">
                <h3 className="font-semibold text-foreground mb-2">Eligibility</h3>
                <p className="text-sm text-muted-foreground">
                  Authorship is limited to Assistant Professors, Associate Professors, and Professors.
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm">
                <h3 className="font-semibold text-foreground mb-2">Originality</h3>
                <p className="text-sm text-muted-foreground">
                  All submissions must be original and unpublished work.
                </p>
              </div>
              <div className="md:col-span-2 bg-card p-6 rounded-2xl border border-border/50 shadow-sm">
                <h3 className="font-semibold text-foreground mb-2">Plagiarism and Language</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" /> Manuscript must be plagiarism-free (maximum similarity index: 10%).</li>
                  <li className="flex gap-2"><CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" /> Authors must ensure proper grammar and originality before submission.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Specs & Content Requirements */}
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
                <FileText className="text-primary" size={22} /> Technical Specifications
              </h2>
              <ul className="space-y-3">
                {technicalSpecs.map((s) => (
                  <li key={s.label} className="flex justify-between items-center pb-2 border-b border-border/40 last:border-0 text-sm">
                    <span className="text-muted-foreground">{s.label}</span>
                    <span className="font-medium text-foreground text-right">{s.value}</span>
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
                <BookOpen className="text-primary" size={22} /> Content Requirements
              </h2>
              <p className="text-sm text-muted-foreground mb-3">Each chapter should also include:</p>
              <ul className="space-y-2">
                {contentRequirements.map((c) => (
                  <li key={c} className="flex gap-2 text-sm text-foreground">
                    <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" /> {c}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Units & Chapters */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
              Units & <span className="text-primary">Suggested Chapters</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose a chapter from any of the eight thematic units below for your contribution.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {units.map((unit, i) => (
              <motion.div
                key={unit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-serif font-semibold text-primary mb-3">{unit.title}</h3>
                <ol className="space-y-1.5 text-sm text-muted-foreground list-decimal list-inside">
                  {unit.chapters.map((ch) => (
                    <li key={ch}>{ch}</li>
                  ))}
                </ol>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dates & Pricing */}
      <section id="dates" className="py-12 sm:py-16 bg-secondary/30">
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
                <p className="text-sm text-muted-foreground mb-3">Chapter Reservation Link:</p>
                <a href={RESERVATION_FORM} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                    Reserve Your Chapter
                  </Button>
                </a>
                <p className="text-xs text-muted-foreground mt-3">
                  The chapter submission link will be shared in the group after reservation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card p-6 sm:p-8 rounded-2xl border border-border/50 shadow-sm"
            >
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-2 flex items-center gap-2">
                <Users className="text-primary" size={22} /> Payment Details
              </h2>
              <p className="text-xs text-muted-foreground mb-5">(Inclusive of GST)</p>
              <ul className="space-y-3">
                {pricing.map((p) => (
                  <li key={p.authors} className="flex justify-between items-center p-4 rounded-xl bg-secondary/40 border border-border/40">
                    <span className="font-medium text-foreground">{p.authors}</span>
                    <span className="text-lg font-bold text-primary">{p.price}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-6 flex items-center gap-3">
              <Award className="text-primary" /> Every Author Will Get
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/50">
                  <CheckCircle2 className="text-primary shrink-0" size={20} />
                  <span className="text-foreground">{b}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-primary/10 via-secondary/30 to-background border-t border-border/50">
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

            <div className="mt-10">
              <a href={RESERVATION_FORM} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 shadow-lg">
                  <GraduationCap className="mr-2" size={20} />
                  Reserve Your Chapter Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CallForChapters;
