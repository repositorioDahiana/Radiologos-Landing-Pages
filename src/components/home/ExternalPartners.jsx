import isolutionLogo from "../../assets/Iconos/isolucion.png";
import segundoLogo from "../../assets/Iconos/moodle.png";

function ExternalPartners() {
  const partners = [
    {
      id: 1,
      name: "iSolution",
      description: "Sistema de gestión",
      logo: isolutionLogo,
      url: "https://radiologosasociados.isolucion.co/PaginaLogin.aspx",
    },
    {
      id: 2,
      name: "Segundo aliado",
      description: "Plataforma educativa",
      logo: segundoLogo,
      url: "http://radiologosasociados.net/moodle/",
    },
  ];

  return (
    <section className="external-partners">
      <div className="external-partners__container">
        {partners.map((partner) => (
          <a
            key={partner.id}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="external-partners__card"
            aria-label={`Ir a ${partner.name}`}
          >
            <div className="external-partners__content">
              <img
                src={partner.logo}
                alt={partner.name}
                className="external-partners__logo"
              />

              <p className="external-partners__description">
                {partner.description}
              </p>
            </div>

            <div className="external-partners__action">
              <span className="external-partners__button">
                Conoce más
                <span className="external-partners__arrow">→</span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ExternalPartners;