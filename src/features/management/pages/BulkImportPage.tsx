import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Package, Users, Briefcase } from 'lucide-react';
import ImportTypeCard from '../components/ImportTypeCard';
import FileUploadZone from '../components/FileUploadZone';
import ImportHistoryTable from '../components/ImportHistoryTable';

export type ImportType = 'products' | 'customers' | 'employees';

const BulkImportPage: React.FC = () => {
  const { t } = useTranslation();
  const [importType, setImportType] = useState<ImportType>('products');

  const templates = {
    products: '/templates/products-import-template.xlsx',
    customers: '/templates/customers-import-template.xlsx',
    employees: '/templates/employees-import-template.xlsx'
  };

  const handleFileUpload = (file: File) => {
    console.log(`Uploading ${file.name} for import type: ${importType}`);
    // Here you would handle the file upload to the backend
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-gray-900">{t('management.bulk_import.title')}</h2>
        <p className="mt-1 text-gray-600">{t('management.bulk_import.subtitle')}</p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <ImportTypeCard
            title={t('management.bulk_import.import_products')}
            description={t('management.bulk_import.import_products_desc')}
            icon={Package}
            active={importType === 'products'}
            onClick={() => setImportType('products')}
          />
        </motion.div>
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <ImportTypeCard
            title={t('management.bulk_import.import_customers')}
            description={t('management.bulk_import.import_customers_desc')}
            icon={Users}
            active={importType === 'customers'}
            onClick={() => setImportType('customers')}
          />
        </motion.div>
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <ImportTypeCard
            title={t('management.bulk_import.import_employees')}
            description={t('management.bulk_import.import_employees_desc')}
            icon={Briefcase}
            active={importType === 'employees'}
            onClick={() => setImportType('employees')}
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <FileUploadZone
          onFileSelect={handleFileUpload}
          templateUrl={templates[importType]}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <ImportHistoryTable />
      </motion.div>
    </div>
  );
};

export default BulkImportPage;
