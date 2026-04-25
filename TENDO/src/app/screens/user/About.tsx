import React from 'react';
import { motion } from 'motion/react';
import { Bus, MapPin } from 'lucide-react';
import { Header } from '../../components/Header';

export const About = () => {
  return (
    <div className="size-full bg-white flex flex-col overflow-hidden">
      <Header title="À propos" showBack />

      <div className="flex-1 overflow-y-auto px-5 pt-8 pb-[34px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Bus className="w-16 h-16 text-[#F57C00]" />
            <MapPin className="w-12 h-12 text-[#2E7D32]" />
          </div>

          <h1 className="text-2xl font-extrabold mb-2">
            <span className="text-[#1B5E20]">BaBi</span>
            <span className="text-[#F57C00]">BUS</span>
          </h1>

          <p className="text-[#9E9E9E] text-sm">Version 1.0.0</p>
        </motion.div>

        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[20px] border border-[#E8E8E8] p-5"
          >
            <h3 className="font-semibold text-[#1A1A1A] mb-2">
              Application de localisation d'arrêts de bus
            </h3>
            <p className="text-[14px] text-[#616161] leading-relaxed">
              BaBiBUS vous permet de localiser facilement les arrêts de bus autour de vous,
              de rechercher des lignes spécifiques et de sauvegarder vos arrêts favoris.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-3"
          >
            <button className="w-full text-left p-4 rounded-[20px] border border-[#E8E8E8] hover:bg-[#FAFAFA] transition-colors">
              <span className="text-[#2E7D32] font-medium">Politique de confidentialité →</span>
            </button>

            <button className="w-full text-left p-4 rounded-[20px] border border-[#E8E8E8] hover:bg-[#FAFAFA] transition-colors">
              <span className="text-[#2E7D32] font-medium">Conditions d'utilisation →</span>
            </button>

            <button className="w-full text-left p-4 rounded-[20px] border border-[#E8E8E8] hover:bg-[#FAFAFA] transition-colors">
              <span className="text-[#2E7D32] font-medium">Nous contacter →</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-[14px] text-[#616161] pt-6"
          >
            <p>Développé avec ❤️ pour faciliter vos déplacements en bus</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
