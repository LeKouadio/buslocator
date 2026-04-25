import React from 'react';
import { motion } from 'motion/react';
import { Bus } from 'lucide-react';
import { BusStop } from '../data/mockData';

interface BusStopCardProps {
  stop: BusStop;
  distance?: number;
  onClick?: () => void;
}

export const BusStopCard = ({ stop, distance, onClick }: BusStopCardProps) => {
  return (
    <motion.div
      onClick={onClick}
      className="bg-white rounded-[16px] p-4 shadow-[0_2px_8px_rgba(0,0,0,0.08)] cursor-pointer"
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-full bg-[#F57C00] flex items-center justify-center flex-shrink-0">
          <Bus className="w-5 h-5 text-white" />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-[#1A1A1A] mb-1">{stop.name}</h3>

          <div className="flex flex-wrap gap-2 mb-2">
            {stop.lines.map((line) => (
              <span
                key={line}
                className="px-3 py-1 bg-[#F57C00] text-white text-[12px] font-medium rounded-[50px]"
              >
                Ligne {line}
              </span>
            ))}
          </div>

          {distance !== undefined && (
            <span className="inline-block px-3 py-1 bg-[#E8F5E9] text-[#2E7D32] text-[12px] font-medium rounded-[50px]">
              {distance} m
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};
