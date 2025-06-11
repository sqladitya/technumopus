import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ClientStoriesCarousel = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const clientStories = [
    {
      title: "Digital Transformation Success",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge:
        "Legacy systems hindering operational efficiency and customer experience",
      solution: "Implemented cloud-native ERP system with AI-powered analytics",
      results: [
        "40% reduction in operational costs",
        "60% faster time-to-market",
        "99.9% system uptime achieved",
      ],
      image: "/placeholder.svg",
      logo: "/placeholder.svg",
      testimonial:
        "Technum Opus transformed our entire operation. The results exceeded our expectations.",
      person: "Sarah Johnson",
      role: "CTO",
      color: "from-blue-600 to-purple-600",
    },
    {
      title: "Cloud Migration Excellence",
      company: "Financial Services Inc",
      industry: "Financial Services",
      challenge:
        "Need for scalable, secure cloud infrastructure for regulatory compliance",
      solution:
        "Multi-cloud strategy with advanced security and compliance framework",
      results: [
        "50% cost reduction in infrastructure",
        "99.99% security compliance",
        "24/7 global availability",
      ],
      image: "/placeholder.svg",
      logo: "/placeholder.svg",
      testimonial:
        "The cloud migration was seamless and our security posture is stronger than ever.",
      person: "Michael Chen",
      role: "Head of Infrastructure",
      color: "from-green-600 to-blue-600",
    },
    {
      title: "SAP S/4HANA Implementation",
      company: "Retail Giant Ltd",
      industry: "Retail",
      challenge: "Outdated SAP system limiting business growth and agility",
      solution:
        "Complete S/4HANA transformation with real-time analytics and mobile capabilities",
      results: [
        "30% improvement in inventory turnover",
        "Real-time business insights",
        "Enhanced customer experience",
      ],
      image: "/placeholder.svg",
      logo: "/placeholder.svg",
      testimonial:
        "Our S/4HANA implementation has revolutionized how we operate and serve customers.",
      person: "Emma Rodriguez",
      role: "VP of Operations",
      color: "from-purple-600 to-pink-600",
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % clientStories.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [isPlaying, clientStories.length]);

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Client
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              SUCCESS STORIES
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover how we've helped organizations transform their business and
            achieve remarkable results.
          </p>
        </div>

        {/* Story Carousel */}
        <div className="relative overflow-hidden rounded-3xl">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentStory * 100}%)` }}
          >
            {clientStories.map((story, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div
                  className={`relative bg-gradient-to-br ${story.color} rounded-3xl overflow-hidden min-h-[600px]`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 2px, transparent 2px)`,
                        backgroundSize: "50px 50px",
                      }}
                    ></div>
                  </div>

                  <div className="relative z-10 grid lg:grid-cols-2 gap-8 p-8 lg:p-16 h-full">
                    {/* Content */}
                    <div className="space-y-8 flex flex-col justify-center">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                            <span className="text-2xl">🏢</span>
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-white/80 uppercase tracking-wider">
                              {story.industry}
                            </div>
                            <div className="text-white font-bold">
                              {story.company}
                            </div>
                          </div>
                        </div>

                        <h3 className="text-3xl lg:text-4xl font-bold text-white">
                          {story.title}
                        </h3>

                        <div className="space-y-4">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-2">
                              Challenge
                            </h4>
                            <p className="text-white/90">{story.challenge}</p>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-white mb-2">
                              Solution
                            </h4>
                            <p className="text-white/90">{story.solution}</p>
                          </div>
                        </div>
                      </div>

                      {/* Results */}
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">
                          Key Results
                        </h4>
                        <div className="grid gap-3">
                          {story.results.map((result, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                                <svg
                                  className="w-3 h-3 text-black"
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
                              <span className="text-white font-medium">
                                {result}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                        <blockquote className="text-white italic text-lg mb-4">
                          "{story.testimonial}"
                        </blockquote>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">
                              {story.person.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="text-white font-semibold">
                              {story.person}
                            </div>
                            <div className="text-white/80 text-sm">
                              {story.role}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Visual */}
                    <div className="hidden lg:flex items-center justify-center">
                      <div className="relative">
                        <div className="w-96 h-96 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                          <div className="w-full h-full bg-white/20 rounded-xl flex items-center justify-center">
                            <div className="text-center space-y-4">
                              <div className="text-6xl text-white">📊</div>
                              <div className="text-white font-bold text-xl">
                                Success Metrics
                              </div>
                              <div className="grid grid-cols-2 gap-4 text-center">
                                <div className="bg-white/20 rounded-lg p-3">
                                  <div className="text-2xl font-bold text-white">
                                    40%
                                  </div>
                                  <div className="text-xs text-white/80">
                                    Cost Reduction
                                  </div>
                                </div>
                                <div className="bg-white/20 rounded-lg p-3">
                                  <div className="text-2xl font-bold text-white">
                                    60%
                                  </div>
                                  <div className="text-xs text-white/80">
                                    Faster Delivery
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center mt-8 space-x-6">
          {/* Play/Pause */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
          >
            {isPlaying ? (
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

          {/* Navigation Dots */}
          <div className="flex space-x-2">
            {clientStories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStory(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentStory
                    ? "bg-purple-500 w-8"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex space-x-2">
            <button
              onClick={() =>
                setCurrentStory(
                  (prev) =>
                    (prev - 1 + clientStories.length) % clientStories.length,
                )
              }
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
              onClick={() =>
                setCurrentStory((prev) => (prev + 1) % clientStories.length)
              }
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

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
          >
            View All Case Studies
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
  );
};

export default ClientStoriesCarousel;
