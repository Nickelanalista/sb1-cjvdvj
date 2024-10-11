import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gradient-to-r from-purple-900 to-blue-900 shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className={`text-2xl font-bold transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'} text-yellow-400`}>
          Nicolás Guerra
        </h1>
        <nav className="hidden md:flex items-center space-x-6">
          {['Sobre mí', 'Experiencia', 'Educación', 'Proyectos', 'Contacto'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-yellow-400 hover:text-yellow-300 transition-colors">
              {item}
            </a>
          ))}
          <button onClick={toggleTheme} className="p-2 rounded-full bg-yellow-400 text-purple-900">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </nav>
        <div className="md:hidden flex items-center">
          <button onClick={toggleTheme} className="mr-4 p-2 rounded-full bg-yellow-400 text-purple-900">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} className="text-yellow-400" /> : <Menu size={24} className="text-yellow-400" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-gradient-to-r from-purple-900 to-blue-900 shadow-md">
          <ul className="flex flex-col items-center py-4">
            {['Sobre mí', 'Experiencia', 'Educación', 'Proyectos', 'Contacto'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="block py-2 text-yellow-400 hover:text-yellow-300" onClick={() => setIsMenuOpen(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;