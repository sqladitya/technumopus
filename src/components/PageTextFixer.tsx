import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * PageTextFixer component - handles page-specific text and meta data fixes
 * This component can be used to apply consistent formatting, meta tags,
 * or other text-related fixes across pages
 */
export function PageTextFixer() {
  const location = useLocation();

  useEffect(() => {
    // You can add any page-specific text fixes here
    // For example:

    // Fix page titles based on route
    const routeTitles: Record<string, string> = {
      "/": "Home - Technum Opus | Technology Consulting & Digital Transformation",
      "/about": "About Us - Technum Opus | Our Story & Mission",
      "/leadership": "Leadership Team - Technum Opus | Meet Our Executives",
      "/careers": "Careers - Technum Opus | Join Our Team",
      "/news-insights": "News & Insights - Technum Opus | Thought Leadership",
      "/contact": "Contact Us - Technum Opus | Get In Touch",
      "/services": "Services - Technum Opus | Technology Solutions",
      "/partners": "Partners - Technum Opus | Strategic Alliances",
      "/services/sap-consulting":
        "SAP Consulting - Technum Opus | Enterprise Solutions",
      "/services/saas-development":
        "SaaS Development - Technum Opus | Cloud Applications",
      "/services/cloud-architecture":
        "Cloud Architecture - Technum Opus | Infrastructure Design",
      "/services/hardware-infrastructure":
        "Hardware Infrastructure - Technum Opus | Physical Solutions",
      "/services/digital-transformation":
        "Digital Transformation - Technum Opus | Modernization Services",
    };

    const title = routeTitles[location.pathname];
    if (title) {
      document.title = title;
    }

    // Add meta description based on route
    const routeDescriptions: Record<string, string> = {
      "/": "Technum Opus provides enterprise technology consulting, digital transformation, and innovative solutions to drive business growth.",
      "/about":
        "Learn about Technum Opus's mission, values, and commitment to delivering exceptional technology consulting services.",
      "/contact":
        "Contact Technum Opus for technology consulting, digital transformation, and enterprise solutions. Get in touch with our expert team.",
      "/services":
        "Explore Technum Opus's comprehensive technology services including SAP consulting, cloud architecture, and digital transformation.",
    };

    const description = routeDescriptions[location.pathname];
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.setAttribute("name", "description");
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute("content", description);
    }

    // Scroll to top on route change (if needed)
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // This component doesn't render anything
  return null;
}

export default PageTextFixer;
