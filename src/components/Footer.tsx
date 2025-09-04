import { useI18n } from '@/i18n/useI18n';
import { Mail, Phone } from 'lucide-react';

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-brand-charcoal text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Contact</h3>
              <div className="space-y-3">
                <a 
                  href="mailto:hirelibbysmith@gmail.com"
                  className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                >
                  <Mail size={18} />
                  <span>{t('footer.email')}: hirelibbysmith@gmail.com</span>
                </a>
                <a 
                  href="tel:972-674-9774"
                  className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                >
                  <Phone size={18} />
                  <span>{t('footer.phone')}: 972-674-9774</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/20 text-center">
            <p className="text-white/70">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}