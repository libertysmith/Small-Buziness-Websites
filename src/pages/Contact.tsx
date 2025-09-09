import React from "react";
import { useI18n } from "@/i18n/useI18n";
import FormEmbed from "@/components/FormEmbed";
import { FORMS } from "@/config/forms";

export default function Contact() {
  const { t, locale } = useI18n() as any; // if your hook differs, keep 'en' fallback
  const lang = (locale && String(locale).toLowerCase().startsWith("ko")) ? "ko" : "en";
  const src = lang === "ko" ? FORMS.ko : FORMS.en;

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold tracking-tight">{t("contact.title")}</h1>
      <p className="mt-2 text-neutral-600">{t("contact.note")}</p>
      <div className="mt-6">
        <FormEmbed src={src} title={t("contact.title")} />
      </div>
    </main>
  );
}