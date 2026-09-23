import React from 'react';
import { Link } from 'react-router-dom';
import SeoHead from '../components/common/SeoHead';
import SecondaryNav from '../components/common/SecondaryNav';
import DisclaimerBanner from '../components/common/DisclaimerBanner';
import { AlertTriangle, Home, Grid } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-bg-dark text-white flex flex-col justify-between">
      <SeoHead
        title="Page Not Found (404) | AllyonoApp"
        description="The requested page could not be found on AllyonoApp."
        canonicalUrl="https://allyonoapp.app/404"
        robots="noindex, follow"
      />
      
      <div>
        <SecondaryNav />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mx-auto mb-6">
            <AlertTriangle className="w-8 h-8 text-gold" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-display font-black text-white mb-3">
            404 — Page <span className="gold-gradient-text">Not Found</span>
          </h1>

          <p className="text-sm sm:text-base text-neutral-400 max-w-lg mx-auto mb-8 leading-relaxed">
            The page you are looking for does not exist, has been removed, or may have been relocated.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-gradient text-black font-extrabold text-xs uppercase tracking-wider shadow-gold-sm hover:scale-105 transition-all"
            >
              <Home className="w-4 h-4 text-black" />
              <span>Back to Home</span>
            </Link>

            <Link
              to="/apps"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white font-bold text-xs uppercase tracking-wider hover:border-gold transition-all"
            >
              <Grid className="w-4 h-4 text-gold" />
              <span>Browse All Apps</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
        <DisclaimerBanner />
      </div>
    </div>
  );
}
