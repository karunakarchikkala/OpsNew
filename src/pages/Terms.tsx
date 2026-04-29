import React from 'react';
import { SEO } from '../components/layout/SEO';

const Terms: React.FC = () => {
  return (
    <>
      <SEO title="Terms of Service" description="Terms of Service for TaskOps Solutions. Please read our terms carefully." />
      <div className="pt-32 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black text-gray-900 mb-8 border-b pb-4">Terms of Service</h1>
          <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
            <p className="text-sm text-gray-400">Last Updated: April 29, 2026</p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using the services of TaskOps Solutions, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services</h2>
              <p>TaskOps Solutions provides software development, cloud solutions, and business automation services. The specific scope of work for any project will be defined in a separate agreement or statement of work.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Intellectual Property</h2>
              <p>Unless otherwise agreed in writing, all software, code, and designs created by TaskOps Solutions remain the intellectual property of TaskOps Solutions until full payment is received.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Limitation of Liability</h2>
              <p>TaskOps Solutions will not be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use our services.</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
