import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import SectionBackground from "@/components/SectionBackground";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
      description: "Call us during business hours",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["hello@technumopus.com", "support@technumopus.com"],
      description: "Send us an email anytime",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      details: ["123 Innovation Drive", "San Francisco, CA 94105"],
      description: "Visit our headquarters",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100/50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-slate-900/90"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-8">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-purple-300 uppercase tracking-wider">
              Get In Touch
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-none">
            Let's Build
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Something
            </span>
            <br />
            Amazing Together
          </h1>

          <p className="text-xl md:text-2xl font-light text-white/80 mb-8 leading-relaxed max-w-4xl mx-auto">
            Ready to transform your business? Let's discuss your project and
            explore how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-accenture-black rounded-2xl shadow-xl p-8">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accenture-purple to-accenture-purple-light rounded-full px-4 py-2 mb-4">
                    <span className="text-sm font-bold text-white uppercase tracking-wider">
                      Send Message
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Tell Us About Your Project
                  </h2>
                  <p className="text-white/80 leading-relaxed">
                    Fill out the form below and we'll get back to you within 24
                    hours to discuss your requirements.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-accenture-purple focus:border-accenture-purple transition-colors text-white placeholder:text-white/60"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-accenture-purple focus:border-accenture-purple transition-colors text-white placeholder:text-white/60"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-accenture-purple focus:border-accenture-purple transition-colors text-white placeholder:text-white/60"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-accenture-purple focus:border-accenture-purple transition-colors resize-none text-white placeholder:text-white/60"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-accenture-purple to-accenture-purple-light text-white py-4 px-6 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-accenture-purple/25 transition-all duration-300 hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accenture-purple/20 to-accenture-purple-light/20 rounded-full px-4 py-2 mb-4">
                    <span className="text-sm font-bold text-accenture-purple uppercase tracking-wider">
                      Contact Info
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Get In Touch
                  </h2>
                  <p className="text-white/80 leading-relaxed mb-8">
                    Have questions about our services? Need a custom solution?
                    Our team is here to help you succeed.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="bg-accenture-black/50 rounded-xl shadow-lg p-6 border border-white/10 hover:shadow-xl hover:bg-accenture-black/70 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-accenture-purple to-accenture-purple-light rounded-lg flex items-center justify-center text-white">
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-1">
                            {info.title}
                          </h4>
                          <p className="text-sm text-white/60 mb-2">
                            {info.description}
                          </p>
                          <div className="space-y-1">
                            {info.details.map((detail, idx) => (
                              <p
                                key={idx}
                                className="text-purple-600 font-medium"
                              >
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Business Hours */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* FAQ Section */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-bold text-purple-700 uppercase tracking-wider">
                  FAQ
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-700">
                Quick answers to questions you might have about our services
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How long does a typical project take?",
                  answer:
                    "Project timelines vary depending on scope and complexity. Simple implementations can take 2-4 weeks, while complex enterprise solutions may require 3-6 months. We'll provide a detailed timeline during our initial consultation.",
                },
                {
                  question:
                    "Do you provide ongoing support after project completion?",
                  answer:
                    "Yes, we offer comprehensive support packages including 24/7 monitoring, regular maintenance, updates, and technical support to ensure your systems continue to perform optimally.",
                },
                {
                  question: "What industries do you specialize in?",
                  answer:
                    "We work across various industries including healthcare, finance, manufacturing, retail, and technology. Our solutions are tailored to meet specific industry requirements and compliance standards.",
                },
                {
                  question: "Can you help with cloud migration?",
                  answer:
                    "Absolutely! We're certified partners with major cloud providers and specialize in seamless cloud migrations, ensuring minimal downtime and maximum performance improvement.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Don't wait to transform your business. Contact us today for a free
            consultation and discover how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative overflow-hidden px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
              <span className="relative z-10">Schedule Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <a
              href="tel:+15551234567"
              className="group inline-flex items-center gap-3 px-10 py-4 border-2 border-white/30 text-white rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
