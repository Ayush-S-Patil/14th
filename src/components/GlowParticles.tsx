import { useEffect, useState } from "react";

const GlowParticles = () => {
  const [particles, setParticles] = useState<Array<{ id: number; style: React.CSSProperties }>>([]);

  useEffect(() => {
    const p = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${4 + Math.random() * 6}s`,
        animationDelay: `${Math.random() * 5}s`,
        "--drift-x": `${(Math.random() - 0.5) * 100}px`,
        "--drift-y": `${(Math.random() - 0.5) * 100}px`,
      } as React.CSSProperties,
    }));
    setParticles(p);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {particles.map((p) => (
        <div key={p.id} className="glow-particle" style={p.style} />
      ))}
    </div>
  );
};

export default GlowParticles;
