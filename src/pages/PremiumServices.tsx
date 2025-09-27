import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { BarChart3, Map, Briefcase, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { premiumServices } from '../data/revenue';

const ServiceCard: React.FC<{ service: typeof premiumServices[0], onPurchase: (id: string) => void }> = ({ service, onPurchase }) => {
  const { t } = useTranslation();
  const icons: { [key: string]: React.ElementType } = {
    'swot-analysis': BarChart3,
    'route-optimization': Map,
    'consulting': Briefcase,
  };
  const Icon = icons[service.id] || Zap;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card flex flex-col"
    >
      <div className="card-header flex items-center space-x-4 rtl:space-x-reverse">
        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">{t(service.title)}</h3>
          <p className="text-primary-600 font-semibold">{t(service.price)}</p>
        </div>
      </div>
      <div className="card-body flex-grow">
        <ul className="space-y-3">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2 rtl:space-x-reverse">
              <CheckCircle className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600">{t(feature)}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 pt-0">
        <button
          onClick={() => onPurchase(service.id)}
          className="w-full btn-primary flex items-center justify-center"
        >
          {t('premium_services.purchase_button')}
          <ArrowRight className="w-4 h-4 mx-2" />
        </button>
      </div>
    </motion.div>
  );
};

const PremiumServices: React.FC = () => {
  const { t } = useTranslation();

  const handlePurchase = (serviceId: string) => {
    console.log(`Purchasing service: ${serviceId}`);
    // Here you would typically trigger a payment flow
    alert(`${t('premium_services.purchase_alert')} ${serviceId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{t('premium_services.title')}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('premium_services.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {premiumServices.map((service, index) => (
            <ServiceCard key={index} service={service} onPurchase={handlePurchase} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PremiumServices;
