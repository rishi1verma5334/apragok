import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, BookOpen, Award, Target, Lightbulb, Images, Calendar, MapPin, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import conferenceFlyer1 from "@/assets/events/conference-flyer-1.jpeg";
import conferenceFlyer2 from "@/assets/events/conference-flyer-2.jpeg";
import fdpAiEducation from "@/assets/events/fdp-ai-education.jpeg";
import spectrumPage1 from "@/assets/events/spectrum-conference-page1.jpg";
import spectrumPage2 from "@/assets/events/spectrum-conference-page2.jpg";

const features = [
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Each workshop is designed with clear objectives and measurable outcomes.",
  },
  {
    icon: Users,
    title: "Interactive Sessions",
    description: "Engage in hands-on activities, group discussions, and real-world case studies.",
  },
  {
    icon: Award,
    title: "Certified Programs",
    description: "Receive recognized certificates upon successful completion of workshops.",
  },
  {
    icon: Lightbulb,
    title: "Expert Facilitators",
    description: "Learn from industry experts with years of practical experience.",
  },
];

const Workshops = () => {
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);

  const toggleEvent = (id: string) => {
    setExpandedEvent(prev => prev === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge variant="secondary" className="mb-4">
              <Users size={14} className="mr-1" />
              Workshops & Training
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
              <span className="text-foreground">Transform Your </span>
              <span className="text-primary">Potential</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Join our expertly crafted workshops and training sessions designed to empower 
              individuals and organizations with practical skills and knowledge.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
              asChild
            >
              <a href="https://chat.whatsapp.com/BPo102iGqdgE3KBVR1rm05" target="_blank" rel="noopener noreferrer">
                Get in Touch
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Event - Spectrum of Knowledge Conference 2026 */}
      <section className="py-16 bg-primary/10 border-y-2 border-primary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-primary text-primary-foreground">
              <Calendar size={14} className="mr-1" />
              Upcoming Event
            </Badge>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Spectrum of Knowledge Conference 2026
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-2">
              Promoting Excellence in Multidisciplinary Research — Call for Papers
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mt-4">
              <span className="flex items-center gap-1">
                <Calendar size={16} className="text-primary" />
                May 23, 2026
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={16} className="text-primary" />
                National Prestige School, Ghaziabad
              </span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src={spectrumPage1} 
                alt="Spectrum of Knowledge Conference 2026 - Call for Papers" 
                className="w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src={spectrumPage2} 
                alt="Spectrum of Knowledge Conference 2026 - Guidelines and Sub-themes" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center space-y-4"
          >
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-6 text-lg"
                asChild
              >
                <a href="https://forms.gle/2SnropdcJtWfrisN7" target="_blank" rel="noopener noreferrer">
                  Register for Paper Presentation
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-10 py-6 text-lg"
                asChild
              >
                <a href="https://forms.gle/UK86PXQbwZuwuDVH7" target="_blank" rel="noopener noreferrer">
                  Register for Participation Only
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              🎉 Early Bird Discount: 20% off if you register before May 5, 2026!
            </p>
          </motion.div>
        </div>
      </section>


      {/* Past Events Section */}
      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4 border-muted-foreground/50">
              <Calendar size={14} className="mr-1" />
              Past Events
            </Badge>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Our Past Events
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A look back at the workshops, conferences, and training programs we've organized.
            </p>
          </motion.div>

          {/* Event 1: FDP AI Education */}
          <div className="max-w-5xl mx-auto mb-4">
            <button
              onClick={() => toggleEvent("fdp")}
              className="w-full text-center group cursor-pointer"
            >
              <h3 className="text-2xl font-serif font-bold text-primary hover:text-primary/80 transition-colors mb-1 inline-flex items-center gap-2">
                AI Powered Education: Enhancing Student Engagement and Outcomes
                <ChevronDown size={20} className={`transition-transform duration-300 ${expandedEvent === "fdp" ? "rotate-180" : ""}`} />
              </h3>
              <p className="text-muted-foreground text-sm">
                April 4, 2026 · Online (Google Meet)
              </p>
            </button>

            <AnimatePresence>
              {expandedEvent === "fdp" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 text-center">
                    <p className="text-muted-foreground mb-4">
                      Faculty Development Program (FDP) — Step Into the Future of Teaching: Be an AI-Enabled Educator
                    </p>
                    <div className="max-w-3xl mx-auto">
                      <div className="rounded-xl overflow-hidden shadow-lg">
                        <img 
                          src={fdpAiEducation} 
                          alt="FDP - AI Powered Education flyer" 
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Event 2: Two-Day Research Conference */}
          <div className="max-w-5xl mx-auto mb-4">
            <button
              onClick={() => toggleEvent("conference")}
              className="w-full text-center group cursor-pointer"
            >
              <h3 className="text-2xl font-serif font-bold text-primary hover:text-primary/80 transition-colors mb-1 inline-flex items-center gap-2">
                Two-Day Future-Forward Research Conference
                <ChevronDown size={20} className={`transition-transform duration-300 ${expandedEvent === "conference" ? "rotate-180" : ""}`} />
              </h3>
              <p className="text-muted-foreground text-sm">
                January 16-17, 2026 · Google Meet Platform
              </p>
            </button>

            <AnimatePresence>
              {expandedEvent === "conference" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 text-center">
                    <p className="text-muted-foreground mb-4">
                      Global Trends and Interdisciplinary Innovation
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="rounded-xl overflow-hidden shadow-lg">
                        <img 
                          src={conferenceFlyer1} 
                          alt="Conference flyer - Call for papers and important dates" 
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="rounded-xl overflow-hidden shadow-lg">
                        <img 
                          src={conferenceFlyer2} 
                          alt="Conference flyer - Submission guidelines and sub-themes" 
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-10"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-6 text-lg"
              asChild
            >
              <Link to="/gallery">
                View Event Gallery
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Why Choose Our Workshops?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We deliver transformative learning experiences that combine theory with practice.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center border-border/50 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="text-primary" size={28} />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Images className="mx-auto text-primary mb-6" size={48} />
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              See Our Workshops in Action
            </h2>
            <p className="text-muted-foreground mb-8">
              Browse through photos from our past workshops and training sessions to get a glimpse of the transformative experiences we create.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
              asChild
            >
              <a href="/gallery">
                View Gallery
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <BookOpen className="mx-auto text-primary mb-6" size={48} />
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Collaborate With Us
            </h2>
            <p className="text-muted-foreground mb-8">
              Want to conduct a workshop or training program in partnership with us? We welcome 
              collaborations with individuals and organizations to create impactful learning experiences together.
            </p>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8"
              asChild
            >
              <a href="https://wa.me/message/PQ6G2FPVROSKH1" target="_blank" rel="noopener noreferrer">
                Propose a Collaboration
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Workshops;
