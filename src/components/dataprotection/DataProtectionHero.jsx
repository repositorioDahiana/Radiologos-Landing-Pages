import heroBg from "../../assets/images/Proteccion.png";

function DataProtectionHero() {
  return (
    <section
      className="ppss-hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay que se desvanece suavemente hacia la derecha */}
      <div className="ppss-hero__overlay"></div>

      <div className="ppss-hero__container">
        <div className="ppss-hero__content">

          <h1 className="ppss-hero__title">
            Política de{" "}
            <span className="text-gradient-blue">
              Protección de Datos
            </span>
          </h1>

          <p className="ppss-hero__description">
            Compromiso de RADIOLOGOS ASOCIADOS S.A.S. con la protección 
            de la información personal de nuestros usuarios, conforme a la Ley 1581 de 2012.
          </p>
          
        </div>
      </div>
    </section>
  );
}

export default DataProtectionHero;