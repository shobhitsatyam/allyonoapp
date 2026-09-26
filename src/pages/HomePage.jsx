import React from 'react';
import SeoHead from '../components/common/SeoHead';
import SecondaryNav from '../components/common/SecondaryNav';
import AppCard from '../components/home/AppCard';
import TrustStrip from '../components/common/TrustStrip';
import FeaturedGuides from '../components/home/FeaturedGuides';
import FeaturedBlog from '../components/home/FeaturedBlog';
import DisclaimerBanner from '../components/common/DisclaimerBanner';
import { APPS_DATA } from '../data/apps';

export default function HomePage({ onOpenTelegram }) {
  const orderedApps = [...APPS_DATA].sort((a, b) => parseInt(a.serial, 10) - parseInt(b.serial, 10));

  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://allyonoapp.app/#website",
        "url": "https://allyonoapp.app/",
        "name": "AllyonoApp",
        "description": "Explore Yono games, gaming app information, new app updates and useful gaming guides on AllyonoApp.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://allyonoapp.app/apps?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://allyonoapp.app/#organization",
        "name": "AllyonoApp",
        "url": "https://allyonoapp.app/",
        "logo": "https://allyonoapp.app/favicon.svg"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-bg-dark text-white">
      <SeoHead
        title="Yono Games & Gaming App Information Directory | AllyonoApp"
        description="Explore 60+ Yono games and verified gaming apps on AllyonoApp. Discover app specifications, safety audits, minimum withdrawal guides, and daily updates."
        canonicalUrl="https://allyonoapp.app/"
        jsonLd={homepageSchema}
      />

      {/* Secondary Navigation */}
      <SecondaryNav />

      {/* Main App Directory Section */}
      <section id="app-directory" className="py-12 bg-[#0A0A0A] border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* App Cards List */}
          <div className="flex flex-col gap-3.5">
            {orderedApps.map((app) => (
              <AppCard key={app.id} app={app} viewMode="list" />
            ))}
          </div>

          {/* Legal / Informational Disclaimer Banner on Homepage */}
          <DisclaimerBanner />

        </div>
      </section>

      {/* Trust and Information Strip */}
      <TrustStrip />

      {/* Educational Guides Section */}
      <FeaturedGuides />

      {/* Blog & Articles Section */}
      <FeaturedBlog />
    </div>
  );
}
