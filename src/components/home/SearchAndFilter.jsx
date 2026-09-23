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
    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 p-3 sm:p-4 rounded-2xl bg-white border border-[#D9EEF2] shadow-[0_4px_16px_rgba(0,184,217,0.05)]">
      
      {/* Search Input */}
      <div className="relative flex-1">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by app name, features or category..."
          className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#D9EEF2] focus:border-[#00B8D9] focus:outline-none focus:ring-1 focus:ring-[#00B8D9] text-[#172033] text-xs sm:text-sm placeholder:text-[#64748B] transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#64748B] hover:text-[#008FA8]"
            aria-label="Clear search"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Controls: Sort Dropdown & View Mode Switcher */}
      <div className="flex items-center justify-between md:justify-end gap-2.5">
        
        {/* Sort Dropdown */}
        <div className="flex items-center gap-1.5 bg-[#F8FAFC] border border-[#D9EEF2] rounded-xl px-3 py-2 text-xs text-[#172033]">
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#00B8D9] shrink-0" />
          <span className="hidden sm:inline text-[#64748B] font-medium">Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent text-[#172033] font-semibold focus:outline-none cursor-pointer"
          >
            <option value="serial">Default Order</option>
            <option value="rating">Top Rated</option>
            <option value="newest">Latest Added</option>
            <option value="name">Alphabetical (A-Z)</option>
          </select>
        </div>

        {/* View Toggle */}
        <div className="flex items-center bg-[#F8FAFC] border border-[#D9EEF2] rounded-xl p-1">
          <button
            onClick={() => setViewMode('list')}
            className={`p-1.5 rounded-lg transition-colors ${
              viewMode === 'list'
                ? 'bg-[#00B8D9] text-white shadow-sm'
                : 'text-[#64748B] hover:text-[#008FA8]'
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
                ? 'bg-[#00B8D9] text-white shadow-sm'
                : 'text-[#64748B] hover:text-[#008FA8]'
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
