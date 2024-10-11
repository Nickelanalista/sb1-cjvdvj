import React from 'react';
import { Code, Database, BarChart2, Brain, TrendingUp, Users, Briefcase, Globe } from 'lucide-react';

const skills = [
  { 
    name: 'Python', 
    icon: Code, 
    level: 90,
    description: 'Desarrollo de scripts para automatización, análisis de datos, implementación de modelos de ML y creación de aplicaciones web con frameworks como Flask y Django.'
  },
  { 
    name: 'SQL', 
    icon: Database, 
    level: 85,
    description: 'Diseño y optimización de consultas complejas, creación y mantenimiento de bases de datos, y análisis de grandes volúmenes de datos.'
  },
  { 
    name: 'Power BI', 
    icon: BarChart2, 
    level: 95,
    description: 'Creación de dashboards interactivos, modelado de datos, uso de DAX para cálculos avanzados y diseño de informes personalizados.'
  },
  { 
    name: 'Machine Learning', 
    icon: Brain, 
    level: 80,
    description: 'Implementación de algoritmos de clasificación, regresión y clustering. Uso de bibliotecas como scikit-learn, TensorFlow y PyTorch.'
  },
  { 
    name: 'Data Analysis', 
    icon: TrendingUp, 
    level: 90,
    description: 'Análisis exploratorio de datos, estadística descriptiva e inferencial, y visualización de datos con bibliotecas como Pandas, NumPy y Matplotlib.'
  },
  { 
    name: 'Business Intelligence', 
    icon: Briefcase, 
    level: 85,
    description: 'Diseño e implementación de soluciones de BI, ETL, creación de KPIs y métricas de negocio, y elaboración de informes ejecutivos.'
  },
  { 
    name: 'Data Visualization', 
    icon: BarChart2, 
    level: 90,
    description: 'Creación de visualizaciones efectivas y atractivas utilizando herramientas como Tableau, Plotly y D3.js.'
  },
  { 
    name: 'Big Data', 
    icon: Database, 
    level: 75,
    description: 'Trabajo con tecnologías como Hadoop y Spark para procesamiento y análisis de grandes volúmenes de datos.'
  },
];

const Skills: React.FC = () => {
  return (
    <section id="habilidades" className="py-20 bg-gradient-to-b from-purple-900 to-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-yellow-400">Habilidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl p-6 transform transition duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full p-2 mr-3">
                  <skill.icon className="text-purple-900" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              </div>
              <div className="w-full bg-blue-200 rounded-full h-2.5">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
              </div>
              <p className="mt-2 text-right text-sm text-white">{skill.level}%</p>
              <p className="mt-4 text-sm text-white">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;