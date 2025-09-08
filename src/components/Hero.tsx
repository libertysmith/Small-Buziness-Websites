import React from "react";
import { ButtonPrimary, ButtonSecondary } from "@/components/ui/Buttons";
import { useI18n } from "@/i18n/useI18n";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section aria-label={t("hero.aria")} className="relative w-full min-h-[48vh] sm:min-h-[56vh] lg:min-h-[72vh]">
      <div className="relative w-full h-[48vh] sm:h-[56vh] lg:h-[72vh]">
        {/* Loading fallback background */}
        <div className="absolute inset-0 bg-gray-900" />
        
        <picture>
          <source
            type="image/webp"
            srcSet={[
              "/hero/hero-3840.webp 3840w",
              "/hero/hero-2560.webp 2560w",
              "/hero/hero-1920.webp 1920w",
              "/hero/hero-1280.webp 1280w",
              "/hero/hero-768.webp 768w"
            ].join(", ")}
            sizes="(min-width:1280px) 90vw, (min-width:768px) 100vw, 100vw"
          />
          <img
            src="/hero/hero-4858x3644.jpg"
            alt={t("hero.alt")}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
            style={{objectPosition: "50% 35%"}}
            fetchPriority="high"
            loading="eager"
            onError={(e) => {
              console.warn("Hero image failed to load:", e.currentTarget.src);
            }}
          />
        </picture>

        {/* Contrast overlay */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-gray-900/35 to-gray-900/75" />

        {/* Text overlay - centered with safe padding */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:py-24 lg:py-32">
            <div className="max-w-3xl text-white text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
                {t("hero.tagline")}
              </h1>
              <p className="mt-4 text-sm sm:text-lg lg:text-xl leading-relaxed opacity-95 max-w-2xl">
                {t("hero.support")}
              </p>

              {/* Tertiary bilingual pill */}
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs sm:text-sm">
                <span aria-hidden="true">🌐</span>
                <span>{t("hero.bilingualPill")}</span>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 justify-center sm:justify-start">
                <ButtonPrimary as="a" href={`${import.meta.env.BASE_URL}contact`}>
                  {t("hero.cta.primary")}
                </ButtonPrimary>
                <ButtonSecondary as="a" href={`${import.meta.env.BASE_URL}portfolio`}>
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