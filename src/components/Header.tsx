import { Link, useLocation } from 'react-router-dom';
import LogoLumi from '@/components/LogoLumi';
import { useI18n } from '@/i18n/useI18n';
import { Button } from '@/components/ui/button';

export function Header() {
  const { t, locale, setLocale } = useI18n();
  const location = useLocation();

  const navItems = [
    { key: 'nav.home', path: '/' },
    { key: 'nav.services', path: '/services' },
    { key: 'nav.portfolio', path: '/portfolio' },
    { key: 'nav.about', path: '/about' },
    { key: 'nav.contact', path: '/contact' },
  ];

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'ko' : 'en');
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-charcoal border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex-shrink-0">
            <LogoLumi variant="light" size={28} />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(({ key, path }) => (
              <Link
                key={key}
                to={path}
                className={`text-white hover:text-white/80 transition-colors ${
                  location.pathname === path ? 'text-white' : 'text-white/90'
                }`}
              >
                {t(key)}
              </Link>
            ))}
          </nav>

          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="bg-transparent border-white/30 text-white hover:bg-white/10"
          >
            {t('nav.language')}
          </Button>
        </div>
      </div>
    </header>
  );
}