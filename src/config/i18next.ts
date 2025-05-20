import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationES from '../Data/Esp.json';
import translationEN from '../Data/Eng.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: translationES },
      en: { translation: translationEN }
    },
    lng: 'es',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;