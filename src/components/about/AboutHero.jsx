import historiaBg from "../../assets/images/Fondo.jpg";

import sedesIcon from "../../assets/Iconos/sedes.png";
import isoIcon from "../../assets/Iconos/insignia.png";
import pacientesIcon from "../../assets/Iconos/paciente1.png";

function AboutHero() {
  return (
    <section
      className="about-hero"
      style={{ backgroundImage: `url(${historiaBg})` }}
    >
      <div className="about-hero__overlay"></div>

      <div className="about-hero__container">
        
        {/* CONTENIDO */}
        <div className="about-hero__content">
          <span className="about-hero__badge">
            Desde 1980 al servicio de la salud
          </span>

          <h1 className="about-hero__title">
            Quiénes <span className="text-gradient-blue">Somos</span>
          </h1>

          <p className="about-hero__description">
            Somos una institución líder con más de <span className="highlight">46 años de experiencia</span> en el sector salud. 
            En <span className="brand">Radiólogos Asociados</span> transformamos 
            <span className="highlight-soft"> tecnología de punta</span> en diagnósticos 
            confiables de <span className="highlight">alta complejidad</span>, medicina nuclear y laboratorio clínico, 
            brindando la claridad que tú y tu médico necesitan para cuidar tu bienestar.
          </p>
        </div>

        {/* STATS */}
        <div className="about-hero__stats">

          {/* Card 1 */}
          <article className="about-hero__statCard">
            <img src={sedesIcon} className="about-hero__statIcon" />

            <div className="about-hero__statText">
              <strong>+15 sedes</strong>
              <span>en Colombia</span>
            </div>
          </article>

          {/* Card 2 */}
          <article className="about-hero__statCard">
            <img src={isoIcon} className="about-hero__statIcon" />

            <div className="about-hero__statText">
              <strong>ISO 9001</strong>
              <span>Certificados</span>
            </div>
          </article>

          {/* Card 3 */}
          <article className="about-hero__statCard">
            <img src={pacientesIcon} className="about-hero__statIcon" />

            <div className="about-hero__statText">
              <strong>+500K</strong>
              <span>Pacientes</span>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}

export default AboutHero;