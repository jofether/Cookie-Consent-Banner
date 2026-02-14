import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedArticle } from './components/FeaturedArticle';
import { ArticlesSection } from './components/ArticlesSection';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { CookiePreferences } from './components/CookiePreferences';

function App() {
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const [cookieConsent, setCookieConsent] = useState(() => {
    const saved = localStorage.getItem('cookieConsent');
    return saved ? JSON.parse(saved) : null;
  });

  const handleAcceptAll = () => {
    const consent = { essential: true, analytics: true, marketing: true };
    setCookieConsent(consent);
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
  };

  const handleReject = () => {
    const consent = { essential: true, analytics: false, marketing: false };
    setCookieConsent(consent);
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
  };

  const handlePreferencesApply = (preferences) => {
    setCookieConsent(preferences);
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setIsPreferencesOpen(false);
  };

  // Show cookie banner if no consent given
  if (cookieConsent === null) {
    return (
      <>
        <CookieBanner
          onAcceptAll={handleAcceptAll}
          onCustomize={() => setIsPreferencesOpen(true)}
          onReject={handleReject}
        />
        <CookiePreferences
          isOpen={isPreferencesOpen}
          onClose={() => setIsPreferencesOpen(false)}
          onApply={handlePreferencesApply}
        />
      </>
    );
  }

  // Main site content after consent
  return (
    <div className="min-h-screen bg-white">
      <Header onOpenCookieSettings={() => setIsPreferencesOpen(true)} />
      <Hero />
      <FeaturedArticle />
      <ArticlesSection />
      <Features />
      <Testimonials />
      <Newsletter />
      <Footer />

      <CookiePreferences
        isOpen={isPreferencesOpen}
        onClose={() => setIsPreferencesOpen(false)}
        onApply={handlePreferencesApply}
      />

      {/* Status badge */}
      <div className="fixed bottom-4 right-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-xs px-4 py-2 rounded-full shadow-lg font-semibold">
        🍪 Preferences Saved
      </div>
    </div>
  );
}

export default App;
