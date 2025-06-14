import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionBackground from "@/components/SectionBackground";

interface SearchResult {
  title: string;
  href: string;
  description: string;
  category: string;
}

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock search data - in a real app, this would come from an API
  const searchData: SearchResult[] = [
    // Services
    {
      title: "SAP Consulting",
      href: "/services/sap-consulting",
      description: "Enterprise SAP implementations and optimization",
      category: "Services",
    },
    {
      title: "Software Development Platform",
      href: "/services/saas-development",
      description: "Scalable cloud-based software solutions",
      category: "Services",
    },
    {
      title: "Cloud Architecture",
      href: "/services/cloud-architecture",
      description: "Robust and secure cloud infrastructure",
      category: "Services",
    },
    {
      title: "Hardware Infrastructure",
      href: "/services/hardware-infrastructure",
      description: "Complete hardware solutions and deployment",
      category: "Services",
    },
    // Company
    {
      title: "About Us",
      href: "/about",
      description: "Our story, mission, and company values",
      category: "Company",
    },
    {
      title: "Leadership",
      href: "/leadership",
      description: "Meet our experienced leadership team",
      category: "Company",
    },
    {
      title: "Careers",
      href: "/careers",
      description: "Join our team and build the future of technology",
      category: "Company",
    },
    {
      title: "News & Insights",
      href: "/news-insights",
      description: "Latest news, articles, and thought leadership",
      category: "Company",
    },
    // Partners
    {
      title: "Cloud Partners",
      href: "/partners/cloud-partners",
      description: "Leading cloud service providers and platforms",
      category: "Partners",
    },
    {
      title: "Technology Partners",
      href: "/partners/technology-partners",
      description: "Strategic technology alliances and integrations",
      category: "Partners",
    },
    {
      title: "Security Partners",
      href: "/partners/security-partners",
      description: "Cybersecurity and compliance specialists",
      category: "Partners",
    },
    // Other pages
    {
      title: "Contact",
      href: "/contact",
      description: "Get in touch with our team",
      category: "Contact",
    },
  ];

  useEffect(() => {
    setIsLoading(true);

    // Simulate search delay
    const searchTimeout = setTimeout(() => {
      if (query) {
        const filtered = searchData.filter(
          (item) =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase()),
        );
        setResults(filtered);
      } else {
        setResults([]);
      }
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(searchTimeout);
  }, [query]);

  const groupedResults = results.reduce(
    (acc, result) => {
      if (!acc[result.category]) {
        acc[result.category] = [];
      }
      acc[result.category].push(result);
      return acc;
    },
    {} as Record<string, SearchResult[]>,
  );

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100/50 min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 min-h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-slate-900/90"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-8">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-purple-300 uppercase tracking-wider">
              Search Results
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-none">
            Find What You're
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Looking For
            </span>
          </h1>

          {query && (
            <p className="text-xl md:text-2xl font-light text-white/80 mb-8 leading-relaxed">
              Results for: <span className="font-semibold">"{query}"</span>
            </p>
          )}
        </div>
      </section>

      {/* Results Section */}
      <SectionBackground variant="light">
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            {isLoading ? (
              <div className="flex items-center justify-center py-16">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
              </div>
            ) : !query ? (
              <div className="text-center py-16">
                <svg
                  className="w-16 h-16 text-gray-400 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Start Your Search
                </h2>
                <p className="text-gray-600">
                  Enter a search term to find relevant content across our
                  services, solutions, and insights.
                </p>
              </div>
            ) : results.length === 0 ? (
              <div className="text-center py-16">
                <svg
                  className="w-16 h-16 text-gray-400 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m-3-16v6.5"
                  />
                </svg>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  No Results Found
                </h2>
                <p className="text-gray-600 mb-6">
                  We couldn't find anything matching "{query}". Try a different
                  search term or explore our main sections.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/services"
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Browse Services
                  </Link>
                  <Link
                    to="/about"
                    className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
                  >
                    Learn About Us
                  </Link>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-8">
                  <p className="text-gray-600">
                    Found {results.length} result
                    {results.length !== 1 ? "s" : ""}
                  </p>
                </div>

                <div className="space-y-8">
                  {Object.entries(groupedResults).map(([category, items]) => (
                    <div key={category}>
                      <h3 className="text-lg font-bold text-gray-900 mb-4 border-l-4 border-purple-600 pl-4">
                        {category}
                      </h3>
                      <div className="space-y-4">
                        {items.map((result, index) => (
                          <Link
                            key={index}
                            to={result.href}
                            className="block group bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-lg hover:border-purple-600/30 transition-all duration-300"
                          >
                            <h4 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                              {result.title}
                            </h4>
                            <p className="text-gray-600 leading-relaxed">
                              {result.description}
                            </p>
                            <div className="flex items-center gap-2 mt-4 text-purple-600 group-hover:text-purple-700 transition-colors">
                              <span className="text-sm font-medium">
                                Learn more
                              </span>
                              <svg
                                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
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
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </SectionBackground>

      <Footer />
    </div>
  );
};

export default Search;
