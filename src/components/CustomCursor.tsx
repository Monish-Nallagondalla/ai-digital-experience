
import { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [touchDevice, setTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    const isTouchDevice = () => {
      return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
    };

    setTouchDevice(isTouchDevice());
    
    // If it's a touch device, don't show the custom cursor
    if (isTouchDevice()) {
      return;
    }

    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("visibilitychange", onVisibilityChange);
      addLinkHoverListener();
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      removeLinkHoverListener();
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
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

    const onVisibilityChange = () => {
      if (document.hidden) {
        setHidden(true);
      } else {
        setTimeout(() => {
          setHidden(false);
        }, 300);
      }
    };

    const addLinkHoverListener = () => {
      const links = document.querySelectorAll("a, button, .interactive, input[type='submit']");
      links.forEach((link) => {
        link.addEventListener("mouseenter", handleLinkHoverEnter);
        link.addEventListener("mouseleave", handleLinkHoverLeave);
      });
    };

    const removeLinkHoverListener = () => {
      const links = document.querySelectorAll("a, button, .interactive, input[type='submit']");
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHoverEnter);
        link.removeEventListener("mouseleave", handleLinkHoverLeave);
      });
    };

    const handleLinkHoverEnter = () => {
      setLinkHovered(true);
    };

    const handleLinkHoverLeave = () => {
      setLinkHovered(false);
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  // If it's a touch device, don't render the custom cursor
  if (touchDevice) {
    return null;
  }

  return (
    <>
      <div
        className={`custom-cursor cursor-dot ${
          hidden ? " opacity-0" : ""
        } ${clicked ? " scale-75" : ""} ${
          linkHovered ? " scale-150 bg-neon-orange" : ""
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className={`custom-cursor cursor-outline ${
          hidden ? "  opacity-0" : ""
        } ${clicked ? " scale-75" : ""} ${
          linkHovered ? " scale-150 border-neon-orange" : ""
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};

export default CustomCursor;
