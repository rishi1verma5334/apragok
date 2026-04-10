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
      className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full bg-primary/20 backdrop-blur-xl border border-primary/20 shadow-lg flex items-center justify-center text-foreground hover:bg-primary/30 transition-all duration-300 hover:scale-110"
      aria-label="Toggle dark mode"
      whileTap={{ scale: 0.9 }}
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </motion.button>
  );
};

export default DarkModeToggle;
