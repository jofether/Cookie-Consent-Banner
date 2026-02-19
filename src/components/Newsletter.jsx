import React, { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <section className="relative overflow-hidden rounded-3xl -p-12 mb-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <div className="inline-block mb-4 text-4xl">📬</div>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Stay Updated with Latest Trends</h3>
        <p className="text-indigo-100 mb-8 text-lg">
          Get curated web development tips, tutorials, and industry insights delivered to your inbox every week.
        </p>

        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-5 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white transition-all"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap"
          >
            {subscribed ? '✨ Subscribed!' : 'Subscribe'}
          </button>
        </form>

        <p className="text-indigo-100 text-sm mt-4">
          ✓ No spam, unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  );
}
