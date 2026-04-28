import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import emergingTrendsEducation from "@/assets/books/emerging-trends-education.jpeg";
import dincharyaSanatanDharma from "@/assets/books/dincharya-sanatan-dharma.jpeg";
import futureForwardResearch from "@/assets/books/future-forward-research.jpeg";
const books = [{
  id: 1,
  slug: "emerging-trends-education",
  title: "Emerging Trends and Issues in Education",
  author: "Dr. Priyanka Verma & Dr. Sonam Sharma",
  cover: emergingTrendsEducation,
  category: "Education"
}, {
  id: 2,
  slug: "dincharya-sanatan-dharma",
  title: "Dincharya Sanatan Dharma",
  author: "APRA Group of Knowledge",
  cover: dincharyaSanatanDharma,
  category: "Spirituality"
}, {
  id: 3,
  slug: "future-forward-research",
  title: "Future-Forward Research: A Quarterly Compendium",
  author: "APRA Group of Knowledge",
  cover: futureForwardResearch,
  category: "Research"
}];
const Publications = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-center">
            <Link to="/">
              <Button variant="ghost" className="mb-6 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="mr-2" size={18} />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4 leading-tight">
              Our <span className="text-primary">Publications</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of transformative books designed to inspire, educate, and empower educators and learners alike.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {books.map((book, index) => <motion.div key={book.id} initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} whileHover={{
            y: -8
          }} className="group">
                <Link to={`/publications/${book.slug}`} className="block h-full">
                  <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border/50 hover:shadow-2xl transition-all duration-300 h-full flex flex-col cursor-pointer">
                    {/* Book Cover */}
                    <div className="relative aspect-[2/3] overflow-hidden">
                      <img src={book.cover} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                          {book.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Book Info */}
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-lg font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {book.title}
                      </h3>
                      <p className="text-muted-foreground text-sm flex items-center gap-2 mt-auto">
                        <BookOpen size={14} className="shrink-0" />
                        <span className="line-clamp-1">{book.author}</span>
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4">
              Interested in Our Publications?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Contact us to learn more about our books or to inquire about bulk orders for educational institutions.
            </p>
            <a href="https://wa.me/message/PQ6G2FPVROSKH1" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                Get in Touch
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Publications;