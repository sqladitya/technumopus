// Admin API client for backend communication

const isDevelopment = import.meta.env.VITE_DEV_MODE === "true";
const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  (isDevelopment ? "http://localhost:3001" : "https://your-backend-url.com");

// Types
export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data?: {
    token: string;
    user: AdminUser;
  };
}

export interface AdminUser {
  id: number;
  username: string;
  email: string;
  full_name: string;
  role: string;
}

export interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  level: string;
  description: string;
  requirements: string[];
  benefits: string[];
  salary: string;
  status: "active" | "paused" | "closed";
  applications_count: number;
  created_at: string;
  updated_at: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  department: string;
  email: string;
  phone?: string;
  bio: string;
  skills: string[];
  image_url?: string;
  linkedin_url?: string;
  twitter_url?: string;
  status: "active" | "inactive";
  join_date: string;
  created_at: string;
  updated_at: string;
}

export interface ContactSubmission {
  id: number;
  type: "contact" | "consultation";
  name: string;
  email: string;
  company?: string;
  phone?: string;
  category?: string;
  project_type?: string;
  budget?: string;
  timeline?: string;
  preferred_date?: string;
  preferred_time?: string;
  message: string;
  status: "new" | "read" | "responded" | "archived";
  created_at: string;
  updated_at: string;
}

export interface DashboardOverview {
  total_submissions: number;
  new_submissions: number;
  submissions_last_7_days: number;
  active_jobs: number;
  active_team_members: number;
  page_views_7_days: number;
  total_applications: number;
}

class AdminApiClient {
  private baseURL: string;
  private token: string | null = null;

  constructor(baseURL: string = API_BASE_URL) {
    this.baseURL = baseURL;
    this.token = localStorage.getItem("admin_token");
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;

    const defaultHeaders: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (this.token) {
      defaultHeaders.Authorization = `Bearer ${this.token}`;
    }

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

        // Handle token expiration
        if (response.status === 401) {
          this.clearToken();
          throw new Error("Session expired. Please log in again.");
        }

        throw new Error(
          errorData.message || `HTTP error! status: ${response.status}`,
        );
      }

      return await response.json();
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === "TypeError" && error.message === "Failed to fetch") {
          throw new Error(
            `Backend server not available at ${this.baseURL}. ` +
              `Please ensure the backend server is running on port 3001.`,
          );
        }
        throw error;
      }
      throw new Error("An unexpected error occurred");
    }
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem("admin_token", token);
  }

  clearToken() {
    this.token = null;
    localStorage.removeItem("admin_token");
  }

  // Authentication
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await this.request<LoginResponse>("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    });

    if (response.success && response.data?.token) {
      this.setToken(response.data.token);
    }

    return response;
  }

  async logout(): Promise<void> {
    try {
      await this.request("/api/auth/logout", { method: "POST" });
    } finally {
      this.clearToken();
    }
  }

  async getCurrentUser(): Promise<{
    success: boolean;
    data: { user: AdminUser };
  }> {
    return this.request("/api/auth/me");
  }

  // Dashboard
  async getDashboardOverview(): Promise<{ success: boolean; data: any }> {
    return this.request("/api/admin/dashboard/overview");
  }

  async getPerformanceMetrics(
    period: string = "7d",
  ): Promise<{ success: boolean; data: any }> {
    return this.request(`/api/admin/dashboard/performance?period=${period}`);
  }

  // Jobs
  async getJobs(params?: {
    status?: string;
    department?: string;
    limit?: number;
    offset?: number;
  }): Promise<{ success: boolean; data: { jobs: Job[]; pagination: any } }> {
    const queryParams = new URLSearchParams();
    if (params?.status) queryParams.set("status", params.status);
    if (params?.department) queryParams.set("department", params.department);
    if (params?.limit) queryParams.set("limit", params.limit.toString());
    if (params?.offset) queryParams.set("offset", params.offset.toString());

    const query = queryParams.toString();
    return this.request(`/api/admin/jobs${query ? `?${query}` : ""}`);
  }

  async getJob(id: number): Promise<{ success: boolean; data: { job: Job } }> {
    return this.request(`/api/admin/jobs/${id}`);
  }

  async createJob(
    jobData: Omit<
      Job,
      "id" | "applications_count" | "created_at" | "updated_at"
    >,
  ): Promise<{ success: boolean; data: { job: Job } }> {
    return this.request("/api/admin/jobs", {
      method: "POST",
      body: JSON.stringify(jobData),
    });
  }

  async updateJob(
    id: number,
    jobData: Omit<
      Job,
      "id" | "applications_count" | "created_at" | "updated_at"
    >,
  ): Promise<{ success: boolean; data: { job: Job } }> {
    return this.request(`/api/admin/jobs/${id}`, {
      method: "PUT",
      body: JSON.stringify(jobData),
    });
  }

  async deleteJob(id: number): Promise<{ success: boolean; message: string }> {
    return this.request(`/api/admin/jobs/${id}`, { method: "DELETE" });
  }

  async updateJobStatus(
    id: number,
    status: Job["status"],
  ): Promise<{ success: boolean; data: { job: Job } }> {
    return this.request(`/api/admin/jobs/${id}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    });
  }

  // Team Members
  async getTeamMembers(params?: {
    status?: string;
    department?: string;
    limit?: number;
    offset?: number;
  }): Promise<{
    success: boolean;
    data: { team_members: TeamMember[]; pagination: any };
  }> {
    const queryParams = new URLSearchParams();
    if (params?.status) queryParams.set("status", params.status);
    if (params?.department) queryParams.set("department", params.department);
    if (params?.limit) queryParams.set("limit", params.limit.toString());
    if (params?.offset) queryParams.set("offset", params.offset.toString());

    const query = queryParams.toString();
    return this.request(`/api/admin/team${query ? `?${query}` : ""}`);
  }

  async getTeamMember(
    id: number,
  ): Promise<{ success: boolean; data: { team_member: TeamMember } }> {
    return this.request(`/api/admin/team/${id}`);
  }

  async createTeamMember(
    memberData: Omit<TeamMember, "id" | "created_at" | "updated_at">,
  ): Promise<{ success: boolean; data: { team_member: TeamMember } }> {
    return this.request("/api/admin/team", {
      method: "POST",
      body: JSON.stringify(memberData),
    });
  }

  async updateTeamMember(
    id: number,
    memberData: Omit<TeamMember, "id" | "created_at" | "updated_at">,
  ): Promise<{ success: boolean; data: { team_member: TeamMember } }> {
    return this.request(`/api/admin/team/${id}`, {
      method: "PUT",
      body: JSON.stringify(memberData),
    });
  }

  async deleteTeamMember(
    id: number,
  ): Promise<{ success: boolean; message: string }> {
    return this.request(`/api/admin/team/${id}`, { method: "DELETE" });
  }

  async updateTeamMemberStatus(
    id: number,
    status: TeamMember["status"],
  ): Promise<{ success: boolean; data: { team_member: TeamMember } }> {
    return this.request(`/api/admin/team/${id}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    });
  }

  // Contact Submissions
  async getSubmissions(params?: {
    status?: string;
    type?: string;
    limit?: number;
    offset?: number;
    sort_by?: string;
    sort_order?: string;
  }): Promise<{
    success: boolean;
    data: { submissions: ContactSubmission[]; pagination: any };
  }> {
    const queryParams = new URLSearchParams();
    if (params?.status) queryParams.set("status", params.status);
    if (params?.type) queryParams.set("type", params.type);
    if (params?.limit) queryParams.set("limit", params.limit.toString());
    if (params?.offset) queryParams.set("offset", params.offset.toString());
    if (params?.sort_by) queryParams.set("sort_by", params.sort_by);
    if (params?.sort_order) queryParams.set("sort_order", params.sort_order);

    const query = queryParams.toString();
    return this.request(`/api/admin/submissions${query ? `?${query}` : ""}`);
  }

  async getSubmission(
    id: number,
  ): Promise<{ success: boolean; data: { submission: ContactSubmission } }> {
    return this.request(`/api/admin/submissions/${id}`);
  }

  async updateSubmissionStatus(
    id: number,
    status: ContactSubmission["status"],
  ): Promise<{ success: boolean; data: { submission: ContactSubmission } }> {
    return this.request(`/api/admin/submissions/${id}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    });
  }

  async deleteSubmission(
    id: number,
  ): Promise<{ success: boolean; message: string }> {
    return this.request(`/api/admin/submissions/${id}`, { method: "DELETE" });
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
export const adminApiClient = new AdminApiClient();

// Utility functions
export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem("admin_token");
};

export default adminApiClient;
