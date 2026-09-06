import { useState } from "react";
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
  Trophy,
  BookOpen,
  FileText,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import nexusPage1 from "@/assets/events/knowledge-nexus-page1.jpg";
import nexusPage2 from "@/assets/events/knowledge-nexus-page2.jpg";

const FORM_PAPER_ISBN = "https://forms.gle/niiXeBqXgg5b4vxF9";
const FORM_PAPER_ONLY = "https://forms.gle/xBXqW7Nh6AGBvmxs5";
const FORM_PARTICIPATION = "https://forms.gle/Payu7cChFTRi3R6J8";

const eventDetails = [
  { label: "Dates", value: "19–20 September 2026", icon: Calendar },
  { label: "Time", value: "11:00 AM – 5:00 PM", icon: Clock },
  { label: "Mode", value: "Online via Google Meet", icon: Monitor },
  { label: "Organised By", value: "APRA Group of Knowledge", icon: Globe },
];

const audience = [
  "Professors",
  "Researchers",
  "Scientists",
  "Ph.D. Scholars",
  "PG & UG Students",
  "Teacher Educators",
  "Industry Professionals",
  "Independent Researchers",
];

const benefits = [
  "Peer Reviewed Research Publication",
  "ISBN Book Publication (Q3 Compendium)",
  "Best Three Paper Presentation Awards",
  "Presentation Certificate",
  "Publication Certificate",
  "E-Copy of Published Research Paper",
  "National Academic Networking",
  "API & Academic Profile Enhancement",
  "Online National Recognition",
];

const importantDates = [
  { label: "Registration and Abstract Submission Deadline", value: "10 September 2026" },
  { label: "Last Date for Full Paper Submission", value: "5 September 2026" },
  { label: "Registration Deadline (participation only)", value: "15 September 2026" },
  { label: "Conference Dates", value: "19–20 September 2026" },
  { label: "Publication of ISBN Compendium", value: "November 2026" },
];

const tracks = [
  {
    title: "Track 1: Indian Knowledge Systems (IKS) & Bharatiya Knowledge Traditions",
    items:
      "NEP 2020 and IKS · Integration of IKS in Higher Education · Ancient Indian Scientific & Technological Heritage · Indian Philosophy and Ethics · Vedic Mathematics and Computational Thinking · Ayurveda, Yoga & Holistic Health · Sanskrit and Classical Knowledge Traditions · Indigenous Knowledge & Sustainable Development · Traditional Ecological Knowledge · Indian Arts, Literature & Heritage · Value-Based Education · Traditional Agricultural Practices · Indigenous Innovation & Rural Development",
  },
  {
    title: "Track 2: Education and Educational Innovation",
    items:
      "Teacher Education & Professional Development · Competency-Based Education · Outcome-Based Learning · Educational Leadership · Curriculum Innovation · Inclusive and Equitable Education · Digital Pedagogy · Educational Technology · Assessment and Evaluation · Research in Education",
  },
  {
    title: "Track 3: AI, Emerging Technologies and Digital Transformation",
    items:
      "Artificial Intelligence & Machine Learning · Generative AI in Education and Industry · Data Science & Big Data Analytics · Cyber Security · Internet of Things · Robotics and Automation · Industry 5.0 · Smart Technologies · Cloud Computing · Digital Transformation",
  },
  {
    title: "Track 4: Business, Commerce and Entrepreneurship",
    items:
      "Entrepreneurship & Innovation · Digital Marketing · Business Analytics · Financial Technology (FinTech) · Human Resource Management · Strategic Management · Supply Chain Management · Sustainable Business Practices · Start-up Ecosystem · Corporate Governance",
  },
  {
    title: "Track 5: Science, Engineering and Sustainable Development",
    items:
      "Renewable Energy · Green Technologies · Smart Manufacturing · Climate Change · Environmental Conservation · Circular Economy · Smart Infrastructure · Scientific Innovation · Sustainable Engineering · Disaster Risk Reduction",
  },
  {
    title: "Track 6: Healthcare, Biotechnology and Community Well-being",
    items:
      "Public Health · Mental Health & Well-being · Biotechnology · AI in Healthcare · Digital Health · Community Development · Nutrition & Preventive Healthcare · Telemedicine · Health Policy · Medical Innovation",
  },
  {
    title: "Track 7: Social Sciences, Humanities and Law",
    items:
      "Public Policy & Governance · Women Empowerment & Gender Studies · Psychology & Human Behaviour · Sociology & Community Development · Media and Communication · Human Rights · Constitutional & Cyber Law · Cultural Studies · Ethics & Social Responsibility · Rural and Urban Development",
  },
  {
    title: "Track 8: Research, Innovation and Future Skills",
    items:
      "Research Methodology · Academic Writing & Publication Ethics · Innovation and Creativity · Design Thinking · Intellectual Property Rights · Skill Development · Leadership & Change Management · Knowledge Management · Interdisciplinary Research · Future Skills for the Digital Economy",
  },
];

const leadership = [
  { role: "Chairperson", name: "Dr. Priyanka Verma", sub: "CEO, APRA Group of Knowledge" },
  { role: "Convenor", name: "Dr. Keemti Gaur", sub: "Editorial Head, APRA GoK" },
  { role: "Co-Convenor", name: "Ms. Himani Raizada", sub: "Training Head, APRA GoK" },
  { role: "Organising Secretary", name: "Ms. Namita Jend", sub: "Marketing & Sales Manager, APRA GoK" },
  { role: "Technical & IT", name: "Mr. Rishi Verma", sub: "Chief Operating Manager, APRA GoK" },
  { role: "Technical & IT", name: "Mr. Ajay Kr. Singh", sub: "Administrative Officer, APRA GoK" },
];

const abstractGuidelines = [
  "250–300 words",
  "Clearly state background, objectives, methodology, major findings and conclusion",
  "Include 5–6 keywords",
  "Written in English or Hindi using clear academic language",
  "Original and unpublished work",
];

const paperGuidelines = [
  "Word limit: 3000–5000 words (title, abstract, keywords, main text, tables, figures)",
  "References and appendices are not counted in the word limit",
  "MS Word (.doc/.docx), A4 size, portrait orientation",
  "English font: Times New Roman · Hindi font: Mangal",
  "Title 16 pt bold · Headings 14 pt bold · Body 12 pt · Line spacing 1.5",
  "References: APA 7th Edition (in-text and end-text)",
];

const KnowledgeNexus = () => {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

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
                Two-Day Online International Multidisciplinary Conference
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 leading-tight">
              Knowledge Nexus 2026:{" "}
              <span className="text-primary italic">Bridging Research, Innovation & Impact</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              19–20 September 2026 · Online (Google Meet) · 11:00 AM – 5:00 PM · Organised by APRA
              Group of Knowledge.
            </p>
            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-primary font-semibold">
              Present • Publish • Connect • Inspire
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
              <a href={FORM_PAPER_ISBN} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 shadow-lg"
                >
                  <BookOpen className="mr-2" size={20} />
                  Paper + ISBN Publication
                </Button>
              </a>
              <a href={FORM_PAPER_ONLY} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8"
                >
                  <FileText className="mr-2" size={20} />
                  Paper Presentation Only
                </Button>
              </a>
              <a href={FORM_PARTICIPATION} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8"
                >
                  <Users className="mr-2" size={20} />
                  Participation Only
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brochure */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { src: nexusPage1, alt: "Knowledge Nexus 2026 brochure — about the conference, leadership and registration" },
              { src: nexusPage2, alt: "Knowledge Nexus 2026 brochure — conference tracks and author guidelines" },
            ].map((img, i) => (
              <motion.div
                key={img.alt}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setLightbox(img)}
                className="rounded-xl overflow-hidden shadow-lg cursor-zoom-in hover:shadow-xl transition-shadow"
              >
                <img src={img.src} alt={img.alt} className="w-full h-auto" loading="lazy" decoding="async" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-12 sm:py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
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
          <div className="mt-6 bg-card p-6 rounded-2xl border border-primary/20 shadow-sm">
            <p className="text-sm text-foreground">
              <strong>Only 50 presentation slots</strong> — 25 presentations on 19 September and 25 on
              20 September 2026. Slots are allotted on a first-come, first-reviewed and
              first-confirmed basis.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-5 flex items-center gap-3">
            <Target className="text-primary" /> About the Conference
          </h2>
          <ul className="space-y-2">
            {[
              "Promote a culture of quality research, innovation and academic excellence among faculty members, researchers and students.",
              "Provide a national platform for presenting original, innovative and interdisciplinary research.",
              "Encourage evidence-based research addressing contemporary societal, educational, technological, environmental and economic challenges.",
              "Strengthen collaboration between academia, industry, research organisations and policymakers.",
              "Promote the integration of Indian Knowledge Systems (IKS) with modern scientific and technological advancements.",
              "Facilitate the exchange of ideas, experiences and best practices among scholars from diverse disciplines.",
              "Encourage ethical research practices, academic integrity and scholarly publication.",
              "Recognise outstanding research contributions through Best Paper Presentation Awards.",
              "Publish selected research papers in the Third Quarterly Compendium (ISBN publication) and other scholarly publications.",
              "Support the vision of NEP 2020, the Sustainable Development Goals and multidisciplinary education.",
            ].map((o) => (
              <li key={o} className="flex gap-2 text-sm text-muted-foreground">
                <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                {o}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tracks */}
      <section className="py-12 sm:py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-6 flex items-center gap-3">
            <BookOpen className="text-primary" /> Conference Tracks
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {tracks.map((t) => (
              <div key={t.title} className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm">
                <h3 className="font-serif font-semibold text-foreground mb-2">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Audience */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl grid md:grid-cols-2 gap-6">
          <div className="bg-card p-6 sm:p-8 rounded-2xl border border-border/50 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-5 flex items-center gap-2">
              <Trophy className="text-primary" size={22} /> Benefits & Certification
            </h2>
            <ul className="space-y-2">
              {benefits.map((b) => (
                <li key={b} className="flex gap-2 text-sm text-foreground">
                  <Award size={16} className="text-primary mt-0.5 shrink-0" /> {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 sm:p-8 rounded-2xl border border-primary/20 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-5 flex items-center gap-2">
              <Users className="text-primary" size={22} /> Who Can Participate?
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
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="py-12 sm:py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl grid md:grid-cols-2 gap-6">
          <div className="bg-card p-6 sm:p-8 rounded-2xl border border-border/50 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-5">
              Abstract Submission Guidelines
            </h2>
            <ul className="space-y-2">
              {abstractGuidelines.map((g) => (
                <li key={g} className="flex gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" /> {g}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card p-6 sm:p-8 rounded-2xl border border-border/50 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-5">
              Full Paper Guidelines
            </h2>
            <ul className="space-y-2">
              {paperGuidelines.map((g) => (
                <li key={g} className="flex gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" /> {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Important dates & leadership */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl grid md:grid-cols-2 gap-6">
          <div className="bg-card p-6 sm:p-8 rounded-2xl border border-border/50 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-5 flex items-center gap-2">
              <Calendar className="text-primary" size={22} /> Important Dates
            </h2>
            <ul className="space-y-3">
              {importantDates.map((d) => (
                <li key={d.label} className="flex justify-between gap-3 text-sm border-b border-border/40 pb-2">
                  <span className="text-muted-foreground">{d.label}</span>
                  <span className="font-semibold text-foreground text-right shrink-0">{d.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card p-6 sm:p-8 rounded-2xl border border-border/50 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-5 flex items-center gap-2">
              <Users className="text-primary" size={22} /> Conference Leadership
            </h2>
            <ul className="space-y-3">
              {leadership.map((l) => (
                <li key={l.name} className="text-sm">
                  <p className="text-xs uppercase tracking-widest text-primary">{l.role}</p>
                  <p className="font-semibold text-foreground">{l.name}</p>
                  <p className="text-muted-foreground">{l.sub}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Register + contact */}
      <section className="py-12 sm:py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-6">
            Register <span className="text-primary">Now</span>
          </h2>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center mb-10">
            <a href={FORM_PAPER_ISBN} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                Paper + ISBN Publication
              </Button>
            </a>
            <a href={FORM_PAPER_ONLY} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8">
                Paper Presentation Only
              </Button>
            </a>
            <a href={FORM_PARTICIPATION} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8">
                Participation Only
              </Button>
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 text-left">
            <div className="bg-card p-5 rounded-2xl border border-border/50 shadow-sm flex items-start gap-3">
              <Mail className="text-primary mt-1 shrink-0" size={20} />
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <a href="mailto:apra.publication@gmail.com" className="text-sm font-semibold text-foreground hover:text-primary">
                  apra.publication@gmail.com
                </a>
              </div>
            </div>
            <div className="bg-card p-5 rounded-2xl border border-border/50 shadow-sm flex items-start gap-3">
              <Phone className="text-primary mt-1 shrink-0" size={20} />
              <div>
                <p className="text-xs text-muted-foreground">Mobile</p>
                <p className="text-sm font-semibold text-foreground">8766251527 · 9718706256 · 9990107533</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </div>
  );
};

export default KnowledgeNexus;
