import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Bot, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowUp,
  Crown,
  Shield,
  Zap
} from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <Bot className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{t('header.title')}</h3>
                <p className="text-sm text-gray-400">{t('header.subtitle')}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            
            {/* Subscription Tiers */}
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-300">{t('footer.subscription_plans')}</h4>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-gray-800 text-gray-300">
                  <Zap className="w-3 h-3 me-1" />
                  {t('header.subscription_tier.free')}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-blue-900 text-blue-300">
                  <Shield className="w-3 h-3 me-1" />
                  {t('header.subscription_tier.professional')}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-purple-900 text-purple-300">
                  <Crown className="w-3 h-3 me-1" />
                  {t('header.subscription_tier.enterprise')}
                </span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Platform Features */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.platform_features')}</h4>
            <ul className="space-y-2">
              <li><Link to="/modules" className="text-gray-400 hover:text-white transition-colors">{t('footer.features.smart_modules')}</Link></li>
              <li><Link to="/ai-services" className="text-gray-400 hover:text-white transition-colors">{t('footer.features.ai_services')}</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.features.google_sheets')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.features.swot_analysis')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.features.sales_forecasting')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.features.on_premise')}</a></li>
            </ul>
          </div>

          {/* Modules */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.main_modules')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.modules.inventory')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.modules.finance')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.modules.distribution')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.modules.sales')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.modules.visitors')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.modules.tracking')}</a></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact_support')}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="h-5 w-5 text-primary-500" />
                <span className="text-gray-400">021-88776655</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="h-5 w-5 text-primary-500" />
                <span className="text-gray-400">support@drsaeedi-platform.com</span>
              </div>
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <MapPin className="h-5 w-5 text-primary-500 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  تهران، خیابان ولیعصر، پلاک ۱۲۳۴
                  <br />
                  ساختمان فناوری DrSaeedi
                </span>
              </div>
            </div>

            {/* Support Links */}
            <div className="mt-6">
              <h5 className="font-medium mb-3">{t('footer.quick_support')}</h5>
              <div className="space-y-2">
                <Link to="/documentation" className="block text-gray-400 hover:text-white text-sm transition-colors">📖 {t('footer.support.docs')}</Link>
                <Link to="/support" className="block text-gray-400 hover:text-white text-sm transition-colors">🎫 {t('footer.support.ticket')}</Link>
                <a href="#" className="block text-gray-400 hover:text-white text-sm transition-colors">💬 {t('footer.support.chat')}</a>
                <a href="#" className="block text-gray-400 hover:text-white text-sm transition-colors">📹 {t('footer.support.tutorials')}</a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="font-medium mb-2">{t('footer.newsletter')}</h5>
              <div className="flex">
                <input type="email" placeholder={t('footer.newsletter_placeholder')} className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-r-lg rtl:rounded-r-none rtl:rounded-l-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm text-white placeholder-gray-400" />
                <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-l-lg rtl:rounded-l-none rtl:rounded-r-lg transition-colors text-sm font-medium">{t('footer.subscribe')}</button>
              </div>
              <p className="text-xs text-gray-500 mt-2">{t('footer.newsletter_desc')}</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
              <p className="text-gray-400 text-sm">{t('footer.copyright', { year: currentYear })}</p>
              <div className="flex items-center space-x-4 rtl:space-x-reverse text-xs text-gray-500">
                <span>{t('footer.version')} ۲.۱.۰</span>
                <span>•</span>
                <span>MIT License</span>
                <span>•</span>
                <span>{t('footer.made_in')}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 rtl:space-x-reverse mt-4 lg:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">{t('footer.privacy')}</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">{t('footer.terms')}</Link>
              <Link to="/license" className="text-gray-400 hover:text-white text-sm transition-colors">{t('footer.license')}</Link>
              <Link to="/api" className="text-gray-400 hover:text-white text-sm transition-colors">API</Link>
              <button onClick={scrollToTop} className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
