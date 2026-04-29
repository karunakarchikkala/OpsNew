import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Facebook, Mail, MapPin, Phone, Rocket } from 'lucide-react';
import { COMPANY_NAME, NAV_ITEMS, LOGO_URL } from '../../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img src={LOGO_URL} alt={COMPANY_NAME} className="h-8 md:h-10 w-auto" />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Empowering businesses through cutting-edge technology and innovative software solutions. Your partner in digital transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white rounded-full border border-gray-200 text-gray-400 hover:text-blue-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-white rounded-full border border-gray-200 text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-white rounded-full border border-gray-200 text-gray-400 hover:text-blue-600 transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="font-bold text-gray-900 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-gray-500 hover:text-blue-600 transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h4 className="font-bold text-gray-900 mb-6">Our Expertise</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li>Software Development</li>
              <li>Cloud Infrastructure</li>
              <li>Business Automation</li>
              <li>Digital Marketing</li>
              <li>CMS Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="font-bold text-gray-900 mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-gray-500">
                <MapPin size={18} className="text-blue-600 mt-0.5 shrink-0" />
                <span>Plot no 120, Southern Part, Ghatkesar, Hyderabad, TG 501301</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-500">
                <Phone size={18} className="text-blue-600 shrink-0" />
                <span>+91 9949344353</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-500">
                <Phone size={18} className="text-blue-600 shrink-0" />
                <span>+91 7680002434</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-500">
                <Mail size={18} className="text-blue-600 shrink-0" />
                <span>tasksopssolutionpvtltd@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs mb-4 md:mb-0">
            © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
          <div className="flex space-x-8 text-xs text-gray-400">
            <Link to="/privacy" className="hover:text-blue-600">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-blue-600">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-blue-600">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
