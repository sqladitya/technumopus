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
import Contact from "./pages/Contact";
import ViewAllServices from "./pages/ViewAllServices";
import SAPConsulting from "./pages/services/SAPConsulting";
import SAASDevelopment from "./pages/services/SAASDevelopment";
import CloudArchitecture from "./pages/services/CloudArchitecture";
import HardwareInfrastructure from "./pages/services/HardwareInfrastructure";
import CloudPartners from "./pages/partners/CloudPartners";
import TechnologyPartners from "./pages/partners/TechnologyPartners";
import SecurityPartners from "./pages/partners/SecurityPartners";
import IntegrationPartners from "./pages/partners/IntegrationPartners";
import ViewAllPartners from "./pages/partners/ViewAllPartners";
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
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<ViewAllServices />} />
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
          <Route path="/partners/cloud-partners" element={<CloudPartners />} />
          <Route
            path="/partners/technology-partners"
            element={<TechnologyPartners />}
          />
          <Route
            path="/partners/security-partners"
            element={<SecurityPartners />}
          />
          <Route
            path="/partners/integration-partners"
            element={<IntegrationPartners />}
          />
          <Route path="/partners/view-all" element={<ViewAllPartners />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
