
import { Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-2 animate-fade-in">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center animate-glow">
                <span className="text-white font-bold text-sm">S2S</span>
              </div>
              <span className="text-xl font-bold">SALT2SOURCE</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md animate-slide-in-left">
              Transforming salt water into sustainable clean water solutions. 
              Join our mission to make clean water accessible worldwide.
            </p>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2 hover:text-blue-400 transition-colors animate-slide-in-left">
                <Mail size={16} />
                <span>ananyaanu151@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-blue-400 transition-colors animate-slide-in-left">
                <span>📞</span>
                <span>+91 8499811978</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-in-right">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-blue-400 transition-colors hover:translate-x-1 transform duration-200 block">Home</Link></li>
              <li><Link to="/features" className="hover:text-blue-400 transition-colors hover:translate-x-1 transform duration-200 block">Features</Link></li>
              <li><Link to="/map" className="hover:text-blue-400 transition-colors hover:translate-x-1 transform duration-200 block">Map</Link></li>
              <li><Link to="/tips" className="hover:text-blue-400 transition-colors hover:translate-x-1 transform duration-200 block">Tips</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors hover:translate-x-1 transform duration-200 block">About Us</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="animate-slide-in-right">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:rotate-12">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:rotate-12">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:rotate-12">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:rotate-12">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center animate-fade-in">
          <p className="text-gray-300">
            © 2025 SALT2SOURCE. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-all duration-300 text-sm hover:scale-110">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-all duration-300 text-sm hover:scale-110">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-all duration-300 text-sm hover:scale-110">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
