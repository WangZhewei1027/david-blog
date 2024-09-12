"use client";

import { Button } from "@/app/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 content-center">
              <a href="/" className="text-xl font-bold text-gray-800">
                {"David's Blog"}
              </a>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <a
                href="/"
                className="text-gray-900 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-gray-900 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                About
              </a>
              <a
                href="/blog"
                className="text-gray-900 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Blog
              </a>
              <a
                href="/contact"
                className="text-gray-900 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="-mr-2 flex md:hidden">
              <Button onClick={toggleMenu}>Menu</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="/blog"
              className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Blog
            </a>
            <a
              href="/contact"
              className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
