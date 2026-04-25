import React from 'react';
import { motion } from 'motion/react';
import { Home, Search, Heart, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router';

export const BottomTabBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { id: 'home', label: 'Accueil', icon: Home, path: '/user/home' },
    { id: 'search', label: 'Recherche', icon: Search, path: '/user/search' },
    { id: 'favorites', label: 'Favoris', icon: Heart, path: '/user/favorites' },
    { id: 'profile', label: 'Profil', icon: User, path: '/user/profile' }
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#E8E8E8] h-[83px] pb-[34px] flex items-center justify-around z-50">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = location.pathname === tab.path;

        return (
          <motion.button
            key={tab.id}
            onClick={() => navigate(tab.path)}
            className="flex flex-col items-center gap-1"
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={isActive ? { scale: [1, 1.2, 1] } : { scale: 1 }}
              transition={{ duration: 0.25, type: 'spring' }}
            >
              <Icon
                className={`w-6 h-6 ${isActive ? 'text-[#F57C00]' : 'text-[#9E9E9E]'}`}
              />
            </motion.div>

            <span
              className={`text-[10px] font-medium ${isActive ? 'text-[#F57C00]' : 'text-[#9E9E9E]'}`}
            >
              {tab.label}
            </span>

            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-[30px] w-6 h-1 bg-[#F57C00] rounded-[50px]"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
};
