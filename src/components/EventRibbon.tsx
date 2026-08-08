import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, ArrowRight, Sparkles, CalendarOff } from "lucide-react";
import { isPastDate } from "@/lib/eventDates";

type UpcomingEvent = {
  title: string;
  date: string;
  location: string;
  href: string;
};

// Set to [] when there are no upcoming events. Past events are filtered out automatically.
const allUpcomingEvents: UpcomingEvent[] = [
  {
    title: "FDP Series 2 — AI Powered Education",
    date: "June 20, 2026",
    location: "Online (Google Meet)",
    href: "/workshops/fdp-ai-education",
  },
  {
    title: "Spectrum of Knowledge Conference 2026",
    date: "June 27, 2026",
    location: "Online (Google Meet)",
    href: "/workshops",
  },
];

const EventRibbon = () => {
  const [index, setIndex] = useState(0);
  // Auto-hide events whose date has already passed.
  const upcomingEvents = allUpcomingEvents.filter((e) => !isPastDate(e.date));

  useEffect(() => {
    if (upcomingEvents.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % upcomingEvents.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  if (upcomingEvents.length === 0) {
    return (
      <div
        className="fixed top-0 left-0 right-0 z-[60] block bg-muted text-muted-foreground border-b border-border"
        aria-label="No upcoming event"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-center gap-2 py-2 text-xs sm:text-sm font-medium">
            <CalendarOff size={14} />
            <span>No upcoming event</span>
          </div>
        </div>
      </div>
    );
  }

  const upcomingEvent = upcomingEvents[index % upcomingEvents.length];

  return (
    <Link
      to={upcomingEvent.href}
      key={upcomingEvent.title}
      className="fixed top-0 left-0 right-0 z-[60] block bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground shadow-md hover:shadow-lg transition-shadow group animate-in fade-in duration-500"
      aria-label="View upcoming event details"
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-center gap-2 sm:gap-4 py-1.5 sm:py-2 text-[11px] sm:text-sm font-medium">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 bg-primary-foreground/15 backdrop-blur-sm rounded-full uppercase tracking-wider text-[10px] font-semibold shrink-0">
            <Sparkles size={12} />
            Upcoming
          </span>
          <span className="font-serif font-semibold truncate min-w-0">{upcomingEvent.title}</span>
          <span className="hidden md:inline-flex items-center gap-1 opacity-90 shrink-0">
            <Calendar size={14} />
            {upcomingEvent.date}
          </span>
          <span className="hidden lg:inline-flex items-center gap-1 opacity-90 shrink-0">
            <MapPin size={14} />
            {upcomingEvent.location}
          </span>
          <span className="inline-flex items-center gap-1 font-semibold underline-offset-2 group-hover:underline shrink-0">
            <span className="hidden xs:inline">Details</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </span>
          {upcomingEvents.length > 1 && (
            <span className="inline-flex items-center gap-1 ml-1 shrink-0" aria-hidden="true">
              {upcomingEvents.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 w-1.5 rounded-full transition-opacity ${
                    i === index ? "bg-primary-foreground" : "bg-primary-foreground/40"
                  }`}
                />
              ))}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default EventRibbon;
