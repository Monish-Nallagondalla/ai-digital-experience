import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [trailPositions, setTrailPositions] = useState<Array<{x: number, y: number}>>([]);

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
      const newPosition = { x: e.clientX, y: e.clientY };
      setPosition(newPosition);
      
      // Add current position to trail with some delay
      setTimeout(() => {
        setTrailPositions(prev => {
          const newTrail = [...prev, newPosition];
          // Keep only the last 8 positions for the trail
          if (newTrail.length > 8) {
            return newTrail.slice(newTrail.length - 8);
          }
          return newTrail;
        });
      }, 10);
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

    const handleLinkHoverEvents = () => {
      document.querySelectorAll("a, button, .interactive").forEach((el) => {
        el.addEventListener("mouseenter", () => setLinkHovered(true));
        el.addEventListener("mouseleave", () => setLinkHovered(false));
      });
    };

    addEventListeners();
    handleLinkHoverEvents();

    return () => {
      removeEventListeners();
    };
  }, []);

  // More dynamic cursor classes with animation effects
  const cursorDotClasses = `custom-cursor cursor-dot ${
    clicked ? "scale-50" : ""
  } ${hidden ? "opacity-0" : "opacity-100"} ${
    linkHovered ? "bg-neon-orange" : ""
  }`;

  const cursorOutlineClasses = `custom-cursor cursor-outline ${
    clicked ? "scale-75" : ""
  } ${linkHovered ? "scale-150 border-neon-orange" : ""} ${
    hidden ? "opacity-0" : "opacity-100"
  }`;

  return (
    <>
      {/* Enhanced cursor trail with more particles */}
      {trailPositions.map((pos, index) => (
        <div
          key={index}
          className="custom-cursor cursor-trail"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            opacity: (index + 1) / trailPositions.length * 0.4,
            transform: `scale(${0.2 + (index / trailPositions.length) * 0.5})`,
            backgroundColor: index % 3 === 0 ? 'rgba(255, 95, 31, 0.6)' : 
                            index % 3 === 1 ? 'rgba(0, 255, 127, 0.6)' : 'rgba(0, 255, 255, 0.6)',
          }}
        />
      ))}
      
      {/* Main cursor dot */}
      <div
        className={cursorDotClasses}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      
      {/* Cursor outline */}
      <div
        className={cursorOutlineClasses}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};

export default CustomCursor;
