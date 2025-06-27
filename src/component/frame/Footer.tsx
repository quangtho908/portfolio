import React from 'react';
import { Facebook, Linkedin } from 'lucide-react';

export default function Footer ()  {
  const footerLinks = {
    noiDung: [
      { title: "Services", href: "#services" },
      { title: "Projects", href: "#portfolio" }
    ],
    dieuKhoan: [
      { title: "Điều khoản dịch vụ", href: "#terms" },
      { title: "Chính sách bảo mật", href: "#privacy" },
      { title: "Chính sách bảo hành", href: "#warranty" }
    ],
    lienHe: [
      { title: "Facebook", href: "#facebook", icon: <Facebook className="w-4 h-4" /> },
      { title: "LinkedIn", href: "#linkedin", icon: <Linkedin className="w-4 h-4" /> },
    ]
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo và Copyright */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 max-w-7xl">
              <div
                className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="text-lg font-bold text-gray-800">
                STEVDEV
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Copyright@2025
            </p>
          </div>

          {/* Nội dung */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-500">
              Information
            </h4>
            <ul className="space-y-2">
              {footerLinks.noiDung.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-orange-500 transition-colors duration-300 text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Điều khoản */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-500">
              Policy
            </h4>
            <ul className="space-y-2">
              {footerLinks.dieuKhoan.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-orange-500 transition-colors duration-300 text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Liên hệ */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-500">
              Liên hệ
            </h4>
            <div className="space-y-3">
              {footerLinks.lienHe.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors duration-300 text-sm group"
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </span>
                  <span>{link.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              © 2025 StevDev. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#terms" className="text-sm text-gray-500 hover:text-orange-500 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#privacy" className="text-sm text-gray-500 hover:text-orange-500 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#cookies" className="text-sm text-gray-500 hover:text-orange-500 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};