
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [magneticPosition, setMagneticPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
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
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    if (buttonRef.current && window.matchMedia('(hover: hover)').matches) {
      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      const strength = 10;
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
            className="text-xl sm:text-2xl font-bold text-white hover:text-orange-400 transition-colors duration-300"
          >
            <span className="text-orange-400">Apply</span>
            <span className="text-blue-400">Ai</span>
            <span className="text-white">.today</span>
          </Link>

          <nav className="hidden md:flex space-x-5 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-base lg:text-lg font-medium transition-all duration-300 relative group ${
                  location.pathname === link.path
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                    location.pathname === link.path
                      ? "w-full bg-blue-400"
                      : "bg-orange-400"
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
              className="inline-flex items-center justify-center px-4 py-2 lg:px-6 lg:py-2.5 text-sm lg:text-base font-medium text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ 
                transform: window.matchMedia('(hover: hover)').matches ? 
                  `translate(${magneticPosition.x}px, ${magneticPosition.y}px) scale(1.05)` : 
                  'translate(0px, 0px) scale(1)',
                transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)'
              }}
            >
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden text-white focus:outline-none z-50 relative mobile-menu-button"
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

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md">
            <div className="flex flex-col items-center justify-center min-h-screen px-6 pt-20 pb-8">
              <nav className="flex flex-col space-y-8 items-center w-full max-w-sm">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-2xl font-medium transition-colors duration-300 relative group text-center py-2 ${
                      location.pathname === link.path
                        ? "text-blue-400"
                        : "text-gray-300 hover:text-white"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                    <span
                      className={`absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                        location.pathname === link.path
                          ? "w-full bg-blue-400"
                          : "bg-orange-400"
                      }`}
                    ></span>
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full text-center px-8 py-4 mt-8 text-lg font-medium text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
