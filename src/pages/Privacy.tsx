
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-400 text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-teal-400 mb-4">1. Introduction</h2>
                <p className="text-gray-300 leading-relaxed">
                  PropCloud ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                  explains how we collect, use, disclose, and safeguard your information when you use our 
                  AI-powered property management platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-teal-400 mb-4">2. Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">Personal Information</h3>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1">
                      <li>Name and contact information</li>
                      <li>Email address and phone number</li>
                      <li>Payment and billing information</li>
                      <li>Property ownership details</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">Property Data</h3>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1">
                      <li>Property locations and descriptions</li>
                      <li>Booking and reservation data</li>
                      <li>Revenue and occupancy metrics</li>
                      <li>Guest communication records</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">Technical Information</h3>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1">
                      <li>Device information and IP address</li>
                      <li>Browser type and version</li>
                      <li>Usage patterns and preferences</li>
                      <li>Cookies and similar technologies</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-teal-400 mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We use your information to:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Provide and maintain our property management services</li>
                  <li>Generate AI-powered insights and recommendations</li>
                  <li>Process payments and manage your account</li>
                  <li>Communicate with you about your properties and our services</li>
                  <li>Improve our platform and develop new features</li>
                  <li>Ensure security and prevent fraud</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-teal-400 mb-4">4. Information Sharing</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share 
                  information only in these limited circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and prevent fraud</li>
                  <li>With trusted service providers who assist our operations</li>
                  <li>In connection with business transfers or acquisitions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-teal-400 mb-4">5. Data Security</h2>
                <p className="text-gray-300 leading-relaxed">
                  We implement industry-standard security measures to protect your information, including 
                  encryption, secure servers, and regular security audits. However, no method of transmission 
                  over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-teal-400 mb-4">6. Data Retention</h2>
                <p className="text-gray-300 leading-relaxed">
                  We retain your information for as long as your account is active or as needed to provide 
                  services. We may retain certain information for legitimate business purposes or to comply 
                  with legal obligations, even after account closure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibent text-teal-400 mb-4">7. Your Rights</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your data</li>
                  <li>Object to certain processing activities</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent where applicable</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-teal-400 mb-4">8. Cookies and Tracking</h2>
                <p className="text-gray-300 leading-relaxed">
                  We use cookies and similar technologies to enhance your experience, analyze usage patterns, 
                  and provide personalized content. You can control cookie settings through your browser 
                  preferences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-teal-400 mb-4">9. Children's Privacy</h2>
                <p className="text-gray-300 leading-relaxed">
                  Our service is not intended for children under 18. We do not knowingly collect personal 
                  information from children. If we become aware of such collection, we will take steps to 
                  remove the information promptly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-teal-400 mb-4">10. Changes to This Policy</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may update this Privacy Policy periodically. We will notify you of significant changes 
                  by email or through our platform. Your continued use of our services after changes 
                  constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-teal-400 mb-4">11. Contact Us</h2>
                <p className="text-gray-300 leading-relaxed">
                  For questions about this Privacy Policy or to exercise your rights, contact us at:
                  <br />
                  Email: privacy@propcloud.com
                  <br />
                  Address: [Your Business Address]
                  <br />
                  Phone: [Your Phone Number]
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
