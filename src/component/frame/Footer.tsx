'use client'
import React from 'react';
import Image from "next/image";
import AppLink from "@/component/common/AppLink";

export default function Footer ()  {

  const scrollIntoView = (id: string) => {
    const view = document.getElementById(id);
    if (!view) {
      return;
    }
    view.scrollIntoView({behavior: 'smooth', block: 'start'})
  }

  const footerLinks = {
    noiDung: [
      { title: "Services", href: "services" },
      { title: "Projects", href: "projects" }
    ],
    dieuKhoan: [
      { title: "Term & Condition", href: "/terms-conditions" },
      { title: "Privacy Policy", href: "/privacy-policy" },
      { title: "Warranty Policy", href: "/warranty-policy" },
    ],
    lienHe: [
      { title: "Facebook", href: "https://www.facebook.com/tho.developer", icon: <Image src={"/icons/facebook.svg"} alt={"Stevdev services"} width={15} height={15} />},
      { title: "LinkedIn", href: "https://www.linkedin.com/in/quangtho/", icon: <Image src={"/icons/linkedin.svg"} alt={"Stevdev services"} width={15} height={15} /> },
    ]
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo và Copyright */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 max-w-7xl">
              <Image src={"/assets/images/logo.svg"} alt={"Stevdev Service"} width={40} height={40} />
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
                  <AppLink title={link.title} onClick={() => scrollIntoView(link.href)} />
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
                  <AppLink title={link.title} onClick={() => window.location.href = link.href} />
                </li>
              ))}
            </ul>
          </div>

          {/* Liên hệ */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-500">
              Contact
            </h4>
            <div className="space-y-3">
              {footerLinks.lienHe.map((link, index) => (
                <AppLink
                  key={index}
                  onClick={() => window.open(link.href, '_blank')}
                  className="flex gap-2 items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors duration-300 text-sm group"
                  icon={link.icon}
                  title={link.title}
                />
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
              {footerLinks.dieuKhoan.map((link, index) => (
                <AppLink key={index} title={link.title} onClick={() => window.location.href = link.href} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};