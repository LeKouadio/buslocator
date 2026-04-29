import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Search, Edit, Trash2, X } from 'lucide-react';
import { Header } from '../../components/Header';
import { BusLine } from '../../data/mockData';
import { toast } from 'sonner';
import api from '../../data/api';
import { useTranslation } from 'react-i18next';

export const ManageLines = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [lines, setLines] = useState<BusLine[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingLine, setEditingLine] = useState<BusLine | null>(null);
  const [formData, setFormData] = useState({ number: '', name: '', color: '#F57C00' });

  const fetchLines = async () => {
    try {
      const response = await api.get('/lines/');
      const data = response.data.map((l: any) => ({
        id: l.id.toString(),
        number: l.numero,
        name: l.nom,
        color: l.couleur,
        stops: [] // Assuming stops are fetched separately if needed
      }));
      setLines(data);
    } catch (e) {
      console.error(e);
      toast.error(t('admin.error_loading_lines'));
    }
  };

  useEffect(() => {
    fetchLines();
  }, []);

  const filteredLines = lines.filter(line =>
    line.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    line.number.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(t('admin.delete_line_confirm', { name }))) return;
    try {
      await api.delete(`/admin/lines/${id}`);
      setLines(lines.filter(l => l.id !== id));
      toast.success(t('admin.line_deleted', { name }));
    } catch (e) {
      toast.error(t('common.error_deleting'));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = {
        numero: formData.number,
        nom: formData.name,
        couleur: formData.color
      };

      if (editingLine) {
        await api.put(`/admin/lines/${editingLine.id}`, payload);
        toast.success(t('admin.line_updated'));
      } else {
        await api.post('/admin/lines', payload);
        toast.success(t('admin.line_added'));
      }
      setIsModalOpen(false);
      setEditingLine(null);
      setFormData({ number: '', name: '', color: '#F57C00' });
      fetchLines();
    } catch (e) {
      toast.error(t('common.error_saving'));
    }
  };

  const openModal = (line?: BusLine) => {
    if (line) {
      setEditingLine(line);
      setFormData({
        number: line.number,
        name: line.name,
        color: line.color
      });
    } else {
      setEditingLine(null);
      setFormData({ number: '', name: '', color: '#F57C00' });
    }
    setIsModalOpen(true);
  };

  return (
    <div className="size-full bg-white flex flex-col overflow-hidden">
      <Header title={t('admin.manage_lines')} showBack />

      <div className="flex-1 overflow-y-auto px-5 pt-5 pb-[34px]">
        <div className="mb-5">
          <div className="relative mb-3">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('home.search_placeholder')}
              className="w-full h-[52px] rounded-[50px] px-5 pl-12 bg-[#FAFAFA] border border-[#E8E8E8] focus:border-[#F57C00] transition-all"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F57C00]" />
          </div>

          <p className="text-sm text-[#9E9E9E]">
            {filteredLines.length} {t('home.lines_count')} {t('favorites.count_plural')}
          </p>
        </div>

        <div className="space-y-3 mb-20">
          {filteredLines.map((line, index) => (
            <motion.div
              key={line.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-[20px] p-4 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: line.color }}
                >
                  <span className="text-white font-bold text-lg">{line.number}</span>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-[#1A1A1A] mb-1">{line.name}</h3>
                  <span className="inline-block px-3 py-1 bg-[#E8F5E9] text-[#2E7D32] text-[12px] font-medium rounded-[50px]">
                    {t('admin.active_line')}
                  </span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => openModal(line)}
                    className="p-2 text-[#2E7D32] hover:bg-[#E8F5E9] rounded-full transition-colors"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(line.id, line.number)}
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
        onClick={() => openModal()}
        className="fixed bottom-10 right-5 w-14 h-14 bg-[#F57C00] rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(245,124,0,0.30)] z-10"
        whileTap={{ scale: 0.9 }}
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Plus className="w-6 h-6 text-white" />
      </motion.button>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-5"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white w-full max-w-[350px] rounded-[32px] overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-[#1A1A1A]">
                    {editingLine ? t('admin.edit_line') : t('admin.add_line')}
                  </h2>
                  <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-[12px] font-bold text-[#9E9E9E] uppercase mb-1 block">{t('admin.line_number')}</label>
                    <input
                      required
                      value={formData.number}
                      onChange={e => setFormData({ ...formData, number: e.target.value })}
                      placeholder="Ex: 01"
                      className="w-full h-12 bg-[#FAFAFA] border border-[#E8E8E8] rounded-xl px-4 focus:border-[#F57C00] outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[12px] font-bold text-[#9E9E9E] uppercase mb-1 block">{t('admin.line_name')}</label>
                    <input
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Gare - Université"
                      className="w-full h-12 bg-[#FAFAFA] border border-[#E8E8E8] rounded-xl px-4 focus:border-[#F57C00] outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[12px] font-bold text-[#9E9E9E] uppercase mb-1 block">{t('admin.color')}</label>
                    <div className="flex gap-3">
                      <input
                        type="color"
                        value={formData.color}
                        onChange={e => setFormData({ ...formData, color: e.target.value })}
                        className="w-12 h-12 rounded-lg cursor-pointer border-none p-0"
                      />
                      <input
                        value={formData.color}
                        onChange={e => setFormData({ ...formData, color: e.target.value })}
                        className="flex-1 h-12 bg-[#FAFAFA] border border-[#E8E8E8] rounded-xl px-4 focus:border-[#F57C00] outline-none"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full h-14 bg-[#F57C00] text-white font-bold rounded-2xl shadow-lg active:scale-95 transition-transform"
                  >
                    {editingLine ? t('common.update') : t('common.save')}
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
