import React from 'react';
import SecondaryNav from '../components/common/SecondaryNav';
import AppCard from '../components/home/AppCard';
import DisclaimerBanner from '../components/common/DisclaimerBanner';
import { APPS_DATA } from '../data/apps';
import { Sparkles, Calendar, Zap, ShieldCheck } from 'lucide-react';

export default function NewAppsPage() {
  const newApps = APPS_DATA.filter((app) => app.isNew);

  return (
    <div className="min-h-screen bg-bg-dark text-white">
      <SecondaryNav />

      {/* Hero Banner */}
      <div className="py-12 bg-gradient-to-b from-bg-secondary via-[#0D0D0D] to-bg-dark border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>2026 RELEASES & UPDATES</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-black text-white">
            New Gaming <span className="gold-gradient-text">Apps & Updates</span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto mt-2">
            Recently indexed applications with the latest patch updates, security verifications, and updated feature sets.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Info Box */}
        <div className="flex items-center gap-3 p-4 rounded-2xl bg-neutral-900/80 border border-gold/20 mb-8 text-xs sm:text-sm text-neutral-300">
          <Zap className="w-5 h-5 text-gold shrink-0" />
          <span>
            <strong>Recent Index Log:</strong> All applications listed below have received major version updates or initial releases in 2026 with verified SHA-256 package signatures.
          </span>
        </div>

        {/* Cards List */}
        <div className="flex flex-col gap-3.5 mb-10">
          {newApps.map((app, index) => (
            <AppCard key={app.id} app={app} index={index + 1} viewMode="list" />
          ))}
        </div>

        <DisclaimerBanner />

      </div>
    </div>
  );
}
