import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  LayoutDashboard,
  Package,
  Users,
  ShoppingCart,
  DollarSign,
  Briefcase,
  BarChart3,
  Bot,
  Settings,
  LogOut,
} from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { useNavigate } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  const navItems = [
    { to: '/dashboard', icon: LayoutDashboard, label: t('sidebar.dashboard') },
    { to: '/products', icon: Package, label: t('sidebar.products') },
    { to: '/customers', icon: Users, label: t('sidebar.customers') },
    { to: '/orders', icon: ShoppingCart, label: t('sidebar.orders') },
    { to: '/financials', icon: DollarSign, label: t('sidebar.financials') },
    { to: '/management', icon: Briefcase, label: t('sidebar.management') },
    { to: '/revenue', icon: BarChart3, label: t('sidebar.revenue') },
    { to: '/ai-agent', icon: Bot, label: t('sidebar.ai_agent') },
  ];

  const NavItem: React.FC<typeof navItems[0]> = ({ to, icon: Icon, label }) => (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center p-3 my-1 rounded-lg transition-colors ${
            isActive
              ? 'bg-primary-600 text-white shadow-lg'
              : 'text-gray-300 hover:bg-primary-800 hover:text-white'
          }`
        }
      >
        <Icon className="w-5 h-5" />
        <span className="mx-4 font-medium">{label}</span>
      </NavLink>
    </li>
  );

  return (
    <aside className="hidden md:flex flex-col w-64 bg-gray-900 text-white">
      <div className="flex items-center justify-center h-20 border-b border-gray-800">
        <Link to="/dashboard" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
            <Bot className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold">{t('header.title')}</span>
        </Link>
      </div>

      <nav className="flex-1 px-4 py-4">
        <ul>
          {navItems.map((item) => (
            <NavItem key={item.to} {...item} />
          ))}
        </ul>
      </nav>

      <div className="px-4 py-4 border-t border-gray-800">
        <ul>
          <NavItem to="/profile" icon={Settings} label={t('sidebar.settings')} />
          <li>
            <button
              onClick={handleLogout}
              className="flex items-center p-3 my-1 rounded-lg text-gray-300 hover:bg-danger-600 hover:text-white w-full transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="mx-4 font-medium">{t('header.profile.logout')}</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
