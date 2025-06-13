import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Section } from "@/components/ContentSections";

const OpenPositions = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(
    null,
  );
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const departments = [
    "All",
    "Engineering",
    "Consulting",
    "Architecture",
    "Operations",
    "Sales",
    "HR",
  ];
  const locations = [
    "All",
    "Remote",
    "San Francisco, CA",
    "New York, NY",
    "Seattle, WA",
    "Austin, TX",
    "Boston, MA",
  ];

  const openPositions = [
    {
      id: 1,
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      level: "Senior",
      postedDate: "2024-01-15",
      description:
        "Join our engineering team to build scalable SaaS platforms and enterprise solutions using cutting-edge technologies.",
      requirements: [
        "5+ years of software development experience",
        "Proficiency in React, Node.js, TypeScript, and cloud platforms",
        "Experience with microservices architecture and distributed systems",
        "Strong problem-solving skills and system design experience",
        "Experience with AWS/Azure/GCP and containerization (Docker, Kubernetes)",
      ],
      responsibilities: [
        "Design and develop scalable web applications and APIs",
        "Collaborate with cross-functional teams to deliver high-quality software",
        "Mentor junior developers and contribute to technical decision-making",
        "Participate in code reviews and maintain coding standards",
        "Optimize application performance and troubleshoot production issues",
      ],
      salary: "$140,000 - $180,000",
    },
    {
      id: 2,
      title: "SAP Consultant",
      department: "Consulting",
      location: "New York, NY / Remote",
      type: "Full-time",
      level: "Mid-Senior",
      postedDate: "2024-01-12",
      description:
        "Lead SAP implementation projects and provide expert consulting to enterprise clients across various industries.",
      requirements: [
        "SAP certification (S/4HANA preferred)",
        "3+ years of SAP implementation experience",
        "Strong client-facing and communication skills",
        "Experience with business process optimization",
        "Knowledge of SAP modules (FI/CO, MM, SD, PP)",
      ],
      responsibilities: [
        "Lead SAP S/4HANA implementation projects",
        "Analyze business requirements and design SAP solutions",
        "Configure SAP modules and perform system testing",
        "Train end-users and provide ongoing support",
        "Collaborate with technical teams on system integrations",
      ],
      salary: "$120,000 - $160,000",
    },
    {
      id: 3,
      title: "Cloud Architect",
      department: "Architecture",
      location: "Seattle, WA / Remote",
      type: "Full-time",
      level: "Senior",
      postedDate: "2024-01-10",
      description:
        "Design and implement enterprise cloud architectures for our diverse client base, ensuring scalability, security, and performance.",
      requirements: [
        "AWS/Azure/GCP certifications",
        "5+ years of cloud architecture experience",
        "Infrastructure as Code expertise (Terraform, CloudFormation)",
        "Security and compliance knowledge (SOC2, GDPR, HIPAA)",
        "Experience with DevOps practices and CI/CD pipelines",
      ],
      responsibilities: [
        "Design cloud-native architectures and migration strategies",
        "Define infrastructure standards and best practices",
        "Evaluate and recommend cloud services and technologies",
        "Ensure security, compliance, and cost optimization",
        "Mentor engineering teams on cloud technologies",
      ],
      salary: "$150,000 - $200,000",
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Operations",
      location: "Austin, TX / Remote",
      type: "Full-time",
      level: "Mid-Level",
      postedDate: "2024-01-08",
      description:
        "Build and maintain CI/CD pipelines and infrastructure automation to support our growing development teams.",
      requirements: [
        "3+ years of DevOps experience",
        "Kubernetes and Docker expertise",
        "CI/CD pipeline management (Jenkins, GitLab CI, GitHub Actions)",
        "Monitoring and observability tools (Prometheus, Grafana, ELK)",
        "Scripting skills (Python, Bash, PowerShell)",
      ],
      responsibilities: [
        "Design and implement CI/CD pipelines",
        "Manage Kubernetes clusters and container orchestration",
        "Automate infrastructure provisioning and configuration",
        "Monitor system performance and troubleshoot issues",
        "Collaborate with development teams on deployment strategies",
      ],
      salary: "$110,000 - $145,000",
    },
    {
      id: 5,
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      level: "Mid-Level",
      postedDate: "2024-01-05",
      description:
        "Create exceptional user experiences for our web applications using modern frontend technologies and frameworks.",
      requirements: [
        "3+ years of frontend development experience",
        "Expert knowledge of React, TypeScript, and modern JavaScript",
        "Experience with state management (Redux, Zustand, Context API)",
        "Proficiency in CSS frameworks (Tailwind CSS, Styled Components)",
        "Understanding of responsive design and accessibility principles",
      ],
      responsibilities: [
        "Develop responsive and accessible web applications",
        "Collaborate with UX/UI designers to implement designs",
        "Optimize applications for performance and SEO",
        "Write unit and integration tests for frontend components",
        "Participate in code reviews and maintain coding standards",
      ],
      salary: "$95,000 - $130,000",
    },
    {
      id: 6,
      title: "Sales Engineer",
      department: "Sales",
      location: "Boston, MA / Remote",
      type: "Full-time",
      level: "Mid-Senior",
      postedDate: "2024-01-03",
      description:
        "Bridge the gap between technical solutions and business needs by supporting our sales team with technical expertise.",
      requirements: [
        "Technical background in software engineering or similar field",
        "3+ years of experience in technical sales or solution engineering",
        "Strong presentation and communication skills",
        "Experience with enterprise software and cloud technologies",
        "Ability to understand complex technical requirements",
      ],
      responsibilities: [
        "Support sales team with technical expertise and solution design",
        "Conduct technical demos and presentations to prospective clients",
        "Collaborate with engineering teams to develop customer solutions",
        "Create technical proposals and documentation",
        "Build relationships with technical stakeholders at client organizations",
      ],
      salary: "$100,000 - $140,000 + Commission",
    },
    {
      id: 7,
      title: "HR Business Partner",
      department: "HR",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      level: "Senior",
      postedDate: "2024-01-01",
      description:
        "Partner with business leaders to develop HR strategies that support organizational growth and employee development.",
      requirements: [
        "5+ years of HR experience, preferably in tech companies",
        "Strong understanding of employment law and HR best practices",
        "Experience with talent acquisition and performance management",
        "Excellent interpersonal and communication skills",
        "SHRM or HRCI certification preferred",
      ],
      responsibilities: [
        "Partner with leadership on HR strategy and workforce planning",
        "Support talent acquisition and employee onboarding processes",
        "Manage employee relations and conflict resolution",
        "Develop and implement HR policies and procedures",
        "Lead employee engagement and retention initiatives",
      ],
      salary: "$120,000 - $150,000",
    },
    {
      id: 8,
      title: "Data Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      level: "Mid-Level",
      postedDate: "2023-12-28",
      description:
        "Build and maintain data infrastructure to support analytics, machine learning, and business intelligence initiatives.",
      requirements: [
        "3+ years of data engineering experience",
        "Proficiency in Python, SQL, and data processing frameworks",
        "Experience with cloud data services (AWS Redshift, Google BigQuery, Azure Synapse)",
        "Knowledge of ETL/ELT processes and data pipeline tools",
        "Understanding of data modeling and warehouse design principles",
      ],
      responsibilities: [
        "Design and implement scalable data pipelines",
        "Build and maintain data warehouses and data lakes",
        "Optimize data processing workflows for performance",
        "Collaborate with data scientists and analysts on data requirements",
        "Ensure data quality, security, and compliance standards",
      ],
      salary: "$115,000 - $155,000",
    },
  ];

  const benefits = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Competitive Compensation",
      description:
        "Market-leading salaries, performance bonuses, and equity options",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: "Health & Wellness",
      description:
        "Comprehensive health insurance, dental, vision, and wellness programs",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      title: "Learning & Development",
      description:
        "Continuous learning opportunities, certifications, and conference attendance",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Flexible Work",
      description: "Remote work options, flexible hours, and work-life balance",
    },
  ];

  const filteredPositions = openPositions.filter((position) => {
    const departmentMatch =
      !selectedDepartment ||
      selectedDepartment === "All" ||
      position.department === selectedDepartment;
    const locationMatch =
      !selectedLocation ||
      selectedLocation === "All" ||
      position.location.toLowerCase().includes(selectedLocation.toLowerCase());
    return departmentMatch && locationMatch;
  });

  const formatPostedDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "1 day ago";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 14) return "1 week ago";
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <Section className="bg-accenture-black text-white pt-24 pb-16">
        <div className="text-center animate-fade-in">
          <div className="text-body-sm font-bold text-accenture-purple uppercase tracking-wider mb-6">
            OPEN POSITIONS
          </div>
          <h1 className="text-display font-semibold text-white mb-8">
            Find Your Next Opportunity
          </h1>
          <p className="text-body-xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
            Explore our current job openings and join a team that's shaping the
            future of technology. We're looking for passionate individuals who
            want to make a real impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="#positions"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-accenture-purple text-white rounded-lg font-semibold hover:bg-accenture-purple-dark transition-all duration-300 hover:scale-105 text-xl"
            >
              Browse Positions
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              to="/careers"
              className="group inline-flex items-center gap-3 px-10 py-5 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-xl"
            >
              About Working Here
            </Link>
          </div>
        </div>
      </Section>

      {/* Quick Benefits Section */}
      <Section className="bg-accenture-gray-50">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-heading-xl font-semibold text-gray-900 mb-6">
            Why You'll Love Working With Us
          </h2>
          <p className="text-body-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to creating an environment where talented people can
            thrive and do their best work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white border border-accenture-purple/20 rounded-xl p-6 text-center hover:shadow-accenture hover:border-accenture-purple/40 transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-accenture-purple rounded-xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-heading-md font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Filters and Positions */}
      <Section className="bg-white" id="positions">
        <div className="text-center mb-12 animate-fade-in">
          <div className="text-body-sm font-bold text-accenture-purple uppercase tracking-wider mb-4">
            CURRENT OPENINGS
          </div>
          <h2 className="text-heading-xl font-semibold text-gray-900 mb-6">
            {filteredPositions.length} Open Position
            {filteredPositions.length !== 1 ? "s" : ""}
          </h2>
          <p className="text-body-xl text-gray-600 max-w-3xl mx-auto">
            Use the filters below to find positions that match your skills and
            interests.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 animate-fade-in">
          <div className="bg-accenture-gray-50 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Department Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Department
                </label>
                <div className="flex flex-wrap gap-2">
                  {departments.map((dept) => (
                    <button
                      key={dept}
                      onClick={() =>
                        setSelectedDepartment(dept === "All" ? null : dept)
                      }
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        selectedDepartment === dept ||
                        (dept === "All" && !selectedDepartment)
                          ? "bg-accenture-purple text-white"
                          : "bg-white text-gray-700 hover:bg-accenture-purple/10 hover:text-accenture-purple"
                      }`}
                    >
                      {dept}
                    </button>
                  ))}
                </div>
              </div>

              {/* Location Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Location
                </label>
                <div className="flex flex-wrap gap-2">
                  {locations.map((location) => (
                    <button
                      key={location}
                      onClick={() =>
                        setSelectedLocation(
                          location === "All" ? null : location,
                        )
                      }
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        selectedLocation === location ||
                        (location === "All" && !selectedLocation)
                          ? "bg-accenture-purple text-white"
                          : "bg-white text-gray-700 hover:bg-accenture-purple/10 hover:text-accenture-purple"
                      }`}
                    >
                      {location}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {(selectedDepartment || selectedLocation) && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <button
                  onClick={() => {
                    setSelectedDepartment(null);
                    setSelectedLocation(null);
                  }}
                  className="text-sm text-accenture-purple hover:text-accenture-purple-dark font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Position Cards */}
        <div className="space-y-6">
          {filteredPositions.map((position, index) => (
            <div
              key={position.id}
              className="group bg-white border border-accenture-purple/20 rounded-xl p-8 hover:shadow-accenture hover:border-accenture-purple/40 transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h3 className="text-heading-md font-semibold text-gray-900">
                      {position.title}
                    </h3>
                    <span className="px-3 py-1.5 bg-accenture-purple/10 text-accenture-purple text-sm font-medium rounded-full border border-accenture-purple/20">
                      {position.department}
                    </span>
                    <span className="px-3 py-1.5 bg-green-100 text-green-700 text-sm font-medium rounded-full border border-green-200">
                      {position.type}
                    </span>
                    <span className="px-3 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                      {position.level}
                    </span>
                  </div>

                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {position.location}
                    </div>
                    <div className="flex items-center gap-2">
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
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {position.salary}
                    </div>
                    <div className="flex items-center gap-2">
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
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Posted {formatPostedDate(position.postedDate)}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {position.description}
                  </p>

                  {/* Requirements */}
                  <div className="mb-6">
                    <h4 className="text-body-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                      Requirements:
                    </h4>
                    <ul className="space-y-2">
                      {position.requirements.slice(0, 3).map((req, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accenture-purple rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                      {position.requirements.length > 3 && (
                        <li className="text-accenture-purple text-sm font-medium">
                          +{position.requirements.length - 3} more requirements
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-body-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-2">
                      {position.responsibilities
                        .slice(0, 2)
                        .map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{resp}</span>
                          </li>
                        ))}
                      {position.responsibilities.length > 2 && (
                        <li className="text-green-600 text-sm font-medium">
                          +{position.responsibilities.length - 2} more
                          responsibilities
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 lg:w-auto lg:flex-shrink-0">
                  <a
                    href={`mailto:hr@technumopus.com?subject=Application for ${position.title}&body=Hi HR Team,%0D%0A%0D%0AI am interested in applying for the ${position.title} position (ID: ${position.id}). Please find my resume attached.%0D%0A%0D%0AThank you for your consideration.%0D%0A%0D%0ABest regards`}
                    className="px-6 py-3 bg-accenture-purple text-white rounded-lg font-semibold hover:bg-accenture-purple-dark transition-all duration-300 hover:scale-105 text-center"
                  >
                    Apply Now
                  </a>
                  <button
                    onClick={() => {
                      const element = document.getElementById(
                        `position-${position.id}`,
                      );
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="px-6 py-3 border-2 border-accenture-purple text-accenture-purple rounded-lg font-semibold hover:bg-accenture-purple hover:text-white transition-all duration-300 text-center"
                  >
                    View Details
                  </button>
                  <button className="px-6 py-3 border border-gray-300 text-gray-600 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 text-center">
                    Save Position
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPositions.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <div className="text-6xl mb-6">🔍</div>
            <h3 className="text-heading-lg font-semibold text-gray-900 mb-4">
              No positions found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or check back later for new
              opportunities.
            </p>
            <button
              onClick={() => {
                setSelectedDepartment(null);
                setSelectedLocation(null);
              }}
              className="px-6 py-3 bg-accenture-purple text-white rounded-lg font-semibold hover:bg-accenture-purple-dark transition-all duration-300"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </Section>

      {/* General Application CTA */}
      <Section className="bg-accenture-gray-50">
        <div className="text-center py-12 animate-fade-in">
          <h2 className="text-heading-xl font-semibold text-gray-900 mb-6">
            Don't see the perfect role?
          </h2>
          <p className="text-body-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals who share our passion
            for technology and innovation. Send us your resume and we'll keep
            you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hr@technumopus.com?subject=General Application&body=Hi HR Team,%0D%0A%0D%0AI am interested in exploring opportunities with Technum Opus. Please find my resume attached.%0D%0A%0D%0AThank you for your consideration.%0D%0A%0D%0ABest regards"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accenture-purple text-white rounded-lg font-semibold hover:bg-accenture-purple-dark transition-all duration-300 hover:scale-105"
            >
              Send General Application
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
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
            <Link
              to="/careers"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-accenture-purple text-accenture-purple rounded-lg font-semibold hover:bg-accenture-purple hover:text-white transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </Section>

      {/* Newsletter Signup */}
      <Section className="bg-accenture-purple text-white">
        <div className="text-center py-12 animate-fade-in">
          <h2 className="text-heading-xl font-semibold text-white mb-6">
            Stay Updated on New Opportunities
          </h2>
          <p className="text-body-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Get notified when we post new positions that match your interests.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-3 bg-white text-accenture-purple rounded-lg font-semibold hover:bg-accenture-gray-50 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default OpenPositions;
