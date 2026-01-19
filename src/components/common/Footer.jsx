import React from 'react';
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
                     <li><a href="#" className="font-medium hover:text-secondary transition-colors">About Us</a></li>
                     <li><a href="#" className="font-medium hover:text-secondary transition-colors">Contact</a></li>
                     <li><a href="#" className="font-medium hover:text-secondary transition-colors">Blog</a></li>
                  </ul>
               </div>

               {/* Community Section */}
               <div>
                  <h3 className="text-2xl font-semibold mb-6">Community</h3>
                  <ul className="flex flex-col gap-4 text-sm text-gray-300">
                     <li><a href="#" className="font-medium hover:text-secondary transition-colors">Trust in reviews</a></li>
                     <li><a href="#" className="font-medium hover:text-secondary transition-colors">Log in</a></li>
                     <li><a href="#" className="font-medium hover:text-secondary transition-colors">Sign up</a></li>
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
                  <a href="#" className="hover:text-secondary text-lg font-light transition-colors">Trust Report</a>
                  <a href="#" className="hover:text-secondary text-lg font-light transition-colors">Service Level Agreement(SLA)</a>
                  <a href="#" className="hover:text-secondary text-lg font-light transition-colors">File A Complaint</a>
                  <a href="#" className="hover:text-secondary text-lg font-light transition-colors">Privacy Policy</a>
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