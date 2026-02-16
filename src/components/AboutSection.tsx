import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Target, Heart, Lightbulb, Crown, Briefcase, Scale, PenLine, GraduationCap, TrendingUp, ClipboardCheck } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

  const leaders = [
    {
      icon: Crown,
      role: "Founder, CEO",
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
      icon: GraduationCap,
      role: "Training Head",
      name: "Dr. Keemti Gaur",
      description: "Educational Programs Lead planning professional development initiatives.",
      detail: "Organizes workshops, seminars, and specialized training programs that empower participants with practical skills and knowledge."
    },
    {
      icon: PenLine,
      role: "Editorial Head",
      name: "Mrs. Himani Raizada",
      description: "Content and Creative Supervisor overseeing all publications.",
      detail: "Supervises content writing, editing, and graphic design to ensure every publication meets the highest quality standards."
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
    <section id="about" className="section-padding bg-gradient-to-b from-secondary/20 via-secondary/40 to-secondary/20" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block text-primary font-medium tracking-wider uppercase text-sm mb-4 px-4 py-2 bg-primary/10 rounded-full">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mt-4 mb-6 text-foreground">
            Nurturing Minds, <span className="text-primary">Shaping Futures</span>
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
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300" />
              <div className="relative bg-card rounded-2xl p-8 shadow-xl border-2 border-primary/20 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Crown className="text-primary-foreground" size={32} />
                  </div>
                  <div className="text-center sm:text-left">
                    <span className="text-sm font-medium text-primary uppercase tracking-wider">
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
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300" />
                  <div className="relative bg-card rounded-2xl p-6 shadow-lg border border-border h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <leader.icon className="text-primary-foreground" size={24} />
                    </div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
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
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-10 shadow-lg">
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
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Excellence in Knowledge</span>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
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
              <div className="bg-card border border-border rounded-2xl p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/30">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:from-primary group-hover:to-primary/80 transition-all duration-300">
                  <value.icon className="text-primary group-hover:text-primary-foreground transition-colors duration-300" size={26} />
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