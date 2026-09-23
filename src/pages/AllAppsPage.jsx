import React, { useState, useMemo } from 'react';
import SeoHead from '../components/common/SeoHead';
import CategoryTabs from '../components/home/CategoryTabs';
import SearchAndFilter from '../components/home/SearchAndFilter';
import AppCard from '../components/home/AppCard';
import SecondaryNav from '../components/common/SecondaryNav';
import DisclaimerBanner from '../components/common/DisclaimerBanner';
import { APPS_DATA } from '../data/apps';
import { Sparkles, Layers, ShieldCheck } from 'lucide-react';

export default function AllAppsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('serial');
  const [viewMode, setViewMode] = useState('list');

  const filteredApps = useMemo(() => {
    return APPS_DATA.filter((app) => {
      if (activeCategory === 'new' && !app.isNew) return false;
      if (activeCategory !== 'all' && activeCategory !== 'new' && app.category.toLowerCase() !== activeCategory.toLowerCase()) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          app.name.toLowerCase().includes(q) ||
          app.category.toLowerCase().includes(q) ||
          app.shortDesc.toLowerCase().includes(q)
        );
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return parseInt(a.serial, 10) - parseInt(b.serial, 10);
    });
  }, [activeCategory, searchQuery, sortBy]);

  const categorySeo = useMemo(() => {
    switch (activeCategory) {
      case 'rummy':
        return {
          title: "Yono Rummy Apps Directory (21 Games) & Downloads | AllyonoApp",
          description: "Browse verified Yono Rummy apps, card game variants, signup bonus details, and fast UPI withdrawal thresholds on AllyonoApp."
        };
      case 'slots':
        return {
          title: "Yono Slots Games Directory & High-RTP Slot Apps | AllyonoApp",
          description: "Explore Yono slots games, reel machines, feature guides, and verified Android download packages on AllyonoApp."
        };
      case 'spin':
        return {
          title: "Yono Spin & Win Apps Directory & Lucky Wheel Games | AllyonoApp",
          description: "Discover Yono Spin and lucky wheel gaming applications with daily check-in rewards and instant payout information on AllyonoApp."
        };
      case 'gaming':
        return {
          title: "Yono Gaming & Card Apps Directory | AllyonoApp",
          description: "Explore multiplayer Yono gaming apps, multi-table card platforms, and verified technical specifications on AllyonoApp."
        };
      case 'new':
        return {
          title: "New Yono Gaming Apps 2026 – Latest Released Versions | AllyonoApp",
          description: "Discover new Yono games and newly updated applications for 2026 with verified package security on AllyonoApp."
        };
      default:
        return {
          title: "All Yono Games Directory (62 Apps) & Specifications | AllyonoApp",
          description: "Browse the complete directory of 62 Yono games, gaming app information, version specifications, and safety details on AllyonoApp."
        };
    }
  }, [activeCategory]);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "name": categorySeo.title,
        "description": categorySeo.description,
        "url": "https://allyonoapp.app/apps",
        "isPartOf": {
          "@type": "WebSite",
          "name": "AllyonoApp",
          "url": "https://allyonoapp.app"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://allyonoapp.app/" },
          { "@type": "ListItem", "position": 2, "name": "Apps", "item": "https://allyonoapp.app/apps" }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-bg-dark text-white">
      <SeoHead
        title={categorySeo.title}
        description={categorySeo.description}
        canonicalUrl="https://allyonoapp.app/apps"
        jsonLd={collectionSchema}
      />
      <SecondaryNav />

      {/* Header Banner */}
      <div className="py-12 bg-gradient-to-b from-bg-secondary via-[#0D0D0D] to-bg-dark border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold tracking-widest uppercase mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>FULL DIRECTORY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-black text-white">
            Yono Games <span className="gold-gradient-text">All Apps</span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto mt-2">
            Browse our comprehensive index of verified gaming applications with detailed safety ratings, version histories, and specifications.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Tabs */}
        <div className="mb-6">
          <CategoryTabs activeCategory={activeCategory} onSelectCategory={setActiveCategory} />
        </div>

        {/* Search & Sort Controls */}
        <div className="mb-6">
          <SearchAndFilter
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            sortBy={sortBy}
            setSortBy={setSortBy}
            viewMode={viewMode}
            setViewMode={setViewMode}
            totalResults={filteredApps.length}
          />
        </div>

        {/* Directory Results */}
        <div className="mb-8">
          <div className="text-xs text-neutral-400 font-semibold mb-3">
            Showing {filteredApps.length} applications
          </div>

          {filteredApps.length > 0 ? (
            <div className={
              viewMode === 'grid'
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                : "flex flex-col gap-3.5"
            }>
              {filteredApps.map((app, index) => (
                <AppCard key={app.id} app={app} index={index} viewMode={viewMode} />
              ))}
            </div>
          ) : (
            <div className="p-12 text-center rounded-2xl bg-[#121212] border border-neutral-800">
              <p className="text-neutral-400 text-sm">No applications found matching "{searchQuery}".</p>
            </div>
          )}
        </div>

        <DisclaimerBanner />

        <section className="mt-10 rounded-2xl border border-[#D9EEF2] bg-white p-6 sm:p-8 shadow-[0_4px_16px_rgba(0,184,217,0.05)]">
          <pre className="whitespace-pre-wrap font-sans text-sm leading-7 text-[#172033]">{`## All Yono Games – Download & Claim ₹500–₹1550 Signup Bonus Signup Bonus: ₹51 – ₹1550 Min. Withdrawal: ₹100 Payment: UPI, Paytm, PhonePe, GPay Updated: Daily new apps added Welcome to **YonoAllNewGames.com** — your #1 source for All Yono Games, Yono App download links and daily signup bonus updates. All Yono Games is a popular platform where players can explore a wide collection of real money gaming apps in one place. From rummy tables to slot spins and bingo games, you can enjoy multiple categories like **Rummy, Slots, Bingo, Arcade and Spin** games with daily rewards and exciting bonuses. This collection includes trending apps such as Yono Bonus, Bingo 101, Rumble Rummy, Joy Rummy, DIWA 777, INR Rummy, Boss Rummy, Ever 777, Yono 777, Rummy 888, Rummy 77, Rummy Ludo, 777 Game, OK Rummy, Good Slots, Hindi 777, Club INR, Game Rummy, Yes Spin, Love Rummy, Share Slots, Maha Games, Hi-Rummy, Jaiho Win, IND Club, Jaiho Slots, TOP Rummy, Ind Rummy, Slots Spin, MQM Bet, Saga Slots, Yn 777, ABC Rummy, Jaiho Arcade, Jaiho 777, Neta VIP, Rummy 91, Jaiho Rummy, Jaiho Spin, EN365, 101Z App, Rummy 365, Spin 101, Ind Bingo, My777, Bet213, Gogo Rummy, 789 Jackpot, Spin Gold, Spin 777, IND Slots, Spin Crush, Slots Winner, Spin Winner, MBM Bet, 567 Slots, Yono VIP, Yono Slots, Yono Arcade, Yono Rummy and many more. Popular apps: **Yono Rummy, Rummy 77, Rummy 888, Yono VIP, Yono 777, Slots Winner, Jaiho Rummy, Spin Gold, ABC Rummy, Joy Rummy, Ind Club, 567 Slots, Bingo 101, Spin Winner, Yono Arcade, Yono All Games, Spin Crush, 789 Jackpots, Gogo Rummy, Rummy 365** and many more. ### How to Download All Yono Games APK Downloading any app from All Yono Games is quick and simple. Just pick your favourite game from the list above, tap the **GET APP** button, and the latest APK will start downloading. Open the file, allow installation from unknown sources, and complete the setup. Register with your mobile number, verify the OTP, and your **₹100 signup bonus** is added instantly — ready to play and withdraw from just ₹100. ### Why Choose All Yono Games? 60+ trusted rummy, slots & 777 apps in one place Instant ₹100 welcome bonus on every new app Fast UPI / Paytm / PhonePe withdrawals Daily updated, safe and virus-free APK links 100% real cash games with quick redeem New earning apps added every single day ### Frequently Asked Questions **Is All Yono Games safe to download?** Yes. Every APK listed here is tested, updated daily and free from viruses, so you can install and play with full confidence. **How much bonus do I get?** Each new app gives you up to a **₹100** signup bonus, and the minimum redeem amount is only **₹100** directly to UPI or Paytm. **Which are the best Yono 777 games?** Popular 777 titles include Jaiho 777, Spin 777, Ever 777, Yn 777, SVIP 777, Hindi 777, Yono 777 and 777 Game for non-stop fun and real cash rewards. **How do I withdraw my winnings?** Open the app wallet, choose withdraw, enter your UPI ID or bank details, and your winnings are transferred quickly once you cross the ₹100 limit. Responsible Gaming Play responsibly. Only for 18+. Rummy is banned in: Andhra Pradesh, Sikkim, Nagaland, Assam, Arunachal Pradesh, Tamil Nadu, Odisha, and Telangana. Important Notice YonoAllNewGames.com does not run or own the apps listed here. The rummy app can be addictive and risky financially, so use them carefully. Only for 18+ people. Please read our [Disclaimer](https://yonoallnewgames.com/disclaimer) page and the specific disclaimer for each app. Alert: Rummy, a skill-based game, is banned by the government in Andhra Pradesh, Sikkim, Nagaland, Assam, Arunachal Pradesh, Tamil Nadu, Odisha, and Telangana. [Home](https://yonoallnewgames.com/)[About](https://yonoallnewgames.com/about)[Contact Us](https://yonoallnewgames.com/contact)[Privacy Policy](https://yonoallnewgames.com/privacy-policy)[Disclaimer](https://yonoallnewgames.com/disclaimer)[DMCA & RMA](https://yonoallnewgames.com/dmca-rma)[Terms](https://yonoallnewgames.com/terms) TAGS: Yono All New Games, All Yono App, All Yono Games, Yono All Games, New Yono App, New Yono Games, All Yono Apps, Yono Rummy, Yono Games, Yono Slots, Yono Rummy App, All Best Yono App, Top 10 Rummy Apps, All Rummy App, Yono 51 Bonus, Yono All App, All Yono App List 51 Bonus, Yono List, Yono All Apk, Yono 51 Apk, Yono Bonus 51 Rupees Free, All Yono Game, Yono All Game, Yono Game List, Yono 41 Bonus, All Yono Apk, All Yono App Link, All Yono Store, Best Yono App, All Yono App List 2026, Top Yono App, Yono App List, All New Yono App, Yono 777, Yono Winner, Yono VIP, Yono Arcade, Jaiho Rummy, Spin Gold, Slots Winner, Yono Real Money, Yono Cash Game, Yono Win Cash, Yono Sign Up Bonus, Yono Referral Bonus, Yono Withdrawal, Yono Min Withdrawal, Yono Android Download, Yono Latest Version, Yono 2026, Best Rummy App, Top Rummy App, Best Rummy App 2026, New Rummy App, Rummy App Download, Rummy 51 Bonus, Rummy Sign Up Bonus, Free Rummy App, Online Rummy App, Real Cash Rummy, Best Slot Game App, Slot Machine App, Online Slots App, Real Money Slots, Spin And Win App, Earn Money App, Teen Patti App, Ludo Earn Money, Fantasy App Download, Best Gaming App India, Best Earning App India, New Earning App 2026, All New Games, New Games 2026, Top 10 Gaming Apps, Yono All New Games 2026, Yono App Store, Yono App Download, Yono Download Link, Yono APK Free Download # **Download All Yono Games** from here and explore unlimited earning apps like Dhan Game, Joy Rummy, INR Rummy, Boss Rummy, Rummy 888, Rummy 77, Rummy Ludo, OK Rummy, Game Rummy, Rumble Rummy, Love Rummy, Hi Rummy, Top Rummy, Rummy 91, IND Rummy, ABC Rummy, Jaiho Rummy, Yono Rummy, Gogo Rummy, Ever 777, Hindi 777, 777 Game, SVIP 777, Yn 777, Jaiho 777, Spin 777, Yono 777, Club INR, Yes Spin, Share Slots, Maha Games, Jaiho Win, Jaiho Slots, Jaiho Arcade, Jaiho Spin, IND Club, MQM Bet, MBM Bet, Rani Slots, Saga Slots, Slots Spin, Slots Winner, Spin Winner, Spin Gold, Spin 101, Spin Crush, Yono Games, Yono Slots, Yono Arcade, Yono VIP, Neta VIP, 789 Jackpots, 567 Slots, 101Z, Bingo 101 and Bet 213 Slots. All Yono Games APK is one of the best earning platforms where you can grab a ₹100 bonus with a minimum redeem of just ₹100 in every app. Play Yono Games such as Jaiho 91, Ind Slots, Ind Bingo, Good Slots, Diwa Vip to enjoy unlimited fun and real cash rewards daily — safe, updated APKs with instant UPI/Paytm withdrawals.Maha Yono Games (Uono Play) - New releases and updates of the Yono games and the Yono Rummy app. Download the new updates of Yono games apk and apps like Yono VIP, Yono Rummy, Yono Slots, Yono Jackpots and Ludo, Andhar Bahar, etc. Play and win rewards, bonuses, and jackpots with Yono Games, the ultimate platform for gaming enthusiasts! Yono Games lets you enjoy exciting games and rewards you for your skills. Invite your friends to join the fun and earn by referring them to Yono Games.`}</pre>
        </section>
      </div>
    </div>
  );
}
