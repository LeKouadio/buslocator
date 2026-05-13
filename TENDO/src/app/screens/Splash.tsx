import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { Bus } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useTranslation } from 'react-i18next';

export const Splash = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (user) {
        if (user.role === 'admin') {
          navigate('/admin/dashboard');
        } else {
          navigate('/user/home');
        }
      } else {
        navigate('/welcome');
      }
    }, 2800);

    return () => clearTimeout(timer);
  }, [navigate, user]);

  return (
    <div className="size-full bg-gradient-to-br from-[#FF9800] via-[#F57C00] to-[#E65100] flex items-center justify-center overflow-hidden relative">
      {/* Dynamic Background Gradients & Light Effects */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-1/4 -right-1/4 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FFCC80]/40 via-transparent to-transparent blur-3xl pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-1/4 -left-1/4 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent blur-3xl pointer-events-none"
      />

      {/* Decorative Dot Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] pointer-events-none opacity-40 mix-blend-overlay" />

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            type: "spring",
            bounce: 0.5 
          }}
          className="relative mb-6"
        >
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="w-32 h-32 bg-white/20 backdrop-blur-xl border border-white/40 rounded-[36px] flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
            <Bus className="w-16 h-16 text-white drop-shadow-xl" />
            
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="absolute -top-2 -right-2 w-9 h-9 bg-white rounded-full border-[3px] border-[#F57C00] flex items-center justify-center shadow-lg"
            >
              <div className="w-2.5 h-2.5 bg-[#2E7D32] rounded-full animate-pulse" />
            </motion.div>
          </motion.div>
          
          {/* Ripple effect */}
          <motion.div
            animate={{
              scale: [1, 2, 2.5],
              opacity: [0.6, 0, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeOut'
            }}
            className="absolute inset-0 bg-white/30 rounded-[36px] -z-10"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-[52px] font-black tracking-tighter drop-shadow-lg">
            <span className="text-white">BaBi</span>
            <span className="text-[#FFE0B2]">BUS</span>
          </h1>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "40px" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="h-1 bg-white rounded-full mx-auto mt-2 mb-3"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-white mt-1 text-[15px] font-bold tracking-[0.15em] uppercase opacity-90 drop-shadow-sm"
          >
            {t('splash.subtitle')}
          </motion.p>
        </motion.div>
      </div>
      
      {/* Loading Bar */}
      <motion.div 
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "200px", opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-16 h-1.5 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm"
      >
        <motion.div 
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-1/2 h-full bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
        />
      </motion.div>
    </div>
  );
};

