import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import experienciaIcon from "../../assets/Iconos/tiempo.png";
import sedesIcon from "../../assets/Iconos/sedes.png";
import pacientesIcon from "../../assets/Iconos/paciente1.png";
import especialidadesIcon from "../../assets/Iconos/medico.png";


function Counter({ end, suffix = "", duration = 2000, startFrom = 0, loop = false }) {
  const [count, setCount] = useState(startFrom);

  useEffect(() => {
    let start = startFrom;
    // Calculamos el incremento por frame (aprox 60fps -> 16ms)
    const increment = (end - startFrom) / (duration / 16);
    let timer;

    const runCounter = () => {
      timer = setInterval(() => {
        start += increment;

        if (start >= end) {
          clearInterval(timer);
          setCount(end); 

          if (loop) {
            setTimeout(() => {
              start = startFrom;
              setCount(startFrom);
              runCounter(); 
            }, 1200);
          }
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
    };

    runCounter();

    return () => {
      clearInterval(timer);
    };
  }, [end, duration, startFrom, loop]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function AboutSummary() {
  const getExperienceYears = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth(); 
    
    if (currentMonth < 1) {
      return currentYear - 1980 - 1;
    }
    return currentYear - 1980;
  };

  const yearsOfExperience = getExperienceYears();

  const stats = [
    {
      id: 1,
      icon: experienciaIcon,
      end: yearsOfExperience,
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
      startFrom: 450,         
      end: 501,               
      loop: true,            
      duration: 35000,         
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
                  <Counter 
                    end={item.end} 
                    suffix={item.suffix} 
                    startFrom={item.startFrom || 0} 
                    loop={item.loop || false}
                    duration={item.duration || 2000}
                  />
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