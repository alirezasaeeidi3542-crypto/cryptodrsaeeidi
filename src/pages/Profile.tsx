import React from 'react';
import { useTranslation } from 'react-i18next';

const Profile: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{t('header.profile.user_profile')}</h1>
      <p>This is the profile page. Content will be added soon.</p>
    </div>
  );
};

export default Profile;
