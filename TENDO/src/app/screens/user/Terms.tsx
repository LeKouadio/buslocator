import React from 'react';
import { Header } from '../../components/Header';
import { useTranslation } from 'react-i18next';
import { FileText } from 'lucide-react';

export const Terms = () => {
  const { t } = useTranslation();

  return (
    <div className="size-full bg-[#FAFAFA] flex flex-col overflow-hidden">
      <Header title={t('about.terms')} showBack />

      <div className="flex-1 overflow-y-auto px-6 pt-6 pb-[34px]">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
            <FileText className="w-6 h-6 text-purple-600" />
          </div>
          <h2 className="text-[20px] font-black text-[#1A1A1A]">
            {t('about.terms')}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-[24px] border border-[#E8E8E8] shadow-[0_8px_20px_rgba(0,0,0,0.03)] space-y-5">
          <p className="text-[15px] text-[#424242] leading-relaxed">
            {t('about.terms_content_1')}
          </p>
          <div className="w-full h-px bg-[#F1F1F1]" />
          <p className="text-[15px] text-[#424242] leading-relaxed">
            {t('about.terms_content_2')}
          </p>
        </div>
      </div>
    </div>
  );
};
