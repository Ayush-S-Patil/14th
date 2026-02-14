import { useEffect } from "react";

const HeartCursorTrail = () => {
  useEffect(() => {
    const createHeart = (x: number, y: number) => {
      const heart = document.createElement("span");

      heart.innerHTML = "💖";
      heart.style.position = "fixed";
      heart.style.left = `${x}px`;
      heart.style.top = `${y}px`;
      heart.style.pointerEvents = "none";
      heart.style.fontSize = `${12 + Math.random() * 8}px`;
      heart.style.zIndex = "9999";
      heart.style.transition = "all 1s ease-out";
      heart.style.transform = "translate(-50%, -50%) scale(1)";
      heart.style.opacity = "1";
      heart.style.filter = "drop-shadow(0 0 6px rgba(255,105,180,0.7))";

      document.body.appendChild(heart);

      // Animate
      requestAnimationFrame(() => {
        heart.style.transform = `translate(-50%, -80%) scale(0.6)`;
        heart.style.opacity = "0";
      });

      setTimeout(() => {
        heart.remove();
      }, 1000);
    };

    let lastTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < 70) return; // smoother premium throttle
      lastTime = now;

      createHeart(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
};

export default HeartCursorTrail;