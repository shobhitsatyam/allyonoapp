import React, { useState } from 'react';
import { Crown } from 'lucide-react';

export default function AppIconBadge({ app, size = "md" }) {
  const [imgError, setImgError] = useState(false);

  const sizeClasses = {
    sm: "w-12 h-12 rounded-xl text-[10px]",
    md: "w-14 h-14 sm:w-16 sm:h-16 rounded-2xl text-xs",
    lg: "w-20 h-20 sm:w-24 sm:h-24 rounded-3xl text-sm"
  };

  const isYonoBonus = app.slug === 'yono-bonus' || app.iconVariant === 'yono-bonus';
  const isJoyRummy = app.slug === 'joy-rummy' || app.iconVariant === 'joy-rummy';
  const isIndRummy = app.slug === 'ind-rummy' || app.iconVariant === 'ind-rummy';

  if (!imgError && app.iconImg) {
    return (
      <div className={`relative ${sizeClasses[size] || sizeClasses.md} rounded-2xl p-0.5 shadow-md flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 overflow-hidden bg-neutral-900 border border-neutral-700/50`}>
        <img
          src={app.iconImg}
          alt={`${app.name} Icon`}
          loading="lazy"
          onError={() => setImgError(true)}
          className="w-full h-full object-cover rounded-[inherit]"
        />
        {app.isNew && (
          <span className="absolute -top-1 -right-1 px-1.5 py-0.2 bg-rose-600 text-white font-black text-[8px] rounded-full border border-rose-300 shadow-sm">
            NEW
          </span>
        )}
      </div>
    );
  }

  if (isYonoBonus) {
    return (
      <div className={`relative ${sizeClasses[size] || sizeClasses.md} rounded-2xl bg-gradient-to-b from-[#10B981] via-[#059669] to-[#047857] p-1.5 shadow-md flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 border border-emerald-400/40`}>
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
          <path
            d="M50 14 C30 14 14 30 14 50 C14 62 20 72 30 79 L25 92 L42 85 C45 85.7 47.5 86 50 86 C70 86 86 70 86 50 C86 30 70 14 50 14 Z"
            fill="#FFFFFF"
          />
          <path
            d="M50 28 C47 37 32 50 32 60 C32 68 39 71 45 71 C48.5 71 50 67 50 67 C50 67 51.5 71 55 71 C61 71 68 68 68 60 C68 50 53 37 50 28 Z M46 68 L44 79 L56 79 L54 68 Z"
            fill="#059669"
          />
        </svg>
      </div>
    );
  }

  if (isJoyRummy || isIndRummy) {
    const textLabel = isIndRummy ? 'IND' : 'JOY';
    return (
      <div className={`relative ${sizeClasses[size] || sizeClasses.md} rounded-2xl bg-gradient-to-b from-[#0a3821] via-[#072d1a] to-[#031c10] border border-emerald-500/40 flex flex-col items-center justify-center p-1.5 shadow-md shrink-0 group-hover:scale-105 transition-transform duration-300 overflow-hidden`}>
        <span className="font-display font-black text-sm sm:text-base tracking-wider text-amber-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)] leading-none mb-0.5">
          {textLabel}
        </span>
        <div className="bg-gradient-to-b from-white via-neutral-100 to-neutral-300 px-1.5 py-0.5 rounded shadow-sm border border-white/80">
          <span className="text-[7.5px] sm:text-[8.5px] font-black tracking-widest text-[#072d1a] uppercase leading-none block">
            RUMMY
          </span>
        </div>
      </div>
    );
  }

  // Fallback rendering
  const renderContent = () => {
    switch (app.iconVariant) {
      case 'spade':
        return (
          <div className="flex flex-col items-center justify-center text-white">
            <span className="text-xl sm:text-2xl text-emerald-400 font-bold">♠</span>
            <span className="text-[9px] sm:text-[10px] font-black tracking-tighter text-emerald-200 uppercase -mt-1">RUMMY</span>
          </div>
        );
      case 'vip':
        return (
          <div className="flex flex-col items-center justify-center text-black">
            <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-amber-950 fill-amber-950" />
            <span className="text-[10px] sm:text-xs font-black tracking-wider uppercase">VIP</span>
          </div>
        );
      default:
        return (
          <div className="flex flex-col items-center justify-center text-center px-1">
            <span className="text-xs sm:text-sm font-black text-white tracking-tight leading-tight">
              {app.iconText || app.name.split(' ')[0]}
            </span>
            <span className="text-[8px] sm:text-[9px] font-bold text-gold/90 tracking-tighter uppercase leading-tight">
              {app.iconSubtext || app.category}
            </span>
          </div>
        );
    }
  };

  return (
    <div className={`relative ${sizeClasses[size] || sizeClasses.md} bg-gradient-to-br ${app.iconBg || 'from-amber-500 to-yellow-800'} p-0.5 shadow-md flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 rounded-2xl`}>
      <div className="w-full h-full bg-[#121212]/80 backdrop-blur-xs rounded-[inherit] flex items-center justify-center p-1 border border-white/20">
        {renderContent()}
      </div>
    </div>
  );
}
