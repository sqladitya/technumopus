import { useState } from "react";
import { Link } from "react-router-dom";

const InsightsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Technology", "Business", "Innovation", "Trends"];

  const insights = [
    {
      title: "The Future of AI in Enterprise",
      description:
        "How artificial intelligence is reshaping business operations and creating new opportunities for growth and innovation.",
      category: "Technology",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      image: "/placeholder.svg",
      featured: true,
    },
    {
      title: "Cloud-First Strategy Guide",
      description:
        "Essential steps for successful cloud migration and digital transformation in the modern enterprise.",
      category: "Business",
      readTime: "6 min read",
      date: "Dec 12, 2024",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      title: "Cybersecurity Trends 2024",
      description:
        "Emerging threats and defense strategies that every organization should know about.",
      category: "Trends",
      readTime: "5 min read",
      date: "Dec 10, 2024",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      title: "Innovation Labs: Building Culture",
      description:
        "How to foster a culture of innovation and experimentation within your organization.",
      category: "Innovation",
      readTime: "7 min read",
      date: "Dec 8, 2024",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      title: "SAP S/4HANA Migration Guide",
      description:
        "Complete roadmap for successful SAP S/4HANA transformation projects.",
      category: "Technology",
      readTime: "10 min read",
      date: "Dec 5, 2024",
      image: "/placeholder.svg",
      featured: false,
    },
    {
      title: "Remote Work Technology Stack",
      description:
        "Building the right technology foundation for distributed teams and hybrid work.",
      category: "Business",
      readTime: "6 min read",
      date: "Dec 3, 2024",
      image: "/placeholder.svg",
      featured: false,
    },
  ];

  const filteredInsights =
    activeCategory === "All"
      ? insights
      : insights.filter((insight) => insight.category === activeCategory);

  const featuredInsight = insights.find((insight) => insight.featured);
  const regularInsights = filteredInsights.filter(
    (insight) => !insight.featured,
  );

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Latest
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              INSIGHTS
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Stay ahead with our research, perspectives, and thought leadership
            on emerging technologies and business trends.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {activeCategory === "All" && featuredInsight && (
          <div className="mb-16">
            <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-3xl overflow-hidden group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
              <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                      {featuredInsight.category}
                    </span>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold text-white group-hover:text-purple-200 transition-colors">
                    {featuredInsight.title}
                  </h3>

                  <p className="text-lg text-gray-200 leading-relaxed">
                    {featuredInsight.description}
                  </p>

                  <div className="flex items-center gap-6 text-gray-300">
                    <span>{featuredInsight.date}</span>
                    <span>{featuredInsight.readTime}</span>
                  </div>

                  <Link
                    to="/insights/featured"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                  >
                    Read Article
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

                <div className="hidden lg:block">
                  <div className="h-full bg-white/10 backdrop-blur-sm rounded-2xl p-8 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="text-6xl text-white mb-6">🤖</div>
                      <div className="text-white text-xl font-bold">
                        AI & Innovation
                      </div>
                      <div className="text-purple-200">
                        Transforming Enterprise Operations
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularInsights.map((insight, index) => (
            <article
              key={index}
              className="bg-gray-800 rounded-2xl overflow-hidden group hover:bg-gray-750 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 transform hover:scale-105"
            >
              {/* Image */}
              <div className="aspect-video bg-gradient-to-br from-purple-600 to-pink-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl text-white">
                    {insight.category === "Technology" && "💻"}
                    {insight.category === "Business" && "📊"}
                    {insight.category === "Innovation" && "💡"}
                    {insight.category === "Trends" && "📈"}
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {insight.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors leading-tight">
                  {insight.title}
                </h3>

                <p className="text-gray-300 line-clamp-3 leading-relaxed">
                  {insight.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{insight.date}</span>
                  <span>{insight.readTime}</span>
                </div>

                <Link
                  to={`/insights/${index}`}
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors group"
                >
                  Read More
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
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-8">
            Want to stay updated with our latest insights and research?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/news-insights"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              View All Insights
            </Link>
            <button className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
