import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Download } from 'lucide-react';
import AppIconBadge from './AppIconBadge';

export default function AppCard({ app, viewMode = 'list' }) {
  const downloadHref = app.downloadUrl || `/app/${app.slug}`;
  const isExternalDownload = downloadHref.startsWith('http');

  if (viewMode === 'grid') {
    return (
      <div className="group relative flex flex-col justify-between rounded-2xl bg-white border border-[#D9EEF2] hover:border-[#00B8D9] hover:shadow-[0_8px_24px_rgba(0,184,217,0.12)] transition-all duration-300 p-5">
        <div>
          <div className="flex items-center justify-end gap-2 mb-4">
            {app.rating != null && (
              <div className="flex items-center gap-1 text-xs font-bold text-[#008FA8] bg-[#F8FAFC] border border-[#D9EEF2] px-2 py-0.5 rounded-md">
                <Star className="w-3.5 h-3.5 fill-[#00B8D9] text-[#00B8D9]" />
                <span>{app.rating}</span>
              </div>
            )}
          </div>

          {/* App Icon & Name */}
          <div className="flex items-center gap-3.5 mb-3">
            <Link to={`/app/${app.slug}`} className="shrink-0">
              <AppIconBadge app={app} size="md" />
            </Link>
            <div>
              <Link to={`/app/${app.slug}`}>
                <h3 className="font-display font-bold text-base text-[#172033] group-hover:text-[#008FA8] transition-colors line-clamp-1">
                  {app.name}
                </h3>
              </Link>
              <span className="text-[11px] font-semibold text-[#64748B] tracking-wide">
                {app.subCategory || app.category}
              </span>
            </div>
          </div>

          {/* Key Specs */}
          <div className="space-y-1.5 py-2.5 my-2 border-y border-[#D9EEF2] text-xs font-semibold">
            <div className="flex items-center gap-2 text-[#E52B2B]">
              <span className="text-sm">🎁</span>
              <span className="line-clamp-1">{app.badgeInfo}</span>
            </div>
            <div className="flex items-center gap-2 text-[#172033]">
              <span className="text-sm">💳</span>
              <span className="line-clamp-1">{app.thresholdInfo}</span>
            </div>
          </div>

          <p className="text-xs text-[#64748B] leading-relaxed line-clamp-2 mb-4">
            {app.shortDesc}
          </p>
        </div>

        {/* Action button */}
        {isExternalDownload ? (
          <a
            href={downloadHref}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#00B8D9] hover:bg-[#008FA8] text-white font-extrabold text-xs tracking-wider uppercase shadow-[0_4px_14px_rgba(0,184,217,0.2)] active:scale-95 transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>DOWNLOAD</span>
          </a>
        ) : (
          <Link
            to={`/app/${app.slug}`}
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#00B8D9] hover:bg-[#008FA8] text-white font-extrabold text-xs tracking-wider uppercase shadow-[0_4px_14px_rgba(0,184,217,0.2)] active:scale-95 transition-all"
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
    <div className="group relative flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-3.5 sm:p-4 rounded-2xl bg-white text-[#172033] border border-[#D9EEF2] hover:border-[#00B8D9] hover:shadow-[0_8px_24px_rgba(0,184,217,0.12)] transition-all duration-300">
      
      {/* Left side: App Icon, Details */}
      <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
        
        {/* App Icon Monogram / Image */}
        <Link to={`/app/${app.slug}`} className="shrink-0">
          <AppIconBadge app={app} size="md" />
        </Link>

        {/* Text & Meta Information */}
        <div className="flex-1 min-w-0">
          
          <Link to={`/app/${app.slug}`}>
            <h3 className="font-display font-extrabold text-base sm:text-lg text-[#172033] group-hover:text-[#008FA8] transition-colors truncate">
              {app.name}
            </h3>
          </Link>

          {/* Key Info Rows matching Reference Design */}
          <div className="flex flex-col gap-0.5 mt-1 text-xs font-bold">
            <div className="flex items-center gap-1.5 text-[#E52B2B]">
              <span className="text-sm">🎁</span>
              <span>{app.badgeInfo}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#172033]">
              <span className="text-sm">💳</span>
              <span>{app.thresholdInfo}</span>
            </div>
          </div>

        </div>

      </div>

      {/* Right side: Action Button (Download) */}
      <div className="flex items-center justify-end sm:justify-center shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#D9EEF2]">
        {isExternalDownload ? (
          <a
            href={downloadHref}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="w-full sm:w-auto min-w-[140px] inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 px-5 rounded-xl bg-[#00B8D9] hover:bg-[#008FA8] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-[0_4px_14px_rgba(0,184,217,0.2)] hover:scale-105 active:scale-95 transition-all"
          >
            <Download className="w-4 h-4 text-white" />
            <span>DOWNLOAD</span>
          </a>
        ) : (
          <Link
            to={`/app/${app.slug}`}
            className="w-full sm:w-auto min-w-[140px] inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 px-5 rounded-xl bg-[#00B8D9] hover:bg-[#008FA8] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-[0_4px_14px_rgba(0,184,217,0.2)] hover:scale-105 active:scale-95 transition-all"
          >
            <Download className="w-4 h-4 text-white" />
            <span>DOWNLOAD</span>
          </Link>
        )}
      </div>

    </div>
  );
}
