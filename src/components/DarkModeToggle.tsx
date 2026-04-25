import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 300 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-primary text-primary-foreground shadow-xl border-2 border-primary-foreground/20 flex items-center justify-center hover:bg-primary/90 transition-all duration-300 hover:scale-110 hover:shadow-2xl"
      aria-label="Toggle dark mode"
      whileTap={{ scale: 0.9 }}
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </motion.button>
  );
};

export default DarkModeToggle;
