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
    <div className="w-full max-w-5xl mx-auto py-16 px-4 md:px-8 text-center">

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-vibes mb-4 
                     bg-gradient-to-r from-primary via-accent to-primary 
                     bg-clip-text text-transparent drop-shadow-lg">
        We've Been Loving Each Other For ✨💞
      </h2>

      <p className="font-poppins text-sm md:text-base text-muted-foreground mb-10">
        Every single moment since 25th January 2026 ❤️
      </p>

      {/* Outer Box */}
      <div className="bg-card/60 backdrop-blur-md 
                      border border-primary/30 
                      rounded-3xl p-6 md:p-10 shadow-2xl">

        {/* Responsive Grid */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">

          {/* Hours */}
          <TimeBox
            value={time.hours}
            label="Total Hours 💖"
          />

          {/* Minutes */}
          <TimeBox
            value={time.minutes.toString().padStart(2, "0")}
            label="Minutes 💕"
          />

          {/* Seconds */}
          <TimeBox
            value={time.seconds.toString().padStart(2, "0")}
            label="Seconds 💗"
            pulse
          />

        </div>
      </div>
    </div>
  );
};

const TimeBox = ({
  value,
  label,
  pulse = false,
}: {
  value: string | number;
  label: string;
  pulse?: boolean;
}) => (
  <div className="w-full sm:w-48 bg-background/50 
                  border border-primary/30 
                  rounded-2xl p-6 shadow-lg
                  transition-all duration-500 
                  hover:scale-105 hover:shadow-xl">

    <p className={`text-4xl md:text-5xl font-playfair text-primary ${
      pulse ? "animate-pulse" : ""
    }`}>
      {value}
    </p>

    <p className="font-poppins text-xs md:text-sm text-muted-foreground mt-2">
      {label}
    </p>
  </div>
);

export default RelationshipTimer;