import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, duration: 0.5 }}
      >
        <h1 className="text-8xl font-bold text-primary-500">404</h1>
        <h2 className="mt-4 text-4xl font-bold text-gray-800">{t('notfound.title')}</h2>
        <p className="mt-4 text-lg text-gray-600">
          {t('notfound.message')}
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-10 flex flex-col sm:flex-row items-center gap-4"
      >
        <Link
          to="/"
          className="btn-primary inline-flex items-center"
        >
          <Home className="mr-2 h-5 w-5" />
          {t('notfound.go_home')}
        </Link>
        <div className="relative w-full sm:w-64">
          <input
            type="search"
            placeholder={t('notfound.search_placeholder')}
            className="input-field w-full pr-10"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
