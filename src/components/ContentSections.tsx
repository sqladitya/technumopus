import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import PartnersLogos from "./PartnersLogos";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className, id }: SectionProps) => (
  <section id={id} className={cn("py-12 sm:py-16 md:py-20", className)}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  </section>
);

export const ServicesSection = () => (
  <div>
    <div className="text-center mb-12 sm:mb-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-tech-text-dark mb-4">
        Our Services
      </h2>
      <p className="text-lg sm:text-xl text-tech-text-medium max-w-3xl mx-auto px-4">
        Comprehensive technology solutions designed to accelerate your digital
        transformation journey
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      {/* SAP Consulting */}
      <Link
        to="/services/sap-consulting"
        className="group bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:border-tech-primary/20 transition-all duration-300 cursor-pointer"
      >
        <div className="w-16 h-16 bg-tech-gradient rounded-lg mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-tech-text-dark mb-4 group-hover:text-tech-primary transition-colors duration-300">
          SAP Consulting
        </h3>
        <p className="text-tech-text-medium">
          Enterprise-grade SAP implementations, optimizations, and support to
          streamline your business processes.
        </p>
      </Link>

      {/* SAAS Platform Development */}
      <Link
        to="/services/saas-development"
        className="group bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:border-tech-primary/20 transition-all duration-300 cursor-pointer"
      >
        <div className="w-16 h-16 bg-tech-gradient rounded-lg mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-tech-text-dark mb-4 group-hover:text-tech-primary transition-colors duration-300">
          Software Development
        </h3>
        <p className="text-tech-text-medium">
          Scalable software-as-a-service solutions built with modern frameworks
          and cloud-native technologies.
        </p>
      </Link>

      {/* Cloud Architecture */}
      <Link
        to="/services/cloud-architecture"
        className="group bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:border-tech-primary/20 transition-all duration-300 cursor-pointer"
      >
        <div className="w-16 h-16 bg-tech-gradient rounded-lg mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-tech-text-dark mb-4 group-hover:text-tech-primary transition-colors duration-300">
          Cloud Architecture
        </h3>
        <p className="text-tech-text-medium">
          Robust, secure, and scalable cloud infrastructure design and
          implementation for maximum performance.
        </p>
      </Link>

      {/* Hardware Infrastructure Solutions */}
      <Link
        to="/services/hardware-infrastructure"
        className="group bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:border-tech-primary/20 transition-all duration-300 cursor-pointer"
      >
        <div className="w-16 h-16 bg-tech-gradient rounded-lg mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-tech-text-dark mb-4 group-hover:text-tech-primary transition-colors duration-300">
          Hardware Infrastructure Solutions
        </h3>
        <p className="text-tech-text-medium">
          Complete hardware solutions from procurement to deployment, ensuring
          optimal performance and reliability.
        </p>
      </Link>
    </div>

    {/* View All Services Button */}
    <div className="text-center mt-12">
      <Link
        to="/services"
        className="inline-flex items-center gap-2 px-8 py-4 bg-tech-primary text-white rounded-lg font-semibold hover:bg-tech-primary-dark transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
      >
        View All Services
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Link>
    </div>
  </div>
);

export const PartnersSection = () => <PartnersLogos />;

export const AboutSection = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    {/* Text Content */}
    <div>
      <h2 className="text-4xl md:text-5xl font-bold text-tech-text-dark mb-6">
        Innovation Meets Excellence
      </h2>
      <p className="text-lg text-tech-text-medium mb-6 leading-relaxed">
        At Technum <span className="text-tech-primary font-semibold">Opus</span>
        , we believe in a client-first approach that puts your success at the
        center of everything we do. Our team combines deep technical expertise
        with innovative thinking to deliver solutions that drive real business
        value.
      </p>
      <p className="text-lg text-tech-text-medium mb-8 leading-relaxed">
        With years of experience across enterprise technologies, cloud
        platforms, and emerging digital trends, we're uniquely positioned to
        guide your digital transformation journey from strategy to
        implementation.
      </p>

      {/* Key Points */}
      <div className="space-y-4 mb-8">
        {[
          "Client-first approach with personalized solutions",
          "Deep technical expertise across all major platforms",
          "Proven track record of successful implementations",
          "Continuous innovation and technology leadership",
        ].map((point, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-6 h-6 bg-tech-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-tech-text-medium">{point}</p>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/about"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-tech-primary text-white rounded-lg font-semibold hover:bg-tech-primary-dark transition-all duration-300 hover:scale-105"
        >
          Learn More About Us
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
        <Link
          to="/leadership"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-tech-primary text-tech-primary rounded-lg font-semibold hover:bg-tech-primary hover:text-white transition-all duration-300"
        >
          Meet Our Team
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </Link>
      </div>
    </div>

    {/* Image/Visual Content */}
    <div className="relative">
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <div className="grid grid-cols-2 gap-6">
          {/* Stats Cards */}
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-tech-primary mb-2">
              500+
            </div>
            <div className="text-tech-text-medium text-sm">
              Projects Delivered
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-tech-primary mb-2">99%</div>
            <div className="text-tech-text-medium text-sm">
              Client Satisfaction
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-tech-secondary mb-2">
              15+
            </div>
            <div className="text-tech-text-medium text-sm">
              Years Experience
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-tech-primary mb-2">
              24/7
            </div>
            <div className="text-tech-text-medium text-sm">Support</div>
          </div>
        </div>

        {/* Central Tech Icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-20 h-20 bg-tech-gradient rounded-full flex items-center justify-center shadow-lg">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
);
