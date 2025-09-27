import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Users, Briefcase, ShoppingCart, UploadCloud } from 'lucide-react';
import BulkImportPage from '../features/management/pages/BulkImportPage';
import CRMDashboard from '../features/management/pages/CRMDashboard';
import HRMDashboard from '../features/management/pages/HRMDashboard';
import ProcurementDashboard from '../features/management/pages/ProcurementDashboard';

type Tab = 'crm' | 'hrm' | 'procurement' | 'import';

const ManagementDashboard: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<Tab>('import');

  const tabs = [
    { id: 'crm', label: t('management.tabs.crm'), icon: Users },
    { id: 'hrm', label: t('management.tabs.hrm'), icon: Briefcase },
    { id: 'procurement', label: t('management.tabs.procurement'), icon: ShoppingCart },
    { id: 'import', label: t('management.tabs.import'), icon: UploadCloud },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'crm':
        return <CRMDashboard />;
      case 'hrm':
        return <HRMDashboard />;
      case 'procurement':
        return <ProcurementDashboard />;
      case 'import':
        return <BulkImportPage />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900">{t('management.title')}</h1>
        <p className="mt-2 text-lg text-gray-600">{t('management.subtitle')}</p>
      </motion.div>

      <div className="mt-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-4 rtl:space-x-reverse" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as Tab)}
                className={`${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm transition-colors items-center`}
              >
                <tab.icon className="mr-2 h-5 w-5" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ManagementDashboard;
