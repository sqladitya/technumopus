import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Leadership from "./pages/Leadership";
import Careers from "./pages/Careers";
import NewsInsights from "./pages/NewsInsights";
import SAPConsulting from "./pages/services/SAPConsulting";
import SAASDevelopment from "./pages/services/SAASDevelopment";
import CloudArchitecture from "./pages/services/CloudArchitecture";
import HardwareInfrastructure from "./pages/services/HardwareInfrastructure";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/news-insights" element={<NewsInsights />} />
          <Route path="/services/sap-consulting" element={<SAPConsulting />} />
          <Route
            path="/services/saas-development"
            element={<SAASDevelopment />}
          />
          <Route
            path="/services/cloud-architecture"
            element={<CloudArchitecture />}
          />
          <Route
            path="/services/hardware-infrastructure"
            element={<HardwareInfrastructure />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
