"use client";

// contexts/LanguageContext.js
import type { JSX } from "react";
import { createContext, useContext, useEffect, useState } from "react";

type LanguageContextType = {
  language: "en" | "vi";
  changeLanguage?: (newLocale: "en" | "vi") => void;
};

// Truyền null làm giá trị mặc định
const LanguageContext = createContext<LanguageContextType>({
  language: "en",
});

export const LanguageProvider = ({ children }: { children: JSX.Element }) => {
  const [language, setLanguage] = useState<"en" | "vi">("en"); // Mặc định là 'en'

  useEffect(() => {
    // Lấy ngôn ngữ đã lưu từ localStorage khi ứng dụng khởi động
    const savedLocale: "en" | "vi" = (localStorage.getItem("language") ||
      "en") as "en" | "vi";
    if (savedLocale) {
      setLanguage(savedLocale);
    }
  }, []);

  const changeLanguage = (newLocale: "en" | "vi") => {
    setLanguage(newLocale);
    // Lưu lựa chọn ngôn ngữ vào localStorage
    localStorage.setItem("language", newLocale);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
