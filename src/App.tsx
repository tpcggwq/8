import React, { useState, useEffect } from 'react';
import PasswordForm from './components/PasswordForm';
import SakuraPetals from './components/SakuraPetal';
import FloatingHearts from './components/FloatingHearts';
import CloudEffects from './components/CloudEffects';
import RomanticMessage from './components/RomanticMessage';
import MediaGallery from './components/MediaGallery';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check localStorage on app load
    const savedAuth = localStorage.getItem('sakura_authenticated');
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
      setShowContent(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated && !showContent) {
      // Smooth transition when authenticated
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, showContent]);

  const handleAuthenticate = (success: boolean) => {
    if (success) {
      setIsAuthenticated(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 via-lavender-50 to-pink-100 relative overflow-x-hidden font-['Poppins',sans-serif]">
      {/* Cloud and Light Effects Background */}
      <CloudEffects isAuthenticated={isAuthenticated} />
      
      {/* Floating Hearts Background */}
      <FloatingHearts isAuthenticated={isAuthenticated} />
      
      {/* Sakura Petals */}
      <SakuraPetals isAuthenticated={isAuthenticated} />

      {!isAuthenticated ? (
        <PasswordForm onAuthenticate={handleAuthenticate} />
      ) : (
        <div className={`transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="min-h-screen">
            <RomanticMessage isAuthenticated={isAuthenticated} />
            <MediaGallery isAuthenticated={isAuthenticated} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;