import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  category: string;
  message: string;
}

interface ConsultationFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  project_type: string;
  budget: string;
  timeline: string;
  preferred_date: string;
  preferred_time: string;
  message: string;
}

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

export const EnhancedContactForm = ({
  type = "contact",
}: {
  type?: "contact" | "consultation";
}) => {
  const [formData, setFormData] = useState<
    ContactFormData | ConsultationFormData
  >(
    type === "contact"
      ? {
          name: "",
          email: "",
          company: "",
          phone: "",
          category: "",
          message: "",
        }
      : {
          name: "",
          email: "",
          company: "",
          phone: "",
          project_type: "",
          budget: "",
          timeline: "",
          preferred_date: "",
          preferred_time: "",
          message: "",
        },
  );

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const categories = [
    "SaaS Development",
    "Cloud Architecture",
    "Digital Transformation",
    "SAP Consulting",
    "Hardware Infrastructure",
    "Partnership Inquiry",
    "General Inquiry",
    "Other",
  ];

  const projectTypes = [
    "Custom Software Development",
    "Cloud Migration",
    "Digital Transformation",
    "SAP Implementation",
    "Infrastructure Setup",
    "Mobile App Development",
    "Web Application",
    "API Development",
    "System Integration",
    "Other",
  ];

  const budgetRanges = [
    "Under $25K",
    "$25K - $50K",
    "$50K - $100K",
    "$100K - $250K",
    "$250K - $500K",
    "$500K+",
    "Not sure yet",
  ];

  const timelines = [
    "ASAP",
    "1-3 months",
    "3-6 months",
    "6-12 months",
    "12+ months",
    "Flexible",
  ];

  const timeSlots = [
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 1:00 PM",
    "1:00 PM - 2:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM",
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const submitForm = async (endpoint: string, data: any) => {
    const response = await fetch(`${API_BASE_URL}/api/contact/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to submit form");
    }

    return response.json();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (type === "contact") {
        await submitForm("contact", formData);
      } else {
        await submitForm("consultation", formData);
      }

      setSuccess(true);

      // Reset form
      if (type === "contact") {
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          category: "",
          message: "",
        });
      } else {
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          project_type: "",
          budget: "",
          timeline: "",
          preferred_date: "",
          preferred_time: "",
          message: "",
        });
      }

      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-green-600 mb-4">
          <svg
            className="w-16 h-16 mx-auto"
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
        </div>
        <h3 className="text-heading-md font-semibold text-green-800 mb-2">
          {type === "contact"
            ? "Message Sent!"
            : "Consultation Request Submitted!"}
        </h3>
        <p className="text-green-700">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <Input
            type="text"
            required
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            placeholder="Your full name"
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <Input
            type="email"
            required
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="your.email@company.com"
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company
          </label>
          <Input
            type="text"
            value={formData.company}
            onChange={(e) => handleInputChange("company", e.target.value)}
            placeholder="Your company name"
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <Input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            placeholder="+1 (555) 123-4567"
            className="w-full"
          />
        </div>
      </div>

      {type === "contact" ? (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Service Category
          </label>
          <Select
            value={(formData as ContactFormData).category}
            onValueChange={(value) => handleInputChange("category", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a service category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Type
              </label>
              <Select
                value={(formData as ConsultationFormData).project_type}
                onValueChange={(value) =>
                  handleInputChange("project_type", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  {projectTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget Range
              </label>
              <Select
                value={(formData as ConsultationFormData).budget}
                onValueChange={(value) => handleInputChange("budget", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  {budgetRanges.map((budget) => (
                    <SelectItem key={budget} value={budget}>
                      {budget}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Timeline
              </label>
              <Select
                value={(formData as ConsultationFormData).timeline}
                onValueChange={(value) => handleInputChange("timeline", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  {timelines.map((timeline) => (
                    <SelectItem key={timeline} value={timeline}>
                      {timeline}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Meeting Date
              </label>
              <Input
                type="date"
                value={(formData as ConsultationFormData).preferred_date}
                onChange={(e) =>
                  handleInputChange("preferred_date", e.target.value)
                }
                className="w-full"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Time Slot
            </label>
            <Select
              value={(formData as ConsultationFormData).preferred_time}
              onValueChange={(value) =>
                handleInputChange("preferred_time", value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select preferred time" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((slot) => (
                  <SelectItem key={slot} value={slot}>
                    {slot}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <Textarea
          required
          rows={6}
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          placeholder={
            type === "contact"
              ? "Tell us about your project or how we can help..."
              : "Describe your project requirements, current challenges, and what you hope to achieve..."
          }
          className="w-full"
        />
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-accenture-purple hover:bg-accenture-purple-dark text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
      >
        {loading ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            {type === "contact"
              ? "Sending Message..."
              : "Submitting Request..."}
          </>
        ) : type === "contact" ? (
          "Send Message"
        ) : (
          "Request Consultation"
        )}
      </Button>

      <p className="text-sm text-gray-600 text-center">
        We respect your privacy and will never share your information with third
        parties.
      </p>
    </form>
  );
};

export default EnhancedContactForm;
