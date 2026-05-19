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
          Radiólogos Asociados tiene convenios y alianzas con las principales
          entidades del sector salud en Colombia, garantizando acceso a
          nuestros servicios de imágenes diagnósticas para todos nuestros
          usuarios.
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