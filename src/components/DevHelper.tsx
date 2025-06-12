import { useState, useEffect } from "react";
import { apiClient } from "@/lib/api";

const DevHelper = () => {
  const [backendStatus, setBackendStatus] = useState<
    "checking" | "online" | "offline"
  >("checking");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkBackend = async () => {
      try {
        await apiClient.healthCheck();
        setBackendStatus("online");
        setError(null);
      } catch (err: any) {
        setBackendStatus("offline");
        setError(err.message);
      }
    };

    checkBackend();

    // Check every 10 seconds
    const interval = setInterval(checkBackend, 10000);
    return () => clearInterval(interval);
  }, []);

  // Only show in development
  if (import.meta.env.PROD) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div
        className={`
        px-4 py-2 rounded-lg shadow-lg text-white text-sm font-medium
        ${
          backendStatus === "online"
            ? "bg-green-600"
            : backendStatus === "offline"
              ? "bg-red-600"
              : "bg-yellow-600"
        }
      `}
      >
        <div className="flex items-center gap-2">
          <div
            className={`
            w-2 h-2 rounded-full
            ${
              backendStatus === "online"
                ? "bg-green-300"
                : backendStatus === "offline"
                  ? "bg-red-300"
                  : "bg-yellow-300"
            }
          `}
          />
          <span>
            Backend:{" "}
            {backendStatus === "checking" ? "Checking..." : backendStatus}
          </span>
        </div>
        {backendStatus === "offline" && (
          <div className="mt-2 text-xs opacity-90">
            <div>🚀 To start backend:</div>
            <div className="font-mono bg-black/20 px-2 py-1 rounded mt-1">
              cd backend && npm run dev
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DevHelper;
