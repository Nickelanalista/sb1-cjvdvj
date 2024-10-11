import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Enviando correo:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-blue-900 to-purple-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-yellow-400">Contáctame</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <Mail className="text-yellow-400 mr-3" size={24} />
              <a href="mailto:n.guerravillalobos@gmail.com" className="text-lg text-white hover:text-yellow-400 transition-colors">n.guerravillalobos@gmail.com</a>
            </div>
            <div className="flex items-center mb-6">
              <MapPin className="text-yellow-400 mr-3" size={24} />
              <p className="text-lg text-white">Santiago, Chile</p>
            </div>
            <div className="flex items-center mb-6">
              <Linkedin className="text-yellow-400 mr-3" size={24} />
              <a href="https://www.linkedin.com/in/nicolás-guerra-7b1937141/" target="_blank" rel="noopener noreferrer" className="text-lg text-white hover:text-yellow-400 transition-colors">LinkedIn</a>
            </div>
            <div className="flex items-center">
              <Github className="text-yellow-400 mr-3" size={24} />
              <a href="https://github.com/nicoig" target="_blank" rel="noopener noreferrer" className="text-lg text-white hover:text-yellow-400 transition-colors">GitHub</a>
            </div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Envíame un mensaje</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-white mb-2">Nombre</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-400"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-400"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-white mb-2">Mensaje</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-400"
                  rows={4}
                  placeholder="Tu mensaje"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <Send size={18} className="mr-2" />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;