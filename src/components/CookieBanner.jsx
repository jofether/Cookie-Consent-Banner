import React from 'react';

export function CookieBanner({ onAcceptAll, onCustomize, onReject }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 md:p-10 animate-in fade-in zoom-in-95 duration-300">
        <div className="text-6xl mb-6 text-center">🍪</div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">We Value Your Privacy</h2>
        
        <p className="text-gray-300 text-center mb-2 leading-relaxed">
          We use cookies to enhance your experience and analyze our traffic. 
        </p>
        <p className="text-gray-600 text-center text-sm mb-8">
          You can customize your preferences or accept all cookies.
        </p>

        <div className="space-y-3">
          <button
            onClick={onAcceptAll}
            className="w-full px-6 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            ✓ Accept All
          </button>
          
          <button
            onClick={onCustomize}
            className="w-full px-6 py-4 border-2 border-indigo-600 text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-all duration-300"
          >
            🎯 Customize
          </button>
          
          <button
            onClick={onReject}
            className="w-full px-6 py-3 text-gray-600 hover:text-gray-900 font-semibold transition-colors"
          >
            Reject Non-Essential Only →
          </button>
        </div>

        <p className="text-xs text-gray-500 text-center mt-6">
          <a href="#" className="hover:text-gray-700 underline">Learn more</a> about how we use cookies
        </p>
      </div>
    </div>
  );
}
