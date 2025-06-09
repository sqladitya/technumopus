import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className, id }: SectionProps) => (
  <section id={id} className={cn("py-20", className)}>
    <div className="max-w-[1280px] mx-auto px-8">{children}</div>
  </section>
);

export const FourColumnGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
      <div className="w-12 h-12 bg-purple-gradient rounded-lg mb-4 flex items-center justify-center">
        <svg
          className="w-6 h-6 text-white"
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
      <h3 className="text-lg font-semibold text-technum-text-dark mb-2">
        Fast Performance
      </h3>
      <p className="text-technum-text-medium">
        Lightning-fast solutions that deliver exceptional user experiences.
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
      <div className="w-12 h-12 bg-purple-gradient rounded-lg mb-4 flex items-center justify-center">
        <svg
          className="w-6 h-6 text-white"
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
      <h3 className="text-lg font-semibold text-technum-text-dark mb-2">
        Reliable Security
      </h3>
      <p className="text-technum-text-medium">
        Enterprise-grade security measures to protect your valuable data.
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
      <div className="w-12 h-12 bg-purple-gradient rounded-lg mb-4 flex items-center justify-center">
        <svg
          className="w-6 h-6 text-white"
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
      </div>
      <h3 className="text-lg font-semibold text-technum-text-dark mb-2">
        User-Focused
      </h3>
      <p className="text-technum-text-medium">
        Intuitive designs that prioritize user experience and satisfaction.
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
      <div className="w-12 h-12 bg-purple-gradient rounded-lg mb-4 flex items-center justify-center">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
          />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-technum-text-dark mb-2">
        Scalable Solutions
      </h3>
      <p className="text-technum-text-medium">
        Future-proof architecture that grows with your business needs.
      </p>
    </div>
  </div>
);

export const ThreeColumnGrid = () => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-technum-text-dark mb-4">
      Our Services
    </h2>
    <p className="text-xl text-technum-text-medium max-w-2xl mx-auto mb-12">
      Comprehensive technology solutions tailored to your business requirements
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow duration-300">
        <div className="w-16 h-16 bg-purple-gradient rounded-xl mb-6 mx-auto flex items-center justify-center">
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
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-technum-text-dark mb-4">
          Web Development
        </h3>
        <p className="text-technum-text-medium">
          Custom web applications built with modern frameworks and best
          practices.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow duration-300">
        <div className="w-16 h-16 bg-purple-gradient rounded-xl mb-6 mx-auto flex items-center justify-center">
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
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-technum-text-dark mb-4">
          Mobile Apps
        </h3>
        <p className="text-technum-text-medium">
          Native and cross-platform mobile applications for iOS and Android.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow duration-300">
        <div className="w-16 h-16 bg-purple-gradient rounded-xl mb-6 mx-auto flex items-center justify-center">
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
        <h3 className="text-xl font-semibold text-technum-text-dark mb-4">
          Cloud Solutions
        </h3>
        <p className="text-technum-text-medium">
          Scalable cloud infrastructure and deployment strategies for your
          applications.
        </p>
      </div>
    </div>
  </div>
);

export const TwoColumnGrid = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-technum-text-dark mb-6">
        Why Choose Technum Opus
      </h2>
      <p className="text-lg text-technum-text-medium mb-6">
        With years of experience in the technology industry, we bring expertise,
        innovation, and dedication to every project we undertake.
      </p>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 bg-purple-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg
              className="w-3 h-3 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-technum-text-dark">
              Expert Team
            </h4>
            <p className="text-technum-text-medium">
              Highly skilled professionals with proven track records
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-6 h-6 bg-purple-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg
              className="w-3 h-3 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-technum-text-dark">
              Quality Assurance
            </h4>
            <p className="text-technum-text-medium">
              Rigorous testing and quality control processes
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-6 h-6 bg-purple-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg
              className="w-3 h-3 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-technum-text-dark">
              24/7 Support
            </h4>
            <p className="text-technum-text-medium">
              Round-the-clock assistance and maintenance
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="relative">
      <div className="aspect-square bg-hero-gradient rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-purple-gradient opacity-10 rounded-2xl" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg
                className="w-12 h-12 text-technum-purple"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-technum-text-dark mb-2">
              Innovation First
            </h3>
            <p className="text-technum-text-medium">
              Cutting-edge solutions for tomorrow's challenges
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
