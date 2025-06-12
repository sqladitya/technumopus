// Disabled API client - backend removed from project

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
  private async mockRequest<T>(endpoint: string): Promise<T> {
    // Simulate a successful response for demo purposes
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (endpoint.includes("/api/subscriptions")) {
      return {
        success: true,
        message:
          "This is a demo response - backend has been removed from this project.",
      } as T;
    }

    if (endpoint.includes("/health")) {
      return {
        status: "demo",
        timestamp: new Date().toISOString(),
        uptime: 0,
      } as T;
    }

    return {
      success: true,
      message: "Demo mode - no backend connected",
    } as T;
  }

  // Subscribe to newsletter (mock)
  async subscribe(data: SubscriptionRequest): Promise<SubscriptionResponse> {
    return this.mockRequest<SubscriptionResponse>("/api/subscriptions");
  }

  // Unsubscribe from newsletter (mock)
  async unsubscribe(email: string): Promise<UnsubscribeResponse> {
    return this.mockRequest<UnsubscribeResponse>(
      "/api/subscriptions/unsubscribe",
    );
  }

  // Check subscription status (mock)
  async checkSubscription(email: string): Promise<SubscriptionCheckResponse> {
    return this.mockRequest<SubscriptionCheckResponse>(
      "/api/subscriptions/check",
    );
  }

  // Get subscription statistics (mock)
  async getStats(): Promise<any> {
    return this.mockRequest("/api/subscriptions/stats");
  }

  // Health check (mock)
  async healthCheck(): Promise<{
    status: string;
    timestamp: string;
    uptime: number;
  }> {
    return this.mockRequest("/health");
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
