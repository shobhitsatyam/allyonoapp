import React from 'react';
import { ShieldCheck, Sparkles, BookOpen, Layers, Smartphone, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero({ onOpenTelegram }) {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 lg:pt-14 lg:pb-20 bg-hero-gradient">
      {/* Ambient background particles & glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-amber-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headings, Bio, Badges, Action buttons */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Small Badge / Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE TRUSTED GAMING DIRECTORY</span>
            </div>

            {/* Main Headings */}
            <div className="space-y-1">
              <h2 className="text-sm sm:text-base font-semibold text-neutral-300 tracking-wider uppercase">
                WELCOME TO
              </h2>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-display font-black tracking-tight text-white">
                <span className="gold-gradient-text">AllyonoApp</span>
                <span className="text-white">.app</span>
              </h1>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Explore gaming apps, app information, guides and the latest updates in one place. Discover verified versions, permission checklists, and comprehensive how-to-play resources.
            </p>

            {/* 3 Informational Feature Badges (Matching Reference Style) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#121212] border border-gold/25 hover:border-gold/50 transition-colors shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-gold/15 flex items-center justify-center text-gold shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] text-neutral-400 font-medium">Safe Verification</div>
                  <div className="text-xs sm:text-sm font-bold text-white">App Information</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#121212] border border-gold/25 hover:border-gold/50 transition-colors shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-gold/15 flex items-center justify-center text-gold shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] text-neutral-400 font-medium">2026 Editions</div>
                  <div className="text-xs sm:text-sm font-bold text-white">Latest Updates</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#121212] border border-gold/25 hover:border-gold/50 transition-colors shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-gold/15 flex items-center justify-center text-gold shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] text-neutral-400 font-medium">Step-by-Step</div>
                  <div className="text-xs sm:text-sm font-bold text-white">Easy Guides</div>
                </div>
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#app-directory"
                className="px-7 py-3.5 rounded-full bg-gold-gradient hover:bg-gold-gradient-hover text-black font-extrabold text-sm tracking-wider uppercase shadow-gold-md hover:scale-105 active:scale-95 transition-all"
              >
                BROWSE ALL APPS
              </a>
              <Link
                to="/how-to-play"
                className="px-6 py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-gold/30 hover:border-gold text-white font-bold text-sm tracking-wider uppercase transition-all"
              >
                VIEW GUIDES
              </Link>
            </div>

          </div>

          {/* Right Column: Custom 3D-feel Smartphone & Gaming Element Mockup */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            
            {/* Glowing Golden Ring Backdrop */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-gold/30 box-glow-strong animate-pulse" />
            </div>

            {/* Main Phone Graphic Container */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] p-4">
              
              {/* Floating Decorative Cards (Left & Right) */}
              <div className="absolute -top-3 -left-4 sm:-left-6 w-16 h-22 sm:w-20 sm:h-28 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-gold/50 p-2 shadow-2xl rotate-[-15deg] flex flex-col justify-between select-none z-10">
                <span className="text-xs font-black text-rose-500 font-display">A ♥</span>
                <span className="text-lg text-center text-rose-500">♥</span>
                <span className="text-xs font-black text-rose-500 font-display self-end rotate-180">A ♥</span>
              </div>

              <div className="absolute -top-4 -right-3 sm:-right-4 w-16 h-22 sm:w-20 sm:h-28 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-gold/50 p-2 shadow-2xl rotate-[18deg] flex flex-col justify-between select-none z-10">
                <span className="text-xs font-black text-gold font-display">A ♠</span>
                <span className="text-lg text-center text-gold">♠</span>
                <span className="text-xs font-black text-gold font-display self-end rotate-180">A ♠</span>
              </div>

              {/* Gold Coin / Token Badges */}
              <div className="absolute -bottom-4 -left-2 sm:-left-4 w-16 h-16 rounded-full bg-gradient-to-br from-gold-bright via-gold to-yellow-700 border-2 border-yellow-200 shadow-gold-lg flex items-center justify-center font-black text-black font-display text-xl z-20 animate-bounce">
                ₹
              </div>

              <div className="absolute -bottom-2 -right-2 sm:-right-4 w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 via-amber-600 to-amber-800 border-2 border-yellow-300 shadow-gold-md flex items-center justify-center font-black text-black font-display text-base z-20">
                777
              </div>

              {/* Smartphone Bezel */}
              <div className="relative rounded-[36px] bg-gradient-to-b from-neutral-700 via-neutral-900 to-neutral-950 p-3 border-2 border-gold/60 shadow-2xl shadow-gold/20">
                {/* Screen */}
                <div className="rounded-[28px] bg-[#070707] border border-neutral-800 overflow-hidden p-5 flex flex-col items-center justify-between min-h-[430px] relative">
                  
                  {/* Phone Notch & Speaker */}
                  <div className="w-24 h-4 bg-neutral-900 rounded-full mb-3 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-neutral-800 mr-2" />
                    <div className="w-8 h-1 bg-neutral-800 rounded-full" />
                  </div>

                  {/* App Directory Screen Simulation */}
                  <div className="w-full space-y-3.5 my-auto text-center">
                    
                    {/* Featured App Badge */}
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-gold-bright via-gold to-gold-dark p-0.5 shadow-gold-md">
                      <div className="w-full h-full bg-[#111111] rounded-[14px] flex flex-col items-center justify-center p-1">
                        <span className="text-[10px] font-black text-gold">YONO</span>
                        <span className="text-xs font-black text-white">ALL APPS</span>
                        <span className="text-[8px] font-semibold text-emerald-400">2026 HUB</span>
                      </div>
                    </div>

                    <div>
                      <div className="text-base font-display font-extrabold text-white">
                        ALLYONO APP
                      </div>
                      <div className="text-[11px] text-gold font-semibold">
                        Directory & Safety Guide
                      </div>
                    </div>

                    {/* Mini card rows */}
                    <div className="space-y-2 pt-1 text-left">
                      <div className="p-2 rounded-lg bg-neutral-900/90 border border-gold/20 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded bg-gold/20 text-gold flex items-center justify-center font-bold text-[10px]">
                            01
                          </div>
                          <span className="font-semibold text-white">Yono Bonus</span>
                        </div>
                        <span className="text-[10px] font-bold text-gold bg-gold/10 px-1.5 py-0.5 rounded">
                          Info
                        </span>
                      </div>

                      <div className="p-2 rounded-lg bg-neutral-900/90 border border-neutral-800 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px]">
                            02
                          </div>
                          <span className="font-semibold text-white">All Rummy Apps</span>
                        </div>
                        <span className="text-[10px] font-bold text-neutral-400 bg-neutral-800 px-1.5 py-0.5 rounded">
                          Info
                        </span>
                      </div>
                    </div>

                    {/* Quick Button inside phone */}
                    <div className="pt-1">
                      <a
                        href="#app-directory"
                        className="w-full block py-2 rounded-xl bg-gold text-black font-bold text-xs tracking-wider uppercase text-center shadow-gold-sm"
                      >
                        EXPLORE 95+ APPS
                      </a>
                    </div>

                  </div>

                  {/* Phone Home Bar */}
                  <div className="w-28 h-1 bg-neutral-700 rounded-full mt-2" />

                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
