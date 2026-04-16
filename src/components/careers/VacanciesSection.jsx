import radiologiaIcon from "../../assets/Iconos/email.png";
import cardiologiaIcon from "../../assets/Iconos/email.png";
import atencionIcon from "../../assets/Iconos/email.png";
import laboratorioIcon from "../../assets/Iconos/email.png";

function VacanciesSection() {
  return (
    <section className="vacancies" id="vacantes">
      <div className="vacancies__container">

        {/* HEADER */}
        <span className="vacancies__badge">
          Oportunidades disponibles
        </span>

        <h2 className="vacancies__title">
          Nuestras <span className="text-gradient-blue">Vacantes</span>
        </h2>

        {/* GRID */}
        <div className="vacancies__grid">

          {/* CARD 1 */}
          <div className="vacancy-card">

            <div className="vacancy-card__header">
              <div className="vacancy-card__icon">
                <img src={radiologiaIcon} alt="Radiología" />
              </div>
              <h3>Radiología e Imágenes</h3>
            </div>

            <p>
              Tecnólogos en radiología, médicos radiólogos y especialistas en imágenes diagnósticas.
            </p>

            <ul>
              <li>Radiología</li>
              <li>TAC</li>
              <li>Resonancia</li>
              <li>Ecografía</li>
            </ul>
          </div>

          {/* CARD 2 */}
          <div className="vacancy-card">

            <div className="vacancy-card__header">
              <div className="vacancy-card__icon">
                <img src={cardiologiaIcon} alt="Cardiología" />
              </div>
              <h3>Cardiología</h3>
            </div>

            <p>
              Cardiólogos, tecnólogos cardiovasculares y personal especializado en estudios del corazón.
            </p>

            <ul>
              <li>Ecocardiografía</li>
              <li>Holter</li>
              <li>Ergometría</li>
            </ul>
          </div>

          {/* CARD 3 */}
          <div className="vacancy-card">

            <div className="vacancy-card__header">
              <div className="vacancy-card__icon">
                <img src={atencionIcon} alt="Atención al paciente" />
              </div>
              <h3>Atención al Paciente</h3>
            </div>

            <p>
              Auxiliares de enfermería, recepcionistas y personal de apoyo para una atención humanizada.
            </p>

            <ul>
              <li>Recepción</li>
              <li>Enfermería</li>
              <li>Orientación</li>
            </ul>
          </div>

          {/* CARD 4 */}
          <div className="vacancy-card">

            <div className="vacancy-card__header">
              <div className="vacancy-card__icon">
                <img src={laboratorioIcon} alt="Laboratorio clínico" />
              </div>
              <h3>Laboratorio Clínico</h3>
            </div>

            <p>
              Bacteriólogos, auxiliares de laboratorio y especialistas en análisis clínicos.
            </p>

            <ul>
              <li>Bacteriología</li>
              <li>Hematología</li>
              <li>Química</li>
            </ul>
          </div>

        </div>

        {/* CTA */}
        <div className="vacancies__cta">
          <p>¿No encuentras tu área? Envíanos tu hoja de vida de todas formas.</p>

          <a href="#postular" className="btn-base btn-primary-blue">
            Postularme ahora
          </a>
        </div>

      </div>
    </section>
  );
}

export default VacanciesSection;