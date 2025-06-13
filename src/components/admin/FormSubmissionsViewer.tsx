import { useState } from "react";

interface ContactSubmission {
  id: string;
  type: "contact" | "consultation";
  name: string;
  email: string;
  company?: string;
  phone?: string;
  category?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  preferredDate?: string;
  preferredTime?: string;
  message: string;
  submittedAt: string;
  status: "new" | "read" | "responded" | "archived";
}

export const FormSubmissionsViewer = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([
    {
      id: "1",
      type: "contact",
      name: "John Doe",
      email: "john.doe@example.com",
      company: "TechCorp Inc.",
      phone: "+91 9876543210",
      category: "SaaS Development",
      message:
        "We're looking for a custom SaaS solution for our inventory management. We need scalable architecture and modern UI/UX design.",
      submittedAt: "2024-01-20T10:30:00Z",
      status: "new",
    },
    {
      id: "2",
      type: "consultation",
      name: "Sarah Wilson",
      email: "sarah@startup.com",
      company: "StartupXYZ",
      phone: "+91 8765432109",
      projectType: "Cloud Migration",
      budget: "$50K - $100K",
      timeline: "3-6 months",
      preferredDate: "2024-01-25",
      preferredTime: "2:00 PM - 3:00 PM",
      message:
        "We need help migrating our legacy systems to AWS. Currently running on-premise servers with about 50TB of data.",
      submittedAt: "2024-01-19T14:15:00Z",
      status: "read",
    },
    {
      id: "3",
      type: "contact",
      name: "Michael Kumar",
      email: "m.kumar@enterprise.com",
      company: "Enterprise Solutions Ltd.",
      phone: "+91 7654321098",
      category: "SAP Consulting",
      message:
        "Looking for SAP implementation services for our manufacturing unit. We have about 500 employees and multiple locations.",
      submittedAt: "2024-01-18T09:45:00Z",
      status: "responded",
    },
    {
      id: "4",
      type: "consultation",
      name: "Priya Sharma",
      email: "priya@healthtech.in",
      company: "HealthTech India",
      phone: "+91 6543210987",
      projectType: "Custom Software Development",
      budget: "$100K - $250K",
      timeline: "6-12 months",
      preferredDate: "2024-01-22",
      preferredTime: "10:00 AM - 11:00 AM",
      message:
        "We're developing a telemedicine platform and need expertise in HIPAA compliance, real-time video integration, and scalable backend architecture.",
      submittedAt: "2024-01-17T16:20:00Z",
      status: "new",
    },
  ]);

  const [selectedSubmission, setSelectedSubmission] =
    useState<ContactSubmission | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [filterType, setFilterType] = useState<string>("all");

  const updateStatus = (id: string, newStatus: ContactSubmission["status"]) => {
    setSubmissions(
      submissions.map((sub) =>
        sub.id === id ? { ...sub, status: newStatus } : sub,
      ),
    );
  };

  const deleteSubmission = (id: string) => {
    if (confirm("Are you sure you want to delete this submission?")) {
      setSubmissions(submissions.filter((sub) => sub.id !== id));
      if (selectedSubmission?.id === id) {
        setSelectedSubmission(null);
      }
    }
  };

  const filteredSubmissions = submissions.filter((sub) => {
    const statusMatch = filterStatus === "all" || sub.status === filterStatus;
    const typeMatch = filterType === "all" || sub.type === filterType;
    return statusMatch && typeMatch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800";
      case "read":
        return "bg-yellow-100 text-yellow-800";
      case "responded":
        return "bg-green-100 text-green-800";
      case "archived":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-heading-lg font-semibold text-gray-900">
            Form Submissions
          </h2>
          <p className="text-gray-600 mt-1">
            View and manage contact form and consultation requests
          </p>
        </div>
        <div className="flex items-center gap-4">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accenture-purple focus:border-accenture-purple"
          >
            <option value="all">All Types</option>
            <option value="contact">Contact Forms</option>
            <option value="consultation">Consultations</option>
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accenture-purple focus:border-accenture-purple"
          >
            <option value="all">All Status</option>
            <option value="new">New</option>
            <option value="read">Read</option>
            <option value="responded">Responded</option>
            <option value="archived">Archived</option>
          </select>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-2xl font-bold text-blue-600">
            {submissions.filter((s) => s.status === "new").length}
          </div>
          <div className="text-sm text-gray-600">New Submissions</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-2xl font-bold text-yellow-600">
            {submissions.filter((s) => s.status === "read").length}
          </div>
          <div className="text-sm text-gray-600">Read</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-2xl font-bold text-green-600">
            {submissions.filter((s) => s.status === "responded").length}
          </div>
          <div className="text-sm text-gray-600">Responded</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-2xl font-bold text-gray-600">
            {submissions.length}
          </div>
          <div className="text-sm text-gray-600">Total</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Submissions List */}
        <div className="lg:col-span-2 space-y-4">
          {filteredSubmissions.map((submission) => (
            <div
              key={submission.id}
              className={`bg-white border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
                selectedSubmission?.id === submission.id
                  ? "ring-2 ring-accenture-purple border-accenture-purple"
                  : "border-gray-200"
              }`}
              onClick={() => {
                setSelectedSubmission(submission);
                if (submission.status === "new") {
                  updateStatus(submission.id, "read");
                }
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900">
                      {submission.name}
                    </h3>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(submission.status)}`}
                    >
                      {submission.status}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                      {submission.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{submission.email}</p>
                  {submission.company && (
                    <p className="text-sm text-gray-500">
                      {submission.company}
                    </p>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">
                    {formatDate(submission.submittedAt)}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 text-sm line-clamp-2 mb-3">
                {submission.message}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  {submission.category && (
                    <span>Category: {submission.category}</span>
                  )}
                  {submission.projectType && (
                    <span>Project: {submission.projectType}</span>
                  )}
                  {submission.budget && (
                    <span>Budget: {submission.budget}</span>
                  )}
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(
                        `mailto:${submission.email}?subject=Re: Your inquiry&body=Hello ${submission.name},%0D%0A%0D%0AThank you for your inquiry.`,
                      );
                    }}
                    className="p-1 text-gray-400 hover:text-accenture-purple transition-colors"
                    title="Reply via email"
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
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteSubmission(submission.id);
                    }}
                    className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                    title="Delete submission"
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
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}

          {filteredSubmissions.length === 0 && (
            <div className="text-center py-12">
              <svg
                className="w-12 h-12 text-gray-400 mx-auto mb-4"
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
              <p className="text-gray-500">No submissions found</p>
            </div>
          )}
        </div>

        {/* Submission Details */}
        <div className="lg:col-span-1">
          {selectedSubmission ? (
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-heading-md font-semibold text-gray-900">
                  Submission Details
                </h3>
                <button
                  onClick={() => setSelectedSubmission(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Name
                  </label>
                  <p className="text-gray-900 font-medium">
                    {selectedSubmission.name}
                  </p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Email
                  </label>
                  <p className="text-gray-900">{selectedSubmission.email}</p>
                </div>

                {selectedSubmission.company && (
                  <div>
                    <label className="text-sm font-medium text-gray-500">
                      Company
                    </label>
                    <p className="text-gray-900">
                      {selectedSubmission.company}
                    </p>
                  </div>
                )}

                {selectedSubmission.phone && (
                  <div>
                    <label className="text-sm font-medium text-gray-500">
                      Phone
                    </label>
                    <p className="text-gray-900">{selectedSubmission.phone}</p>
                  </div>
                )}

                {selectedSubmission.category && (
                  <div>
                    <label className="text-sm font-medium text-gray-500">
                      Category
                    </label>
                    <p className="text-gray-900">
                      {selectedSubmission.category}
                    </p>
                  </div>
                )}

                {selectedSubmission.projectType && (
                  <div>
                    <label className="text-sm font-medium text-gray-500">
                      Project Type
                    </label>
                    <p className="text-gray-900">
                      {selectedSubmission.projectType}
                    </p>
                  </div>
                )}

                {selectedSubmission.budget && (
                  <div>
                    <label className="text-sm font-medium text-gray-500">
                      Budget
                    </label>
                    <p className="text-gray-900">{selectedSubmission.budget}</p>
                  </div>
                )}

                {selectedSubmission.timeline && (
                  <div>
                    <label className="text-sm font-medium text-gray-500">
                      Timeline
                    </label>
                    <p className="text-gray-900">
                      {selectedSubmission.timeline}
                    </p>
                  </div>
                )}

                {selectedSubmission.preferredDate && (
                  <div>
                    <label className="text-sm font-medium text-gray-500">
                      Preferred Date
                    </label>
                    <p className="text-gray-900">
                      {selectedSubmission.preferredDate}
                    </p>
                  </div>
                )}

                {selectedSubmission.preferredTime && (
                  <div>
                    <label className="text-sm font-medium text-gray-500">
                      Preferred Time
                    </label>
                    <p className="text-gray-900">
                      {selectedSubmission.preferredTime}
                    </p>
                  </div>
                )}

                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Message
                  </label>
                  <p className="text-gray-900 whitespace-pre-wrap">
                    {selectedSubmission.message}
                  </p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Submitted
                  </label>
                  <p className="text-gray-900">
                    {formatDate(selectedSubmission.submittedAt)}
                  </p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-500 mb-2 block">
                    Status
                  </label>
                  <select
                    value={selectedSubmission.status}
                    onChange={(e) =>
                      updateStatus(
                        selectedSubmission.id,
                        e.target.value as ContactSubmission["status"],
                      )
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accenture-purple focus:border-accenture-purple"
                  >
                    <option value="new">New</option>
                    <option value="read">Read</option>
                    <option value="responded">Responded</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>

                <div className="flex gap-2 pt-4">
                  <button
                    onClick={() =>
                      window.open(
                        `mailto:${selectedSubmission.email}?subject=Re: Your inquiry&body=Hello ${selectedSubmission.name},%0D%0A%0D%0AThank you for your inquiry.`,
                      )
                    }
                    className="flex-1 bg-accenture-purple text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-accenture-purple-dark transition-colors"
                  >
                    Reply via Email
                  </button>
                  <button
                    onClick={() => deleteSubmission(selectedSubmission.id)}
                    className="px-4 py-2 border border-red-300 text-red-600 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <svg
                className="w-12 h-12 text-gray-400 mx-auto mb-4"
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
              <p className="text-gray-500">
                Select a submission to view details
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
