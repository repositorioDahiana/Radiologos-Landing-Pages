import empresaImg from "../../assets/images/nuestraEmpresa.png";

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
          Somos una organización comprometida con la excelencia, que integra tecnología de vanguardia, 
          talento humano altamente calificado y procesos innovadores para brindarte diagnósticos confiables, 
          oportunos y con altos estándares de calidad. 
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