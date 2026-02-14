import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  left: string;
  color: string;
  delay: string;
  shape: string;
}

const Confetti = ({ active }: { active: boolean }) => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (!active) { setPieces([]); return; }
    const colors = [
      "hsl(340, 80%, 70%)", "hsl(340, 90%, 80%)", "hsl(280, 50%, 75%)",
      "hsl(0, 0%, 100%)", "hsl(340, 70%, 60%)", "hsl(20, 80%, 80%)",
    ];
    const shapes = ["♥", "♥", "✦", "●", "♥"];
    const newPieces: ConfettiPiece[] = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: `${Math.random() * 0.8}s`,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
    }));
    setPieces(newPieces);
    const timer = setTimeout(() => setPieces([]), 2500);
    return () => clearTimeout(timer);
  }, [active]);

  if (!active || pieces.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[100]">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti-piece"
          style={{
            left: p.left,
            top: "-10px",
            color: p.color,
            animationDelay: p.delay,
            fontSize: `${12 + Math.random() * 14}px`,
          }}
        >
          {p.shape}
        </span>
      ))}
    </div>
  );
};

export default Confetti;
