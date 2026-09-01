import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, ShieldCheck, Sparkles, Send, Gamepad2, Info } from 'lucide-react';

export default function Footer({ onOpenTelegram }) {
  return (
    <footer className="bg-[#050505] border-t border-neutral-800 text-neutral-300 text-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        {/* Start Smart: Tips for New Players */}
        <section className="bg-[#0D0D0D] border border-neutral-800/90 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-gold shrink-0" />
            <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-tight">
              Start Smart: Tips for New Players
            </h2>
          </div>
          <p className="text-neutral-300 text-sm leading-relaxed">
            Getting started with All New Yono Apps is simple, but a few pointers can help you feel right at home from the first click. Whether you’ve been playing for years or you’re trying something new, these tips can make your experience smoother and more enjoyable.
          </p>
          <ul className="space-y-3.5 pt-2 text-sm">
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
              <div className="leading-relaxed">
                <strong className="text-white">Begin with Simpler Games:</strong> If you’re new here, start with games that are easy to pick up. Titles like Yono Rummy and other card classics have clear instructions and familiar rules. Once you feel comfortable, you can branch out into premium games that offer more depth and variety.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
              <div className="leading-relaxed">
                <strong className="text-white">Use the New Yono App:</strong> The New Yono App is the quickest way to download your favorites and manage your collection. Many players find it helpful to access games on the go without searching through long lists.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
              <div className="leading-relaxed">
                <strong className="text-white">Check Reviews Before You Play:</strong> Every game page has reviews and ratings from other players. Reading these can give you a sense of what to expect, especially if you’re unsure which game to try first. Reviews often highlight small details you might miss on your own.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
              <div className="leading-relaxed">
                <strong className="text-white">Don’t Play Continuously:</strong> Gaming is more fun when you pace yourself. Short breaks keep your mind fresh and help you enjoy each session without feeling tired or distracted. A quick walk or a few minutes away from the screen can make a big difference.
              </div>
            </li>
          </ul>
        </section>

        {/* Join Community Discussions */}
        <section className="bg-[#0D0D0D] border border-neutral-800/90 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2.5">
            <Send className="w-5 h-5 text-gold shrink-0" />
            <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-tight">
              Join Community Discussions
            </h2>
          </div>
          <p className="text-neutral-300 text-sm leading-relaxed">
            Our community is filled with players who share strategies, tips, and encouragement. Whether you want advice on improving your skills or you’d just like to connect, you’ll find plenty of helpful voices ready to welcome you.
          </p>
          <div className="pt-2">
            <a
              href="https://t.me/AllYonowebsit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gold-gradient hover:bg-gold-gradient-hover text-black font-extrabold text-xs uppercase tracking-wider shadow-gold-sm hover:scale-105 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Join Telegram Channel</span>
            </a>
          </div>
        </section>

        {/* Disclaimer & Important Alert Section */}
        <section className="space-y-6">
          {/* Disclaimer */}
          <div className="bg-[#120A0A] border border-red-900/40 rounded-2xl p-6 sm:p-8 space-y-3.5">
            <h3 className="font-display font-extrabold text-lg sm:text-xl text-red-500 flex items-center gap-2">
              <Info className="w-5 h-5 text-red-500 shrink-0" />
              <span>Disclaimer:</span>
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed">
              All New Yono Apps .com is an independent platform. We don’t own, manage, or operate any of the apps you see listed here. Our website is designed to help you discover and learn about different gaming options, but we don’t control how those apps work or handle their services.
            </p>
            <p className="text-neutral-300 text-sm leading-relaxed">
              It’s important to know that rummy apps can be addictive for some people. They also carry financial risks, especially if you’re not careful with your spending. That’s why we strongly recommend using these apps responsibly. If you choose to play, please set limits and stay aware of your habits.
            </p>
          </div>

          {/* Important Alert Box */}
          <div className="bg-[#171104] border border-amber-500/40 rounded-2xl p-6 sm:p-8 space-y-3.5">
            <h3 className="font-display font-extrabold text-lg sm:text-xl text-amber-400 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
              <span>Important Alert</span>
            </h3>
            <p className="text-neutral-200 text-sm leading-relaxed font-medium">
              Rummy, even as a skill-based game, is not legal everywhere. It is banned by the government in the following states: <span className="text-white font-bold">Andhra Pradesh, Sikkim, Nagaland, Assam, Arunachal Pradesh, Tamil Nadu, Odisha, and Telangana</span>. If you live in any of these places, you should not download or play rummy apps.
            </p>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              If you have questions about whether these games are allowed in your area or about how to play safely, please read all disclaimers carefully or get legal advice.
            </p>
          </div>
        </section>

        {/* Brand Banner Bar */}
        <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-center space-y-1.5">
          <p className="text-xs sm:text-sm font-bold text-gold">
            All New Yono Apps - Download All Yono Rummy App And Get ₹500 To ₹1500 Sign Up Bonus With Minimum Withdrawal In ₹100 Each
          </p>
          <p className="text-[11px] sm:text-xs text-neutral-400 font-semibold tracking-wide">
            Yono App | Yono Rummy | Yono 777 App | Yono Games | Yono App
          </p>
        </div>

        {/* All Yono Games Platform Story */}
        <section className="bg-[#0D0D0D] border border-neutral-800/90 rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-tight">
            All Yono Games
          </h2>
          <p className="text-neutral-300 text-sm leading-relaxed">
            All New Yono Apps was born in May 2025 with a simple idea: to give every player in India a place to discover, play, and enjoy games that feel both familiar and fresh. We noticed how much people love games that ask for more than just tapping a screen.
          </p>
          <p className="text-neutral-300 text-sm leading-relaxed">
            You want something that makes you think, plan, and stay engaged. That’s why our collection blends easy fun with real challenges. From the start, we focused on Indian tastes and habits. Whether it’s a classic like Yono Rummy or a new release that’s gaining fans, each title on our platform has been picked because it clicks with how you like to play.
          </p>
          <p className="text-neutral-300 text-sm leading-relaxed">
            We also knew that finding and downloading these games shouldn’t feel like a chore. That’s why we created the New Yono App. But more than anything, All New Yono Apps is about people. It’s about players who love sharing tips, celebrating wins, and learning together. Here, you’re part of a community that believes gaming is better when everyone feels connected.
          </p>

          {/* Why Thousands Choose All New Yono Apps ? */}
          <div className="pt-6 border-t border-neutral-800/80 space-y-4">
            <h3 className="font-display font-extrabold text-lg sm:text-xl text-gold tracking-tight">
              Why Thousands Choose All New Yono Apps ?
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed">
              When it comes to finding games you can trust and enjoy, All New Yono Apps makes the choice easy. We’ve built our platform with clear goals: keep things simple, reliable, and tailored to what Indian players want most.
            </p>
            <ul className="space-y-3 pt-1 text-sm">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                <div className="leading-relaxed">
                  <strong className="text-white">India-Focused Selection:</strong> Every game you see here has been chosen with local preferences in mind...
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                <div className="leading-relaxed">
                  <strong className="text-white">Instant Play & Download:</strong> We understand your time matters. That’s why you can start playing in only a few steps...
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                <div className="leading-relaxed">
                  <strong className="text-white">Easy Navigation:</strong> Picking out your next game shouldn’t be a hassle...
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                <div className="leading-relaxed">
                  <strong className="text-white">Trusted Platform:</strong> Safety and trust are at the core oF All New Yono Apps ...
                </div>
              </li>
            </ul>
          </div>

          {/* Games for Every Mood */}
          <div className="pt-6 border-t border-neutral-800/80 space-y-4">
            <h3 className="font-display font-extrabold text-lg sm:text-xl text-gold tracking-tight">
              Games for Every Mood
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed">
              People play for all sorts of reasons. You might enjoy the rush of competing, or maybe you prefer to unwind with something simple. At All New Yono Apps , finding the right game is easy. The categories are set up so you can browse without any hassle. Each section features games picked for their quality and the way they keep you coming back for more.
            </p>
            <ul className="space-y-3 pt-1 text-sm">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                <div className="leading-relaxed">
                  <strong className="text-white">Card Classics:</strong> If you enjoy testing your skills and staying sharp, start here. Play favorites like Yono Rummy...
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                <div className="leading-relaxed">
                  <strong className="text-white">Puzzles & Brain Teasers:</strong> Everyone has their reason for playing. Some enjoy the buzz of competition...
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                <div className="leading-relaxed">
                  <strong className="text-white">Fantasy & Sports:</strong> Bring your competitive side to life. Build a winning team, craft your strategy...
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                <div className="leading-relaxed">
                  <strong className="text-white">Casual Fun:</strong> Not every game has to be serious. When you’d rather unwind...
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                <div className="leading-relaxed">
                  <strong className="text-white">Fast Challenges:</strong> Need a little rush? These time-based games keep you on your toes...
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Footer Navigation & Copyright */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© 2026 All New Yono Apps. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-neutral-400">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>•</span>
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-gold transition-colors">Terms</Link>
            <span>•</span>
            <Link to="/disclaimer" className="hover:text-gold transition-colors">Disclaimer</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-gold transition-colors">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
