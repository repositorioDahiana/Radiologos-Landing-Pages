import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import experienciaIcon from "../../assets/Iconos/tiempo.png";
import sedesIcon from "../../assets/Iconos/sedes.png";
import pacientesIcon from "../../assets/Iconos/paciente1.png";
import especialidadesIcon from "../../assets/Iconos/medico.png";

function Counter({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function AboutSummary() {
  const stats = [
    {
      id: 1,
      icon: experienciaIcon,
      end: 46,
      suffix: "+",
      label: "Años de Experiencia",
      iconClass: "about-summary__icon-box--blue",
    },
    {
      id: 2,
      icon: sedesIcon,
      end: 11,
      suffix: "+",
      label: "Sedes en Colombia",
      iconClass: "about-summary__icon-box--blue",
    },
    {
      id: 3,
      icon: pacientesIcon,
      end: 500,
      suffix: "K+",
      label: "Pacientes Atendidos",
      iconClass: "about-summary__icon-box--blue",
    },
    {
      id: 4,
      icon: especialidadesIcon,
      end: 5,
      suffix: "+",
      label: "Especialidades Médicas",
      iconClass: "about-summary__icon-box--blue",
    },
  ];

  return (
    <section className="about-summary">
      <div className="about-summary__container">
        <div className="about-summary__header">
          <h2 className="about-summary__title">
            ¿Por Qué <span>Elegirnos?</span>
          </h2>

          <p className="about-summary__description">
            Más de cuatro décadas de compromiso con la excelencia en servicios
            médicos y diagnóstico.
          </p>

          <div className="about-summary__line"></div>
        </div>

        <div className="about-summary__grid">
          {stats.map((item) => (
            <article key={item.id} className="about-summary__card">
              <div className={`about-summary__icon-box ${item.iconClass}`}>
                <img
                  src={item.icon}
                  alt={item.label}
                  className="about-summary__icon"
                />
              </div>

              <div className="about-summary__card-content">
                <h3 className="about-summary__number">
                  <Counter end={item.end} suffix={item.suffix} />
                </h3>
                <p className="about-summary__label">{item.label}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="about-summary__highlight">
          <span className="about-summary__dot"></span>
          <p>
            Más de <strong>500,000 pacientes</strong> han confiado en nosotros
            para su diagnóstico médico.
          </p>
        </div>

        <div className="about-summary__actions">
          <Link to="/about" className="about-summary__button">
            Conoce más de nosotros
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutSummary;