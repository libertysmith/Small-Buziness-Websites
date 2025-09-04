import { createContext, useContext, useEffect, useMemo, useState } from "react";
import en from "./en.json";
import ko from "./ko.json";

type Locale = "en" | "ko";
type Ctx = { t: (k: string) => string; locale: Locale; setLocale: (l: Locale) => void };

const I18nCtx = createContext<Ctx>({ t: (k) => k, locale: "en", setLocale: () => {} });

const catalogs: Record<Locale, Record<string, string>> = { en, ko };

function getDefaultLocale(): Locale {
  try {
    if (typeof navigator !== "undefined" && navigator.language?.startsWith("ko")) return "ko";
  } catch {}
  return "en";
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    const saved = typeof localStorage !== "undefined" ? (localStorage.getItem("locale") as Locale | null) : null;
    return saved === "ko" || saved === "en" ? saved : getDefaultLocale();
  });

  useEffect(() => {
    try { localStorage.setItem("locale", locale); } catch {}
  }, [locale]);

  const dict = useMemo(() => catalogs[locale] ?? catalogs.en, [locale]);
  const t = (k: string) => (dict[k] ?? catalogs.en[k] ?? k);

  return <I18nCtx.Provider value={{ t, locale, setLocale }}>{children}</I18nCtx.Provider>;
}

export const useI18n = () => useContext(I18nCtx);