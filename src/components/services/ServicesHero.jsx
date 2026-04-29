import { useState, useEffect } from "react";

import img1 from "../../assets/images/Fondo.jpg";
import img2 from "../../assets/images/Fondo.jpg";
import img3 from "../../assets/images/Fondo.jpg";

const slides = [
  {
    title: (
      <>
        Servicios <span className="text-gradient-blue">Únicos</span> en el{" "}
        <span className="text-gradient-blue">País</span>
      </>
    ),
    description:
      "Somos pioneros en el eje cafetero ofreciendo AngioTAC de arterias coronarias, AngioTAC de corazón y grandes vasos, score de calcio coronario y protocolos avanzados como TAVI para diagnóstico cardiovascular de alta precisión.",
    image: img1,
  },
  {
    title: (
      <>
        Tecnología <span className="text-gradient-blue">Avanzada</span> en{" "}
        Servicios Médicos
      </>
    ),
    description:
      "Contamos con estudios especializados como AngioTAC coronario, evaluación de aorta torácica y abdominal, y análisis integral de miembros inferiores con equipos de última generación.",
    image: img2,
  },
  {
    title: (
      <>
        Diagnóstico <span className="text-gradient-blue">Cardiovascular</span>{" "}
        de Alta Precisión
      </>
    ),
    description:
      "Nuestros protocolos incluyen AngioTAC coronario, score de calcio y estudios completos tipo TAVI, garantizando resultados confiables para la toma de decisiones médicas.",
    image: img3,
  },
];

function ServicesHero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section
      className="services-hero"
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      <div className="services-hero__overlay"></div>

      <div className="services-hero__container">
        <div className="services-hero__content">

          <span className="services-hero__badge">
            Nuestros Servicios
          </span>

          <h1 className="services-hero__title">
            {slide.title}
          </h1>

          <p className="services-hero__description">
            {slide.description}
          </p>

          <div className="services-hero__actions">
            <a href="#servicios" className="btn-base btn-primary-blue">
              Ver más servicios
            </a>
          </div>

        </div>
      </div>

      {/* Flechas */}
      <button
        className="nav-arrow left"
        onClick={prevSlide}
        aria-label="Anterior"
      >
        ←
      </button>

      <button
        className="nav-arrow right"
        onClick={nextSlide}
        aria-label="Siguiente"
      >
        →
      </button>
    </section>
  );
}

export default ServicesHero;