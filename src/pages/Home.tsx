import { Link } from 'react-router-dom';
import { useI18n } from '@/i18n/useI18n';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Globe, DollarSign, ExternalLink } from 'lucide-react';
import Hero from '@/components/Hero';

export default function Home() {
  const { t } = useI18n();

  const trustItems = [
    { icon: Zap, key: 'trust.fast' },
    { icon: Globe, key: 'trust.bilingual' },
    { icon: DollarSign, key: 'trust.pricing' },
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Trust Indicators */}
      <section className="bg-brand-cloud py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6">
            {trustItems.map(({ icon: Icon, key }) => (
              <Badge 
                key={key} 
                variant="secondary" 
                className="flex items-center gap-2 px-6 py-3 text-base bg-white border border-brand-royal/20"
              >
                <Icon size={18} className="text-brand-royal" />
                <span className="text-brand-ink">{t(key)}</span>
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-ink mb-4">
              {t('portfolio.title')}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-brand-ink">
                    {t('portfolio.item1.title')}
                  </h3>
                  <ExternalLink size={18} className="text-brand-royal flex-shrink-0 ml-2" />
                </div>
                <p className="text-brand-slate mb-4">
                  {t('portfolio.item1.blurb')}
                </p>
                <a 
                  href="https://hampyongnoodle.twupro.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-royal hover:text-brand-royal/80 font-medium"
                >
                  hampyongnoodle.twupro.com
                </a>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-brand-ink">
                    {t('portfolio.item2.title')}
                  </h3>
                  <ExternalLink size={18} className="text-brand-royal flex-shrink-0 ml-2" />
                </div>
                <p className="text-brand-slate mb-4">
                  {t('portfolio.item2.blurb')}
                </p>
                <a 
                  href="https://www.tempo-pilates.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-royal hover:text-brand-royal/80 font-medium"
                >
                  tempo-pilates.com
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild variant="outline" className="border-brand-royal text-brand-royal hover:bg-brand-royal hover:text-white">
              <Link to="/portfolio">{t('portfolio.viewAll')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-royal py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get a fast quote for your bilingual website today.
            </p>
            <Button 
              asChild 
              variant="secondary" 
              className="bg-white text-brand-royal hover:bg-white/90 px-8 py-6 text-lg"
            >
              <Link to="/contact">{t('hero.cta')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}