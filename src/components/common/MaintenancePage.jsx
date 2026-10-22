import React, { useEffect } from 'react';
import { Clock, RefreshCw } from 'lucide-react';
import logoImg from '../../assets/logo.png';

/**
 * MaintenancePage
 * Displayed when VITE_MAINTENANCE_MODE is enabled ('true').
 * Reversible, temporary unavailability page adhering strictly to AllYonoApp branding.
 */
export default function MaintenancePage() {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'Website Temporarily Unavailable | AllYonoApp';
    return () => {
      document.title = originalTitle;
    };
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 text-slate-900 font-sans selection:bg-gold selection:text-black">
      {/* Top bar with branding */}
      <header className="w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logoImg}
              alt="All Yono Logo"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl object-contain drop-shadow-sm"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-2xl tracking-wider text-slate-900">
                  ALLY<span className="text-gold">ONO</span>
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-gold/15 text-gold border border-gold/30">
                  APP
                </span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500 tracking-widest uppercase -mt-0.5">
                APP DIRECTORY
              </span>
            </div>
          </div>

          {/* Status pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span>Service Notice</span>
          </div>
        </div>
      </header>

      {/* Main card */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div
          role="status"
          aria-live="polite"
          className="w-full max-w-lg bg-white rounded-2xl border border-slate-200/80 shadow-card-light p-8 sm:p-10 text-center"
        >
          {/* Icon Badge */}
          <div className="mx-auto w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200/70 flex items-center justify-center text-amber-600 mb-6 shadow-sm">
            <Clock className="w-8 h-8" aria-hidden="true" />
          </div>

          {/* Headings and Messages */}
          <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
            Website temporarily unavailable
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
            AllYonoApp is temporarily unavailable. Please check back later.
          </p>

          {/* Action button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleRefresh}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-slate-900 text-white hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <RefreshCw className="w-4 h-4" aria-hidden="true" />
              <span>Reload page</span>
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 border-t border-slate-200/80 bg-white text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4">
          <p>© {new Date().getFullYear()} AllYonoApp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
