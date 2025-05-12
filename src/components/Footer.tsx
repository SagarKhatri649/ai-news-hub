
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ai-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <img
                src="https://pbs.twimg.com/profile_images/1669796528976699414/uOtGUD_D_400x400.jpg"
                alt="AI News Hub Logo"
                className="h-10 w-auto mr-2"
              />
              <span className="text-xl font-semibold">AI News Hub</span>
            </Link>
            <p className="text-sm text-gray-300 mb-4">
              AI News Hub provides AI technology news, insights, and digital innovation coverage for technology professionals.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">NEWS</Link></li>
              <li><Link to="/interviews" className="text-gray-300 hover:text-white transition-colors">INTERVIEWS</Link></li>
              <li><Link to="/insights" className="text-gray-300 hover:text-white transition-colors">INSIGHTS</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-white transition-colors">EVENTS</Link></li>
              <li><Link to="/contact-us" className="text-gray-300 hover:text-white transition-colors">CONTACT US</Link></li>
            </ul>
          </div>
          
          {/* Our Other Sites */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Visit Our Other Sites</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-1 text-red-500 font-medium">TECH</span>
                  <span className="text-white font-medium">SERIES</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-1 text-blue-500 font-medium">SELECTED</span>
                  <span className="text-white font-medium">SERIES</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-1 text-yellow-500 font-medium">CIO</span>
                  <span className="text-white font-medium">INFLUENCE</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Follow Us */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
            
            <h3 className="text-lg font-medium mb-4">Editorial Services</h3>
            <p className="text-sm text-gray-300 mb-2">
              Interested in our Customized Editorial Services?
            </p>
            <p className="text-sm text-gray-300 mb-4">
              Please fill your details and we'll get in touch with you!
            </p>
            <a href="#" className="ai-btn block text-center">
              Contact Editor
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400">
          <p className="mb-2">© 2025 AI News Hub. All Rights Reserved. Privacy Policy</p>
          <p>To reproduce or use any of the content or material on this and our sister sites, explicit written permission needs to be sought.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
