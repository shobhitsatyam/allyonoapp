import React from 'react';
import SecondaryNav from '../components/common/SecondaryNav';
import DisclaimerBanner from '../components/common/DisclaimerBanner';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-bg-dark text-white pb-16">
      <SecondaryNav />

      <div className="py-12 bg-gradient-to-b from-bg-secondary via-[#0D0D0D] to-bg-dark border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-display font-black text-white">
            Terms & <span className="gold-gradient-text">Conditions</span>
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 mt-2">
            Last Updated: August 2026 • AllyonoApp.app
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6 text-sm text-neutral-300 leading-relaxed">
        
        <div className="p-6 sm:p-8 rounded-2xl bg-[#111111] border border-neutral-800 space-y-4">
          <h2 className="font-display font-bold text-lg text-white">1. Informational Scope & Purpose</h2>
          <p>
            By accessing or utilizing <strong>AllyonoApp.app</strong>, you acknowledge and agree that all content, reviews, rankings, specification charts, and guides provided herein are solely for general informational, educational, and cataloging purposes.
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-[#111111] border border-neutral-800 space-y-4">
          <h2 className="font-display font-bold text-lg text-white">2. User Responsibility & Age Criteria</h2>
          <p>
            Users must be at least 18 years of age (or the legal age of majority in their jurisdiction) to engage with digital gaming applications. Users bear the sole responsibility for verifying the legal status of digital card and skill gaming in their respective state or province before installing any third-party app.
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-[#111111] border border-neutral-800 space-y-4">
          <h2 className="font-display font-bold text-lg text-white">3. Intellectual Property Notice</h2>
          <p>
            All third-party brand names, logos, app titles, and package identifiers referenced on this website are the property of their respective trademark holders. AllyonoApp.app claims no ownership or exclusive association with any featured applications.
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-[#111111] border border-neutral-800 space-y-4">
          <h2 className="font-display font-bold text-lg text-white">4. Limitation of Liability</h2>
          <p>
            Under no circumstances shall AllyonoApp.app, its editors, or affiliates be liable for any direct, indirect, or consequential damages resulting from the use or inability to use third-party applications cataloged on this platform.
          </p>
        </div>

        <DisclaimerBanner compact={true} />

      </div>
    </div>
  );
}
