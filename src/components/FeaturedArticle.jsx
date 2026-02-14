import React from 'react';

export function FeaturedArticle() {
  return (
    <section className="mb-16">
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 cursor-pointer">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Side */}
          {/* [BUG - LAYERS] Positioning should be relative, not absolute with wrong offset */}
          {/* [FIX] Change absolute -top-20 to relative */}
          <div className="h-96 md:h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 absolute -top-20 overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-grid-pattern animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute top-6 left-6 text-6xl">🎨</div>
          </div>

          {/* Content Side */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-xs font-bold rounded-full uppercase tracking-wider">
                ⭐ Featured Article
              </span>
              <span className="text-sm text-gray-500 font-medium">Feb 14, 2026</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
              Mastering Modern Web Development in 2026
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Discover the essential skills and technologies that will define web development in 2026. 
              From AI-powered development tools to serverless architectures, we explore the latest trends 
              and best practices that will help you stay competitive in the industry.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">React 19</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Web Performance</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">AI Integration</span>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Writer1"
                alt="Author"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-bold text-gray-900">Alex Johnson</p>
                <p className="text-sm text-gray-600">Web Development Expert • 8 min read</p>
              </div>
              <button className="ml-auto px-6 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Read More →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
