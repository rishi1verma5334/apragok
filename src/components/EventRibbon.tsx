import { Link } from "react-router-dom";
import { Calendar, MapPin, ArrowRight, Sparkles, CalendarOff } from "lucide-react";

// Set to null when there is no upcoming event
const upcomingEvent: {
  title: string;
  date: string;
  location: string;
  href: string;
} | null = {
  title: "Spectrum of Knowledge Conference 2026",
  date: "May 23, 2026",
  location: "National Prestige School, Ghaziabad",
  href: "/workshops",
};

const EventRibbon = () => {
  if (!upcomingEvent) {
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

  return (
    <Link
      to={upcomingEvent.href}
      className="fixed top-0 left-0 right-0 z-[60] block bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground shadow-md hover:shadow-lg transition-shadow group"
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
        </div>
      </div>
    </Link>
  );
};

export default EventRibbon;
