import React from 'react';

export function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-blue-400 to-cyan-400 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-700 rounded-full text-sm font-semibold">
              ✨ Welcome to the Future of Web Development
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 mb-6 leading-tight">
            Master Web Development Today
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover cutting-edge tutorials, best practices, and industry insights from expert developers. Level up your skills with TechHub.
          </p>

          {/* [BUG - LAYOUT] flex-col-reverse breaks natural button order */}
          {/* [FIX] Change flex-col-reverse to flex-col */}
          <div className="flex flex-col-reverse sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg">
              Start Learning
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300 text-lg">
              Explore Articles
            </button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-600">15K+</div>
              <p className="text-gray-600">Active Learners</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">500+</div>
              <p className="text-gray-600">Tutorials & Guides</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">98%</div>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
