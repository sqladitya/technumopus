import { useState, useCallback } from "react";
import {
  subscribeToNewsletter,
  unsubscribeFromNewsletter,
  checkSubscriptionStatus,
  isRateLimitError,
  isValidationError,
  isAlreadySubscribedError,
  type SubscriptionRequest,
} from "@/lib/api";

export interface UseSubscriptionState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: string | null;
  message: string | null;
}

export interface UseSubscriptionReturn extends UseSubscriptionState {
  subscribe: (
    email: string,
    source?: SubscriptionRequest["source"],
  ) => Promise<void>;
  unsubscribe: (email: string) => Promise<void>;
  checkStatus: (email: string) => Promise<boolean | null>;
  reset: () => void;
  clearError: () => void;
}

const initialState: UseSubscriptionState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null,
  message: null,
};

export const useSubscription = (): UseSubscriptionReturn => {
  const [state, setState] = useState<UseSubscriptionState>(initialState);

  const reset = useCallback(() => {
    setState(initialState);
  }, []);

  const clearError = useCallback(() => {
    setState((prev) => ({
      ...prev,
      isError: false,
      error: null,
    }));
  }, []);

  const setLoading = useCallback(() => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
      isError: false,
      isSuccess: false,
      error: null,
      message: null,
    }));
  }, []);

  const setSuccess = useCallback((message: string) => {
    setState((prev) => ({
      ...prev,
      isLoading: false,
      isSuccess: true,
      isError: false,
      error: null,
      message,
    }));
  }, []);

  const setError = useCallback((error: string) => {
    setState((prev) => ({
      ...prev,
      isLoading: false,
      isSuccess: false,
      isError: true,
      error,
      message: null,
    }));
  }, []);

  const subscribe = useCallback(
    async (
      email: string,
      source: SubscriptionRequest["source"] = "website",
    ) => {
      try {
        setLoading();

        const response = await subscribeToNewsletter(email, source);

        if (response.success) {
          setSuccess(
            response.message || "Successfully subscribed to our newsletter!",
          );
        } else {
          setError(
            response.message || "Failed to subscribe. Please try again.",
          );
        }
      } catch (error: any) {
        console.error("Subscription error:", error);

        let errorMessage = "An unexpected error occurred. Please try again.";

        if (isAlreadySubscribedError(error)) {
          errorMessage = "You are already subscribed to our newsletter.";
        } else if (isValidationError(error)) {
          errorMessage = "Please enter a valid email address.";
        } else if (isRateLimitError(error)) {
          errorMessage = "Too many attempts. Please wait before trying again.";
        } else if (error.message) {
          errorMessage = error.message;
        }

        setError(errorMessage);
      }
    },
    [setLoading, setSuccess, setError],
  );

  const unsubscribe = useCallback(
    async (email: string) => {
      try {
        setLoading();

        const response = await unsubscribeFromNewsletter(email);

        if (response.success) {
          setSuccess(
            response.message ||
              "Successfully unsubscribed from our newsletter.",
          );
        } else {
          setError(
            response.message || "Failed to unsubscribe. Please try again.",
          );
        }
      } catch (error: any) {
        console.error("Unsubscribe error:", error);

        let errorMessage = "An unexpected error occurred. Please try again.";

        if (isValidationError(error)) {
          errorMessage = "Please enter a valid email address.";
        } else if (error.message) {
          errorMessage = error.message;
        }

        setError(errorMessage);
      }
    },
    [setLoading, setSuccess, setError],
  );

  const checkStatus = useCallback(
    async (email: string): Promise<boolean | null> => {
      try {
        const response = await checkSubscriptionStatus(email);
        return response.success ? response.subscribed : null;
      } catch (error: any) {
        console.error("Check status error:", error);
        return null;
      }
    },
    [],
  );

  return {
    ...state,
    subscribe,
    unsubscribe,
    checkStatus,
    reset,
    clearError,
  };
};

// Hook for simple email validation
export const useEmailValidation = () => {
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  const validateEmail = useCallback((email: string) => {
    if (!email || !email.trim()) {
      setIsValid(false);
      setError("Email address is required");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const valid = emailRegex.test(email.trim());

    setIsValid(valid);
    setError(valid ? null : "Please enter a valid email address");

    return valid;
  }, []);

  const reset = useCallback(() => {
    setIsValid(null);
    setError(null);
  }, []);

  return {
    isValid,
    error,
    validateEmail,
    reset,
  };
};

export default useSubscription;
