import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { GUIDES_DATA } from '../data/guides';
import SecondaryNav from '../components/common/SecondaryNav';
import DisclaimerBanner from '../components/common/DisclaimerBanner';
import {
  ArrowLeft,
  BookOpen,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Share2,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export default function GuideDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const guide = GUIDES_DATA.find((g) => g.slug === slug);

  if (!guide) {
    return (
      <div className="min-h-screen bg-bg-dark text-white flex items-center justify-center p-4">
        <div className="text-center max-w-md p-8 rounded-2xl bg-[#121212] border border-neutral-800">
          <AlertTriangle className="w-12 h-12 text-gold mx-auto mb-3" />
          <h2 className="text-2xl font-bold mb-2">Guide Not Found</h2>
          <p className="text-sm text-neutral-400 mb-6">The requested educational article could not be located.</p>
          <Link
            to="/how-to-play"
            className="px-6 py-2.5 rounded-xl bg-gold text-black font-bold text-xs uppercase inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Guides</span>
          </Link>
        </div>
      </div>
    );
  }

  const otherGuides = GUIDES_DATA.filter((g) => g.id !== guide.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-bg-dark text-white pb-16">
      <SecondaryNav />

      {/* Breadcrumb */}
      <div className="bg-[#090909] border-b border-neutral-800/80 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <Link to="/how-to-play" className="hover:text-gold">Guides</Link>
            <span>/</span>
            <span className="text-neutral-200 font-semibold">{guide.title}</span>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1 text-gold hover:underline font-bold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Header */}
        <div className="space-y-3 pb-8 border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-gold/15 text-gold border border-gold/30">
              {guide.category}
            </span>
            <span className="text-xs text-neutral-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {guide.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-display font-black text-white leading-tight">
            {guide.title}
          </h1>

          <p className="text-base text-neutral-300 leading-relaxed pt-1">
            {guide.summary}
          </p>
        </div>

        {/* Guide Sections */}
        <div className="py-8 space-y-10">
          {guide.sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white flex items-center gap-2">
                <span className="w-2 h-6 bg-gold rounded-full" />
                <span>{section.heading}</span>
              </h2>

              {section.content && (
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  {section.content}
                </p>
              )}

              {/* Checklist */}
              {section.checklist && (
                <div className="space-y-2.5 pt-2">
                  {section.checklist.map((item, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-[#121212] border border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div>
                        <div className="font-bold text-sm text-white">{item.name}</div>
                        <div className="text-xs text-neutral-400 mt-0.5">{item.note}</div>
                      </div>
                      <span className={`px-2.5 py-1 rounded-md text-xs font-bold self-start sm:self-center shrink-0 ${
                        item.status === 'High Risk' || item.status === 'Critical'
                          ? 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                          : item.status === 'Legitimate' || item.status === 'Verified'
                          ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                          : 'bg-gold/15 text-gold border border-gold/30'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Steps */}
              {section.steps && (
                <div className="space-y-2 pt-2">
                  {section.steps.map((step, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs sm:text-sm text-neutral-200"
                    >
                      <span className="w-6 h-6 rounded-full bg-gold text-black font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Informational Disclaimer */}
        <DisclaimerBanner />

        {/* Other Guides Carousel / Grid */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <h3 className="font-display font-bold text-lg text-white mb-4">
            Related Educational Guides
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherGuides.map((item) => (
              <Link
                key={item.id}
                to={`/guide/${item.slug}`}
                className="p-4 rounded-xl bg-[#111111] border border-neutral-800 hover:border-gold/50 transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] font-bold text-gold uppercase">{item.category}</div>
                  <div className="font-bold text-xs sm:text-sm text-white group-hover:text-gold transition-colors mt-1 line-clamp-2">
                    {item.title}
                  </div>
                </div>
                <div className="mt-3 text-[11px] text-neutral-500 flex items-center gap-1 font-semibold">
                  <span>Read Guide</span>
                  <ChevronRight className="w-3.5 h-3.5 text-gold" />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
