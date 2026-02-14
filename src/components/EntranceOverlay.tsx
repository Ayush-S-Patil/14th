import { useEffect, useState } from "react";

interface Props {
  onFinish: () => void;
}

const EntranceOverlay = ({ onFinish }: Props) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onFinish, 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[999] 
                    bg-gradient-to-br from-pink-200 via-pink-100 to-purple-200 
                    backdrop-blur-md 
                    flex items-center justify-center 
                    animate-fade-in">
      <h1 className="text-4xl md:text-6xl font-vibes text-pink-600 text-center animate-pulse">
        Shruu… this is for you 💌
      </h1>
    </div>
  );
};

export default EntranceOverlay;