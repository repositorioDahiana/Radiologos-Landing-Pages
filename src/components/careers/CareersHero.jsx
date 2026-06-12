import React, { useState, useEffect } from "react";
import heroBg1 from "../../assets/images/Trabajo1.png";
import heroBg2 from "../../assets/images/Trabajo2.png";
import heroBg3 from "../../assets/images/Trabajo3.png";
import heroBg4 from "../../assets/images/Trabajo4.png";

// 🔥 ICONOS
import vacantesIcon from "../../assets/Iconos/trabajo.png";
import hojaVidaIcon from "../../assets/Iconos/enviar.png";

const backgroundImages = [heroBg1, heroBg2, heroBg3, heroBg4];

function CareersHero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 4000); // Cambia de imagen cada 4 segundos

    return () => clearInterval(intervalId); // Limpiar el intervalo al desmontar
  }, []);

  return (
    <section className="careers-hero">
      {/* Carrusel de fondo */}
      {backgroundImages.map((img, index) => (
        <div
          key={index}
          className={`careers-hero__bg ${index === currentImageIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      {/* Overlay */}
      <div className="careers-hero__overlay"></div>

      <div className="careers-hero__container">
        <div className="careers-hero__content">
          <h1 className="careers-hero__title">
            Trabaja <span className="text-gradient-blue">con Nosotros</span>
          </h1>

          <p className="careers-hero__description">
            En Radiólogos Asociados creemos en el talento, la pasión y el
            compromiso. Sé parte de una institución líder en el sector salud,
            donde podrás crecer profesionalmente y aportar al bienestar de miles
            de personas.
          </p>

          {/* 🔥 BOTONES CON ICONOS */}
          <div className="careers-hero__actions">

            <a href="#vacantes" className="btn-base btn-primary-blue">
              <img src={vacantesIcon} alt="Vacantes" />
              Ver Vacantes
            </a>

            <a
              href="#postular"
              className="btn-base btn-secondary-outline btn-cv"
            >
              <img src={hojaVidaIcon} alt="Hoja de vida" />
              Enviar Hoja de Vida
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}

export default CareersHero;