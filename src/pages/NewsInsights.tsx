import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Calendar,
  ArrowRight,
  TrendingUp,
  Lightbulb,
  Users,
  Award,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionBackground from "@/components/SectionBackground";
import { useSubscription } from "@/hooks/useSubscription";
import { toast } from "sonner";

// Newsletter subscription form component
const NewsletterSubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const { subscribe, isLoading, isSuccess, isError, error, reset } =
    useSubscription();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email address");
      return;
    }

    try {
      await subscribe(email, "newsletter");
      toast.success("Successfully subscribed to our newsletter!");
      setEmail("");
      // Reset after 3 seconds
      setTimeout(reset, 3000);
    } catch (err) {
      // Error is handled by the hook and displayed in toast
      if (error) {
        toast.error(error);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          disabled={isLoading || !email.trim()}
          className="px-6 py-3 bg-tech-gradient text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isLoading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      <p className="text-tech-text-medium text-sm mt-3">
        No spam. Unsubscribe at any time.
      </p>
      {isSuccess && (
        <p className="text-green-600 text-sm mt-2 font-medium">
          ✓ Successfully subscribed!
        </p>
      )}
      {isError && error && (
        <p className="text-red-600 text-sm mt-2 font-medium">{error}</p>
      )}
    </div>
  );
};

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
      title: "Cloud Infrastructure Security: Best Practices for 2024",
      excerpt:
        "Comprehensive guide to securing cloud infrastructure with zero-trust architecture and advanced threat detection.",
      author: "Michael Chen",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Cloud Architecture",
      image: "/api/placeholder/400/250",
    },
  ];

  const insights = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Market Trends",
      description:
        "Stay updated with the latest technology trends and market insights that shape the future of business.",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation Stories",
      description:
        "Discover how we help businesses innovate and transform through cutting-edge technology solutions.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client Success",
      description:
        "Read about our clients' success stories and how we've helped them achieve their digital transformation goals.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Industry Recognition",
      description:
        "Learn about our industry awards, certifications, and recognition for excellence in technology consulting.",
    },
  ];

  const categories = [
    "All",
    "SAP Consulting",
    "SAAS Development",
    "Cloud Architecture",
    "Digital Transformation",
    "Industry Insights",
    "Technology Trends",
  ];

  const recentNews = [
    {
      title: "Technum Opus Wins 2024 Digital Innovation Award",
      date: "March 20, 2024",
      category: "Company News",
    },
    {
      title: "New Partnership with Leading Cloud Provider",
      date: "March 18, 2024",
      category: "Partnerships",
    },
    {
      title: "Q1 2024 Technology Predictions Report Released",
      date: "March 15, 2024",
      category: "Research",
    },
    {
      title: "Expansion into European Markets Announced",
      date: "March 12, 2024",
      category: "Company News",
    },
  ];

  return (
    <SectionBackground variant="light">
      <Navigation />

      {/* Hero Section */}
      <SectionBackground variant="gradient">
        <section className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-tech-text-dark mb-6">
              News & <span className="text-tech-primary">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-tech-text-medium max-w-3xl mx-auto mb-8">
              Stay informed with the latest technology trends, industry
              insights, and innovation stories from Technum Opus
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full border border-tech-primary text-tech-primary hover:bg-tech-primary hover:text-white transition-all duration-300"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Featured Articles */}
      <SectionBackground variant="light">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-4">
                Featured Articles
              </h2>
              <p className="text-xl text-tech-text-medium">
                Deep insights and expert perspectives on technology and business
                transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-tech-primary/10 text-tech-primary text-sm rounded-full font-medium">
                        {article.category}
                      </span>
                      <span className="text-tech-text-light text-sm">
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-tech-text-dark mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-tech-text-medium mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-tech-text-light" />
                        <span className="text-tech-text-light text-sm">
                          {article.date}
                        </span>
                      </div>
                      <Link
                        to={`/insights/${article.id}`}
                        className="flex items-center gap-2 text-tech-primary hover:text-tech-primary-dark font-medium"
                      >
                        Read More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Insights Categories */}
      <SectionBackground variant="gradient">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-4">
                What You'll Find Here
              </h2>
              <p className="text-xl text-tech-text-medium">
                Comprehensive coverage of technology, business, and innovation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {insights.map((insight, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-tech-gradient rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                    {insight.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-tech-text-dark mb-3">
                    {insight.title}
                  </h3>
                  <p className="text-tech-text-medium">{insight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Recent News */}
      <SectionBackground variant="light">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-8">
                  Latest News
                </h2>
                <div className="space-y-6">
                  {recentNews.map((news, index) => (
                    <article
                      key={index}
                      className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 bg-tech-primary/10 text-tech-primary text-xs rounded-full font-medium">
                            {news.category}
                          </span>
                          <span className="text-tech-text-light text-sm">
                            {news.date}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-tech-text-dark mb-2">
                          {news.title}
                        </h3>
                      </div>
                      <ArrowRight className="w-5 h-5 text-tech-primary" />
                    </article>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-tech-text-dark mb-6">
                  Stay Connected
                </h3>
                <div className="bg-tech-gradient rounded-xl p-6 text-white mb-6">
                  <h4 className="text-lg font-semibold mb-2">
                    Subscribe to Our Newsletter
                  </h4>
                  <p className="text-white/90 text-sm mb-4">
                    Get weekly updates on technology trends, industry insights,
                    and company news.
                  </p>
                  <button className="w-full bg-white text-tech-primary py-2 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Subscribe Now
                  </button>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-tech-text-dark mb-4">
                    Popular Topics
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "SAP Migration",
                      "Cloud Security",
                      "Digital Innovation",
                      "AI Integration",
                      "Data Analytics",
                      "Automation",
                    ].map((topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1 bg-white text-tech-text-medium text-sm rounded-full border border-gray-200 hover:border-tech-primary hover:text-tech-primary cursor-pointer transition-colors"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
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
    </SectionBackground>
  );
};

export default NewsInsights;
