import React from 'react';
import { Brain, TrendingUp, BarChart2, Database, Code, PieChart, MessageSquare, Image, FileText, Users, DollarSign, Map, ShieldCheck, ShoppingBag, Target, Zap, Bot, Globe } from 'lucide-react';

const projectCategories = [
  {
    category: "Inteligencia Artificial",
    icon: Brain,
    description: "Implementación de soluciones avanzadas de IA para optimizar procesos y mejorar la toma de decisiones.",
    projects: [
      { title: "Chatbot con Langchain", description: "Creación de chatbots interactivos entrenados con información empresarial.", icon: MessageSquare },
      { title: "Análisis de Sentimientos", description: "Implementación de NLP para analizar feedback de clientes.", icon: Users },
      { title: "Asistente Virtual", description: "Desarrollo de un asistente virtual para atención al cliente.", icon: Bot },
      { title: "Reconocimiento de Imágenes", description: "Sistema de clasificación de productos basado en imágenes.", icon: Image },
      { title: "Generación de Texto", description: "Creación de contenido automático para marketing.", icon: FileText },
      { title: "Traducción Automática", description: "Sistema de traducción en tiempo real para documentos internos.", icon: Globe }
    ]
  },
  {
    category: "Machine Learning",
    icon: TrendingUp,
    description: "Desarrollo e implementación de modelos predictivos y algoritmos de aprendizaje automático para resolver problemas de negocio complejos.",
    projects: [
      { title: "Predicción de Fuga de Clientes", description: "Modelo de Regresión Logística para predecir la fuga de clientes.", icon: Users },
      { title: "Segmentación de Clientes", description: "Clustering de clientes para estrategias de marketing personalizadas.", icon: PieChart },
      { title: "Pronóstico de Ventas", description: "Modelo de series temporales para predecir ventas futuras.", icon: TrendingUp },
      { title: "Detección de Fraude", description: "Sistema de detección de transacciones fraudulentas.", icon: ShieldCheck },
      { title: "Recomendación de Productos", description: "Motor de recomendación basado en el comportamiento del usuario.", icon: ShoppingBag },
      { title: "Optimización de Precios", description: "Modelo dinámico para optimizar precios en tiempo real.", icon: DollarSign }
    ]
  },
  {
    category: "Business Intelligence",
    icon: BarChart2,
    description: "Creación de soluciones de BI para transformar datos en insights accionables y apoyar la toma de decisiones estratégicas.",
    projects: [
      { title: "Dashboards en Power BI", description: "Creación de dashboards interactivos para stakeholders.", icon: BarChart2 },
      { title: "ETL con Python", description: "Automatización de procesos ETL para integración de datos.", icon: Database },
      { title: "Análisis de Participación de Mercado", description: "Estudio de la posición competitiva de la empresa.", icon: PieChart },
      { title: "KPIs de Rendimiento", description: "Implementación de métricas clave para seguimiento de objetivos.", icon: Target },
      { title: "Reportes Automatizados", description: "Generación automática de informes periódicos.", icon: FileText },
      { title: "Visualización de Datos Geoespaciales", description: "Mapeo de datos de ventas y clientes por región.", icon: Map }
    ]
  }
];

const Projects: React.FC = () => {
  return (
    <section id="proyectos" className="py-20 bg-gradient-to-b from-blue-900 to-purple-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-yellow-400">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl p-6 transform transition duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4 text-center text-white flex items-center justify-center">
                <category.icon className="mr-2 text-yellow-400" size={32} />
                {category.category}
              </h3>
              <p className="text-center text-white mb-6">{category.description}</p>
              <div className="space-y-4">
                {category.projects.map((project, projectIndex) => (
                  <div key={projectIndex} className="bg-white bg-opacity-5 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <project.icon className="text-yellow-400 mr-2" size={20} />
                      <h4 className="text-lg font-medium text-yellow-300">{project.title}</h4>
                    </div>
                    <p className="text-white text-sm leading-relaxed">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;