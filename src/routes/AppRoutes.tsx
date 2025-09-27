import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import ProtectedRoute from './ProtectedRoute';
import DashboardLayout from '../components/Layout/DashboardLayout';

// Lazy load pages for better performance
const Home = React.lazy(() => import('../pages/Home'));
const Modules = React.lazy(() => import('../pages/Modules'));
const Store = React.lazy(() => import('../pages/Store'));
const AiServices = React.lazy(() => import('../pages/AiServices'));
const Documentation = React.lazy(() => import('../pages/Documentation'));
const About = React.lazy(() => import('../pages/About'));
const Contact = React.lazy(() => import('../pages/Contact'));
const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const Profile = React.lazy(() => import('../pages/Profile'));
const Subscription = React.lazy(() => import('../pages/Subscription'));
const Orders = React.lazy(() => import('../pages/Orders'));
const LoginPage = React.lazy(() => import('../features/auth/pages/LoginPage'));
const RegisterPage = React.lazy(() => import('../features/auth/pages/RegisterPage'));
const NotFound = React.lazy(() => import('../pages/NotFound'));
const PremiumServices = React.lazy(() => import('../pages/PremiumServices'));
const RevenueDashboard = React.lazy(() => import('../pages/RevenueDashboard'));
const ManagementDashboard = React.lazy(() => import('../pages/ManagementDashboard'));
const ProductsPage = React.lazy(() => import('../pages/ProductsPage'));
const CustomersPage = React.lazy(() => import('../pages/CustomersPage'));
const FinancialsPage = React.lazy(() => import('../pages/FinancialsPage'));
const AiAgentPage = React.lazy(() => import('../pages/AiAgentPage'));


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Auth routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      
      {/* Public routes */}
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="modules" element={<Modules />} />
        <Route path="store" element={<Store />} />
        <Route path="ai-services" element={<AiServices />} />
        <Route path="documentation" element={<Documentation />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="premium-services" element={<PremiumServices />} />
      </Route>

      {/* Protected Dashboard Routes */}
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="customers" element={<CustomersPage />} />
          <Route path="orders" element={<Orders />} />
          <Route path="financials" element={<FinancialsPage />} />
          <Route path="management" element={<ManagementDashboard />} />
          <Route path="revenue" element={<RevenueDashboard />} />
          <Route path="ai-agent" element={<AiAgentPage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="subscription" element={<Subscription />} />
        </Route>
      </Route>

      {/* 404 Not Found Page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
