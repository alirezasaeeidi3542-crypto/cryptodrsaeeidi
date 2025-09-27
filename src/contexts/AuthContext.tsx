import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '../lib/supabase';
import { AuthChangeEvent, Session, User as SupabaseUser } from '@supabase/supabase-js';
import { User } from '../types';
import { subscriptionTiers } from '../data/modules';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const setData = async (session: Session | null) => {
      if (session?.user) {
        // In a real app, you'd fetch profile data from your 'profiles' table
        // For now, we'll create a mock profile based on the Supabase user
        const subscription = subscriptionTiers[0]; // Default to free
        const mockUser: User = {
          id: session.user.id,
          name: session.user.user_metadata?.full_name || session.user.email?.split('@')[0] || 'کاربر جدید',
          email: session.user.email || '',
          role: 'customer', // Default role
          avatar: session.user.user_metadata?.avatar_url,
          permissions: subscription.moduleAccess,
          subscription: subscription,
          createdAt: new Date(session.user.created_at),
          lastLogin: session.user.last_sign_in_at ? new Date(session.user.last_sign_in_at) : new Date(),
        };
        setUser(mockUser);
      } else {
        setUser(null);
      }
      setSession(session);
      setLoading(false);
    };

    const { data: { subscription }, } = supabase.auth.onAuthStateChange(
      (_event: AuthChangeEvent, session: Session | null) => {
        setData(session);
      }
    );
    
    // Initial check
    supabase.auth.getSession().then(({ data: { session } }) => {
      setData(session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const value = {
    user,
    session,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
