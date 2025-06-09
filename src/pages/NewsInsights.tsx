import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionBackground from "@/components/SectionBackground";

const NewsInsights = () => {
  const featuredArticle = {
    title:
      "The Future of Enterprise AI: Transforming Business Operations in 2024",
    excerpt:
      "Explore how artificial intelligence is reshaping enterprise operations and what organizations need to know to stay competitive in the AI-driven future.",
    author: "Dr. Aisha Patel",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "AI & Innovation",
    image: "/api/placeholder/800/400",
  };

  const articles = [
    {
      title:
        "Cloud Migration Strategies: A Complete Guide for Enterprise Success",
      excerpt:
        "Learn the essential strategies and best practices for successful cloud migration projects that minimize risk and maximize ROI.",
      author: "Michael Rodriguez",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Cloud Architecture",
      image: "/api/placeholder/400/250",
    },
    {
      title: "SAP S/4HANA Migration: Key Considerations for 2024",
      excerpt:
        "As SAP ECC support winds down, discover the critical factors for planning your S/4HANA migration strategy.",
      author: "Sarah Chen",
      date: "December 5, 2024",
      readTime: "7 min read",
      category: "SAP Consulting",
      image: "/api/placeholder/400/250",
    },
    {
      title: "DevOps Best Practices: Building Resilient CI/CD Pipelines",
      excerpt:
        "Explore proven DevOps methodologies that enable faster deployment cycles while maintaining high quality and security standards.",
      author: "James Wilson",
      date: "November 28, 2024",
      readTime: "5 min read",
      category: "DevOps",
      image: "/api/placeholder/400/250",
    },
    {
      title: "Cybersecurity in the Modern Enterprise: Zero Trust Architecture",
      excerpt:
        "Understanding how Zero Trust security models are becoming essential for protecting enterprise data and applications.",
      author: "Emily Thompson",
      date: "November 22, 2024",
      readTime: "6 min read",
      category: "Security",
      image: "/api/placeholder/400/250",
    },
    {
      title:
        "Digital Transformation ROI: Measuring Success in Technology Investments",
      excerpt:
        "Learn how to quantify the business value of digital transformation initiatives and ensure positive returns.",
      author: "David Park",
      date: "November 15, 2024",
      readTime: "8 min read",
      category: "Business Strategy",
      image: "/api/placeholder/400/250",
    },
    {
      title: "The Rise of Low-Code Platforms in Enterprise Development",
      excerpt:
        "Examining how low-code solutions are accelerating application development while maintaining enterprise-grade quality.",
      author: "Dr. Aisha Patel",
      date: "November 8, 2024",
      readTime: "5 min read",
      category: "Development",
      image: "/api/placeholder/400/250",
    },
  ];

  const categories = [
    "All Articles",
    "AI & Innovation",
    "Cloud Architecture",
    "SAP Consulting",
    "DevOps",
    "Security",
    "Business Strategy",
    "Development",
  ];

  const companyNews = [
    {
      title: "Technum Opus Achieves AWS Advanced Consulting Partner Status",
      date: "December 12, 2024",
      type: "Partnership",
    },
    {
      title: "New Office Opening in Austin, Texas",
      date: "December 1, 2024",
      type: "Company Growth",
    },
    {
      title:
        "Technum Opus Named to Inc. 5000 List of Fastest-Growing Companies",
      date: "November 20, 2024",
      type: "Recognition",
    },
    {
      title: "Strategic Partnership with Microsoft for AI Solutions",
      date: "November 10, 2024",
      type: "Partnership",
    },
  ];

  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-tech-primary/20 via-purple-600/15 to-slate-900/95" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            News & Insights
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Stay informed with the latest trends, insights, and innovations in
            enterprise technology
          </p>
        </div>
      </section>

      {/* Featured Article Section */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-4">
                Featured Article
              </h2>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Featured Article Image */}
                <div className="bg-tech-gradient p-12 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg
                        className="w-10 h-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">AI Innovation</h3>
                  </div>
                </div>

                {/* Featured Article Content */}
                <div className="p-12">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-tech-primary/10 text-tech-primary text-sm rounded-full">
                      {featuredArticle.category}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-tech-text-dark mb-4">
                    {featuredArticle.title}
                  </h3>

                  <p className="text-tech-text-medium mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-tech-gradient rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">
                          {featuredArticle.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-tech-text-dark">
                          {featuredArticle.author}
                        </div>
                        <div className="text-sm text-tech-text-medium">
                          {featuredArticle.date}
                        </div>
                      </div>
                    </div>
                    <span className="text-sm text-tech-text-medium">
                      {featuredArticle.readTime}
                    </span>
                  </div>

                  <button className="px-6 py-3 bg-tech-gradient text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                    Read Full Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Articles Grid Section */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-6 md:mb-0">
                Latest Articles
              </h2>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.slice(0, 4).map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      index === 0
                        ? "bg-tech-primary text-white"
                        : "bg-white text-tech-text-medium hover:bg-tech-primary/10 hover:text-tech-primary"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Article Image Placeholder */}
                  <div className="h-48 bg-tech-gradient flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <svg
                          className="w-6 h-6"
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
                      <span className="text-sm font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-tech-primary/10 text-tech-primary text-xs rounded-full">
                        {article.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-tech-text-dark mb-3 line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-tech-text-medium mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-tech-gradient rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            {article.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <span className="text-tech-text-medium">
                          {article.author}
                        </span>
                      </div>
                      <div className="text-tech-text-medium">
                        <span>{article.date}</span> •{" "}
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="px-8 py-4 border-2 border-tech-primary text-tech-primary rounded-lg font-semibold hover:bg-tech-primary hover:text-white transition-all duration-300">
                Load More Articles
              </button>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Company News Section */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Newsletter Signup */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-8">
                  Stay Updated
                </h2>

                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <h3 className="text-2xl font-bold text-tech-text-dark mb-4">
                    Subscribe to Our Newsletter
                  </h3>
                  <p className="text-tech-text-medium mb-6">
                    Get the latest insights, industry trends, and company
                    updates delivered to your inbox weekly.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tech-primary focus:border-transparent"
                    />
                    <button className="px-6 py-3 bg-tech-gradient text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                      Subscribe
                    </button>
                  </div>

                  <p className="text-sm text-tech-text-medium mt-4">
                    No spam, unsubscribe at any time. We respect your privacy.
                  </p>
                </div>
              </div>

              {/* Company News Sidebar */}
              <div>
                <h3 className="text-2xl font-bold text-tech-text-dark mb-6">
                  Company News
                </h3>

                <div className="space-y-6">
                  {companyNews.map((news, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 bg-tech-primary/10 text-tech-primary text-xs rounded-full">
                          {news.type}
                        </span>
                      </div>
                      <h4 className="font-semibold text-tech-text-dark mb-2">
                        {news.title}
                      </h4>
                      <p className="text-sm text-tech-text-medium">
                        {news.date}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <button className="w-full px-4 py-3 border-2 border-tech-primary text-tech-primary rounded-lg font-semibold hover:bg-tech-primary hover:text-white transition-all duration-300">
                    View All News
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      <Footer />
    </div>
  );
};

export default NewsInsights;
