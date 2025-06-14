import { Link } from "react-router-dom";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
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
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 max-w-lg"
    >
      <input
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
        className="flex-1 px-6 py-4 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <button
        type="submit"
        disabled={isLoading || !email.trim()}
        className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all duration-300 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
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

  return (
    <footer className="bg-gray-100 text-gray-900">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info - Left side */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="mb-8">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-black">TO</span>
              </div>
            </div>

            {/* Company Description */}
            <p className="text-gray-300 leading-relaxed mb-8 text-base">
              Driving innovation and digital transformation across industries.
              We help businesses navigate the complexities of modern technology
              to achieve sustainable growth.
            </p>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-purple-500 flex-shrink-0" />
                <span className="text-sm">
                  123 Innovation Drive, Tech City, TC 12345
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-purple-500 flex-shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-purple-500 flex-shrink-0" />
                <span className="text-sm">hello@technumopus.com</span>
              </div>
            </div>
          </div>

          {/* Links Grid - Right side */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Services */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">
                  Services
                </h3>
                <ul className="space-y-4">
                  {footerLinks.services.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Industries */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">
                  Industries
                </h3>
                <ul className="space-y-4">
                  {footerLinks.industries.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">About</h3>
                <ul className="space-y-4">
                  {footerLinks.about.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">
                  Support
                </h3>
                <ul className="space-y-4">
                  {footerLinks.support.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Stay ahead of the curve
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Get the latest insights on technology trends, industry
                innovations, and business transformation strategies.
              </p>
            </div>
            <div className="lg:justify-self-end">
              <FooterSubscriptionForm />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {currentYear} Technum Opus. All rights reserved.
            </div>

            <div className="flex gap-6 text-sm">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
