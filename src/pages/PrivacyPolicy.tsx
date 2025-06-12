import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100/50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 bg-gradient-to-br from-tech-primary/10 via-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-tech-text-dark mb-4 sm:mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-tech-text-medium max-w-3xl mx-auto px-4">
              How Technum <span className="text-tech-primary">Opus</span>{" "}
              protects and handles your personal information
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
                Introduction
              </h2>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                At Technum <span className="text-tech-primary">Opus</span>, we
                are committed to protecting your privacy and ensuring the
                security of your personal information. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you visit our website, use our services, or
                interact with us.
              </p>
              <p className="text-tech-text-medium leading-relaxed">
                By using our services, you agree to the collection and use of
                information in accordance with this policy. We will not use or
                share your information with anyone except as described in this
                Privacy Policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-tech-text-dark mb-6 border-l-4 border-tech-primary pl-6">
                Information We Collect
              </h2>

              <h3 className="text-xl font-semibold text-tech-text-dark mb-4">
                Personal Information
              </h3>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                We may collect personally identifiable information that you
                voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 mb-6 text-tech-text-medium space-y-2">
                <li>Register for our services or create an account</li>
                <li>Fill out contact forms or request information</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Participate in surveys or feedback forms</li>
                <li>Apply for employment with us</li>
                <li>Contact us for customer support</li>
              </ul>

              <h3 className="text-xl font-semibold text-tech-text-dark mb-4">
                Usage Data
              </h3>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                We automatically collect certain information when you visit our
                website, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-tech-text-medium space-y-2">
                <li>IP address and geographic location</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on each page</li>
                <li>Referring website or source</li>
                <li>Device information and screen resolution</li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-tech-text-dark mb-6 border-l-4 border-tech-primary pl-6">
                How We Use Your Information
              </h2>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                We use the information we collect for various purposes,
                including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-tech-text-medium space-y-2">
                <li>Providing and maintaining our services</li>
                <li>Processing and fulfilling service requests</li>
                <li>Communicating with you about our services</li>
                <li>Sending administrative information and updates</li>
                <li>Responding to customer service inquiries</li>
                <li>Improving our website and services</li>
                <li>Personalizing your experience</li>
                <li>Detecting and preventing fraud or security incidents</li>
                <li>Complying with legal obligations</li>
                <li>Marketing our services (with your consent)</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-tech-text-dark mb-6 border-l-4 border-tech-primary pl-6">
                Information Sharing and Disclosure
              </h2>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except in the
                following circumstances:
              </p>

              <h3 className="text-xl font-semibold text-tech-text-dark mb-4">
                Service Providers
              </h3>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                We may share your information with trusted third-party service
                providers who assist us in operating our website, conducting our
                business, or servicing you, as long as they agree to keep this
                information confidential.
              </p>

              <h3 className="text-xl font-semibold text-tech-text-dark mb-4">
                Legal Requirements
              </h3>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                We may disclose your information when required by law or in
                response to valid requests by public authorities, such as a
                court or government agency.
              </p>

              <h3 className="text-xl font-semibold text-tech-text-dark mb-4">
                Business Transfers
              </h3>
              <p className="text-tech-text-medium mb-6 leading-relaxed">
                In the event of a merger, acquisition, or sale of assets, your
                personal information may be transferred as part of that
                transaction.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-tech-text-dark mb-6 border-l-4 border-tech-primary pl-6">
                Data Security
              </h2>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. These measures
                include:
              </p>
              <ul className="list-disc pl-6 mb-6 text-tech-text-medium space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and audits</li>
                <li>Access controls and employee training</li>
                <li>Secure hosting and infrastructure</li>
                <li>Regular software updates and patches</li>
              </ul>
              <p className="text-tech-text-medium leading-relaxed">
                However, no method of transmission over the internet or
                electronic storage is 100% secure. While we strive to use
                commercially acceptable means to protect your information, we
                cannot guarantee absolute security.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-tech-text-dark mb-6 border-l-4 border-tech-primary pl-6">
                Data Retention
              </h2>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                We retain your personal information only for as long as
                necessary to fulfill the purposes outlined in this Privacy
                Policy, unless a longer retention period is required or
                permitted by law. When we no longer need your personal
                information, we will securely delete or anonymize it.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-tech-text-dark mb-6 border-l-4 border-tech-primary pl-6">
                Your Rights and Choices
              </h2>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                Depending on your location, you may have certain rights
                regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mb-6 text-tech-text-medium space-y-2">
                <li>
                  <strong>Access:</strong> Request access to your personal
                  information
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate
                  information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  information
                </li>
                <li>
                  <strong>Portability:</strong> Request a copy of your data in a
                  structured format
                </li>
                <li>
                  <strong>Objection:</strong> Object to processing of your
                  personal information
                </li>
                <li>
                  <strong>Restriction:</strong> Request restriction of
                  processing
                </li>
                <li>
                  <strong>Withdrawal:</strong> Withdraw consent where processing
                  is based on consent
                </li>
              </ul>
              <p className="text-tech-text-medium leading-relaxed">
                To exercise these rights, please contact us using the
                information provided in the "Contact Us" section below.
              </p>
            </div>

            {/* Cookies and Tracking */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-tech-text-dark mb-6 border-l-4 border-tech-primary pl-6">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your
                experience on our website. For detailed information about our
                use of cookies, please refer to our{" "}
                <a
                  href="/cookie-policy"
                  className="text-tech-primary hover:underline"
                >
                  Cookie Policy
                </a>
                .
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-tech-text-dark mb-6 border-l-4 border-tech-primary pl-6">
                Third-Party Links
              </h2>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                Our website may contain links to third-party websites or
                services. We are not responsible for the privacy practices or
                content of these third-party sites. We encourage you to read the
                privacy policies of any third-party sites you visit.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-tech-text-dark mb-6 border-l-4 border-tech-primary pl-6">
                Changes to This Privacy Policy
              </h2>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date. We recommend
                reviewing this Privacy Policy periodically for any changes.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-tech-text-dark mb-6 border-l-4 border-tech-primary pl-6">
                Contact Us
              </h2>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                If you have any questions about this Privacy Policy or our
                privacy practices, please contact us:
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

export default PrivacyPolicy;
