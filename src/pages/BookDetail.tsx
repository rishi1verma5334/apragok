import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, User, Tag, FileText, ShoppingCart } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import emergingTrendsEducation from "@/assets/books/emerging-trends-education.jpeg";
import dincharyaSanatanDharma from "@/assets/books/dincharya-sanatan-dharma.jpeg";

const booksData = [
  {
    id: 1,
    slug: "emerging-trends-education",
    title: "Emerging Trends and Issues in Education",
    author: "Dr. Priyanka Verma & Dr. Sonam Sharma",
    cover: emergingTrendsEducation,
    category: "Education",
    description: "This comprehensive book explores the latest developments and challenges in the field of education. It provides valuable insights into modern teaching methodologies, educational technology integration, and the evolving landscape of learning environments.",
    highlights: [
      "Modern teaching methodologies",
      "Educational technology integration",
      "Contemporary challenges in education",
      "Innovative learning approaches"
    ],
    pdfUrl: "/books/emerging-trends-education.pdf",
    buyUrl: "https://forms.gle/Lz4rGNem7cHVzJDW8",
    buyLabel: "Buy Now"
  },
  {
    id: 2,
    slug: "dincharya-sanatan-dharma",
    title: "Dincharya Sanatan Dharma",
    author: "APRA Group of Knowledge",
    cover: dincharyaSanatanDharma,
    category: "Spirituality",
    description: "A profound exploration of daily spiritual practices rooted in Sanatan Dharma traditions. This book guides readers through the significance of daily routines and rituals that promote physical, mental, and spiritual well-being.",
    highlights: [
      "Daily spiritual practices",
      "Traditional wisdom and rituals",
      "Holistic well-being approaches",
      "Ancient knowledge for modern life"
    ],
    pdfUrl: "/books/dincharya-sanatan-dharma.pdf",
    buyUrl: "https://wa.me/message/PQ6G2FPVROSKH1",
    buyLabel: "Buy via WhatsApp"
  }
];

const BookDetail = () => {
  const { slug } = useParams();
  const book = booksData.find(b => b.slug === slug);

  if (!book) {
    return <Navigate to="/publications" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 pb-8 sm:pb-12 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/publications">
              <Button variant="ghost" className="mb-6 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="mr-2" size={18} />
                Back to Publications
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Book Content */}
      <section className="pt-4 pb-16 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start max-w-6xl mx-auto">
            {/* Book Cover */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
                <img
                  src={book.cover}
                  alt={book.title}
                  className="relative w-full max-w-sm rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Book Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                  <Tag size={14} />
                  {book.category}
                </span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 leading-tight">
                  {book.title}
                </h1>
                <p className="text-lg text-muted-foreground flex items-center gap-2">
                  <User size={18} />
                  {book.author}
                </p>
              </div>

              <div className="prose prose-lg text-muted-foreground">
                <p>{book.description}</p>
              </div>

              {/* Key Highlights */}
              <div className="bg-secondary/30 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <BookOpen size={20} className="text-primary" />
                  Key Highlights
                </h3>
                <ul className="space-y-3">
                  {book.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a 
                  href={book.buyUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                    <ShoppingCart className="mr-2" size={18} />
                    {book.buyLabel}
                  </Button>
                </a>
                <a 
                  href="https://wa.me/message/PQ6G2FPVROSKH1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button size="lg" variant="outline" className="w-full rounded-full px-8">
                    Inquire About This Book
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>

          {/* PDF Viewer Section */}
          {book.pdfUrl && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 max-w-6xl mx-auto"
            >
              <div className="bg-card rounded-2xl border border-border/50 overflow-hidden shadow-lg">
                <div className="p-6 border-b border-border/50 flex items-center gap-3">
                  <FileText className="text-primary" size={24} />
                  <h2 className="text-xl font-serif font-semibold text-foreground">
                    Read the Book
                  </h2>
                </div>
                <div className="aspect-[3/4] sm:aspect-[4/5] md:aspect-[16/10]">
                  <iframe
                    src={book.pdfUrl}
                    className="w-full h-full"
                    title={`${book.title} PDF`}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookDetail;
