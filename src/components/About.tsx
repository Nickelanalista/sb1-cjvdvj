import React from 'react';
import { Briefcase, Database, Code, Cpu } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre-mí" className="py-20 bg-gradient-to-b from-purple-900 to-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-yellow-400">Sobre Mí</h2>
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQE_NB8zXFZwCQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718911010071?e=1733961600&v=beta&t=o4dgPYVL4JuDcKK0NVNnuRjC_n_-qnT6TpVvUhciXU4"
              alt="Nicolás Guerra"
              className="w-64 h-64 rounded-full mb-8 md:mb-0 md:mr-12 object-cover shadow-lg border-4 border-yellow-400"
            />
            <div>
              <p className="text-lg mb-6 text-white leading-relaxed">
                Soy Nicolás Guerra, Ingeniero Comercial de la Universidad Andrés Bello, apasionado por el mundo de los datos. Cuento con amplia experiencia en Análisis de Datos, Ciencia de Datos y Machine Learning. Mi enfoque se centra en comprender problemas empresariales y crear soluciones basadas en datos que generan un impacto real en los negocios.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-center">
                  <Briefcase className="mr-3 text-yellow-400" size={24} />
                  <span className="text-white">Analista de Datos Senior en BHP Mina Escondida</span>
                </li>
                <li className="flex items-center">
                  <Database className="mr-3 text-yellow-400" size={24} />
                  <span className="text-white">Experto en Python para manipulación de datos</span>
                </li>
                <li className="flex items-center">
                  <Code className="mr-3 text-yellow-400" size={24} />
                  <span className="text-white">Habilidades avanzadas en Power BI</span>
                </li>
                <li className="flex items-center">
                  <Cpu className="mr-3 text-yellow-400" size={24} />
                  <span className="text-white">AI Apps Developer</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;