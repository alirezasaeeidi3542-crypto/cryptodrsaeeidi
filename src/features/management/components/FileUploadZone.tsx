import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';
import { UploadCloud, FileText, Download } from 'lucide-react';

interface FileUploadZoneProps {
  onFileSelect: (file: File) => void;
  templateUrl: string;
}

const FileUploadZone: React.FC<FileUploadZoneProps> = ({ onFileSelect, templateUrl }) => {
  const { t } = useTranslation();
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setUploadedFile(file);
      onFileSelect(file);
    }
  }, [onFileSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/vnd.ms-excel': ['.xls'],
    },
    maxFiles: 1,
  });

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <div
        {...getRootProps()}
        className={`p-8 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors ${
          isDragActive ? 'border-primary-500 bg-primary-50' : 'border-gray-300 bg-gray-50'
        }`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center">
          <UploadCloud className="w-12 h-12 text-gray-400 mb-4" />
          <p className="text-lg font-semibold text-gray-700">{t('management.bulk_import.upload_zone_title')}</p>
          <p className="text-sm text-gray-500">{t('management.bulk_import.upload_zone_desc')}</p>
        </div>
      </div>

      {uploadedFile && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center justify-between">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <FileText className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-green-800">{uploadedFile.name}</span>
          </div>
          <span className="text-sm text-gray-500">{(uploadedFile.size / 1024).toFixed(2)} KB</span>
        </div>
      )}

      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a
          href={templateUrl}
          download
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200"
        >
          <Download className="w-4 h-4 mr-2" />
          {t('management.bulk_import.download_template')}
        </a>
        <button
          onClick={() => uploadedFile && onFileSelect(uploadedFile)}
          disabled={!uploadedFile}
          className="btn-primary w-full sm:w-auto disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          {t('management.bulk_import.upload_button')}
        </button>
      </div>
    </div>
  );
};

export default FileUploadZone;
