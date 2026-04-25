import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  MapPin, 
  Bell, 
  Heart, 
  Navigation, 
  Clock, 
  ChevronRight, 
  Bus, 
  TrendingUp,
  Map as MapIcon,
  Star,
  Settings,
  History
} from 'lucide-react';
import { BottomTabBar } from '../../components/BottomTabBar';
import { BusStopCard } from '../../components/BusStopCard';
import { mockBusStops, mockUserPosition, calculateDistance } from '../../data/mockData';
import { useNavigate } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: 'spring',
      stiffness: 260,
      damping: 20
    }
  }
};

export const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isLocating, setIsLocating] = useState(true);
  const [stops, setStops] = useState<typeof mockBusStops>([]);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLocating(false);
      setStops(mockBusStops.slice(0, 5));
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const favoriteStops = mockBusStops
    .filter(stop => user?.favorites.includes(stop.id))
    .map(stop => ({
      ...stop,
      distance: calculateDistance(
        mockUserPosition.latitude,
        mockUserPosition.longitude,
        stop.latitude,
        stop.longitude
      )
    }));

  const stopsWithDistance = stops.map(stop => ({
    ...stop,
    distance: calculateDistance(
      mockUserPosition.latitude,
      mockUserPosition.longitude,
      stop.latitude,
      stop.longitude
    )
  })).sort((a, b) => a.distance - b.distance);

  if (showMap) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="size-full bg-[#E8F5E9] relative overflow-hidden flex flex-col"
      >
        <div className="absolute inset-0 z-0">
          <iframe
            title="Tracking Map"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${mockUserPosition.longitude - 0.01}%2C${mockUserPosition.latitude - 0.005}%2C${mockUserPosition.longitude + 0.01}%2C${mockUserPosition.latitude + 0.005}&layer=mapnik&marker=${mockUserPosition.latitude}%2C${mockUserPosition.longitude}`}
            className="grayscale-[0.2] contrast-[1.1]"
          />
        </div>

        <div className="absolute top-8 left-5 right-5 z-10 flex items-center justify-between pointer-events-none">
          <button 
            onClick={() => setShowMap(false)}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border border-[#F1F1F1] pointer-events-auto active:scale-90 transition-transform"
          >
            <ChevronRight className="w-6 h-6 text-[#424242] rotate-180" />
          </button>
          
          <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-white/50 flex items-center gap-3 pointer-events-auto">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            <span className="text-sm font-bold text-[#1A1A1A]">EN DIRECT</span>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 bg-[#2E7D32] rounded-full"
          />
          <div className="relative z-10 w-10 h-10 bg-[#2E7D32] rounded-full border-2 border-white flex items-center justify-center shadow-xl">
            <Navigation className="w-5 h-5 text-white fill-white rotate-45" />
          </div>
        </div>

        <div className="mt-auto p-5 z-10">
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="bg-white rounded-[28px] p-5 shadow-[0_-8px_32px_rgba(0,0,0,0.12)] border border-[#F1F1F1]"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#F57C00]/10 rounded-2xl flex items-center justify-center">
                  <Bus className="w-6 h-6 text-[#F57C00]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A]">Ligne 01</h4>
                  <p className="text-xs text-[#9E9E9E]">Vers Université • BUS 4202</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-[#2E7D32]">3</span>
                <span className="text-xs font-bold text-[#2E7D32] ml-1">MIN</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#2E7D32] rounded-full" />
                <p className="text-sm font-medium text-[#424242]">Gare Centrale (Départ)</p>
              </div>
              <div className="ml-[3px] border-l-2 border-dashed border-[#E0E0E0] h-6" />
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#F57C00] rounded-full" />
                <p className="text-sm font-medium text-[#424242]">Prochain arrêt: <span className="font-bold">Hôtel de Ville</span></p>
              </div>
            </div>

            <button 
              onClick={() => setShowMap(false)}
              className="w-full mt-5 py-4 bg-[#F57C00] text-white rounded-[16px] font-bold text-[15px] active:scale-95 transition-transform"
            >
              Quitter le suivi
            </button>
          </motion.div>
        </div>
        
        <BottomTabBar />
      </motion.div>
    );
  }

  return (
    <div className="size-full bg-[#FDFDFD] flex flex-col relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-[280px] bg-[#F57C00] rounded-b-[40px] shadow-lg overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[200px] h-[200px] bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[150px] h-[150px] bg-black/5 rounded-full blur-2xl" />
      </div>
      
      <header className="px-6 pt-12 pb-6 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-4">
          <motion.div 
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/user/profile')}
            className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white font-bold text-xl shadow-lg cursor-pointer overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            {user?.firstName?.[0] || 'U'}
          </motion.div>
          <div>
            <p className="text-[13px] text-white/80 font-medium">Bon retour,</p>
            <h1 className="text-[22px] font-black text-white leading-tight tracking-tight">
              {user?.firstName || 'Voyageur'} 👋
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-11 h-11 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white relative active:scale-90 transition-transform">
            <Bell className="w-5 h-5" />
            <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#F57C00]" />
          </button>
        </div>
      </header>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 overflow-y-auto px-6 pb-[100px] space-y-7 relative z-10"
      >
        {/* Premium Search Bar */}
        <motion.div 
          variants={itemVariants}
          className="relative group"
          onClick={() => navigate('/user/search')}
        >
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-[#F57C00]" />
          </div>
          <div className="w-full h-[60px] bg-white border border-white/50 rounded-[22px] pl-14 pr-4 flex items-center text-[15px] text-[#757575] shadow-[0_8px_24px_rgba(0,0,0,0.06)] cursor-pointer hover:border-[#F57C00]/30 transition-all">
            Rechercher une ligne de bus...
          </div>
          <div className="absolute inset-y-0 right-4 flex items-center">
            <div className="w-10 h-10 bg-[#F57C00]/10 rounded-xl flex items-center justify-center">
              <MapIcon className="w-5 h-5 text-[#F57C00]" />
            </div>
          </div>
        </motion.div>

        {/* Hero Card - Live Tracking */}
        <motion.div
          variants={itemVariants}
          onClick={() => setShowMap(true)}
          className="relative h-[210px] rounded-[36px] overflow-hidden shadow-2xl shadow-orange-900/10 group cursor-pointer border border-white"
        >
          <img 
            src="/images/hero_refined.png" 
            alt="Hero Bus" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-7">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              <span className="text-white/90 text-[11px] font-black tracking-[0.1em] uppercase">BABIBUS LIVE TRACKING</span>
            </div>
            <h2 className="text-white text-[24px] font-black mb-4 leading-tight">
              Suivez votre bus<br/><span className="text-[#F57C00]">en temps réel</span>
            </h2>
            <div className="flex items-center justify-end">
              <div className="bg-[#F57C00] text-white h-11 px-6 rounded-[18px] text-[14px] font-black flex items-center gap-2 active:scale-95 transition-transform shadow-lg shadow-orange-600/40">
                <Navigation className="w-4 h-4 fill-white" />
                Démarrer
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Actions Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4">
          {[
            { icon: Navigation, label: 'Lignes', color: '#2E7D32', path: '/user/search?type=ligne' },
            { icon: MapPin, label: 'Arrêts', color: '#F57C00', path: '/user/search?type=arret' },
            { icon: History, label: 'Historique', color: '#1976D2', path: '/user/search?type=historique' }
          ].map((item, i) => (
            <button
              key={i}
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center gap-3 active:scale-90 transition-transform group"
            >
              <div 
                className="w-15 h-15 rounded-[24px] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.04)] group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-all bg-white border border-gray-50"
              >
                <item.icon className="w-6 h-6 transition-transform group-hover:scale-110" style={{ color: item.color }} />
              </div>
              <span className="text-[12px] font-extrabold text-[#424242] tracking-tight">{item.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Favorites Section */}
        <AnimatePresence>
          {favoriteStops.length > 0 && (
            <motion.div 
              variants={itemVariants}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#F57C00]/10 flex items-center justify-center">
                    <Star className="w-4 h-4 text-[#F57C00] fill-[#F57C00]" />
                  </div>
                  <h3 className="text-[19px] font-black text-[#1A1A1A] tracking-tight">Mes Favoris</h3>
                </div>
                <button 
                  onClick={() => navigate('/user/favorites')}
                  className="text-[#F57C00] text-[13px] font-extrabold hover:underline"
                >
                  Tout voir
                </button>
              </div>
              
              <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 no-scrollbar">
                {favoriteStops.map((stop) => (
                  <motion.div
                    key={stop.id}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => navigate(`/user/stop/${stop.id}`)}
                    className="flex-shrink-0 w-[170px] bg-white p-5 rounded-[28px] border border-[#F5F5F5] shadow-[0_4px_16px_rgba(0,0,0,0.04)] active:shadow-md transition-all relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-[#F57C00]/5 rounded-bl-[40px]" />
                    <div className="w-11 h-11 rounded-2xl bg-[#F57C00]/10 flex items-center justify-center mb-4 relative z-10">
                      <Bus className="w-6 h-6 text-[#F57C00]" />
                    </div>
                    <h4 className="text-[15px] font-black text-[#1A1A1A] line-clamp-1 mb-1 relative z-10">{stop.name}</h4>
                    <p className="text-[11px] text-[#9E9E9E] font-bold relative z-10 flex items-center gap-1.5">
                      <MapPin className="w-3 h-3" />
                      {stop.distance}m • {stop.lines.length} lignes
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Nearby Stops Section */}
        <motion.div variants={itemVariants} className="space-y-5 pb-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#2E7D32]/10 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-[#2E7D32]" />
              </div>
              <h3 className="text-[19px] font-black text-[#1A1A1A] tracking-tight">Arrêts proches</h3>
            </div>
          </div>

          <div className="space-y-4">
            {isLocating ? (
              <div className="flex flex-col items-center py-14 bg-white rounded-[36px] border-2 border-dashed border-gray-100">
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 2, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
                  }}
                  className="mb-5"
                >
                  <div className="w-16 h-16 rounded-full bg-[#E8F5E9] flex items-center justify-center">
                    <Navigation className="w-8 h-8 text-[#2E7D32]" />
                  </div>
                </motion.div>
                <p className="text-[15px] text-[#757575] font-bold">Recherche de votre position...</p>
                <p className="text-[12px] text-[#9E9E9E] mt-1">Veuillez patienter quelques instants</p>
              </div>
            ) : (
              stopsWithDistance.map((stop, index) => (
                <motion.div
                  key={stop.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <BusStopCard
                    stop={stop}
                    distance={stop.distance}
                    onClick={() => navigate(`/user/stop/${stop.id}`)}
                  />
                </motion.div>
              ))
            )}
          </div>
        </motion.div>
      </motion.div>

      <BottomTabBar />
    </div>
  );
};
