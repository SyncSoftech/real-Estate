import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import Image from 'next/image'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Curved Navbar Container */}
        <div className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">

<div className="flex items-center space-x-3">
  {/* Logo */}
  <Image
    src="/Hearing_clinic-logo.png"
    alt="Logo"
    width={50}
    height={50}
    className="object-contain"
  />

  {/* Text Section */}
  <div className="flex flex-col leading-tight">
    <div className="flex items-baseline space-x-2">
      <span className="text-2xl font-semibold text-gray-900 tracking-tight ">
        NAMANKAR
      </span>
      <span className="text-2xl font-semibold text-yellow-500 tracking-tight">
        HEARING SERVICES
      </span>
    </div>
  </div>
</div>


            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-10">
              <a href="/" className="text-gray-900 font-medium text-sm hover:text-yellow-500 transition-colors">
                Home
              </a>
              <a href="/services" className="text-gray-600 font-medium text-sm hover:text-yellow-500 transition-colors">
                Services
              </a>
              <a href="/other" className="text-gray-600 font-medium text-sm hover:text-yellow-500 transition-colors">
                Other
              </a>
              <a href="/pricing" className="text-gray-600 font-medium text-sm hover:text-yellow-500 transition-colors">
                Pricing
              </a>
              <a href="/faq" className="text-gray-600 font-medium text-sm hover:text-yellow-500 transition-colors">
                FAQ
              </a>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="px-5 py-2 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-all duration-200 shadow">
                Contact Us
                {/* <ChevronRight className="w-4 h-4 ml-1" /> */}
              </button>
              {/* <button className="px-5 py-2 text-sm font-medium text-white bg-yellow-500 rounded-full hover:bg-yellow-600 transition-all duration-200 shadow flex items-center">
                Book Online
                <ChevronRight className="w-4 h-4 ml-1" />
              </button> */}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-3 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-md py-4 px-6">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-gray-900 font-medium py-2 hover:text-yellow-500 transition-colors">
                Home
              </a>
              <a href="/services" className="text-gray-600 font-medium py-2 hover:text-yellow-500 transition-colors">
                Services
              </a>
              <a href="/other" className="text-gray-600 font-medium py-2 hover:text-yellow-500 transition-colors">
                Other
              </a>
              <a href="/pricing" className="text-gray-600 font-medium py-2 hover:text-yellow-500 transition-colors">
                Pricing
              </a>
              <a href="/faq" className="text-gray-600 font-medium py-2 hover:text-yellow-500 transition-colors">
                FAQ
              </a>
              
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
                <button className="px-6 py-3 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-all">
                  Contact Us
                </button>
                <button className="px-6 py-3 text-sm font-medium text-white bg-yellow-500 rounded-full hover:bg-yellow-600 transition-all flex items-center justify-center">
                  Book Online
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
