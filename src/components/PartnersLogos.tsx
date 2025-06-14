const PartnersLogos = () => {
  const partners = [
    {
      name: "AWS",
      logo: (
        <img
          src="/assets/aws-logo.svg"
          alt="AWS"
          className="w-16 h-8 object-contain"
        />
      ),
    },
    {
      name: "Microsoft Azure",
      logo: (
        <img
          src="/assets/azure-logo.svg"
          alt="Microsoft Azure"
          className="w-12 h-12 object-contain"
        />
      ),
    },
    {
      name: "Google Cloud",
      logo: (
        <img
          src="/assets/google-cloud-logo.svg"
          alt="Google Cloud"
          className="w-16 h-12 object-contain"
        />
      ),
    },
    {
      name: "Cisco",
      logo: (
        <svg viewBox="0 0 120 50" className="w-24 h-10">
          <g fill="#1BA0D7">
            <rect x="15" y="20" width="3" height="15" rx="1.5" />
            <rect x="21" y="17" width="3" height="21" rx="1.5" />
            <rect x="27" y="15" width="3" height="25" rx="1.5" />
            <rect x="33" y="13" width="3" height="29" rx="1.5" />
            <rect x="39" y="17" width="3" height="21" rx="1.5" />
            <rect x="45" y="20" width="3" height="15" rx="1.5" />
            <rect x="51" y="23" width="3" height="9" rx="1.5" />
          </g>
          <text
            x="65"
            y="30"
            fill="#1BA0D7"
            fontSize="16"
            fontFamily="Arial"
            fontWeight="bold"
          >
            cisco
          </text>
        </svg>
      ),
    },
    {
      name: "Zebra Technologies",
      logo: (
        <svg viewBox="0 0 120 50" className="w-24 h-10">
          <g>
            <rect x="15" y="15" width="35" height="4" fill="#000" />
            <rect x="20" y="21" width="25" height="4" fill="#000" />
            <rect x="15" y="27" width="35" height="4" fill="#000" />
            <rect x="20" y="33" width="25" height="4" fill="#000" />
          </g>
          <text
            x="60"
            y="28"
            fill="#000"
            fontSize="12"
            fontFamily="Arial"
            fontWeight="bold"
          >
            ZEBRA
          </text>
          <text x="60" y="40" fill="#666" fontSize="8" fontFamily="Arial">
            TECHNOLOGIES
          </text>
        </svg>
      ),
    },
    {
      name: "Dell Technologies",
      logo: (
        <svg viewBox="0 0 120 50" className="w-24 h-10">
          <g>
            <circle cx="25" cy="25" r="18" fill="#007DB8" />
            <text
              x="25"
              y="30"
              fill="white"
              fontSize="10"
              fontFamily="Arial"
              fontWeight="bold"
              textAnchor="middle"
            >
              DELL
            </text>
          </g>
          <text
            x="50"
            y="22"
            fill="#007DB8"
            fontSize="9"
            fontFamily="Arial"
            fontWeight="600"
          >
            Technologies
          </text>
          <text x="50" y="33" fill="#666" fontSize="7" fontFamily="Arial">
            Trusted. Worldwide.
          </text>
        </svg>
      ),
    },
    {
      name: "HP Inc.",
      logo: (
        <svg viewBox="0 0 120 50" className="w-24 h-10">
          <g>
            <circle cx="25" cy="25" r="15" fill="#0096D6" />
            <text
              x="25"
              y="30"
              fill="white"
              fontSize="16"
              fontFamily="Arial"
              fontWeight="bold"
              textAnchor="middle"
            >
              hp
            </text>
          </g>
          <text
            x="50"
            y="20"
            fill="#0096D6"
            fontSize="9"
            fontFamily="Arial"
            fontWeight="500"
          >
            Hewlett-Packard
          </text>
          <text x="50" y="32" fill="#666" fontSize="8" fontFamily="Arial">
            Enterprise
          </text>
        </svg>
      ),
    },
    {
      name: "Lenovo",
      logo: (
        <img
          src="/assets/lenovo-logo.svg"
          alt="Lenovo"
          className="w-20 h-8 object-contain"
        />
      ),
    },
    {
      name: "Palo Alto Networks",
      logo: (
        <svg viewBox="0 0 140 50" className="w-28 h-10">
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
    },
    {
      name: "SentinelOne",
      logo: (
        <img
          src="/assets/sentinelone-logo.svg"
          alt="SentinelOne"
          className="w-10 h-10 object-contain"
        />
      ),
    },
  ];

  return (
    <div>
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-tech-text-dark mb-4">
          Our Trusted Partners
        </h2>
        <p className="text-lg sm:text-xl text-tech-text-medium max-w-3xl mx-auto px-4">
          We collaborate with industry leaders to deliver cutting-edge solutions
          and ensure the highest standards of excellence
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 items-center">
        {partners.map((partner, index) => (
          <div
            key={partner.name}
            className="group bg-white rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 hover:border-tech-primary/20"
          >
            <div className="flex flex-col items-center justify-center h-16 sm:h-20">
              <div className="mb-2 sm:mb-3 opacity-70 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110 transform transition-transform">
                {partner.logo}
              </div>
              <p className="text-center text-xs font-medium text-tech-text-medium group-hover:text-tech-primary transition-colors duration-300 leading-tight">
                {partner.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Partnership Benefits */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-4">
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
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-tech-text-dark mb-2">
            Certified Excellence
          </h3>
          <p className="text-tech-text-medium text-sm">
            Our partnerships ensure access to the latest technologies and best
            practices in the industry.
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-4">
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
          <h3 className="text-lg font-bold text-tech-text-dark mb-2">
            Faster Implementation
          </h3>
          <p className="text-tech-text-medium text-sm">
            Leverage pre-built integrations and proven methodologies to
            accelerate your project delivery.
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-4">
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
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-tech-text-dark mb-2">
            Enterprise Security
          </h3>
          <p className="text-tech-text-medium text-sm">
            Benefit from enterprise-grade security and compliance standards
            across all partner technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartnersLogos;
