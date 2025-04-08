// app/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// 假设你要直接 import
import en from "@/public/locales/en/resume.json";
import zh from "@/public/locales/zh/resume.json";

const resources = {
  en: {
    translation: en,
  },
  zh: {
    translation: zh,
  },
};

i18n.use(initReactI18next).init({
  resources,
  // lng: "zh",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
