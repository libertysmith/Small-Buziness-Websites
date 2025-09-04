import { useI18n } from '@/i18n/useI18n';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { CheckCircle2, Plus } from 'lucide-react';

export default function Services() {
  const { t } = useI18n();

  const packages = [
    {
      name: t('services.starter'),
      price: '$999',
      features: [
        'Single page website',
        'Mobile-first responsive design', 
        'Bilingual EN/KR content',
        'Contact form integration',
        'Google Maps embed',
        'Basic SEO setup'
      ]
    },
    {
      name: t('services.standard'),
      price: '$1,400', 
      features: [
        'Up to 5 pages',
        'Mobile-first responsive design',
        'Bilingual EN/KR content',
        'Menu/service showcase',
        'Photo gallery (up to 20 photos)',
        'Contact forms & Google Maps',
        'Advanced SEO & social sharing',
        'Basic analytics setup'
      ]
    },
    {
      name: t('services.plus'),
      price: '$1,900',
      features: [
        'Up to 8 pages',
        'Mobile-first responsive design', 
        'Bilingual EN/KR content',
        'Advanced menu/catalog system',
        'Photo gallery (up to 40 photos)',
        'Multiple contact forms',
        'Advanced SEO & performance',
        'Analytics & conversion tracking',
        '30 days post-launch support'
      ]
    }
  ];

  const addons = [
    { service: 'Logo refresh', price: '$150' },
    { service: 'Photo editing (20 photos)', price: '$120' },
    { service: 'Extra language support', price: '$150' },
    { service: 'Monthly updates (2 hrs)', price: '$60' },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-brand-ink mb-6">
            {t('services.title')}
          </h1>
          <p className="text-xl text-brand-slate max-w-3xl mx-auto">
            {t('services.bullets')}
          </p>
        </div>

        {/* Packages */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative ${index === 1 ? 'border-brand-royal shadow-lg' : ''}`}>
              {index === 1 && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-royal text-white">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-brand-ink">
                  {pkg.name}
                </CardTitle>
                <div className="text-4xl font-bold text-brand-royal mb-2">
                  {pkg.price}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {pkg.features.map((feature, featIndex) => (
                    <li key={featIndex} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-brand-emerald flex-shrink-0 mt-0.5" />
                      <span className="text-brand-slate">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  asChild 
                  className={`w-full mt-6 ${
                    index === 1 
                      ? 'bg-brand-royal hover:bg-brand-royal/90' 
                      : 'bg-brand-charcoal hover:bg-brand-charcoal/90'
                  } text-white`}
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add-ons */}
        <div className="bg-brand-cloud rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-brand-ink mb-6 text-center">
            {t('addons.title')}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {addons.map((addon, index) => (
              <div key={index} className="flex items-center justify-between bg-white rounded-lg p-4">
                <div className="flex items-center gap-2">
                  <Plus size={16} className="text-brand-emerald" />
                  <span className="text-brand-ink">{addon.service}</span>
                </div>
                <span className="font-semibold text-brand-royal">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="text-center bg-white border border-brand-royal/20 rounded-lg p-6 mb-12">
          <p className="text-brand-slate">
            <strong className="text-brand-ink">Note:</strong> {t('services.note')}
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild className="bg-brand-royal hover:bg-brand-royal/90 text-white px-8 py-6 text-lg">
            <Link to="/contact">{t('hero.cta')}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}