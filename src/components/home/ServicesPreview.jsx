import { Link } from "react-router-dom";

import corazonIcon from "../../assets/Iconos/corazon.png";
import radiologiaIcon from "../../assets/Iconos/radiologia.png";
import mujerIcon from "../../assets/Iconos/Logo_Mujer.png";

function ServicesPreview() {
  const services = [
    {
      id: 1,
      icon: radiologiaIcon,
      title: "Radiología\nResonancia Magnética",
      description:
        "Ponemos la mejor tecnología al servicio de tu salud. Realizamos estudios de alta precisión como Angiotac coronario y Score de calcio para detectar a tiempo riesgos cardiovasculares. Además, ofrecemos resonancias especializadas para el seguimiento de prótesis mamarias y la detección de biopolímeros.",
      link: "/services",
      featured: true,
    },
    {
      id: 2,
      icon: mujerIcon,
      title: "Centro Médico para la Mujer",
      description:
        "Un espacio diseñado para la mujer. Contamos con mamografía con tomosíntesis para una detección precisa, y un portafolio integral en ginecología, obstetricia, perinatología y terapias de piso pélvico, con los más altos estándares de salud.",
      link: "/services",
      featured: false,
    },
    {
      id: 3,
      icon: corazonIcon,
      title: "Centro Médico para el Corazón",
      description:
        "Expertos en cuidar el motor de tu vida. Integramos tecnología de última generación para diagnósticos cardiovasculares avanzados. Contamos con servicio de prueba de mesa basculante, ecocardiogramas transesofágicos, entre otros. Garantizando precisión en tu salud cardiovascular.",
      link: "/services",
      featured: false,
    },
    
    
  ];

  return (
    <section className="services-preview">
      <div className="services-preview__container">

        {/* HEADER */}
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

        {/* GRID */}
        <div className="services-preview__grid">
          {services.map((service) => (
            <article
              key={service.id}
              className={`services-preview__card ${
                service.featured ? "services-preview__card--featured" : ""
              }`}
            >

              {/* ICONO + TITULO */}
              <div className="services-preview__top">
                <div className="services-preview__icon-box">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="services-preview__icon"
                  />
                </div>

                <h3 className="services-preview__card-title">
                  {service.title.split("\n").map((line, index) => (
                    <span key={index} className="services-preview__card-title-line">
                      {line}
                    </span>
                  ))}
                </h3>
              </div>

              {/* DESCRIPCION */}
              <p className="services-preview__card-description">
                {service.description}
              </p>

              {/* BOTON */}
              <Link
                to={service.link}
                className="services-preview__card-button"
              >
                Ver más
                <span className="services-preview__arrow">→</span>
              </Link>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ServicesPreview;