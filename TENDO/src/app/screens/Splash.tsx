import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { Bus } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export const Splash = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

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
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate, user]);

  return (
    <div className="size-full bg-gradient-to-b from-[#F57C00] via-[#F57C00] to-[#1B5E20] flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <motion.div
          animate={{
            scale: [1, 1.02, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="flex flex-col items-center"
        >
          <div className="relative mb-4">
            <Bus className="w-20 h-20 text-white" />
            <div className="absolute -top-2 -right-2 w-8 h-8">
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                <path
                  d="M12 2L12 12L22 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="20" r="3" fill="white" />
              </svg>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-5xl font-extrabold">
              <span className="text-white">BaBi</span>
              <span className="text-white">BUS</span>
            </h1>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
