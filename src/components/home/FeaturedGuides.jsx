import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, CheckCircle2, Layers, Lock, HeartHandshake, Wrench, ArrowRight, BookOpen } from 'lucide-react';
import { GUIDES_DATA } from '../../data/guides';

export default function FeaturedGuides() {
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

  return (
    <section className="py-14 bg-[#080808] border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-gold text-xs font-bold tracking-widest uppercase mb-1">
              <BookOpen className="w-3.5 h-3.5" />
              <span>EDUCATIONAL RESOURCES</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              App Safety & <span className="gold-gradient-text">Player Guides</span>
            </h2>
            <p className="text-sm text-neutral-400 mt-1 max-w-xl">
              Learn how to audit permissions, recognize genuine releases, understand RNG mechanics, and play responsibly.
            </p>
          </div>

          <Link
            to="/how-to-play"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gold hover:text-gold-bright hover:underline transition-colors shrink-0"
          >
            <span>View All Guides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GUIDES_DATA.slice(0, 3).map((guide) => {
            const Icon = getIcon(guide.icon);

            return (
              <div
                key={guide.id}
                className="group relative flex flex-col justify-between rounded-2xl bg-[#121212] border border-neutral-800 hover:border-gold/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-black"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
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
                  className="inline-flex items-center gap-2 text-xs font-bold text-gold group-hover:text-gold-bright transition-colors"
                >
                  <span>READ COMPLETE GUIDE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
