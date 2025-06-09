import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionBackground from "@/components/SectionBackground";

const SecurityPartners = () => {
  const securityPartners = [
    {
      name: "Palo Alto Networks",
      logo: (
        <svg viewBox="0 0 140 50" className="w-24 h-8">
          <g>
            <path fill="#FA582D" d="M20 15h15v8h-8v8h-7V15z" />
            <path fill="#FA582D" d="M27 31h8v15h-8V31z" />
            <circle cx="23.5" cy="23.5" r="3" fill="white" />
          </g>
          <text
            x="45"
            y="20"
            fill="#FA582D"
            fontSize="8"
            fontFamily="Arial"
            fontWeight="600"
          >
            Palo Alto
          </text>
          <text
            x="45"
            y="30"
            fill="#FA582D"
            fontSize="8"
            fontFamily="Arial"
            fontWeight="600"
          >
            Networks
          </text>
          <text x="45" y="40" fill="#666" fontSize="6" fontFamily="Arial">
            Cybersecurity
          </text>
        </svg>
      ),
      tier: "Platinum Partner",
      description:
        "Next-generation cybersecurity platform preventing cyber threats with AI-powered security across networks, clouds, and endpoints.",
      solutions: [
        "Next-Generation Firewalls",
        "Cloud Security Platform",
        "Endpoint Protection",
        "Security Analytics",
        "Threat Intelligence",
        "Zero Trust Architecture",
      ],
      industries: [
        "Financial Services",
        "Healthcare",
        "Government",
        "Energy & Utilities",
        "Manufacturing",
        "Retail",
      ],
      threatTypes: [
        "Advanced Persistent Threats",
        "Ransomware Protection",
        "Zero-day Exploits",
        "Insider Threats",
        "DDoS Attacks",
        "Data Exfiltration",
      ],
      compliance: ["SOC 2", "ISO 27001", "PCI DSS", "HIPAA", "FedRAMP"],
    },
    {
      name: "SentinelOne",
      logo: "/assets/sentinelone-logo.svg",
      tier: "Elite Partner",
      description:
        "Autonomous cybersecurity platform delivering AI-powered endpoint protection, detection, and response across enterprise environments.",
      solutions: [
        "Autonomous Endpoint Protection",
        "Extended Detection & Response",
        "Cloud Workload Protection",
        "Identity Threat Detection",
        "Mobile Threat Defense",
        "IoT Security",
      ],
      industries: [
        "Technology",
        "Healthcare",
        "Financial Services",
        "Government",
        "Education",
        "Critical Infrastructure",
      ],
      threatTypes: [
        "Fileless Malware",
        "Memory-based Attacks",
        "Script-based Threats",
        "Living-off-the-land Attacks",
        "Supply Chain Attacks",
        "AI-powered Threats",
      ],
      compliance: ["FedRAMP", "SOC 2 Type II", "ISO 27001", "Common Criteria"],
    },
    {
      name: "CrowdStrike",
      logo: (
        <svg viewBox="0 0 140 50" className="w-24 h-8">
          <text
            x="10"
            y="30"
            fill="#E31E24"
            fontSize="16"
            fontFamily="Arial"
            fontWeight="bold"
          >
            CrowdStrike
          </text>
        </svg>
      ),
      tier: "Premier Partner",
      description:
        "Cloud-native endpoint security platform providing real-time protection and threat hunting capabilities with AI-driven intelligence.",
      solutions: [
        "Falcon Endpoint Protection",
        "Threat Hunting Platform",
        "Cloud Security Posture",
        "Identity Protection",
        "Log Management",
        "Incident Response",
      ],
      industries: [
        "Fortune 500 Companies",
        "Government Agencies",
        "Financial Institutions",
        "Healthcare Organizations",
        "Technology Companies",
        "Critical Infrastructure",
      ],
      threatTypes: [
        "Nation-state Attacks",
        "Targeted Intrusions",
        "Commodity Malware",
        "Insider Threats",
        "Cloud Threats",
        "Mobile Threats",
      ],
      compliance: ["FedRAMP High", "SOC 2 Type II", "ISO 27001", "GDPR"],
    },
    {
      name: "Fortinet",
      logo: (
        <svg viewBox="0 0 140 50" className="w-24 h-8">
          <text
            x="10"
            y="30"
            fill="#EE3124"
            fontSize="14"
            fontFamily="Arial"
            fontWeight="bold"
          >
            Fortinet
          </text>
        </svg>
      ),
      tier: "Gold Partner",
      description:
        "Broad, integrated, and automated cybersecurity fabric delivering security across the entire digital attack surface.",
      solutions: [
        "FortiGate Firewalls",
        "Secure SD-WAN",
        "FortiAnalyzer SIEM",
        "FortiClient Endpoint",
        "FortiCloud Management",
        "Security Operations Center",
      ],
      industries: [
        "Service Providers",
        "Enterprise",
        "Government",
        "Small Business",
        "Managed Security Providers",
        "OT/IoT Environments",
      ],
      threatTypes: [
        "Network Intrusions",
        "Web Application Attacks",
        "Email Threats",
        "Lateral Movement",
        "Data Loss Prevention",
        "Operational Technology Threats",
      ],
      compliance: ["Common Criteria", "FIPS 140-2", "ICSA", "SOC 2"],
    },
  ];

  const securityStats = [
    { label: "Threats Blocked Daily", value: "1M+", icon: "shield" },
    { label: "Security Incidents Resolved", value: "99.9%", icon: "check" },
    { label: "Average Response Time", value: "<5min", icon: "clock" },
    { label: "Security Certifications", value: "50+", icon: "award" },
  ];

  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-red-900 via-red-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-purple-600/15 to-slate-900/95" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Security Partners
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Protecting your digital assets with next-generation cybersecurity
              solutions from the world's leading security technology providers
            </p>
          </div>

          {/* Security Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {securityStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Partners Detail */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="space-y-16">
              {securityPartners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
                >
                  <div className="p-8 lg:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                      {/* Partner Info */}
                      <div className="lg:col-span-1">
                        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                          <div className="mb-6">
                            {typeof partner.logo === "string" ? (
                              <img
                                src={partner.logo}
                                alt={partner.name}
                                className="w-16 h-16 object-contain mx-auto lg:mx-0"
                              />
                            ) : (
                              <div className="flex justify-center lg:justify-start">
                                {partner.logo}
                              </div>
                            )}
                          </div>
                          <h3 className="text-2xl font-bold text-tech-text-dark mb-2">
                            {partner.name}
                          </h3>
                          <span className="inline-block px-3 py-1 bg-red-500/10 text-red-600 text-sm rounded-full font-semibold mb-4">
                            {partner.tier}
                          </span>
                          <p className="text-tech-text-medium leading-relaxed">
                            {partner.description}
                          </p>
                        </div>
                      </div>

                      {/* Security Solutions */}
                      <div className="lg:col-span-1">
                        <h4 className="text-xl font-bold text-tech-text-dark mb-4">
                          Security Solutions
                        </h4>
                        <div className="space-y-3">
                          {partner.solutions.map((solution, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-500"
                            >
                              <svg
                                className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                />
                              </svg>
                              <span className="text-tech-text-medium text-sm font-medium">
                                {solution}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Threat Protection */}
                      <div className="lg:col-span-1">
                        <h4 className="text-xl font-bold text-tech-text-dark mb-4">
                          Threat Protection
                        </h4>
                        <div className="space-y-2 mb-6">
                          {partner.threatTypes.map((threat, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                              <span className="text-sm text-tech-text-medium">
                                {threat}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div>
                          <h5 className="font-bold text-tech-text-dark mb-2">
                            Compliance
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {partner.compliance.map((comp, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium"
                              >
                                {comp}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Industries */}
                      <div className="lg:col-span-1">
                        <h4 className="text-xl font-bold text-tech-text-dark mb-4">
                          Key Industries
                        </h4>
                        <div className="space-y-2 mb-6">
                          {partner.industries.map((industry, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 p-2 bg-gray-50 rounded"
                            >
                              <svg
                                className="w-4 h-4 text-tech-primary flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                />
                              </svg>
                              <span className="text-sm text-tech-text-medium">
                                {industry}
                              </span>
                            </div>
                          ))}
                        </div>

                        <button className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                          Security Assessment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Security Framework */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-tech-text-dark mb-6">
                Comprehensive Security Framework
              </h2>
              <p className="text-xl text-tech-text-medium max-w-4xl mx-auto">
                Our multi-layered security approach provides defense-in-depth
                protection across your entire infrastructure
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Endpoint Protection
                </h3>
                <p className="text-tech-text-medium">
                  Advanced endpoint security with AI-powered threat detection
                  and response capabilities.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Cloud Security
                </h3>
                <p className="text-tech-text-medium">
                  Comprehensive cloud security posture management and workload
                  protection.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Network Security
                </h3>
                <p className="text-tech-text-medium">
                  Next-generation firewalls and network segmentation for traffic
                  protection.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-white"
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
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Threat Hunting
                </h3>
                <p className="text-tech-text-medium">
                  Proactive threat hunting and incident response with security
                  operations center.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-white"
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
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Compliance Management
                </h3>
                <p className="text-tech-text-medium">
                  Automated compliance monitoring and reporting for regulatory
                  requirements.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-white"
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
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Security Training
                </h3>
                <p className="text-tech-text-medium">
                  Comprehensive security awareness training and phishing
                  simulation programs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* CTA Section */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-6">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-tech-text-medium mb-8">
              Don't wait for a security incident. Let our experts assess your
              security posture and implement comprehensive protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Get Security Assessment
              </a>
              <a
                href="/services"
                className="px-8 py-4 border-2 border-red-500 text-red-600 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                View Security Services
              </a>
            </div>
          </div>
        </section>
      </SectionBackground>

      <Footer />
    </div>
  );
};

export default SecurityPartners;
