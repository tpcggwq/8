import React from 'react';

interface CloudEffectsProps {
  isAuthenticated: boolean;
}

const CloudEffects: React.FC<CloudEffectsProps> = ({ isAuthenticated }) => {
  if (!isAuthenticated) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Soft cloud-like light effects */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-10 animate-pulse will-change-transform"
          style={{
            width: `${200 + i * 50}px`,
            height: `${100 + i * 25}px`,
            left: `${10 + i * 15}%`,
            top: `${20 + i * 12}%`,
            background: `radial-gradient(ellipse, ${
              i % 3 === 0 ? '#F8BBD9' : i % 3 === 1 ? '#E879F9' : '#DDD6FE'
            }, transparent)`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${6 + i * 0.5}s`,
            transform: `translateX(${Math.sin(i) * 20}px) translateY(${Math.cos(i) * 15}px)`,
          }}
        />
      ))}
      
      {/* Moving light rays */}
      {[...Array(4)].map((_, i) => (
        <div
          key={`light-${i}`}
          className="absolute opacity-5 animate-pulse will-change-transform"
          style={{
            width: '2px',
            height: `${300 + i * 100}px`,
            right: `${20 + i * 20}%`,
            top: `${10 + i * 15}%`,
            background: `linear-gradient(to bottom, transparent, #F8BBD9, transparent)`,
            animationDelay: `${i * 1.2}s`,
            animationDuration: `${8 + i * 0.3}s`,
            transform: `rotate(${15 + i * 10}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default CloudEffects;