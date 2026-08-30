import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SecondaryNav from '../components/common/SecondaryNav';
import DisclaimerBanner from '../components/common/DisclaimerBanner';
import { GUIDES_DATA } from '../data/guides';
import {
  BookOpen,
  ShieldAlert,
  CheckCircle2,
  Layers,
  Lock,
  HeartHandshake,
  Wrench,
  ArrowRight,
  Search,
  Check
} from 'lucide-react';

export default function HowToPlayPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldAlert': return ShieldAlert;
      case 'CheckCircle2': return CheckCircle2;
      case 'Layers': return Layers;
      case 'Lock': return Lock;
      case 'HeartHandshake': return HeartHandshake;
      case 'Wrench': return Wrench;
      default: return BookOpen;
    }
  };

  const filteredGuides = GUIDES_DATA.filter((g) => {
    if (selectedTag !== 'all' && g.category.toLowerCase() !== selectedTag.toLowerCase()) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        g.title.toLowerCase().includes(q) ||
        g.summary.toLowerCase().includes(q) ||
        g.category.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-bg-dark text-white pb-16">
      <SecondaryNav />

      {/* Hero Banner */}
      <div className="py-12 bg-gradient-to-b from-bg-secondary via-[#0D0D0D] to-bg-dark border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold tracking-widest uppercase mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>KNOWLEDGE HUB</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-black text-white">
            How to Play & <span className="gold-gradient-text">App Safety Guides</span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto mt-2">
            Educational tutorials covering game mechanics, Android permission audits, RNG verification, and healthy gaming practices.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Search & Filter Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides, permissions, rules..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 focus:border-gold focus:outline-none text-xs sm:text-sm text-white"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full sm:w-auto">
            {['all', 'Security Awareness', 'Source Verification', 'Game Mechanics', 'Player Well-being'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedTag(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                  selectedTag === cat
                    ? 'bg-gold text-black'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                }`}
              >
                {cat === 'all' ? 'All Guides' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredGuides.map((guide) => {
            const Icon = getIcon(guide.icon);

            return (
              <div
                key={guide.id}
                className="group flex flex-col justify-between rounded-2xl bg-[#121212] border border-neutral-800 hover:border-gold/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-neutral-400 bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded-full">
                      {guide.readTime}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold text-gold tracking-wider uppercase">
                    {guide.category}
                  </span>

                  <h3 className="font-display font-bold text-lg text-white group-hover:text-gold transition-colors mt-1 mb-2.5 leading-snug">
                    {guide.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-3 mb-6">
                    {guide.summary}
                  </p>
                </div>

                <Link
                  to={`/guide/${guide.slug}`}
                  className="w-full inline-flex items-center justify-between p-3 rounded-xl bg-neutral-900 hover:bg-gold hover:text-black border border-neutral-800 hover:border-gold font-bold text-xs uppercase transition-all duration-300 text-gold"
                >
                  <span>READ FULL GUIDE</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Responsible Gaming Dedicated Card */}
        <div id="responsible" className="p-8 rounded-3xl bg-gradient-to-r from-[#181818] via-[#121212] to-[#181818] border border-gold/40 mb-10 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center text-gold shrink-0">
              <HeartHandshake className="w-8 h-8" />
            </div>
            <div className="space-y-2 text-center md:text-left flex-1">
              <h3 className="text-xl font-display font-extrabold text-white">
                Player Well-Being & Responsible Gaming Principles
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Mobile gaming should always remain an enjoyable, low-stakes pastime. Never borrow money to play, establish strict time boundaries, and use cooling-off periods whenever necessary.
              </p>
            </div>
            <Link
              to="/guide/responsible-gaming-guidelines"
              className="px-6 py-3 rounded-xl bg-gold text-black font-extrabold text-xs uppercase tracking-wider whitespace-nowrap shadow-gold-sm hover:scale-105 transition-all"
            >
              READ FULL POLICY
            </Link>
          </div>
        </div>

        <DisclaimerBanner />

      </div>
    </div>
  );
}
