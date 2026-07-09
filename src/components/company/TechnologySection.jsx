import techImg from "../../assets/images/Tecnologia.jpg";

import equipoIcon from "../../assets/Iconos/ecografia.png";
import especialistasIcon from "../../assets/Iconos/Ferrari8.png";
import resultadosIcon from "../../assets/Iconos/resonancia.png";

function TechnologySection() {
  return (
    <section className="technology">

      <div className="technology__container">

        {/* HEADER */}
        <div className="technology__header">
          <h2 className="technology__title">
            Tecnología de <span className="text-gradient-blue">Punta</span>
          </h2>

          <p className="technology__description">
            En Radiólogos Asociados contamos con la infraestructura tecnológica 
            más avanzada de la región, garantizando diagnósticos precisos y 
            confiables para nuestros pacientes.
          </p>
        </div>

        {/* CONTENT */}
        <div className="technology__content">

          {/* IZQUIERDA - CARDS */}
          <div className="technology__list">

            <div className="tech-card">
              <div className="tech-card__icon">
                <img src={equipoIcon} alt="Equipos" />
              </div>
              <div>
                <h3>Ecógrafo Piel y Uñas</h3>
                <p>Ultrasonido Dermatológico de Alta Frecuencia Equipo de ultrasonido de alta frecuencia especializado en estructuras superficiales: piel, uñas y tejidos blandos. Visualización en tiempo real con resolución submilimétrica para diagnóstico no invasivo.</p>
              </div>
            </div>

            <div className="tech-card">
              <div className="tech-card__icon">
                <img src={especialistasIcon} alt="Especialistas" />
              </div>
              <div>
                <h3>Mamógrafo Digital con Tomosíntesis</h3>
                <p>Diagnóstico Mamario 3D de Alta Precisión
                Tecnología de imagen en 3D que permite detectar lesiones mamarias con mayor precisión que la mamografía convencional. Reduce falsos positivos y mejora la detección temprana del cáncer de mama.</p>
              </div>
            </div>

            <div className="tech-card">
              <div className="tech-card__icon">
                <img src={resultadosIcon} alt="Resultados" />
              </div>
              <div>
                <h3>Tomógrafo GE Revolution Ascend</h3>
                <p>TC 64 Cortes. 72 kW Mod. 6969000-100. Tomógrafo computarizado de gama alta GE Revolution Ascend de 64 cortes con 72 kW de potencia. Alta resolución, baja dosis de radiación y reconstrucción ultrarrápida para estudios cardíacos, oncológicos y de urgencias.</p>
              </div>
            </div>

          </div>

          {/* DERECHA - IMAGEN */}
          <div className="technology__image">
            <img src={techImg} alt="Tecnología Médica" />
          </div>

        </div>

      </div>
    </section>
  );
}

export default TechnologySection;