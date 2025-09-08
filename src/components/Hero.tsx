import React from "react";
import { ButtonPrimary, ButtonSecondary } from "@/components/ui/Buttons";
import { useI18n } from "@/i18n/useI18n";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section aria-label={t("hero.aria")} className="relative w-full">
      <div className="relative w-full" style={{height: "72vh"}}>
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
            className="absolute inset-0 h-full w-full object-cover"
            style={{objectPosition: "50% 35%"}}
            fetchPriority="high"
          />
        </picture>

        {/* Contrast overlay */}
        <div className="absolute inset-0 pointer-events-none"
             style={{background: "linear-gradient(to bottom, rgba(17,24,39,.35) 0%, rgba(17,24,39,.75) 100%)"}} />

        {/* Text overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-6xl px-4 pb-12">
            <div className="max-w-2xl text-white">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                {t("hero.tagline")}
              </h1>
              <p className="mt-3 text-base sm:text-lg leading-relaxed opacity-95">
                {t("hero.support")}
              </p>

              {/* Tertiary bilingual pill */}
              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm">
                <span aria-hidden="true">🌐</span>
                <span>{t("hero.bilingualPill")}</span>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
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

      <style>{`
        @media (max-width: 1024px){
          section[aria-label="${t("hero.aria")}"] > div { height: 56vh; }
        }
        @media (max-width: 640px){
          section[aria-label="${t("hero.aria")}"] > div { height: 48vh; }
        }
      `}</style>
    </section>
  );
}