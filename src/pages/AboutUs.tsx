import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const values = [
    {
      title: "Client Success",
      description:
        "We measure our success by the value we create for our clients",
      icon: "🎯",
    },
    {
      title: "Innovation",
      description: "We continuously explore and adopt emerging technologies",
      icon: "💡",
    },
    {
      title: "Excellence",
      description: "We deliver exceptional quality in everything we do",
      icon: "⭐",
    },
    {
      title: "Integrity",
      description:
        "We operate with honesty, transparency, and ethical standards",
      icon: "🛡️",
    },
  ];

  const expertise = [
    {
      area: "Enterprise Transformation",
      description:
        "15+ years of experience in large-scale enterprise initiatives",
      percentage: "95%",
    },
    {
      area: "Cloud & Infrastructure",
      description: "Leading cloud adoption and infrastructure modernization",
      percentage: "90%",
    },
    {
      area: "Software Development",
      description: "Building scalable, secure, and maintainable applications",
      percentage: "98%",
    },
    {
      area: "Consulting & Strategy",
      description: "Strategic guidance for digital transformation journeys",
      percentage: "92%",
    },
  ];

  const milestones = [
    {
      year: "2008",
      title: "Company Founded",
      description: "Started with a vision to transform enterprise technology",
    },
    {
      year: "2012",
      title: "SAP Partnership",
      description: "Became certified SAP consulting partner",
    },
    {
      year: "2016",
      title: "Cloud Expansion",
      description:
        "Expanded services to include cloud architecture and migration",
    },
    {
      year: "2020",
      title: "Digital Focus",
      description: "Pivoted to comprehensive digital transformation services",
    },
    {
      year: "2024",
      title: "Industry Leadership",
      description: "Recognized as a leading technology consulting firm",
    },
  ];

  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Innovation
                <br />
                <span className="text-pink-400">Meets Purpose</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                We are a technology consulting firm dedicated to helping
                enterprises navigate their digital transformation journey with
                confidence and success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/leadership"
                  className="px-8 py-4 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition-colors"
                >
                  Meet Our Team
                </Link>
                <Link
                  to="/careers"
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-colors"
                >
                  Join Our Mission
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">
                      15+
                    </div>
                    <div className="text-pink-100">Years of Excellence</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">
                        500+
                      </div>
                      <div className="text-sm text-pink-100">
                        Projects Delivered
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">
                        99%
                      </div>
                      <div className="text-sm text-pink-100">
                        Client Satisfaction
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
                Our Mission
              </h2>
              <div className="space-y-6">
                <p className="text-xl text-gray-600 leading-relaxed">
                  To empower organizations with innovative technology solutions
                  that drive sustainable growth, operational excellence, and
                  competitive advantage in the digital economy.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We believe that technology should be an enabler of human
                  potential and business success. Our approach combines deep
                  technical expertise with strategic thinking to deliver
                  solutions that create lasting value.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Our Impact
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-3xl font-bold text-pink-600 mb-2">
                      $2.5M+
                    </div>
                    <div className="text-sm text-gray-600">
                      Average Cost Savings
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      40%
                    </div>
                    <div className="text-sm text-gray-600">
                      Faster Deployment
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      60%
                    </div>
                    <div className="text-sm text-gray-600">
                      Reduced Downtime
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      24/7
                    </div>
                    <div className="text-sm text-gray-600">
                      Support Coverage
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are
              as an organization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-5xl mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Deep technical knowledge and industry experience across key
              technology domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{item.area}</h3>
                  <span className="text-2xl font-bold text-pink-400">
                    {item.percentage}
                  </span>
                </div>
                <p className="text-gray-300 mb-6">{item.description}</p>
                <div className="bg-white/20 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-pink-500 to-purple-500 h-full rounded-full transition-all duration-1000"
                    style={{ width: item.percentage }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to industry leadership - the milestones
              that shaped our company
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-600 to-purple-600 rounded-full"></div>

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className="flex-1">
                    <div
                      className={`bg-gray-50 rounded-2xl p-8 ${
                        index % 2 === 0 ? "text-right" : "text-left"
                      }`}
                    >
                      <div className="text-3xl font-bold text-pink-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-pink-100 mb-8 leading-relaxed">
            Let's work together to transform your business and achieve your
            digital transformation goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-pink-600 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
