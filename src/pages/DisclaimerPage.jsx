import React from 'react';
import SecondaryNav from '../components/common/SecondaryNav';
import DisclaimerBanner from '../components/common/DisclaimerBanner';
import { ShieldAlert, AlertTriangle, Scale, HeartHandshake, FileCheck } from 'lucide-react';

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-bg-dark text-white pb-16">
      <SecondaryNav />

      {/* Hero Banner */}
      <div className="py-12 bg-gradient-to-b from-bg-secondary via-[#0D0D0D] to-bg-dark border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold tracking-widest uppercase mb-3">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>LEGAL & COMPLIANCE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-black text-white">
            Legal & Compliance <span className="gold-gradient-text">Disclaimer</span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto mt-2">
            Please read this notice carefully before browsing or utilizing information on AllyonoApp.app.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 text-sm text-neutral-300 leading-relaxed">
        
        {/* Core Statement */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#111111] border border-gold/40 space-y-4">
          <div className="flex items-center gap-3">
            <Scale className="w-6 h-6 text-gold" />
            <h2 className="font-display font-extrabold text-xl text-white">
              1. Informational Directory Status
            </h2>
          </div>
          <p>
            <strong>AllyonoApp.app</strong> is an independent digital media and informational directory website. We are <strong>NOT</strong> a gambling operator, gaming provider, bookmaker, or financial intermediary. We do not accept bets, host APK binary files, process financial transactions, manage player deposits, or execute payouts.
          </p>
          <p>
            All content published on this website—including application specifications, category descriptions, technical requirements, and how-to-play guides—is compiled purely for educational, comparative, and informational identification under nominative fair use principles.
          </p>
        </div>

        {/* Zero Financial Claims */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#111111] border border-neutral-800 space-y-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-400" />
            <h2 className="font-display font-extrabold text-xl text-white">
              2. Absolute Prohibition of Guaranteed Returns
            </h2>
          </div>
          <p>
            AllyonoApp.app does <strong>NOT</strong> endorse, validate, or make claims regarding guaranteed earnings, assured profits, algorithmic hacks, or 100% win strategies. Digital gaming applications involve financial risk and elements of unpredictability. Users should never play with money they cannot afford to lose.
          </p>
        </div>

        {/* Regional Jurisdictions */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#111111] border border-neutral-800 space-y-4">
          <div className="flex items-center gap-3">
            <FileCheck className="w-6 h-6 text-gold" />
            <h2 className="font-display font-extrabold text-xl text-white">
              3. Jurisdictional & Territorial Compliance (India)
            </h2>
          </div>
          <p>
            In the Republic of India, the legality of skill games and digital gaming platforms varies across state jurisdictions. Several states (including Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana) enforce specific state regulations restricting certain online gaming formats.
          </p>
          <p>
            It is the individual user's sole duty to verify and adhere to their local state laws before interacting with or downloading any third-party gaming client.
          </p>
        </div>

        {/* 18+ and Health */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#111111] border border-neutral-800 space-y-4">
          <div className="flex items-center gap-3">
            <HeartHandshake className="w-6 h-6 text-emerald-400" />
            <h2 className="font-display font-extrabold text-xl text-white">
              4. Strict 18+ Age Requirement & Health Advisory
            </h2>
          </div>
          <p>
            Real-money gaming applications are restricted strictly to persons of 18 years of age or older. Mobile gaming should remain a recreational pastime. If you or someone you know exhibits symptoms of gaming-related distress, seek assistance from certified counselors or national helplines immediately.
          </p>
        </div>

        <DisclaimerBanner />

      </div>
    </div>
  );
}
