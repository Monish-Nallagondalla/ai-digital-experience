
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [magneticPosition, setMagneticPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  // Only enable magnetic effects on non-touch devices
  const handleMouseMove = (e: React.MouseEvent) => {
    if (window.matchMedia('(hover: hover)').matches && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      const strength = 15;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      const maxDistance = rect.width / 2;
      
      if (distance < maxDistance) {
        const x = (distanceX / maxDistance) * strength;
        const y = (distanceY / maxDistance) * strength;
        setMagneticPosition({ x, y });
      } else {
        setMagneticPosition({ x: 0, y: 0 });
      }
    }
  };

  const handleMouseLeave = () => {
    setMagneticPosition({ x: 0, y: 0 });
  };

  return (
    <header
      ref={navRef}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled || isMenuOpen
          ? "bg-black/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          <Link
            to="/"
            className="text-xl sm:text-2xl font-bold text-white hover:text-neon-orange transition-colors duration-300"
          >
            <span className="text-neon-orange">Apply</span>
            <span className="text-neon-blue">Ai</span>
            <span className="text-white">.today</span>
          </Link>

          <nav className="hidden md:flex space-x-5 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-base lg:text-lg font-medium transition-all duration-300 relative group ${
                  location.pathname === link.path
                    ? "text-neon-blue"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                    location.pathname === link.path
                      ? "w-full bg-neon-blue"
                      : "bg-neon-orange"
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          <div 
            className="hidden md:block"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              ref={buttonRef}
              to="/contact"
              className="neon-button-orange magnetic-button-enhanced px-4 py-2 lg:px-6 lg:py-2.5 text-sm lg:text-base"
              style={{ 
                transform: window.matchMedia('(hover: hover)').matches ? 
                  `translate(${magneticPosition.x}px, ${magneticPosition.y}px)` : 
                  'translate(0px, 0px)',
                transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)'
              }}
            >
              <span className="relative z-10 flex items-center justify-center">Get Started</span>
            </Link>
          </div>

          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 pt-16 top-0 z-40 bg-black/95 backdrop-blur-md flex flex-col justify-start items-center transition-all duration-300 transform ${
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        } md:hidden`}
      >
        <nav className="flex flex-col space-y-6 items-center mt-8 w-full px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xl sm:text-2xl font-medium transition-all duration-300 relative group w-full text-center py-3 ${
                location.pathname === link.path
                  ? "text-neon-blue"
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                  location.pathname === link.path
                    ? "w-full bg-neon-blue"
                    : "bg-neon-orange"
                }`}
              ></span>
            </Link>
          ))}
          <Link
            to="/contact"
            className="neon-button-orange w-full text-center px-8 py-3 mt-6"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="relative z-10">Get Started</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
