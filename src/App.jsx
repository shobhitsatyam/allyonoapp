import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import TelegramModal from './components/common/TelegramModal';
import TelegramFloatingWidget from './components/common/TelegramFloatingWidget';
import ScrollToTop from './components/common/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import AllAppsPage from './pages/AllAppsPage';
import NewAppsPage from './pages/NewAppsPage';
import AppDetailPage from './pages/AppDetailPage';
import HowToPlayPage from './pages/HowToPlayPage';
import GuideDetailPage from './pages/GuideDetailPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import DisclaimerPage from './pages/DisclaimerPage';

export default function App() {
  const [telegramOpen, setTelegramOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-bg-dark text-white font-sans selection:bg-gold selection:text-black">
      <ScrollToTop />

      {/* Sticky Header */}
      <Header onOpenTelegram={() => setTelegramOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage onOpenTelegram={() => setTelegramOpen(true)} />} />
          <Route path="/apps" element={<AllAppsPage />} />
          <Route path="/new-apps" element={<NewAppsPage />} />
          <Route path="/app/:slug" element={<AppDetailPage />} />
          <Route path="/how-to-play" element={<HowToPlayPage />} />
          <Route path="/guide/:slug" element={<GuideDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/contact" element={<ContactPage onOpenTelegram={() => setTelegramOpen(true)} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="*" element={<HomePage onOpenTelegram={() => setTelegramOpen(true)} />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer onOpenTelegram={() => setTelegramOpen(true)} />

      {/* Floating Telegram Widget (Global) */}
      <TelegramFloatingWidget />

      {/* Telegram Community Modal */}
      <TelegramModal
        isOpen={telegramOpen}
        onClose={() => setTelegramOpen(false)}
      />
    </div>
  );
}
