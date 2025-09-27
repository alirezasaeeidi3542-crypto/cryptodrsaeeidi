import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { DollarSign, ShoppingCart, Users, ArrowUp, ArrowDown, BarChart3 } from 'lucide-react';
import { revenueData, chartData, topServices } from '../data/revenue';
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';

const RevenueCard: React.FC<{ title: string; amount: number; icon: React.ElementType; trend?: 'up' | 'down' }> = ({ title, amount, icon: Icon, trend }) => {
  const { t, i18n } = useTranslation();
  const formattedAmount = new Intl.NumberFormat(i18n.language === 'fa' ? 'fa-IR' : 'en-US', {
    style: 'currency',
    currency: 'IRR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-600">{t(title)}</h3>
        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary-600" />
        </div>
      </div>
      <p className="text-3xl font-bold text-gray-900">{formattedAmount}</p>
      {trend && (
        <div className={`flex items-center mt-2 text-sm ${trend === 'up' ? 'text-success-600' : 'text-danger-600'}`}>
          {trend === 'up' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
          <span className="mx-1 font-semibold">{revenueData.growth}%</span>
          <span>{t('revenue_dashboard.last_month')}</span>
        </div>
      )}
    </div>
  );
};

const ServicesPerformanceChart: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="card p-6 h-96">
      <h3 className="text-xl font-bold mb-4">{t('revenue_dashboard.chart_title')}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="name" tick={{ fill: '#6b7280' }} />
          <YAxis tick={{ fill: '#6b7280' }} />
          <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '0.5rem' }} />
          <Legend />
          <Line type="monotone" dataKey="pish" name={t('revenue_dashboard.subscriptions')} stroke="#8884d8" strokeWidth={2} />
          <Line type="monotone" dataKey="uv" name={t('revenue_dashboard.services')} stroke="#82ca9d" strokeWidth={2} />
          <Line type="monotone" dataKey="amt" name={t('revenue_dashboard.commissions')} stroke="#ffc658" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const TopSellingServices: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="card p-6">
            <h3 className="text-xl font-bold mb-4">{t('revenue_dashboard.top_services_title')}</h3>
            <ul className="space-y-4">
                {topServices.map((service, index) => (
                    <li key={index} className="flex items-center justify-between">
                        <span className="font-medium text-gray-700">{t(service.name)}</span>
                        <span className="font-bold text-gray-900">{new Intl.NumberFormat('fa-IR').format(service.revenue)} {t('revenue_dashboard.toman')}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};


const RevenueDashboard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{t('revenue_dashboard.title')}</h1>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6"
      >
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <RevenueCard title="revenue_dashboard.subscriptions" amount={revenueData.monthly.subscriptions} icon={Users} />
        </motion.div>
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <RevenueCard title="revenue_dashboard.services" amount={revenueData.monthly.services} icon={BarChart3} />
        </motion.div>
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <RevenueCard title="revenue_dashboard.commissions" amount={revenueData.monthly.commissions} icon={ShoppingCart} />
        </motion.div>
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <RevenueCard title="revenue_dashboard.total" amount={revenueData.monthly.total} icon={DollarSign} trend="up" />
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-2"
        >
          <ServicesPerformanceChart />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <TopSellingServices />
        </motion.div>
      </div>
    </div>
  );
};

export default RevenueDashboard;
