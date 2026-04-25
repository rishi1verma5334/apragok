import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, BookOpen, Images, Users } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import apraLogo from "@/assets/apra-logo.jpeg";
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

import workshop1Mobile from "@/assets/gallery/workshop-1-mobile.jpeg";
import workshop2Mobile from "@/assets/gallery/workshop-2-mobile.jpeg";
import workshop3Mobile from "@/assets/gallery/workshop-3-mobile.jpeg";

type Slide = { desktop: string; mobile: string };
const allImages: Slide[] = [
  { desktop: workshop1, mobile: workshop1Mobile },
  { desktop: workshop2, mobile: workshop2Mobile },
  { desktop: workshop3, mobile: workshop3Mobile },
  { desktop: workshop16, mobile: workshop16 },
  { desktop: workshop17, mobile: workshop17 },
  { desktop: workshop18, mobile: workshop18 },
  { desktop: workshop19, mobile: workshop19 },
  { desktop: workshop20, mobile: workshop20 },
  { desktop: workshop21, mobile: workshop21 },
  { desktop: workshop22, mobile: workshop22 },
];
const slideshowImages = [...allImages].sort(() => Math.random() - 0.5);

const pickSrc = (slide: Slide) =>
  typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches
    ? slide.mobile
    : slide.desktop;

const SLIDE_INTERVAL = 5500;

const preloadImage = (src: string) =>
  new Promise<void>((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = src;
  });

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPreloading, setIsPreloading] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    const scheduleNext = () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(async () => {
        const nextIndex = (currentSlide + 1) % slideshowImages.length;
        setIsPreloading(true);
        await preloadImage(pickSrc(slideshowImages[nextIndex]));
        if (cancelled) return;
        setIsPreloading(false);
        setCurrentSlide(nextIndex);
      }, SLIDE_INTERVAL);
    };

    scheduleNext();

    // Warm up the image after next so transitions feel instant
    const lookahead = (currentSlide + 2) % slideshowImages.length;
    preloadImage(pickSrc(slideshowImages[lookahead]));

    return () => {
      cancelled = true;
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [currentSlide]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Slideshow Background */}
      <div className="absolute inset-0 bg-background">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={pickSrc(slideshowImages[currentSlide])}
              alt="Workshop background"
              className="w-full h-full object-cover"
              decoding="async"
            />
          </motion.div>
        </AnimatePresence>
        {/* Warm gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent mix-blend-overlay" />

        {/* Subtle shimmer skeleton overlay while next slide is loading */}
        <AnimatePresence>
          {isPreloading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent bg-[length:200%_100%] animate-[shimmer_1.6s_linear_infinite]" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Thin progress bar at the bottom of the hero */}
        <AnimatePresence>
          {isPreloading && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 overflow-hidden"
              aria-hidden="true"
            >
              <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent animate-[slide-progress_1.2s_ease-in-out_infinite]" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/15 backdrop-blur-md rounded-full text-sm text-primary-foreground mb-8 border border-primary/25"
            >
              <BookOpen size={16} className="text-gold" />
              <span className="font-medium tracking-wide">Inspiring Minds, Empowering Futures</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold leading-[0.95] mb-8"
            >
              <span className="text-white">APRA:</span>
              <br />
              <span className="text-primary italic">Group of</span>
              <br />
              <span className="text-white">Knowledge</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-white/75 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Publishing transformative books and conducting insightful workshops, seminars and trainings.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/publications">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base font-medium px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                  <BookOpen className="mr-2" size={20} />
                  Explore Publications
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground text-base font-medium px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-md hover:-translate-y-0.5"
                onClick={() => navigate('/workshops')}
              >
                <Users className="mr-2" size={20} />
                Join Workshops
              </Button>
              <Link to="/gallery">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground text-base font-medium px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-md hover:-translate-y-0.5"
                >
                  <Images className="mr-2" size={20} />
                  View Event Gallery
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Logo Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative">
              {/* Decorative rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 -m-8 border-2 border-dashed border-primary/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 -m-16 border border-gold/15 rounded-full"
              />
              
              {/* Main Logo */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl ring-4 ring-primary/20 warm-glow">
                  <img src={apraLogo} alt="APRA - Group of Knowledge" className="w-full h-full object-cover" />
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <BookOpen className="text-primary-foreground" size={28} />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <Users className="text-accent-foreground" size={24} />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex justify-center"
        >
          <motion.button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors cursor-pointer"
          >
            <span className="text-xs tracking-[0.2em] uppercase font-medium">Scroll to explore</span>
            <ArrowDown size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;