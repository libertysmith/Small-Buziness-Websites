import { useI18n } from '@/i18n/useI18n';
import { FORM_EN, FORM_KO, isConfigured } from '@/lib/forms';
import { ButtonTertiaryLink } from '@/components/ui/Buttons';

export default function Contact() {
  const { t, locale } = useI18n();
  const src = locale === "ko" ? FORM_KO : FORM_EN;
  const open = src.replace("?embedded=true", "");

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-brand-ink mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-brand-slate max-w-3xl mx-auto mb-8">
            {t('contact.note')}
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto">
          {isConfigured(src) ? (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-brand-royal/20">
              <iframe
                src={src}
                width="100%"
                height="1200"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title={`Contact Form (${locale.toUpperCase()})`}
                loading="lazy"
                className="w-full"
              >
                Loading...
              </iframe>
              <div className="p-4 text-center">
                <ButtonTertiaryLink href={open}>{t('contact.openForm')}</ButtonTertiaryLink>
              </div>
            </div>
          ) : (
            <div className="rounded-xl border border-brand-gold/60 bg-white p-8 text-center">
              <p className="text-brand-ink font-medium mb-4 text-lg">Form temporarily unavailable.</p>
              <p className="text-brand-slate">
                Please email us at <a className="underline text-brand-royal hover:text-brand-royal/80" href="mailto:hirelibbysmith@gmail.com">hirelibbysmith@gmail.com</a> with your business name, links, and preferred meeting times.
              </p>
            </div>
          )}
        </div>

        {/* Alternative Contact Info */}
        <div className="max-w-2xl mx-auto mt-16">
          <div className="bg-brand-cloud rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-brand-ink mb-6">
              Prefer to reach out directly?
            </h2>
            <div className="space-y-4">
              <div>
                <span className="text-brand-slate">{t('footer.email')}: </span>
                <a 
                  href="mailto:hirelibbysmith@gmail.com"
                  className="text-brand-royal hover:text-brand-royal/80 font-medium"
                >
                  hirelibbysmith@gmail.com
                </a>
              </div>
              <div>
                <span className="text-brand-slate">{t('footer.phone')}: </span>
                <a 
                  href="tel:972-674-9774"
                  className="text-brand-royal hover:text-brand-royal/80 font-medium"
                >
                  972-674-9774
                </a>
              </div>
            </div>
            <p className="text-brand-slate mt-4 text-sm">
              I typically respond within 24 hours on weekdays.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}