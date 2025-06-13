import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Section } from "@/components/ContentSections";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    category: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email body with all form data
    const emailBody = `
Hi Technum Opus Team,

I hope this message finds you well. I am reaching out regarding ${formData.category || 'a general inquiry'}.

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Company: ${formData.company || 'Not specified'}
- Phone: ${formData.phone || 'Not provided'}
- Inquiry Type: ${formData.category}

Message:
${formData.message}

Thank you for your time and consideration. I look forward to hearing from you soon.

Best regards,
${formData.name}
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:hello@technumopus.com?subject=${encodeURIComponent(`${formData.category || 'General Inquiry'} - ${formData.name}`)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
  };

  const categories = [
    { value: "", label: "Select an inquiry type" },
    { value: "SAP Consulting", label: "SAP Consulting & Implementation" },
    { value: "SaaS Development", label: "SaaS Development & Platforms" },
    { value: "Cloud Architecture", label: "Cloud Architecture & Migration" },
    { value: "Hardware Infrastructure", label: "Hardware Infrastructure" },
    { value: "Digital Transformation", label: "Digital Transformation" },
    { value: "Partnership", label: "Partnership Opportunities" },
    { value: "Career Inquiry", label: "Career & Employment" },
    { value: "Support", label: "Technical Support" },
    { value: "General", label: "General Inquiry" },
  ];

  const contactInfo = [
    {
      icon: (
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
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
      description: "Call us during business hours (9 AM - 6 PM PST)",
    },
    {
      icon: (
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
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email",
      details: ["hello@technumopus.com", "support@technumopus.com"],
      description: "Send us an email anytime - we respond within 24 hours",
    },
    {
      icon: (
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
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Office",
      details: ["123 Innovation Drive", "San Francisco, CA 94105"],
      description: "Visit our headquarters or schedule a meeting",
    },
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on scope and complexity. Simple implementations can take 2-4 weeks, while complex enterprise solutions may require 3-6 months. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
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
    {
      question: "Do you offer free consultations?",
      answer:
        "Yes, we provide free initial consultations to understand your requirements and discuss how we can help. This includes a preliminary assessment and recommendation overview.",
    },
    {
      question: "What are your payment terms?",
      answer:
        "We offer flexible payment terms including milestone-based payments for larger projects. We typically require 30% upfront, with the remainder distributed across project milestones.",
    },
  ];

  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <Section className="bg-accenture-black text-white pt-24 pb-16">
        <div className="text-center animate-fade-in">
          <div className="text-body-sm font-bold text-accenture-purple uppercase tracking-wider mb-6">
            CONTACT US
          </div>
          <h1 className="text-display font-semibold text-white mb-8">
            Let's Build Something Amazing Together
          </h1>
          <p className="text-body-xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
            Ready to transform your business? Let's discuss your project and
            explore how we can help you achieve your goals with cutting-edge
            technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="#contact-form"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-accenture-purple text-white rounded-lg font-semibold hover:bg-accenture-purple-dark transition-all duration-300 hover:scale-105 text-xl"
            >
              Send Message
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
            <a
              href="tel:+15551234567"
              className="group inline-flex items-center gap-3 px-10 py-5 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-xl"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Now
            </Link>
          </div>
        </div>
      </Section>

      {/* Contact Form Section */}
      <Section className="bg-accenture-gray-50" id="contact-form">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-body-sm font-bold text-accenture-purple uppercase tracking-wider mb-4">
            GET IN TOUCH
          </div>
          <h2 className="text-heading-xl font-semibold text-gray-900 mb-6">
            Tell Us About Your Project
          </h2>
          <p className="text-body-xl text-gray-600 max-w-3xl mx-auto">
            Fill out the form below and we'll get back to you within 24 hours to
            discuss your requirements and how we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-accenture-black rounded-2xl shadow-accenture-xl p-8 animate-fade-in">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-accenture-purple rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-bold text-white uppercase tracking-wider">
                  Send Message
                </span>
              </div>
              <h3 className="text-heading-lg font-semibold text-white mb-4">
                Start Your Project Today
              </h3>
              <p className="text-white/80 leading-relaxed">
                Provide some details about your project and we'll prepare a
                customized proposal for your needs.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-accenture-purple focus:border-accenture-purple transition-colors text-white placeholder:text-white/60"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Email Address *
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-accenture-purple focus:border-accenture-purple transition-colors text-white placeholder:text-white/60"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Inquiry Type *
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-accenture-purple focus:border-accenture-purple transition-colors text-white"
                >
                  {categories.map((category) => (
                    <option
                      key={category.value}
                      value={category.value}
                      className="bg-accenture-black text-white"
                    >
                      {category.label}
                    </option>
                  ))}
                </select>
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
                  placeholder="Tell us about your project requirements, timeline, budget, and any specific challenges you're facing..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accenture-purple text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-accenture-purple-dark hover:shadow-purple transition-all duration-300 hover:scale-105"
              >
                Send Message
              </button>

              <p className="text-white/60 text-sm text-center">
                By submitting this form, you agree to our privacy policy and
                terms of service.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white rounded-xl shadow-accenture p-6 border border-accenture-purple/20">
              <div className="inline-flex items-center gap-2 bg-accenture-purple/10 text-accenture-purple rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-bold uppercase tracking-wider">
                  Contact Info
                </span>
              </div>
              <h3 className="text-heading-lg font-semibold text-gray-900 mb-4">
                Get In Touch
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Have questions about our services? Need a custom solution? Our
                team is here to help you succeed with personalized support.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-accenture p-6 border border-accenture-purple/20 hover:shadow-accenture-lg hover:border-accenture-purple/40 transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accenture-purple rounded-xl flex items-center justify-center text-white">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-heading-md font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        {info.description}
                      </p>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p
                            key={idx}
                            className="text-accenture-purple font-medium"
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

            {/* Quick Links */}
            <div className="bg-accenture-purple rounded-xl p-6 text-white animate-fade-in">
              <h4 className="text-heading-md font-semibold mb-4">
                Looking for something specific?
              </h4>
              <div className="space-y-3">
                <Link
                  to="/careers/open-positions"
                  className="flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <span>Join Our Team</span>
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
                <Link
                  to="/services"
                  className="flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <span>View Our Services</span>
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
                <Link
                  to="/partners"
                  className="flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <span>Partner With Us</span>
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
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-white">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-body-sm font-bold text-accenture-purple uppercase tracking-wider mb-4">
            FAQ
          </div>
          <h2 className="text-heading-xl font-semibold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-body-xl text-gray-600 max-w-3xl mx-auto">
            Quick answers to questions you might have about our services and
            working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-accenture-gray-50 border border-accenture-purple/20 rounded-xl p-6 hover:shadow-accenture hover:border-accenture-purple/40 transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-heading-md font-semibold text-gray-900 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-accenture-purple text-white">
        <div className="text-center py-12 animate-fade-in">
          <h2 className="text-heading-xl font-semibold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-body-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Don't wait to transform your business. Contact us today for a free
            consultation and discover how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="#contact-form"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-accenture-purple rounded-lg font-semibold hover:bg-accenture-gray-50 transition-all duration-300 hover:scale-105 text-xl"
            >
              Schedule Consultation
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </Link>
            <a
              href="tel:+15551234567"
              className="group inline-flex items-center gap-3 px-10 py-5 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-xl"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Now
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Contact;