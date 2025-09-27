import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../contexts/AuthContext';

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const { user } = useAuth();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{t('dashboard.title')}</h1>
      <p className="text-lg">{t('dashboard.welcome', { name: user?.name })}</p>
      {/* Dashboard content will go here */}
    </div>
  );
};

export default Dashboard;
