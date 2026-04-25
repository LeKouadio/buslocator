import React from 'react';
import { motion } from 'motion/react';
import { Heart, Bus as BusIcon } from 'lucide-react';
import { Header } from '../../components/Header';
import { BottomTabBar } from '../../components/BottomTabBar';
import { BusStopCard } from '../../components/BusStopCard';
import { Button } from '../../components/Button';
import { mockBusStops, mockUserPosition, calculateDistance } from '../../data/mockData';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

export const Favorites = () => {
  const navigate = useNavigate();
  const { user, removeFavorite } = useAuth();

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

  const handleRemove = (stopId: string, stopName: string) => {
    removeFavorite(stopId);
    toast.success(`${stopName} retiré des favoris`);
  };

  return (
    <div className="size-full bg-white flex flex-col overflow-hidden">
      <Header title="Mes favoris" />

      <div className="flex-1 overflow-y-auto px-5 pt-5 pb-[100px]">
        {favoriteStops.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-[280px]"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mb-6"
              >
                <div className="relative inline-block">
                  <BusIcon className="w-20 h-20 text-[#F57C00]" />
                  <Heart className="absolute -top-2 -right-2 w-10 h-10 text-[#F57C00]" />
                </div>
              </motion.div>

              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
                Aucun favori ajouté
              </h3>
              <p className="text-[14px] text-[#616161] mb-6">
                Ajoutez des arrêts pour les retrouver rapidement
              </p>

              <div className="space-y-3">
                <Button
                  variant="primary"
                  fullWidth
                  onClick={() => navigate('/user/home')}
                >
                  Explorer les arrêts
                </Button>
                <Button
                  variant="outline-green"
                  fullWidth
                  onClick={() => navigate('/user/search')}
                >
                  Rechercher une ligne
                </Button>
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm text-[#9E9E9E]">
                {favoriteStops.length} favori{favoriteStops.length > 1 ? 's' : ''}
              </h3>
            </div>

            {favoriteStops.map((stop, index) => (
              <motion.div
                key={stop.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="relative"
              >
                <motion.div
                  drag="x"
                  dragConstraints={{ left: -80, right: 0 }}
                  dragElastic={0.1}
                  className="relative z-10 bg-white"
                >
                  <BusStopCard
                    stop={stop}
                    distance={stop.distance}
                    onClick={() => navigate(`/user/stop/${stop.id}`)}
                  />
                </motion.div>

                <button
                  onClick={() => handleRemove(stop.id, stop.name)}
                  className="absolute right-0 top-0 bottom-0 w-20 bg-[#2E7D32] rounded-r-[16px] flex items-center justify-center"
                >
                  <Heart className="w-5 h-5 text-white fill-white" />
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <BottomTabBar />
    </div>
  );
};
