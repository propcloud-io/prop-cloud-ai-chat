
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-gray-400 text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-teal-400 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  By accessing and using PropCloud's services, you accept and agree to be bound by the terms and 
                  provision of this agreement. Our platform provides AI-powered property management solutions 
                  designed to optimize your real estate investments.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-teal-400 mb-4">2. Service Description</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  PropCloud offers:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>AI-powered property management tools</li>
                  <li>Revenue optimization analytics</li>
                  <li>Automated guest communication</li>
                  <li>Property performance insights</li>
                  <li>Calendar and booking management</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-teal-400 mb-4">3. User Responsibilities</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  As a user of PropCloud, you agree to:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Provide accurate and complete information about your properties</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Use the service only for legitimate property management purposes</li>
                  <li>Respect the intellectual property rights of PropCloud</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-teal-400 mb-4">4. Data and Privacy</h2>
                <p className="text-gray-300 leading-relaxed">
                  We take your privacy seriously. Your property data and personal information are protected 
                  according to our Privacy Policy. We use advanced security measures to safeguard your 
                  information and will never sell your data to third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-teal-400 mb-4">5. Payment Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  Subscription fees are billed according to your chosen plan. All fees are non-refundable 
                  except as required by law. We reserve the right to modify pricing with 30 days notice 
                  to existing subscribers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-teal-400 mb-4">6. Limitation of Liability</h2>
                <p className="text-gray-300 leading-relaxed">
                  PropCloud provides tools and insights to assist with property management decisions. 
                  However, we are not responsible for business outcomes, property performance, or 
                  investment results. Users make final decisions based on our recommendations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-teal-400 mb-4">7. Termination</h2>
                <p className="text-gray-300 leading-relaxed">
                  Either party may terminate this agreement at any time. Upon termination, your access 
                  to the service will cease, and we will provide a reasonable period for you to export 
                  your data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-teal-400 mb-4">8. Changes to Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may update these terms from time to time. Users will be notified of significant 
                  changes via email or through the platform. Continued use of the service constitutes 
                  acceptance of updated terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-teal-400 mb-4">9. Contact Information</h2>
                <p className="text-gray-300 leading-relaxed">
                  For questions about these Terms of Service, please contact us at:
                  <br />
                  Email: legal@propcloud.com
                  <br />
                  Address: [Your Business Address]
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

export default Terms;
