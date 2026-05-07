import historia1 from "../../assets/images/Fondo.jpg";
import historia2 from "../../assets/images/Fondo.jpg";
import historia3 from "../../assets/images/Fondo.jpg";
import historia4 from "../../assets/images/Fondo.jpg";

function HistoryTimeline() {
  return (
    <section className="history">

      <div className="history__container">
        <h2 className="history__title">
          Reseña <span className="text-gradient-blue">Histórica</span>
        </h2>

        <div className="section-line-blue history__line"></div>

        <div className="history__timeline">

          {/* 1980 */}
          <div className="history__item">
            <div className="history__content">
              <span className="history__year">1980</span>
              <h3>Fundación de Radiólogos Asociados</h3>
              <p>
                Por iniciativa de dos destacados profesionales de la medicina,
                se crea en Pereira el Centro Radiológico Ecográfico y
                Escanográfico, hoy Radiólogos Asociados. La primera empresa de
                imágenes diagnósticas del departamento de Risaralda.
              </p>
            </div>

            <div className="history__image">
              <img src={historia1} alt="Fundación" />
            </div>
          </div>

          {/* 1994 */}
          <div className="history__item history__item--reverse">
            <div className="history__content">
              <span className="history__year">1994</span>
              <h3>Nace CEDICAF S.A.</h3>
              <p>
                Ante el crecimiento en la demanda y la incursión de nuevas
                tecnologías, se crea CEDICAF S.A., empresa especializada en
                resonancia magnética en el eje cafetero.
              </p>
            </div>

            <div className="history__image">
              <img src={historia2} alt="CEDICAF" />
            </div>
          </div>

          {/* 2014 */}
          <div className="history__item">
            <div className="history__content">
              <span className="history__year">2014</span>
              <h3>DIAXME llega a Villavicencio</h3>
              <p>
                Se crea DIAXME en Villavicencio, integrando servicios
                especializados en tomografía, resonancia magnética, rayos X y
                ecografía, consolidando la integralidad en la prestación de
                servicios en el centro occidente del país.
              </p>
            </div>

            <div className="history__image">
              <img src={historia3} alt="DIAXME" />
            </div>
          </div>

          {/* ACTUALIDAD */}
          <div className="history__item history__item--reverse">
            <div className="history__content">
              <span className="history__year">Hoy</span>
              <h3>Presencia Nacional y Medicina Nuclear</h3>
              <p>
                Presencia en Pereira, Armenia, Tuluá, Cartago, Ibagué y
                Villavicencio. Pioneros en el desarrollo de medicina nuclear en
                Ibagué, siendo referentes nacionales en diagnóstico médico de
                alta complejidad.
              </p>
            </div>

            <div className="history__image">
              <img src={historia4} alt="Actualidad" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default HistoryTimeline;