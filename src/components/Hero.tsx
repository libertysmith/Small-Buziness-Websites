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
      <div className="relative w-full min-h-[70svh] md:min-h-[64svh] sm:min-h-[60svh]">
        <picture>
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
              "linear-gradient(to bottom, rgba(17,24,39,.35) 0%, rgba(17,24,39,.78) 100%)",
          }}
        />

        {/* Text overlay wrapper */}
        <div className="absolute inset-0 z-10">
          <div className="mx-auto h-full w-full max-w-6xl px-4">
            {/* Use a full-height flex to control vertical alignment */}
            <div className="flex h-full items-end md:items-center">
              {/* Padding clears the navbar; extra bottom pad keeps CTAs off the border */}
              <div className="max-w-3xl text-white pt-24 md:pt-28 pb-24 sm:pb-20 md:pb-16">
                <h1
                  className="font-bold tracking-tight text-balance drop-shadow-[0_1px_1px_rgba(0,0,0,.4)]"
                  style={{
                    fontSize: "clamp(1.5rem, 3.6vw, 3rem)",   // ~24–48px+
                    lineHeight: 1.15,
                  }}
                >
                  {t("hero.tagline")}
                </h1>

                <p
                  className="mt-3 opacity-95"
                  style={{
                    fontSize: "clamp(0.95rem, 1.3vw, 1.2rem)", // ~15–19px
                    lineHeight: 1.55,
                  }}
                >
                  {t("hero.support")}
                </p>

                {/* Tertiary bilingual pill (small on mobile) */}
                <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs sm:text-sm">
                  <span aria-hidden="true">🌐</span>
                  <span>{t("hero.bilingualPill")}</span>
                </div>

                {/* CTA row: force full width on tiny screens so they don't wrap to the border */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <ButtonPrimary
                    as="a"
                    href={`${base}contact`}
                    className="w-full xs:w-auto sm:w-auto"
                  >
                    {t("hero.cta.primary")}
                  </ButtonPrimary>
                  <ButtonSecondary
                    as="a"
                    href={`${base}portfolio`}
                    className="w-full xs:w-auto sm:w-auto"
                  >
                    {t("hero.cta.secondary")}
                  </ButtonSecondary>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extra safety: adjust min-height and paddings at narrow widths */}
      <style>{`
        @media (max-width: 1024px){
          section[aria-label="${t("hero.aria")}"] .min-h-fix { min-height: 64svh; }
        }
        @media (max-width: 640px){
          section[aria-label="${t("hero.aria")}"] .min-h-fix { min-height: 60svh; }
        }
      `}</style>
    </section>
  );
}