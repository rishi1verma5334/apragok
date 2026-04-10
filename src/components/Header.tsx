import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import apraLogo from "@/assets/apra-logo.jpeg";

const navLinks = [
  { name: "Home", section: "home" },
  { name: "About", section: "about" },
  { name: "Services", section: "services" },
  { name: "Publications", section: "publications", isPage: true, path: "/publications" },
  { name: "Workshops", section: "workshops", isPage: true, path: "/workshops" },
  { name: "Contact", section: "contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const handleNavClick = (section: string, isPage?: boolean, path?: string) => {
    if (isPage && path) {
      navigate(path);
    } else if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: section } });
    } else {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-2xl border-b border-border/40"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="relative">
              <img
                src={apraLogo}
                alt="APRA Logo"
                className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/20 shadow-md"
              />
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-primary/10" />
            </div>
            <div className="hidden sm:block text-left">
              <h1 className="text-xl font-serif font-bold text-foreground tracking-tight">APRA</h1>
              <p className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase font-medium">Group of Knowledge</p>
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                onClick={() => handleNavClick(link.section, link.isPage, link.path)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 rounded-full hover:bg-primary/5 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-6" />
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.55 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-foreground transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="ml-1"
            >
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full px-6 shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() => handleNavClick("contact")}
              >
                Get in Touch
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-primary/5 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="p-2 rounded-full hover:bg-primary/5 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-2xl border-t border-border/40"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    setIsOpen(false);
                    handleNavClick(link.section, link.isPage, link.path);
                  }}
                  className="text-foreground hover:text-primary hover:bg-primary/5 transition-all py-3 px-4 text-left rounded-xl font-medium"
                >
                  {link.name}
                </button>
              ))}
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full mt-4 shadow-md"
                onClick={() => {
                  setIsOpen(false);
                  handleNavClick("contact");
                }}
              >
                Get in Touch
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;