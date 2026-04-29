import especialistasHero from "../../assets/images/Fondo.jpg";

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
            Contamos con un equipo médico altamente calificado, comprometido
            con brindar diagnósticos precisos y atención de excelencia a cada
            paciente.
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