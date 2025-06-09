const PartnersLogos = () => {
  const partners = [
    {
      name: "AWS",
      logo: (
        <svg viewBox="0 0 100 60" className="w-16 h-10">
          <g fill="#FF9900">
            <path d="M30.7 44.3c-4.7 3.5-11.6 5.4-17.5 5.4-8.3 0-15.7-3.1-21.4-8.2-.4-.4-.1-1 .5-.7 6.8 4 15.2 6.4 23.9 6.4 5.9 0 12.3-1.2 18.2-3.7.9-.4 1.6.6.8 1.1z" />
            <path d="M32.8 41.9c-.6-.8-4.1-.4-5.7-.2-.5.1-.6-.4-.1-.7 2.8-2 7.4-1.4 7.9-.7.5.7-.1 5.4-2.8 7.7-.4.4-.8.2-.6-.3.6-1.4 1.9-4.6 1.3-5.8z" />
            <path d="M29.4 18.5V16c0-.4.3-.6.6-.6h11.4c.4 0 .6.3.6.6v2.1c0 .4-.3.9-.8 1.5l-5.9 8.4c2.2-.1 4.5.3 6.5 1.5.4.3.6.7.6 1.1v2.3c0 .4-.4.8-.8.6-3.8-2-8.8-2.2-13 .1-.4.2-.8-.2-.8-.6v-2.2c0-.4 0-1.2.4-1.9l6.8-9.8h-6c-.4 0-.6-.3-.6-.6z" />
            <path d="M73.4 33.5h-2.9c-.3 0-.5-.2-.5-.5V17.8c0-.3.3-.5.6-.5h2.7c.3 0 .5.2.5.5v2h.1c.7-1.9 1.8-2.8 3.4-2.8 1.6 0 2.6.9 3.3 2.8.7-1.9 2.3-2.8 3.6-2.8 1.1 0 2.3.4 3 1.5.8 1.2.6 2.9.6 4.4v9.6c0 .3-.3.5-.6.5h-2.9c-.3 0-.5-.2-.5-.5v-8.1c0-.6.1-2.1-.1-2.6-.3-.9-.9-1.1-1.8-1.1s-1.8.6-2.2 1.5c-.3.9-.3 2.4-.3 3.7v6.6c0 .3-.3.5-.6.5h-2.9c-.3 0-.5-.2-.5-.5v-8.1c0-1.7.3-4.2-1.9-4.2s-2.1 2.4-2.1 4.2v8.1c0 .3-.2.5-.5.5z" />
            <path d="M92.9 17.3c4.3 0 6.6 3.7 6.6 8.4 0 4.5-2.6 8.2-6.6 8.2-4.2 0-6.5-3.7-6.5-8.3 0-4.6 2.4-8.3 6.5-8.3zm0 3c-2.1 0-2.2 2.9-2.2 4.7 0 1.8-.1 5.6 2.2 5.6 2.2 0 2.3-3.1 2.3-5 0-1.2-.1-2.7-.4-3.8-.3-.9-.8-1.5-1.9-1.5zm10.8 13.2h-2.9c-.3 0-.5-.2-.5-.5V17.8c0-.3.3-.5.6-.5h2.7c.3 0 .5.2.5.4v2.4h.1c.8-2.1 1.9-3.2 4-3.2.3 0 .6.1.8.1.3.1.5.3.5.6v2.8c0 .3-.3.6-.6.5-2.8-.6-3.4.7-3.4 3.1v8.5c0 .3-.3.5-.6.5z" />
            <path d="M48.5 32.5c-.1.3-.4.4-.6.3l-2.6-1.2c-.2-.1-.3-.4-.2-.6 1.2-2 1.9-4.6 1.9-7.5 0-2.8-.6-5.4-1.7-7.5-.1-.3 0-.5.2-.6l2.6-1.3c.2-.1.5 0 .6.3 1.5 2.7 2.3 5.8 2.3 9.1.1 3.4-.7 6.6-2.5 9z" />
            <path d="M55.3 35.1c-.1.3-.4.4-.6.3l-2.6-1.2c-.2-.1-.3-.4-.2-.6 2.2-4 3.5-9.3 3.5-14.1 0-4.8-1.2-10-3.4-14-.1-.3 0-.5.2-.6l2.6-1.3c.2-.1.5 0 .6.3 2.7 4.7 4.2 10.7 4.2 15.6 0 4.9-1.4 10.9-4.3 15.6z" />
            <path d="M62.1 37.8c-.1.3-.4.4-.6.3l-2.6-1.2c-.2-.1-.3-.4-.2-.6 3.3-6 5.2-13.9 5.2-21.2 0-7.3-1.8-15.1-5.1-21.1-.1-.3 0-.5.2-.6l2.6-1.3c.2-.1.5 0 .6.3 3.8 6.7 6.1 15.3 6.1 22.7-.1 7.4-2.2 16.1-6.2 22.7z" />
          </g>
        </svg>
      ),
    },
    {
      name: "Microsoft Azure",
      logo: (
        <svg viewBox="0 0 100 40" className="w-16 h-8">
          <path
            fill="#0078D4"
            d="M20.5 4.5L8.2 24.1h7.1l12.3-19.6zM36.1 24.1L23.8 4.5l-9.6 15.3L8.2 24.1H45L36.1 24.1z"
          />
          <text x="50" y="20" fill="#0078D4" fontSize="8" fontFamily="Arial">
            Microsoft
          </text>
          <text x="50" y="32" fill="#0078D4" fontSize="6" fontFamily="Arial">
            Azure
          </text>
        </svg>
      ),
    },
    {
      name: "Google Cloud",
      logo: (
        <svg viewBox="0 0 100 40" className="w-16 h-8">
          <g>
            <path
              fill="#4285F4"
              d="M15 20c0-2.8 2.2-5 5-5h5v-5c-5.5 0-10 4.5-10 10s4.5 10 10 10h5v-5h-5c-2.8 0-5-2.2-5-5z"
            />
            <path
              fill="#34A853"
              d="M35 15v10c0 2.8-2.2 5-5 5s-5-2.2-5-5h-5c0 5.5 4.5 10 10 10s10-4.5 10-10V15h-5z"
            />
            <path
              fill="#FBBC04"
              d="M35 15h5c0-5.5-4.5-10-10-10v5c2.8 0 5 2.2 5 5z"
            />
            <path fill="#EA4335" d="M20 25h5v5c-2.8 0-5-2.2-5-5z" />
          </g>
          <text x="45" y="16" fill="#5F6368" fontSize="6" fontFamily="Arial">
            Google
          </text>
          <text x="45" y="26" fill="#5F6368" fontSize="6" fontFamily="Arial">
            Cloud
          </text>
        </svg>
      ),
    },
    {
      name: "Cisco",
      logo: (
        <svg viewBox="0 0 100 40" className="w-16 h-8">
          <g fill="#1BA0D7">
            <rect x="10" y="15" width="2" height="10" rx="1" />
            <rect x="14" y="12" width="2" height="16" rx="1" />
            <rect x="18" y="10" width="2" height="20" rx="1" />
            <rect x="22" y="8" width="2" height="24" rx="1" />
            <rect x="26" y="12" width="2" height="16" rx="1" />
            <rect x="30" y="15" width="2" height="10" rx="1" />
            <rect x="34" y="18" width="2" height="4" rx="1" />
            <rect x="38" y="15" width="2" height="10" rx="1" />
            <rect x="42" y="12" width="2" height="16" rx="1" />
            <rect x="46" y="10" width="2" height="20" rx="1" />
          </g>
          <text
            x="55"
            y="24"
            fill="#1BA0D7"
            fontSize="12"
            fontFamily="Arial"
            fontWeight="bold"
          >
            cisco
          </text>
        </svg>
      ),
    },
    {
      name: "Zebra",
      logo: (
        <svg viewBox="0 0 100 40" className="w-16 h-8">
          <g>
            <rect x="10" y="10" width="40" height="4" fill="#000" />
            <rect x="15" y="16" width="30" height="4" fill="#000" />
            <rect x="10" y="22" width="40" height="4" fill="#000" />
            <rect x="15" y="28" width="30" height="4" fill="#000" />
          </g>
          <text
            x="55"
            y="24"
            fill="#000"
            fontSize="10"
            fontFamily="Arial"
            fontWeight="bold"
          >
            ZEBRA
          </text>
        </svg>
      ),
    },
    {
      name: "Dell",
      logo: (
        <svg viewBox="0 0 100 40" className="w-16 h-8">
          <g fill="#007DB8">
            <circle cx="20" cy="20" r="15" />
            <text
              x="20"
              y="26"
              fill="white"
              fontSize="12"
              fontFamily="Arial"
              fontWeight="bold"
              textAnchor="middle"
            >
              DELL
            </text>
          </g>
          <text
            x="40"
            y="24"
            fill="#007DB8"
            fontSize="12"
            fontFamily="Arial"
            fontWeight="bold"
          >
            Technologies
          </text>
        </svg>
      ),
    },
    {
      name: "HP",
      logo: (
        <svg viewBox="0 0 100 40" className="w-16 h-8">
          <g fill="#0096D6">
            <circle cx="20" cy="20" r="12" />
            <text
              x="20"
              y="26"
              fill="white"
              fontSize="14"
              fontFamily="Arial"
              fontWeight="bold"
              textAnchor="middle"
            >
              hp
            </text>
          </g>
          <text x="40" y="16" fill="#0096D6" fontSize="8" fontFamily="Arial">
            Hewlett
          </text>
          <text x="40" y="26" fill="#0096D6" fontSize="8" fontFamily="Arial">
            Packard
          </text>
        </svg>
      ),
    },
    {
      name: "Lenovo",
      logo: (
        <svg viewBox="0 0 100 40" className="w-16 h-8">
          <g fill="#E31E24">
            <rect x="10" y="15" width="25" height="10" rx="2" />
            <text
              x="22.5"
              y="22"
              fill="white"
              fontSize="8"
              fontFamily="Arial"
              fontWeight="bold"
              textAnchor="middle"
            >
              L
            </text>
          </g>
          <text
            x="40"
            y="24"
            fill="#E31E24"
            fontSize="10"
            fontFamily="Arial"
            fontWeight="bold"
          >
            lenovo
          </text>
        </svg>
      ),
    },
    {
      name: "Palo Alto",
      logo: (
        <svg viewBox="0 0 100 40" className="w-16 h-8">
          <g fill="#FA582D">
            <path d="M15 10h10v5h-5v5h-5V10z" />
            <path d="M20 20h5v10h-5V20z" />
            <circle cx="17.5" cy="17.5" r="2" fill="white" />
          </g>
          <text x="35" y="16" fill="#FA582D" fontSize="6" fontFamily="Arial">
            Palo Alto
          </text>
          <text x="35" y="26" fill="#FA582D" fontSize="6" fontFamily="Arial">
            Networks
          </text>
        </svg>
      ),
    },
    {
      name: "SentinelOne",
      logo: (
        <svg viewBox="0 0 100 40" className="w-16 h-8">
          <g fill="#663399">
            <circle cx="20" cy="20" r="10" />
            <path
              d="M15 20l3 3 6-6"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
          </g>
          <text
            x="35"
            y="18"
            fill="#663399"
            fontSize="7"
            fontFamily="Arial"
            fontWeight="bold"
          >
            Sentinel
          </text>
          <text
            x="35"
            y="28"
            fill="#663399"
            fontSize="7"
            fontFamily="Arial"
            fontWeight="bold"
          >
            One
          </text>
        </svg>
      ),
    },
  ];

  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-tech-text-dark mb-4">
          Our Partners
        </h2>
        <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
          We collaborate with industry leaders to deliver cutting-edge solutions
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
        {partners.map((partner, index) => (
          <div
            key={partner.name}
            className="group bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
          >
            <div className="flex flex-col items-center justify-center h-20">
              <div className="mb-3 opacity-70 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110 transform transition-transform">
                {partner.logo}
              </div>
              <p className="text-center text-xs font-medium text-tech-text-medium group-hover:text-tech-primary transition-colors duration-300">
                {partner.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersLogos;
