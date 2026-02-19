import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12 bg-gray-90">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">T</span>
              </div>
              <span className="font-bold text-white text-lg">TechHub</span>
            </div>
            <p className="text-sm leading-relaxed">
              Your source for web development knowledge, tutorials, and industry insights.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Tutorials</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Guides</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Code Snippets</a></li>
            </ul>
          </div>

          {/* Learning */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Learning</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">React Course</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Web Design</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">JavaScript</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Web Performance</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Disclaimer</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Discord</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center md:text-left">
              &copy; {currentYear} TechHub. All rights reserved. Crafted with ❤️ for developers.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-sm hover:text-indigo-400 transition-colors">Sitemap</a>
              <a href="#" className="text-sm hover:text-indigo-400 transition-colors">Status</a>
              <a href="#" className="text-sm hover:text-indigo-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
