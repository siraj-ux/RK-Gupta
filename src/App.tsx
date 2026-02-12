import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ThankYouPage } from "./pages/ThankYouPage";
import { ThankYouPageOtoFb } from "./pages/ThankuPageOtoFb";
import { ThankYouPageOtoGa } from "./pages/ThankuPageOtoGa";
import { ThankYouPageGa } from "./pages/ThankYouPageGa";
import IndexGa from "./pages/IndexGa";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/ty-fb" element={<ThankYouPage/>} />
          <Route path="/ga" element={<IndexGa/>} />
          <Route path="/ty-ga" element={<ThankYouPageGa/>} />
          <Route path="/ty-oto-fb" element={<ThankYouPageOtoFb/>} />
          <Route path="/ty-oto-ga" element={<ThankYouPageOtoGa/>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
