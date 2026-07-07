import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import ChatBot from "@/components/ChatBot";
import EventRibbon from "@/components/EventRibbon";
import Index from "./pages/Index";
import Publications from "./pages/Publications";
import BookDetail from "./pages/BookDetail";
import Workshops from "./pages/Workshops";
import FdpAiEducation from "./pages/FdpAiEducation";
import CallForChapters from "./pages/CallForChapters";
import CallForEditors from "./pages/CallForEditors";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <EventRibbon />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/publications/call-for-chapters" element={<CallForChapters />} />
          <Route path="/publications/call-for-editors" element={<CallForEditors />} />
          <Route path="/publications/:slug" element={<BookDetail />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/workshops/fdp-ai-education" element={<FdpAiEducation />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ChatBot />
      </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
