import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { Bus, MapPin, ArrowRight, UserPlus } from 'lucide-react';
import { Button } from '../components/Button';

export const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="size-full bg-white flex flex-col overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="bg-[#F57C00] h-[32%] rounded-b-[36px] flex items-center justify-center"
      >
        <div className="flex flex-col items-center">
          <div className="relative mb-3">
            <Bus className="w-16 h-16 text-white" />
            <MapPin className="absolute -top-1 -right-1 w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-extrabold">
            <span className="text-white">BaBi</span>
            <span className="text-white">BUS</span>
          </h1>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="flex-1 px-5 flex flex-col items-center justify-center"
      >
        <div className="w-full max-w-[300px] h-[220px] mb-8 flex items-center justify-center">
          <div className="relative">
            <motion.div
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <Bus className="w-32 h-32 text-[#F57C00]" />
            </motion.div>

            <motion.div
              animate={{
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.5
              }}
              className="absolute -bottom-4 -right-4"
            >
              <MapPin className="w-16 h-16 text-[#2E7D32]" />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="text-center mb-7"
        >
          <h2 className="text-[22px] font-bold text-[#1A1A1A] mb-2">
            Bienvenue sur BaBiBUS
          </h2>
          <p className="text-[14px] text-[#616161]">
            Trouvez votre bus, partout, en temps réel
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="w-full space-y-[14px] mb-8"
        >
          <Button
            variant="primary"
            fullWidth
            onClick={() => navigate('/login')}
            icon={<ArrowRight />}
          >
            Se connecter
          </Button>

          <Button
            variant="outline-green"
            fullWidth
            onClick={() => navigate('/register')}
            icon={<UserPlus />}
          >
            S'inscrire
          </Button>
        </motion.div>

        <div className="w-10 h-[2px] bg-[#2E7D32] opacity-20 rounded-full" />
      </motion.div>

      <div className="h-[34px]" />
    </div>
  );
};
