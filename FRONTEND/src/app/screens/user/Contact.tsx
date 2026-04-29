import React from 'react';
import { Header } from '../../components/Header';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="size-full bg-[#FAFAFA] flex flex-col overflow-hidden">
      <Header title={t('about.contact')} showBack />

      <div className="flex-1 overflow-y-auto px-6 pt-6 pb-[34px]">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
            <MessageCircle className="w-6 h-6 text-green-600" />
          </div>
          <h2 className="text-[20px] font-black text-[#1A1A1A]">
            {t('about.contact')}
          </h2>
        </div>

        <p className="text-[15px] text-[#424242] leading-relaxed mb-6">
          {t('about.contact_content_1')}
        </p>

        <div className="space-y-4">
          <div className="bg-white p-5 rounded-[24px] border border-[#E8E8E8] shadow-[0_4px_16px_rgba(0,0,0,0.02)] flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#E8F5E9] flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-[#2E7D32]" />
            </div>
            <div>
              <p className="text-[12px] text-[#757575] font-semibold uppercase tracking-wider mb-1">Email</p>
              <p className="text-[15px] font-bold text-[#1A1A1A]">{t('about.contact_email').replace('Email : ', '').replace('Email: ', '')}</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-[24px] border border-[#E8E8E8] shadow-[0_4px_16px_rgba(0,0,0,0.02)] flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#FFF3E0] flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-[#F57C00]" />
            </div>
            <div>
              <p className="text-[12px] text-[#757575] font-semibold uppercase tracking-wider mb-1">Téléphone</p>
              <p className="text-[15px] font-bold text-[#1A1A1A]">{t('about.contact_phone').replace('Téléphone : ', '').replace('Phone: ', '')}</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-[24px] border border-[#E8E8E8] shadow-[0_4px_16px_rgba(0,0,0,0.02)] flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#E3F2FD] flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-[#1976D2]" />
            </div>
            <div>
              <p className="text-[12px] text-[#757575] font-semibold uppercase tracking-wider mb-1">Adresse</p>
              <p className="text-[15px] font-bold text-[#1A1A1A]">{t('about.contact_address').replace('Adresse : ', '').replace('Address: ', '')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
