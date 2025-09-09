import React from "react";
import { useI18n } from "@/i18n/useI18n";

export default function About() {
  const { t } = useI18n();
  const base = import.meta.env.BASE_URL || "/";

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold tracking-tight">{t("about.title")}</h1>

      {/* Headshot + body layout */}
      <section className="mt-6 grid gap-8 md:grid-cols-[minmax(220px,420px),1fr] items-start">
        {/* Headshot */}
        <figure className="justify-self-center md:justify-self-start">
          <img
            src={`${base}about/headshot.jpg`}
            alt={t("about.headshotAlt")}
            width={1280}
            height={1746}
            loading="lazy"
            decoding="async"
            className="h-auto w-full rounded-2xl shadow ring-1 ring-black/5 object-cover"
            style={{ width: "clamp(220px, 40vw, 420px)" }}
          />
          <figcaption className="sr-only">{t("about.headshotAlt")}</figcaption>
        </figure>

        {/* Existing about copy */}
        <div className="prose prose-slate max-w-none">
          <p>{t("about.body")}</p>
          <div className="mt-4">
            <a
              href={`${base}contact`}
              className="inline-flex items-center rounded-md border px-4 py-2 text-sm hover:bg-neutral-50"
            >
              {t("about.cta")}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}