import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Users, UserPlus, Star, Smile } from 'lucide-react';

const CRMDashboard: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    { title: t('management.crm_dashboard.new_customers'), value: '125', icon: UserPlus, color: 'text-success-500' },
    { title: t('management.crm_dashboard.active_customers'), value: '1,280', icon: Users, color: 'text-blue-500' },
    { title: t('management.crm_dashboard.vip_customers'), value: '72', icon: Star, color: 'text-yellow-500' },
    { title: t('management.crm_dashboard.customer_satisfaction'), value: '96%', icon: Smile, color: 'text-purple-500' },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900">{t('management.crm_dashboard.title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              className="card p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-600">{stat.title}</h3>
                <Icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <p className="text-4xl font-bold text-gray-900 mt-4">{stat.value}</p>
            </motion.div>
          );
        })}
      </div>
      <div className="text-center p-16 bg-gray-50 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-700">محتوای کامل داشبورد CRM به زودی اضافه خواهد شد...</h3>
        <p className="text-gray-500 mt-2">شامل نمودارها، لیست مشتریان و فعالیت‌های اخیر.</p>
      </div>
    </div>
  );
};

export default CRMDashboard;
