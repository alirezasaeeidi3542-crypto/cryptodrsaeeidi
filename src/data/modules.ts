import { Module } from '../types';
import { 
  Package, 
  DollarSign, 
  Truck, 
  ShoppingCart, 
  Users, 
  MapPin,
  Bot,
  BarChart3,
  Brain,
  MessageSquare,
  BookOpen,
  Headphones
} from 'lucide-react';

export const platformModules: Module[] = [
  // Core Modules
  {
    id: 'inventory',
    name: 'inventory',
    displayName: 'مدیریت انبار',
    description: 'مدیریت موجودی، ورود و خروج کالا، گزارش‌گیری انبار و ردیابی محصولات',
    icon: 'Package',
    category: 'core',
    isActive: true,
    isRequired: true,
    subscriptionRequired: 'free',
    googleFormId: '1FAIpQLSdXXXXXXXXXXXXXXXXXXXXXXXXX',
    googleSheetId: '1BvKXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    version: '2.1.0'
  },
  {
    id: 'finance',
    name: 'finance',
    displayName: 'مدیریت مالی',
    description: 'حسابداری، فاکتورها، تحلیل مالی، گزارش سود و زیان و مدیریت کمیسیون',
    icon: 'DollarSign',
    category: 'finance',
    isActive: false,
    isRequired: false,
    subscriptionRequired: 'professional',
    googleFormId: '1FAIpQLSdYYYYYYYYYYYYYYYYYYYYYYYY',
    googleSheetId: '1BvKYYYYYYYYYYYYYYYYYYYYYYYYYYYY',
    version: '1.8.5',
    price: 299000
  },
  {
    id: 'distribution',
    name: 'distribution',
    displayName: 'مدیریت پخش',
    description: 'شبکه توزیع، حمل و نقل، لجستیک، برنامه‌ریزی مسیر و مدیریت رانندگان',
    icon: 'Truck',
    category: 'distribution',
    isActive: false,
    isRequired: false,
    subscriptionRequired: 'professional',
    googleFormId: '1FAIpQLSdZZZZZZZZZZZZZZZZZZZZZZZZ',
    googleSheetId: '1BvKZZZZZZZZZZZZZZZZZZZZZZZZZZZZ',
    version: '2.0.3',
    price: 399000
  },
  {
    id: 'sales',
    name: 'sales',
    displayName: 'مدیریت فروش',
    description: 'فروشگاه آنلاین، مدیریت سفارشات، CRM، تحلیل فروش و مدیریت مشتریان',
    icon: 'ShoppingCart',
    category: 'core',
    isActive: true,
    isRequired: false,
    subscriptionRequired: 'free',
    googleFormId: '1FAIpQLSdAAAAAAAAAAAAAAAAAAAAA',
    googleSheetId: '1BvKAAAAAAAAAAAAAAAAAAAAAAAAA',
    version: '2.2.1'
  },
  {
    id: 'visitors',
    name: 'visitors',
    displayName: 'مدیریت ویزیتورها',
    description: 'مدیریت نیروی فروش، ردیابی فعالیت‌ها، گزارش‌گیری عملکرد و گیمیفیکیشن',
    icon: 'Users',
    category: 'distribution',
    isActive: false,
    isRequired: false,
    subscriptionRequired: 'professional',
    googleFormId: '1FAIpQLSdBBBBBBBBBBBBBBBBBBBBBBBB',
    googleSheetId: '1BvKBBBBBBBBBBBBBBBBBBBBBBBBBBBB',
    version: '1.5.7',
    price: 199000
  },
  {
    id: 'tracking',
    name: 'tracking',
    displayName: 'ردیابی محصول',
    description: 'ردیابی محصولات، مسیریابی، تحلیل زنجیره تأمین و مدیریت کیفیت',
    icon: 'MapPin',
    category: 'distribution',
    isActive: false,
    isRequired: false,
    subscriptionRequired: 'enterprise',
    googleFormId: '1FAIpQLSdCCCCCCCCCCCCCCCCCCCCCCCC',
    googleSheetId: '1BvKCCCCCCCCCCCCCCCCCCCCCCCCCCCC',
    version: '1.3.2',
    price: 499000
  },

  // AI Modules
  {
    id: 'ai-assistant',
    name: 'ai-assistant',
    displayName: 'دستیار هوشمند',
    description: 'ربات چت پیشرفته، پاسخ‌گویی خودکار، تحلیل احساسات و پشتیبانی ۲۴/۷',
    icon: 'Bot',
    category: 'ai',
    isActive: true,
    isRequired: false,
    subscriptionRequired: 'free',
    version: '3.0.1'
  },
  {
    id: 'ai-analytics',
    name: 'ai-analytics',
    displayName: 'تحلیل هوشمند',
    description: 'تحلیل SWOT، پیش‌بینی فروش، بهینه‌سازی و گزارش‌های هوشمند',
    icon: 'BarChart3',
    category: 'ai',
    isActive: false,
    isRequired: false,
    subscriptionRequired: 'professional',
    version: '2.1.8',
    price: 599000
  },
  {
    id: 'ai-content',
    name: 'ai-content',
    displayName: 'تولید محتوا',
    description: 'تولید متن، تصویر، ویدیو و کاتالوگ با هوش مصنوعی',
    icon: 'Brain',
    category: 'ai',
    isActive: false,
    isRequired: false,
    subscriptionRequired: 'professional',
    version: '1.9.4',
    price: 799000
  },

  // Collaboration Modules
  {
    id: 'community',
    name: 'community',
    displayName: 'انجمن کاربران',
    description: 'انجمن توزیع‌کنندگان، تبادل تجربه، شبکه‌سازی و همکاری',
    icon: 'MessageSquare',
    category: 'collaboration',
    isActive: false,
    isRequired: false,
    subscriptionRequired: 'professional',
    version: '1.2.5',
    price: 99000
  },
  {
    id: 'training',
    name: 'training',
    displayName: 'سیستم آموزش',
    description: 'دوره‌های آموزشی، وبینارها، گواهینامه‌ها و مسیر یادگیری',
    icon: 'BookOpen',
    category: 'collaboration',
    isActive: false,
    isRequired: false,
    subscriptionRequired: 'enterprise',
    version: '1.4.3',
    price: 299000
  },
  {
    id: 'support',
    name: 'support',
    displayName: 'پشتیبانی پیشرفته',
    description: 'سیستم تیکت، پشتیبانی زنده، کال سنتر و مدیریت درخواست‌ها',
    icon: 'Headphones',
    category: 'collaboration',
    isActive: true,
    isRequired: false,
    subscriptionRequired: 'free',
    version: '2.0.7'
  }
];

export const subscriptionTiers = [
  {
    id: 'free',
    name: 'free',
    displayName: 'رایگان',
    price: 0,
    features: [
      'دسترسی به ماژول‌های پایه',
      'حداکثر ۳ کاربر',
      'حداکثر ۱۰۰ محصول',
      '۱ گیگابایت فضای ذخیره‌سازی',
      'پشتیبانی ایمیلی',
      'گزارش‌های پایه'
    ],
    moduleAccess: ['inventory', 'sales', 'ai-assistant', 'support'],
    userLimit: 3,
    storageLimit: 1, // GB
    apiLimit: 1000 // requests per month
  },
  {
    id: 'professional',
    name: 'professional',
    displayName: 'حرفه‌ای',
    price: 2990000, // ریال
    features: [
      'دسترسی به تمام ماژول‌های پایه',
      'حداکثر ۱۵ کاربر',
      'محصولات نامحدود',
      '۵۰ گیگابایت فضای ذخیره‌سازی',
      'پشتیبانی تلفنی و چت',
      'گزارش‌های پیشرفته',
      'اتصال Google Sheets',
      'خدمات هوش مصنوعی پایه',
      'API Access'
    ],
    moduleAccess: ['*'],
    userLimit: 15,
    storageLimit: 50,
    apiLimit: 50000
  },
  {
    id: 'enterprise',
    name: 'enterprise',
    displayName: 'سازمانی',
    price: 9990000,
    features: [
      'دسترسی کامل به تمام ماژول‌ها',
      'کاربران نامحدود',
      'محصولات نامحدود',
      'فضای ذخیره‌سازی نامحدود',
      'پشتیبانی اختصاصی ۲۴/۷',
      'گزارش‌های سفارشی',
      'اتصال Power BI',
      'خدمات هوش مصنوعی پیشرفته',
      'API نامحدود',
      'سفارشی‌سازی کامل',
      'نصب On-Premise',
      'آموزش تخصصی'
    ],
    moduleAccess: ['*'],
    userLimit: -1, // unlimited
    storageLimit: -1, // unlimited
    apiLimit: -1 // unlimited
  }
];
