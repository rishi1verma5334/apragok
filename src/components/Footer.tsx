import { motion } from "framer-motion";
import { BookOpen, Mail, Phone, Facebook, MessageCircle, Instagram } from "lucide-react";
import apraLogo from "@/assets/apra-logo.jpeg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];
  const services = ["Book Publications", "Workshops", "Training Programs", "Consulting"];

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Footer */}
        <div className="py-12 sm:py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <img src={apraLogo} alt="APRA Logo" className="h-12 w-12 rounded-full object-cover ring-2 ring-background/20" />
              <div>
                <h3 className="text-xl font-serif font-bold">APRA</h3>
                <p className="text-[10px] tracking-[0.2em] uppercase opacity-60">Group of Knowledge</p>
              </div>
            </div>
            <p className="text-sm opacity-70 mb-6 leading-relaxed">
              Empowering minds through quality publications and transformative workshops, seminars and trainings.
            </p>
            <div className="flex items-center gap-2 opacity-50">
              <BookOpen size={16} />
              <span className="text-xs tracking-wide italic">Inspiring Minds, Empowering Futures</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] mb-6 opacity-90">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm opacity-60 hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] mb-6 opacity-90">Services</h4>
            <ul className="space-y-3">
              {services.map(service => (
                <li key={service}>
                  <span className="text-sm opacity-60">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] mb-6 opacity-90">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="opacity-50 mt-0.5 flex-shrink-0" />
                <span className="text-sm opacity-70">apra.publication@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="opacity-50 mt-0.5 flex-shrink-0" />
                <span className="text-sm opacity-70">+91 8766251527</span>
              </li>
              <li className="flex items-center gap-4 pt-2">
                <a href="https://www.facebook.com/share/17bUBhU3y9/" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 transition-opacity" title="Facebook">
                  <Facebook size={18} />
                </a>
                <a href="https://www.instagram.com/apra.gok?igsh=M2I1OWFocnduZ3V4" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 transition-opacity" title="Instagram">
                  <Instagram size={18} />
                </a>
                <a href="https://wa.me/message/PQ6G2FPVROSKH1" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 transition-opacity" title="WhatsApp">
                  <MessageCircle size={18} />
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs opacity-40 tracking-wide">
              © {currentYear} APRA: Group of Knowledge. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;