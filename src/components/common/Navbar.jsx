import React, { useState, useEffect } from "react";
import { FaCaretDown } from "react-icons/fa";
import { IoIosPeople, IoMdClose } from "react-icons/io";
import { TfiMenu } from "react-icons/tfi";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.webp";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const location = useLocation();
  const isCertifiedPage = location.pathname === "/certified-companies";
  const isNewCompanyPage = location.pathname === "/new-company";
  const isBlogPage = location.pathname === "/blog";
  const isTrustReportPage = location.pathname === "/trust-report";
  const isSLAPage = location.pathname === "/service-level-agreements";
  const isComplaintPage = location.pathname === "/file-a-complaint";
  const isBusinessPage = location.pathname === "/get-certified/business";
  const isNonProfitPage = location.pathname === "/get-certified/non-profit";
  const isSolidNavbar = isCertifiedPage || isNewCompanyPage || isBlogPage || isTrustReportPage || isSLAPage || isComplaintPage || isBusinessPage || isNonProfitPage;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setActiveSubmenu(null); // Reset submenus when closing
  };

  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  const linkClass = `font-semibold py-3 lg:text-sm xl:text-md transition-colors duration-300 border-b-2 border-transparent flex items-center 
  ${(scrolled || isSolidNavbar) ? "text-white lg:hover:text-secondary lg:hover:border-secondary" : "text-black lg:hover:text-secondary lg:hover:border-secondary"}
    }`;

  const mobileLinkClass = `font-semibold py-4 text-lg text-primary border-b border-gray-100 flex items-center justify-between w-full`;

  return (
    <>
      <nav
        className={`${isSolidNavbar ? "relative bg-primary h-28" : "fixed top-0 left-0 w-full z-50 transition-all duration-300 " + (scrolled ? "bg-primary/90 shadow-lg h-22" : "bg-transparent h-28")} flex items-center justify-between px-6 lg:px-4 xl:px-12`}
      >
        {/* Logo */}
        <div className="logo shrink-0">
          <Link to="/">
            <img src={logo} alt="Niyah" className={`h-12 lg:h-14 xl:h-16 transition-all ${(scrolled || isSolidNavbar) ? "brightness-0 invert" : ""}`} />
          </Link>
        </div>

        {/* Desktop Links and Buttons */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8">
          {/* Links */}
          <ul className="flex items-center gap-3 xl:gap-6">
            <li>
              <Link to="/certified-companies" className={linkClass}>
                Certified Companies
              </Link>
            </li>
            <li>
              <Link to="/new-company" className={linkClass}>
                Certify A Company
              </Link>
            </li>
            <li className="relative group">
              <div className={`${linkClass} cursor-pointer`}>
                Trust And Transparency
                <FaCaretDown className="ml-1" />
              </div>
              <ul className="absolute left-0 top-full mt-0 w-48 bg-white text-black shadow-xl rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 px-0 py-2 z-50 border-t-2 border-secondary">
                <li>
                  <Link to="/trust-report" className="block px-3 py-2 text-xs hover:text-secondary rounded-md">
                    Trust Report
                  </Link>
                </li>
                <hr className="text-gray-200" />
                <li>
                  <Link to="/service-level-agreements" className="block px-3 py-2 text-xs hover:text-secondary rounded-md truncate">
                    Service Level Agreements
                  </Link>
                </li>
                <hr className="text-gray-200" />
                <li>
                  <Link to="/file-a-complaint" className="block px-3 py-2 text-xs hover:text-secondary rounded-md">
                    File A Complaint
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/blog" className={linkClass}>
                Blog
              </Link>
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex items-center gap-4 ml-4">
            <Link
              to="/login"
              className={`px-4 xl:px-6 py-2 border-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2
              ${(scrolled || isSolidNavbar)
                  ? "border-white text-white hover:bg-white hover:text-primary"
                  : "border-black text-primary hover:bg-secondary hover:border-2 hover:border-secondary hover:text-white"
                }`}
            >
              <IoIosPeople className="text-xl" />
              Login
            </Link>
            <div className="relative group">
              <div
                className="px-4 xl:px-6 py-3 bg-secondary hover:bg-secondary/90 text-white rounded-full font-semibold transition-all duration-300 flex items-center gap-1 shadow-md hover:shadow-lg cursor-pointer"
              >
                Get Certified
                <FaCaretDown />
              </div>
              <ul className="absolute right-2 top-full mt-0 w-40 bg-white text-black shadow-xl rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-2 z-50 border-t-2 border-secondary">
                <li>
                  <Link to="/get-certified/business" className="block px-4 py-3 text-xs hover:text-secondary rounded-md">
                    Business
                  </Link>
                </li>
                <hr className="text-gray-200" />
                <li>
                  <Link to="/get-certified/non-profit" className="block px-4 py-3 text-xs hover:text-secondary rounded-md">
                    Non-Profits
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className={`lg:hidden p-2 rounded-md transition-colors ${(scrolled || isSolidNavbar) ? "text-white" : "text-primary"
            }`}
        >
          <TfiMenu size={32} />
        </button>
      </nav>

      {/* Mobile Sidebar (Drawer) */}
      <div
        className={`fixed inset-0 z-100 transition-opacity duration-300 lg:hidden ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={toggleMenu}
        ></div>

        {/* Drawer Content */}
        <div
          className={`absolute right-0 top-0 h-full w-[70%] bg-white shadow-2xl transition-transform duration-300 ease-in-out p-6 flex flex-col ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Close Button & Header */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={toggleMenu}
              className="p-2 text-primary hover:bg-gray-100 rounded-full transition-colors"
            >
              <IoMdClose size={28} />
            </button>
            <img src={logo} alt="Niyah" className="h-10" />
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col flex-1 overflow-y-auto">
            <Link to="/certified-companies" className={mobileLinkClass} onClick={toggleMenu}>
              Certified Companies
            </Link>
            <Link to="/new-company" className={mobileLinkClass} onClick={toggleMenu}>
              Certify A Company
            </Link>

            {/* Trust Accordion */}
            <div className="flex flex-col">
              <div
                className={`${mobileLinkClass} cursor-pointer`}
                onClick={() => toggleSubmenu('trust')}
              >
                <span>Trust And Transparency</span>
                <FaCaretDown className={`transition-transform duration-300 ${activeSubmenu === 'trust' ? 'rotate-180' : ''}`} />
              </div>
              <div className={`pl-4 flex flex-col bg-gray-50 overflow-hidden transition-all duration-300 ${activeSubmenu === 'trust' ? 'max-h-40' : 'max-h-0'}`}>
                <Link to="/trust-report" className="py-3 text-sm text-gray-600 border-b border-gray-100" onClick={toggleMenu}>
                  Trust Report
                </Link>
                <Link to="/service-level-agreements" className="py-3 text-sm text-gray-600 border-b border-gray-100" onClick={toggleMenu}>
                  Service Level Agreements
                </Link>
                <Link to="/file-a-complaint" className="py-3 text-sm text-gray-600 border-b border-gray-200" onClick={toggleMenu}>
                  File A Complaint
                </Link>
              </div>
            </div>

            <Link to="/blog" className={mobileLinkClass} onClick={toggleMenu}>
              Blog
            </Link>

            {/* Get Certified Accordion (Moved here) */}
            <div className="flex flex-col">
              <div
                className={`${mobileLinkClass} cursor-pointer border-none`}
                onClick={() => toggleSubmenu('certified')}
              >
                <span>Get Certified</span>
                <FaCaretDown className={`transition-transform duration-300 ${activeSubmenu === 'certified' ? 'rotate-180' : ''}`} />
              </div>
              <div className={`pl-4 flex flex-col bg-gray-50 overflow-hidden transition-all duration-300 ${activeSubmenu === 'certified' ? 'max-h-40' : 'max-h-0'}`}>
                <Link to="/get-certified/business" className="py-3 text-sm text-gray-600 border-b border-gray-100" onClick={toggleMenu}>
                  Business
                </Link>
                <Link to="/get-certified/non-profit" className="py-3 text-sm text-gray-600 border-b border-gray-100" onClick={toggleMenu}>
                  Non-Profits
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Buttons at Bottom */}
          <div className="mt-auto flex flex-col gap-4 pt-6 border-t border-gray-100">
            <Link
              to="/login"
              className="flex items-center justify-center gap-2 w-full py-4 border-2 border-primary text-primary font-bold rounded-xl active:bg-primary active:text-white transition-all shadow-sm"
              onClick={toggleMenu}
            >
              <IoIosPeople size={24} />
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
