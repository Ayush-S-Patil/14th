import { useState, useCallback } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import GlowParticles from "@/components/GlowParticles";
import HeartCursorTrail from "@/components/HeartCursorTrail";
import Confetti from "@/components/Confetti";
import PhotoCarousel from "@/components/PhotoCarousel";
import Timeline from "@/components/Timeline";
import TypewriterLetter from "@/components/TypewriterLetter";
import MusicPlayer from "@/components/MusicPlayer";


import photoEyes from "@/assets/photo-eyes.jpeg";

const Index = () => {
  const [slide, setSlide] = useState(0);
  const [confetti, setConfetti] = useState(false);
  const [quizMsg, setQuizMsg] = useState("");
  const [blushPopup, setBlushPopup] = useState(false);
  const [noPos, setNoPos] = useState<{ x: number; y: number } | null>(null);

  const triggerConfetti = useCallback(() => {
    setConfetti(true);
    setTimeout(() => setConfetti(false), 2500);
  }, []);

  const nextSlide = useCallback(() => {
    setSlide((s) => s + 1);
  }, []);

  const handleQuiz = (answer: string) => {
    if (answer === "25th of Jan") {
      setQuizMsg("Of course you remember, my love 💗");
      triggerConfetti();
      setTimeout(() => nextSlide(), 2000);
    } else {
      setQuizMsg("Try again baby 🥺💞");
      setTimeout(() => setQuizMsg(""), 1500);
    }
  };

  const moveNoButton = () => {
    const x = Math.random() * 250 - 125;
    const y = Math.random() * 250 - 125;
    setNoPos({ x, y });
  };

  const handleYes = () => {
    triggerConfetti();
    setTimeout(() => nextSlide(), 1500);
  };

  // Shared slide wrapper
  const Slide = ({
    children,
    visible,
  }: {
    children: React.ReactNode;
    visible: boolean;
  }) => (
    <div
      className={`fixed inset-0 z-10 flex items-center justify-center transition-all duration-700 ${
        visible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-full max-w-lg mx-auto px-6 text-center">{children}</div>
    </div>
  );

  // Slide 6 is scrollable
  const isFinalSlide = slide === 5;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-accent overflow-hidden">
      <FloatingHearts />
      <GlowParticles />
      <HeartCursorTrail />
      <Confetti active={confetti} />

      {/* Slide 1 – Opening */}
      <Slide visible={slide === 0}>
        <h1 className="text-5xl md:text-7xl font-vibes text-foreground mb-8 animate-fade-in-up">
          Will you answer my question? 💌
        </h1>
        <button
          onClick={nextSlide}
          className="px-10 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-poppins font-medium text-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse-glow"
        >
          Yes ❤️
        </button>
      </Slide>

      {/* Slide 2 – Quiz */}
      <Slide visible={slide === 1}>
        <h2 className="text-3xl md:text-5xl font-vibes text-foreground mb-8 animate-fade-in-up">
          On which day did we propose each other? 💕
        </h2>
        <div className="flex flex-col gap-3">
          {["25th of Jan", "26th of Jan", "28th of Jan"].map((opt) => (
            <button
              key={opt}
              onClick={() => handleQuiz(opt)}
              className="px-6 py-3 rounded-full bg-card/70 backdrop-blur-sm border border-primary/20 font-poppins text-foreground hover:bg-primary/20 transition-all duration-300 hover:scale-105"
            >
              {opt}
            </button>
          ))}
        </div>
        {quizMsg && (
          <p className="mt-6 font-playfair text-xl text-primary animate-scale-in">
            {quizMsg}
          </p>
        )}
      </Slide>

      {/* Slide 3 – Love Statement */}
      <Slide visible={slide === 2}>
        <h2 className="text-3xl md:text-4xl font-vibes text-foreground mb-6 animate-fade-in-up">
          I love you so much… and I will keep loving you more every single day
          💞
        </h2>
        <p
          className="font-poppins text-sm md:text-base text-foreground/80 leading-relaxed mb-8 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          You came into my life like the most beautiful dream, Shruu — ek aisa
          khwaab jise main kabhi tootne nahi dena chahta.
          <br />
          <br />
          Every second with you feels magical, baby. Tumhari hasi meri duniya
          roshan kar deti hai. Tumhari care mujhe ek sukoon deti hai jo kahin
          aur nahi milta.
          <br />
          <br />
          The way you love me… it feels like home. Sach kahu toh, tum meri
          duniya ho.
        </p>
        <button
          onClick={nextSlide}
          className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-poppins font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Want to see More? ✨💖
        </button>
      </Slide>

      {/* Slide 4 – Blushing */}
      <Slide visible={slide === 3}>
        <h2 className="text-4xl md:text-5xl font-vibes text-foreground mb-6 animate-fade-in-up">
          How are you this beautiful? 🌸
        </h2>
        <p
          className="font-poppins text-sm md:text-base text-foreground/80 leading-relaxed mb-8 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          Shruu, tum itni charming kaise ho? Your smile lights up my entire
          world.
          <br />
          <br />
          Tumhari aankhon mein meri poori duniya hai. Your love is gentle, pure,
          and safe.
          <br />
          <br />
          Jab tum blush karti ho na… meri heartbeat fast ho jaati hai.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => setBlushPopup(true)}
            className="px-6 py-3 rounded-full bg-card/70 backdrop-blur-sm border border-primary/20 font-poppins text-foreground hover:bg-primary/20 transition-all duration-300 hover:scale-105"
          >
            I am blushing 🙈💗
          </button>
          <button
            onClick={nextSlide}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-poppins font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Want to see magic? ✨💫
          </button>
        </div>

        {/* Blush popup */}
        {blushPopup && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/10 backdrop-blur-sm"
            onClick={() => setBlushPopup(false)}
          >
            <div className="bg-card/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-primary/20 animate-scale-in max-w-sm mx-4">
              <p className="font-playfair text-xl text-foreground italic">
                I like you even more when you blush, baby 💞✨
              </p>
              <div className="mt-4 flex justify-center gap-1 text-2xl animate-wiggle">
                💖 ✨ 💗 ✨ 💖
              </div>
            </div>
          </div>
        )}
      </Slide>

      {/* Slide 5 – Proposal */}
      <Slide visible={slide === 4}>
        <h2 className="text-4xl md:text-6xl font-vibes text-foreground mb-10 animate-fade-in-up">
          Will you be my Valentine? 💍💗
        </h2>
        <div className="flex gap-6 justify-center items-center relative min-h-[80px]">
          <button
            onClick={handleYes}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-poppins font-semibold text-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse-glow z-10"
          >
            Yes 💘
          </button>
          <button
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
            className="px-8 py-3 rounded-full bg-card/60 backdrop-blur-sm border border-primary/20 font-poppins text-foreground/60 transition-all duration-200 z-10"
            style={{
              transform: noPos
                ? `translate(${noPos.x}px, ${noPos.y}px)`
                : undefined,
              position: noPos ? "relative" : undefined,
            }}
          >
            No 💔
          </button>
        </div>
      </Slide>

      {/* Slide 6 – Final Cinematic Reveal */}
      {isFinalSlide && (
        <div className="relative z-10 min-h-screen animate-fade-in">
          <MusicPlayer />

          <h2
            className="text-4xl md:text-6xl font-vibes text-center mb-10 
               bg-gradient-to-r from-primary via-accent to-primary 
               bg-clip-text text-transparent 
               drop-shadow-lg animate-fade-in-up"
          >

            Our Little Memories ✨💗
          </h2>

          {/* Carousel */}
          <section className="px-6 pb-12">
            <PhotoCarousel />
          </section>

          {/* Timeline */}
          <section className="px-6 pb-12">
            <Timeline />
          </section>

          {/* Love Letter */}
          <section className="px-6 pb-20">
            <TypewriterLetter />
          </section>

          <footer className="text-center pb-10 font-vibes text-2xl text-foreground/50">
            Forever yours 💗
          </footer>
        </div>
      )}
    </div>
  );
};

export default Index;
