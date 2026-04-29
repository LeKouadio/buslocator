import React from 'react';
import { motion } from 'motion/react';
import { Bus, MapPin, Navigation, Search, Heart, Globe, ChevronRight } from 'lucide-react';
import { Header } from '../../components/Header';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

export const About = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const features = [
    {
      icon: Navigation,
      color: '#F57C00',
      bg: 'bg-[#F57C00]/10',
      title: t('about.feat_realtime_title'),
      desc: t('about.feat_realtime_desc')
    },
    {
      icon: Search,
      color: '#2E7D32',
      bg: 'bg-[#2E7D32]/10',
      title: t('about.feat_search_title'),
      desc: t('about.feat_search_desc')
    },
    {
      icon: Heart,
      color: '#D32F2F',
      bg: 'bg-[#D32F2F]/10',
      title: t('about.feat_favorites_title'),
      desc: t('about.feat_favorites_desc')
    },
    {
      icon: Globe,
      color: '#1976D2',
      bg: 'bg-[#1976D2]/10',
      title: t('about.feat_i18n_title'),
      desc: t('about.feat_i18n_desc')
    }
  ];

  return (
    <div className="size-full bg-[#FAFAFA] flex flex-col overflow-hidden">
      <Header title={t('about.title')} showBack />

      <div className="flex-1 overflow-y-auto px-5 pt-8 pb-[34px]">
        {/* Logo and Version */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-8 relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-tr from-[#F57C00]/20 to-[#FFB74D]/10 rounded-full blur-2xl -z-10" />
          
          <div className="flex items-center justify-center gap-2 mb-4 relative z-10">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-lg border border-[#F57C00]/20 flex items-center justify-center">
              <Bus className="w-8 h-8 text-[#F57C00]" />
            </div>
          </div>

          <h1 className="text-3xl font-extrabold mb-1 tracking-tight">
            <span className="text-[#1B5E20]">BaBi</span>
            <span className="text-[#F57C00]">BUS</span>
          </h1>

          <p className="text-[#F57C00] font-bold text-sm bg-[#F57C00]/10 inline-block px-3 py-1 rounded-full">{t('about.version')}</p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-[24px] border border-[#E8E8E8] p-6 mb-6 shadow-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#2E7D32]/5 to-transparent rounded-bl-full pointer-events-none" />
          <h3 className="font-black text-[#1A1A1A] text-lg mb-3">
            {t('about.mission_title')}
          </h3>
          <p className="text-[14px] text-[#616161] leading-relaxed">
            {t('about.mission_desc')}
          </p>
        </motion.div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h3 className="font-black text-[#1A1A1A] text-lg mb-4 px-1">
            {t('about.features_title')}
          </h3>
          <div className="space-y-3">
            {features.map((feat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + (idx * 0.1) }}
                className="bg-white p-4 rounded-[20px] border border-[#E8E8E8] shadow-sm flex items-center gap-4"
              >
                <div className={`w-12 h-12 rounded-[14px] ${feat.bg} flex items-center justify-center flex-shrink-0`}>
                  <feat.icon className="w-6 h-6" style={{ color: feat.color }} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] text-[15px] mb-0.5">{feat.title}</h4>
                  <p className="text-[13px] text-[#757575] leading-snug">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-[24px] border border-[#E8E8E8] shadow-sm overflow-hidden mb-6"
        >
          {[
            { id: 'privacy', label: t('about.privacy'), isLast: false },
            { id: 'terms', label: t('about.terms'), isLast: false },
            { id: 'contact', label: t('about.contact'), isLast: true }
          ].map((item, idx) => (
            <button 
              key={idx}
              onClick={() => navigate(`/user/${item.id}`)}
              className={`w-full flex items-center justify-between p-5 text-left active:bg-gray-50 transition-colors ${!item.isLast ? 'border-b border-[#F1F1F1]' : ''}`}
            >
              <span className="text-[#424242] font-semibold text-[15px]">{item.label}</span>
              <ChevronRight className="w-5 h-5 text-[#BDBDBD]" />
            </button>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center text-[13px] text-[#9E9E9E] font-medium pt-2 pb-6"
        >
          <span className="font-extrabold tracking-tight text-[14px]">
            <span className="text-[#1B5E20]">BaBi</span>
            <span className="text-[#F57C00]">BUS</span>
          </span>
          <span>{t('about.footer_slogan')}</span>
        </motion.div>
      </div>
    </div>
  );
};
