import React from 'react';
import { useTranslation } from 'react-i18next';
import { Plus, Upload, Filter } from 'lucide-react';
import ProductsTable from '../features/products/components/ProductsTable';

const ProductsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{t('products.title')}</h1>
          <p className="mt-1 text-gray-600">{t('products.subtitle')}</p>
        </div>
        <div className="flex items-center space-x-2 rtl:space-x-reverse mt-4 md:mt-0">
          <button className="btn-outline p-2">
            <Filter className="w-5 h-5" />
          </button>
          <button className="btn-outline">
            <Upload className="w-5 h-5 mr-2" />
            {t('products.import')}
          </button>
          <button className="btn-primary">
            <Plus className="w-5 h-5 mr-2" />
            {t('products.add_new')}
          </button>
        </div>
      </div>
      
      <ProductsTable />
    </div>
  );
};

export default ProductsPage;
