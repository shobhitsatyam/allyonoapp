import React, { useState, useMemo } from 'react';
import SeoHead from '../components/common/SeoHead';
import SecondaryNav from '../components/common/SecondaryNav';
import SearchAndFilter from '../components/home/SearchAndFilter';
import AppCard from '../components/home/AppCard';
import TrustStrip from '../components/common/TrustStrip';
import FeaturedGuides from '../components/home/FeaturedGuides';
import FeaturedBlog from '../components/home/FeaturedBlog';
import DisclaimerBanner from '../components/common/DisclaimerBanner';
import { APPS_DATA } from '../data/apps';
import { Filter } from 'lucide-react';

export default function HomePage({ onOpenTelegram }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('serial');
  const [viewMode, setViewMode] = useState('list');

  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://allyonoapp.app/#website",
        "url": "https://allyonoapp.app/",
        "name": "AllyonoApp",
        "description": "Explore Yono games, gaming app information, new app updates and useful gaming guides on AllyonoApp.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://allyonoapp.app/apps?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://allyonoapp.app/#organization",
        "name": "AllyonoApp",
        "url": "https://allyonoapp.app/",
        "logo": "https://allyonoapp.app/favicon.svg"
      }
    ]
  };

  // Filter & Sort Logic
  const filteredApps = useMemo(() => {
    return APPS_DATA.filter((app) => {
      // Category filter
      if (activeCategory === 'new' && !app.isNew) return false;
      if (activeCategory !== 'all' && activeCategory !== 'new' && app.category.toLowerCase() !== activeCategory.toLowerCase()) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = app.name.toLowerCase().includes(q);
        const matchCat = app.category.toLowerCase().includes(q);
        const matchDesc = app.shortDesc.toLowerCase().includes(q);
        if (!matchName && !matchCat && !matchDesc) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return parseInt(a.serial, 10) - parseInt(b.serial, 10);
    });
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-bg-dark text-white">
      <SeoHead
        title="Yono Games & Gaming App Information Directory | AllyonoApp"
        description="Explore 60+ Yono games and verified gaming apps on AllyonoApp. Discover app specifications, safety audits, minimum withdrawal guides, and daily updates."
        canonicalUrl="https://allyonoapp.app/"
        jsonLd={homepageSchema}
      />

      {/* Secondary Navigation */}
      <SecondaryNav />

      {/* Main App Directory Section */}
      <section id="app-directory" className="py-12 bg-[#0A0A0A] border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Search, Sort, & Layout Toolbar */}
          <div className="mb-6">
            <SearchAndFilter
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              sortBy={sortBy}
              setSortBy={setSortBy}
              viewMode={viewMode}
              setViewMode={setViewMode}
              totalResults={filteredApps.length}
            />
          </div>

          {/* App Cards List / Grid */}
          {filteredApps.length > 0 ? (
            <div className={
              viewMode === 'grid'
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                : "flex flex-col gap-3.5"
            }>
              {filteredApps.map((app, index) => (
                <AppCard key={app.id} app={app} index={index} viewMode={viewMode} />
              ))}
            </div>
          ) : (
            <div className="p-12 text-center rounded-2xl bg-[#121212] border border-neutral-800">
              <Filter className="w-10 h-10 text-neutral-600 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-1">No applications matched your criteria</h3>
              <p className="text-xs text-neutral-400 mb-4">Try clearing filters or search terms.</p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 rounded-xl bg-gold text-black font-bold text-xs uppercase"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* Legal / Informational Disclaimer Banner on Homepage */}
          <DisclaimerBanner />

        </div>
      </section>

      {/* Trust and Information Strip */}
      <TrustStrip />

      {/* Educational Guides Section */}
      <FeaturedGuides />

      {/* Blog & Articles Section */}
      <FeaturedBlog />
    </div>
  );
}
