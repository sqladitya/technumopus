import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import PartnersLogos from "./PartnersLogos";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className, id }: SectionProps) => (
  <section id={id} className={cn("py-12 md:py-16", className)}>
    <div className="max-w-7xl mx-auto px-4">{children}</div>
  </section>
);

// Content Cards Grid - Accenture Style Mobile/Tablet Layout
export const ContentCardsSection = () => (
  <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
    {/* Mobile: Single column with full width cards */}
    {/* Tablet: Two columns with equal width cards */}
    {/* Desktop: Four columns with equal width cards */}
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="w-full max-w-7xl mx-auto">
        {/* Mobile-first grid that expands progressively */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full">
          {[
            {
              category: "TRANSFORMATION",
              title: "Change That Matters",
              description:
                "Discover how we help organizations create lasting impact through human ingenuity and technology innovation",
              image:
                "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              href: "/insights/change-that-matters",
              color: "accenture-purple",
            },
            {
              category: "PERSPECTIVE",
              title: "The Art of AI Maturity",
              description:
                "How to move from AI experimentation to enterprise-wide transformation",
              image:
                "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              href: "/insights/ai-maturity",
              color: "accenture-purple",
            },
            {
              category: "CASE STUDY",
              title: "Digital Banking Revolution",
              description:
                "How we helped a global bank transform customer experience",
              image:
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              href: "/insights/digital-banking",
              color: "accenture-purple",
            },
            {
              category: "REPORT",
              title: "Future of Work",
              description:
                "Reimagining work through human + machine collaboration",
              image:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              href: "/insights/future-of-work",
              color: "accenture-purple",
            },
          ].map((card, index) => (
            <Link
              key={index}
              to={card.href}
              className="group block bg-white rounded-none sm:rounded-lg overflow-hidden shadow-none sm:shadow-card hover:shadow-card-hover transition-all duration-300 sm:hover:-translate-y-1 animate-slide-in-left w-full touch-manipulation"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Mobile: Full width image with 16:9 aspect ratio */}
              {/* Tablet+: Standard video aspect ratio */}
              <div className="aspect-[16/9] sm:aspect-video bg-gray-100 relative overflow-hidden w-full">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Category badge positioned in top-left */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span
                    className={cn(
                      "inline-block px-2 py-1 sm:px-3 sm:py-1.5 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-none sm:rounded shadow-sm",
                      `bg-${card.color}`,
                    )}
                    style={{
                      color: "white",
                      backgroundColor: "rgb(166, 0, 255)", // Accenture purple
                    }}
                  >
                    {card.category}
                  </span>
                </div>
              </div>

              {/* Content area with responsive padding */}
              <div className="p-4 sm:p-5 lg:p-6 w-full bg-white">
                {/* Title with line clamping and responsive sizing */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-accenture-text-primary mb-2 sm:mb-3 group-hover:text-accenture-purple transition-colors line-clamp-2 leading-tight tracking-tight">
                  {card.title}
                </h3>
                {/* Description with proper line height and clamping */}
                <p className="text-accenture-text-tertiary leading-relaxed text-sm sm:text-base lg:text-lg line-clamp-3 sm:line-clamp-4 tracking-tight">
                  {card.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile: Show "View All" button below cards */}
        <div className="mt-8 sm:mt-12 text-center">
          <Link
            to="/insights"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-none sm:rounded-lg transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
          >
            View all insights
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
    </div>
  </section>
);

// 360° Value Section - Accenture's signature section
export const ValuePropositionSection = () => (
  <Section className="bg-accenture-black text-white">
    <div className="text-center py-12 animate-fade-in">
      <h2 className="text-display font-heading text-white mb-8 leading-tight">
        360° VALUE
      </h2>
      <p className="text-body-xl text-white/80 max-w-4xl mx-auto mb-16 leading-relaxed">
        We create 360° value for our clients, their customers, our people, our
        partners, our shareholders and our communities. It's a bold commitment
        to shared success, and it's how we create a positive, enduring impact.
      </p>
      <div className="flex flex-col sm:flex-row gap-8 justify-center">
        <Link
          to="/about/360-value"
          className="group inline-flex items-center gap-4 px-10 py-5 bg-accenture-purple text-white rounded-lg font-semibold hover:bg-accenture-purple-dark transition-all duration-300 hover:scale-105 shadow-purple text-xl"
        >
          Learn about 360° value
          <svg
            className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1"
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
        <button className="group inline-flex items-center gap-4 px-10 py-5 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-xl">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
          Watch the film
        </button>
      </div>
    </div>
  </Section>
);

// Client Stories Carousel - Accenture Style
export const ClientStoriesSection = () => {
  const stories = [
    {
      title: "Reinventing retail for the digital age",
      client: "Leading Global Retailer",
      description:
        "How we helped transform customer experience and drive 40% increase in digital sales",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      results: "40% increase in digital sales",
      industry: "RETAIL",
    },
    {
      title: "Banking on the cloud",
      client: "Major Financial Institution",
      description:
        "Cloud transformation that reduced costs by 30% while improving scalability",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      results: "30% cost reduction",
      industry: "BANKING",
    },
    {
      title: "Smart manufacturing revolution",
      client: "Industrial Manufacturing Leader",
      description: "IoT and AI implementation that increased efficiency by 25%",
      image:
        "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      results: "25% efficiency gain",
      industry: "MANUFACTURING",
    },
  ];

  return (
    <Section className="bg-accenture-gray-50">
      <div className="text-center mb-10 animate-fade-in">
        <div className="text-body-sm font-bold text-accenture-purple uppercase tracking-wider mb-4">
          CLIENT STORIES
        </div>
        <h2 className="text-heading-xl font-semibold text-purple-600 mb-6">
          Real impact for real business
        </h2>
        <p className="text-body-xl text-accenture-text-tertiary max-w-3xl mx-auto">
          See how we help organizations create lasting value through technology
          and human ingenuity
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {stories.map((story, index) => (
          <div
            key={index}
            className="group bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 animate-slide-in-left h-full flex flex-col"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="aspect-video bg-accenture-gray-100 relative overflow-hidden flex-shrink-0">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1 bg-accenture-purple text-white text-body-sm font-bold uppercase tracking-wider rounded">
                  {story.industry}
                </span>
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-heading-md font-semibold text-accenture-text-primary mb-3 group-hover:text-accenture-purple transition-colors">
                {story.title}
              </h3>
              <p className="text-accenture-text-tertiary mb-4 leading-relaxed flex-grow">
                {story.description}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="text-body-xl font-bold text-accenture-purple">
                  {story.results}
                </div>
                <Link
                  to="/insights/case-studies"
                  className="group inline-flex items-center gap-2 text-accenture-purple hover:text-accenture-purple-dark font-semibold transition-colors"
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
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link
          to="/insights/case-studies"
          className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-accenture-purple text-accenture-purple rounded-lg font-semibold hover:bg-accenture-purple hover:text-white transition-all duration-300"
        >
          View all client stories
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
  );
};

// Awards Section - Responsive for All Views
export const AwardsSection = () => {
  const awards = [
    {
      title: "Leader in Digital Services",
      organization: "Gartner Magic Quadrant",
      year: "2024",
      color: "from-purple-600 to-purple-800",
      position: "top-6 left-12",
    },
    {
      title: "Top Employer",
      organization: "Top Employers Institute",
      year: "2024",
      color: "from-red-600 to-red-800",
      position: "top-20 right-16",
    },
    {
      title: "AI Innovation Award",
      organization: "AI Excellence Awards",
      year: "2023",
      color: "from-blue-600 to-blue-800",
      position: "bottom-20 left-8",
    },
    {
      title: "Sustainability Leader",
      organization: "Dow Jones Index",
      year: "2023",
      color: "from-violet-600 to-violet-800",
      position: "bottom-12 right-12",
    },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="w-full max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in relative z-10">
            <div className="text-sm sm:text-base font-bold text-purple-600 uppercase tracking-wider mb-4 sm:mb-6">
              RECOGNITION
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 sm:mb-8 leading-tight">
              Awards and accolades
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4 sm:px-6">
              Recognition from industry leaders for our innovation, workplace
              culture, and commitment to creating 360° value
            </p>
          </div>

          {/* Mobile: Single Column Layout */}
          <div className="block sm:hidden">
            <div className="space-y-6">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className={cn(
                    `bg-gradient-to-r ${award.color} rounded-xl p-6 text-white shadow-xl w-full animate-slide-in-left border border-white/20`,
                  )}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl">🏆</div>
                    <div className="text-xl font-bold bg-white/20 px-3 py-1 rounded-full">
                      {award.year}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 leading-tight text-white">
                    {award.title}
                  </h3>
                  <p className="text-white/95 text-base leading-relaxed">
                    {award.organization}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Tablet: Two Column Grid */}
          <div className="hidden sm:block lg:hidden">
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className={cn(
                    `bg-gradient-to-br ${award.color} rounded-xl p-6 md:p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full animate-slide-in-left border border-white/20`,
                  )}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="flex items-start justify-between mb-4 md:mb-6">
                    <div className="text-3xl md:text-4xl opacity-30">🏆</div>
                    <div className="text-right">
                      <div className="text-xl md:text-2xl font-bold bg-white/20 px-3 py-1 rounded-full">
                        {award.year}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 leading-tight text-white">
                    {award.title}
                  </h3>
                  <p className="text-white/95 text-sm md:text-base leading-relaxed">
                    {award.organization}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Desktop: Floating Cards Layout */}
          <div className="hidden lg:block relative min-h-screen">
            <div className="relative w-full h-full">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className={cn(
                    `absolute w-80 xl:w-96 bg-gradient-to-br ${award.color} rounded-2xl p-8 xl:p-10 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 animate-float ${award.position} border border-white/30`,
                  )}
                  style={{
                    animationDelay: `${index * 0.5}s`,
                    animationDuration: `${8 + index}s`,
                  }}
                >
                  <div className="flex items-start justify-between mb-6 xl:mb-8">
                    <div className="text-5xl xl:text-6xl opacity-30">🏆</div>
                    <div className="text-right">
                      <div className="text-2xl xl:text-3xl font-bold bg-white/25 px-4 py-2 rounded-full">
                        {award.year}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl xl:text-3xl font-bold mb-4 xl:mb-5 leading-tight text-white">
                    {award.title}
                  </h3>
                  <p className="text-white/95 text-lg xl:text-xl leading-relaxed">
                    {award.organization}
                  </p>
                </div>
              ))}
            </div>

            {/* Add some spacing for the floating cards */}
            <div className="h-96"></div>
          </div>
          {/* View All Recognition Button (Mobile/Tablet only) */}
          <div className="mt-12 sm:mt-16 text-center lg:hidden">
            <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-all duration-300 text-base sm:text-lg w-full sm:w-auto shadow-lg hover:shadow-xl hover:scale-105">
              View all recognition
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
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
// Culture Section - Accenture Style
export const CultureSection = () => (
  <Section className="bg-accenture-black text-white relative overflow-hidden">
    <div className="absolute inset-0">
      <div
        className="w-full h-full bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-accenture-black via-accenture-black/80 to-transparent" />
    </div>

    <div className="relative z-10 max-w-4xl animate-fade-in">
      <div className="text-body-sm font-bold text-accenture-purple uppercase tracking-wider mb-6">
        CULTURE & VALUES
      </div>
      <h2 className="text-heading-xl font-semibold text-white mb-8">
        Our core values shape everything we do
      </h2>
      <p className="text-body-xl text-white/80 mb-12 leading-relaxed">
        We believe in the power of technology to transform businesses and
        improve lives. Our commitment to innovation, inclusion, and shared
        success drives us to create lasting impact for all stakeholders.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {[
          {
            title: "Client Value Creation",
            description: "Delivering superior value to our clients",
          },
          {
            title: "One Global Network",
            description: "Leveraging the power of our diverse team",
          },
          {
            title: "Respect for the Individual",
            description: "Fostering an inclusive, caring environment",
          },
        ].map((value, index) => (
          <div
            key={index}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <h3 className="text-heading-md font-semibold text-white mb-3">
              {value.title}
            </h3>
            <p className="text-white/70">{value.description}</p>
          </div>
        ))}
      </div>

      <Link
        to="/about/culture"
        className="group inline-flex items-center gap-3 px-8 py-4 bg-accenture-purple text-white rounded-lg font-semibold hover:bg-accenture-purple-dark transition-all duration-300 hover:scale-105"
      >
        Learn about our culture
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
);

// News Carousel - Accenture Style
export const NewsSection = () => {
  const news = [
    {
      category: "PRESS RELEASE",
      title: "Technum Opus Named a Leader in Digital Transformation Services",
      date: "March 15, 2024",
      excerpt:
        "Recognition highlights our commitment to delivering innovative solutions that drive business value.",
      href: "/newsroom/digital-transformation-leader",
    },
    {
      category: "ANNOUNCEMENT",
      title: "New AI Innovation Center Opens in Silicon Valley",
      date: "March 10, 2024",
      excerpt:
        "State-of-the-art facility to accelerate AI research and development for enterprise clients.",
      href: "/newsroom/ai-innovation-center",
    },
    {
      category: "AWARD",
      title: "Recognized as Top Employer for Technology Professionals",
      date: "March 5, 2024",
      excerpt:
        "Award reflects our commitment to creating an inclusive, innovative workplace culture.",
      href: "/newsroom/top-employer-award",
    },
  ];

  return (
    <Section className="bg-white">
      <div className="text-center mb-16 animate-fade-in">
        <div className="text-body-sm font-bold text-accenture-purple uppercase tracking-wider mb-4">
          NEWSROOM
        </div>
        <h2 className="text-heading-xl font-semibold text-accenture-text-primary mb-6">
          Latest news and insights
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {news.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className="group block bg-white border border-accenture-gray-200 rounded-lg p-4 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-body-sm font-bold text-accenture-purple uppercase tracking-wider mb-3">
              {item.category}
            </div>
            <h3 className="text-heading-md font-semibold text-accenture-text-primary mb-3 group-hover:text-accenture-purple transition-colors">
              {item.title}
            </h3>
            <p className="text-accenture-text-tertiary mb-4 leading-relaxed">
              {item.excerpt}
            </p>
            <div className="text-body-sm text-accenture-text-light">
              {item.date}
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link
          to="/newsroom"
          className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-accenture-purple text-accenture-purple rounded-lg font-semibold hover:bg-accenture-purple hover:text-white transition-all duration-300"
        >
          View all news
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
  );
};

// Services Section
export const ServicesSection = () => (
  <Section className="bg-accenture-gray-50">
    <div className="text-center mb-16 animate-fade-in">
      <div className="text-body-sm font-bold text-accenture-purple uppercase tracking-wider mb-4">
        SERVICES
      </div>
      <h2 className="text-heading-xl font-semibold text-accenture-purple mb-6">
        How we help
      </h2>
      <p className="text-body-xl text-accenture-text-tertiary max-w-3xl mx-auto">
        We combine deep industry knowledge with cutting-edge technology to
        deliver transformative solutions
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {[
        {
          title: "Strategy & Consulting",
          description:
            "Strategic transformation that drives sustainable growth and competitive advantage",
          icon: "🎯",
          href: "/services/strategy-consulting",
        },
        {
          title: "Technology",
          description:
            "Cloud-first solutions that modernize operations and enhance customer experiences",
          icon: "⚡",
          href: "/services/technology",
        },
        {
          title: "Interactive",
          description:
            "Human-centered design that creates meaningful digital experiences",
          icon: "🎨",
          href: "/services/interactive",
        },
        {
          title: "Operations",
          description:
            "Intelligent automation that improves efficiency and reduces costs",
          icon: "⚙️",
          href: "/services/operations",
        },
        {
          title: "Industry X",
          description:
            "Digital transformation for manufacturing and industrial companies",
          icon: "🏭",
          href: "/services/industry-x",
        },
        {
          title: "Song",
          description:
            "Creative solutions that bring brands to life through technology",
          icon: "🎵",
          href: "/services/song",
        },
      ].map((service, index) => (
        <Link
          key={index}
          to={service.href}
          className="group block bg-white rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 animate-slide-in-left"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
            {service.icon}
          </div>
          <h3 className="text-heading-md font-semibold text-accenture-text-primary mb-3 group-hover:text-accenture-purple transition-colors">
            {service.title}
          </h3>
          <p className="text-accenture-text-tertiary leading-relaxed">
            {service.description}
          </p>
        </Link>
      ))}
    </div>
  </Section>
);

export const PartnersSection = () => <PartnersLogos />;

export const AboutSection = () => (
  <Section className="bg-white">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
      <div className="animate-slide-in-left">
        <div className="text-body-sm font-bold text-accenture-purple uppercase tracking-wider mb-4">
          ABOUT TECHNUM OPUS
        </div>
        <h2 className="text-heading-xl font-semibold text-accenture-text-primary mb-6">
          Technology meets human ingenuity
        </h2>
        <p className="text-body-xl text-accenture-text-tertiary mb-8 leading-relaxed">
          We are a global professional services company with leading
          capabilities in digital, cloud and security. Combining unmatched
          experience and specialized skills across more than 40 industries, we
          offer Strategy and Consulting, Interactive, Technology and Operations
          services.
        </p>
        <Link
          to="/about"
          className="group inline-flex items-center gap-3 px-8 py-4 bg-accenture-purple text-white rounded-lg font-semibold hover:bg-accenture-purple-dark transition-all duration-300 hover:scale-105"
        >
          Learn more about us
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

      <div className="relative animate-scale-in">
        <div className="bg-accenture-gray-50 rounded-lg p-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-accenture-purple mb-2">
                500K+
              </div>
              <div className="text-accenture-text-tertiary">People</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accenture-purple mb-2">
                120+
              </div>
              <div className="text-accenture-text-tertiary">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accenture-purple mb-2">
                40+
              </div>
              <div className="text-accenture-text-tertiary">Industries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accenture-purple mb-2">
                #1
              </div>
              <div className="text-accenture-text-tertiary">Fortune 500</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);
