"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import SwitchLanguageBtn from "@/components/i18n/SwitchLanguageBtn";
import useTranslation from "@/hooks/useTranslation";

const routes = [
  {
    title: {
      en: "Home",
      vi: "Trang chủ",
    },
    router: "/",
  },
  {
    title: {
      en: "Projects",
      vi: "Dự án",
    },
    router: "/projects",
  },
  {
    title: {
      en: "Contact",
      vi: "Liên hệ",
    },
    router: "/contact",
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useTranslation();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="px-4 shadow-sm sticky top-0 bg-white z-50">
      <header className="mx-auto flex max-w-7xl items-center justify-between bg-white py-4 ">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={"/assets/images/logo.svg"}
            alt={"Stevdev Service"}
            width={40}
            height={40}
          />
          <div className="text-lg font-bold text-gray-800">STEVDEV</div>
        </Link>

        <div className="hidden items-center space-x-8 md:flex">
          {routes.map((route) => (
            <Link
              key={route.router}
              href={route.router}
              className={`
                ${
                  pathname === route.router
                    ? "text-primary-500 border-primary-500 rounded-md border p-1"
                    : "text-tapa-600 hover:text-primary-500"
                } 
               transition-colors`}
            >
              {t(route.title)}
            </Link>
          ))}
        </div>
        <div>
          <SwitchLanguageBtn />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="rounded-lg p-2 transition-colors duration-300 hover:bg-gray-100 md:hidden"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-600" />
          ) : (
            <Menu className="h-6 w-6 text-gray-600" />
          )}
        </button>
      </header>
      {/* Responsive menu */}
      <div
        className={`
        fixed top-0 right-0 z-50 h-full w-80 transform bg-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden
        ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between border-b border-gray-100 p-6">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-500">
              <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-white">
                <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
              </div>
            </div>
            <div className="text-lg font-bold text-gray-800">STEVDEV</div>
          </div>
          <button
            onClick={closeMobileMenu}
            className="rounded-lg p-2 transition-colors duration-300 hover:bg-gray-100"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="flex flex-col space-y-1 p-6">
          {routes.map((route) => (
            <a
              key={route.router}
              href={route.router}
              onClick={closeMobileMenu}
              className="rounded-lg px-4 py-3 text-lg font-medium text-gray-700 transition-all duration-300 hover:bg-orange-50 hover:text-orange-500"
            >
              {t(route.title)}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
