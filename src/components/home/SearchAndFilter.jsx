import React from 'react';
import { Search, SlidersHorizontal, LayoutList, LayoutGrid, X } from 'lucide-react';

export default function SearchAndFilter({
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
  viewMode,
  setViewMode,
  totalResults
}) {
  return (
    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 p-3 sm:p-4 rounded-2xl bg-[#0F0F0F] border border-neutral-800">
      
      {/* Search Input */}
      <div className="relative flex-1">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by app name, features or category..."
          className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold text-white text-xs sm:text-sm placeholder:text-neutral-500 transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-neutral-400 hover:text-white"
            aria-label="Clear search"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Controls: Sort Dropdown & View Mode Switcher */}
      <div className="flex items-center justify-between md:justify-end gap-2.5">
        
        {/* Sort Dropdown */}
        <div className="flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-neutral-300">
          <SlidersHorizontal className="w-3.5 h-3.5 text-gold shrink-0" />
          <span className="hidden sm:inline text-neutral-500 font-medium">Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent text-white font-semibold focus:outline-none cursor-pointer"
          >
            <option value="serial" className="bg-[#121212] text-white">Default Order</option>
            <option value="rating" className="bg-[#121212] text-white">Top Rated</option>
            <option value="newest" className="bg-[#121212] text-white">Latest Added</option>
            <option value="name" className="bg-[#121212] text-white">Alphabetical (A-Z)</option>
          </select>
        </div>

        {/* View Toggle */}
        <div className="flex items-center bg-neutral-900 border border-neutral-800 rounded-xl p-1">
          <button
            onClick={() => setViewMode('list')}
            className={`p-1.5 rounded-lg transition-colors ${
              viewMode === 'list'
                ? 'bg-gold text-black shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
            title="List View (Reference Style)"
            aria-label="List View"
          >
            <LayoutList className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`p-1.5 rounded-lg transition-colors ${
              viewMode === 'grid'
                ? 'bg-gold text-black shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
            title="Grid View"
            aria-label="Grid View"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
}
