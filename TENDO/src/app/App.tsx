import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router';
import { Toaster } from 'sonner';
import { AuthProvider } from './contexts/AuthContext';
import { AnimatePresence } from 'motion/react';
import { PageTransition } from './components/PageTransition';

import { Splash } from './screens/Splash';
import { Welcome } from './screens/Welcome';
import { Register } from './screens/Register';
import { Login } from './screens/Login';

import { Home } from './screens/user/Home';
import { Search } from './screens/user/Search';
import { Favorites } from './screens/user/Favorites';
import { Profile } from './screens/user/Profile';
import { StopDetails } from './screens/user/StopDetails';
import { About } from './screens/user/About';
import { EditProfile } from './screens/user/EditProfile';

import { Dashboard } from './screens/admin/Dashboard';
import { ManageStops } from './screens/admin/ManageStops';
import { ManageLines } from './screens/admin/ManageLines';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Splash /></PageTransition>} />
        <Route path="/welcome" element={<PageTransition><Welcome /></PageTransition>} />
        <Route path="/register" element={<PageTransition><Register /></PageTransition>} />
        <Route path="/login" element={<PageTransition><Login /></PageTransition>} />

        <Route path="/user/home" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/user/search" element={<PageTransition><Search /></PageTransition>} />
        <Route path="/user/favorites" element={<PageTransition><Favorites /></PageTransition>} />
        <Route path="/user/profile" element={<PageTransition><Profile /></PageTransition>} />
        <Route path="/user/stop/:id" element={<PageTransition><StopDetails /></PageTransition>} />
        <Route path="/user/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/user/edit-profile" element={<PageTransition><EditProfile /></PageTransition>} />

        <Route path="/admin/dashboard" element={<PageTransition><Dashboard /></PageTransition>} />
        <Route path="/admin/stops" element={<PageTransition><ManageStops /></PageTransition>} />
        <Route path="/admin/lines" element={<PageTransition><ManageLines /></PageTransition>} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="w-full h-screen max-w-[390px] mx-auto bg-white shadow-2xl overflow-hidden relative flex flex-col">
          <AnimatedRoutes />
        </div>

        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: '#2E7D32',
              color: 'white',
              borderRadius: '50px',
              padding: '12px 20px',
              fontSize: '14px',
              fontWeight: '500'
            }
          }}
        />
      </BrowserRouter>
    </AuthProvider>
  );
}