import cuteImg from "@/assets/photo-cute.jpeg";
import charmingImg from "@/assets/photo-charming.jpeg";
import playfulImg from "@/assets/photo-playful.jpeg";
import pureImg from "@/assets/photo-pure.jpeg";

const cards = [
  {
    img: cuteImg,
    title: "Your Cute Little World 🥺",
    text: `The way you hide your face and smile softly…
it melts my heart every single time.
Your innocence and simplicity — baby, that’s my favorite part of you 💘.`,
  },
  {
    img: charmingImg,
    title: "Your Grace & Charm ✨",
    text: `The way you carry yourself with such elegance,
the softness in your eyes, the confidence in your smile —
Shruu, you don’t just enter a room… you light it up my Love 💖.`,
  },
  {
    img: playfulImg,
    title: "Your Playful Soul 🌼",
    text: `That cute little attitude, that playful energy,
the way you act all strong but still so adorable —
I love this childish side of you more than you know my Baby Gurl 💗.`,
  },
  {
    img: pureImg,
    title: "Your Pure Heart 🤍",
    text: `The way you love animals so gently shows who you truly are.
Your heart is soft, kind, and beautifully pure.
And that’s why loving you feels so right 🌟.`,
  },
];

const AboutHerCards = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-20 px-6">
      
      {/* Section Title */}
      <h2
        className="text-4xl md:text-6xl font-vibes text-center 
                   bg-gradient-to-r from-primary via-accent to-primary 
                   bg-clip-text text-transparent 
                   drop-shadow-lg mb-16"
      >
        The Reasons I Adore You 💗
      </h2>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 gap-12">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card-glow group relative overflow-hidden
                       bg-card/70 backdrop-blur-md
                       rounded-3xl p-6 shadow-lg
                       transition-all duration-500
                       hover:shadow-2xl hover:-translate-y-3"
          >
            {/* ✨ Soft Shine Overlay */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none
                         bg-gradient-to-tr from-white/10 via-transparent to-white/5
                         opacity-0 group-hover:opacity-100
                         transition duration-500"
            ></div>

            {/* Image Container */}
            <div className="w-full bg-white/40 rounded-2xl p-4 mb-6 flex items-center justify-center">
              <img
                src={card.img}
                alt={card.title}
                className="max-h-80 w-auto object-contain rounded-xl transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Title */}
            <h3 className="font-playfair text-2xl text-foreground mb-4">
              {card.title}
            </h3>

            {/* Text */}
            <p className="font-poppins text-muted-foreground leading-relaxed whitespace-pre-line">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutHerCards;