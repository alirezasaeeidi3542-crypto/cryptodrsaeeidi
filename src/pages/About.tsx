import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{t('header.nav.about')}</h1>
      <p>This is the about us page. Content will be added soon.</p>
    </div>
  );
};

export default About;
