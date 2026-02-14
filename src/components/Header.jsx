import React from 'react';

export function Header({ onOpenCookieSettings }) {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // [BUG - LAYERS] z-index should be z-50 to stay on top
    // [FIX] Change z-10 to z-50
    <header
      className={`fixed w-full top-0 z-10 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg backdrop-blur-md bg-opacity-95'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <div>
            <h1 className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              TechHub
            </h1>
            <p className={`text-xs font-medium transition-colors duration-300 ${
              isScrolled ? 'text-gray-600' : 'text-indigo-100'
            }`}>
              Web Development & Innovation
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className={`font-medium transition-colors duration-300 ${
            isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white hover:text-indigo-200'
          }`}>
            Articles
          </a>
          <a href="#" className={`font-medium transition-colors duration-300 ${
            isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white hover:text-indigo-200'
          }`}>
            Tutorials
          </a>
          <a href="#" className={`font-medium transition-colors duration-300 ${
            isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white hover:text-indigo-200'
          }`}>
            Resources
          </a>
        </div>

        <button
          onClick={onOpenCookieSettings}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
            isScrolled
              ? 'bg-gray-100 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
              : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
          }`}
        >
          🍪 Cookies
        </button>
      </nav>
    </header>
  );
}
