import { useEffect, useState } from "react";

interface Heart {
  id: number;
  left: string;
  size: string;
  duration: string;
  delay: string;
  opacity: number;
  emoji: string;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const emojis = ["💖", "💗", "💕", "✨"];

    const generated: Heart[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${14 + Math.random() * 24}px`,
      duration: `${12 + Math.random() * 18}s`,
      delay: `${Math.random() * 15}s`,
      opacity: 0.4 + Math.random() * 0.4,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    }));

    setHearts(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="floating-heart-premium"
          style={{
            left: h.left,
            fontSize: h.size,
            animationDuration: h.duration,
            animationDelay: h.delay,
            opacity: h.opacity,
          }}
        >
          {h.emoji}
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;