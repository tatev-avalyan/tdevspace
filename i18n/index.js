// Import your existing configuration
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import yourExistingResources from './existingResources'; // Replace with your actual import

// Import the new translations
import { equipmentTranslationsEN } from '../translations/equipment-en';
import { equipmentTranslationsAM } from '../translations/equipment-am';
import { equipmentTranslationsRU } from '../translations/equipment-ru';

// Combine resources
const resources = {
  en: {
    translation: {
      ...yourExistingResources.en.translation,
      ...equipmentTranslationsEN
    }
  },
  am: {
    translation: {
      ...yourExistingResources.am?.translation || {},
      ...equipmentTranslationsAM
    }
  },
  ru: {
    translation: {
      ...yourExistingResources.ru?.translation || {},
      ...equipmentTranslationsRU
    }
  }
};

// Initialize i18n
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 