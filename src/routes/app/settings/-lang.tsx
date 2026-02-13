import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { m } from "@/paraglide/messages";
import { getLocale, locales, setLocale } from "@/paraglide/runtime";

type Locale = (typeof locales)[number];
type LocaleLabel = {
  [key in Locale]: string;
};

export function Lang() {
  const currentLocale = getLocale();

  function handleChangeLanguage(value: string | null) {
    if (value === null) return;
    if (locales.includes(value as Locale)) setLocale(value as Locale);
  }

  const localeLabels: LocaleLabel = {
    en: m.english(),
    tr: m.turkish(),
    de: m.german(),
    ar: m.arabic(),
  };

  const currentLocaleLabel = localeLabels[currentLocale as Locale];

  return (
    <Card>
      <CardHeader>
        <CardTitle>{m.language()}</CardTitle>
      </CardHeader>
      <CardContent>
        <Select value={currentLocaleLabel} onValueChange={handleChangeLanguage}>
          <SelectTrigger className="min-w-48">
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            {locales.map((locale) => (
              <SelectItem key={locale} value={locale}>
                {localeLabels[locale]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  );
}
