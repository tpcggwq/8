import React, { useEffect, useState } from "react";

interface Petal {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  fade: number;
  sway: number;
  speed: number;
}

const SakuraPetals: React.FC<{ isAuthenticated: boolean }> = ({ isAuthenticated }) => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    if (!isAuthenticated) return;

    let animationId: number;
    let petalCounter = 0;

    const createPetal = (): Petal => ({
      id: petalCounter++,
      x: Math.random() * window.innerWidth,
      y: -20,
      size: 8 + Math.random() * 16,
      rotation: Math.random() * 360,
      fade: 1,
      sway: (Math.random() * 2 - 1),
      speed: 1 + Math.random() * 1.5,
    });

    const animate = () => {
      setPetals((prev) => {
        const next = prev
          .map((p) => ({
            ...p,
            y: p.y + p.speed,
            x: p.x + Math.sin((p.y + p.x) * 0.01) * p.sway,
            rotation: p.rotation + (p.sway * p.speed) * 0.5,
            fade: p.y > window.innerHeight * 0.7
              ? Math.max(0, 1 - (p.y - (window.innerHeight * 0.7)) / (window.innerHeight * 0.3))
              : 1,
          }))
          .filter((p) => p.fade > 0);

        // Yeni petal ekle
        if (Math.random() < 0.05) next.push(createPetal());

        return next;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, [isAuthenticated]);

  if (!isAuthenticated) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            top: p.y,
            left: p.x,
            width: p.size,
            height: p.size,
            background: "radial-gradient(circle at center, rgba(255,183,197,0.9), rgba(255,197,208,0.6))",
            borderRadius: "50% 60% 40% 50%",
            transform: `rotate(${p.rotation}deg)`,
            opacity: p.fade,
            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
          }}
        />
      ))}
    </div>
  );
};

export default SakuraPetals;
