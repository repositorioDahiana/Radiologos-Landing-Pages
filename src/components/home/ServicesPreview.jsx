import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// IMPORTACIÓN DE ICONOS
import corazonIcon from "../../assets/Iconos/corazon.png";
import radiologiaIcon from "../../assets/Iconos/radiologia.png";
import mujerIcon from "../../assets/Iconos/Logo_Mujer.png";
import icon1 from "../../assets/Iconos/Ferrari1.png";
import icon2 from "../../assets/Iconos/Ferrari2.png";
import icon3 from "../../assets/Iconos/Ferrari3.png";
import icon4 from "../../assets/Iconos/Ferrari4.png";
import icon5 from "../../assets/Iconos/Ferrari5.png";
import icon6 from "../../assets/Iconos/Ferrari6.png";
import icon7 from "../../assets/Iconos/Ferrari7.png";
// IMPORTACIÓN DE IMÁGENES DESDE ASSETS
import imgRadiologia from "../../assets/images/HomeService1.png"; 
import imgMujer from "../../assets/images/HomeService2.png";
import imgCorazon from "../../assets/images/Servicio03.png";
import img1 from "../../assets/images/Ferrari1.png";
import img2 from "../../assets/images/Ferrari2.png";
import img3 from "../../assets/images/Ferrari3.png";
import img4 from "../../assets/images/Ferrari4.png";
import img5 from "../../assets/images/Ferrari5.png";
import img6 from "../../assets/images/Ferrari6.png";
import img7 from "../../assets/images/Ferrari7.png";

function ServicesPreview() {
  const carouselRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const services = [
    {
      id: 1,
      icon: radiologiaIcon,
      bgImage: imgRadiologia,
      title: "Radiología Resonancia Magnética",
      description: "Ponemos la mejor tecnología al servicio de tu salud. Realizamos estudios especializados como angiotac coronario y score de calcio para la detección oportuna de riesgos cardiovasculares. Además, contamos con resonancias enfocadas en el seguimiento de prótesis mamarias y la detección de biopolímeros, brindando resultados confiables para tu tranquilidad.",
      link: "/services",
    },
    {
      id: 2,
      icon: mujerIcon,
      bgImage: imgMujer,
      title: "Centro Médico para la Mujer",
      description: "Un espacio diseñado para la mujer. Contamos con mamografía con tomosíntesis para una detección precisa, y un portafolio integral en ginecología, obstetricia, perinatología y terapias de piso pélvico, con los más altos estándares de calidad.",
      link: "/services",
    },
    {
      id: 3,
      icon: corazonIcon,
      bgImage: imgCorazon,
      title: "Centro Médico para el Corazón",
      description: "Expertos en cuidar el motor de tu vida. Integramos tecnología de última generación para diagnósticos cardiovasculares avanzados. Contamos con servicio de prueba de mesa basculante, ecocardiogramas transesofágicos, entre otros. Garantizando precisión en tu salud cardiovascular.",
      link: "/services",
    },
    {
      id: 4,
      icon: icon1,
      bgImage: img1,
      title: "AngioTAC de Arterias Coronarias",
      description: "Protege tu corazón con tecnología de vanguardia. Un estudio rápido y no invasivo que permite visualizar tus arterias con total precisión para detectar obstrucciones a tiempo y prevenir riesgos cardíacos, sin necesidad de procedimientos complejos.",
      link: "/services",
    },
    {
      id:5,
      icon: icon2,
      bgImage: img2,
      title: "AngioTAC de Corazón y Grandes Vasos (Mapeo)",
      description: "La visión más completa de tu anatomía cardíaca. Evaluamos con máxima precisión el corazón y los grandes vasos sanguíneos para entender su funcionamiento estructural y detectar cualquier anomalía con tecnología de última generación.",
      link: "/services",
    },
    {
      id:6,
      icon: icon3,
      bgImage: img3,
      title: "Score de Calcio Coronario",
      description: "Detecta el riesgo cardiovascular de forma silenciosa. A través de un escaneo preciso, determinamos el nivel de calcificación en tus arterias coronarias para establecer un plan de prevención personalizado y efectivo contra enfermedades del corazón.",
      link: "/services",   
    },
    {
      id:7,
      icon: icon4,
      bgImage: img4,
      title: "AngioTAC Protocolo TAVI",
      description: "Estudio especializado de alta resolución para la planificación de reemplazo valvular. Evaluamos integralmente el corazón, la aorta y los accesos vasculares, proporcionando las medidas y especificaciones exactas necesarias para un procedimiento mínimamente invasivo y seguro.",
      link: "/services",  
    },
    {
      id:8,
      icon: icon5,
      bgImage: img5,
      title: "AngioTAC Coronarias",
      description: "Visualiza la salud de tu corazón con claridad absoluta. Nuestro diagnóstico avanzado utiliza imágenes de alta definición para evaluar el estado real de tus arterias coronarias, permitiendo identificar anomalías con una precisión milimétrica.",
      link: "/services",
    },
    {
      id:9,
      icon: icon6,
      bgImage: img6,
      title: "AngioTAC Aorta Torácica",
      description: "Evaluación especializada de la arteria más importante de tu tórax. Este estudio de alta resolución permite identificar de manera precisa aneurismas, disecciones y otras anomalías, proporcionando información vital para la prevención y el tratamiento oportuno.",
      link: "/services",  
    },
    {
      id:10,
      icon: icon7,
      bgImage: img7,
      title: "AngioTAC Aorta Abdominal y Miembros Inferiores",
      description: "Recupera la seguridad en tu movilidad con un diagnóstico integral de tu circulación. Evaluamos a detalle la aorta abdominal y el flujo sanguíneo hacia tus piernas para detectar obstrucciones o problemas circulatorios, permitiendo un tratamiento efectivo para mejorar tu bienestar vascular.",
      link: "/services",
    },
  ];

  const duplicatedServices = [...services, ...services];

  useEffect(() => {
    let animationFrameId;
    
    const scroll = () => {
      if (carouselRef.current && !isHovered) {
        carouselRef.current.scrollLeft += 1;
        
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
          carouselRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  const scrollLeftBtn = () => {
    if (carouselRef.current) {
      if (carouselRef.current.scrollLeft < 350) {
        carouselRef.current.scrollLeft += carouselRef.current.scrollWidth / 2;
      }
      carouselRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRightBtn = () => {
    if (carouselRef.current) {
      if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2 - 350) {
        carouselRef.current.scrollLeft -= carouselRef.current.scrollWidth / 2;
      }
      carouselRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <section className="services-preview">
      <div className="services-preview__container">

        {/* TU HEADER ORIGINAL COMPLETAMENTE INTACTO */}
        <div className="services-preview__header">
          <h2 className="services-preview__title">
            Nuestros <span>Servicios</span>
          </h2>

          <p className="services-preview__description">
            Ofrecemos servicios médicos especializados con tecnología de
            vanguardia y un equipo humano comprometido.
          </p>

          <div className="services-preview__line"></div>

          <div className="services-preview__top-action">
            <Link to="/services" className="services-preview__all-button">
              Ver todos los servicios
              <span className="services-preview__arrow">→</span>
            </Link>
          </div>
        </div>

        {/* CONTENEDOR PRINCIPAL CON FLECHAS Y MÁSCARA OVERFLOW HIDDEN */}
        <div 
          className="services-preview__carousel-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button className="services-preview__arrow-btn left" onClick={scrollLeftBtn} aria-label="Anterior">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          <div className="services-preview__carousel-wrapper" ref={carouselRef}>
            <div className="services-preview__carousel">
            
            {duplicatedServices.map((service, index) => (
              <article
                key={`${service.id}-${index}`}
                className="services-preview__card"
              >
                {/* Imagen de fondo del asset */}
                <div
                  className="services-preview__card-bg"
                  style={{
                    backgroundImage: `url(${service.bgImage})`,
                  }}
                ></div>

                <div className="services-preview__card-overlay"></div>

                <div className="services-preview__card-body">
                  <div className="services-preview__top">
                    <div className="services-preview__icon-box">
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="services-preview__icon"
                      />
                    </div>

                    <h3 className="services-preview__card-title">
                      {service.title.split("\n").map((line, idx) => (
                        <span
                          key={idx}
                          className="services-preview__card-title-line"
                        >
                          {line}
                        </span>
                      ))}
                    </h3>
                  </div>

                  <p className="services-preview__card-description">
                    {service.description}
                  </p>

                  <Link
                    to={service.link}
                    className="services-preview__card-button"
                  >
                    Ver más
                    <span className="services-preview__arrow">→</span>
                  </Link>
                </div>
              </article>
            ))}

            </div>
          </div>

          <button className="services-preview__arrow-btn right" onClick={scrollRightBtn} aria-label="Siguiente">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>

      </div>
    </section>
  );
}

export default ServicesPreview;