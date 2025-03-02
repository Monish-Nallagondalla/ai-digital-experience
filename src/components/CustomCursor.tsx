
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
  const orbitalParticlesRef = useRef<HTMLDivElement[]>([]);

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
      if (now - lastUpdateTime.current < 8) return; // Higher refresh rate for smoother cursor
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
      
      // Update orbital positions
      orbitalParticlesRef.current.forEach((particle, index) => {
        if (particle) {
          const angle = (index / orbitalParticlesRef.current.length) * Math.PI * 2;
          const distance = 15; // Orbital radius
          particle.style.left = `${e.clientX}px`;
          particle.style.top = `${e.clientY}px`;
          particle.style.animationDelay = `${-index * 0.2}s`;
        }
      });
      
      setTimeout(() => {
        setTrailPositions(prev => {
          const newTrail = [...prev, newPosition];
          if (newTrail.length > 20) { // More trail particles
            return newTrail.slice(newTrail.length - 20);
          }
          return newTrail;
        });
      }, 5); // Faster trail update
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
      const buttonElements = document.querySelectorAll("button, .neon-button-orange, .neon-button-blue, .neon-button-green, .magnetic-button-enhanced, input[type='submit']");
      
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

  // Create refs for orbital particles
  useEffect(() => {
    orbitalParticlesRef.current = Array(4).fill(null).map(() => document.createElement('div'));
    orbitalParticlesRef.current.forEach(particle => {
      particle.className = 'custom-cursor cursor-orbital';
      document.body.appendChild(particle);
    });

    return () => {
      orbitalParticlesRef.current.forEach(particle => {
        if (particle && document.body.contains(particle)) {
          document.body.removeChild(particle);
        }
      });
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
            opacity: (index + 1) / trailPositions.length * 0.7,
            transform: `scale(${0.1 + (index / trailPositions.length) * 0.8})`,
            backgroundColor: index % 3 === 0 ? 'rgba(255, 95, 31, 0.85)' : 
                            index % 3 === 1 ? 'rgba(0, 255, 127, 0.85)' : 'rgba(0, 255, 255, 0.85)',
            filter: `blur(${Math.max(0, (trailPositions.length - index) / 5)}px)`,
            transition: 'opacity 0.12s ease, transform 0.12s ease'
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
            ? '0 0 20px rgba(0, 255, 255, 0.95), 0 0 40px rgba(0, 255, 255, 0.5)' 
            : linkHovered 
              ? '0 0 20px rgba(255, 95, 31, 0.95), 0 0 40px rgba(255, 95, 31, 0.5)' 
              : '0 0 15px rgba(255, 255, 255, 0.95), 0 0 30px rgba(255, 255, 255, 0.4)'
        }}
      />
      
      <div
        ref={cursorOutlineRef}
        className={cursorOutlineClasses}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          borderColor: buttonHovered 
            ? 'rgba(0, 255, 255, 0.9)' 
            : linkHovered 
              ? 'rgba(255, 95, 31, 0.9)' 
              : 'rgba(255, 255, 255, 0.8)',
          boxShadow: buttonHovered 
            ? '0 0 15px rgba(0, 255, 255, 0.6)' 
            : linkHovered 
              ? '0 0 15px rgba(255, 95, 31, 0.6)' 
              : 'none'
        }}
      />
    </>
  );
};

export default CustomCursor;
