import { useState } from "react";

const letterText = `You came into my life like the most beautiful dream, Shruu — the kind I never want to wake up from. From the moment you became mine, everything started to feel brighter and more meaningful. Jaise meri zindagi mein achanak se roshni aa gayi ho. Every second with you feels magical, baby. When you laugh, it feels like the whole world is in the right place. The way you care for me makes me feel safe in ways I never even knew I needed. And the way you love me… it feels like home, Shruu — jaise main finally apni jagah pe hoon.

I am so grateful for you, baby. Tumne meri zindagi ko sirf badla nahi, usse khoobsurat bana diya. Because of you, I smile more, hope more, and love more. Tumhare saath har chhoti si cheez bhi special lagti hai. Kabhi kabhi bas tumhe dekh kar hi dil shant ho jata hai.

I love you more than words can explain. I love you in our quiet moments, in our loud laughter, in our silly talks and deep conversations — in every version of us. Har mood mein, har pal mein, tum mere liye perfect ho. My love for you grows stronger every single day, Shruu, and sometimes it amazes me how deeply I feel for you.

I want to grow with you, dream with you, and build a lifetime of memories with you, baby. Main har mushkil mein tumhara haath pakad kar chalna chahta hoon. You are my peace, my strength, my happiness. Tum meri aadat nahi ho, tum meri zarurat ho. You are not just my love — you are my forever.

No words will ever be enough to describe how much I love you, Shruu… but I promise to show you every single day. Hamesha tumhara, har din, har pal. Forever and always, baby. 💞

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
