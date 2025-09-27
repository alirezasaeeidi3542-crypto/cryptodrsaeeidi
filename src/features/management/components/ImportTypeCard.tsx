import React from 'react';
import { motion } from 'framer-motion';

interface ImportTypeCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  active: boolean;
  onClick: () => void;
}

const ImportTypeCard: React.FC<ImportTypeCardProps> = ({ title, description, icon: Icon, active, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 h-full flex flex-col ${
        active ? 'bg-primary-50 border-primary-500 shadow-lg' : 'bg-white border-gray-200 hover:border-primary-300 hover:shadow-md'
      }`}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${active ? 'bg-primary-500' : 'bg-gray-100'}`}>
          <Icon className={`w-6 h-6 ${active ? 'text-white' : 'text-gray-600'}`} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-600 flex-grow">{description}</p>
    </motion.div>
  );
};

export default ImportTypeCard;
