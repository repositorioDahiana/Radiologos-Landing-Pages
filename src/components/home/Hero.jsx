import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import tecnologiaHero from "../../assets/images/HomeHero1.jpg";
import especialistasHero from "../../assets/images/HomeHero2.png";
import clinicaHero from "../../assets/images/HomeHero3.jpg";
import resultadosIcon from "../../assets/Iconos/resultados.png";
import agendarIcon from "../../assets/Iconos/consultarita.png";
import experienciaIcon from "../../assets/Iconos/tiempo.png";
import sedesIcon from "../../assets/Iconos/sedes.png";
import pacientesIcon from "../../assets/Iconos/paciente.png";

const slides = [
  {
    id: 1,
    title: "Tecnología de ",
    highlight: "Última Generación",
    description:
      "Equipos médicos de alta precisión para diagnósticos confiables y resultados exactos en tiempo récord.",
    image: tecnologiaHero,
    alt: "Equipo de Resonancia Magnética",
  },
  {
    id: 2,
    title: "Especialistas ",
    highlight: "Certificados",
    description:
      "Nuestro equipo médico altamente calificado garantiza la mejor atención y cuidado para cada paciente.",
    image: especialistasHero,
    alt: "Equipo médico",
  },
  {
    id: 3,
    title: "Excelencia en ",
    highlight: "Diagnóstico Médico",
    description:
      "Más de 46 años brindando servicios de radiología con tecnología de vanguardia y el mejor equipo humano.",
    image: clinicaHero,
    alt: "Clínica Radiólogos",
  },
];


function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${slide.image})` }}
      aria-label={slide.alt}
    >
      <div className="hero__overlay"></div>

      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            {slide.title}
            <span className="highlight">{slide.highlight}</span>
          </h1>

          <p className="hero__description">{slide.description}</p>

          <div className="hero__actions">
            <a
              href="https://nexxa.com.co/portal/login"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <img src={resultadosIcon} alt="" className="btn-icon" />
              Ver Resultados
            </a>

            <a
              href="https://appcedira.com/solicitarcita/public/consultar-cita"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <img src={agendarIcon} alt="" className="btn-icon btn-icon--agendar" />
              Consultar Cita
            </a>
          </div>
        </div>

        <div className="hero__stats">

          {/* 1 - ABOUT */}
          <div
            className="hero__statItem"
            onClick={() => navigate("/about")}
          >
            <img
              src={experienciaIcon}
              alt="Años de experiencia"
              className="hero__statIcon"
            />
            <div className="hero__statText">
              <div className="hero__statNumber">46+</div>
              <div className="hero__statLabel">Años de Experiencia</div>
            </div>
          </div>

          {/* 2 - SCROLL A HOME SECTION */}
          <a href="#ubicacion">
          <div className="hero__statItem">
            <img
              src={sedesIcon}
              alt="Sedes"
              className="hero__statIcon hero__statIcon--sedes"
            />
            <div className="hero__statText">
              <div className="hero__statNumber">11+</div>
              <div className="hero__statLabel">Sedes</div>
            </div>
          </div>
          </a>

          {/* 3 - ABOUT */}
          <div
            className="hero__statItem"
            onClick={() => navigate("/about")}
          >
            <img
              src={pacientesIcon}
              alt="Pacientes"
              className="hero__statIcon"
            />
            <div className="hero__statText">
              <div className="hero__statNumber">500K+</div>
              <div className="hero__statLabel">Pacientes</div>
            </div>
          </div>

        </div>

          <button className="nav-arrow left" onClick={prevSlide}>
            ‹
          </button>

          <button className="nav-arrow right" onClick={nextSlide}>
            ›
          </button>
      </div>
    </section>
  );
}

export default Hero;