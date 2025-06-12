import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionBackground from "@/components/SectionBackground";

const NewsInsights = () => {
  const featuredArticles = [
    {
      id: 1,
      title: "The Future of SAP S/4HANA: Cloud-First Approach",
      excerpt:
        "Exploring how organizations are leveraging SAP S/4HANA Cloud to accelerate digital transformation and improve business agility.",
      author: "John Smith",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "SAP Consulting",
      image: "/api/placeholder/400/250",
    },
    {
      id: 2,
      title: "Microservices Architecture for Modern SAAS Platforms",
      excerpt:
        "Best practices for implementing microservices architecture to build scalable and maintainable SAAS applications.",
      author: "Sarah Johnson",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "SAAS Development",
      image: "/api/placeholder/400/250",
    },
    {
      id: 3,
      title: "Multi-Cloud Strategy: Benefits and Implementation",
      excerpt:
        "How enterprises are adopting multi-cloud strategies to avoid vendor lock-in and optimize costs while maintaining performance.",
      author: "Mike Chen",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Cloud Architecture",
      image: "/api/placeholder/400/250",
    },
  ];

  const recentNews = [
    {
      id: 4,
      title: "Technum Opus Achieves AWS Advanced Consulting Partner Status",
      date: "March 12, 2024",
      category: "Company News",
    },
    {
      id: 5,
      title: "New Partnership with Microsoft for Azure Solutions",
      date: "March 8, 2024",
      category: "Partnerships",
    },
    {
      id: 6,
      title: "Expansion into European Markets Announced",
      date: "March 3, 2024",
      category: "Business Growth",
    },
    {
      id: 7,
      title: "Q1 2024 Customer Success Stories Released",
      date: "February 28, 2024",
      category: "Customer Success",
    },
  ];

  const insights = [
    {
      id: 8,
      title: "5 Key Trends in Enterprise Digital Transformation",
      excerpt:
        "Analyzing the major trends shaping how enterprises approach digital transformation in 2024.",
      author: "Dr. Lisa Wang",
      date: "March 1, 2024",
      readTime: "8 min read",
    },
    {
      id: 9,
      title: "Cybersecurity in the Cloud: Essential Best Practices",
      excerpt:
        "Comprehensive guide to implementing robust security measures for cloud-based enterprise applications.",
      author: "Robert Davis",
      date: "February 25, 2024",
      readTime: "10 min read",
    },
    {
      id: 10,
      title: "ROI Measurement for IT Infrastructure Investments",
      excerpt:
        "Framework for measuring and demonstrating return on investment for enterprise IT infrastructure projects.",
      author: "Jennifer Martinez",
      date: "February 20, 2024",
      readTime: "6 min read",
    },
  ];

  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <SectionBackground variant="gradient">
        <section className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tech-text-dark mb-6">
                News & Insights
              </h1>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                Stay informed with the latest technology trends, industry
                insights, and company updates from Technum Opus.
              </p>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Featured Articles */}
      <SectionBackground variant="light">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-4">
                Featured Articles
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                In-depth analysis and thought leadership on enterprise
                technology
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
                >
                  <div className="aspect-video bg-gradient-to-br from-tech-primary/10 to-purple-500/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-4">
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
                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                          />
                        </svg>
                      </div>
                      <p className="text-tech-text-medium text-sm">
                        {article.category}
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-tech-primary/10 text-tech-primary rounded-full text-xs font-medium">
                        {article.category}
                      </span>
                      <span className="text-tech-text-medium text-xs">
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-tech-text-dark mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-tech-text-medium mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-tech-text-medium">
                        <div>{article.author}</div>
                        <div>{article.date}</div>
                      </div>
                      <button className="text-tech-primary hover:text-tech-primary-dark font-medium text-sm">
                        Read More →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Recent News and Insights */}
      <SectionBackground variant="gradient">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Recent News */}
              <div>
                <h2 className="text-3xl font-bold text-tech-text-dark mb-8">
                  Recent News
                </h2>
                <div className="space-y-6">
                  {recentNews.map((news) => (
                    <div
                      key={news.id}
                      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          {news.category}
                        </span>
                        <span className="text-tech-text-medium text-sm">
                          {news.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-tech-text-dark mb-2">
                        {news.title}
                      </h3>
                      <button className="text-tech-primary hover:text-tech-primary-dark font-medium text-sm">
                        Read More →
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industry Insights */}
              <div>
                <h2 className="text-3xl font-bold text-tech-text-dark mb-8">
                  Industry Insights
                </h2>
                <div className="space-y-6">
                  {insights.map((insight) => (
                    <div
                      key={insight.id}
                      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-tech-text-medium text-xs">
                          {insight.readTime}
                        </span>
                        <span className="text-tech-text-medium text-xs">•</span>
                        <span className="text-tech-text-medium text-xs">
                          {insight.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-tech-text-dark mb-2">
                        {insight.title}
                      </h3>
                      <p className="text-tech-text-medium mb-3 line-clamp-2">
                        {insight.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-tech-text-medium text-sm">
                          By {insight.author}
                        </span>
                        <button className="text-tech-primary hover:text-tech-primary-dark font-medium text-sm">
                          Read More →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Categories */}
      <SectionBackground variant="light">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-4">
                Explore by Category
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                Find content that matters to your business and industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 text-center">
                <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-6">
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
                <h3 className="text-xl font-bold text-tech-text-dark mb-3">
                  SAP Consulting
                </h3>
                <p className="text-tech-text-medium text-sm mb-4">
                  Latest trends and best practices in SAP implementation and
                  optimization.
                </p>
                <button className="text-tech-primary hover:text-tech-primary-dark font-medium text-sm">
                  View Articles →
                </button>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
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
                <h3 className="text-xl font-bold text-tech-text-dark mb-3">
                  SAAS Development
                </h3>
                <p className="text-tech-text-medium text-sm mb-4">
                  Insights on building scalable and secure software-as-a-service
                  platforms.
                </p>
                <button className="text-tech-primary hover:text-tech-primary-dark font-medium text-sm">
                  View Articles →
                </button>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
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
                <h3 className="text-xl font-bold text-tech-text-dark mb-3">
                  Cloud Architecture
                </h3>
                <p className="text-tech-text-medium text-sm mb-4">
                  Cloud strategy, migration, and optimization insights for
                  modern enterprises.
                </p>
                <button className="text-tech-primary hover:text-tech-primary-dark font-medium text-sm">
                  View Articles →
                </button>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
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
                <h3 className="text-xl font-bold text-tech-text-dark mb-3">
                  Infrastructure
                </h3>
                <p className="text-tech-text-medium text-sm mb-4">
                  Hardware infrastructure trends, deployment strategies, and
                  optimization tips.
                </p>
                <button className="text-tech-primary hover:text-tech-primary-dark font-medium text-sm">
                  View Articles →
                </button>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Newsletter Signup */}
      <SectionBackground variant="gradient">
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-tech-text-medium mb-8">
              Subscribe to our newsletter for the latest insights, trends, and
              company updates delivered to your inbox.
            </p>
            <NewsletterSubscriptionForm />
          </div>
        </section>
      </SectionBackground>

      <Footer />
    </div>
  );
};

export default NewsInsights;
