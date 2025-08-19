import React, { useEffect, useState } from 'react';

interface Heart {
  id: number;
  x: number;
  y: number;
  scale: number;
  opacity: number;
  speed: number;
  sway: number;
  life: number;
  type: string; // 💕 veya 💜
}

interface FloatingHeartsProps {
  isAuthenticated: boolean;
}

const FloatingHearts: React.FC<FloatingHeartsProps> = ({ isAuthenticated }) => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    if (!isAuthenticated) return;

    let animationFrame: number;
    let heartId = 0;

    const createHeart = (existing: Heart[]): Heart => {
      let x = Math.random() * window.innerWidth;

      // Çakışmayı engelle (X yakınsa kaydır)
      if (existing.some(h => Math.abs(h.x - x) < 35)) {
        x += 50 * (Math.random() > 0.5 ? 1 : -1);
      }

      return {
        id: heartId++,
        x,
        y: window.innerHeight + 40,
        scale: 0.5 + Math.random() * 0.4,       // biraz daha küçük
        opacity: 0.25 + Math.random() * 0.25,  // daha saydam (0.25–0.5 arası)
        speed: 0.3 + Math.random() * 0.7,      // çok daha yavaş yukarı çıkış
        sway: (Math.random() - 0.5) * 1.5,     // sağa sola daha az sallansın
        life: 0,
        type: Math.random() > 0.5 ? '💕' : '💜',
      };
    };

    const animate = () => {
      setHearts(prev => {
        const newHearts = [...prev];

        // Daha az ama sürekli kalp üret
        if (Math.random() < 0.15) {
          newHearts.push(createHeart(newHearts));
        }

        return newHearts
          .map(heart => ({
            ...heart,
            y: heart.y - heart.speed,
            x: heart.x + Math.sin(heart.life * 0.05) * heart.sway,
            opacity: Math.max(0, heart.opacity - heart.life * 0.0007), // yavaş fade out
            life: heart.life + 1,
          }))
          .filter(heart => heart.y > -60 && heart.opacity > 0.05);
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, [isAuthenticated]);

  if (!isAuthenticated) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute will-change-transform"
          style={{
            left: heart.x,
            top: heart.y,
            transform: `scale(${heart.scale})`,
            opacity: heart.opacity,
            fontSize: '26px',
            textShadow: '0 0 6px rgba(255,255,255,0.6)',
          }}
        >
          {heart.type}
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
