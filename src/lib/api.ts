// API client for backend communication

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

export interface SubscriptionRequest {
  email: string;
  source?: "website" | "footer" | "newsletter" | "popup" | "api";
}

export interface SubscriptionResponse {
  success: boolean;
  message: string;
  data?: {
    id: number;
    email: string;
    subscribed_at: string;
    is_active: boolean;
    source: string;
    created_at: string;
    updated_at: string;
  };
  error?: string;
  details?: Array<{
    field: string;
    message: string;
  }>;
}

export interface UnsubscribeResponse {
  success: boolean;
  message: string;
  data?: {
    email: string;
    unsubscribed_at: string;
  };
  error?: string;
}

export interface SubscriptionCheckResponse {
  success: boolean;
  subscribed: boolean;
  message?: string;
  data?: {
    email: string;
    subscribed_at: string;
    is_active: boolean;
  };
}

class ApiClient {
  private baseURL: string;

  constructor(baseURL: string = API_BASE_URL) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;

    const defaultHeaders = {
      "Content-Type": "application/json",
    };

    const config: RequestInit = {
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message || `HTTP error! status: ${response.status}`,
        );
      }

      return await response.json();
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error("An unexpected error occurred");
    }
  }

  // Subscribe to newsletter
  async subscribe(data: SubscriptionRequest): Promise<SubscriptionResponse> {
    return this.request<SubscriptionResponse>("/api/subscriptions", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  // Unsubscribe from newsletter
  async unsubscribe(email: string): Promise<UnsubscribeResponse> {
    return this.request<UnsubscribeResponse>("/api/subscriptions/unsubscribe", {
      method: "POST",
      body: JSON.stringify({ email }),
    });
  }

  // Check subscription status
  async checkSubscription(email: string): Promise<SubscriptionCheckResponse> {
    const encodedEmail = encodeURIComponent(email);
    return this.request<SubscriptionCheckResponse>(
      `/api/subscriptions/check/${encodedEmail}`,
    );
  }

  // Get subscription statistics (admin)
  async getStats(): Promise<any> {
    return this.request("/api/subscriptions/stats");
  }

  // Health check
  async healthCheck(): Promise<{
    status: string;
    timestamp: string;
    uptime: number;
  }> {
    return this.request("/health");
  }
}

// Create and export a singleton instance
export const apiClient = new ApiClient();

// Utility functions for common operations
export const subscribeToNewsletter = async (
  email: string,
  source: SubscriptionRequest["source"] = "website",
): Promise<SubscriptionResponse> => {
  if (!email || !email.trim()) {
    throw new Error("Email address is required");
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    throw new Error("Please enter a valid email address");
  }

  return apiClient.subscribe({
    email: email.trim().toLowerCase(),
    source,
  });
};

export const unsubscribeFromNewsletter = async (
  email: string,
): Promise<UnsubscribeResponse> => {
  if (!email || !email.trim()) {
    throw new Error("Email address is required");
  }

  return apiClient.unsubscribe(email.trim().toLowerCase());
};

export const checkSubscriptionStatus = async (
  email: string,
): Promise<SubscriptionCheckResponse> => {
  if (!email || !email.trim()) {
    throw new Error("Email address is required");
  }

  return apiClient.checkSubscription(email.trim().toLowerCase());
};

// Error handling utilities
export const isRateLimitError = (error: any): boolean => {
  return (
    error?.message?.includes("Too many") ||
    error?.message?.includes("rate limit") ||
    error?.message?.includes("limit exceeded")
  );
};

export const isValidationError = (error: any): boolean => {
  return (
    error?.message?.includes("validation") ||
    error?.message?.includes("valid email") ||
    error?.message?.includes("required")
  );
};

export const isAlreadySubscribedError = (error: any): boolean => {
  return error?.message?.includes("already subscribed");
};

export default apiClient;
