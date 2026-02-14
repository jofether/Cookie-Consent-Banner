import React from 'react';

export function ArticleCard({ title, category, color, image, readTime = '5 min read', author, date }) {
  return (
    <div className="group cursor-pointer">
      <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
        <div className={`h-48 bg-gradient-to-br ${color} relative overflow-hidden`}>
          <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-500 opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          {image && (
            <img src={image} alt={title} className="w-full h-full object-cover mix-blend-overlay" />
          )}
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full">
              {category}
            </span>
            <span className="text-xs text-gray-500">•</span>
            <span className="text-xs text-gray-500">{date}</span>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
            {title}
          </h3>

          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <span className="text-sm text-gray-500 font-medium">{readTime}</span>
            {author && (
              <div className="flex items-center gap-2">
                <img 
                  src={author.avatar} 
                  alt={author.name}
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-xs text-gray-600 font-medium">{author.name}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
