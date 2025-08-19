import React, { useState, useEffect } from 'react';
import { Heart, Lock } from 'lucide-react';

// Basit cookie helper fonksiyonları
const setCookie = (name: string, value: string, minutes: number) => {
  const expires = new Date(Date.now() + minutes * 60 * 1000).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
};

const getCookie = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
  return null;
};

interface PasswordFormProps {
  onAuthenticate: (success: boolean) => void;
}

const PasswordForm: React.FC<PasswordFormProps> = ({ onAuthenticate }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Daha önce cookie ayarlanmış mı kontrol et
    const isAuthenticated = getCookie('sakura_authenticated');
    if (isAuthenticated === 'true') {
      onAuthenticate(true);
    }
  }, [onAuthenticate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // loading efekti
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (password === '03.01.2025') {
      setCookie('sakura_authenticated', 'true', 5); // 60 dk geçerli
      onAuthenticate(true);
    } else {
      setError('Yanlış şifre! İpucu: çıkma tarihimiz :)');
      onAuthenticate(false);
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      {/* Background hearts */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse will-change-transform"
            style={{
              left: `${15 + (i * 12)}%`,
              top: `${25 + (i * 8)}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${4 + i * 0.4}s`,
            }}
          >
            <div 
              className="text-6xl text-pink-200 opacity-20 animate-bounce"
              style={{
                filter: 'blur(2px)',
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${5 + i * 0.2}s`,
              }}
            >
              💕
            </div>
          </div>
        ))}
      </div>

      {/* Soft background glow */}
      <div className="fixed inset-0 bg-gradient-to-br from-pink-50 via-purple-50 via-lavender-50 to-pink-100 opacity-90" />

      <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-full max-w-md relative z-10 border border-pink-100/50">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 p-4 rounded-full shadow-lg animate-pulse">
              <Heart className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 bg-clip-text text-transparent mb-3">
            Özel Sayfamız
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            Sadece bizim bildiğimiz şifreyle giriş yapabilirsin 💕
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Şifre gir..."
                className="w-full pl-10 pr-4 py-4 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm text-gray-700 placeholder-gray-400"
                required
                autoFocus
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm mt-3 animate-shake bg-red-50 p-2 rounded-lg">
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 text-white py-4 rounded-xl font-medium hover:from-pink-500 hover:via-purple-500 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none shadow-lg"
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Kontrol ediliyor...</span>
              </div>
            ) : (
              'Giriş Yap'
            )}
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-xs text-gray-500 bg-pink-50/50 rounded-lg p-3">
            💡 İpucu: çıkma tarihimiz 😊
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordForm;
