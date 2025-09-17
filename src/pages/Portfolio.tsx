import React from 'react';
import { useI18n } from '@/i18n/useI18n';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  const { t } = useI18n();
  const base = import.meta.env.BASE_URL || "/";

  // Portfolio projects with screenshots
  const projects = [
    {
      title: t('portfolio.item1.title'),
      blurb: t('portfolio.item1.blurb'),
      url: 'https://hampyongnoodle.twupro.com/',
      displayUrl: 'hampyongnoodle.twupro.com',
      image: 'Screenshot Hampyong 2025-09-13.jpg'
    },
    {
      title: t('portfolio.item2.title'),
      blurb: t('portfolio.item2.blurb'),
      url: 'https://www.tempo-pilates.com/',
      displayUrl: 'tempo-pilates.com',
      image: 'Screenshot Tempo 2025-09-13.jpg'
    }
  ];

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

        {/* Portfolio Cards */}
        <section className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {projects.map((project, i) => (
            <Card key={i} className="group hover:shadow-lg transition-shadow overflow-hidden">
              {/* Screenshot */}
              <div className="aspect-video overflow-hidden">
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <img
                    src={`${base}${encodeURI(project.image)}`}
                    alt={project.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-brand-ink">
                    {project.title}
                  </h3>
                  <ExternalLink size={18} className="text-brand-royal flex-shrink-0 ml-2" />
                </div>
                <p className="text-brand-slate mb-4">
                  {project.blurb}
                </p>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-royal hover:text-brand-royal/80 font-medium"
                >
                  {project.displayUrl}
                </a>
              </CardContent>
            </Card>
          ))}
        </section>

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