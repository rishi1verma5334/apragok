import { useState } from "react";
import { motion } from "framer-motion";
import { Images } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";

import workshop1 from "@/assets/gallery/workshop-1.jpeg";
import workshop2 from "@/assets/gallery/workshop-2.jpeg";
import workshop3 from "@/assets/gallery/workshop-3.jpeg";
import workshop16 from "@/assets/gallery/workshop-16.jpeg";
import workshop17 from "@/assets/gallery/workshop-17.jpeg";
import workshop18 from "@/assets/gallery/workshop-18.jpeg";
import workshop19 from "@/assets/gallery/workshop-19.jpeg";
import workshop20 from "@/assets/gallery/workshop-20.jpeg";
import workshop21 from "@/assets/gallery/workshop-21.jpeg";
import workshop22 from "@/assets/gallery/workshop-22.jpeg";

import conferenceDay1 from "@/assets/gallery/conference-day1.jpeg";
import conferenceDay2 from "@/assets/gallery/conference-day2.jpeg";
import fdpPhoto1 from "@/assets/events/fdp-ai-education-photo1.jpeg";
import fdpPhoto2 from "@/assets/events/fdp-ai-education-photo2.jpg";
import book31 from "@/assets/gallery/book-3-1.jpeg";
import book32 from "@/assets/gallery/book-3-2.jpeg";
import fdpS2Photo1 from "@/assets/events/fdp-s2-photo1.jpeg";
import fdpS2Photo2 from "@/assets/events/fdp-s2-photo2.jpeg";
import fdpS2Photo3 from "@/assets/events/fdp-s2-photo3.jpeg";
import fdpS2Photo4 from "@/assets/events/fdp-s2-photo4.jpeg";
import fdpS2Photo5 from "@/assets/events/fdp-s2-photo5.jpeg";
import fdpS2Photo6 from "@/assets/events/fdp-s2-photo6.jpeg";
import fdpS2Photo7 from "@/assets/events/fdp-s2-photo7.jpeg";
import fdpS2Photo8 from "@/assets/events/fdp-s2-photo8.jpeg";
import fdpS2Photo9 from "@/assets/events/fdp-s2-photo9.jpeg";
import spectrumConfPhoto1 from "@/assets/events/spectrum-conf-photo1.jpeg";
import spectrumConfPhoto2 from "@/assets/events/spectrum-conf-photo2.png";
import spectrumConfPhoto3 from "@/assets/events/spectrum-conf-photo3.jpeg";
import spectrumConfPhoto4 from "@/assets/events/spectrum-conf-photo4.jpeg";
import spectrumConfPhoto5 from "@/assets/events/spectrum-conf-photo5.jpeg";
import spectrumConfPhoto6 from "@/assets/events/spectrum-conf-photo6.jpeg";

const galleryImages = [
  {
    id: 44,
    title: "Spectrum of Knowledge Conference 2026 - Keynote Session",
    description: "Promoting Excellence in Multidisciplinary Research, organized by APRA Group of Knowledge (June 27, 2026)",
    image: spectrumConfPhoto1,
  },
  {
    id: 45,
    title: "Spectrum of Knowledge Conference 2026 - Participants",
    description: "Faculty, researchers and presenters during the multidisciplinary research conference",
    image: spectrumConfPhoto2,
  },
  {
    id: 46,
    title: "Spectrum of Knowledge Conference 2026 - Research Presentation",
    description: "Paper presentation on research methodology during the conference",
    image: spectrumConfPhoto3,
  },
  {
    id: 47,
    title: "Spectrum of Knowledge Conference 2026 - Education in the AI Age",
    description: "Presentation on reimagining education for sustainable human development",
    image: spectrumConfPhoto4,
  },
  {
    id: 48,
    title: "Spectrum of Knowledge Conference 2026",
    description: "Discussion on AI, emotional intelligence and human-centered education",
    image: spectrumConfPhoto5,
  },
  {
    id: 49,
    title: "Spectrum of Knowledge Conference 2026 - Ethical Challenges in AI",
    description: "Findings on ethical challenges in AI adoption presented at the conference",
    image: spectrumConfPhoto6,
  },
  {
    id: 35,
    title: "FDP Series 2: AI Powered Education - Participants",
    description: "Faculty Development Program Series 2 on Enhancing Student Engagement and Outcomes",
    image: fdpS2Photo1,
  },
  {
    id: 36,
    title: "FDP Series 2: AI Powered Education - Resource Person",
    description: "Dr Priyanka Verma presenting on Why Student Engagement Matters",
    image: fdpS2Photo2,
  },
  {
    id: 37,
    title: "FDP Series 2: AI Powered Education - Attendees",
    description: "Engaged faculty participants during the AI Powered Education program",
    image: fdpS2Photo3,
  },
  {
    id: 38,
    title: "FDP Series 2: AI Powered Education - Live Demo",
    description: "Hands-on demonstration of AI tools for educators",
    image: fdpS2Photo4,
  },
  {
    id: 39,
    title: "FDP Series 2: AI Powered Education - Resource Person",
    description: "Himani Raizada during the AI Powered Education session",
    image: fdpS2Photo5,
  },
  {
    id: 40,
    title: "FDP Series 2: AI Powered Education - Co-Convenor",
    description: "Namita Jend presenting during the AI Powered Education session",
    image: fdpS2Photo6,
  },
  {
    id: 41,
    title: "FDP Series 2: AI Powered Education - Guest Address",
    description: "Arya Ratna Dr. Sourabh Arya addressing the faculty participants",
    image: fdpS2Photo7,
  },
  {
    id: 42,
    title: "FDP Series 2: AI Powered Education",
    description: "Rishi Verma engaging in the AI Powered Education program",
    image: fdpS2Photo8,
  },
  {
    id: 43,
    title: "FDP Series 2: AI Powered Education - Convenor",
    description: "Dr. Keemti Gaur during the AI Powered Education session",
    image: fdpS2Photo9,
  },
  {
    id: 29,
    title: "Book Handover - Future-Forward Research",
    description: "Presenting our latest publications to contributing authors",
    image: book31,
  },
  {
    id: 30,
    title: "Certificate Presentation Ceremony",
    description: "Honoring editors of Future-Forward Research with certificates",
    image: book32,
  },
  {
    id: 27,
    title: "FDP: AI Powered Education - Session",
    description: "Faculty Development Program on AI in Education (April 4, 2026)",
    image: fdpPhoto1,
  },
  {
    id: 28,
    title: "FDP: AI Powered Education - Highlights",
    description: "Moments from the AI-Enabled Educator program (April 4, 2026)",
    image: fdpPhoto2,
  },
  {
    id: 25,
    title: "Future Forward Research Conference - Day 1",
    description: "Two Day Conference on Global Trends and Interdisciplinary Education",
    image: conferenceDay1,
  },
  {
    id: 26,
    title: "Future Forward Research Conference - Day 2",
    description: "Two Day Conference on Global Trends and Interdisciplinary Education",
    image: conferenceDay2,
  },
  {
    id: 1,
    title: "Certificate Distribution Ceremony",
    description: "Recognizing achievements of our participants",
    image: workshop1,
  },
  {
    id: 2,
    title: "Book Launch Event",
    description: "Celebrating new publications with distinguished guests",
    image: workshop2,
  },
  {
    id: 3,
    title: "Workshop Training Session",
    description: "Interactive learning with educators and professionals",
    image: workshop3,
  },
  {
    id: 16,
    title: "Faculty Development Workshop",
    description: "Training session with educators at library",
    image: workshop16,
  },
  {
    id: 17,
    title: "Interactive Teaching Session",
    description: "Engaging participants in active learning",
    image: workshop17,
  },
  {
    id: 18,
    title: "NEP 2020 Presentation",
    description: "Discussing National Education Policy implementation",
    image: workshop18,
  },
  {
    id: 19,
    title: "School Workshop Session",
    description: "Interactive session with students and teachers",
    image: workshop19,
  },
  {
    id: 20,
    title: "Award Ceremony",
    description: "Recognizing excellence in education",
    image: workshop20,
  },
  {
    id: 21,
    title: "School Assembly Address",
    description: "Inspiring students during morning assembly",
    image: workshop21,
  },
  {
    id: 22,
    title: "Primary School Event",
    description: "Engaging young minds in educational activities",
    image: workshop22,
  },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge variant="secondary" className="mb-4">
              <Images size={14} className="mr-1" />
              Photo Gallery
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-5 sm:mb-6 leading-tight">
              <span className="text-foreground">Moments from Our </span>
              <span className="text-primary">Workshops</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground">
              Relive the memorable experiences from our past workshops, training sessions, 
              and collaborative events that have empowered countless individuals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-16 pt-4 sm:pt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setLightbox({ src: image.image, alt: image.title })}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setLightbox({ src: image.image, alt: image.title });
                  }
                }}
                className="group relative overflow-hidden rounded-xl bg-secondary/30 aspect-[4/3] cursor-zoom-in"
              >
                {/* Gallery Image */}
                <img 
                  src={image.image} 
                  alt={image.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-background">
                    <h3 className="font-serif font-semibold text-lg">{image.title}</h3>
                    <p className="text-sm opacity-80">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Coming Soon Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground">
              More photos coming soon. Stay tuned for updates from our upcoming events!
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
      <Lightbox src={lightbox?.src ?? null} alt={lightbox?.alt} onClose={() => setLightbox(null)} />
    </div>
  );
};

export default Gallery;
