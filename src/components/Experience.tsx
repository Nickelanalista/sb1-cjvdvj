import React, { useState } from 'react';

const experiences = [
  {
    title: "Analista de Datos Senior",
    company: "BHP Mina Escondida (A&I)",
    period: "Marzo 2024 - Presente",
    description: "Desarrollo de analítica avanzada utilizando modelos de Machine Learning, automatización de informes con Python y creación de dashboards en Power BI.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/BHP_2017_logo.svg/320px-BHP_2017_logo.svg.png"
  },
  {
    title: "Data Science",
    company: "Carozzi",
    period: "Junio 2022 - Marzo 2024",
    description: "Desarrollo de herramientas y soluciones de ML, implementación de iniciativas de IA y creación de dashboards en Tableau y Power BI.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Carozzi_Corp_2016.png"
  },
  {
    title: "Analista de Business Intelligence",
    company: "Trendy Alimentos",
    period: "Octubre 2021 - Junio 2022",
    description: "Generación y automatización de informes comerciales utilizando Python y Power BI, aplicación de algoritmos de ML para diversos casos comerciales.",
    logo: "https://mistalentos.cl/wp-content/uploads/2019/09/logo-trendy.png"
  },
  {
    title: "Planificador de Materias Primas",
    company: "Agrosuper",
    period: "Agosto 2020 - Octubre 2021",
    description: "Gestión del suministro de materias primas no cárnicas, preparación de informes gerenciales y desarrollo de dashboards en Power BI.",
    logo: "https://www.icare.cl/assets/uploads/2018/01/logo-agrosuper-transparente.png"
  }
];

const Experience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="experiencia" className="py-20 bg-gradient-to-b from-purple-900 to-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-yellow-400">Experiencia Profesional</h2>
        <div className="relative">
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item mb-24 flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className="w-2/5 flex justify-center">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg">
                  <img className="h-24 w-auto object-contain" src={exp.logo} alt={exp.company} />
                </div>
              </div>
              <div className={`w-3/5 ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`}>
                <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl p-6 relative">
                  <h3 className="text-xl font-semibold text-yellow-400">{exp.title}</h3>
                  <p className="text-white">{exp.company}</p>
                  <p className="text-yellow-300 mb-2">{exp.period}</p>
                  <div className={`timeline-content transition-all duration-300 overflow-hidden ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-white">{exp.description}</p>
                  </div>
                  <button
                    className="mt-2 text-yellow-400 hover:text-yellow-300 transition-colors"
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  >
                    {activeIndex === index ? 'Leer menos' : 'Leer más'}
                  </button>
                </div>
              </div>
              <div className="absolute w-6 h-6 bg-yellow-400 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg z-10"></div>
            </div>
          ))}
          <div className="absolute h-full w-1 bg-yellow-400 left-1/2 transform -translate-x-1/2 top-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;