import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SecondaryNav from '../components/common/SecondaryNav';
import DisclaimerBanner from '../components/common/DisclaimerBanner';
import { BLOG_POSTS } from '../data/blog';
import { Newspaper, Clock, Calendar, Search, ArrowRight, User } from 'lucide-react';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCat, setSelectedCat] = useState('all');

  const filteredPosts = BLOG_POSTS.filter((post) => {
    if (selectedCat !== 'all' && post.category.toLowerCase() !== selectedCat.toLowerCase()) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        post.title.toLowerCase().includes(q) ||
        post.summary.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q)
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
            <Newspaper className="w-3.5 h-3.5" />
            <span>EDITORIAL & RESEARCH</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-black text-white">
            Industry Insights & <span className="gold-gradient-text">Analysis</span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto mt-2">
            In-depth analysis of mobile gaming cybersecurity, cryptographic RNG fairness, and player protection trends.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Search & Category Filter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 focus:border-gold focus:outline-none text-xs sm:text-sm text-white"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full sm:w-auto">
            {['all', 'Security', 'Game Mechanics', 'Well-Being', 'Industry Insights'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                  selectedCat === cat
                    ? 'bg-gold text-black'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                }`}
              >
                {cat === 'all' ? 'All Topics' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col justify-between rounded-2xl bg-[#121212] border border-neutral-800 hover:border-gold/50 p-6 sm:p-8 transition-all duration-300 group hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-gold/15 text-gold border border-gold/30">
                    {post.category}
                  </span>
                  <span className="text-xs text-neutral-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {post.readTime}
                  </span>
                </div>

                <h2 className="font-display font-bold text-xl text-white group-hover:text-gold transition-colors mb-3 leading-snug">
                  {post.title}
                </h2>

                <p className="text-sm text-neutral-300 leading-relaxed line-clamp-3 mb-6">
                  {post.summary}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-neutral-800 text-xs">
                <span className="text-neutral-400 flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{post.author}</span>
                </span>

                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 font-bold text-gold hover:underline"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <DisclaimerBanner />

      </div>
    </div>
  );
}
