import React, { useState } from 'react';

export function CookiePreferences({ isOpen, onClose, onApply }) {
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
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white p-8">
          <h2 className="text-3xl font-bold mb-2">Cookie Preferences</h2>
          <p className="text-indigo-100 text-sm">Manage how we use cookies to enhance your experience</p>
        </div>

        <div className="p-8 space-y-4 max-h-64 overflow-y-auto">
          {/* Essential */}
          <div className="border border-gray-200 rounded-xl p-5 bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-gray-900 text-lg">🔒 Essential Cookies</h3>
                <p className="text-sm text-gray-600 mt-1">Required for website functionality. Cannot be disabled.</p>
              </div>
              <div className="relative">
                <input
                  type="checkbox"
                  checked={preferences.essential}
                  disabled
                  className="w-6 h-6 text-indigo-600 cursor-not-allowed accent-indigo-600"
                />
              </div>
            </div>
          </div>

          {/* Analytics */}
          <div className="border border-gray-200 rounded-xl p-5 hover:bg-indigo-50 hover:border-indigo-200 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-gray-900 text-lg">📊 Analytics Cookies</h3>
                <p className="text-sm text-gray-600 mt-1">Help us understand how you use our website and improve it.</p>
              </div>
              <div className="relative">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={() => handleToggle('analytics')}
                  className="w-6 h-6 text-indigo-600 cursor-pointer accent-indigo-600"
                />
              </div>
            </div>
          </div>

          {/* Marketing */}
          <div className="border border-gray-200 rounded-xl p-5 hover:bg-indigo-50 hover:border-indigo-200 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-gray-900 text-lg">🎯 Marketing Cookies</h3>
                <p className="text-sm text-gray-600 mt-1">Used to show you personalized ads and content.</p>
              </div>
              <div className="relative">
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={() => handleToggle('marketing')}
                  className="w-6 h-6 text-indigo-600 cursor-pointer accent-indigo-600"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 p-6 bg-gray-50 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-xl text-gray-700 font-semibold hover:bg-gray-100 transition-all duration-300 hover:border-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={() => onApply(preferences)}
            className="flex-1 px-4 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Apply Settings
          </button>
        </div>
      </div>
    </div>
  );
}
