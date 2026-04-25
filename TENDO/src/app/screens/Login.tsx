import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { Mail, Lock, Bus, MapPin } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Header } from '../components/Header';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'sonner';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
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

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!email.trim()) {
      newErrors.email = 'Ce champ est obligatoire';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email invalide';
    }
    if (!password) {
      newErrors.password = 'Ce champ est obligatoire';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    try {
      const role = email.includes('admin') ? 'admin' : 'user';
      await login(email, password, role);
      toast.success('Connexion réussie !');

      if (role === 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/user/home');
      }
    } catch (error) {
      setErrors({ password: 'Email ou mot de passe incorrect' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="size-full bg-[#FDFDFD] flex flex-col overflow-hidden">
      <Header showBack />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 overflow-y-auto px-5 pt-8 pb-[34px]"
      >
        <motion.div variants={itemVariants} className="mb-10 text-center">
          <div className="relative inline-flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{ 
                y: [0, -6, 0],
                rotate: [0, -1, 1, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="bg-[#FFF3E0] p-4 rounded-[24px]"
            >
              <Bus className="w-10 h-10 text-[#F57C00]" />
            </motion.div>
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                y: [0, 4, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute -bottom-2 -right-3 bg-[#E8F5E9] p-2 rounded-full shadow-sm"
            >
              <MapPin className="w-6 h-6 text-[#2E7D32] fill-[#2E7D32]/20" />
            </motion.div>
          </div>
          
          <h2 className="text-[26px] font-extrabold text-[#1A1A1A] mb-1">
            Bon retour !
          </h2>
          <p className="text-[15px] text-[#757575]">
            Connectez-vous pour continuer sur <span className="text-[#F57C00] font-bold">BaBi</span><span className="text-[#2E7D32] font-bold">BUS</span>
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div variants={itemVariants}>
            <Input
              label="Adresse email"
              type="email"
              value={email}
              onChange={setEmail}
              icon={<Mail className="w-5 h-5" />}
              error={errors.email}
              success={!errors.email && email.length > 0}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Input
              label="Mot de passe"
              type="password"
              value={password}
              onChange={setPassword}
              icon={<Lock className="w-5 h-5" />}
              error={errors.password}
              success={!errors.password && password.length > 0}
            />
            <div className="text-right mt-2">
              <button
                type="button"
                onClick={() => toast.info('Fonctionnalité à venir')}
                className="text-[#2E7D32] text-[14px] font-semibold"
              >
                Mot de passe oublié ?
              </button>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-2">
            <Button type="submit" variant="primary" fullWidth loading={loading}>
              Se connecter
            </Button>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-center text-[15px] text-[#616161] pt-4"
          >
            Nouveau sur BaBiBUS ?{' '}
            <button
              type="button"
              onClick={() => navigate('/register')}
              className="text-[#F57C00] font-bold hover:underline"
            >
              S'inscrire
            </button>
          </motion.p>
        </form>
      </motion.div>
    </div>
  );
};
