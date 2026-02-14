import React from 'react';

export function Features() {
  const features = [
    {
      icon: '🚀',
      title: 'Latest Technologies',
      description: 'Stay up-to-date with React, Vue, Angular, and other cutting-edge frameworks.',
    },
    {
      icon: '📚',
      title: 'Comprehensive Guides',
      description: 'In-depth tutorials covering everything from basics to advanced concepts.',
    },
    {
      icon: '👥',
      title: 'Expert Community',
      description: 'Learn from industry professionals and experienced developers worldwide.',
    },
    {
      icon: '⚡',
      title: 'Best Practices',
      description: 'Proven patterns and techniques to write clean, efficient code.',
    },
    {
      icon: '🎯',
      title: 'Career Growth',
      description: 'Resources to help you advance your career in web development.',
    },
    {
      icon: '🔧',
      title: 'Practical Projects',
      description: 'Real-world projects to build your portfolio and practical skills.',
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose TechHub?</h2>
          <p className="text-xl text-gray-600">Everything you need to master web development</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
