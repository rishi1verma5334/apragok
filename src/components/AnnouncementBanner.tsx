import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ArrowRight, X, Megaphone } from "lucide-react";

const AnnouncementBanner = () => {
  const [open, setOpen] = useState(true);

  return (
    <AnimatePresence>
      {open && (
        <motion.section
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="relative z-30 container mx-auto px-4 lg:px-8 pt-28 sm:pt-32"
          aria-label="Call for Book Chapters announcement"
        >
          <div className="relative glass-card rounded-2xl border border-primary/25 premium-shadow overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent pointer-events-none" />
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 sm:p-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/15 text-primary rounded-full text-[10px] font-semibold uppercase tracking-[0.18em] shrink-0">
                <Megaphone size={12} />
                Announcement
              </span>

              <div className="flex items-start sm:items-center gap-3 flex-1 min-w-0">
                <div className="hidden sm:flex w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 items-center justify-center shrink-0">
                  <BookOpen className="text-primary" size={18} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif font-semibold text-foreground text-base sm:text-lg leading-snug">
                    Call for Book Chapters — Now Open
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                    Assistant Professors, Associate Professors & Professors are invited to contribute original chapters to our upcoming edited book.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0 self-stretch sm:self-auto">
                <Link
                  to="/publications/call-for-chapters"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-all hover:-translate-y-0.5 premium-shadow"
                >
                  View Details
                  <ArrowRight size={14} />
                </Link>
                <button
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  aria-label="Dismiss announcement"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementBanner;
