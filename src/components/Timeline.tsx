const events = [
  {
    date: "25th January",
    emoji: "💖",
    title: "The day you accepted my proposal",
    caption:
      "The day my world changed forever. The day we became us.",
  },
  {
    date: "2nd February",
    emoji: "💋",
    title: "Our first date & our first kiss",
    caption:
      "The day I realized my world feels incomplete without you. Our first date was magical, but that first kiss? It was like the universe paused just for us.",
  },
  {
    date: "The First 'I Love You' 💌",
    emoji: "❤️",
    title: "When words finally matched our feelings",
    caption:
      "That moment when we said 'I love you' and everything felt different — deeper, safer, forever.",
  },
  {
    date: "Our Late Night Talks 🌙",
    emoji: "📱",
    title: "Endless conversations until sleep",
    caption:
      "Those nights where time disappeared and it was just you and me against the world.",
  },
  {
    date: "The Day We Truly Understood Each Other 🤍",
    emoji: "🫶",
    title: "When love felt peaceful",
    caption:
      "Not just butterflies… but comfort. Not just excitement… but calm. That’s when I knew this was real.",
  },
  {
    date: "Every Day Since Then ✨",
    emoji: "💞",
    title: "Falling for you more and more",
    caption:
      "Somehow, every single day, I love you a little deeper than the day before.",
  },
];

const Timeline = () => (
  <div className="w-full max-w-3xl mx-auto py-16 px-6">
    {/* Heading */}
    <h2
      className="text-4xl md:text-6xl font-vibes text-center 
                 bg-gradient-to-r from-primary via-accent to-primary 
                 bg-clip-text text-transparent 
                 drop-shadow-lg mb-16"
    >
      Our Love Story 💗
    </h2>

    <div className="relative">

      {/* Vertical glowing line */}
      <div
        className="absolute left-6 top-0 bottom-0 w-1 
                   bg-gradient-to-b from-primary/30 via-primary to-primary/30 
                   rounded-full blur-[1px]"
      />

      {events.map((event, i) => (
        <div
          key={i}
          className="relative flex items-start gap-8 mb-14 animate-fade-in-up"
          style={{ animationDelay: `${i * 0.3}s` }}
        >
          {/* Glowing emoji circle */}
          <div
            className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full 
                       bg-primary/20 backdrop-blur-md 
                       border border-primary/40
                       flex items-center justify-center 
                       shadow-lg animate-pulse-glow"
          >
            <span className="text-xl">{event.emoji}</span>
          </div>

          {/* Glass card */}
          <div
            className="bg-card/60 backdrop-blur-md 
                       border border-primary/20 
                       rounded-2xl p-6 shadow-xl 
                       hover:scale-[1.02] transition-all duration-500"
          >
            <p className="font-poppins font-semibold text-primary text-sm tracking-wide">
              {event.date}
            </p>

            <p className="font-playfair font-semibold text-foreground mt-2 text-lg">
              {event.title}
            </p>

            <p className="font-poppins text-muted-foreground text-sm mt-2 italic leading-relaxed">
              "{event.caption}"
            </p>
          </div>
        </div>
      ))}

      {/* Ending */}
      <div className="text-center mt-10 animate-fade-in">
        <p className="font-playfair text-2xl md:text-3xl text-primary italic">
          To be continued… my love ❤️
        </p>
      </div>
    </div>
  </div>
);

export default Timeline;