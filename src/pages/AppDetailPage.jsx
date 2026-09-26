import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import SeoHead from '../components/common/SeoHead';
import { APPS_DATA } from '../data/apps';
import AppIconBadge from '../components/home/AppIconBadge';
import SecondaryNav from '../components/common/SecondaryNav';
import DisclaimerBanner from '../components/common/DisclaimerBanner';
import {
  ShieldCheck,
  Star,
  HardDrive,
  Cpu,
  Calendar,
  Layers,
  ChevronDown,
  ChevronUp,
  Gift,
  Landmark,
  ArrowLeft,
  AlertTriangle,
  CheckCircle2,
  Lock,
  Download,
  Share2,
  ExternalLink
} from 'lucide-react';

export default function AppDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(0);
  const [copied, setCopied] = useState(false);

  const app = APPS_DATA.find((a) => a.slug === slug);

  if (!app) {
    return (
      <div className="min-h-screen bg-bg-dark text-white flex items-center justify-center p-4">
        <SeoHead
          title="Application Not Found | AllyonoApp"
          description="The requested application guide does not exist or may have been relocated on AllyonoApp."
          canonicalUrl="https://allyonoapp.app/apps"
          robots="noindex, follow"
        />
        <div className="text-center max-w-md p-8 rounded-2xl bg-[#121212] border border-neutral-800">
          <AlertTriangle className="w-12 h-12 text-gold mx-auto mb-3" />
          <h2 className="text-2xl font-bold mb-2">Application Not Found</h2>
          <p className="text-sm text-neutral-400 mb-6">
            The requested application guide does not exist or may have been relocated.
          </p>
          <Link
            to="/apps"
            className="px-6 py-2.5 rounded-xl bg-gold text-black font-bold text-xs uppercase inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Directory</span>
          </Link>
        </div>
      </div>
    );
  }

  // Schema graph
  const appSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": app.name,
        "operatingSystem": app.compatibility || "Android 6.0 & above",
        "applicationCategory": "GameApplication",
        "softwareVersion": app.version,
        "fileSize": app.size,
        "image": app.iconImg,
        "author": {
          "@type": "Organization",
          "name": app.developer || "Interactive Studio"
        },
        "description": app.shortDesc || app.overview
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://allyonoapp.app/" },
          { "@type": "ListItem", "position": 2, "name": "Apps", "item": "https://allyonoapp.app/apps" },
          { "@type": "ListItem", "position": 3, "name": app.name, "item": `https://allyonoapp.app/app/${app.slug}` }
        ]
      },
      ...(app.faqs && app.faqs.length > 0 ? [{
        "@type": "FAQPage",
        "mainEntity": app.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }] : [])
    ]
  };

  // Related apps
  const relatedApps = APPS_DATA.filter((a) => a.id !== app.id && a.category === app.category).slice(0, 3);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-bg-dark text-white pb-16">
      <SeoHead
        title={`${app.name} App Download, Features & Specs Guide | AllyonoApp`}
        description={`Complete guide for ${app.name}: features, Android ${app.compatibility}, verified APK size (${app.size}), safety permissions audit, and withdrawal thresholds.`}
        canonicalUrl={`https://allyonoapp.app/app/${app.slug}`}
        ogImage={app.iconImg || "https://allyonoapp.app/og-image.png"}
        ogType="article"
        jsonLd={appSchema}
      />
      <SecondaryNav />

      {/* Breadcrumb & Navigation */}
      <div className="bg-white border-b border-[#D9EEF2] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-[#008FA8]">Home</Link>
            <span>/</span>
            <Link to="/apps" className="hover:text-[#008FA8]">Apps</Link>
            <span>/</span>
            <span className="text-[#172033] font-semibold">{app.name}</span>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1 text-[#008FA8] hover:underline font-bold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>
        </div>
      </div>

      {/* Main App Header Banner */}
      <div className="bg-gradient-to-b from-[#F8FAFC] via-white to-[#E6F9FC] border-b border-[#D9EEF2] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            
            {/* Left: App Icon & Info */}
            <div className="flex items-start sm:items-center gap-5">
              <AppIconBadge app={app} size="lg" />

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#E6F9FC] text-[#008FA8] border border-[#D9EEF2]">
                    {app.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#F8FAFC] text-[#64748B] border border-[#D9EEF2]">
                    {app.version}
                  </span>
                  {app.tag && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      {app.tag}
                    </span>
                  )}
                </div>

                <h1 className="text-2xl sm:text-4xl font-display font-black text-[#172033]">
                  {app.name}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-400 pt-1">
                  {app.rating != null && (
                    <div className="flex items-center gap-1 text-[#008FA8] font-bold">
                      <Star className="w-4 h-4 fill-[#00B8D9]" />
                      <span>{app.rating} / 5.0</span>
                      <span className="text-neutral-500 font-normal">({app.reviewsCount} reviews)</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <HardDrive className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{app.size}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Updated {app.lastUpdated}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <button
                onClick={handleShare}
                  className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-white hover:bg-[#E6F9FC] border border-[#D9EEF2] text-[#172033] text-xs font-bold tracking-wider uppercase transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span>{copied ? 'Link Copied!' : 'Share'}</span>
              </button>

              {app.downloadUrl && (
                <a
                  href={app.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gold-gradient hover:bg-gold-gradient-hover text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-gold-md hover:scale-105 active:scale-95 transition-all"
                >
                  <Download className="w-4 h-4 text-black" />
                  <span>DOWNLOAD APK</span>
                </a>
              )}

              <a
                href="#verification"
                  className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-white hover:bg-[#E6F9FC] border border-[#D9EEF2] text-[#172033] hover:text-[#008FA8] font-bold text-xs tracking-wider uppercase transition-all"
              >
                  <ShieldCheck className="w-4 h-4 text-[#00B8D9]" />
                <span>SAFETY CHECKLIST</span>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Overview Section */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#111111] border border-neutral-800 space-y-4">
              <h2 className="font-display font-extrabold text-xl text-[#172033] flex items-center gap-2">
                <span className="w-2 h-6 bg-[#00B8D9] rounded-full" />
                <span>About {app.name}</span>
              </h2>
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                {app.overview}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#D9EEF2] flex items-center gap-3">
                  <Gift className="w-5 h-5 text-rose-400 shrink-0" />
                  <div>
                    <div className="text-[11px] text-neutral-500 font-medium">Informational Bonus Tier</div>
                    <div className="text-sm font-bold text-[#172033]">{app.badgeInfo}</div>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#D9EEF2] flex items-center gap-3">
                  <Landmark className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-[11px] text-neutral-500 font-medium">Minimum Threshold Parameter</div>
                    <div className="text-sm font-bold text-[#172033]">{app.thresholdInfo}</div>
                  </div>
                </div>
              </div>
            </div>

            {app.features.length > 0 && (
            <div className="p-6 sm:p-8 rounded-2xl bg-[#111111] border border-neutral-800 space-y-4">
              <h2 className="font-display font-extrabold text-xl text-[#172033] flex items-center gap-2">
                <span className="w-2 h-6 bg-[#00B8D9] rounded-full" />
                <span>Features</span>
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {app.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8FAFC] border border-[#D9EEF2] text-xs sm:text-sm text-[#172033]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00B8D9] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            )}

            {app.permissions.length > 0 && (
            <div id="verification" className="p-6 sm:p-8 rounded-2xl bg-white border border-[#D9EEF2] space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-display font-extrabold text-xl text-[#172033] flex items-center gap-2">
                  <span className="w-2 h-6 bg-[#00B8D9] rounded-full" />
                  <span>Android Permissions Audit</span>
                </h2>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${app.isAudited === false ? 'text-neutral-500 bg-neutral-500/10 border border-neutral-500/30' : 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/30'}`}>
                  {app.isAudited === false ? 'Not independently audited' : 'Audited 2026'}
                </span>
              </div>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Review the permissions requested by this application package. Do not grant unnecessary privileges (such as SMS or Contacts).
              </p>
              <div className="space-y-2.5 pt-2">
                {app.permissions.map((perm, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#D9EEF2] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                  >
                    <div>
                      <div className="font-bold text-[#172033]">{perm.name}</div>
                      <div className="text-[#64748B] mt-0.5">{perm.reason}</div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-md font-bold self-start sm:self-center shrink-0 ${
                      perm.status === 'Required'
                        ? 'bg-[#E6F9FC] text-[#008FA8]'
                        : perm.status === 'Optional'
                        ? 'bg-amber-500/15 text-gold'
                        : 'bg-emerald-500/15 text-emerald-400'
                    }`}>
                      {perm.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            )}

            {/* Safe Installation & Verification Guide */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#D9EEF2] space-y-4">
              <h2 className="font-display font-extrabold text-xl text-[#172033] flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-[#00B8D9]" />
                <span>Safe Installation & Verification Protocol</span>
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-[#64748B] leading-relaxed">
                <p>
                  1. <strong>Verify Package Origin:</strong> Ensure any download package matches the official developer credentials (<code>{app.specs['Package Name']}</code>).
                </p>
                <p>
                  2. <strong>Avoid Unknown Mirrors:</strong> Never install modified, repackaged, or "cracked" APKs claiming to offer unlimited chips or modified algorithms.
                </p>
                <p>
                  3. <strong>Enforce Single-Use Installs:</strong> When prompted by Android to "Allow Unknown Sources", authorize solely for the single installer and disable the permission immediately after.
                </p>
              </div>
            </div>

            {app.faqs.length > 0 && (
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#D9EEF2] space-y-4">
              <h2 className="font-display font-extrabold text-xl text-[#172033] flex items-center gap-2">
                <span className="w-2 h-6 bg-[#00B8D9] rounded-full" />
                <span>Frequently Asked Questions</span>
              </h2>
              <div className="space-y-3 pt-2">
                {app.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border border-[#D9EEF2] rounded-xl bg-[#F8FAFC] overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                      className="w-full p-4 flex items-center justify-between text-left text-sm font-bold text-[#172033] hover:text-[#008FA8] transition-colors"
                    >
                      <span>{faq.q}</span>
                      {openFaq === idx ? (
                        <ChevronUp className="w-4 h-4 text-[#00B8D9] shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#64748B] shrink-0" />
                      )}
                    </button>
                    {openFaq === idx && (
                      <div className="px-4 pb-4 text-xs sm:text-sm text-[#64748B] leading-relaxed border-t border-[#D9EEF2] pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            )}

          </div>

          {/* Sidebar Column (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Technical Specifications Sheet */}
            <div className="p-6 rounded-2xl bg-[#111111] border border-neutral-800 space-y-4">
              <h2 className="font-display font-bold text-base text-white flex items-center gap-2 uppercase tracking-wide">
                <Cpu className="w-4 h-4 text-gold" />
                <span>App Information</span>
              </h2>

              <div className="space-y-3 text-xs divide-y divide-neutral-800/80">
                {Object.entries(app.specs).map(([key, val]) => (
                  <div key={key} className="pt-2.5 first:pt-0 flex flex-col justify-between gap-1">
                    <span className="text-neutral-500 font-medium">{key}</span>
                    <span className="text-neutral-200 font-semibold">{val}</span>
                  </div>
                ))}
                <div className="pt-2.5 flex flex-col justify-between gap-1">
                  <span className="text-neutral-500 font-medium">Developer</span>
                  <span className="text-gold font-semibold">{app.developer}</span>
                </div>
                <div className="pt-2.5 flex flex-col justify-between gap-1">
                  <span className="text-neutral-500 font-medium">Device Compatibility</span>
                  <span className="text-neutral-200 font-semibold">{app.compatibility}</span>
                </div>
              </div>
            </div>

            {app.isAudited !== false && (
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#181818] to-[#0E0E0E] border border-gold/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gold uppercase tracking-wider">
                  Verification Status
                </span>
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="text-2xl font-display font-black text-white">
                98 <span className="text-xs text-neutral-400 font-normal">/ 100 Safety Index</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Standard minimal Android permissions, valid TLS encryption and certified random table shuffler.
              </p>
            </div>
            )}

            {/* Related Applications */}
            <div className="p-6 rounded-2xl bg-[#111111] border border-neutral-800 space-y-4">
              <h3 className="font-display font-bold text-base text-white uppercase tracking-wide">
                Similar {app.category} Apps
              </h3>
              <div className="space-y-3">
                {relatedApps.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/app/${rel.slug}`}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-gold/40 transition-colors group"
                  >
                    <AppIconBadge app={rel} size="sm" />
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-xs text-white group-hover:text-gold transition-colors truncate">
                        {rel.name}
                      </div>
                      <div className="text-[10px] text-neutral-400">
                        {rel.size} • {rel.rating} ★
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Informational Notice */}
            <DisclaimerBanner compact={true} />

          </div>

        </div>
      </div>
    </div>
  );
}
