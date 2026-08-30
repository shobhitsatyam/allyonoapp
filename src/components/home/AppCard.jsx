import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Download } from 'lucide-react';
import AppIconBadge from './AppIconBadge';

export default function AppCard({ app, index = null, viewMode = 'list' }) {
  // Determine if rank badge is shown (Yono Bonus has no badge, Joy Rummy is 1, Ind Rummy is 2...)
  const rankNum = app.rank !== undefined ? app.rank : (index !== null && index > 0 ? index : null);
  const downloadHref = app.downloadUrl || `/app/${app.slug}`;
  const isExternalDownload = downloadHref.startsWith('http');

  if (viewMode === 'grid') {
    return (
      <div className="group relative flex flex-col justify-between rounded-2xl bg-[#111111] border border-neutral-800/80 hover:border-gold/50 hover:shadow-gold-sm transition-all duration-300 p-5">
        {rankNum && (
          <div className="absolute -top-2.5 -left-2.5 w-6 h-6 rounded-full bg-[#E52B2B] text-white font-black text-xs flex items-center justify-center shadow-md z-10 border border-white/40">
            {rankNum}
          </div>
        )}
        <div>
          {/* Top Row: Serial, Rating */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className="font-display font-black text-sm text-gold/80 bg-gold/10 px-2 py-0.5 rounded-md">
              #{app.serial}
            </span>
            <div className="flex items-center gap-1 text-xs font-bold text-amber-400 bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded-md">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{app.rating}</span>
            </div>
          </div>

          {/* App Icon & Name */}
          <div className="flex items-center gap-3.5 mb-3">
            <Link to={`/app/${app.slug}`} className="shrink-0">
              <AppIconBadge app={app} size="md" />
            </Link>
            <div>
              <Link to={`/app/${app.slug}`}>
                <h3 className="font-display font-bold text-base text-white group-hover:text-gold transition-colors line-clamp-1">
                  {app.name}
                </h3>
              </Link>
              <span className="text-[11px] font-semibold text-neutral-400 tracking-wide">
                {app.subCategory || app.category}
              </span>
            </div>
          </div>

          {/* Key Specs */}
          <div className="space-y-1.5 py-2.5 my-2 border-y border-neutral-800/80 text-xs font-semibold">
            <div className="flex items-center gap-2 text-[#E52B2B]">
              <span className="text-sm">🎁</span>
              <span className="line-clamp-1">{app.badgeInfo}</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-200">
              <span className="text-sm">💳</span>
              <span className="line-clamp-1">{app.thresholdInfo}</span>
            </div>
          </div>

          <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2 mb-4">
            {app.shortDesc}
          </p>
        </div>

        {/* Action button */}
        {isExternalDownload ? (
          <a
            href={downloadHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gold-gradient hover:bg-gold-gradient-hover text-black font-extrabold text-xs tracking-wider uppercase shadow-gold-sm active:scale-95 transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>DOWNLOAD</span>
          </a>
        ) : (
          <Link
            to={`/app/${app.slug}`}
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gold-gradient hover:bg-gold-gradient-hover text-black font-extrabold text-xs tracking-wider uppercase shadow-gold-sm active:scale-95 transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>DOWNLOAD</span>
          </Link>
        )}
      </div>
    );
  }

  // Reference-Exact Horizontal List Row
  return (
    <div className="group relative flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-3.5 sm:p-4 rounded-2xl bg-[#FFFFFF] sm:bg-[#FFFFFF] text-neutral-900 border border-gold/30 hover:border-gold hover:shadow-xl transition-all duration-300">
      
      {/* Top Left Red Rank Badge */}
      {rankNum && (
        <div className="absolute -top-2.5 -left-2.5 w-6 h-6 rounded-full bg-[#E52B2B] text-white font-black text-xs flex items-center justify-center shadow-md z-10 border border-white/60">
          {rankNum}
        </div>
      )}

      {/* Left side: App Icon, Details */}
      <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
        
        {/* App Icon Monogram / Image */}
        <Link to={`/app/${app.slug}`} className="shrink-0">
          <AppIconBadge app={app} size="md" />
        </Link>

        {/* Text & Meta Information */}
        <div className="flex-1 min-w-0">
          
          <Link to={`/app/${app.slug}`}>
            <h3 className="font-display font-extrabold text-base sm:text-lg text-neutral-950 group-hover:text-amber-800 transition-colors truncate">
              {app.name}
            </h3>
          </Link>

          {/* Key Info Rows matching Reference Design */}
          <div className="flex flex-col gap-0.5 mt-1 text-xs font-bold">
            <div className="flex items-center gap-1.5 text-[#E52B2B]">
              <span className="text-sm">🎁</span>
              <span>{app.badgeInfo}</span>
            </div>
            <div className="flex items-center gap-1.5 text-black">
              <span className="text-sm">💳</span>
              <span>{app.thresholdInfo}</span>
            </div>
          </div>

        </div>

      </div>

      {/* Right side: Action Button (Download) */}
      <div className="flex items-center justify-end sm:justify-center shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-neutral-100">
        {isExternalDownload ? (
          <a
            href={downloadHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-w-[140px] inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 px-5 rounded-xl bg-gold-gradient hover:bg-gold-gradient-hover text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-gold-md hover:scale-105 active:scale-95 transition-all"
          >
            <Download className="w-4 h-4 text-black" />
            <span>DOWNLOAD</span>
          </a>
        ) : (
          <Link
            to={`/app/${app.slug}`}
            className="w-full sm:w-auto min-w-[140px] inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 px-5 rounded-xl bg-gold-gradient hover:bg-gold-gradient-hover text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-gold-md hover:scale-105 active:scale-95 transition-all"
          >
            <Download className="w-4 h-4 text-black" />
            <span>DOWNLOAD</span>
          </Link>
        )}
      </div>

    </div>
  );
}
