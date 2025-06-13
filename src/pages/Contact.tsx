import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Section } from "@/components/ContentSections";
import { submitContactForm, submitConsultationForm } from "@/lib/googleSheets";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    category: "",
    message: "",
  });

  const [consultationForm, setConsultationForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  // Loading and feedback states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConsultationSubmitting, setIsConsultationSubmitting] =
    useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [consultationMessage, setConsultationMessage] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [consultationError, setConsultationError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleConsultationChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setConsultationForm({
      ...consultationForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous messages
    setSubmitMessage("");
    setSubmitError("");
    setIsSubmitting(true);

    try {
      const response = await submitContactForm({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        category: formData.category,
        message: formData.message,
      });

      if (response.success) {
        setSubmitMessage(response.message);
        // Clear form on success
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          category: "",
          message: "",
        });
      } else {
        setSubmitError(response.message);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError(
        "Something went wrong. Please try again or contact us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleConsultationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous messages
    setConsultationMessage("");
    setConsultationError("");
    setIsConsultationSubmitting(true);

    try {
      const response = await submitConsultationForm({
        name: consultationForm.name,
        email: consultationForm.email,
        company: consultationForm.company,
        phone: consultationForm.phone,
        projectType: consultationForm.projectType,
        budget: consultationForm.budget,
        timeline: consultationForm.timeline,
        preferredDate: consultationForm.preferredDate,
        preferredTime: consultationForm.preferredTime,
        message: consultationForm.message,
      });

      if (response.success) {
        setConsultationMessage(response.message);
        // Clear form on success
        setConsultationForm({
          name: "",
          email: "",
          company: "",
          phone: "",
          projectType: "",
          budget: "",
          timeline: "",
          preferredDate: "",
          preferredTime: "",
          message: "",
        });
        // Close modal after a brief delay to show success message
        setTimeout(() => {
          setIsConsultationModalOpen(false);
          setConsultationMessage("");
        }, 3000);
      } else {
        setConsultationError(response.message);
      }
    } catch (error) {
      console.error("Consultation form submission error:", error);
      setConsultationError(
        "Something went wrong. Please try again or contact us directly.",
      );
    } finally {
      setIsConsultationSubmitting(false);
    }
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

  const projectTypes = [
    { value: "", label: "Select project type" },
    { value: "SAP Implementation", label: "SAP Implementation & Consulting" },
    {
      value: "Custom Software Development",
      label: "Custom Software Development",
    },
    { value: "Cloud Migration", label: "Cloud Migration & Architecture" },
    { value: "Digital Transformation", label: "Digital Transformation" },
    { value: "System Integration", label: "System Integration" },
    { value: "IT Infrastructure", label: "IT Infrastructure Setup" },
    { value: "Consulting Only", label: "Consulting & Strategy Only" },
    { value: "Other", label: "Other (Please specify in message)" },
  ];

  const budgetRanges = [
    { value: "", label: "Select budget range" },
    { value: "Under $10K", label: "Under $10,000" },
    { value: "$10K - $25K", label: "$10,000 - $25,000" },
    { value: "$25K - $50K", label: "$25,000 - $50,000" },
    { value: "$50K - $100K", label: "$50,000 - $100,000" },
    { value: "$100K - $250K", label: "$100,000 - $250,000" },
    { value: "$250K+", label: "$250,000+" },
    { value: "TBD", label: "To be discussed" },
  ];

  const timelines = [
    { value: "", label: "Select timeline" },
    { value: "ASAP", label: "As soon as possible" },
    { value: "1-3 months", label: "1-3 months" },
    { value: "3-6 months", label: "3-6 months" },
    { value: "6-12 months", label: "6-12 months" },
    { value: "12+ months", label: "12+ months" },
    { value: "Flexible", label: "Flexible timeline" },
  ];

  const timeSlots = [
    { value: "", label: "Select preferred time" },
    { value: "9:00 AM - 10:00 AM", label: "9:00 AM - 10:00 AM" },
    { value: "10:00 AM - 11:00 AM", label: "10:00 AM - 11:00 AM" },
    { value: "11:00 AM - 12:00 PM", label: "11:00 AM - 12:00 PM" },
    { value: "2:00 PM - 3:00 PM", label: "2:00 PM - 3:00 PM" },
    { value: "3:00 PM - 4:00 PM", label: "3:00 PM - 4:00 PM" },
    { value: "4:00 PM - 5:00 PM", label: "4:00 PM - 5:00 PM" },
    { value: "5:00 PM - 6:00 PM", label: "5:00 PM - 6:00 PM" },
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
      details: ["Available on request"],
      description: "Call us during business hours (9 AM - 6 PM IST)",
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

      {/* Consultation Modal */}
      {isConsultationModalOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-accenture-black rounded-2xl shadow-accenture-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 bg-accenture-purple rounded-full px-4 py-2 mb-4">
                    <span className="text-sm font-bold text-white uppercase tracking-wider">
                      Schedule Consultation
                    </span>
                  </div>
                  <h3 className="text-heading-lg font-semibold text-white">
                    Book Your Free Consultation
                  </h3>
                  <p className="text-white/80 mt-2">
                    Tell us about your project and we'll schedule a personalized
                    consultation.
                  </p>
                </div>
                <button
                  onClick={() => setIsConsultationModalOpen(false)}
                  className="text-white/60 hover:text-white transition-colors p-2"
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Success/Error Messages */}
              {consultationMessage && (
                <div className="bg-green-500/20 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg mb-6">
                  <div className="flex items-center gap-2">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {consultationMessage}
                  </div>
                </div>
              )}

              {consultationError && (
                <div className="bg-red-500/20 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg mb-6">
                  <div className="flex items-center gap-2">
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
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {consultationError}
                  </div>
                </div>
              )}

              <form onSubmit={handleConsultationSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={consultationForm.name}
                      onChange={handleConsultationChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-accenture-purple focus:border-accenture-purple transition-colors text-white placeholder:text-white/60"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={consultationForm.email}
                      onChange={handleConsultationChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-accenture-purple focus:border-accenture-purple transition-colors text-white placeholder:text-white/60"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={consultationForm.company}
                      onChange={handleConsultationChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-accenture-purple focus:border-accenture-purple transition-colors text-white placeholder:text-white/60"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={consultationForm.phone}
                      onChange={handleConsultationChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-accenture-purple focus:border-accenture-purple transition-colors text-white placeholder:text-white/60"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    required
                    value={consultationForm.projectType}
                    onChange={handleConsultationChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-accenture-purple focus:border-accenture-purple transition-colors text-white"
                  >
                    {projectTypes.map((type) => (
                      <option
                        key={type.value}
                        value={type.value}
                        className="bg-accenture-black text-white"
                      >
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={consultationForm.budget}
                      onChange={handleConsultationChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-accenture-purple focus:border-accenture-purple transition-colors text-white"
                    >
                      {budgetRanges.map((range) => (
                        <option
                          key={range.value}
                          value={range.value}
                          className="bg-accenture-black text-white"
                        >
                          {range.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={consultationForm.timeline}
                      onChange={handleConsultationChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-accenture-purple focus:border-accenture-purple transition-colors text-white"
                    >
                      {timelines.map((timeline) => (
                        <option
                          key={timeline.value}
                          value={timeline.value}
                          className="bg-accenture-black text-white"
                        >
                          {timeline.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={consultationForm.preferredDate}
                      onChange={handleConsultationChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-accenture-purple focus:border-accenture-purple transition-colors text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Preferred Time
                    </label>
                    <select
                      name="preferredTime"
                      value={consultationForm.preferredTime}
                      onChange={handleConsultationChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-accenture-purple focus:border-accenture-purple transition-colors text-white"
                    >
                      {timeSlots.map((slot) => (
                        <option
                          key={slot.value}
                          value={slot.value}
                          className="bg-accenture-black text-white"
                        >
                          {slot.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Additional Information
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={consultationForm.message}
                    onChange={handleConsultationChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-accenture-purple focus:border-accenture-purple transition-colors resize-none text-white placeholder:text-white/60"
                    placeholder="Tell us more about your project goals and specific requirements..."
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={isConsultationSubmitting}
                    className="flex-1 bg-accenture-purple text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-accenture-purple-dark transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isConsultationSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          className="w-5 h-5 animate-spin"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                        Scheduling...
                      </div>
                    ) : (
                      "Schedule Consultation"
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsConsultationModalOpen(false)}
                    className="px-6 py-4 border-2 border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

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
            <a
              href="#contact-form"
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
            </a>
            <a
              href="mailto:hello@technumopus.com"
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
            </a>
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

            {/* Success/Error Messages */}
            {submitMessage && (
              <div className="bg-green-500/20 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg mb-6">
                <div className="flex items-center gap-2">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {submitMessage}
                </div>
              </div>
            )}

            {submitError && (
              <div className="bg-red-500/20 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg mb-6">
                <div className="flex items-center gap-2">
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
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {submitError}
                </div>
              </div>
            )}

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
                    placeholder="+91 9910040134"
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
                disabled={isSubmitting}
                className="w-full bg-accenture-purple text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-accenture-purple-dark hover:shadow-purple transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <svg
                      className="w-5 h-5 animate-spin"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    Sending...
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>

              <p className="text-white/60 text-sm text-center">
                By submitting this form, you agree to our privacy policy and
                terms of service.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div className="bg-accenture-black rounded-xl shadow-accenture p-6 border border-accenture-purple/20">
              <div className="inline-flex items-center gap-2 bg-accenture-purple rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-bold text-white uppercase tracking-wider">
                  Contact Info
                </span>
              </div>
              <h3 className="text-heading-lg font-semibold text-white mb-4">
                Get In Touch
              </h3>
              <p className="text-white/80 leading-relaxed mb-8">
                Have questions about our services? Need a custom solution? Our
                team is here to help you succeed with personalized support.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-accenture-black rounded-xl shadow-accenture p-6 border border-accenture-purple/20 hover:shadow-accenture-lg hover:border-accenture-purple/40 transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accenture-purple rounded-xl flex items-center justify-center text-white">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-heading-md font-semibold text-white mb-1">
                        {info.title}
                      </h4>
                      <p className="text-sm text-white/60 mb-3">
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
      <Section className="bg-accenture-black">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-body-sm font-bold text-accenture-purple uppercase tracking-wider mb-4">
            FAQ
          </div>
          <h2 className="text-heading-xl font-semibold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-body-xl text-white/80 max-w-3xl mx-auto">
            Quick answers to questions you might have about our services and
            working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/10 border border-accenture-purple/20 rounded-xl p-6 hover:shadow-accenture hover:border-accenture-purple/40 transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-heading-md font-semibold text-white mb-3">
                {faq.question}
              </h3>
              <p className="text-white/80 leading-relaxed">{faq.answer}</p>
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
            <button
              onClick={() => setIsConsultationModalOpen(true)}
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
            </button>
            <a
              href="tel:+919910040134"
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
            </a>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Contact;
