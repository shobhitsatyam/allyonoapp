import React from 'react';
import { Send, X, ShieldCheck, Bell, Sparkles, ExternalLink } from 'lucide-react';

export default function TelegramModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-[#0F0F0F] border border-gold/40 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-gold/20 text-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Telegram Icon with Glow */}
        <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-gold-bright via-gold to-gold-dark p-0.5 shadow-gold-md">
          <div className="w-full h-full bg-[#121212] rounded-[14px] flex items-center justify-center text-gold">
            <Send className="w-8 h-8 -translate-x-0.5 translate-y-0.5" />
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-wide">
          Join Official Telegram
        </h3>
        <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
          Stay informed with real-time app update logs, safety warnings, version changes, and informational alerts.
        </p>

        {/* Feature Highlights */}
        <div className="mt-5 space-y-2.5 text-left bg-black/50 border border-neutral-800 rounded-xl p-3.5 text-xs text-neutral-300">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-gold shrink-0" />
            <span>Instant 2026 App Release Notifications</span>
          </div>
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>APK Safety & Integrity Advisory</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Bell className="w-4 h-4 text-gold shrink-0" />
            <span>Zero Spam — Informational Alerts Only</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6 flex flex-col gap-3">
          <a
            href="https://t.me/allyonoapp_official"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gold-gradient hover:bg-gold-gradient-hover text-black font-extrabold text-sm tracking-wider uppercase shadow-gold-md hover:scale-[1.02] active:scale-95 transition-all"
          >
            <Send className="w-4 h-4" />
            <span>OPEN TELEGRAM CHANNEL</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-75" />
          </a>
          <button
            onClick={onClose}
            type="button"
            className="text-xs text-neutral-400 hover:text-white py-1 transition-colors"
          >
            Dismiss
          </button>
        </div>

        <div className="mt-4 text-[10px] text-neutral-500">
          *AllyonoApp community channel is for informational broadcast only.
        </div>
      </div>
    </div>
  );
}
