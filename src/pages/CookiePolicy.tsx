import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100/50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 bg-gradient-to-br from-tech-primary/10 via-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-tech-text-dark mb-4 sm:mb-6">
              Cookie Policy
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-tech-text-medium max-w-3xl mx-auto px-4">
              How Technum <span className="text-tech-primary">Opus</span> uses
              cookies and tracking technologies
            </p>
            <div className="mt-6 text-sm text-tech-text-medium">
              <p>Last updated: January 1, 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-tech-text-dark mb-6 border-l-4 border-tech-primary pl-6">
                What Are Cookies
              </h2>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                Cookies are small text files that are placed on your device
                (computer, smartphone, or tablet) when you visit our website.
                They are widely used to make websites work more efficiently and
                to provide information to website owners about how users
                interact with their sites.
              </p>
              <p className="text-tech-text-medium leading-relaxed">
                This Cookie Policy explains how Technum{" "}
                <span className="text-tech-primary">Opus</span> uses cookies and
                similar technologies on our website, what information they
                collect, and how you can manage your cookie preferences.
              </p>
            </div>

            {/* How We Use Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-tech-text-dark mb-6 border-l-4 border-tech-primary pl-6">
                How We Use Cookies
              </h2>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                We use cookies for several purposes to enhance your browsing
                experience and improve our services:
              </p>
              <ul className="list-disc pl-6 mb-6 text-tech-text-medium space-y-2">
                <li>To ensure our website functions properly and securely</li>
                <li>To remember your preferences and settings</li>
                <li>To analyze website traffic and usage patterns</li>
                <li>To personalize content and advertisements</li>
                <li>To provide social media features</li>
                <li>To improve our services and user experience</li>
                <li>To prevent fraud and enhance security</li>
              </ul>
            </div>

            {/* Types of Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-tech-text-dark mb-6 border-l-4 border-tech-primary pl-6">
                Types of Cookies We Use
              </h2>

              <h3 className="text-xl font-semibold text-tech-text-dark mb-4">
                Essential Cookies
              </h3>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                These cookies are necessary for the website to function
                properly. They enable basic functions like page navigation,
                access to secure areas, and form submissions. The website cannot
                function properly without these cookies.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-sm text-tech-text-medium">
                  <strong>Examples:</strong> Session management, security
                  tokens, load balancing, content delivery network settings
                </p>
              </div>

              <h3 className="text-xl font-semibold text-tech-text-dark mb-4">
                Performance and Analytics Cookies
              </h3>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                These cookies collect information about how visitors use our
                website, such as which pages are visited most often and if they
                get error messages. This information helps us improve the
                performance and user experience of our website.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-sm text-tech-text-medium">
                  <strong>Examples:</strong> Google Analytics, page load times,
                  error tracking, user journey analysis
                </p>
              </div>

              <h3 className="text-xl font-semibold text-tech-text-dark mb-4">
                Functional Cookies
              </h3>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                These cookies allow the website to remember choices you make and
                provide enhanced, more personal features. They may be set by us
                or by third-party providers whose services we have added to our
                pages.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-sm text-tech-text-medium">
                  <strong>Examples:</strong> Language preferences, region
                  settings, chat widget preferences, form auto-fill
                </p>
              </div>

              <h3 className="text-xl font-semibold text-tech-text-dark mb-4">
                Marketing and Advertising Cookies
              </h3>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                These cookies are used to deliver advertisements more relevant
                to you and your interests. They may also be used to limit the
                number of times you see an advertisement and help measure the
                effectiveness of advertising campaigns.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-sm text-tech-text-medium">
                  <strong>Examples:</strong> Google Ads, LinkedIn Ads, Facebook
                  Pixel, retargeting campaigns
                </p>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-tech-text-dark mb-6 border-l-4 border-tech-primary pl-6">
                Third-Party Cookies and Services
              </h2>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                We work with trusted third-party services that may place cookies
                on your device. These services help us provide better
                functionality and understand how our website is being used.
              </p>

              <h3 className="text-xl font-semibold text-tech-text-dark mb-4">
                Analytics Services
              </h3>
              <ul className="list-disc pl-6 mb-6 text-tech-text-medium space-y-2">
                <li>
                  <strong>Google Analytics:</strong> Web analytics service to
                  understand user behavior
                </li>
                <li>
                  <strong>Google Tag Manager:</strong> Tag management system for
                  tracking codes
                </li>
                <li>
                  <strong>Hotjar:</strong> User behavior analytics and feedback
                  tools
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-tech-text-dark mb-4">
                Marketing and Social Media
              </h3>
              <ul className="list-disc pl-6 mb-6 text-tech-text-medium space-y-2">
                <li>
                  <strong>Google Ads:</strong> Advertising platform for targeted
                  advertisements
                </li>
                <li>
                  <strong>LinkedIn:</strong> Professional networking and
                  business advertising
                </li>
                <li>
                  <strong>Facebook/Meta:</strong> Social media integration and
                  advertising
                </li>
                <li>
                  <strong>Twitter:</strong> Social media sharing and advertising
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-tech-text-dark mb-4">
                Communication Tools
              </h3>
              <ul className="list-disc pl-6 mb-6 text-tech-text-medium space-y-2">
                <li>
                  <strong>Intercom/Live Chat:</strong> Customer support and
                  communication
                </li>
                <li>
                  <strong>Calendly:</strong> Meeting scheduling integration
                </li>
                <li>
                  <strong>HubSpot:</strong> Customer relationship management
                </li>
              </ul>
            </div>

            {/* Cookie Duration */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-tech-text-dark mb-6 border-l-4 border-tech-primary pl-6">
                Cookie Duration
              </h2>

              <h3 className="text-xl font-semibold text-tech-text-dark mb-4">
                Session Cookies
              </h3>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                These cookies are temporary and are deleted when you close your
                browser. They are essential for the website to function during
                your visit.
              </p>

              <h3 className="text-xl font-semibold text-tech-text-dark mb-4">
                Persistent Cookies
              </h3>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                These cookies remain on your device for a set period or until
                you delete them. The duration varies depending on the purpose:
              </p>
              <ul className="list-disc pl-6 mb-6 text-tech-text-medium space-y-2">
                <li>
                  <strong>Preference cookies:</strong> 1-12 months
                </li>
                <li>
                  <strong>Analytics cookies:</strong> 1-24 months
                </li>
                <li>
                  <strong>Marketing cookies:</strong> 1-24 months
                </li>
                <li>
                  <strong>Security cookies:</strong> Session to 30 days
                </li>
              </ul>
            </div>

            {/* Managing Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-tech-text-dark mb-6 border-l-4 border-tech-primary pl-6">
                Managing Your Cookie Preferences
              </h2>

              <h3 className="text-xl font-semibold text-tech-text-dark mb-4">
                Browser Settings
              </h3>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                Most web browsers allow you to control cookies through their
                settings. You can:
              </p>
              <ul className="list-disc pl-6 mb-6 text-tech-text-medium space-y-2">
                <li>View and delete existing cookies</li>
                <li>Block third-party cookies</li>
                <li>Block all cookies from specific sites</li>
                <li>Block all cookies entirely</li>
                <li>Delete all cookies when you close your browser</li>
              </ul>

              <h3 className="text-xl font-semibold text-tech-text-dark mb-4">
                Browser-Specific Instructions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-tech-text-dark mb-2">
                    Google Chrome
                  </h4>
                  <p className="text-sm text-tech-text-medium">
                    Settings → Privacy and security → Cookies and other site
                    data
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-tech-text-dark mb-2">
                    Mozilla Firefox
                  </h4>
                  <p className="text-sm text-tech-text-medium">
                    Options → Privacy & Security → Cookies and Site Data
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-tech-text-dark mb-2">
                    Safari
                  </h4>
                  <p className="text-sm text-tech-text-medium">
                    Preferences → Privacy → Manage Website Data
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-tech-text-dark mb-2">
                    Microsoft Edge
                  </h4>
                  <p className="text-sm text-tech-text-medium">
                    Settings → Cookies and site permissions → Cookies and site
                    data
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-tech-text-dark mb-4">
                Opt-Out Links
              </h3>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                You can opt out of specific third-party cookies using these
                links:
              </p>
              <ul className="list-disc pl-6 mb-6 text-tech-text-medium space-y-2">
                <li>
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    className="text-tech-primary hover:underline"
                  >
                    Google Analytics Opt-out
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/settings?tab=ads"
                    className="text-tech-primary hover:underline"
                  >
                    Facebook Ad Preferences
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out"
                    className="text-tech-primary hover:underline"
                  >
                    LinkedIn Opt-out
                  </a>
                </li>
                <li>
                  <a
                    href="http://optout.aboutads.info/"
                    className="text-tech-primary hover:underline"
                  >
                    Digital Advertising Alliance Opt-out
                  </a>
                </li>
              </ul>
            </div>

            {/* Impact of Disabling Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-tech-text-dark mb-6 border-l-4 border-tech-primary pl-6">
                Impact of Disabling Cookies
              </h2>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                While you have the right to disable cookies, please note that
                doing so may affect your experience on our website:
              </p>
              <ul className="list-disc pl-6 mb-6 text-tech-text-medium space-y-2">
                <li>Some features may not work properly or at all</li>
                <li>
                  You may need to re-enter information or preferences on each
                  visit
                </li>
                <li>Content personalization will be limited</li>
                <li>We won't be able to remember your login status</li>
                <li>Form submissions may not function correctly</li>
                <li>Security features may be compromised</li>
              </ul>
            </div>

            {/* Local Storage and Other Technologies */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-tech-text-dark mb-6 border-l-4 border-tech-primary pl-6">
                Other Tracking Technologies
              </h2>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                In addition to cookies, we may use other technologies to collect
                information:
              </p>

              <h3 className="text-xl font-semibold text-tech-text-dark mb-4">
                Local Storage
              </h3>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                HTML5 local storage allows websites to store data locally within
                your browser, similar to cookies but with larger storage
                capacity.
              </p>

              <h3 className="text-xl font-semibold text-tech-text-dark mb-4">
                Web Beacons/Pixels
              </h3>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                Small transparent images used to track user behavior and measure
                the effectiveness of our marketing campaigns.
              </p>

              <h3 className="text-xl font-semibold text-tech-text-dark mb-4">
                Server Logs
              </h3>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                Our servers automatically collect certain information about your
                visit, including IP address, browser type, and pages visited.
              </p>
            </div>

            {/* Updates to Policy */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-tech-text-dark mb-6 border-l-4 border-tech-primary pl-6">
                Updates to This Policy
              </h2>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. We will notify you of any material changes
                by posting the updated policy on our website and updating the
                "Last updated" date.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-tech-text-dark mb-6 border-l-4 border-tech-primary pl-6">
                Contact Us
              </h2>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                If you have any questions about this Cookie Policy or our use of
                cookies, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-tech-text-medium mb-2">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:privacy@technumopus.com"
                    className="text-tech-primary hover:underline"
                  >
                    privacy@technumopus.com
                  </a>
                </p>
                <p className="text-tech-text-medium mb-2">
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:+15551234567"
                    className="text-tech-primary hover:underline"
                  >
                    +1 (555) 123-4567
                  </a>
                </p>
                <p className="text-tech-text-medium mb-2">
                  <strong>Address:</strong> 123 Tech Street, Innovation
                  District, Tech City 12345
                </p>
                <p className="text-tech-text-medium">
                  <strong>Business Hours:</strong> Monday - Friday, 9:00 AM -
                  6:00 PM EST
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
