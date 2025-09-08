import React from "react";
import { ButtonPrimary, ButtonSecondary } from "@/components/ui/Buttons";
import { useI18n } from "@/i18n/useI18n";

export default function Hero() {
  const { t } = useI18n();
  const base = import.meta.env.BASE_URL || "/";

  return (
    <section
      aria-label={t("hero.aria")}
      className="relative w-full isolate bg-[color:var(--brand-charcoal)]"
    >
      <div className="relative w-full min-h-[72svh] md:min-h-[64svh] sm:min-h-[56svh]">
        <picture>
          {/* WebP sources built from the CI step; fallback to JPG if missing */}
          <source
            type="image/webp"
            srcSet={[
              `${base}hero/hero-3840.webp 3840w`,
              `${base}hero/hero-2560.webp 2560w`,
              `${base}hero/hero-1920.webp 1920w`,
              `${base}hero/hero-1280.webp 1280w`,
              `${base}hero/hero-768.webp 768w`
            ].join(", ")}
            sizes="(min-width:1280px) 90vw, (min-width:768px) 100vw, 100vw"
          />
          <img
            src={`${base}hero/hero-4858x3644.jpg`}
            alt={t("hero.alt")}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: "50% 35%" }}
            fetchPriority="high"
            decoding="async"
          />
        </picture>

        {/* Contrast overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(17,24,39,.35) 0%, rgba(17,24,39,.75) 100%)",
          }}
        />

        {/* Text overlay: center vertically, pad from top so it never hides under navbar */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-4 pt-20 md:pt-24 pb-8">
            <div className="max-w-3xl text-white">
              <h1
                className="font-bold tracking-tight text-balance"
                style={{
                  fontSize: "clamp(1.75rem, 4.2vw, 3.25rem)", // ~28px–52px+
                  lineHeight: 1.15,
                }}
              >
                {t("hero.tagline")}
              </h1>

              <p
                className="mt-3 opacity-95"
                style={{
                  fontSize: "clamp(1rem, 1.6vw, 1.25rem)", // ~16px–20px
                  lineHeight: 1.5,
                }}
              >
                {t("hero.support")}
              </p>

              {/* Tertiary bilingual pill */}
              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm">
                <span aria-hidden="true">🌐</span>
                <span>{t("hero.bilingualPill")}</span>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <ButtonPrimary as="a" href={`${base}contact`}>
                  {t("hero.cta.primary")}
                </ButtonPrimary>
                <ButtonSecondary as="a" href={`${base}portfolio`}>
                  {t("hero.cta.secondary")}
                </ButtonSecondary>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}