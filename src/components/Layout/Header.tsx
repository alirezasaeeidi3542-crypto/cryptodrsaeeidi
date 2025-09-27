import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Home, 
  ShoppingBag, 
  Bot, 
  Users, 
  Phone, 
  Menu, 
  X,
  Search,
  ShoppingCart,
  Bell,
  User,
  Settings,
  Crown,
  FileText,
  Languages,
  Zap,
  BarChart3,
  Briefcase
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="relative group">
      <button className="flex items-center p-2 text-gray-600 hover:text-primary-600 transition-colors">
        <Languages className="h-5 w-5" />
        <span className="mx-1 text-sm font-medium uppercase">{i18n.language}</span>
      </button>
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-24 bg-white rounded-md shadow-lg border border-gray-200 py-1 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
        <button
          onClick={() => changeLanguage('fa')}
          className={`block w-full text-center px-4 py-2 text-sm ${i18n.language === 'fa' ? 'font-bold text-primary-600' : 'text-gray-700'} hover:bg-gray-100`}
        >
          فارسی
        </button>
        <button
          onClick={() => changeLanguage('en')}
          className={`block w-full text-center px-4 py-2 text-sm ${i18n.language === 'en' ? 'font-bold text-primary-600' : 'text-gray-700'} hover:bg-gray-100`}
        >
          English
        </button>
      </div>
    </div>
  );
};


const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navigation = [
    { name: t('header.nav.home'), href: '/', icon: Home },
    { name: t('header.nav.modules'), href: '/modules', icon: Settings },
    { name: t('header.nav.store'), href: '/store', icon: ShoppingBag },
    { name: t('header.nav.ai_services'), href: '/ai-services', icon: Bot },
    { name: t('header.nav.premium_services'), href: '/premium-services', icon: Zap, highlight: true },
    { name: t('header.nav.documentation'), href: '/documentation', icon: FileText },
    { name: t('header.nav.about'), href: '/about', icon: Users },
    { name: t('header.nav.contact'), href: '/contact', icon: Phone },
  ];

  const isActive = (href: string) => location.pathname === href;

  const getSubscriptionBadge = () => {
    if (!user?.subscription) return null;
    
    const colors = {
      free: 'bg-gray-100 text-gray-800',
      professional: 'bg-blue-100 text-blue-800',
      enterprise: 'bg-purple-100 text-purple-800'
    };

    return (
      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${colors[user.subscription.name]}`}>
        {user.subscription.name === 'enterprise' && <Crown className="w-3 h-3 me-1" />}
        {t(`header.subscription_tier.${user.subscription.name}`)}
      </span>
    );
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">{t('header.title')}</h1>
              <p className="text-xs text-gray-500">{t('header.subtitle')}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 rtl:space-x-reverse">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-1 rtl:space-x-reverse px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-primary-600'
                  } ${item.highlight ? 'text-primary-600 font-bold' : ''}`}
                >
                  <Icon className={`h-4 w-4 ${item.highlight ? 'text-yellow-500' : ''}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Switcher */}
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>

            {/* Search */}
            <div className="hidden sm:flex relative">
              <input
                type="text"
                placeholder={t('header.search_placeholder')}
                className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            {user ? (
              <>
                {/* Cart */}
                <button className="relative p-2 text-gray-600 hover:text-primary-600 transition-colors">
                  <ShoppingCart className="h-6 w-6" />
                  <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    2
                  </span>
                </button>

                {/* Notifications */}
                <button className="relative p-2 text-gray-600 hover:text-primary-600 transition-colors">
                  <Bell className="h-6 w-6" />
                  <span className="absolute -top-1 -right-1 bg-danger-500 text-white text-xs rounded-full h-2 w-2"></span>
                </button>

                {/* Profile Menu */}
                <div className="relative">
                  <button
                    onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                    className="flex items-center space-x-3 rtl:space-x-reverse p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className={`flex flex-col ${i18n.language === 'fa' ? 'items-end' : 'items-start'}`}>
                      <span className="text-sm font-medium text-gray-700">{user.name}</span>
                      {getSubscriptionBadge()}
                    </div>
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="h-8 w-8 rounded-full object-cover"
                      />
                    ) : (
                      <div className="h-8 w-8 bg-primary-500 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </button>

                  <AnimatePresence>
                    {isProfileMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className={`absolute mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1 ${i18n.language === 'fa' ? 'left-0' : 'right-0'}`}
                      >
                        <div className="px-4 py-3 border-b border-gray-100">
                          <p className="text-sm font-medium text-gray-900">{user.name}</p>
                          <p className="text-sm text-gray-500">{user.email}</p>
                          <p className="text-xs text-gray-400 mt-1">{t('header.profile.role')}: {user.role}</p>
                        </div>
                        
                        <Link to="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsProfileMenuOpen(false)}><User className="w-4 h-4 me-2"/>{t('header.profile.user_profile')}</Link>
                        <Link to="/dashboard" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsProfileMenuOpen(false)}><BarChart3 className="w-4 h-4 me-2"/>{t('header.profile.dashboard')}</Link>
                        {user.role === 'admin' && <Link to="/management" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsProfileMenuOpen(false)}><Briefcase className="w-4 h-4 me-2"/>{t('header.profile.management')}</Link>}
                        {user.role === 'admin' && <Link to="/revenue-dashboard" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsProfileMenuOpen(false)}><BarChart3 className="w-4 h-4 me-2"/>{t('header.profile.revenue_dashboard')}</Link>}
                        <Link to="/subscription" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsProfileMenuOpen(false)}><Crown className="w-4 h-4 me-2"/>{t('header.profile.subscription')}</Link>
                        <Link to="/orders" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsProfileMenuOpen(false)}><ShoppingCart className="w-4 h-4 me-2"/>{t('header.profile.orders')}</Link>
                        <hr className="my-1" />
                        <button
                          onClick={() => {
                            logout();
                            setIsProfileMenuOpen(false);
                          }}
                          className="block w-full text-right rtl:text-left px-4 py-2 text-sm text-danger-600 hover:bg-gray-100"
                        >
                          {t('header.profile.logout')}
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Link to="/login" className="text-primary-600 hover:text-primary-700 font-medium px-4 py-2 rounded-lg hover:bg-primary-50 transition-colors">{t('header.login')}</Link>
                <Link to="/register" className="btn-primary">{t('header.free_trial')}</Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-primary-600 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-2 space-y-1">
              {/* Mobile Search & Lang Switcher */}
              <div className="flex items-center space-x-2 rtl:space-x-reverse my-4">
                <div className="relative flex-grow">
                  <input type="text" placeholder={t('header.search_placeholder')} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
                <LanguageSwitcher />
              </div>

              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 rtl:space-x-reverse px-3 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? 'bg-primary-100 text-primary-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    } ${item.highlight ? 'text-primary-600 font-bold' : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className={`h-5 w-5 ${item.highlight ? 'text-yellow-500' : ''}`} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}

              {!user && (
                <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
                  <Link to="/login" className="block w-full text-center py-2 text-primary-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>{t('header.login')}</Link>
                  <Link to="/register" className="block w-full text-center btn-primary" onClick={() => setIsMobileMenuOpen(false)}>{t('header.free_trial')}</Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
