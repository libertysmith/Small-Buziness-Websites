import { useI18n } from '@/i18n/useI18n';
import { ExternalLink } from 'lucide-react';

export default function Contact() {
  const { t, locale } = useI18n();

  // TODO: Replace FORM_ID_EN and FORM_ID_KR with actual Google Form IDs
  const formUrls = {
    en: 'https://docs.google.com/forms/d/e/FORM_ID_EN/viewform?embedded=true',
    ko: 'https://docs.google.com/forms/d/e/FORM_ID_KR/viewform?embedded=true'
  };

  const currentFormUrl = formUrls[locale];
  const openFormUrl = currentFormUrl.replace('?embedded=true', '');

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
          
          {/* Fallback link */}
          <a 
            href={openFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-royal hover:text-brand-royal/80 font-medium transition-colors"
          >
            <ExternalLink size={18} />
            {t('contact.openForm')}
          </a>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-brand-royal/20">
            <iframe
              src={currentFormUrl}
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
          </div>
        </div>

        {/* Alternative Contact Info */}
        <div className="max-w-2xl mx-auto mt-16">
          <div className="bg-brand-cloud rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-brand-ink mb-6">
              Prefer to reach out directly?
            </h2>
            <div className="space-y-4">
              <div>
                <span className="text-brand-slate">Email: </span>
                <a 
                  href="mailto:hirelibbysmith@gmail.com"
                  className="text-brand-royal hover:text-brand-royal/80 font-medium"
                >
                  hirelibbysmith@gmail.com
                </a>
              </div>
              <div>
                <span className="text-brand-slate">Phone: </span>
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