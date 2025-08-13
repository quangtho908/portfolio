"use client";

import { useLanguage } from "@/context/LanguageContext";

function useTranslation() {
  const { language } = useLanguage();

  const t = (data: { en: string; vi: string }) => data[language];

  return { t };
}

export default useTranslation;
