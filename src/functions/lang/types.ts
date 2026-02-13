export const langCookieName = "ui-lang";
export const supportedLocales = ["en", "tr"] as const;
export type Locale = (typeof supportedLocales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  tr: "Türkçe",
};
