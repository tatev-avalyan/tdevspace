import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files
import enTranslation from "./locales/en/translation.json";
import amTranslation from "./locales/am/translation.json";
import ruTranslation from "./locales/ru/translation.json";

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTranslation },
            am: { translation: amTranslation },
            ru: { translation: ruTranslation },
        },
        fallbackLng: "en",
        supportedLngs: ["en", "am", "ru"], // ✅ force normalization
        detection: {
            order: ["localStorage", "navigator", "htmlTag"],
            caches: ["localStorage"],
        },
        debug: process.env.NODE_ENV === "development",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
