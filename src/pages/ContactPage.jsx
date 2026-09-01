import React, { useState } from 'react';
import SecondaryNav from '../components/common/SecondaryNav';
import DisclaimerBanner from '../components/common/DisclaimerBanner';
import { Mail, Send, MapPin, CheckCircle2, MessageSquare, ShieldAlert, Sparkles } from 'lucide-react';

export default function ContactPage({ onOpenTelegram }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'App Information Update', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-bg-dark text-white pb-16">
      <SecondaryNav />

      {/* Hero Banner */}
      <div className="py-12 bg-gradient-to-b from-bg-secondary via-[#0D0D0D] to-bg-dark border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold tracking-widest uppercase mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>EDITORIAL & INQUIRIES</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-black text-white">
            Contact <span className="gold-gradient-text">AllyonoApp.app</span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto mt-2">
            Have questions about app listings, version correction requests, or safety report inquiries? Get in touch with our editorial desk.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details & Telegram Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-[#111111] border border-neutral-800 space-y-6">
              <h2 className="font-display font-extrabold text-xl text-white">
                Contact Information
              </h2>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-900 border border-neutral-800">
                  <Mail className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <div className="text-neutral-500 font-medium">Editorial & Corrections</div>
                    <a href="mailto:support@allyonoapp.app" className="text-white hover:text-gold font-bold">
                      support@allyonoapp.app
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-900 border border-neutral-800">
                  <Send className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <div className="text-neutral-500 font-medium">Telegram Channel</div>
                    <a
                      href="https://t.me/AllYonowebsit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:underline font-bold text-left block"
                    >
                      @AllYonowebsit
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-900 border border-neutral-800">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <div className="text-neutral-500 font-medium">Operational Jurisdiction</div>
                    <div className="text-neutral-300 font-medium">India (Informational Indexing)</div>
                  </div>
                </div>
              </div>

              {/* Notice Box */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-gold/30 text-xs text-neutral-300 space-y-1">
                <strong className="text-gold">Please Note:</strong> We are an informational directory and cannot assist with account balances, third-party passwords, or game transactions on external apps.
              </div>
            </div>

            {/* Telegram Community Quick Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-gold-bright/10 via-gold/5 to-transparent border border-gold/30 flex items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-sm text-white">Join Community Telegram</h3>
                <p className="text-xs text-neutral-400 mt-0.5">Instant alerts & release updates</p>
              </div>
              <a
                href="https://t.me/AllYonowebsit"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-gold text-black font-extrabold text-xs uppercase shadow-gold-sm hover:scale-105 transition-all text-center inline-block"
              >
                Join
              </a>
            </div>

          </div>

          {/* Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#111111] border border-neutral-800">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Received</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto">
                    Thank you for reaching out to the AllyonoApp editorial team. We will review your message and reply via email within 24 to 48 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'App Information Update', message: '' });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-xs font-bold text-gold uppercase border border-neutral-700"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="font-display font-extrabold text-xl text-white mb-2">
                    Send an Inquiry
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 focus:border-gold focus:outline-none text-xs sm:text-sm text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 focus:border-gold focus:outline-none text-xs sm:text-sm text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1.5">
                      Subject / Topic *
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 focus:border-gold focus:outline-none text-xs sm:text-sm text-white"
                    >
                      <option value="App Information Update">App Information / Version Update</option>
                      <option value="Security Report">Report Suspicious Application</option>
                      <option value="Content Correction">Listing / Guide Content Correction</option>
                      <option value="General Question">General Editorial Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1.5">
                      Message Details *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please provide details regarding your inquiry..."
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 focus:border-gold focus:outline-none text-xs sm:text-sm text-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gold-gradient hover:bg-gold-gradient-hover text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-gold-sm transition-all"
                  >
                    SUBMIT INQUIRY
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

        <DisclaimerBanner />
      </div>
    </div>
  );
}
