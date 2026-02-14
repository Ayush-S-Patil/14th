import { useEffect, useState } from "react";

const startDate = new Date("2026-01-25T00:00:00");

const RelationshipTimer = () => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const totalHours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTime({
        hours: totalHours,
        minutes,
        seconds,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto py-16 px-6 text-center">

      {/* Noticeable Romantic Heading */}
      <h2 className="text-4xl md:text-5xl font-vibes mb-6 
                     bg-gradient-to-r from-primary via-accent to-primary 
                     bg-clip-text text-transparent drop-shadow-lg">
        We've Been Loving Each Other For ✨💞
      </h2>

      <p className="font-poppins text-muted-foreground mb-12">
        Every single moment since 25th January 2026 ❤️
      </p>

      {/* Main Timer Box */}
      <div className="bg-card/60 backdrop-blur-md 
                      border border-primary/30 
                      rounded-3xl p-10 shadow-2xl">

        <div className="grid grid-cols-3 gap-6">

          {/* Total Hours */}
          <div className="bg-background/50 border border-primary/30 
                          rounded-2xl p-6 shadow-lg 
                          transition-all duration-500 hover:scale-105">
            <p className="text-4xl md:text-5xl font-playfair text-primary">
              {time.hours}
            </p>
            <p className="font-poppins text-sm text-muted-foreground mt-2">
              Hours 💖
            </p>
          </div>

          {/* Minutes 0-59 */}
          <div className="bg-background/50 border border-primary/30 
                          rounded-2xl p-6 shadow-lg 
                          transition-all duration-500 hover:scale-105">
            <p className="text-4xl md:text-5xl font-playfair text-primary">
              {time.minutes.toString().padStart(2, "0")}
            </p>
            <p className="font-poppins text-sm text-muted-foreground mt-2">
              Minutes 💕
            </p>
          </div>

          {/* Seconds 0-59 */}
          <div className="bg-background/50 border border-primary/30 
                          rounded-2xl p-6 shadow-lg 
                          transition-all duration-500 hover:scale-105">
            <p className="text-4xl md:text-5xl font-playfair text-primary animate-pulse">
              {time.seconds.toString().padStart(2, "0")}
            </p>
            <p className="font-poppins text-sm text-muted-foreground mt-2">
              Seconds 💗
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RelationshipTimer;