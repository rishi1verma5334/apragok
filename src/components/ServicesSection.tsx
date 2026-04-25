import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Users, GraduationCap, PenTool, Presentation, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: BookOpen,
      title: "Book Publications",
      description: "High-quality publications across diverse subjects including academic texts, research papers, and educational materials.",
      features: ["Academic Books", "Research Publications", "Educational Guides"],
    },
    {
      icon: Presentation,
      title: "Interactive Workshops",
      description: "Engaging workshops designed to provide hands-on learning experiences and practical skill development.",
      features: ["Skill Development", "Hands-on Learning", "Expert Guidance"],
    },
    {
      icon: GraduationCap,
      title: "Training Programs",
      description: "Comprehensive training sessions tailored for students, professionals, and organizations.",
      features: ["Corporate Training", "Student Programs", "Professional Development"],
    },
    {
      icon: PenTool,
      title: "Content Creation",
      description: "Expert content development services for educational institutions and organizations.",
      features: ["Curriculum Design", "Study Materials", "Digital Content"],
    },
    {
      icon: Users,
      title: "Seminars & Conferences",
      description: "Organizing knowledge-sharing events that bring together experts and learners.",
      features: ["Expert Panels", "Networking Events", "Knowledge Exchange"],
    },
    {
      icon: Award,
      title: "Consulting Services",
      description: "Professional consulting for educational planning and institutional development.",
      features: ["Academic Consulting", "Strategic Planning", "Quality Assurance"],
    },
  ];

  return (
    <section id="services" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-primary font-medium tracking-[0.2em] uppercase text-xs mb-4 px-5 py-2 bg-primary/8 rounded-full border border-primary/15">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mt-4 mb-6 text-foreground">
            What We <span className="italic text-primary">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive solutions for knowledge seekers and educational institutions. 
            From publications to workshops, we cover every aspect of learning.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full glass-card rounded-2xl p-6 sm:p-8 overflow-hidden hover:premium-shadow transition-all duration-500 hover:-translate-y-2">
                {/* Shimmer on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/15 to-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:from-primary group-hover:to-primary/80 transition-all duration-500 group-hover:shadow-lg">
                    <service.icon className="text-primary group-hover:text-primary-foreground transition-colors duration-500" size={28} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2.5">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Interested in our services? Let's discuss how we can help you.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-base font-medium px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Request a Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;