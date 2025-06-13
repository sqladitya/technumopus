import { useState, useEffect } from "react";
import { adminApiClient } from "@/lib/adminApi";

export const DashboardOverview = () => {
  const [timeRange, setTimeRange] = useState("7d");
  const [dashboardData, setDashboardData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch dashboard data from API
  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const response = await adminApiClient.getDashboardOverview();
      if (response.success) {
        setDashboardData(response.data);
      } else {
        setError("Failed to fetch dashboard data");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const stats = dashboardData
    ? [
        {
          title: "Page Views (7 days)",
          value:
            dashboardData.overview?.page_views_7_days?.toLocaleString() || "0",
          change: "+12%",
          trend: "up",
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
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          ),
        },
        {
          title: "Contact Form Submissions",
          value:
            dashboardData.overview?.total_submissions?.toLocaleString() || "0",
          change: `+${dashboardData.overview?.submissions_last_7_days || 0} this week`,
          trend: "up",
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
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
          ),
        },
        {
          title: "Job Applications",
          value:
            dashboardData.overview?.total_applications?.toLocaleString() || "0",
          change: "+8%",
          trend: "up",
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
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m-8 0h8m-8 0v10a2 2 0 002 2h4a2 2 0 002-2V6"
              />
            </svg>
          ),
        },
        {
          title: "Active Jobs",
          value: dashboardData.overview?.active_jobs?.toLocaleString() || "0",
          change: `${dashboardData.overview?.active_team_members || 0} team members`,
          trend: "up",
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
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          ),
        },
      ]
    : [];

  const recentActivity =
    dashboardData?.recent_activity?.map((activity: any) => ({
      type: activity.type,
      message: activity.message,
      time: new Date(activity.created_at).toLocaleDateString(),
      icon: activity.type === "contact" ? "📧" : "📅",
    })) || [];

  const topPages = [
    { page: "/", views: "8,234", percentage: "33%" },
    { page: "/services", views: "5,123", percentage: "21%" },
    { page: "/contact", views: "3,456", percentage: "14%" },
    { page: "/careers", views: "2,789", percentage: "11%" },
    { page: "/about", views: "2,234", percentage: "9%" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-heading-lg font-semibold text-gray-900">
            Dashboard Overview
          </h2>
          <p className="text-gray-600 mt-1">
            Welcome back! Here's what's happening with your website.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accenture-purple focus:border-accenture-purple"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-accenture-purple/10 rounded-lg text-accenture-purple">
                {stat.icon}
              </div>
              <div
                className={`flex items-center gap-1 text-sm ${
                  stat.trend === "up"
                    ? "text-green-600 bg-green-50"
                    : "text-red-600 bg-red-50"
                } px-2 py-1 rounded-full`}
              >
                <svg
                  className={`w-3 h-3 ${stat.trend === "up" ? "rotate-0" : "rotate-180"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17l10-10M17 7v10H7"
                  />
                </svg>
                {stat.change}
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 mb-1">
                {stat.value}
              </p>
              <p className="text-gray-600 text-sm">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-heading-md font-semibold text-gray-900 mb-6">
            Recent Activity
          </h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="text-lg">{activity.icon}</div>
                <div className="flex-1">
                  <p className="text-gray-900 text-sm">{activity.message}</p>
                  <p className="text-gray-500 text-xs mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 text-accenture-purple hover:text-accenture-purple-dark text-sm font-medium">
            View All Activity →
          </button>
        </div>

        {/* Top Pages */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-heading-md font-semibold text-gray-900 mb-6">
            Top Pages
          </h3>
          <div className="space-y-4">
            {topPages.map((page, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-gray-900 font-medium">{page.page}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-accenture-purple h-2 rounded-full"
                      style={{ width: page.percentage }}
                    ></div>
                  </div>
                </div>
                <div className="text-right ml-4">
                  <p className="text-gray-900 font-semibold">{page.views}</p>
                  <p className="text-gray-500 text-sm">{page.percentage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-accenture-purple to-accenture-purple-dark rounded-xl p-6 text-white">
        <h3 className="text-heading-md font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-4 text-left transition-all duration-200 hover:scale-105">
            <div className="text-lg mb-2">➕</div>
            <p className="font-medium">Add New Job</p>
            <p className="text-white/80 text-sm">Post a new career opening</p>
          </button>
          <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-4 text-left transition-all duration-200 hover:scale-105">
            <div className="text-lg mb-2">👥</div>
            <p className="font-medium">Add Team Member</p>
            <p className="text-white/80 text-sm">Add a new team member</p>
          </button>
          <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-4 text-left transition-all duration-200 hover:scale-105">
            <div className="text-lg mb-2">📊</div>
            <p className="font-medium">View Reports</p>
            <p className="text-white/80 text-sm">Detailed analytics</p>
          </button>
        </div>
      </div>
    </div>
  );
};
