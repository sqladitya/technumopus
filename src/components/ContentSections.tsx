import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import PartnersLogos from "./PartnersLogos";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className, id }: SectionProps) => (
  <section id={id} className={cn("py-20 md:py-28", className)}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  </section>
);

export const ServicesSection = () => (
  <div className="animate-fade-in">
    <div className="text-center mb-20">
      <div className="text-sm font-semibold text-corporate-blue uppercase tracking-wider mb-6">
        SERVICES
      </div>
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-corporate-text-primary mb-8 leading-tight">
        Transform Your Business with
        <span className="block text-corporate-blue">Advanced Technologies</span>
      </h2>
      <p className="text-xl md:text-2xl text-corporate-text-secondary max-w-5xl mx-auto leading-relaxed">
        From digital transformation to cloud architecture, we deliver
        cutting-edge solutions that drive measurable business outcomes and
        competitive advantage across all industries.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Digital Transformation */}
      <div className="group relative">
        <Link
          to="/services/digital-transformation"
          className="block bg-white rounded-2xl shadow-card hover:shadow-card-hover border border-corporate-gray-200 p-8 transition-all duration-500 cursor-pointer hover:-translate-y-2 h-full"
        >
          <div className="w-16 h-16 bg-gradient-corporate rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-corporate-text-primary mb-4 group-hover:text-corporate-blue transition-colors duration-300">
            Digital Transformation
          </h3>
          <p className="text-corporate-text-secondary leading-relaxed mb-6">
            End-to-end business transformation strategies that modernize
            operations, enhance customer experiences, and unlock new revenue
            streams through technology innovation.
          </p>
          <div className="flex items-center text-corporate-blue font-semibold group-hover:translate-x-2 transition-transform duration-300">
            Learn more
            <svg
              className="w-4 h-4 ml-2"
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
          </div>
        </Link>
      </div>

      {/* Cloud Architecture */}
      <div className="group relative">
        <Link
          to="/services/cloud-architecture"
          className="block bg-white rounded-2xl shadow-card hover:shadow-card-hover border border-corporate-gray-200 p-8 transition-all duration-500 cursor-pointer hover:-translate-y-2 h-full"
        >
          <div className="w-16 h-16 bg-gradient-blue rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
          <h3 className="text-xl font-bold text-corporate-text-primary mb-4 group-hover:text-corporate-blue transition-colors duration-300">
            Cloud Architecture
          </h3>
          <p className="text-corporate-text-secondary leading-relaxed mb-6">
            Scalable, secure cloud infrastructure designed for performance,
            reliability, and cost optimization across multi-cloud environments
            and hybrid deployments.
          </p>
          <div className="flex items-center text-corporate-blue font-semibold group-hover:translate-x-2 transition-transform duration-300">
            Learn more
            <svg
              className="w-4 h-4 ml-2"
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
          </div>
        </Link>
      </div>

      {/* SAP Consulting */}
      <div className="group relative">
        <Link
          to="/services/sap-consulting"
          className="block bg-white rounded-2xl shadow-card hover:shadow-card-hover border border-corporate-gray-200 p-8 transition-all duration-500 cursor-pointer hover:-translate-y-2 h-full"
        >
          <div className="w-16 h-16 bg-gradient-purple rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
          <h3 className="text-xl font-bold text-corporate-text-primary mb-4 group-hover:text-corporate-blue transition-colors duration-300">
            SAP Consulting
          </h3>
          <p className="text-corporate-text-secondary leading-relaxed mb-6">
            Comprehensive SAP implementations, migrations, and optimizations
            that streamline business processes, maximize ROI, and accelerate
            digital transformation.
          </p>
          <div className="flex items-center text-corporate-blue font-semibold group-hover:translate-x-2 transition-transform duration-300">
            Learn more
            <svg
              className="w-4 h-4 ml-2"
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
          </div>
        </Link>
      </div>

      {/* Application Development */}
      <div className="group relative">
        <Link
          to="/services/saas-development"
          className="block bg-white rounded-2xl shadow-card hover:shadow-card-hover border border-corporate-gray-200 p-8 transition-all duration-500 cursor-pointer hover:-translate-y-2 h-full"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-corporate-orange to-red-600 rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
          <h3 className="text-xl font-bold text-corporate-text-primary mb-4 group-hover:text-corporate-blue transition-colors duration-300">
            Application Development
          </h3>
          <p className="text-corporate-text-secondary leading-relaxed mb-6">
            Custom software-as-a-service platforms and enterprise applications
            built with modern frameworks, designed for scale, security, and
            exceptional user experience.
          </p>
          <div className="flex items-center text-corporate-blue font-semibold group-hover:translate-x-2 transition-transform duration-300">
            Learn more
            <svg
              className="w-4 h-4 ml-2"
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
          </div>
        </Link>
      </div>
    </div>

    {/* View All Services Button */}
    <div className="text-center mt-20">
      <Link
        to="/services"
        className="group inline-flex items-center gap-3 px-10 py-5 bg-corporate-blue text-white rounded-xl font-semibold hover:bg-corporate-blue-dark transition-all duration-300 hover:scale-105 shadow-corporate-lg hover:shadow-corporate-xl text-lg"
      >
        View All Services
        <svg
          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
    {/* Text Content */}
    <div className="animate-slide-up">
      <div className="text-sm font-semibold text-corporate-blue uppercase tracking-wider mb-6">
        ABOUT TECHNUM OPUS
      </div>
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-corporate-text-primary mb-8 leading-tight">
        Driving Business
        <span className="block text-corporate-blue">Outcomes</span>
        with Innovation
      </h2>
      <p className="text-xl md:text-2xl text-corporate-text-secondary mb-10 leading-relaxed">
        We are a global technology consulting firm that helps enterprises
        navigate digital transformation with confidence. Our proven
        methodologies and deep industry expertise enable sustainable business
        growth and competitive advantage.
      </p>

      <div className="space-y-8 mb-12">
        {[
          {
            title: "360° Value Creation",
            description:
              "Comprehensive solutions that drive measurable business impact across all dimensions of your organization",
          },
          {
            title: "Industry Leadership",
            description:
              "Recognized expertise across multiple industry verticals and cutting-edge technology domains",
          },
          {
            title: "Global Scale, Local Delivery",
            description:
              "Worldwide presence with deep local market knowledge and cultural understanding for seamless execution",
          },
        ].map((item, index) => (
          <div key={index} className="flex items-start gap-6">
            <div className="w-10 h-10 bg-corporate-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <svg
                className="w-5 h-5 text-white"
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
            <div>
              <h3 className="text-xl font-bold text-corporate-text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-corporate-text-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-6">
        <Link
          to="/about"
          className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-corporate-blue text-white rounded-xl font-semibold hover:bg-corporate-blue-dark transition-all duration-300 hover:scale-105 shadow-corporate"
        >
          Discover Our Story
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
          className="group inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-corporate-blue text-corporate-blue rounded-xl font-semibold hover:bg-corporate-blue hover:text-white transition-all duration-300"
        >
          Meet Our Leaders
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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

    {/* Stats and Visual Content */}
    <div className="relative animate-scale-in">
      <div className="bg-gradient-light rounded-3xl p-10 shadow-corporate-xl border border-corporate-gray-200">
        <div className="grid grid-cols-2 gap-8">
          {/* Stats Cards */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-card border border-corporate-gray-100">
            <div className="text-5xl font-bold text-corporate-blue mb-3">
              500+
            </div>
            <div className="text-corporate-text-secondary font-medium">
              Projects Delivered
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-card border border-corporate-gray-100">
            <div className="text-5xl font-bold text-corporate-green mb-3">
              99%
            </div>
            <div className="text-corporate-text-secondary font-medium">
              Client Satisfaction
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-card border border-corporate-gray-100">
            <div className="text-5xl font-bold text-corporate-purple mb-3">
              25+
            </div>
            <div className="text-corporate-text-secondary font-medium">
              Countries Served
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-card border border-corporate-gray-100">
            <div className="text-5xl font-bold text-corporate-orange mb-3">
              24/7
            </div>
            <div className="text-corporate-text-secondary font-medium">
              Global Support
            </div>
          </div>
        </div>

        {/* Central Achievement Badge */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-28 h-28 bg-gradient-corporate rounded-full flex items-center justify-center shadow-corporate-xl animate-float">
            <svg
              className="w-14 h-14 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Client Success Stories Section
export const ClientStoriesSection = () => (
  <div className="bg-corporate-bg-secondary py-20">
    <Section>
      <div className="text-center mb-20 animate-fade-in">
        <div className="text-sm font-semibold text-corporate-blue uppercase tracking-wider mb-6">
          CLIENT SUCCESS STORIES
        </div>
        <h2 className="text-5xl md:text-6xl font-bold text-corporate-text-primary mb-8">
          Transforming Businesses
        </h2>
        <p className="text-xl md:text-2xl text-corporate-text-secondary max-w-4xl mx-auto">
          See how we help global enterprises achieve breakthrough results and
          sustainable competitive advantage
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Global Retailer Modernizes Supply Chain",
            description:
              "35% reduction in operational costs through AI-powered logistics optimization and real-time supply chain visibility",
            industry: "Retail & Consumer",
            results: "35% cost reduction",
            metric: "$2.4M annual savings",
            color: "from-corporate-blue to-corporate-blue-dark",
          },
          {
            title: "Financial Services Cloud Migration",
            description:
              "99.9% uptime achieved with secure multi-cloud architecture and automated disaster recovery",
            industry: "Financial Services",
            results: "99.9% uptime",
            metric: "Zero data breaches",
            color: "from-corporate-green to-green-600",
          },
          {
            title: "Manufacturing Digital Twin Implementation",
            description:
              "50% increase in production efficiency with IoT sensors, predictive analytics, and digital twin technology",
            industry: "Manufacturing",
            results: "50% efficiency gain",
            metric: "18-month ROI",
            color: "from-corporate-purple to-purple-600",
          },
        ].map((story, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 animate-slide-up"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="text-xs font-semibold text-corporate-text-tertiary uppercase tracking-wider mb-4">
              {story.industry}
            </div>
            <h3 className="text-xl font-bold text-corporate-text-primary mb-4 group-hover:text-corporate-blue transition-colors">
              {story.title}
            </h3>
            <p className="text-corporate-text-secondary mb-8 leading-relaxed">
              {story.description}
            </p>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-corporate-blue mb-1">
                  {story.results}
                </div>
                <div className="text-sm text-corporate-text-tertiary">
                  {story.metric}
                </div>
              </div>
              <Link
                to="/case-studies"
                className="group inline-flex items-center gap-2 text-corporate-blue hover:text-corporate-blue-dark font-semibold transition-colors"
              >
                Read more
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
        ))}
      </div>

      <div className="text-center mt-16">
        <Link
          to="/case-studies"
          className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-corporate-blue text-corporate-blue rounded-xl font-semibold hover:bg-corporate-blue hover:text-white transition-all duration-300"
        >
          View All Case Studies
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
    </Section>
  </div>
);
