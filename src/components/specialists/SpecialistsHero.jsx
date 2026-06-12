import especialistasHero from "../../assets/images/Especialistas.png";

function SpecialistsHero() {
  return (
    <section
      className="specialists-hero"
      style={{ backgroundImage: `url(${especialistasHero})` }}
    >
      <div className="specialists-hero__overlay"></div>

      <div className="specialists-hero__container">
        <div className="specialists-hero__content">
          <h1 className="specialists-hero__title">
            Nuestro Equipo de{" "}
            <span className="text-gradient-blue">Especialistas</span>
          </h1>

          <p className="specialists-hero__description">
            Un equipo de médicos radiólogos y especialistas con más de 46 años de experiencia combinada, 
            comprometidos con diagnósticos precisos y atención humanizada.
          </p>

          <div className="specialists-hero__actions">
            <a href="#equipo" className="btn-base btn-primary-blue">
              Ver Especialistas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialistsHero;