import React, { useState, useEffect } from 'react';

function CookiePreferences({ isOpen, onClose, onApply }) {
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });

  const handleToggle = (key) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full">
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-6">
          <h2 className="text-2xl font-bold">Cookie Preferences</h2>
          <p className="text-indigo-100 text-sm mt-2">Choose which cookies you allow us to use</p>
        </div>

        <div className="p-6 space-y-4">
          {/* Essential */}
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">Essential Cookies</h3>
                <p className="text-sm text-gray-600 mt-1">Required for website functionality. Cannot be disabled.</p>
              </div>
              <input
                type="checkbox"
                checked={preferences.essential}
                disabled
                className="w-5 h-5 text-indigo-600 cursor-not-allowed"
              />
            </div>
          </div>

          {/* Analytics */}
          <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">Analytics Cookies</h3>
                <p className="text-sm text-gray-600 mt-1">Help us understand how you use our website.</p>
              </div>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={() => handleToggle('analytics')}
                className="w-5 h-5 text-indigo-600 cursor-pointer"
              />
            </div>
          </div>

          {/* Marketing */}
          <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">Marketing Cookies</h3>
                <p className="text-sm text-gray-600 mt-1">Used to show personalized ads and content.</p>
              </div>
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={() => handleToggle('marketing')}
                className="w-5 h-5 text-indigo-600 cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 p-6 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            onClick={() => onApply(preferences)}
            className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const [cookieConsent, setCookieConsent] = useState(() => {
    const saved = localStorage.getItem('cookieConsent');
    return saved ? JSON.parse(saved) : null;
  });

  const handleAcceptAll = () => {
    const consent = { essential: true, analytics: true, marketing: true };
    setCookieConsent(consent);
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setIsBannerVisible(false);
  };

  const handleReject = () => {
    const consent = { essential: true, analytics: false, marketing: false };
    setCookieConsent(consent);
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setIsBannerVisible(false);
  };

  const handlePreferencesApply = (preferences) => {
    setCookieConsent(preferences);
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setIsPreferencesOpen(false);
    setIsBannerVisible(false);
  };

  if (cookieConsent === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center">
          <div className="text-5xl mb-4">🍪</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Cookie Settings</h2>
          <p className="text-gray-600 text-sm mb-6">
            We use cookies to enhance your experience and analyze our traffic. Choose your preferences below.
          </p>
          <div className="space-y-3">
            <button
              onClick={handleAcceptAll}
              className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-blue-700 transition shadow-lg"
            >
              Accept All
            </button>
            <button
              onClick={() => setIsPreferencesOpen(true)}
              className="w-full px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition"
            >
              Customize
            </button>
            <button
              onClick={handleReject}
              className="w-full px-6 py-3 text-gray-600 hover:text-gray-900 font-medium transition"
            >
              Reject Non-Essential
            </button>
          </div>
        </div>
        <CookiePreferences
          isOpen={isPreferencesOpen}
          onClose={() => setIsPreferencesOpen(false)}
          onApply={handlePreferencesApply}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg"></div>
            <span className="text-xl font-bold text-gray-900">TechHub</span>
          </div>
          <button
            onClick={() => setIsPreferencesOpen(true)}
            className="text-sm text-gray-600 hover:text-gray-900 transition underline"
          >
            Cookie Settings
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to TechHub</h1>
          <p className="text-lg text-indigo-100 mb-8 max-w-2xl">
            Discover the latest insights on technology, web development, and digital innovation.
          </p>
          <button className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition">
            Explore Articles
          </button>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Article */}
        <article className="mb-16">
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="h-96 bg-gradient-to-br from-purple-400 to-pink-600 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full">Featured</span>
                <span className="text-sm text-gray-500">Jan 12, 2026</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">The Future of Web Development</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Explore the cutting-edge technologies shaping the web development landscape. From AI-powered development tools 
                to serverless architectures, we dive into what's next in web innovation.
              </p>
              <div className="flex items-center gap-4">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Dev1" alt="Author" className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-semibold text-gray-900">Sarah Chen</p>
                  <p className="text-sm text-gray-500">Senior Tech Writer</p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            { title: "React 19 Features", category: "React", color: "from-blue-400 to-cyan-400" },
            { title: "Web Performance Tips", category: "Performance", color: "from-green-400 to-emerald-400" },
            { title: "CSS Grid Mastery", category: "CSS", color: "from-yellow-400 to-orange-400" },
            { title: "TypeScript Best Practices", category: "TypeScript", color: "from-blue-500 to-purple-500" },
            { title: "API Security Guide", category: "Security", color: "from-red-400 to-pink-400" },
            { title: "DevOps Essentials", category: "DevOps", color: "from-green-500 to-teal-500" },
          ].map((article, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow hover:shadow-lg transition group cursor-pointer">
              <div className={`h-40 bg-gradient-to-br ${article.color} relative overflow-hidden`}>
                <div className="absolute inset-0 group-hover:scale-110 transition duration-300"></div>
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold text-indigo-600 uppercase">{article.category}</span>
                <h3 className="text-lg font-bold text-gray-900 mt-2 group-hover:text-indigo-600 transition">{article.title}</h3>
                <p className="text-sm text-gray-500 mt-3">5 min read</p>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl p-8 text-white text-center mb-16">
          <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
          <p className="text-indigo-100 mb-6">Get the latest web development tips delivered to your inbox</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none"
            />
            <button className="px-6 py-2 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition">
              Subscribe
            </button>
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { number: "10K+", label: "Active Readers" },
            { number: "500+", label: "Articles Published" },
            { number: "50+", label: "Expert Contributors" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">{stat.number}</div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-r from-indigo-600 to-blue-600 rounded"></div>
                <span className="font-bold text-white">TechHub</span>
              </div>
              <p className="text-sm">Your source for web development knowledge and insights.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition">Guides</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Follow Us</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition">GitHub</a></li>
                <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-sm text-center">
            <p>&copy; 2026 TechHub. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Cookie Preferences Modal */}
      <CookiePreferences
        isOpen={isPreferencesOpen}
        onClose={() => setIsPreferencesOpen(false)}
        onApply={handlePreferencesApply}
      />

      {/* Consent Status Badge */}
      {cookieConsent && (
        <div className="fixed bottom-4 right-4 bg-gray-900 text-white text-xs px-4 py-2 rounded-lg shadow-lg">
          ✓ Preferences saved
        </div>
      )}
    </div>
  );
}

export default App;
