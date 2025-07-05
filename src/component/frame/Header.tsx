'use client'
import AppButton from "@/component/common/AppButton";
import {useState} from "react";
import {Menu, X} from "lucide-react";
import {usePathname} from "next/navigation";
import Image from "next/image";

const routes = [
  {
    title: 'Home',
    router: '/'
  },
  {
    title: 'Projects',
    router: '/projects'
  },
  {
    title: 'Contact',
    router: '/contact'
  }
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };


  return (
    <div className="shadow-sm px-4">
      <header className="flex items-center justify-between max-w-7xl mx-auto py-4 bg-white ">
        <div className="flex items-center space-x-2">
          <Image src={"/assets/images/logo.svg"} alt={"Stevdev Service"} width={40} height={40} />
          <div className="text-lg font-bold text-gray-800">
            STEVDEV
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {routes.map((route) => (
            <a
              key={route.router} href={route.router}
              className={`
                ${pathname === route.router 
                ? "text-international-orange-500 border p-1 rounded-md border-international-orange-500" 
                : "text-tapa-600 hover:text-international-orange-500"} 
               transition-colors`
              }
            >
              {route.title}
            </a>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <AppButton title="Contact me"/>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-gray-600"/>
          ) : (
            <Menu className="w-6 h-6 text-gray-600"/>
          )}
        </button>

      </header>
      {/* Responsive menu */}
      <div className={`
        fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center space-x-2">
            <div
              className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="text-lg font-bold text-gray-800">
              STEVDEV
            </div>
          </div>
          <button
            onClick={closeMobileMenu}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            <X className="w-5 h-5 text-gray-600"/>
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="flex flex-col p-6 space-y-1">
          {routes.map((route) => (
            <a
              key={route.router}
              href={route.router}
              onClick={closeMobileMenu}
              className="text-gray-700 hover:text-orange-500 hover:bg-orange-50 px-4 py-3 rounded-lg transition-all duration-300 font-medium text-lg"
            >
              {route.title}
            </a>
          ))}
        </nav>

        {/* Mobile Contact Button */}
        <div className="px-6 w-full">
          <AppButton title="Contact me" className={"w-full"}/>
        </div>
      </div>
    </div>
  )
}