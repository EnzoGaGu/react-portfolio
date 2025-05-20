import 'i18next';
import es from './locales/es/translation.json';

type DefaultTranslation = typeof es;

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      translation: DefaultTranslation;
    };
  }
}