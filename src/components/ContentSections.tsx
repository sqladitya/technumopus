import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import PartnersLogos from "./PartnersLogos";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className, id }: SectionProps) => (
  <section id={id} className={cn("py-16 md:py-24", className)}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  </section>
);

export const ServicesSection = () => (
  <div>
    <div className="text-center mb-16">
      <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">
        SERVICES
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
        Transform Your Business with
        <span className="block">Advanced Technologies</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
        From digital transformation to cloud architecture, we deliver
        cutting-edge solutions that drive measurable business outcomes and
        competitive advantage.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Digital Transformation */}
      <Link
        to="/services/digital-transformation"
        className="group bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300 cursor-pointer hover:-translate-y-1"
      >
        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
          Digital Transformation
        </h3>
        <p className="text-gray-600 leading-relaxed">
          End-to-end business transformation strategies that modernize
          operations, enhance customer experiences, and unlock new revenue
          streams.
        </p>
        <div className="mt-6 flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
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

      {/* Cloud Architecture */}
      <Link
        to="/services/cloud-architecture"
        className="group bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300 cursor-pointer hover:-translate-y-1"
      >
        <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
          Cloud Architecture
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Scalable, secure cloud infrastructure designed for performance,
          reliability, and cost optimization across multi-cloud environments.
        </p>
        <div className="mt-6 flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
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

      {/* SAP Consulting */}
      <Link
        to="/services/sap-consulting"
        className="group bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300 cursor-pointer hover:-translate-y-1"
      >
        <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
          SAP Consulting
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Comprehensive SAP implementations, migrations, and optimizations that
          streamline business processes and maximize ROI.
        </p>
        <div className="mt-6 flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
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

      {/* SAAS Development */}
      <Link
        to="/services/saas-development"
        className="group bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300 cursor-pointer hover:-translate-y-1"
      >
        <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
          SAAS Development
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Custom software-as-a-service platforms built with modern frameworks,
          designed for scale, security, and exceptional user experience.
        </p>
        <div className="mt-6 flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
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

    {/* View All Services Button */}
    <div className="text-center mt-16">
      <Link
        to="/services"
        className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-lg"
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
      <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">
        ABOUT TECHNUM OPUS
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
        Driving Business
        <span className="block text-blue-600">Outcomes</span>
        with Innovation
      </h2>
      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
        We are a global technology consulting firm that helps enterprises
        navigate digital transformation with confidence. Our proven
        methodologies and deep industry expertise enable sustainable business
        growth.
      </p>

      <div className="space-y-6 mb-8">
        {[
          {
            title: "360° Value Creation",
            description:
              "Comprehensive solutions that drive measurable business impact across all dimensions",
          },
          {
            title: "Industry Leadership",
            description:
              "Recognized expertise across multiple industry verticals and technology domains",
          },
          {
            title: "Global Scale, Local Delivery",
            description:
              "Worldwide presence with deep local market knowledge and cultural understanding",
          },
        ].map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <svg
                className="w-4 h-4 text-white"
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/about"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105"
        >
          Discover Our Story
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
          className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
        >
          Meet Our Leaders
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

    {/* Stats and Visual Content */}
    <div className="relative">
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl border border-gray-100">
        <div className="grid grid-cols-2 gap-6">
          {/* Stats Cards */}
          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600 text-sm font-medium">
              Projects Delivered
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-4xl font-bold text-green-600 mb-2">99%</div>
            <div className="text-gray-600 text-sm font-medium">
              Client Satisfaction
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-4xl font-bold text-purple-600 mb-2">25+</div>
            <div className="text-gray-600 text-sm font-medium">
              Countries Served
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600 text-sm font-medium">
              Global Support
            </div>
          </div>
        </div>

        {/* Central Achievement Badge */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-xl">
            <svg
              className="w-12 h-12 text-white"
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

// New Client Success Stories Section
export const ClientStoriesSection = () => (
  <div className="bg-gray-50 py-16">
    <Section>
      <div className="text-center mb-16">
        <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">
          CLIENT SUCCESS STORIES
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Transforming Businesses
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          See how we help global enterprises achieve breakthrough results
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Global Retailer Modernizes Supply Chain",
            description:
              "35% reduction in operational costs through AI-powered logistics optimization",
            industry: "Retail",
            results: "35% cost reduction",
          },
          {
            title: "Financial Services Cloud Migration",
            description:
              "99.9% uptime achieved with secure multi-cloud architecture",
            industry: "Financial Services",
            results: "99.9% uptime",
          },
          {
            title: "Manufacturing Digital Twin Implementation",
            description:
              "50% increase in production efficiency with IoT and analytics",
            industry: "Manufacturing",
            results: "50% efficiency gain",
          },
        ].map((story, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-4">
              {story.industry}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {story.title}
            </h3>
            <p className="text-gray-600 mb-6">{story.description}</p>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-green-600">
                {story.results}
              </div>
              <Link
                to="/case-studies"
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
              >
                Read more
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
            </div>
          </div>
        ))}
      </div>
    </Section>
  </div>
);
