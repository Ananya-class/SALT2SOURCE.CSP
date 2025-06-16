
import { Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">S2S</span>
              </div>
              <span className="text-xl font-bold">SALT2SOURCE</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Transforming salt water into sustainable clean water solutions. 
              Join our mission to make clean water accessible worldwide.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <Mail size={16} />
              <span>contact@salt2source.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/features" className="hover:text-blue-400 transition-colors">Features</Link></li>
              <li><Link to="/map" className="hover:text-blue-400 transition-colors">Map</Link></li>
              <li><Link to="/tips" className="hover:text-blue-400 transition-colors">Tips</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">
            © 2025 SALT2SOURCE. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
