
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-10 w-auto"
                src="https://pbs.twimg.com/profile_images/1669796528976699414/uOtGUD_D_400x400.jpg"
                alt="AI News Hub"
              />
              <span className="ml-2 text-xl font-semibold text-gray-900">AI News Hub</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium">
              NEWS
            </Link>
            <Link to="/interviews" className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium">
              INTERVIEWS
            </Link>
            <Link to="/insights" className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium">
              INSIGHTS
            </Link>
            <Link to="/ai-radar" className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium">
              AI RADAR
            </Link>
            <Link to="/services" className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium">
              SERVICES
            </Link>
            <div className="flex items-center space-x-2 ml-4">
              <Link to="/subscribe" className="ai-btn">
                SUBSCRIBE
              </Link>
              <Link to="/contact" className="border border-primary text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-md transition-colors">
                CONTACT US
              </Link>
            </div>
            <button className="text-gray-500 hover:text-gray-700">
              <Search size={20} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              NEWS
            </Link>
            <Link 
              to="/interviews" 
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              INTERVIEWS
            </Link>
            <Link 
              to="/insights" 
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              INSIGHTS
            </Link>
            <Link 
              to="/ai-radar" 
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              AI RADAR
            </Link>
            <Link 
              to="/services" 
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              SERVICES
            </Link>
            <Link 
              to="/subscribe" 
              className="block px-3 py-2 text-base font-medium text-primary hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              SUBSCRIBE
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-base font-medium text-primary hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
