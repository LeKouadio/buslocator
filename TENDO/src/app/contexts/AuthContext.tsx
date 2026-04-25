import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../data/mockData';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role?: 'user' | 'admin') => Promise<void>;
  register: (firstName: string, lastName: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  updateProfile: (firstName: string, lastName: string, email: string) => Promise<void>;
  addFavorite: (stopId: string) => void;
  removeFavorite: (stopId: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('babibus_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string, role: 'user' | 'admin' = 'user') => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const mockUser: User = {
      id: Math.random().toString(36),
      firstName: role === 'admin' ? 'Admin' : 'Jean',
      lastName: role === 'admin' ? 'BaBiBUS' : 'Dupont',
      email,
      role,
      favorites: []
    };

    const savedFavorites = localStorage.getItem('babibus_favorites');
    if (savedFavorites) {
      mockUser.favorites = JSON.parse(savedFavorites);
    }

    setUser(mockUser);
    localStorage.setItem('babibus_user', JSON.stringify(mockUser));
  };

  const register = async (firstName: string, lastName: string, email: string, password: string) => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const newUser: User = {
      id: Math.random().toString(36),
      firstName,
      lastName,
      email,
      role: 'user',
      favorites: []
    };

    setUser(newUser);
    localStorage.setItem('babibus_user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('babibus_user');
  };

  const updateProfile = async (firstName: string, lastName: string, email: string) => {
    if (!user) return;

    await new Promise(resolve => setTimeout(resolve, 800));

    const updatedUser = { ...user, firstName, lastName, email };
    setUser(updatedUser);
    localStorage.setItem('babibus_user', JSON.stringify(updatedUser));
  };

  const addFavorite = (stopId: string) => {
    if (!user) return;

    const updatedFavorites = [...user.favorites, stopId];
    const updatedUser = { ...user, favorites: updatedFavorites };
    setUser(updatedUser);
    localStorage.setItem('babibus_user', JSON.stringify(updatedUser));
    localStorage.setItem('babibus_favorites', JSON.stringify(updatedFavorites));
  };

  const removeFavorite = (stopId: string) => {
    if (!user) return;

    const updatedFavorites = user.favorites.filter(id => id !== stopId);
    const updatedUser = { ...user, favorites: updatedFavorites };
    setUser(updatedUser);
    localStorage.setItem('babibus_user', JSON.stringify(updatedUser));
    localStorage.setItem('babibus_favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateProfile, addFavorite, removeFavorite }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
