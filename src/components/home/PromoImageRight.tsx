import React from "react";
import { useI18n } from "@/i18n/useI18n";

export default function PromoImageRight() {
  const { t } = useI18n();
  const base = import.meta.env.BASE_URL || "/";

  return (
    <section aria-label={t("promo2.aria")} className="relative w-full isolate">
      <div className="relative w-full min-h-[60svh] md:min-h-[54svh] sm:min-h-[44svh]">
        {/* Background image */}
        <img
          src={`${base}hero/hero2.jpg`}
          alt={t("promo2.alt")}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "50% 50%" }}
          loading="lazy"
          decoding="async"
        />
        {/* Contrast gradient, weighted to the right text block */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, rgba(17,24,39,.80) 0%, rgba(17,24,39,.45) 45%, rgba(17,24,39,.18) 65%, rgba(17,24,39,.06) 100%)"
          }}
        />
        {/* Text overlay (right aligned) */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-4">
            <div className="ml-auto max-w-xl text-right text-white">
              <h2
                className="font-bold tracking-tight"
                style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.75rem)", lineHeight: 1.15 }}
              >
                {t("promo2.title")}
              </h2>
              <p
                className="mt-3 opacity-95"
                style={{ fontSize: "clamp(1rem, 1.4vw, 1.2rem)", lineHeight: 1.6 }}
              >
                {t("promo2.body")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}