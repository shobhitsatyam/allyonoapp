import React from 'react';
import SecondaryNav from '../components/common/SecondaryNav';
import DisclaimerBanner from '../components/common/DisclaimerBanner';
import { ShieldCheck, BookOpen, Search, Eye, Users, Sparkles, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg-dark text-white pb-16">
      <SecondaryNav />

      {/* Hero Banner */}
      <div className="py-12 bg-gradient-to-b from-bg-secondary via-[#0D0D0D] to-bg-dark border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold tracking-widest uppercase mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>MISSION & PRINCIPLES</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-black text-white">
            About <span className="gold-gradient-text">AllyonoApp.app</span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto mt-2">
            An independent, research-oriented directory dedicated to transparency, safety verification, and educational guides for digital gaming applications.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        
        {/* Core Mission */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#111111] border border-neutral-800 space-y-4">
          <h2 className="text-xl sm:text-2xl font-display font-bold text-white flex items-center gap-2">
            <span className="w-2 h-6 bg-gold rounded-full" />
            <span>Our Primary Mission</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            The mobile gaming landscape in India and worldwide features thousands of card, slot, and arcade applications. However, players frequently encounter misleading promotional claims, cloned APK files, and opaque permission requests.
          </p>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            <strong>AllyonoApp.app</strong> was built to provide an objective, neutral, and educational repository. We index application versions, analyze requested Android permissions, demystify random number generator (RNG) standards, and promote healthy, responsible gaming habits.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-[#121212] border border-neutral-800 text-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-gold/15 border border-gold/30 text-gold flex items-center justify-center mx-auto">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white text-base">Objectivity</h3>
            <p className="text-xs text-neutral-400">
              Zero paid puffery. We present factual specifications, package hashes, and permission checklists.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121212] border border-neutral-800 text-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white text-base">Safety First</h3>
            <p className="text-xs text-neutral-400">
              We educate users to identify genuine applications and avoid invasive or cloned APK packages.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121212] border border-neutral-800 text-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-gold/15 border border-gold/30 text-gold flex items-center justify-center mx-auto">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white text-base">Education</h3>
            <p className="text-xs text-neutral-400">
              Clear rules, mechanics, volatility guides, and responsible self-regulation strategies.
            </p>
          </div>
        </div>

        {/* Editorial Standards */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#111111] border border-neutral-800 space-y-4">
          <h2 className="text-xl sm:text-2xl font-display font-bold text-white flex items-center gap-2">
            <span className="w-2 h-6 bg-gold rounded-full" />
            <span>Editorial & Verification Standards</span>
          </h2>
          <ul className="space-y-3 text-xs sm:text-sm text-neutral-300">
            <li className="flex items-start gap-2.5">
              <span className="text-gold font-bold">1.</span>
              <span><strong>No Promotional Financial Claims:</strong> We strictly refrain from using deceptive slogans such as "guaranteed earnings", "100% win", or "fast wealth".</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-gold font-bold">2.</span>
              <span><strong>No APK Hosting:</strong> We do not store or host copyrighted installation binaries. Users are advised to utilize official verified endpoints.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-gold font-bold">3.</span>
              <span><strong>Independent Audits:</strong> Our staff independently verifies developer credentials, package signatures, and SSL certificates before updating listings.</span>
            </li>
          </ul>
        </div>

        <DisclaimerBanner />

      </div>
    </div>
  );
}
