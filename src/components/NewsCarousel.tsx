import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const NewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  const newsItems = [
    {
      title: "Technum Opus Expands Global Presence with New Innovation Hub",
      summary:
        "Opening state-of-the-art facility in Singapore to serve Asia-Pacific markets with advanced AI and cloud solutions.",
      date: "December 15, 2024",
      category: "Company News",
      image: "/placeholder.svg",
      readTime: "3 min read",
    },
    {
      title: "Partnership with Leading Cloud Provider Strengthens Capabilities",
      summary:
        "Strategic alliance brings enhanced cloud migration and modernization services to enterprise clients.",
      date: "December 12, 2024",
      category: "Partnerships",
      image: "/placeholder.svg",
      readTime: "4 min read",
    },
    {
      title: "Q4 Results Show 40% Growth in Digital Transformation Services",
      summary:
        "Strong demand for cloud, AI, and automation solutions drives record revenue and client satisfaction.",
      date: "December 10, 2024",
      category: "Financial",
      image: "/placeholder.svg",
      readTime: "5 min read",
    },
    {
      title: "New Cybersecurity Practice Launched to Address Rising Threats",
      summary:
        "Comprehensive security solutions help organizations protect against evolving cyber risks and compliance requirements.",
      date: "December 8, 2024",
      category: "Services",
      image: "/placeholder.svg",
      readTime: "6 min read",
    },
    {
      title: "Recognition as Top Employer for Technology Innovation",
      summary:
        "Industry awards highlight commitment to employee development and inclusive workplace culture.",
      date: "December 5, 2024",
      category: "Awards",
      image: "/placeholder.svg",
      readTime: "3 min read",
    },
    {
      title: "Sustainability Initiative Achieves Carbon Neutral Operations",
      summary:
        "Comprehensive environmental program demonstrates leadership in responsible technology consulting.",
      date: "December 3, 2024",
      category: "Sustainability",
      image: "/placeholder.svg",
      readTime: "4 min read",
    },
  ];

  const itemsPerView = 3;
  const maxIndex = Math.max(0, newsItems.length - itemsPerView);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, maxIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Company News":
        return "bg-blue-600";
      case "Partnerships":
        return "bg-green-600";
      case "Financial":
        return "bg-purple-600";
      case "Services":
        return "bg-orange-600";
      case "Awards":
        return "bg-pink-600";
      case "Sustainability":
        return "bg-teal-600";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-4">
              Latest
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                NEWS
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Stay updated with our latest announcements and industry insights.
            </p>
          </div>

          {/* Controls */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
              title={isAutoPlaying ? "Pause" : "Play"}
            >
              {isAutoPlaying ? (
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
                    d="M10 9v6m4-6v6"
                  />
                </svg>
              ) : (
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
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h6m2 5H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2z"
                  />
                </svg>
              )}
            </button>

            <button
              onClick={prevSlide}
              className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
            >
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* News Carousel */}
        <div className="relative overflow-hidden" ref={carouselRef}>
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {newsItems.map((item, index) => (
              <div key={index} className="w-full lg:w-1/3 flex-shrink-0 px-4">
                <article className="bg-gray-900 rounded-2xl overflow-hidden group hover:bg-gray-800 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 transform hover:scale-105 h-full">
                  {/* Image */}
                  <div className="aspect-video bg-gradient-to-br from-purple-600 to-pink-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/50"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-5xl text-white">
                        {item.category === "Company News" && "🏢"}
                        {item.category === "Partnerships" && "🤝"}
                        {item.category === "Financial" && "📈"}
                        {item.category === "Services" && "⚙️"}
                        {item.category === "Awards" && "🏆"}
                        {item.category === "Sustainability" && "🌱"}
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span
                        className={`${getCategoryColor(
                          item.category,
                        )} text-white px-3 py-1 rounded-full text-sm font-medium`}
                      >
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4 flex-1">
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors leading-tight line-clamp-2">
                        {item.title}
                      </h3>

                      <p className="text-gray-300 line-clamp-3 leading-relaxed">
                        {item.summary}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-400 pt-4 border-t border-gray-700">
                      <span>{item.date}</span>
                      <span>{item.readTime}</span>
                    </div>

                    <Link
                      to={`/news/${index}`}
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors group"
                    >
                      Read Full Story
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
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden justify-center items-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex space-x-2">
            {[...Array(maxIndex + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-purple-500 w-8"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
          >
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-8">
            Stay connected with all our latest news and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/news-insights"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              View All News
            </Link>
            <button className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCarousel;
