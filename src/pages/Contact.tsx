import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{t('header.nav.contact')}</h1>
      <p>This is the contact page. Content will be added soon.</p>
    </div>
  );
};

export default Contact;
