"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";

// 将所有导航链接放入一个常量数组，便于后续的维护和扩展
const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/music", label: "Music" },
  { href: "/coding", label: "Coding" },
  { href: "/life", label: "Life" },
  { href: "/blog", label: "Blog" },
];

// 桌面版导航组件
const DesktopNavLinks = () => {
  return (
    <div className="hidden md:ml-6 md:flex md:space-x-8">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-gray-900 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

// 移动版导航组件，使用 Drawer 显示
const MobileNavLinks = ({
  drawerOptionStyle,
}: {
  drawerOptionStyle: string;
}) => {
  return (
    <div className="flex flex-col p-4">
      {NAV_LINKS.map((link) => (
        <Link key={link.href} href={link.href} className={drawerOptionStyle}>
          {link.label}
        </Link>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  const drawerOptionStyle =
    "font-bold text-center py-2 text-xl md:text-left hover:text-gray-400";

  return (
    <nav className="bg-gray/10 backdrop-blur-lg fixed w-full print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 relative print:hidden">
          <div className="flex">
            {/* 中间位置的 Logo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0 md:content-center">
              <Link
                href="/"
                className="text-xl font-bold text-gray-800 no-underline font-serif"
              >
                {`David's Blog`}
              </Link>
            </div>
            {/* 桌面版导航 */}
            <DesktopNavLinks />
            {/* 移动版抽屉导航 */}
            <div className="flex h-full items-center absolute right-0">
              <Drawer open={isOpen} onOpenChange={setIsOpen}>
                <DrawerTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleDrawer}
                    className="right-4"
                  >
                    <Image
                      src="/icons/menu_24dp_5F6368.svg"
                      alt="Menu"
                      width={24}
                      height={24}
                    />
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                      <DrawerTitle>
                        <div className="text-2xl">Content</div>
                      </DrawerTitle>
                      <DrawerDescription>
                        Navigate to different sections of the blog.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="px-16 md:px-4">
                      <div className="border-b"></div>
                    </div>
                    <MobileNavLinks drawerOptionStyle={drawerOptionStyle} />
                    <DrawerFooter>
                      <div className="pt-4 w-full"></div>
                    </DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
