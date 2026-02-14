import { useRef, useState } from "react";
import song from "../assets/naa-baagaswamini.mp3";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggle = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.volume = 0.4;
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src={song} loop />

      <div className="fixed bottom-6 right-6 z-50">
        <div className="px-6 py-4 rounded-2xl 
                        bg-gradient-to-br from-pink-500/90 to-rose-500/90
                        backdrop-blur-lg
                        shadow-2xl
                        flex flex-col items-center gap-3
                        transition-all duration-500 hover:scale-105">

          {/* Title */}
          <p className="text-xs font-playfair text-white/90 italic tracking-wide">
            Our Favorite Song 💞
          </p>

          {/* Song Name */}
          <p className="text-sm font-semibold text-white tracking-wide">
            Naa Baagaswamini
          </p>

          {/* Controls */}
          <div className="flex items-center gap-4">

            {/* Play Button */}
            <button
              onClick={toggle}
              className="w-12 h-12 flex items-center justify-center 
                         rounded-full bg-white text-pink-600
                         shadow-lg hover:scale-110 transition-all duration-300"
            >
              {isPlaying ? "⏸️" : "▶️"}
            </button>

            {/* Animated Bars */}
            <div className="flex items-end gap-1 h-6">
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={`w-1.5 bg-white rounded-full transition-all duration-300 ${
                    isPlaying ? "animate-bounce" : "opacity-50"
                  }`}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                    height: isPlaying ? "100%" : "30%",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicPlayer;