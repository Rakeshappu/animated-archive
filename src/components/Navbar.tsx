
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-neutral-light/90 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-primary font-semibold text-2xl">
            Portfolio
          </Link>
          <div className="hidden md:flex space-x-8">
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
      </div>
    </nav>
  );
};

export default Navbar;
