import React from 'react';
import { useTranslation } from 'react-i18next';
import { importHistory } from '../../../data/management';
import { Eye, Download, RefreshCw } from 'lucide-react';

const ImportHistoryTable: React.FC = () => {
  const { t } = useTranslation();

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return 'badge badge-success';
      case 'processing':
        return 'badge badge-primary animate-pulse';
      case 'failed':
        return 'badge badge-danger';
      case 'pending':
        return 'badge badge-warning';
      default:
        return 'badge';
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{t('management.bulk_import.history_title')}</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">{t('management.bulk_import.table.file_name')}</th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">{t('management.bulk_import.table.type')}</th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">{t('management.bulk_import.table.status')}</th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">{t('management.bulk_import.table.records')}</th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">{t('management.bulk_import.table.date')}</th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">{t('management.bulk_import.table.user')}</th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">{t('management.bulk_import.table.actions')}</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {importHistory.map((batch) => (
              <tr key={batch.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{batch.fileName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{t(`management.bulk_import.type.${batch.importType}`)}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={getStatusBadge(batch.status)}>
                    {t(`management.bulk_import.status.${batch.status}`)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className="text-success-600">{batch.successfulImports}</span> / {batch.totalRecords}
                  {batch.failedImports > 0 && <span className="text-danger-600 ml-2">({batch.failedImports} خطا)</span>}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(batch.createdAt).toLocaleDateString('fa-IR')}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{batch.user}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <button className="text-primary-600 hover:text-primary-900"><Eye className="w-4 h-4" /></button>
                    <button className="text-green-600 hover:text-green-900"><Download className="w-4 h-4" /></button>
                    {batch.status === 'failed' && <button className="text-yellow-600 hover:text-yellow-900"><RefreshCw className="w-4 h-4" /></button>}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ImportHistoryTable;
