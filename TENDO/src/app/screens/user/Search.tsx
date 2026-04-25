import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search as SearchIcon } from 'lucide-react';
import { Header } from '../../components/Header';
import { BottomTabBar } from '../../components/BottomTabBar';
import { BusStopCard } from '../../components/BusStopCard';
import { mockBusStops, mockUserPosition, calculateDistance } from '../../data/mockData';
import { useNavigate, useLocation } from 'react-router';

export const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  // Get search type from query params
  const queryParams = new URLSearchParams(location.search);
  const searchType = queryParams.get('type') || 'arret';

  const getPlaceholder = () => {
    switch (searchType) {
      case 'ligne': return 'Rechercher une ligne de bus...';
      case 'numero': return 'Rechercher par numéro de bus...';
      case 'historique': return 'Rechercher dans l\'historique...';
      default: return 'Rechercher un arrêt BaBiBUS...';
    }
  };

  const getHelperText = () => {
    switch (searchType) {
      case 'ligne': return 'Recherchez une ligne de bus par son numéro';
      case 'numero': return 'Saisissez le numéro d\'un bus';
      case 'historique': return 'Consultez vos trajets récents';
      default: return 'Recherchez un arrêt de bus par son nom';
    }
  };

  const filteredStops = mockBusStops
    .filter(stop =>
      stop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stop.address.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .map(stop => ({
      ...stop,
      distance: calculateDistance(
        mockUserPosition.latitude,
        mockUserPosition.longitude,
        stop.latitude,
        stop.longitude
      )
    }))
    .sort((a, b) => a.distance - b.distance);

  return (
    <div className="size-full bg-white flex flex-col overflow-hidden">
      <Header title="Rechercher" />

      <div className="flex-1 overflow-y-auto px-5 pt-5 pb-[100px]">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-5"
        >
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={getPlaceholder()}
              className="w-full h-[52px] rounded-[50px] px-5 pl-12 bg-[#FAFAFA] border border-[#E8E8E8] focus:border-[#F57C00] transition-all"
              autoFocus
            />
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F57C00]" />
          </div>
        </motion.div>

        {searchQuery === '' ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <SearchIcon className="w-16 h-16 text-[#9E9E9E] mx-auto mb-3" />
              <p className="text-[#616161] text-[14px]">
                {getHelperText()}
              </p>
            </div>
          </div>
        ) : filteredStops.length === 0 ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <motion.div
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <SearchIcon className="w-16 h-16 text-[#9E9E9E] mx-auto mb-3" />
              </motion.div>
              <p className="text-[#1A1A1A] font-semibold mb-1">
                Aucun résultat trouvé
              </p>
              <p className="text-[#616161] text-[14px]">
                Essayez une autre recherche
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredStops.map((stop, index) => (
              <motion.div
                key={stop.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <BusStopCard
                  stop={stop}
                  distance={stop.distance}
                  onClick={() => navigate(`/user/stop/${stop.id}`)}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <BottomTabBar />
    </div>
  );
};
