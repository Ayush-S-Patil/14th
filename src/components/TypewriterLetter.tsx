import { useState } from "react";

const letterText = `You came into my life like the most beautiful dream, Shruu — the kind I never want to wake up from. From the moment you became mine, everything around me started to feel brighter, softer, more meaningful. Every second with you feels like pure magic, baby. The way you laugh fills my heart with warmth. The way you care makes me feel safe in a way I never even knew I needed. And the way you love me… it feels like home, Shruu.

I am so unbelievably grateful for you, baby. You didn't just enter my life — you transformed it completely. You changed my world in the most beautiful, gentle, and perfect way possible. Because of you, Shruu, I smile more. I hope more. I love more.

I love you more than words can ever explain, baby. I love you in ways I didn't even know my heart was capable of loving. I love you in the quiet moments, in the loud laughter, in our silly talks, in our deep conversations — in every version of us. My love for you grows stronger every single day, Shruu, and sometimes it scares me how deeply I feel for you… but in the most beautiful way.

I want to grow with you, baby. I want to dream with you. I want to build a lifetime full of memories, adventures, comfort, and endless love with you, Shruu. I want to hold your hand through everything life brings. You are my peace in chaos, my happiness in sadness, my strength when I feel weak. You are not just my love, baby — you are my forever.

No words will ever truly be enough to describe how much I love you, Shruu… but I promise to spend every single day of my life showing you, proving it to you, and loving you more than I did the day before. Forever and always, baby. 💞

Happy Valentine's Day, baby ❤️`;

const TypewriterLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(false);

  const openLetter = () => {
    setIsOpen(true);
    setDisplayed("");
    setTyping(true);
    let index = 0;
    const interval = setInterval(() => {
      index++;
      setDisplayed(letterText.slice(0, index));
      if (index >= letterText.length) {
        clearInterval(interval);
        setTyping(false);
      }
    }, 18);
  };

  if (!isOpen) {
    return (
      <div className="text-center py-12">
        <p className="font-playfair text-lg text-foreground/70 mb-6 italic">
          I wrote something from my heart for you…
        </p>
        <button
          onClick={openLetter}
          className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-poppins font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse-glow"
        >
          Read My Letter to You 💌
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg mx-auto animate-fade-in">
      <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-primary/10">
        <h3 className="font-vibes text-3xl text-center text-foreground mb-6">My Letter to You 💌</h3>
        <div className="font-poppins text-sm md:text-base text-foreground/85 leading-relaxed whitespace-pre-line">
          {displayed}
          {typing && <span className="typewriter-cursor" />}
        </div>
      </div>
    </div>
  );
};

export default TypewriterLetter;
