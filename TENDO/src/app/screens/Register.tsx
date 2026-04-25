import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { User, Mail, Lock, Bus, MapPin } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Header } from '../components/Header';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'sonner';

export const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!firstName.trim()) newErrors.firstName = 'Ce champ est obligatoire';
    if (!lastName.trim()) newErrors.lastName = 'Ce champ est obligatoire';
    if (!email.trim()) {
      newErrors.email = 'Ce champ est obligatoire';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email invalide';
    }
    if (!password) {
      newErrors.password = 'Ce champ est obligatoire';
    } else if (password.length < 6) {
      newErrors.password = 'Minimum 6 caractères';
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    try {
      await register(firstName, lastName, email, password);
      toast.success('Compte créé avec succès !');
      navigate('/user/home');
    } catch (error) {
      toast.error('Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="size-full bg-white flex flex-col overflow-hidden">
      <Header showBack />

      <div className="flex-1 overflow-y-auto px-5 pt-6 pb-[34px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Bus className="w-8 h-8 text-[#F57C00]" />
            <MapPin className="w-6 h-6 text-[#2E7D32]" />
          </div>
          <h2 className="text-[22px] font-bold text-[#F57C00] mb-1">
            Créer un compte
          </h2>
          <p className="text-[14px] text-[#616161]">Rejoignez BaBiBUS</p>
          <div className="w-10 h-[2px] bg-[#2E7D32] opacity-25 rounded-full mx-auto mt-3" />
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-[14px]">
          <Input
            label="Nom"
            value={lastName}
            onChange={setLastName}
            icon={<User className="w-5 h-5" />}
            error={errors.lastName}
            success={!errors.lastName && lastName.length > 0}
          />

          <Input
            label="Prénom"
            value={firstName}
            onChange={setFirstName}
            icon={<User className="w-5 h-5" />}
            error={errors.firstName}
            success={!errors.firstName && firstName.length > 0}
          />

          <Input
            label="Adresse email"
            type="email"
            value={email}
            onChange={setEmail}
            icon={<Mail className="w-5 h-5" />}
            error={errors.email}
            success={!errors.email && email.length > 0}
          />

          <Input
            label="Mot de passe"
            type="password"
            value={password}
            onChange={setPassword}
            icon={<Lock className="w-5 h-5" />}
            error={errors.password}
            success={!errors.password && password.length > 0}
          />

          <Input
            label="Confirmer mot de passe"
            type="password"
            value={confirmPassword}
            onChange={setConfirmPassword}
            icon={<Lock className="w-5 h-5" />}
            error={errors.confirmPassword}
            success={!errors.confirmPassword && confirmPassword.length > 0}
          />

          <div className="pt-4">
            <Button type="submit" variant="primary" fullWidth loading={loading}>
              Créer mon compte
            </Button>
          </div>

          <p className="text-center text-[14px] text-[#616161] pt-2">
            Déjà un compte ?{' '}
            <button
              type="button"
              onClick={() => navigate('/login')}
              className="text-[#2E7D32] font-medium underline"
            >
              Se connecter
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};
