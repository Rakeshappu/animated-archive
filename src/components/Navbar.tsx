
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-neutral-light/90 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-primary font-semibold text-xl sm:text-2xl">
            Portfolio
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white hover:text-primary"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <Link
              to="/skills"
              className="text-white hover:text-primary transition-colors duration-300"
            >
              Skills
            </Link>
            <Link
              to="/experience"
              className="text-white hover:text-primary transition-colors duration-300"
            >
              Experience
            </Link>
            <Link
              to="/projects"
              className="text-white hover:text-primary transition-colors duration-300"
            >
              Projects
            </Link>
            <Link
              to="/education"
              className="text-white hover:text-primary transition-colors duration-300"
            >
              Education
            </Link>
            <Link
              to="/"
              className="text-white hover:text-primary transition-colors duration-300"
            >
              About
            </Link>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-neutral-light/95 rounded-lg animate-fade-in">
            <div className="flex flex-col space-y-4 px-4">
              <Link
                to="/skills"
                className="text-white hover:text-primary transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                to="/experience"
                className="text-white hover:text-primary transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </Link>
              <Link
                to="/projects"
                className="text-white hover:text-primary transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/education"
                className="text-white hover:text-primary transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Education
              </Link>
              <Link
                to="/"
                className="text-white hover:text-primary transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
