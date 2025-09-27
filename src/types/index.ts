export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'seller' | 'visitor' | 'customer';
  avatar?: string;
  phone?: string;
  company?: string;
  permissions: string[];
  subscription: SubscriptionTier;
  createdAt: Date;
  lastLogin?: Date;
}

export interface SubscriptionTier {
  id: string;
  name: 'free' | 'professional' | 'enterprise';
  displayName: string;
  price: number;
  features: string[];
  moduleAccess: string[];
  userLimit: number;
  storageLimit: number;
  apiLimit: number;
}

export interface Module {
  id: string;
  name: string;
  displayName: string;
  description: string;
  icon: string;
  category: 'core' | 'distribution' | 'finance' | 'ai' | 'collaboration';
  isActive: boolean;
  isRequired: boolean;
  subscriptionRequired: 'free' | 'professional' | 'enterprise';
  googleFormId?: string;
  googleSheetId?: string;
  version: string;
  price?: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  category: string;
  brand: string;
  images: string[];
  stock: number;
  digital: boolean;
  downloadUrl?: string;
  tags: string[];
  rating: number;
  reviews: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  shippingAddress: Address;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
  product: Product;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface DashboardStats {
  totalSales: number;
  totalOrders: number;
  totalProducts: number;
  totalCustomers: number;
  revenue: number;
  monthlyGrowth: number;
  moduleStats: ModuleStats[];
}

export interface ModuleStats {
  moduleId: string;
  name: string;
  activeUsers: number;
  dailyUsage: number;
  performance: number;
  lastUpdated: Date;
}

export interface FormData {
  [key: string]: any;
}

export interface GoogleFormConfig {
  formId: string;
  sheetTab: string;
  embedUrl: string;
  fields: GoogleFormField[];
}

export interface GoogleFormField {
  id: string;
  name: string;
  type: 'text' | 'number' | 'date' | 'select' | 'multiselect';
  required: boolean;
  options?: string[];
}

export interface ChatMessage {
  id: string;
  message: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type?: 'text' | 'product' | 'order' | 'module';
  data?: any;
}

export interface AIService {
  id: string;
  name: string;
  description: string;
  type: 'text' | 'image' | 'video' | 'catalog';
  price: number;
  credits: number;
  isAvailable: boolean;
}

export interface SwotAnalysis {
  id: string;
  companyId: string;
  strengths: SwotItem[];
  weaknesses: SwotItem[];
  opportunities: SwotItem[];
  threats: SwotItem[];
  recommendations: {
    strategic: string[];
    operational: string[];
    financial: string[];
    technical: string[];
  };
  createdAt: Date;
  score: number;
}

export interface SwotItem {
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  evidence?: string[];
  solutions?: string[];
  actionPlan?: string[];
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'error' | 'success';
  moduleId?: string;
  read: boolean;
  createdAt: Date;
  actionUrl?: string;
}

export interface Company {
  id: string;
  name: string;
  industry: string;
  size: 'small' | 'medium' | 'large';
  subscription: SubscriptionTier;
  activeModules: string[];
  settings: CompanySettings;
  billing: BillingInfo;
  createdAt: Date;
}

export interface CompanySettings {
  currency: string;
  timezone: string;
  language: string;
  theme: 'light' | 'dark';
  notifications: boolean;
  apiAccess: boolean;
}

export interface BillingInfo {
  plan: string;
  status: 'active' | 'cancelled' | 'past_due';
  nextBilling: Date;
  amount: number;
  paymentMethod: string;
}

export interface ImportBatch {
  id: string;
  importType: 'products' | 'customers' | 'employees';
  fileName: string;
  totalRecords: number;
  successfulImports: number;
  failedImports: number;
  status: 'processing' | 'completed' | 'failed' | 'pending';
  createdAt: Date;
  user: string;
}
