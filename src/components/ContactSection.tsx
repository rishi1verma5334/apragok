import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Facebook, Instagram, MessageCircle, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "apra.publication@gmail.com",
      secondaryContent: "apra.groupofknowledge2024@outlook.com",
      subtitle: "We'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 8766251527",
      subtitle: "Mon-Fri, 10:00AM - 5:00 PM",
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      title: "Facebook",
      href: "https://www.facebook.com/share/17bUBhU3y9/",
    },
    {
      icon: Instagram,
      title: "Instagram",
      href: "https://www.instagram.com/apra.gok?igsh=M2I1OWFocnduZ3V4",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      href: "https://wa.me/message/PQ6G2FPVROSKH1",
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-secondary/20 to-background" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-primary font-medium tracking-[0.2em] uppercase text-xs mb-4 px-5 py-2 bg-primary/8 rounded-full border border-primary/15">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mt-4 mb-6 text-foreground">
            Let's Start a <span className="italic text-primary">Conversation</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have questions about our publications or workshops? We'd love to hear from you. 
            Reach out and let's discuss how we can help.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:premium-shadow transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/15 to-primary/5 rounded-2xl flex items-center justify-center mb-4">
                  <info.icon className="text-primary" size={22} />
                </div>
                <h4 className="text-base font-serif font-semibold text-foreground mb-2">
                  {info.title}
                </h4>
                <p className="text-sm text-foreground font-medium break-all">{info.content}</p>
                {info.secondaryContent && (
                  <p className="text-xs text-foreground font-medium break-all mt-1">{info.secondaryContent}</p>
                )}
                <p className="text-xs text-muted-foreground mt-2">{info.subtitle}</p>
              </motion.div>
            ))}
          </div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-muted-foreground mb-5 tracking-wide">Connect with us</p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.title}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  className="group w-14 h-14 rounded-2xl glass-card flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 hover:shadow-lg text-muted-foreground"
                  title={social.title}
                >
                  <social.icon size={22} className="group-hover:scale-110 transition-transform" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;