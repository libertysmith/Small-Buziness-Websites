import { Link, useLocation } from 'react-router-dom';
import LogoLumi from '@/components/LogoLumi';
import { useI18n } from '@/i18n/useI18n';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import React from 'react';

export function Header() {
  const { t, locale, setLocale } = useI18n();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

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

  // Lock scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close on Escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-charcoal border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex-shrink-0">
            <LogoLumi variant="light" size={28} />
          </Link>
          
          {/* Desktop Navigation */}
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

          {/* Desktop Language Toggle */}
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="hidden md:flex bg-transparent border-white/30 text-white hover:bg-white/10"
          >
            {t('nav.language')}
          </Button>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden p-2 text-white hover:text-white/80"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Slide-over */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-80 max-w-[80vw] transform bg-white shadow-xl transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <span className="text-lg font-semibold text-gray-900">Menu</span>
            <button
              className="p-2 text-gray-500 hover:text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <nav className="flex-1 px-4 py-6">
            <div className="space-y-4">
              {navItems.map(({ key, path }) => (
                <Link
                  key={key}
                  to={path}
                  className={`block px-3 py-2 text-base rounded-md transition-colors ${
                    location.pathname === path 
                      ? 'bg-gray-100 text-gray-900 font-medium' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t(key)}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Footer */}
            <div className="mt-8 pt-6 border-t space-y-4">
              {/* Language Toggle */}
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="w-full"
              >
                {t('nav.language')}
              </Button>

              {/* CTA Button */}
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-brand-primary hover:bg-brand-primary/90">
                  {t('hero.cta')}
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}