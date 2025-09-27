import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  Bell,
  Search,
  User,
  Crown,
  Languages,
  Menu,
  X
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { AnimatePresence, motion } from 'framer-motion';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();
  
    const changeLanguage = (lng: string) => {
      i18n.changeLanguage(lng);
    };
  
    return (
      <div className="relative group">
        <button className="flex items-center p-2 text-gray-500 hover:text-gray-700">
          <Languages className="h-5 w-5" />
        </button>
        <div className="absolute top-full right-0 mt-2 w-24 bg-white rounded-md shadow-lg border border-gray-200 py-1 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
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

const DashboardHeader: React.FC = () => {
  const { user } = useAuth();
  const { t, i18n } = useTranslation();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

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
    <header className="flex items-center justify-between h-20 px-6 bg-white border-b border-gray-200">
      <div className="flex items-center">
        <button className="text-gray-500 md:hidden">
          <Menu className="w-6 h-6" />
        </button>
        <div className="relative hidden md:block mx-4">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="w-5 h-5 text-gray-400" />
          </span>
          <input
            className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-primary-500 focus:ring-1"
            type="text"
            placeholder={t('header.search_placeholder')}
          />
        </div>
      </div>

      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <LanguageSwitcher />

        <button className="relative p-2 text-gray-500 hover:text-gray-700">
          <Bell className="w-6 h-6" />
          <span className="absolute top-2 right-2 block h-2 w-2 bg-danger-500 rounded-full"></span>
        </button>

        <div className="relative">
          <button
            onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            className="flex items-center space-x-3 rtl:space-x-reverse p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className={`flex flex-col ${i18n.language === 'fa' ? 'items-end' : 'items-start'}`}>
              <span className="text-sm font-medium text-gray-700">{user?.name}</span>
              {getSubscriptionBadge()}
            </div>
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="h-10 w-10 rounded-full object-cover"
              />
            ) : (
              <div className="h-10 w-10 bg-primary-500 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
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
                  <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                  <p className="text-sm text-gray-500">{user?.email}</p>
                </div>
                <Link to="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsProfileMenuOpen(false)}>
                  <User className="w-4 h-4 me-2"/>{t('header.profile.user_profile')}
                </Link>
                <Link to="/subscription" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsProfileMenuOpen(false)}>
                  <Crown className="w-4 h-4 me-2"/>{t('header.profile.subscription')}
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
