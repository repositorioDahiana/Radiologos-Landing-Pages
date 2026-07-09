function AlliesIntro() {
  return (
    <section className="allies-intro">

      <div className="allies-intro__container">

        <span className="section-line-blue"></span>

        <h2 className="allies-intro__title">
          Trabajamos con las{" "}
          <span className="text-gradient-blue">
            mejores entidades
          </span>
        </h2>

        <p className="allies-intro__description">
          En Radiólogos Asociados contamos con convenios y alianzas con las principales entidades del 
          sector salud en Colombia, facilitando el acceso de nuestros usuarios a servicios de imágenes 
          diagnósticas con altos estándares de calidad.
          Si no encuentras tu entidad o tienes dudas sobre la cobertura de tu convenio, te invitamos a 
          comunicarte con nuestros canales de atención, donde nuestro equipo verificará tu afiliación y te 
          brindará la información necesaria para programar tu solicitud.
        </p>

        <a
          href="#medicinaprepagada"
          className="btn-base btn-primary-blue allies-intro__button"
        >
          Conocer más
        </a>

      </div>

    </section>
  );
}

export default AlliesIntro;