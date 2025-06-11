import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      title: "SAP Consulting",
      description:
        "Transform your enterprise with intelligent SAP solutions that drive efficiency and innovation.",
      href: "/services/sap-consulting",
      icon: "🏢",
    },
    {
      title: "Software Development",
      description:
        "Build scalable, secure software solutions that accelerate your digital transformation.",
      href: "/services/saas-development",
      icon: "💻",
    },
    {
      title: "Cloud Architecture",
      description:
        "Design robust cloud infrastructures that scale with your business needs.",
      href: "/services/cloud-architecture",
      icon: "☁️",
    },
    {
      title: "Hardware Infrastructure",
      description:
        "Deploy enterprise-grade hardware solutions for optimal performance and reliability.",
      href: "/services/hardware-infrastructure",
      icon: "🔧",
    },
  ];

  const insights = [
    {
      title: "The Future of Enterprise AI",
      description:
        "How artificial intelligence is reshaping business operations and creating new opportunities for growth.",
      image: "/placeholder.svg",
      category: "Technology Trends",
      readTime: "5 min read",
    },
    {
      title: "Cloud-First Strategy Guide",
      description:
        "Essential steps for successful cloud migration and digital transformation.",
      image: "/placeholder.svg",
      category: "Digital Strategy",
      readTime: "7 min read",
    },
    {
      title: "Cybersecurity in 2024",
      description:
        "Emerging threats and defense strategies for modern enterprises.",
      image: "/placeholder.svg",
      category: "Security",
      readTime: "6 min read",
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "99%", label: "Client Satisfaction" },
    { number: "15+", label: "Years Experience" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero Section - Accenture Style */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative pt-32 pb-20 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Hero Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                    Innovation
                    <br />
                    <span className="text-pink-400">That Delivers</span>
                  </h1>
                  <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                    We help enterprises reinvent themselves through technology,
                    creating lasting value and competitive advantage.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/services"
                    className="px-8 py-4 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition-colors"
                  >
                    Explore Services
                  </Link>
                  <Link
                    to="/contact"
                    className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-colors"
                  >
                    Get Started
                  </Link>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">
                        {stat.number}
                      </div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hero Visual */}
              <div className="relative">
                <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl p-8 shadow-2xl">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div className="text-white font-medium">
                        Digital Transformation
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-white/20 h-2 rounded-full overflow-hidden">
                        <div className="bg-green-400 h-full w-4/5 rounded-full"></div>
                      </div>
                      <div className="bg-white/20 h-2 rounded-full overflow-hidden">
                        <div className="bg-blue-400 h-full w-3/5 rounded-full"></div>
                      </div>
                      <div className="bg-white/20 h-2 rounded-full overflow-hidden">
                        <div className="bg-purple-400 h-full w-5/6 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Clean Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Services That Transform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your
              business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className="group bg-gray-50 rounded-2xl p-8 hover:bg-pink-50 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-pink-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 text-pink-600 font-medium flex items-center gap-2">
                  Learn more
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition - Accenture Style */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-6xl font-bold text-white">
                  360° VALUE
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  We deliver holistic technology solutions that create
                  sustainable value across your entire organization, from
                  strategy to implementation.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Strategic Innovation
                    </h3>
                    <p className="text-gray-300">
                      Align technology investments with business objectives
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Operational Excellence
                    </h3>
                    <p className="text-gray-300">
                      Optimize processes and enhance efficiency
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Future-Ready Solutions
                    </h3>
                    <p className="text-gray-300">
                      Build scalable platforms for tomorrow's challenges
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Learn About Our Approach
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

            <div className="relative">
              <div className="bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600 rounded-3xl p-1">
                <div className="bg-slate-800 rounded-3xl p-8">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white mb-2">
                        $2.5M+
                      </div>
                      <div className="text-gray-300">Average Cost Savings</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-pink-400 mb-1">
                          40%
                        </div>
                        <div className="text-sm text-gray-300">
                          Faster Deployment
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400 mb-1">
                          60%
                        </div>
                        <div className="text-sm text-gray-300">
                          Reduced Downtime
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead with our research and perspectives on emerging
              technologies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {insight.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-pink-600 transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {insight.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{insight.readTime}</span>
                    <span className="text-pink-600 font-medium">
                      Read more →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/news-insights"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
            >
              View All Insights
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-pink-100 mb-8 leading-relaxed">
            Let's discuss how we can help you achieve your digital
            transformation goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Conversation
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-pink-600 transition-colors"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
