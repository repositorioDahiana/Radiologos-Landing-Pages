import historiaBg from "../../assets/images/Fondo.jpg";
import sedesIcon from "../../assets/Iconos/sedes.png";

function AboutHero() {
  return (
    <section
      className="about-hero"
      style={{ backgroundImage: `url(${historiaBg})` }}
    >
      <div className="about-hero__overlay"></div>

      <div className="about-hero__container">
        <div className="about-hero__content">
          <span className="about-hero__badge">
            Desde 1980 al servicio de la salud
          </span>

          <h1 className="about-hero__title">
            Quiénes <span className="text-gradient-blue">Somos</span>
          </h1>

          <p className="about-hero__description">
            Somos instituciones prestadoras de servicios de salud
            especializadas en apoyo diagnóstico: imágenes diagnósticas,
            medicina nuclear, cardiología y laboratorio clínico.
          </p>
        </div>

        <div className="about-hero__stats">
          <article className="about-hero__statCard">
            <img
              src={sedesIcon}
              alt="Sedes en Colombia"
              className="about-hero__statIcon"
            />

            <div className="about-hero__statText">
              <strong className="about-hero__statNumber">5 sedes</strong>
              <span className="about-hero__statLabel">en Colombia</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;