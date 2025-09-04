import { useI18n } from '@/i18n/useI18n';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Code2, Globe, Users, Zap } from 'lucide-react';

export default function About() {
  const { t } = useI18n();

  const skills = [
    {
      icon: Code2,
      title: 'Modern Tech Stack',
      description: 'React, Vite, Tailwind CSS for fast, maintainable websites'
    },
    {
      icon: Globe, 
      title: 'Bilingual Expertise',
      description: 'Korean/English sites with proper i18n and cultural awareness'
    },
    {
      icon: Users,
      title: 'Small Business Focus',
      description: 'Understanding the unique needs of restaurants, cafés, and local shops'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Clear scope, flat pricing, and quick turnaround times'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-brand-ink mb-8">
            {t('about.title')}
          </h1>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Photo */}
            <div className="order-2 lg:order-1">
              <div className="bg-brand-cloud rounded-lg aspect-square flex items-center justify-center border border-brand-royal/20">
                <div className="text-center text-brand-slate">
                  <div className="text-lg mb-2">Photo placeholder</div>
                  <div className="text-sm">public/assets/libby.jpg</div>
                  <div className="text-sm text-brand-slate/60 mt-2">
                    Alt: Professional photo of Libby Smith, web developer
                  </div>
                </div>
              </div>
            </div>

            {/* About Text */}
            <div className="order-1 lg:order-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl leading-relaxed text-brand-slate mb-6">
                  {t('about.body')}
                </p>
                
                <div className="bg-white border border-brand-royal/20 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-brand-ink mb-4">
                    Why I specialize in DFW immigrant businesses
                  </h3>
                  <p className="text-brand-slate">
                    Having worked with many Korean and other immigrant-owned businesses in the DFW area, 
                    I understand the unique challenges: language barriers, cultural nuances in design preferences, 
                    and the need for websites that serve both English and native-language customers effectively.
                  </p>
                </div>

                <Button asChild className="bg-brand-royal hover:bg-brand-royal/90 text-white px-8 py-6 text-lg">
                  <Link to="/contact">{t('about.cta')}</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Skills/Approach */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-brand-ink text-center mb-12">
              My Approach
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-brand-royal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <skill.icon className="w-8 h-8 text-brand-royal" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-ink mb-3">
                    {skill.title}
                  </h3>
                  <p className="text-brand-slate">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="bg-brand-cloud rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-brand-ink text-center mb-8">
              Simple Process
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-royal text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold text-brand-ink mb-2">
                  Discovery Call
                </h3>
                <p className="text-brand-slate">
                  We discuss your needs, content, and timeline
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-royal text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold text-brand-ink mb-2">
                  Build & Review
                </h3>
                <p className="text-brand-slate">
                  I build your site and send updates for feedback
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-royal text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold text-brand-ink mb-2">
                  Launch & Support
                </h3>
                <p className="text-brand-slate">
                  Your site goes live with ongoing support available
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-brand-ink mb-6">
              Let's build your website together
            </h2>
            <Button asChild className="bg-brand-emerald hover:bg-brand-emerald/90 text-white px-8 py-6 text-lg">
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}