import React from 'react';

export function Testimonials() {
  const testimonials = [
    {
      text: 'TechHub helped me transition from junior to senior developer. The resources are clear and up-to-date.',
      author: 'James Mitchell',
      role: 'Full Stack Developer',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
    },
    {
      text: 'Best platform for staying current with modern web development. Highly recommended!',
      author: 'Rachel Green',
      role: 'Frontend Engineer',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rachel',
    },
    {
      text: 'The tutorials are incredibly detailed and practical. I use the code snippets daily!',
      author: 'David Park',
      role: 'Web Developer',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Developers Say</h2>
          <p className="text-xl text-gray-600">Join thousands of developers improving their skills</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.author}</h4>
                  <p className="text-sm text-white">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-white leading-relaxed italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
