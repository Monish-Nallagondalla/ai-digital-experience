import { useEffect, useState, useRef } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [trailPositions, setTrailPositions] = useState<Array<{x: number, y: number}>>([]);
  
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const lastUpdateTime = useRef<number>(0);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastUpdateTime.current < 10) return;
      lastUpdateTime.current = now;
      
      const newPosition = { x: e.clientX, y: e.clientY };
      setPosition(newPosition);
      
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${e.clientX}px`;
        cursorDotRef.current.style.top = `${e.clientY}px`;
      }
      
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.left = `${e.clientX}px`;
        cursorOutlineRef.current.style.top = `${e.clientY}px`;
      }
      
      setTimeout(() => {
        setTrailPositions(prev => {
          const newTrail = [...prev, newPosition];
          if (newTrail.length > 15) {
            return newTrail.slice(newTrail.length - 15);
          }
          return newTrail;
        });
      }, 8);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const handleElementHoverEvents = () => {
      const linkElements = document.querySelectorAll("a, .interactive");
      const buttonElements = document.querySelectorAll("button, .neon-button-orange, .neon-button-blue, .neon-button-green, input[type='submit']");
      
      linkElements.forEach(el => {
        el.addEventListener("mouseenter", () => setLinkHovered(true));
        el.addEventListener("mouseleave", () => setLinkHovered(false));
      });
      
      buttonElements.forEach(el => {
        el.addEventListener("mouseenter", () => setButtonHovered(true));
        el.addEventListener("mouseleave", () => setButtonHovered(false));
      });
    };

    document.body.style.cursor = "none";
    document.querySelectorAll("a, button, input, .interactive").forEach(el => {
      (el as HTMLElement).style.cursor = "none";
    });

    addEventListeners();
    handleElementHoverEvents();

    return () => {
      removeEventListeners();
    };
  }, []);

  const cursorDotClasses = `custom-cursor cursor-dot ${
    clicked ? "scale-50" : ""
  } ${hidden ? "opacity-0" : "opacity-100"} ${
    linkHovered ? "bg-neon-orange" : buttonHovered ? "bg-neon-blue" : ""
  }`;

  const cursorOutlineClasses = `custom-cursor cursor-outline ${
    clicked ? "scale-75" : ""
  } ${linkHovered ? "scale-150 border-neon-orange" : buttonHovered ? "scale-175 border-neon-blue" : ""} ${
    hidden ? "opacity-0" : "opacity-100"
  }`;

  return (
    <>
      {trailPositions.map((pos, index) => (
        <div
          key={index}
          className="custom-cursor cursor-trail"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            opacity: (index + 1) / trailPositions.length * 0.6,
            transform: `scale(${0.1 + (index / trailPositions.length) * 0.7})`,
            backgroundColor: index % 3 === 0 ? 'rgba(255, 95, 31, 0.8)' : 
                            index % 3 === 1 ? 'rgba(0, 255, 127, 0.8)' : 'rgba(0, 255, 255, 0.8)',
            filter: `blur(${Math.max(0, (trailPositions.length - index) / 4)}px)`,
            transition: 'opacity 0.15s ease, transform 0.15s ease'
          }}
        />
      ))}
      
      <div
        ref={cursorDotRef}
        className={cursorDotClasses}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          boxShadow: buttonHovered 
            ? '0 0 15px rgba(0, 255, 255, 0.9), 0 0 30px rgba(0, 255, 255, 0.4)' 
            : linkHovered 
              ? '0 0 15px rgba(255, 95, 31, 0.9), 0 0 30px rgba(255, 95, 31, 0.4)' 
              : '0 0 12px rgba(255, 255, 255, 0.9), 0 0 24px rgba(255, 255, 255, 0.3)'
        }}
      />
      
      <div
        ref={cursorOutlineRef}
        className={cursorOutlineClasses}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          borderColor: buttonHovered 
            ? 'rgba(0, 255, 255, 0.8)' 
            : linkHovered 
              ? 'rgba(255, 95, 31, 0.8)' 
              : 'rgba(255, 255, 255, 0.7)',
          boxShadow: buttonHovered 
            ? '0 0 10px rgba(0, 255, 255, 0.5)' 
            : linkHovered 
              ? '0 0 10px rgba(255, 95, 31, 0.5)' 
              : 'none'
        }}
      />
    </>
  );
};

export default CustomCursor;
