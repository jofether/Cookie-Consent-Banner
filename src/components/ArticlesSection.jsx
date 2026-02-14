import React from 'react';
import { ArticleCard } from './ArticleCard';

export function ArticlesSection() {
  const articles = [
    {
      title: 'React 19: New Features & Migration Guide',
      category: 'React',
      color: 'from-blue-400 to-cyan-500',
      readTime: '8 min read',
      date: 'Feb 10, 2026',
      author: {
        name: 'Sarah Chen',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      },
    },
    {
      title: 'Web Performance Optimization Best Practices',
      category: 'Performance',
      color: 'from-green-400 to-emerald-500',
      readTime: '12 min read',
      date: 'Feb 8, 2026',
      author: {
        name: 'Mike Johnson',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
      },
    },
    {
      title: 'Mastering CSS Grid & Flexbox',
      category: 'CSS',
      color: 'from-yellow-400 to-orange-500',
      readTime: '10 min read',
      date: 'Feb 5, 2026',
      author: {
        name: 'Emma Davis',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
      },
    },
    {
      title: 'TypeScript Best Practices For Scalable Apps',
      category: 'TypeScript',
      color: 'from-blue-500 to-purple-600',
      readTime: '11 min read',
      date: 'Feb 3, 2026',
      author: {
        name: 'Alex Kumar',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
      },
    },
    {
      title: 'API Security & Authentication Guide',
      category: 'Security',
      color: 'from-red-400 to-pink-500',
      readTime: '9 min read',
      date: 'Feb 1, 2026',
      author: {
        name: 'Lisa Wang',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
      },
    },
    {
      title: 'DevOps Essentials for Frontend Developers',
      category: 'DevOps',
      color: 'from-green-500 to-teal-600',
      readTime: '7 min read',
      date: 'Jan 30, 2026',
      author: {
        name: 'Tom Wilson',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tom',
      },
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Latest Articles</h2>
          <p className="text-xl text-gray-600">Curated content from our expert developers</p>
        </div>

        {/* [BUG - LAYOUT] lg:grid-cols-5 breaks the intended 3-column layout */}
        {/* [FIX] Change lg:grid-cols-5 to lg:grid-cols-3 */}
        {/* [BUG - SPACING] Zero gap causes article cards to overlap completely */}
        {/* [FIX] Change gap-0 to gap-6 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {articles.map((article, idx) => (
            <ArticleCard key={idx} {...article} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300">
            View All Articles →
          </button>
        </div>
      </div>
    </section>
  );
}
