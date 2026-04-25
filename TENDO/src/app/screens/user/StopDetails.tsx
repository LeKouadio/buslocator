import React from 'react';
import { motion } from 'motion/react';
import { useParams, useNavigate } from 'react-router';
import { MapPin, Clock, Heart, Navigation } from 'lucide-react';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { mockBusStops, mockUserPosition, calculateDistance } from '../../data/mockData';
import { useAuth } from '../../contexts/AuthContext';
import { toast } from 'sonner';

export const StopDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, addFavorite, removeFavorite } = useAuth();

  const stop = mockBusStops.find(s => s.id === id);

  if (!stop) {
    return (
      <div className="size-full bg-white flex items-center justify-center">
        <p>Arrêt non trouvé</p>
      </div>
    );
  }

  const distance = calculateDistance(
    mockUserPosition.latitude,
    mockUserPosition.longitude,
    stop.latitude,
    stop.longitude
  );

  const isFavorite = user?.favorites.includes(stop.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(stop.id);
      toast.success('Retiré des favoris');
    } else {
      addFavorite(stop.id);
      toast.success('Ajouté aux favoris');
    }
  };

  return (
    <div className="size-full bg-white flex flex-col overflow-hidden">
      <Header title={stop.name} showBack />

      <div className="flex-1 overflow-y-auto px-5 pt-5 pb-[34px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="h-[170px] bg-[#E8F5E9] rounded-[20px] mb-5 relative overflow-hidden"
        >
          <div className="absolute inset-0 grid grid-cols-3 gap-2 p-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white/40 rounded border border-[#E0E0E0]" />
            ))}
          </div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ delay: 0.3, type: 'spring' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#F57C00] rounded-full flex items-center justify-center shadow-lg"
          >
            <span className="text-white font-bold">{stop.lines[0]}</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[20px] border border-[#E8E8E8] p-5 mb-4"
        >
          <p className="text-[12px] font-medium text-[#2E7D32] uppercase tracking-wide mb-3">
            Lignes de bus
          </p>

          <div className="flex flex-wrap gap-2">
            {stop.lines.map((line) => (
              <span
                key={line}
                className="px-4 py-2 bg-[#F57C00] text-white font-semibold rounded-[50px]"
              >
                Ligne {line}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-[20px] border border-[#E8E8E8] p-5 mb-6"
        >
          <p className="text-[12px] font-medium text-[#2E7D32] uppercase tracking-wide mb-3">
            Distance
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#2E7D32]" />
              <span className="text-[#1A1A1A] font-medium">{distance} m depuis votre position</span>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#F57C00]" />
              <span className="text-[#1A1A1A] font-medium">
                ~{Math.round(distance / 80)} min à pied
              </span>
            </div>

            <span className="inline-block px-3 py-1 bg-[#E8F5E9] text-[#2E7D32] text-[12px] font-medium rounded-[50px]">
              À {Math.round(distance / 80)} min de vous
            </span>
          </div>
        </motion.div>

        <div className="space-y-3">
          <Button
            variant="secondary"
            fullWidth
            icon={<Navigation />}
            onClick={() => toast.info('Fonctionnalité à venir')}
          >
            Voir l'itinéraire
          </Button>

          <Button
            variant={isFavorite ? 'outline-orange' : 'outline-orange'}
            fullWidth
            icon={<Heart className={isFavorite ? 'fill-current' : ''} />}
            onClick={handleToggleFavorite}
          >
            {isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
          </Button>
        </div>
      </div>
    </div>
  );
};
