import { useEffect, useState } from "react";

interface Props {
  onFinish: () => void;
}

const RibbonReveal = ({ onFinish }: Props) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // start opening after small delay
    const timer = setTimeout(() => {
      setOpen(true);
    }, 350);

    // remove after animation
    const finish = setTimeout(() => {
      onFinish();
    }, 1250);

    return () => {
      clearTimeout(timer);
      clearTimeout(finish);
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-background overflow-hidden">
      
      {/* Left Ribbon */}
      <div
        className={`absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-primary to-accent 
        transition-transform duration-[2000ms] ease-in-out
        ${open ? "-translate-x-full" : "translate-x-0"}`}
      />

      {/* Right Ribbon */}
      <div
        className={`absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-primary to-accent 
        transition-transform duration-[2000ms] ease-in-out
        ${open ? "translate-x-full" : "translate-x-0"}`}
      />

      {/* Ribbon Center Bow */}
      <div className="absolute z-10 text-6xl animate-pulse">
        🎀
      </div>
    </div>
  );
};

export default RibbonReveal;