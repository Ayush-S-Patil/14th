import { useState, useEffect } from "react";
import photoHoldingHands from "@/assets/photo-holding-hands.jpeg";
import photoEyes from "@/assets/photo-eyes.jpeg";
import photoBouquet from "@/assets/photo-bouquet.jpeg";
import photoBracelet from "@/assets/photo-bracelet.jpeg";
import photoShoulder from "@/assets/photo-shoulder.jpeg";
import photoComforts from "@/assets/photo-comforts.jpeg";
import photoOld from "@/assets/photo-old.jpeg";

const slides = [
  {
    src: photoHoldingHands,
    caption:
      "Our hands didn't just meet…\nthey promised something forever. 🤍\nEndless hold, endless us.",
  },
  {
    src: photoEyes,
    caption:
      "In your eyes, I see my future.\nIn mine, you'll always find your home. 💫\nJust us… effortlessly perfect.",
  },
  {
    src: photoBouquet,
    caption:
      "The first bouquet I gave you…\nbut you were always the most beautiful flower. 🌹\nThat smile was worth everything.",
  },
  {
    src: photoBracelet,
    caption:
      "The first bracelet I gifted you…\na small thing, but filled with big love. ✨\nA little reminder that you're mine, always 💗.",
  },
  {
    src: photoShoulder,
    caption:
      "I want your head to rest on my shoulder forever.\nNo matter what happens, you'll always have me. 🤍\nYour safe place. Your person 🥰.",
  },
  {
    src: photoComforts,
    caption:
      "The way you hold me, care for me,\nand love me like your baby… 🥺\nI feel safest in your arms My Love 💖.",
  },
  {
    src: photoOld,
    caption:
      "Just you and me, baby...\nNo noise, no chaos…I see happiness 🥰\n I see the person I want beside me for every tomorrow 💖.",
  },
];

const PhotoCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3800);
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <div
      className="w-full max-w-6xl mx-auto px-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex items-center justify-center gap-6">

        {/* LEFT BUTTON (Desktop) */}
        <button
          onClick={prevSlide}
          className="hidden md:flex items-center justify-center 
                     w-12 h-12 rounded-full 
                     bg-card/60 backdrop-blur-md 
                     border border-primary/30 
                     text-foreground text-xl
                     hover:scale-110 transition-all duration-300 shadow-md"
        >
          ◀
        </button>

        {/* MAIN CONTENT */}
        <div className="flex flex-col md:flex-row items-center gap-10 transition-all duration-700 ease-in-out">

          {/* IMAGE */}
          <div className="relative w-full md:w-[420px] h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-primary/30">
            {slides.map((slide, i) => (
              <img
                key={i}
                src={slide.src}
                alt={`Memory ${i + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                  i === current
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-105"
                }`}
              />
            ))}

            {/* Soft glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 pointer-events-none" />
          </div>

          {/* CAPTION */}
          <div className="w-full md:w-[420px] text-center md:text-left">
            <p className="font-playfair text-xl md:text-2xl text-foreground italic leading-relaxed whitespace-pre-line border-l-4 border-primary pl-6">
              {slides[current].caption}
            </p>
          </div>
        </div>

        {/* RIGHT BUTTON (Desktop) */}
        <button
          onClick={nextSlide}
          className="hidden md:flex items-center justify-center 
                     w-12 h-12 rounded-full 
                     bg-card/60 backdrop-blur-md 
                     border border-primary/30 
                     text-foreground text-xl
                     hover:scale-110 transition-all duration-300 shadow-md"
        >
          ▶
        </button>
      </div>

      {/* MOBILE BUTTONS */}
      <div className="flex md:hidden justify-center gap-6 mt-6">
        <button
          onClick={prevSlide}
          className="px-6 py-2 rounded-full bg-card/60 border border-primary/30"
        >
          ◀ Prev
        </button>
        <button
          onClick={nextSlide}
          className="px-6 py-2 rounded-full bg-card/60 border border-primary/30"
        >
          Next ▶
        </button>
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-3 mt-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === current
                ? "bg-primary w-8 shadow-md"
                : "bg-primary/30 w-3"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;