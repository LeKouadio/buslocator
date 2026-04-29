import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Bell, Info, ChevronRight, Clock, X, Trash2 } from 'lucide-react';
import { Header } from '../../components/Header';
import { BottomTabBar } from '../../components/BottomTabBar';
import api from '../../data/api';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Clock': return Clock;
    case 'Info': return Info;
    case 'Bell': return Bell;
    default: return Bell;
  }
};

const formatTime = (timeStr: string, t: any) => {
  const date = new Date(timeStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
  if (diffHrs === 0) return t('notifications.time_less_than_hour');
  if (diffHrs < 24) return t('notifications.time_hours_ago').replace('{{hours}}', diffHrs.toString());
  return t('notifications.time_yesterday');
};

export const Notifications = () => {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await api.get('/notifications');
        setNotifications(res.data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchNotifications();
  }, []);

  const markAsRead = async (id: number) => {
    try {
      await api.put(`/notifications/${id}/read`);
      setNotifications(notifications.map(n => n.id === id ? { ...n, isRead: true } : n));
    } catch (e) {
      console.error(e);
    }
  };

  const deleteNotification = async (id: number) => {
    try {
      await api.delete(`/notifications/${id}`);
      setNotifications(notifications.filter(n => n.id !== id));
      toast.success(t('notifications.delete_success'));
    } catch (e) {
      console.error(e);
    }
  };

  const deleteAllNotifications = async () => {
    const previous = [...notifications];
    setNotifications([]);
    
    try {
      await api.delete('/notifications/all');
      toast.success(t('notifications.delete_all_success'));
    } catch (e) {
      console.error(e);
      setNotifications(previous);
      toast.error(t('common.error_occurred'));
    }
  };

  return (
    <div className="size-full bg-white flex flex-col overflow-hidden">
      <Header title={t('notifications.title')} showBack />

      <div className="flex-1 overflow-y-auto px-5 pt-6 pb-[100px]">
        {loading ? (
           <div className="flex justify-center items-center h-64"><div className="w-8 h-8 border-4 border-[#F57C00] border-t-transparent rounded-full animate-spin" /></div>
        ) : (
          <>
            {notifications.length > 0 && (
              <div className="flex justify-end mb-4">
                <button 
                  onClick={deleteAllNotifications}
                  className="flex items-center gap-1.5 text-[13px] font-bold text-[#D32F2F] hover:opacity-80 transition-opacity"
                >
                  <Trash2 className="w-4 h-4" />
                  {t('notifications.delete_all')}
                </button>
              </div>
            )}
            
            <div className="space-y-4">
              {notifications.map((notif, index) => {
                const IconComponent = getIconComponent(notif.icon);
                return (
                  <motion.div
                    key={notif.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => !notif.isRead && markAsRead(notif.id)}
                    className={`p-4 rounded-[20px] border ${notif.isRead ? 'bg-white border-[#E8E8E8]' : 'bg-[#FFF3E0] border-[#FFE0B2] cursor-pointer'} flex gap-4 items-start relative`}
                  >
                    {!notif.isRead && (
                      <div className="absolute top-4 right-4 w-2 h-2 bg-[#F57C00] rounded-full animate-pulse" />
                    )}
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${notif.color}20` }}
                    >
                      <IconComponent className="w-5 h-5" style={{ color: notif.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className={`text-[15px] font-bold ${notif.isRead ? 'text-[#1A1A1A]' : 'text-[#E65100]'} truncate`}>
                          {notif.title}
                        </h4>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteNotification(notif.id);
                          }}
                          className="p-1 hover:bg-black/5 rounded-full transition-colors shrink-0"
                        >
                          <X className="w-4 h-4 text-[#9E9E9E]" />
                        </button>
                      </div>
                      <p className="text-[13px] text-[#616161] leading-relaxed mb-2">
                        {notif.description}
                      </p>
                      <span className="text-[11px] font-medium text-[#9E9E9E]">
                        {formatTime(notif.time, t)}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {notifications.length === 0 && (
              <div className="flex flex-col items-center justify-center h-64 opacity-50">
                <Bell className="w-16 h-16 text-[#9E9E9E] mb-4" />
                <p className="text-[#616161]">{t('notifications.empty')}</p>
              </div>
            )}
          </>
        )}
      </div>

      <BottomTabBar />
    </div>
  );
};
