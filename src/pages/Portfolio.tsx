import { useI18n } from '@/i18n/useI18n';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const { t } = useI18n();

  const projects = [
    {
      title: t('portfolio.item1.title'),
      description: t('portfolio.item1.blurb'),
      url: 'https://hampyongnoodle.twupro.com/',
      domain: 'hampyongnoodle.twupro.com',
      tags: ['Restaurant', 'Korean', 'Bilingual', 'Mobile-First']
    },
    {
      title: t('portfolio.item2.title'), 
      description: t('portfolio.item2.blurb'),
      url: 'https://www.tempo-pilates.com/',
      domain: 'tempo-pilates.com',
      tags: ['Fitness', 'Marketing', 'Clean Design', 'Fast Loading']
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

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                {/* Project Image Placeholder */}
                <div className="bg-brand-cloud rounded-lg h-64 mb-6 flex items-center justify-center border border-brand-royal/20">
                  <div className="text-center">
                    <div className="text-brand-slate mb-2">Screenshot of</div>
                    <div className="font-medium text-brand-ink">{project.domain}</div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-brand-ink group-hover:text-brand-royal transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink size={20} className="text-brand-royal flex-shrink-0 ml-3 mt-1" />
                </div>

                <p className="text-brand-slate mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-brand-cloud text-brand-ink text-sm rounded-full border border-brand-royal/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Visit Link */}
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-royal hover:text-brand-royal/80 font-medium text-lg transition-colors"
                >
                  <span>Visit {project.domain}</span>
                  <ExternalLink size={18} />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

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