import empresaImg from "../../assets/images/Fondo.jpg";

function CompanyHero() {
  return (
    <section className="company-hero">

      <div className="company-hero__container">

        {/* IZQUIERDA */}
        <div className="company-hero__content">
          <h1 className="company-hero__title">
            Nuestra <span className="text-gradient-blue">Empresa</span>
          </h1>

          <p className="company-hero__description">
            Somos una organización comprometida con la excelencia en el sector
            salud, integrando tecnología avanzada, talento humano altamente
            calificado y procesos innovadores para brindar diagnósticos
            confiables y oportunos.
          </p>

          <a href="/contacto" className="btn-base btn-primary-blue">
            Conócenos más
          </a>

        </div>

        {/* DERECHA */}
        <div className="company-hero__image">

          <img src={empresaImg} alt="Nuestra empresa" />

        </div>

      </div>

    </section>
  );
}

export default CompanyHero;