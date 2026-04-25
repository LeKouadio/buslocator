import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { User, Mail } from 'lucide-react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { useAuth } from '../../contexts/AuthContext';
import { toast } from 'sonner';

export const EditProfile = () => {
  const navigate = useNavigate();
  const { user, updateProfile } = useAuth();
  const [firstName, setFirstName] = useState(user?.firstName || '');
  const [lastName, setLastName] = useState(user?.lastName || '');
  const [email, setEmail] = useState(user?.email || '');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName.trim() || !lastName.trim() || !email.trim()) {
      toast.error('Tous les champs sont obligatoires');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Email invalide');
      return;
    }

    setLoading(true);
    try {
      await updateProfile(firstName, lastName, email);
      toast.success('Profil mis à jour avec succès !');
      navigate('/user/profile');
    } catch (error) {
      toast.error('Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="size-full bg-white flex flex-col overflow-hidden">
      <Header title="Modifier mon profil" showBack />

      <div className="flex-1 overflow-y-auto px-5 pt-6 pb-[34px]">
        <form onSubmit={handleSubmit} className="space-y-[14px]">
          <Input
            label="Nom"
            value={lastName}
            onChange={setLastName}
            icon={<User className="w-5 h-5" />}
            success={lastName.length > 0}
          />

          <Input
            label="Prénom"
            value={firstName}
            onChange={setFirstName}
            icon={<User className="w-5 h-5" />}
            success={firstName.length > 0}
          />

          <Input
            label="Adresse email"
            type="email"
            value={email}
            onChange={setEmail}
            icon={<Mail className="w-5 h-5" />}
            success={email.length > 0 && /\S+@\S+\.\S+/.test(email)}
          />

          <div className="pt-4 space-y-3">
            <Button type="submit" variant="primary" fullWidth loading={loading}>
              Sauvegarder
            </Button>

            <Button
              type="button"
              variant="outline-green"
              fullWidth
              onClick={() => navigate('/user/profile')}
            >
              Annuler
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
