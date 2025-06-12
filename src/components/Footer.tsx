import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useSubscription } from "@/hooks/useSubscription";
import { toast } from "sonner";

// Subscription form component
const FooterSubscriptionForm = () => {
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
      await subscribe(email, "footer");
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
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
      <input
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
        className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accenture-purple focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <button
        type="submit"
        disabled={isLoading || !email.trim()}
        className="px-8 py-3 bg-accenture-purple hover:bg-accenture-purple-dark text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {isLoading ? "Subscribing..." : "Subscribe"}
      </button>
    </form>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Strategy & Consulting", href: "/services/strategy-consulting" },
      { name: "Interactive", href: "/services/interactive" },
      { name: "Technology", href: "/services/technology" },
      { name: "Operations", href: "/services/operations" },
      { name: "Industry X", href: "/services/industry-x" },
    ],
    industries: [
      { name: "Banking", href: "/industries/banking" },
      { name: "Healthcare", href: "/industries/healthcare" },
      { name: "Manufacturing", href: "/industries/manufacturing" },
      { name: "Retail", href: "/industries/retail" },
      { name: "Energy", href: "/industries/energy" },
      { name: "View all", href: "/industries" },
    ],

    about: [
      { name: "What We Believe", href: "/about/what-we-believe" },
      { name: "Leadership", href: "/about/leadership" },
      { name: "Careers", href: "/careers" },
      { name: "Newsroom", href: "/newsroom" },
      { name: "Investor Relations", href: "/investors" },
    ],
    support: [
      { name: "Contact Us", href: "/contact" },
      { name: "Help Center", href: "/help" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/technum-opus",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/technumopus",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://facebook.com/technumopus",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com/technumopus",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986C18.634 23.973 24 18.605 24 11.987 24 5.367 18.634.001 12.017.001zm5.568 16.554c-.397 1.597-1.17 2.516-2.768 2.913-1.597.397-6.639.397-8.235 0-1.598-.397-2.372-1.316-2.769-2.913-.396-1.596-.396-6.639 0-8.235.397-1.597 1.171-2.516 2.769-2.913 1.596-.396 6.638-.396 8.235 0 1.598.397 2.371 1.316 2.768 2.913.397 1.596.397 6.639 0 8.235z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-tech-dark via-tech-dark-secondary to-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo className="w-auto h-10" />
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              Driving innovation and digital transformation across industries.
              We help businesses navigate the complexities of modern technology
              to achieve sustainable growth.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="w-5 h-5 text-accenture-purple flex-shrink-0" />
                <span className="text-sm">
                  123 Innovation Drive, Tech City, TC 12345
                </span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Phone className="w-5 h-5 text-accenture-purple flex-shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Mail className="w-5 h-5 text-accenture-purple flex-shrink-0" />
                <span className="text-sm">hello@technumopus.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-heading-sm font-semibold text-white mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-accenture-purple transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-heading-sm font-semibold text-white mb-6">
              Industries
            </h3>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-accenture-purple transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-heading-sm font-semibold text-white mb-6">
              About
            </h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-accenture-purple transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-heading-sm font-semibold text-white mb-6">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-accenture-purple transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-heading-md font-semibold text-white mb-3">
                Stay ahead of the curve
              </h3>
              <p className="text-white/70 leading-relaxed">
                Get the latest insights on technology trends, industry
                innovations, and business transformation strategies.
              </p>
            </div>
            <FooterSubscriptionForm />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-white/60">
              <span>© {currentYear} Technum Opus. All rights reserved.</span>
              <div className="flex gap-4">
                <Link
                  to="/privacy"
                  className="hover:text-accenture-purple transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="hover:text-accenture-purple transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  to="/cookies"
                  className="hover:text-accenture-purple transition-colors"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-accenture-purple transition-colors p-2 hover:bg-white/5 rounded-lg"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
