import React from 'react';
import { motion } from 'motion/react';
import { User, Bell, Clock, Globe, Info, LogOut, ChevronRight } from 'lucide-react';
import { Header } from '../../components/Header';
import { BottomTabBar } from '../../components/BottomTabBar';
import { Button } from '../../components/Button';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

export const Profile = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    toast.success('Déconnexion réussie');
    navigate('/welcome');
  };

  const menuItems = [
    { icon: User, label: 'Modifier mon profil', onClick: () => navigate('/user/edit-profile') },
    { icon: Bell, label: 'Notifications', onClick: () => toast.info('Fonctionnalité à venir') },
    { icon: Clock, label: 'Historique des recherches', onClick: () => toast.info('Fonctionnalité à venir') },
    { icon: Globe, label: 'Langue de l\'application', onClick: () => toast.info('Fonctionnalité à venir') },
    { icon: Info, label: 'À propos de BaBiBUS', onClick: () => navigate('/user/about') }
  ];

  return (
    <div className="size-full bg-white flex flex-col overflow-hidden">
      <Header title="Mon profil" />

      <div className="flex-1 overflow-y-auto px-5 pt-6 pb-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <div className="w-[68px] h-[68px] rounded-full bg-[#F57C00] flex items-center justify-center mx-auto mb-3 shadow-[0_2px_8px_rgba(245,124,0,0.30)]">
            <span className="text-white text-2xl font-bold">
              {user?.firstName?.[0]}{user?.lastName?.[0]}
            </span>
          </div>

          <h2 className="text-lg font-bold text-[#1A1A1A]">
            {user?.firstName} {user?.lastName}
          </h2>
          <p className="text-[14px] text-[#616161] mb-2">{user?.email}</p>
          <span className="inline-block px-3 py-1 bg-[#E8F5E9] text-[#2E7D32] text-[12px] font-medium rounded-[50px]">
            Utilisateur actif
          </span>
        </motion.div>

        <div className="h-px bg-[#E8E8E8] mb-4" />

        <div className="mb-4">
          <p className="text-[12px] font-medium text-[#2E7D32] uppercase tracking-wide mb-3">
            Mon compte
          </p>

          <div className="space-y-1">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={item.onClick}
                className="w-full flex items-center gap-3 p-4 rounded-[16px] hover:bg-[#FAFAFA] transition-colors border-b border-[#E8E8E8]"
              >
                <item.icon className="w-5 h-5 text-[#2E7D32]" />
                <span className="flex-1 text-left font-medium text-[#1A1A1A]">
                  {item.label}
                </span>
                <motion.div
                  whileHover={{ rotate: 15 }}
                  transition={{ duration: 0.15 }}
                >
                  <ChevronRight className="w-5 h-5 text-[#9E9E9E]" />
                </motion.div>
              </motion.button>
            ))}
          </div>
        </div>

        <div className="h-px bg-[#E8E8E8] mb-5" />

        <Button
          variant="danger"
          fullWidth
          icon={<LogOut />}
          onClick={handleLogout}
        >
          Se déconnecter
        </Button>
      </div>

      <BottomTabBar />
    </div>
  );
};
