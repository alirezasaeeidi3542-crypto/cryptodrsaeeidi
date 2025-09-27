import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Mail, Lock, User, Building, ArrowRight, Loader, UserPlus } from 'lucide-react';
import { supabase } from '../../../lib/supabase';

const schema = yup.object().shape({
  name: yup.string().required('نام کامل الزامی است'),
  company: yup.string().required('نام شرکت الزامی است'),
  email: yup.string().email('ایمیل معتبر نیست').required('ایمیل الزامی است'),
  password: yup.string().min(6, 'رمز عبور باید حداقل ۶ کاراکتر باشد').required('رمز عبور الزامی است'),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'رمزهای عبور مطابقت ندارند').required('تکرار رمز عبور الزامی است'),
  terms: yup.boolean().oneOf([true], 'شما باید با شرایط و قوانین موافقت کنید'),
});

type FormData = yup.InferType<typeof schema>;

const RegisterPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const { error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            full_name: data.name,
            company_name: data.company,
          }
        }
      });

      if (error) throw error;
      
      setSuccess('ثبت‌نام موفقیت‌آمیز بود! لطفاً ایمیل خود را برای تایید حساب کاربری چک کنید.');
      // Don't navigate immediately, let the user see the success message.
      // navigate('/dashboard');
    } catch (error: any) {
      setError(error.message || 'خطا در ثبت‌نام');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="p-8 md:p-12"
        >
          <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse mb-6 group w-fit">
            <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-primary-600 transition-colors" />
            <span className="text-sm text-gray-500 group-hover:text-primary-600 font-medium">{t('register.back_to_home')}</span>
          </Link>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('register.title')}</h2>
          <p className="text-gray-600 mb-8">{t('register.subtitle')}</p>

          {error && (
            <div className="bg-danger-100 border-l-4 border-danger-500 text-danger-700 p-4 mb-6" role="alert">
              <p>{error}</p>
            </div>
          )}
          {success && (
            <div className="bg-success-100 border-l-4 border-success-500 text-success-700 p-4 mb-6" role="alert">
              <p>{success}</p>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('register.name')}</label>
                <div className="relative">
                  <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  <input type="text" {...register('name')} placeholder={t('register.name_placeholder')} className={`input-field pl-10 ${errors.name ? 'border-danger-500' : ''}`} />
                </div>
                {errors.name && <p className="text-danger-600 text-sm mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('register.company')}</label>
                <div className="relative">
                  <Building className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  <input type="text" {...register('company')} placeholder={t('register.company_placeholder')} className={`input-field pl-10 ${errors.company ? 'border-danger-500' : ''}`} />
                </div>
                {errors.company && <p className="text-danger-600 text-sm mt-1">{errors.company.message}</p>}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t('register.email')}</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                <input type="email" {...register('email')} placeholder={t('register.email_placeholder')} className={`input-field pl-10 ${errors.email ? 'border-danger-500' : ''}`} />
              </div>
              {errors.email && <p className="text-danger-600 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('register.password')}</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  <input type="password" {...register('password')} placeholder="••••••••" className={`input-field pl-10 ${errors.password ? 'border-danger-500' : ''}`} />
                </div>
                {errors.password && <p className="text-danger-600 text-sm mt-1">{errors.password.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('register.confirm_password')}</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  <input type="password" {...register('confirmPassword')} placeholder="••••••••" className={`input-field pl-10 ${errors.confirmPassword ? 'border-danger-500' : ''}`} />
                </div>
                {errors.confirmPassword && <p className="text-danger-600 text-sm mt-1">{errors.confirmPassword.message}</p>}
              </div>
            </div>

            <div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input {...register('terms')} type="checkbox" className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="text-gray-700">{t('register.agree_to_terms')} <Link to="/terms" className="font-medium text-primary-600 hover:text-primary-500">{t('register.terms_and_conditions')}</Link></label>
                  {errors.terms && <p className="text-danger-600 text-sm mt-1">{errors.terms.message}</p>}
                </div>
              </div>
            </div>

            <div>
              <button type="submit" disabled={loading || !!success} className="w-full btn-primary flex items-center justify-center disabled:bg-gray-400">
                {loading ? <Loader className="animate-spin" /> : <UserPlus className="w-5 h-5 ml-2" />}
                {t('register.register_button')}
              </button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              {t('register.already_have_account')} <Link to="/login" className="font-medium text-primary-600 hover:text-primary-500">{t('register.login_now')}</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RegisterPage;
