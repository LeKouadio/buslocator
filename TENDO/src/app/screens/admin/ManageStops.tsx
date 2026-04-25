import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Search, Edit, Trash2 } from 'lucide-react';
import { Header } from '../../components/Header';
import { mockBusStops } from '../../data/mockData';
import { toast } from 'sonner';

export const ManageStops = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [stops, setStops] = useState(mockBusStops);

  const filteredStops = stops.filter(stop =>
    stop.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id: string, name: string) => {
    setStops(stops.filter(s => s.id !== id));
    toast.success(`${name} supprimé avec succès`);
  };

  return (
    <div className="size-full bg-white flex flex-col overflow-hidden">
      <Header title="Arrêts de bus" showBack />

      <div className="flex-1 overflow-y-auto px-5 pt-5 pb-[34px]">
        <div className="mb-5">
          <div className="relative mb-3">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un arrêt..."
              className="w-full h-[52px] rounded-[50px] px-5 pl-12 bg-[#FAFAFA] border border-[#E8E8E8] focus:border-[#F57C00] transition-all"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F57C00]" />
          </div>

          <p className="text-sm text-[#9E9E9E]">
            {filteredStops.length} arrêt{filteredStops.length > 1 ? 's' : ''} enregistré{filteredStops.length > 1 ? 's' : ''}
          </p>
        </div>

        <div className="space-y-3 mb-20">
          {filteredStops.map((stop, index) => (
            <motion.div
              key={stop.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-[20px] p-4 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F57C00] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{stop.lines[0]}</span>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-[#1A1A1A] mb-1">{stop.name}</h3>
                  <p className="text-[12px] text-[#616161] mb-1">{stop.address}</p>
                  <p className="text-[12px] text-[#9E9E9E]">
                    {stop.latitude.toFixed(4)}, {stop.longitude.toFixed(4)}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => toast.info('Fonctionnalité à venir')}
                    className="p-2 text-[#2E7D32] hover:bg-[#E8F5E9] rounded-full transition-colors"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(stop.id, stop.name)}
                    className="p-2 text-[#C62828] hover:bg-[#FFEBEE] rounded-full transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.button
        onClick={() => toast.info('Fonctionnalité à venir')}
        className="fixed bottom-10 right-5 w-14 h-14 bg-[#F57C00] rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(245,124,0,0.30)] z-10"
        whileTap={{ scale: 0.9 }}
        animate={{
          scale: [1, 1.06, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
      >
        <Plus className="w-6 h-6 text-white" />
      </motion.button>
    </div>
  );
};
