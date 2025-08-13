"use client";

import { Globe } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

export default function SwitchLanguageBtn() {
  const { language, changeLanguage } = useLanguage();

  return (
    <div
      onClick={() => {
        console.log(language === "en" ? "vi" : "en");
        if (changeLanguage) changeLanguage(language === "en" ? "vi" : "en");
      }}
      className="hover:bg-primary-100 bg-primary-50 flex cursor-pointer gap-2 rounded-full px-3 py-1 transition duration-200"
    >
      <Globe className="text-primary-300" />
      {language.toUpperCase()}
    </div>
  );
}
