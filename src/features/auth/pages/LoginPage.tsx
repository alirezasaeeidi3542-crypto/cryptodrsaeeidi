import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Mail, Lock, LogIn, Bot, ArrowRight, Loader, AlertCircle } from 'lucide-react';
import { supabase } from '../../../lib/supabase';

const schema = yup.object().shape({
  email: yup.string().email('ایمیل معتبر نیست').required('ایمیل الزامی است'),
  password: yup.string().min(6, 'رمز عبور باید حداقل ۶ کاراکتر باشد').required('رمز عبور الزامی است'),
});

type FormData = yup.InferType<typeof schema>;

const LoginPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/dashboard';
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError(null);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (error) throw error;
      
      navigate(from, { replace: true });
    } catch (error: any) {
      setError(error.message || 'خطا در ورود به سیستم');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 bg-white shadow-2xl rounded-2xl overflow-hidden">
        {/* Form Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="p-8 md:p-12 order-2 lg:order-1"
        >
          <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse mb-8 group">
            <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-primary-600 transition-colors" />
            <span className="text-sm text-gray-500 group-hover:text-primary-600 font-medium">{t('login.back_to_home')}</span>
          </Link>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('login.title')}</h2>
          <p className="text-gray-600 mb-8">{t('login.subtitle')}</p>

          {error && (
            <div className="bg-danger-100 border-l-4 border-danger-500 text-danger-700 p-4 mb-6" role="alert">
              <p className="font-bold">خطا</p>
              <p>{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">{t('login.email')}</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  placeholder={t('login.email_placeholder')}
                  className={`input-field pl-10 ${errors.email ? 'border-danger-500' : ''}`}
                />
              </div>
              {errors.email && <p className="text-danger-600 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">{t('login.password')}</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                <input
                  id="password"
                  type="password"
                  {...register('password')}
                  placeholder="••••••••"
                  className={`input-field pl-10 ${errors.password ? 'border-danger-500' : ''}`}
                />
              </div>
              {errors.password && <p className="text-danger-600 text-sm mt-1">{errors.password.message}</p>}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">{t('login.remember_me')}</label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-primary-600 hover:text-primary-500">{t('login.forgot_password')}</a>
              </div>
            </div>

            <div>
              <button type="submit" disabled={loading} className="w-full btn-primary flex items-center justify-center disabled:bg-primary-300">
                {loading ? <Loader className="animate-spin" /> : <LogIn className="w-5 h-5 ml-2" />}
                {t('login.login_button')}
              </button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              {t('login.no_account')} <Link to="/register" className="font-medium text-primary-600 hover:text-primary-500">{t('login.register_now')}</Link>
            </p>
          </div>
        </motion.div>

        {/* Info Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="hidden lg:flex flex-col items-center justify-center bg-gradient-to-br from-primary-600 to-secondary-600 p-12 text-white order-1 lg:order-2"
        >
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6">
            <Bot className="w-12 h-12" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-center">{t('header.title')}</h2>
          <p className="text-center text-lg leading-relaxed">{t('login.info_text')}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
