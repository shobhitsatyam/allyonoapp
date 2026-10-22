import React, { useEffect } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import logoImg from '../../assets/logo.png';

/**
 * MaintenancePage (Error 404 Style)
 * Renders an Error 404 / Temporarily Unavailable view when site is in maintenance mode.
 */
export default function MaintenancePage() {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = '404 - Page Not Found | AllYonoApp';
    return () => {
      document.title = originalTitle;
    };
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 text-slate-900 font-sans selection:bg-gold selection:text-black">
      {/* Top Bar with Branding */}
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

          {/* 404 Status Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-red-600 border border-red-200">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span>Error 404</span>
          </div>
        </div>
      </header>

      {/* Main 404 Card */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div
          role="status"
          aria-live="polite"
          className="w-full max-w-xl bg-white rounded-3xl border border-slate-200/90 shadow-card-light p-8 sm:p-12 text-center"
        >
          {/* Big Stylized 404 Number */}
          <div className="relative mb-6 inline-block">
            <span className="text-7xl sm:text-9xl font-black font-display tracking-tight text-slate-900 block select-none">
              4<span className="text-gold">0</span>4
            </span>
            <div className="absolute -top-1 -right-3 sm:-right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-red-100 border border-red-200 flex items-center justify-center text-red-600 shadow-sm">
              <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
            </div>
          </div>

          {/* Headings */}
          <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
            404 — Page Not Found
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4 max-w-md mx-auto">
            The page you are looking for does not exist, has been temporarily removed, or is currently unavailable.
          </p>

          <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-md mx-auto">
            AllYonoApp is temporarily unavailable. Please check back later.
          </p>

          {/* Error Details Badge */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 mb-8 text-xs text-slate-500 font-mono flex items-center justify-center gap-3">
            <span>HTTP Status: <strong className="text-slate-700">404 Not Found</strong></span>
            <span>•</span>
            <span>Server: <strong className="text-slate-700">AllYonoApp</strong></span>
          </div>

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
