import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ArrowRight, X, Megaphone, PenLine, LucideIcon } from "lucide-react";

type Mode = "modal" | "minimized" | "hidden";

interface Announcement {
  id: string;
  icon: LucideIcon;
  title: string;
  shortTitle: string;
  description: string;
  ctaLabel: string;
  to: string;
  ariaLabel: string;
}

const announcements: Announcement[] = [
  {
    id: "call-for-chapters",
    icon: BookOpen,
    title: "Call for Book Chapters — Now Open",
    shortTitle: "Call for Book Chapters",
    description:
      "Assistant Professors, Associate Professors & Professors are invited to contribute original chapters to our upcoming edited book.",
    ctaLabel: "View Details",
    to: "/publications/call-for-chapters",
    ariaLabel: "Call for Book Chapters announcement",
  },
  {
    id: "call-for-editors",
    icon: PenLine,
    title: "Call for Editors — Now Open",
    shortTitle: "Call for Editors",
    description:
      "Become an Editor of the prestigious \"Spectrum of Knowledge 2026: A Quarterly Compendium\" (ISBN Publication) and shape academic excellence.",
    ctaLabel: "View Details",
    to: "/publications/call-for-editors",
    ariaLabel: "Call for Editors announcement",
  },
];

const AnnouncementBanner = () => {
  // First announcement starts as a modal; the rest start minimized.
  const [modes, setModes] = useState<Mode[]>(
    announcements.map((_, i) => (i === 0 ? "modal" : "minimized"))
  );

  const setMode = (index: number, mode: Mode) => {
    setModes((prev) => prev.map((m, i) => (i === index ? mode : m)));
  };

  const minimizedList = announcements
    .map((a, index) => ({ a, index }))
    .filter(({ index }) => modes[index] === "minimized");

  return (
    <>
      {/* Modals */}
      {announcements.map((announcement, index) => {
        const Icon = announcement.icon;
        return (
          <AnimatePresence key={announcement.id}>
            {modes[index] === "modal" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/70 backdrop-blur-sm"
                role="dialog"
                aria-modal="true"
                aria-label={announcement.ariaLabel}
                onClick={() => setMode(index, "minimized")}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative w-full max-w-md aspect-square glass-card rounded-3xl border border-primary/25 premium-shadow overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent pointer-events-none" />

                  <button
                    onClick={() => setMode(index, "minimized")}
                    className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors z-10"
                    aria-label="Minimize announcement"
                  >
                    <X size={18} />
                  </button>

                  <div className="relative h-full flex flex-col items-center justify-center text-center p-6 sm:p-8">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/15 text-primary rounded-full text-[10px] font-semibold uppercase tracking-[0.18em] mb-5">
                      <Megaphone size={12} />
                      Announcement
                    </span>

                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/25 to-primary/5 flex items-center justify-center mb-5">
                      <Icon className="text-primary" size={28} />
                    </div>

                    <h3 className="font-serif font-semibold text-foreground text-xl sm:text-2xl leading-snug mb-3">
                      {announcement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6 max-w-sm">
                      {announcement.description}
                    </p>

                    <Link
                      to={announcement.to}
                      onClick={() => setMode(index, "minimized")}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-all hover:-translate-y-0.5 premium-shadow"
                    >
                      {announcement.ctaLabel}
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        );
      })}

      {/* Minimized cards (stacked bottom-left) */}
      <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-2 max-w-xs">
        <AnimatePresence>
          {minimizedList.map(({ a, index }) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="relative glass-card rounded-2xl border border-primary/25 premium-shadow overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent pointer-events-none" />
                  <button
                    onClick={() => setMode(index, "hidden")}
                    className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors z-10"
                    aria-label="Dismiss announcement"
                  >
                    <X size={12} />
                  </button>
                  <button
                    onClick={() => setMode(index, "modal")}
                    className="relative flex items-center gap-3 p-3 pr-8 text-left w-full hover:bg-primary/5 transition-colors"
                    aria-label="Reopen announcement"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/25 to-primary/5 flex items-center justify-center shrink-0">
                      <Icon className="text-primary" size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                        Announcement
                      </p>
                      <p className="text-sm font-serif font-semibold text-foreground truncate">
                        {a.shortTitle}
                      </p>
                    </div>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </>
  );
};

export default AnnouncementBanner;
