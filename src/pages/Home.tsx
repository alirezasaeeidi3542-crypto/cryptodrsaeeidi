import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Globe, 
  Zap,
  Shield,
  Crown,
  Package,
  DollarSign,
  Truck,
  ShoppingCart,
  Bot,
  BarChart3,
  PlayCircle
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Home: React.FC = () => {
  const { user } = useAuth();
  const { t } = useTranslation();

  const features = [
    { icon: Package, title: t('home.features.inventory'), description: t('home.features.inventory_desc') },
    { icon: DollarSign, title: t('home.features.finance'), description: t('home.features.finance_desc') },
    { icon: Truck, title: t('home.features.distribution'), description: t('home.features.distribution_desc') },
    { icon: ShoppingCart, title: t('home.features.store'), description: t('home.features.store_desc') },
    { icon: Bot, title: t('home.features.ai'), description: t('home.features.ai_desc') },
    { icon: BarChart3, title: t('home.features.analytics'), description: t('home.features.analytics_desc') }
  ];

  const stats = [
    { number: '500+', label: t('home.stats.companies') },
    { number: '50K+', label: t('home.stats.users') },
    { number: '99.9%', label: t('home.stats.uptime') },
    { number: '24/7', label: t('home.stats.support') }
  ];

  const testimonials = [
    {
      name: 'احمد محمدی',
      company: 'شرکت پخش آریا',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
      text: 'DrSaeedi Platform کسب‌وکار ما را کاملاً متحول کرد. حالا تمام عملیات‌مان هوشمند و خودکار است.'
    },
    {
      name: 'فاطمه حسینی',
      company: 'فروشگاه زنجیره‌ای برکت',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face',
      text: 'با ماژول هوش مصنوعی، فروش‌مان ۴۰٪ افزایش یافته و مدیریت موجودی بسیار آسان‌تر شده.'
    },
    {
      name: 'علی رضایی',
      company: 'گروه توزیع پارسیان',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
      text: 'قابلیت اتصال به Google Sheets و تحلیل‌های هوشمند واقعاً فوق‌العاده است. پیشنهاد می‌کنم.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex items-center space-x-2 rtl:space-x-reverse mb-6">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">🚀 {t('home.hero.badge_new')}</span>
                <span className="bg-success-500 text-white px-3 py-1 rounded-full text-sm font-medium">{t('home.hero.badge_version')}</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="block">{t('home.hero.title_1')}</span>
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">{t('home.hero.title_2')}</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-gray-100 leading-relaxed">{t('home.hero.subtitle')}</p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                {user ? (
                  <Link to="/dashboard" className="btn-secondary inline-flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 mx-2" />
                    {t('home.hero.cta_dashboard')}
                  </Link>
                ) : (
                  <Link to="/register" className="btn-secondary inline-flex items-center justify-center">
                    <Zap className="w-5 h-5 mx-2" />
                    {t('home.hero.cta_free_trial')}
                  </Link>
                )}
                <Link to="/demo" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-200">
                  <PlayCircle className="w-5 h-5 mx-2" />
                  {t('home.hero.cta_demo')}
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-6 rtl:space-x-reverse text-sm">
                <div className="flex items-center space-x-2 rtl:space-x-reverse"><CheckCircle className="w-5 h-5 text-success-400" /><span>{t('home.hero.feature_1')}</span></div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse"><CheckCircle className="w-5 h-5 text-success-400" /><span>{t('home.hero.feature_2')}</span></div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse"><CheckCircle className="w-5 h-5 text-success-400" /><span>{t('home.hero.feature_3')}</span></div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" alt="DrSaeedi Platform Dashboard" className="w-full rounded-lg shadow-2xl" />
                <div className="absolute -bottom-4 -right-4 rtl:-right-auto rtl:-left-4 bg-success-500 text-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse"><Star className="w-5 h-5 fill-current" /><span className="font-bold">۴.۹/۵</span></div>
                  <p className="text-sm">{t('home.hero.satisfaction_rate')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('home.features.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('home.features.subtitle')}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} className="card p-8 text-center hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('home.plans.title')}</h2>
            <p className="text-xl text-gray-600">{t('home.plans.subtitle')}</p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Free Plan */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-primary-300 transition-colors">
              <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4"><Zap className="w-6 h-6 text-gray-600" /><h3 className="text-2xl font-bold text-gray-900">{t('home.plans.free')}</h3></div>
              <div className="mb-6"><span className="text-4xl font-bold text-gray-900">۰</span><span className="text-gray-600">{t('home.plans.monthly')}</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2 rtl:space-x-reverse"><CheckCircle className="w-5 h-5 text-success-500" /><span>{t('home.plans.free_users')}</span></li>
                <li className="flex items-center space-x-2 rtl:space-x-reverse"><CheckCircle className="w-5 h-5 text-success-500" /><span>{t('home.plans.free_modules')}</span></li>
                <li className="flex items-center space-x-2 rtl:space-x-reverse"><CheckCircle className="w-5 h-5 text-success-500" /><span>{t('home.plans.free_storage')}</span></li>
                <li className="flex items-center space-x-2 rtl:space-x-reverse"><CheckCircle className="w-5 h-5 text-success-500" /><span>{t('home.plans.free_support')}</span></li>
              </ul>
              <Link to="/register" className="btn-outline w-full">{t('home.plans.cta_start_free')}</Link>
            </motion.div>
            {/* Professional Plan */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="bg-primary-50 border-2 border-primary-300 rounded-2xl p-8 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"><span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium">{t('home.plans.most_popular')}</span></div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4"><Shield className="w-6 h-6 text-primary-600" /><h3 className="text-2xl font-bold text-gray-900">{t('home.plans.professional')}</h3></div>
              <div className="mb-6"><span className="text-4xl font-bold text-gray-900">۲۹۹</span><span className="text-gray-600"> هزار{t('home.plans.monthly')}</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2 rtl:space-x-reverse"><CheckCircle className="w-5 h-5 text-success-500" /><span>{t('home.plans.pro_users')}</span></li>
                <li className="flex items-center space-x-2 rtl:space-x-reverse"><CheckCircle className="w-5 h-5 text-success-500" /><span>{t('home.plans.pro_modules')}</span></li>
                <li className="flex items-center space-x-2 rtl:space-x-reverse"><CheckCircle className="w-5 h-5 text-success-500" /><span>{t('home.plans.pro_storage')}</span></li>
                <li className="flex items-center space-x-2 rtl:space-x-reverse"><CheckCircle className="w-5 h-5 text-success-500" /><span>{t('home.plans.pro_ai')}</span></li>
                <li className="flex items-center space-x-2 rtl:space-x-reverse"><CheckCircle className="w-5 h-5 text-success-500" /><span>{t('home.plans.pro_support')}</span></li>
              </ul>
              <Link to="/register" className="btn-primary w-full">{t('home.plans.cta_start_trial')}</Link>
            </motion.div>
            {/* Enterprise Plan */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-primary-300 transition-colors">
              <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4"><Crown className="w-6 h-6 text-purple-600" /><h3 className="text-2xl font-bold text-gray-900">{t('home.plans.enterprise')}</h3></div>
              <div className="mb-6"><span className="text-4xl font-bold text-gray-900">۹۹۹</span><span className="text-gray-600"> هزار{t('home.plans.monthly')}</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2 rtl:space-x-reverse"><CheckCircle className="w-5 h-5 text-success-500" /><span>{t('home.plans.ent_users')}</span></li>
                <li className="flex items-center space-x-2 rtl:space-x-reverse"><CheckCircle className="w-5 h-5 text-success-500" /><span>{t('home.plans.ent_modules')}</span></li>
                <li className="flex items-center space-x-2 rtl:space-x-reverse"><CheckCircle className="w-5 h-5 text-success-500" /><span>{t('home.plans.ent_storage')}</span></li>
                <li className="flex items-center space-x-2 rtl:space-x-reverse"><CheckCircle className="w-5 h-5 text-success-500" /><span>{t('home.plans.ent_onpremise')}</span></li>
                <li className="flex items-center space-x-2 rtl:space-x-reverse"><CheckCircle className="w-5 h-5 text-success-500" /><span>{t('home.plans.ent_support')}</span></li>
              </ul>
              <Link to="/contact" className="btn-outline w-full">{t('home.plans.cta_contact_sales')}</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('home.testimonials.title')}</h2>
            <p className="text-xl text-gray-600">{t('home.testimonials.subtitle')}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center space-x-1 rtl:space-x-reverse mb-4">{[...Array(5)].map((_, i) => (<Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />))}</div>
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-bold mb-6">{t('home.cta.title')}</h2>
            <p className="text-xl mb-8 text-gray-100">{t('home.cta.subtitle')}</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
              <Link to="/register" className="btn-secondary inline-flex items-center justify-center"><Zap className="w-5 h-5 mx-2" />{t('home.cta.cta_free_trial')}</Link>
              <Link to="/demo" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-200"><PlayCircle className="w-5 h-5 mx-2" />{t('home.cta.cta_request_demo')}</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
