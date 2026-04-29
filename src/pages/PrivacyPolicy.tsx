import React from 'react';
import { SEO } from '../components/layout/SEO';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <SEO title="Privacy Policy" description="Privacy Policy for TaskOps Solutions. Learn how we handle and protect your data." />
      <div className="pt-32 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black text-gray-900 mb-8 border-b pb-4">Privacy Policy</h1>
          <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
            <p className="text-sm text-gray-400">Last Updated: April 29, 2026</p>
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <p>We collect information that you provide directly to us, such as when you create an account, request a quote, or communicate with us. This may include your name, email address, phone number, and company details.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to provide, maintain, and improve our services, to communicate with you about projects, and to send you technical notices, updates, and support messages.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Security</h2>
              <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at tasksopssolutionpvtltd@gmail.com.</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
