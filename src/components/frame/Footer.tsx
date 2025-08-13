"use client";

import Image from "next/image";
import React from "react";

import AppLink from "@/components/common/AppLink";
import useTranslation from "@/hooks/useTranslation";
import dataI18n from "@/utils/i18n";

export default function Footer() {
  const scrollIntoView = (id: string) => {
    const view = document.getElementById(id);
    if (!view) {
      return;
    }
    view.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const { t } = useTranslation();

  const footerLinks = {
    noiDung: [
      { title: "services", href: "services" },
      { title: "projects", href: "projects" },
    ],
    dieuKhoan: [
      { title: "privacy", href: "/privacy-policy" },
      { title: "warranty", href: "/warranty-policy" },
    ],
    lienHe: [
      {
        title: "Facebook",
        href: "https://www.facebook.com/tho.developer",
        icon: (
          <Image
            src={"/icons/facebook.svg"}
            alt={"Stevdev services"}
            width={15}
            height={15}
          />
        ),
      },
      {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/quangtho/",
        icon: (
          <Image
            src={"/icons/linkedin.svg"}
            alt={"Stevdev services"}
            width={15}
            height={15}
          />
        ),
      },
    ],
  };

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo và Copyright */}
          <div className="space-y-4">
            <div className="flex max-w-7xl items-center space-x-2">
              <Image
                src={"/assets/images/logo.svg"}
                alt={"Stevdev Service"}
                width={40}
                height={40}
              />
              <div className="text-lg font-bold text-gray-800">STEVDEV</div>
            </div>
            <p className="text-sm text-gray-600">Copyright@2025</p>
          </div>

          {/* Nội dung */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-500">
              {t(dataI18n.information)}
            </h4>
            <ul className="space-y-2">
              {footerLinks.noiDung.map((link, index) => (
                <li key={index}>
                  <AppLink
                    title={t(dataI18n[link.title])}
                    onClick={() => scrollIntoView(link.href)}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Điều khoản */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-500">
              {t(dataI18n.policy)}
            </h4>
            <ul className="space-y-2">
              {footerLinks.dieuKhoan.map((link, index) => (
                <li key={index}>
                  <AppLink
                    title={t(dataI18n[link.title])}
                    onClick={() => {
                      window.location.href = link.href;
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Liên hệ */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-500">
              {t(dataI18n.contact)}
            </h4>
            <div className="space-y-3">
              {footerLinks.lienHe.map((link, index) => (
                <AppLink
                  key={index}
                  onClick={() => window.open(link.href, "_blank")}
                  className="group flex items-center gap-2 space-x-2 text-sm text-gray-600 transition-colors duration-300 hover:text-orange-500"
                  icon={link.icon}
                  title={link.title}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-500">
              © 2025 StevDev. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              {footerLinks.dieuKhoan.map((link, index) => (
                <AppLink
                  key={index}
                  title={t(dataI18n[link.title])}
                  onClick={() => {
                    window.location.href = link.href;
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
