import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 Nicolás Guerra. Todos los derechos reservados.</p>
        <p className="mt-2">Desarrollado por @CordilleraLabs</p>
      </div>
    </footer>
  );
};

export default Footer;