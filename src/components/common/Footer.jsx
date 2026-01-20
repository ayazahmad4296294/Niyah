import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.webp';

const Footer = () => {
   return (
      <footer className="bg-primary text-white py-14 px-4 md:px-24 overflow-hidden">
         <div className="max-w-7xl mx-auto">
            {/* Logo Section */}
            <div className="mb-12">
               <img src={Logo} alt="Niyah Logo" className="w-22 h-22 brightness-0 invert" />
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 px-4">
               {/* About Section */}
               <div>
                  <h3 className="text-2xl font-semibold mb-6">About</h3>
                  <ul className="flex flex-col gap-4 text-sm text-gray-300">
                     <li><Link to="/about" className="font-medium hover:text-secondary transition-colors">About Us</Link></li>
                     <li><Link to="/contact" className="font-medium hover:text-secondary transition-colors">Contact Us</Link></li>
                     <li><Link to="/blog" className="font-medium hover:text-secondary transition-colors">Blog</Link></li>
                  </ul>
               </div>

               {/* Community Section */}
               <div>
                  <h3 className="text-2xl font-semibold mb-6">Community</h3>
                  <ul className="flex flex-col gap-4 text-sm text-gray-300">
                     <li><Link to="/reviews" className="font-medium hover:text-secondary transition-colors">Reviews</Link></li>
                     <li><Link to="/register" className="font-medium hover:text-secondary transition-colors">Register Now</Link></li>
                  </ul>
               </div>

               {/* Country Section */}
               <div>
                  <h3 className="text-2xl font-semibold mb-6">Choose Country</h3>
                  {/* Placeholder for country selection functionality if needed */}
                  <div className="text-sm text-gray-300">...</div>
               </div>
            </div>

            {/* Secondary Links and Copyright */}
            <div className="pt-10">
               <div className="flex flex-wrap gap-6 md:gap-10 text-sm font-semibold mb-8 px-4">
                  <Link to="/trust-report" className="hover:text-secondary text-lg font-light transition-colors">Trust Report</Link>
                  <Link to="/service-level-agreements" className="hover:text-secondary text-lg font-light transition-colors">Service Level Agreement(SLA)</Link>
                  <Link to="/file-complaint" className="hover:text-secondary text-lg font-light transition-colors">File A Complaint</Link>
                  <Link to="/privacy-policy" className="hover:text-secondary text-lg font-light transition-colors">Privacy Policy</Link>
               </div>
               <div className="px-4 text-sm text-gray-400">
                  © 2025 Niyah, Inc. All rights reserved.
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;