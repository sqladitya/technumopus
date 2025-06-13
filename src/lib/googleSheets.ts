// Google Sheets API service for form submissions

// Google Apps Script Web App URLs
const CONTACT_FORM_URL =
  "https://script.google.com/macros/s/AKfycbwPmwIgGYnHJoe9jveZxClUtXuGHoOs1St7_4y4FfHlygorih1IGysHsGERmqvs0ymTXQ/exec";
const CONSULTATION_FORM_URL =
  "https://script.google.com/macros/s/AKfycbz7jOIp50o1xYkXdVcicVEsGvIjKn-OW06i5ARR1tW1VDT7JCx-9i9-ftTso1KMkRBJ_g/exec";

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  category: string;
  message: string;
}

export interface ConsultationFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  projectType: string;
  budget?: string;
  timeline?: string;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
}

export interface SimpleContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface GoogleSheetsResponse {
  success: boolean;
  message: string;
  data?: any;
  error?: string;
}

class GoogleSheetsService {
  private async submitToGoogleSheets(
    url: string,
    data: Record<string, any>,
  ): Promise<GoogleSheetsResponse> {
    try {
      // Add timestamp to all submissions
      const submissionData = {
        ...data,
        timestamp: new Date().toISOString(),
        submittedAt: new Date().toLocaleString(),
      };

      const response = await fetch(url, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      // Note: no-cors mode means we can't read the response
      // Google Apps Script will handle the data, we assume success
      return {
        success: true,
        message: "Form submitted successfully! We'll get back to you soon.",
      };
    } catch (error) {
      console.error("Error submitting to Google Sheets:", error);

      // Provide user-friendly error messages
      if (error instanceof Error) {
        if (error.name === "TypeError" && error.message === "Failed to fetch") {
          return {
            success: false,
            message:
              "Network error. Please check your internet connection and try again.",
            error: error.message,
          };
        }
        return {
          success: false,
          message:
            "Something went wrong. Please try again or contact us directly.",
          error: error.message,
        };
      }

      return {
        success: false,
        message: "An unexpected error occurred. Please try again later.",
        error: "Unknown error",
      };
    }
  }

  async submitContactForm(
    data: ContactFormData,
  ): Promise<GoogleSheetsResponse> {
    // Validate required fields
    if (!data.name?.trim()) {
      return {
        success: false,
        message: "Name is required",
        error: "Validation error",
      };
    }

    if (!data.email?.trim()) {
      return {
        success: false,
        message: "Email is required",
        error: "Validation error",
      };
    }

    if (!data.message?.trim()) {
      return {
        success: false,
        message: "Message is required",
        error: "Validation error",
      };
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      return {
        success: false,
        message: "Please enter a valid email address",
        error: "Validation error",
      };
    }

    // Prepare data for Google Sheets
    const formData = {
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      company: data.company?.trim() || "",
      phone: data.phone?.trim() || "",
      category: data.category || "",
      message: data.message.trim(),
      formType: "Contact Us",
    };

    return this.submitToGoogleSheets(CONTACT_FORM_URL, formData);
  }

  async submitConsultationForm(
    data: ConsultationFormData,
  ): Promise<GoogleSheetsResponse> {
    // Validate required fields
    if (!data.name?.trim()) {
      return {
        success: false,
        message: "Name is required",
        error: "Validation error",
      };
    }

    if (!data.email?.trim()) {
      return {
        success: false,
        message: "Email is required",
        error: "Validation error",
      };
    }

    if (!data.projectType?.trim()) {
      return {
        success: false,
        message: "Project type is required",
        error: "Validation error",
      };
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      return {
        success: false,
        message: "Please enter a valid email address",
        error: "Validation error",
      };
    }

    // Prepare data for Google Sheets
    const formData = {
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      company: data.company?.trim() || "",
      phone: data.phone?.trim() || "",
      projectType: data.projectType,
      budget: data.budget || "",
      timeline: data.timeline || "",
      preferredDate: data.preferredDate || "",
      preferredTime: data.preferredTime || "",
      message: data.message?.trim() || "",
      formType: "Schedule Consultation",
    };

    return this.submitToGoogleSheets(CONSULTATION_FORM_URL, formData);
  }

  async submitSimpleContactForm(
    data: SimpleContactFormData,
  ): Promise<GoogleSheetsResponse> {
    // Validate required fields
    if (!data.name?.trim()) {
      return {
        success: false,
        message: "Name is required",
        error: "Validation error",
      };
    }

    if (!data.email?.trim()) {
      return {
        success: false,
        message: "Email is required",
        error: "Validation error",
      };
    }

    if (!data.message?.trim()) {
      return {
        success: false,
        message: "Message is required",
        error: "Validation error",
      };
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      return {
        success: false,
        message: "Please enter a valid email address",
        error: "Validation error",
      };
    }

    // Prepare data for Google Sheets
    const formData = {
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      phone: data.phone?.trim() || "",
      message: data.message.trim(),
      formType: "Simple Contact Form",
    };

    return this.submitToGoogleSheets(CONTACT_FORM_URL, formData);
  }
}

// Create and export singleton instance
export const googleSheetsService = new GoogleSheetsService();

// Utility functions for easy usage
export const submitContactForm = (
  data: ContactFormData,
): Promise<GoogleSheetsResponse> => {
  return googleSheetsService.submitContactForm(data);
};

export const submitConsultationForm = (
  data: ConsultationFormData,
): Promise<GoogleSheetsResponse> => {
  return googleSheetsService.submitConsultationForm(data);
};

export const submitSimpleContactForm = (
  data: SimpleContactFormData,
): Promise<GoogleSheetsResponse> => {
  return googleSheetsService.submitSimpleContactForm(data);
};

// Error handling utilities
export const isValidationError = (response: GoogleSheetsResponse): boolean => {
  return response.error === "Validation error";
};

export const isNetworkError = (response: GoogleSheetsResponse): boolean => {
  return (
    response.error?.includes("Failed to fetch") ||
    response.message?.includes("Network error") ||
    false
  );
};

export default googleSheetsService;
