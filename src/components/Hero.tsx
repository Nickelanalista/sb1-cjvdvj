import React, { useEffect, useRef } from 'react';
import { Code, Database, BarChart2, Brain } from 'lucide-react';

const Hero: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      const svg = svgRef.current;
      const width = svg.clientWidth;
      const height = svg.clientHeight;

      // Create data points
      for (let i = 0; i < 50; i++) {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', `${Math.random() * width}`);
        circle.setAttribute('cy', `${Math.random() * height}`);
        circle.setAttribute('r', '1');
        circle.setAttribute('fill', '#ffffff');
        circle.setAttribute('class', 'data-point');
        svg.appendChild(circle);
      }

      // Create connections
      for (let i = 0; i < 30; i++) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', `${Math.random() * width}`);
        line.setAttribute('y1', `${Math.random() * height}`);
        line.setAttribute('x2', `${Math.random() * width}`);
        line.setAttribute('y2', `${Math.random() * height}`);
        line.setAttribute('stroke', '#ffffff');
        line.setAttribute('stroke-width', '0.5');
        line.setAttribute('class', 'connection');
        svg.appendChild(line);
      }
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <svg
          ref={svgRef}
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        ></svg>
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-7xl font-bold mb-4 relative">
          <span className="relative inline-block animate-cosmic-name">
            Nicolás Guerra
          </span>
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-blue-100">Ingeniero Comercial | Data Scientist | Analista de Business Intelligence</p>
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <div className="flex flex-col items-center">
            <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-full p-3">
              <Code size={36} className="text-white" />
            </div>
            <span className="mt-2 text-white">Python</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-full p-3">
              <Database size={36} className="text-white" />
            </div>
            <span className="mt-2 text-white">SQL</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-full p-3">
              <BarChart2 size={36} className="text-white" />
            </div>
            <span className="mt-2 text-white">Power BI</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-full p-3">
              <Brain size={36} className="text-white" />
            </div>
            <span className="mt-2 text-white">Machine Learning</span>
          </div>
        </div>
        <a
          href="#contacto"
          className="bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          Contáctame
        </a>
      </div>
    </section>
  );
};

export default Hero;