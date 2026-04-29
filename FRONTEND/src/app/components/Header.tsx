import React from 'react';
import { ArrowLeft, Menu } from 'lucide-react';
import { useNavigate } from 'react-router';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  showMenu?: boolean;
  onMenuClick?: () => void;
}

export const Header = ({ title, showBack, showMenu, onMenuClick }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F57C00] h-[88px] pt-[44px] px-5 flex items-center rounded-b-[24px] relative">
      {showBack && (
        <button
          onClick={() => navigate(-1)}
          className="absolute left-5 text-white"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
      )}

      {title && (
        <h1 className="text-white font-semibold text-center flex-1">{title}</h1>
      )}

      {showMenu && (
        <button
          onClick={onMenuClick}
          className="absolute right-5 text-white"
        >
          <Menu className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};
