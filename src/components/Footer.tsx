
import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-gray-800/50">
      <div className="container mx-auto text-center text-white">
        <div className="flex justify-center mb-6">
          <Logo />
        </div>
        <div className="mb-6">
          <p className="text-lg mb-2">
            <a href="mailto:contact@propcloud.io" className="text-teal-600 hover:text-teal-400 transition-colors">
              contact@propcloud.io
            </a>
            {" • "}
            <a href="tel:+13022133107" className="text-teal-600 hover:text-teal-400 transition-colors">
              (302) 213-3107
            </a>
          </p>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="/terms" className="text-gray-400 hover:text-teal-400 transition-colors">
            Terms of Service
          </a>
          <a href="/privacy" className="text-gray-400 hover:text-teal-400 transition-colors">
            Privacy Policy
          </a>
        </div>
        <p className="text-gray-400">&copy; 2025 PropCloud Inc. Building the future of property management with AI.</p>
      </div>
    </footer>
  );
};

export default Footer;
