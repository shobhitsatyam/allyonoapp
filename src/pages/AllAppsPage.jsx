import React, { useState, useMemo } from 'react';
import SeoHead from '../components/common/SeoHead';
import CategoryTabs from '../components/home/CategoryTabs';
import SearchAndFilter from '../components/home/SearchAndFilter';
import AppCard from '../components/home/AppCard';
import SecondaryNav from '../components/common/SecondaryNav';
import DisclaimerBanner from '../components/common/DisclaimerBanner';
import { APPS_DATA } from '../data/apps';
import { Sparkles, Layers, ShieldCheck } from 'lucide-react';

export default function AllAppsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('serial');
  const [viewMode, setViewMode] = useState('list');

  const filteredApps = useMemo(() => {
    return APPS_DATA.filter((app) => {
      if (activeCategory === 'new' && !app.isNew) return false;
      if (activeCategory !== 'all' && activeCategory !== 'new' && app.category.toLowerCase() !== activeCategory.toLowerCase()) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          app.name.toLowerCase().includes(q) ||
          app.category.toLowerCase().includes(q) ||
          app.shortDesc.toLowerCase().includes(q)
        );
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return parseInt(a.serial, 10) - parseInt(b.serial, 10);
    });
  }, [activeCategory, searchQuery, sortBy]);

  const categorySeo = useMemo(() => {
    switch (activeCategory) {
      case 'rummy':
        return {
          title: "Yono Rummy Apps Directory (21 Games) & Downloads | AllyonoApp",
          description: "Browse verified Yono Rummy apps, card game variants, signup bonus details, and fast UPI withdrawal thresholds on AllyonoApp."
        };
      case 'slots':
        return {
          title: "Yono Slots Games Directory & High-RTP Slot Apps | AllyonoApp",
          description: "Explore Yono slots games, reel machines, feature guides, and verified Android download packages on AllyonoApp."
        };
      case 'spin':
        return {
          title: "Yono Spin & Win Apps Directory & Lucky Wheel Games | AllyonoApp",
          description: "Discover Yono Spin and lucky wheel gaming applications with daily check-in rewards and instant payout information on AllyonoApp."
        };
      case 'gaming':
        return {
          title: "Yono Gaming & Card Apps Directory | AllyonoApp",
          description: "Explore multiplayer Yono gaming apps, multi-table card platforms, and verified technical specifications on AllyonoApp."
        };
      case 'new':
        return {
          title: "New Yono Gaming Apps 2026 – Latest Released Versions | AllyonoApp",
          description: "Discover new Yono games and newly updated applications for 2026 with verified package security on AllyonoApp."
        };
      default:
        return {
          title: "All Yono Games Directory (62 Apps) & Specifications | AllyonoApp",
          description: "Browse the complete directory of 62 Yono games, gaming app information, version specifications, and safety details on AllyonoApp."
        };
    }
  }, [activeCategory]);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "name": categorySeo.title,
        "description": categorySeo.description,
        "url": "https://allyonoapp.app/apps",
        "isPartOf": {
          "@type": "WebSite",
          "name": "AllyonoApp",
          "url": "https://allyonoapp.app"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://allyonoapp.app/" },
          { "@type": "ListItem", "position": 2, "name": "Apps", "item": "https://allyonoapp.app/apps" }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-bg-dark text-white">
      <SeoHead
        title={categorySeo.title}
        description={categorySeo.description}
        canonicalUrl="https://allyonoapp.app/apps"
        jsonLd={collectionSchema}
      />
      <SecondaryNav />

      {/* Header Banner */}
      <div className="py-12 bg-gradient-to-b from-bg-secondary via-[#0D0D0D] to-bg-dark border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold tracking-widest uppercase mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>FULL DIRECTORY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-black text-white">
            Yono Games <span className="gold-gradient-text">All Apps</span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto mt-2">
            Browse our comprehensive index of verified gaming applications with detailed safety ratings, version histories, and specifications.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Tabs */}
        <div className="mb-6">
          <CategoryTabs activeCategory={activeCategory} onSelectCategory={setActiveCategory} />
        </div>

        {/* Search & Sort Controls */}
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

        {/* Directory Results */}
        <div className="mb-8">
          <div className="text-xs text-neutral-400 font-semibold mb-3">
            Showing {filteredApps.length} applications
          </div>

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
              <p className="text-neutral-400 text-sm">No applications found matching "{searchQuery}".</p>
            </div>
          )}
        </div>

        <DisclaimerBanner />
      </div>
    </div>
  );
}
