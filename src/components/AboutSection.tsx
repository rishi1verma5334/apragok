import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Target, Heart, Lightbulb, Crown, Briefcase, Scale, PenLine, GraduationCap, TrendingUp, ClipboardCheck } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const leaders = [
    {
      icon: Crown,
      role: "Chief Executive Officer",
      name: "Dr. Priyanka Verma",
      description: "Owner and Strategic Leader of APRA, defining the overall vision and directing all strategies.",
      detail: "With a passion for education and a vision to democratize knowledge, she sets long-term goals and leads the organization towards excellence in publishing and education."
    },
    {
      icon: Briefcase,
      role: "Chief Operating Manager",
      name: "Mr. Rishi Verma",
      description: "Operations Lead managing day-to-day business operations.",
      detail: "Ensures all departments are functioning efficiently and coordinates cross-functional activities to maintain seamless organizational workflow."
    },
    {
      icon: Scale,
      role: "Legal & Finance Officer",
      name: "Mrs. Priyanka Goel",
      description: "Compliance and Fiscal Manager overseeing legal matters and financial management.",
      detail: "Handles contract management, regulatory compliance, accounting, bookkeeping, taxation, and overall fiscal responsibility."
    },
    {
      icon: PenLine,
      role: "Editorial Head",
      name: "Dr. Keemti Gaur",
      description: "Content and Creative Supervisor overseeing all publications.",
      detail: "Supervises content writing, editing, and graphic design to ensure every publication meets the highest quality standards."
    },
    {
      icon: GraduationCap,
      role: "Training Head",
      name: "Mrs. Himani Raizada",
      description: "Educational Programs Lead planning professional development initiatives.",
      detail: "Organizes workshops, seminars, and specialized training programs that empower participants with practical skills and knowledge."
    },
    {
      icon: TrendingUp,
      role: "Marketing & Sales Manager",
      name: "Mrs. Namita Jend",
      description: "Business Growth Lead managing promotion and client outreach.",
      detail: "Develops and executes revenue generation strategies while building strong relationships with clients and partners."
    },
    {
      icon: ClipboardCheck,
      role: "Administrative Officer",
      name: "Mr. Ajay",
      description: "Office Administration managing official documentation.",
      detail: "Handles corporate correspondence and general office management to ensure smooth administrative operations."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To spread knowledge and empower individuals through quality publications and transformative workshops."
    },
    {
      icon: Lightbulb,
      title: "Our Vision",
      description: "To nurture innovative, enlightened and empowered citizens and educators, fostering a culture of excellence and prosperity for future generations."
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Integrity, excellence, and commitment to fostering a culture of continuous learning and growth."
    },
    {
      icon: Award,
      title: "Our Commitment",
      description: "Delivering exceptional content and experiences that inspire, educate, and transform lives."
    }
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-secondary/50 to-secondary/30" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block text-primary font-medium tracking-[0.2em] uppercase text-xs mb-4 px-5 py-2 bg-primary/8 rounded-full border border-primary/15">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mt-4 mb-6 text-foreground">
            Nurturing Minds, <span className="italic text-primary">Shaping Futures</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            APRA: Group of Knowledge is dedicated to the noble pursuit of spreading wisdom
            through quality book publications and engaging educational workshops.
          </p>
        </motion.div>

        {/* Leadership Section */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl font-serif font-bold text-center text-foreground mb-12"
          >
            Our Leadership Team
          </motion.h3>
          
          {/* Founder Card - Featured */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group max-w-2xl mx-auto mb-8"
          >
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500" />
              <div className="relative glass-card rounded-3xl p-8 border-2 border-primary/15 h-full hover:premium-shadow transition-all duration-500 hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                    <Crown className="text-primary-foreground" size={32} />
                  </div>
                  <div className="text-center sm:text-left">
                    <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">
                      {leaders[0].role}
                    </span>
                    <h4 className="text-2xl font-serif font-bold text-foreground mt-1 mb-3">
                      {leaders[0].name}
                    </h4>
                    <p className="text-muted-foreground mb-3 leading-relaxed">
                      {leaders[0].description}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {leaders[0].detail}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Team Members - Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leaders.slice(1).map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="group"
              >
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500" />
                  <div className="relative glass-card rounded-2xl p-6 h-full hover:premium-shadow transition-all duration-500 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-500">
                      <leader.icon className="text-primary-foreground" size={24} />
                    </div>
                    <span className="text-[10px] font-semibold text-primary uppercase tracking-[0.2em]">
                      {leader.role}
                    </span>
                    <h4 className="text-lg font-serif font-bold text-foreground mt-1 mb-2">
                      {leader.name}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {leader.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <div className="glass-card rounded-3xl p-12">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At APRA, we believe that knowledge is the most powerful tool for transformation.
              Our carefully curated publications cover a wide spectrum of subjects, designed
              to enlighten minds and inspire action.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our workshops are crafted to provide immersive learning experiences,
              combining theoretical foundations with practical applications. Whether you're
              a student, professional, or lifelong learner, APRA has something valuable to offer.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <span className="text-primary font-medium text-xs uppercase tracking-[0.2em]">Excellence in Knowledge</span>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-2xl font-serif font-bold text-center text-foreground mb-12"
        >
          What Drives Us
        </motion.h3>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-6 h-full hover:premium-shadow transition-all duration-500 hover:-translate-y-2 hover:border-primary/20">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/15 to-primary/5 rounded-2xl flex items-center justify-center mb-5 group-hover:from-primary group-hover:to-primary/80 transition-all duration-500">
                  <value.icon className="text-primary group-hover:text-primary-foreground transition-colors duration-500" size={26} />
                </div>
                <h4 className="text-lg font-serif font-bold text-foreground mb-3">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
