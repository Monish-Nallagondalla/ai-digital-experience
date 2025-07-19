
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled || isMenuOpen
          ? "bg-background/95 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          <Link
            to="/"
            className="text-xl sm:text-2xl font-bold text-foreground hover:text-primary transition-colors duration-300"
          >
            <span className="text-primary">Apply</span>
            <span className="text-accent">AI</span>
            <span className="text-foreground">.today</span>
          </Link>

          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-base lg:text-lg font-medium transition-all duration-300 relative group ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                    location.pathname === link.path
                      ? "w-full bg-primary"
                      : "bg-accent"
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="btn-primary hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden text-foreground focus:outline-none z-50 relative p-2"
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
          <div className="absolute inset-0 bg-background/98 backdrop-blur-md">
            <div className="flex flex-col items-center justify-center min-h-screen container-padding pt-20 pb-8">
              <nav className="flex flex-col space-y-8 items-center w-full max-w-sm">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-2xl font-medium transition-colors duration-300 relative group text-center py-2 ${
                      location.pathname === link.path
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                    <span
                      className={`absolute -bottom-1 left-1/2 w-0 h-[2px] transition-all duration-300 group-hover:w-full group-hover:left-0 ${
                        location.pathname === link.path
                          ? "w-full left-0 bg-primary"
                          : "bg-accent"
                      }`}
                    ></span>
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="btn-primary w-full text-center px-8 py-4 mt-8 text-lg"
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
