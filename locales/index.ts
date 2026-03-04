import { de } from './de';
import { en } from './en';
import { ar } from './ar';
import { ku } from './ku';

export const translations = {
  de,
  en,
  ar,
  ku
};

export type Language = 'de' | 'en' | 'ar' | 'ku';
export type Translations = typeof de;
