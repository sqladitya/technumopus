import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Section } from "@/components/ContentSections";
import { JobsManager } from "@/components/admin/JobsManager";
import { TeamManager } from "@/components/admin/TeamManager";
import { FormSubmissionsViewer } from "@/components/admin/FormSubmissionsViewer";
import { DashboardOverview } from "@/components/admin/DashboardOverview";
import { adminApiClient, isAuthenticated } from "@/lib/adminApi";

type AdminSection = "dashboard" | "jobs" | "team" | "forms";

const Admin = () => {
  const [activeSection, setActiveSection] = useState<AdminSection>("dashboard");
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);

  // Check authentication on mount
  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    try {
      if (isAuthenticated()) {
        const response = await adminApiClient.getCurrentUser();
        if (response.success) {
          setAuthenticated(true);
          setCurrentUser(response.data.user);
        } else {
          adminApiClient.clearToken();
        }
      }
    } catch (error) {
      adminApiClient.clearToken();
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");

    try {
      const response = await adminApiClient.login(loginForm);
      if (response.success) {
        setAuthenticated(true);
        setCurrentUser(response.data?.user);
        setLoginForm({ username: "", password: "" });
      } else {
        setLoginError("Invalid credentials");
      }
    } catch (error) {
      setLoginError(error instanceof Error ? error.message : "Login failed");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await adminApiClient.logout();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setAuthenticated(false);
      setCurrentUser(null);
    }
  };

  const adminSections = [
    {
      id: "dashboard" as AdminSection,
      title: "Dashboard",
      icon: (
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
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      id: "jobs" as AdminSection,
      title: "Jobs",
      icon: (
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
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m-8 0h8m-8 0v10a2 2 0 002 2h4a2 2 0 002-2V6"
          />
        </svg>
      ),
    },
    {
      id: "team" as AdminSection,
      title: "Team",
      icon: (
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
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
          />
        </svg>
      ),
    },
    {
      id: "forms" as AdminSection,
      title: "Form Submissions",
      icon: (
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
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
  ];

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-accenture-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accenture-purple"></div>
      </div>
    );
  }

  // Login page
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-accenture-black flex items-center justify-center">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-accenture-xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-accenture-purple rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-bold text-white uppercase tracking-wider">
                  Admin Access
                </span>
              </div>
              <h1 className="text-heading-lg font-semibold text-white mb-2">
                Welcome Back
              </h1>
              <p className="text-white/80">
                Please sign in to access the admin dashboard
              </p>
            </div>

            {loginError && (
              <div className="bg-red-500/20 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg mb-6">
                {loginError}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Username
                </label>
                <input
                  type="text"
                  required
                  value={loginForm.username}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, username: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-accenture-purple focus:border-accenture-purple transition-colors text-white placeholder:text-white/60"
                  placeholder="Enter your username"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={loginForm.password}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, password: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-accenture-purple focus:border-accenture-purple transition-colors text-white placeholder:text-white/60"
                  placeholder="Enter your password"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accenture-purple text-white py-3 px-6 rounded-lg font-semibold hover:bg-accenture-purple-dark transition-all duration-300 hover:scale-105"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link
                to="/"
                className="text-accenture-purple hover:text-accenture-purple-dark transition-colors text-sm"
              >
                ← Back to Website
              </Link>
            </div>

            <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="text-white/60 text-xs mb-2">Demo Credentials:</p>
              <p className="text-white/80 text-sm">
                Username: <span className="font-mono">admin</span>
              </p>
              <p className="text-white/80 text-sm">
                Password: <span className="font-mono">admin123</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main admin dashboard
  return (
    <div className="bg-accenture-black min-h-screen">
      <Navigation />

      {/* Admin Header */}
      <Section className="bg-accenture-black text-white pt-24 pb-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-body-sm font-bold text-accenture-purple uppercase tracking-wider mb-4">
              ADMIN DASHBOARD
            </div>
            <h1 className="text-heading-xl font-semibold text-white mb-4">
              Content Management System
            </h1>
            <p className="text-white/80 max-w-2xl">
              Manage your website content, view form submissions, and control
              all aspects of your platform from this centralized dashboard.
            </p>
          </div>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-colors"
          >
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
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Logout
          </button>
        </div>
      </Section>

      <Section className="bg-accenture-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-accenture-black rounded-xl p-6 sticky top-8">
              <h3 className="text-heading-md font-semibold text-white mb-6">
                Admin Sections
              </h3>
              <nav className="space-y-2">
                {adminSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`
                      w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200
                      ${
                        activeSection === section.id
                          ? "bg-accenture-purple text-white"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }
                    `}
                  >
                    {section.icon}
                    {section.title}
                  </button>
                ))}
              </nav>

              <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
                <h4 className="text-white font-medium mb-2">Quick Stats</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-white/80">
                    <span>Active Jobs:</span>
                    <span className="text-accenture-purple font-medium">5</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>Team Members:</span>
                    <span className="text-accenture-purple font-medium">
                      12
                    </span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>Form Submissions:</span>
                    <span className="text-accenture-purple font-medium">
                      24
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-accenture p-8">
              {activeSection === "dashboard" && <DashboardOverview />}
              {activeSection === "jobs" && <JobsManager />}
              {activeSection === "team" && <TeamManager />}
              {activeSection === "forms" && <FormSubmissionsViewer />}
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Admin;
