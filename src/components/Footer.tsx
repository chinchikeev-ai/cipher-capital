import { Activity, Linkedin, Twitter, Github } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  const footerLinks = {
    [t('footer.solutions')]: [
      t('footer.hft'),
      t('footer.aiEngine'),
      t('footer.defi'),
      t('footer.riskMgmt'),
    ],
    [t('footer.company')]: [
      t('footer.about'),
      t('footer.careers'),
      t('footer.press'),
      t('footer.contact'),
    ],
    [t('footer.resources')]: [
      t('footer.docs'),
      t('footer.api'),
      t('footer.security'),
      t('footer.compliance'),
    ],
    [t('footer.legal')]: [
      t('footer.privacy'),
      t('footer.terms'),
      t('footer.cookies'),
      t('footer.disclosures'),
    ],
  };

  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Logo */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <Activity className="w-8 h-8 text-primary" />
              <span className="font-display font-semibold text-xl tracking-tight text-foreground">
                AURUM<span className="text-primary">CRYPTO</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-medium text-foreground mb-4 text-sm uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} AURUMCRYPTO. {t('footer.rights')}
          </p>
          <p className="text-xs text-muted-foreground">
            {t('footer.regulated')}
          </p>
        </div>
      </div>
    </footer>
  );
};
