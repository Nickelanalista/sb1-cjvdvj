import React from 'react';
import { GraduationCap } from 'lucide-react';

const educations = [
  {
    degree: "Diplomado en Ciencia de Datos",
    institution: "Pontificia Universidad Católica de Chile",
    period: "Marzo - Diciembre 2021",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Escudo_de_la_Pontificia_Universidad_Cat%C3%B3lica_de_Chile.svg/800px-Escudo_de_la_Pontificia_Universidad_Cat%C3%B3lica_de_Chile.svg.png"
  },
  {
    degree: "Ingeniería Comercial",
    institution: "Universidad Andrés Bello",
    period: "2014 - 2019",
    logo: "https://vinculacion.unab.cl/wp-content/uploads/2018/06/fondo-transparente-logo-color-con-texto-azul-300x252.png"
  }
];

const Education: React.FC = () => {
  return (
    <section id="educación" className="py-20 bg-gradient-to-b from-purple-900 to-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-yellow-400">Educación</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educations.map((edu, index) => (
            <div key={index} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="p-6 bg-white flex justify-center items-center h-48">
                <img className="max-h-full max-w-full object-contain" src={edu.logo} alt={edu.institution} />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-yellow-400">{edu.degree}</h3>
                <p className="text-yellow-300 mb-2">{edu.institution}</p>
                <p className="text-white">{edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;