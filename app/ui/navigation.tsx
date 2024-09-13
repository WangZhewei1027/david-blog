"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 relative">
          <div className="flex">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0 md:content-center ">
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
            <div className="flex h-full items-center absolute right-0">
              <Button
                variant="outline"
                size="icon"
                onClick={toggleDrawer}
                className="right-4"
              >
                <HamburgerMenuIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
