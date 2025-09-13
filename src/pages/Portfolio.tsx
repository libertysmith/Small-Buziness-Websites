import React from 'react';
import { useI18n } from '@/i18n/useI18n';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  const { t } = useI18n();
  const base = import.meta.env.BASE_URL || "/";

  // Encode each filename (handles spaces)
  const shots = [
    "Screenshot Hampyong 2025-09-13.jpg",
    "Screenshot Tempo 2025-09-13.jpg"
  ].map(name => `${base}${encodeURI(name)}`);

  const [openSrc, setOpenSrc] = React.useState<string | null>(null);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpenSrc(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-brand-ink mb-6">
            {t('portfolio.title')}
          </h1>
          <p className="text-xl text-brand-slate max-w-3xl mx-auto">
            Real websites built for DFW small businesses. Mobile-first, bilingual, and built for results.
          </p>
        </div>

        {/* Responsive equal-size grid */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {shots.map((src, i) => (
            <button
              key={src + i}
              type="button"
              onClick={() => setOpenSrc(src)}
              className="group relative overflow-hidden rounded-2xl ring-1 ring-black/5 shadow hover:shadow-md transition-shadow"
              style={{ aspectRatio: "16 / 10" }}
              aria-label="Open screenshot"
            >
              <img
                src={src}
                alt="Website screenshot"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </section>

        {/* Full-screen modal preview */}
        {openSrc && (
          <div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
            onClick={() => setOpenSrc(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setOpenSrc(null)}
                className="absolute -top-3 -right-3 z-10 rounded-full bg-white/90 px-3 py-1 text-sm shadow ring-1 ring-black/10"
                aria-label="Close"
              >
                Close
              </button>
              <img
                src={openSrc}
                alt="Website screenshot preview"
                className="w-full h-auto rounded-2xl shadow"
              />
              <div className="mt-2 text-right">
                <a
                  href={openSrc}
                  target="_blank"
                  rel="noopener"
                  className="inline-block text-sm text-white underline underline-offset-2"
                >
                  Open full image
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Coming Soon Notice */}
        <div className="bg-brand-cloud rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold text-brand-ink mb-4">
            More Projects Coming Soon
          </h2>
          <p className="text-brand-slate max-w-2xl mx-auto">
            I'm currently working on several bilingual websites for DFW restaurants and local businesses. 
            Check back soon to see more examples of mobile-first, Korean/English websites.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-brand-ink mb-6">
            Ready for your own website?
          </h2>
          <Button asChild className="bg-brand-royal hover:bg-brand-royal/90 text-white px-8 py-6 text-lg">
            <Link to="/contact">{t('hero.cta')}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}