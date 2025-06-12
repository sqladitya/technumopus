import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100/50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 bg-gradient-to-br from-tech-primary/10 via-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-tech-text-dark mb-4 sm:mb-6">
              Terms of Service
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-tech-text-medium max-w-3xl mx-auto px-4">
              Terms and conditions for using Technum{" "}
              <span className="text-tech-primary">Opus</span> services
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
                Agreement to Terms
              </h2>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                These Terms of Service ("Terms") govern your use of the Technum{" "}
                <span className="text-tech-primary">Opus</span> website and
                services operated by Technum Opus ("we," "us," or "our"). By
                accessing or using our services, you agree to be bound by these
                Terms.
              </p>
              <p className="text-tech-text-medium leading-relaxed">
                If you disagree with any part of these Terms, then you may not
                access our services. These Terms apply to all visitors, users,
                and others who access or use our services.
              </p>
            </div>

            {/* Definitions */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-tech-text-dark mb-6 border-l-4 border-tech-primary pl-6">
                Definitions
              </h2>
              <ul className="list-disc pl-6 mb-6 text-tech-text-medium space-y-3">
                <li>
                  <strong>"Service"</strong> refers to the website,
                  applications, and services provided by Technum Opus
                </li>
                <li>
                  <strong>"User," "you," or "your"</strong> refers to the
                  individual accessing or using the Service
                </li>
                <li>
                  <strong>"Company," "we," "us," or "our"</strong> refers to
                  Technum Opus
                </li>
                <li>
                  <strong>"Content"</strong> refers to all text, data,
                  information, software, graphics, or other materials
                </li>
                <li>
                  <strong>"Professional Services"</strong> refers to consulting,
                  development, and technical services provided by us
                </li>
              </ul>
            </div>

            {/* Use of Services */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-tech-text-dark mb-6 border-l-4 border-tech-primary pl-6">
                Use of Our Services
              </h2>

              <h3 className="text-xl font-semibold text-tech-text-dark mb-4">
                Permitted Use
              </h3>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                You may use our services for lawful business purposes in
                accordance with these Terms. Our services include:
              </p>
              <ul className="list-disc pl-6 mb-6 text-tech-text-medium space-y-2">
                <li>SAP Consulting and Implementation</li>
                <li>SaaS Development and Cloud Architecture</li>
                <li>Hardware Infrastructure Solutions</li>
                <li>Digital Transformation Services</li>
                <li>Technical Support and Maintenance</li>
                <li>Training and Educational Resources</li>
              </ul>

              <h3 className="text-xl font-semibold text-tech-text-dark mb-4">
                Prohibited Use
              </h3>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                You agree not to use our services:
              </p>
              <ul className="list-disc pl-6 mb-6 text-tech-text-medium space-y-2">
                <li>
                  For any unlawful purpose or in violation of applicable laws
                </li>
                <li>
                  To transmit harmful, offensive, or inappropriate content
                </li>
                <li>
                  To interfere with or disrupt the security of our services
                </li>
                <li>To attempt unauthorized access to our systems</li>
                <li>To reverse engineer or attempt to extract source code</li>
                <li>
                  To compete with or create derivative works from our services
                </li>
                <li>To violate intellectual property rights</li>
              </ul>
            </div>

            {/* Professional Services */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-tech-text-dark mb-6 border-l-4 border-tech-primary pl-6">
                Professional Services Agreement
              </h2>

              <h3 className="text-xl font-semibold text-tech-text-dark mb-4">
                Service Delivery
              </h3>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                Our professional services are provided according to separate
                statements of work (SOW) or service agreements that specify:
              </p>
              <ul className="list-disc pl-6 mb-6 text-tech-text-medium space-y-2">
                <li>Scope of work and deliverables</li>
                <li>Timeline and milestones</li>
                <li>Payment terms and pricing</li>
                <li>Roles and responsibilities</li>
                <li>Acceptance criteria and testing procedures</li>
              </ul>

              <h3 className="text-xl font-semibold text-tech-text-dark mb-4">
                Client Responsibilities
              </h3>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                You agree to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-tech-text-medium space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Cooperate with our team and provide timely feedback</li>
                <li>Grant necessary access to systems and resources</li>
                <li>Pay invoices according to agreed terms</li>
                <li>Comply with security and confidentiality requirements</li>
              </ul>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-tech-text-dark mb-6 border-l-4 border-tech-primary pl-6">
                Payment Terms
              </h2>

              <h3 className="text-xl font-semibold text-tech-text-dark mb-4">
                Fees and Billing
              </h3>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                Payment terms are specified in individual service agreements.
                Generally:
              </p>
              <ul className="list-disc pl-6 mb-6 text-tech-text-medium space-y-2">
                <li>Invoices are due within 30 days of receipt</li>
                <li>Late payments may incur interest charges</li>
                <li>
                  We reserve the right to suspend services for non-payment
                </li>
                <li>All fees are non-refundable unless otherwise specified</li>
                <li>You are responsible for applicable taxes</li>
              </ul>

              <h3 className="text-xl font-semibold text-tech-text-dark mb-4">
                Expenses
              </h3>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                You may be responsible for reimbursing reasonable expenses
                incurred in providing services, including travel, accommodation,
                and third-party software licenses, as agreed in writing.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-tech-text-dark mb-6 border-l-4 border-tech-primary pl-6">
                Intellectual Property Rights
              </h2>

              <h3 className="text-xl font-semibold text-tech-text-dark mb-4">
                Our IP Rights
              </h3>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                All intellectual property rights in our services, including
                software, methodologies, processes, and documentation, remain
                our exclusive property or that of our licensors.
              </p>

              <h3 className="text-xl font-semibold text-tech-text-dark mb-4">
                Client IP Rights
              </h3>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                You retain ownership of your pre-existing intellectual property.
                Custom work products created specifically for you will be
                governed by the terms of your service agreement.
              </p>

              <h3 className="text-xl font-semibold text-tech-text-dark mb-4">
                License Grant
              </h3>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                Subject to these Terms and payment of applicable fees, we grant
                you a limited, non-exclusive, non-transferable license to use
                our services solely for your internal business purposes.
              </p>
            </div>

            {/* Confidentiality */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-tech-text-dark mb-6 border-l-4 border-tech-primary pl-6">
                Confidentiality
              </h2>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                Both parties acknowledge that they may have access to
                confidential information. We agree to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-tech-text-medium space-y-2">
                <li>
                  Maintain the confidentiality of your proprietary information
                </li>
                <li>
                  Use confidential information only for providing services
                </li>
                <li>Implement appropriate security measures</li>
                <li>Return or destroy confidential information upon request</li>
                <li>Sign separate non-disclosure agreements when required</li>
              </ul>
            </div>

            {/* Warranties and Disclaimers */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-tech-text-dark mb-6 border-l-4 border-tech-primary pl-6">
                Warranties and Disclaimers
              </h2>

              <h3 className="text-xl font-semibold text-tech-text-dark mb-4">
                Our Warranties
              </h3>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                We warrant that our services will be performed in a professional
                and workmanlike manner in accordance with industry standards. We
                will re-perform services that fail to meet this standard at no
                additional charge.
              </p>

              <h3 className="text-xl font-semibold text-tech-text-dark mb-4">
                Disclaimers
              </h3>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                EXCEPT AS EXPRESSLY STATED, OUR SERVICES ARE PROVIDED "AS IS"
                WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED,
                INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                NON-INFRINGEMENT.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-tech-text-dark mb-6 border-l-4 border-tech-primary pl-6">
                Limitation of Liability
              </h2>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY
                ARISING FROM OR RELATED TO THESE TERMS OR OUR SERVICES SHALL NOT
                EXCEED THE AMOUNT PAID BY YOU FOR THE SPECIFIC SERVICE GIVING
                RISE TO THE CLAIM DURING THE 12 MONTHS PRECEDING THE CLAIM.
              </p>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT
                LIMITED TO LOSS OF PROFITS, DATA, OR USE, REGARDLESS OF THE
                THEORY OF LIABILITY.
              </p>
            </div>

            {/* Indemnification */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-tech-text-dark mb-6 border-l-4 border-tech-primary pl-6">
                Indemnification
              </h2>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                You agree to indemnify and hold us harmless from any claims,
                damages, or expenses arising from:
              </p>
              <ul className="list-disc pl-6 mb-6 text-tech-text-medium space-y-2">
                <li>Your use of our services in violation of these Terms</li>
                <li>Your breach of any representation or warranty</li>
                <li>Your violation of applicable laws or regulations</li>
                <li>Your infringement of third-party rights</li>
                <li>Your negligent or wrongful acts</li>
              </ul>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-tech-text-dark mb-6 border-l-4 border-tech-primary pl-6">
                Termination
              </h2>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                Either party may terminate these Terms or any service agreement:
              </p>
              <ul className="list-disc pl-6 mb-6 text-tech-text-medium space-y-2">
                <li>For convenience with 30 days' written notice</li>
                <li>
                  Immediately for material breach that is not cured within 10
                  days
                </li>
                <li>Immediately for insolvency or bankruptcy</li>
                <li>As specified in individual service agreements</li>
              </ul>
              <p className="text-tech-text-medium leading-relaxed">
                Upon termination, your right to use our services ceases
                immediately, and you must pay all outstanding fees.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-tech-text-dark mb-6 border-l-4 border-tech-primary pl-6">
                Governing Law and Dispute Resolution
              </h2>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                These Terms are governed by and construed in accordance with the
                laws of the State of [State], without regard to conflict of law
                principles. Any disputes arising from these Terms will be
                resolved through binding arbitration in accordance with the
                rules of the American Arbitration Association.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-tech-text-dark mb-6 border-l-4 border-tech-primary pl-6">
                Changes to Terms
              </h2>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will
                notify you of any changes by posting the new Terms on this page
                and updating the "Last updated" date. Your continued use of our
                services after such changes constitutes acceptance of the new
                Terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-tech-text-dark mb-6 border-l-4 border-tech-primary pl-6">
                Contact Information
              </h2>
              <p className="text-tech-text-medium mb-4 leading-relaxed">
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-tech-text-medium mb-2">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:legal@technumopus.com"
                    className="text-tech-primary hover:underline"
                  >
                    legal@technumopus.com
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

export default TermsOfService;
