import React from 'react';
import { AlertCircle, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DisclaimerBanner({ compact = false }) {
  if (compact) {
    return (
      <div className="bg-[#0c0c0c] border border-neutral-800 rounded-xl p-4 text-xs text-neutral-400 leading-relaxed">
        <div className="flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
          <p>
            <strong className="text-neutral-200">Informational Notice:</strong> AllyonoApp.app is an independent informational directory. We do not host APKs, process real-money transactions, or provide gambling services. Always verify jurisdiction legality before downloading third-party software.{' '}
            <Link to="/disclaimer" className="text-gold hover:underline font-semibold ml-1">
              Read Full Disclaimer
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-bg-secondary via-[#141414] to-bg-secondary border border-gold/25 rounded-2xl p-6 shadow-xl my-8">
      <div className="flex flex-col md:flex-row items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
          <ShieldAlert className="w-5 h-5" />
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-bold text-gold tracking-wide uppercase">
            Mandatory Informational & Legal Disclaimer
          </h4>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            <strong>AllyonoApp.app</strong> is strictly an educational and informational directory website. We do not operate, endorse, facilitate, or conduct real-money gaming or financial betting. Users must independently verify the legality, authenticity, security certificates, and terms of any third-party application before interacting with it. Digital gaming regulations vary significantly across regional states and jurisdictions.
          </p>
          <div className="flex flex-wrap gap-4 pt-1 text-xs">
            <span className="text-neutral-400">
              • 18+ Age Advisory for Real Money Gaming
            </span>
            <span className="text-neutral-400">
              • No Guaranteed Returns or Financial Claims
            </span>
            <Link to="/disclaimer" className="text-gold hover:text-gold-bright hover:underline font-bold">
              View Complete Disclaimer & Compliance Statement →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
