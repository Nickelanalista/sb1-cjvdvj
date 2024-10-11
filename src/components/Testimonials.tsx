import React from 'react';

const testimonials = [
  {
    name: 'Francisco García',
    position: 'Superintendente A&I',
    content: 'Nicolás demostró una capacidad excepcional para analizar grandes conjuntos de datos y proporcionar insights valiosos que impulsaron nuestras decisiones estratégicas.',
    company: 'BHP'
  },
  {
    name: 'Felipe Contreras',
    position: 'Líder Inteligencia Comercial',
    content: 'Su experiencia en machine learning y su habilidad para comunicar conceptos complejos de manera clara fueron fundamentales para el éxito de nuestros proyectos de IA.',
    company: 'Carozzi'
  },
  {
    name: 'Sergio Fernández',
    position: 'Gerente Comercial',
    content: 'Nicolás no solo mejoró significativamente nuestros procesos de BI, sino que también capacitó a nuestro equipo, dejando un impacto duradero en nuestra organización.',
    company: 'Trendy Alimentos'
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="referencias" className="py-20 bg-gradient-to-b from-purple-900 to-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-yellow-400">Referencias Laborales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl p-6 transform transition duration-300 hover:scale-105">
              <p className="text-white mb-4">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img className="h-10 w-10 rounded-full" src={`https://i.pravatar.cc/150?img=${index + 1}`} alt={testimonial.name} />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-yellow-400">{testimonial.name}</p>
                  <p className="text-sm text-white">{testimonial.position}</p>
                  <p className="text-sm text-yellow-300">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;