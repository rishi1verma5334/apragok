import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, type: "spring", stiffness: 300 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary/20 text-primary flex items-center justify-center transition-all duration-300 border border-primary/20"
      aria-label="Toggle dark mode"
      whileTap={{ scale: 0.9 }}
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </motion.button>
  );
};

export default DarkModeToggle;
