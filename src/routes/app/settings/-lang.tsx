import { ClientOnly } from "@tanstack/react-router";
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

export function Lang() {
  const currentLocale = getLocale();

  function handleChangeLanguage(value: (typeof locales)[number] | null) {
    if (value !== null) setLocale(value);
  }

  const localeLabels = {
    en: m.english(),
    tr: m.turkish(),
    de: m.german(),
    ar: m.arabic(),
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{m.language()}</CardTitle>
      </CardHeader>
      <CardContent>
        <ClientOnly fallback={<div className="text-muted-foreground text-sm">Loading...</div>}>
          <Select value={currentLocale} onValueChange={handleChangeLanguage}>
            <SelectTrigger className="w-full">
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
        </ClientOnly>
      </CardContent>
    </Card>
  );
}
