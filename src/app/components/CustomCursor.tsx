import { useState, useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let animFrameId: number;
    let ringX = 0, ringY = 0;
    let dotX = 0, dotY = 0;
    let targetX = 0, targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const onMouseEnter = () => setHovered(true);
    const onMouseLeave = () => setHovered(false);

    const animate = () => {
      // Dot follows instantly
      dotX += (targetX - dotX) * 0.9;
      dotY += (targetY - dotY) * 0.9;

      // Ring follows lazily
      ringX += (targetX - ringX) * 0.12;
      ringY += (targetY - ringY) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.left = `${dotX}px`;
        dotRef.current.style.top = `${dotY}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }

      animFrameId = requestAnimationFrame(animate);
    };

    const interactiveElements = () =>
      document.querySelectorAll("a, button, [role='button'], input, textarea, select, label");

    const addHoverListeners = () => {
      interactiveElements().forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnter);
        el.addEventListener("mouseleave", onMouseLeave);
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    animFrameId = requestAnimationFrame(animate);
    addHoverListeners();

    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className={`cursor-dot${hovered ? " hovered" : ""}`}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className={`cursor-ring${hovered ? " hovered" : ""}`}
        aria-hidden="true"
      />
    </>
  );
}
