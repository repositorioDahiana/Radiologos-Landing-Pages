import heroBg from "../../assets/images/Fondo.jpg";

// ICONOS HEADER
import medicinaIcon from "../../assets/Iconos/email.png";

// ICONOS CARDS
import colsanitasIcon from "../../assets/Iconos/email.png";
import medplusIcon from "../../assets/Iconos/email.png";
import saludTotalIcon from "../../assets/Iconos/email.png";
import nuevaEpsIcon from "../../assets/Iconos/email.png";
import suraIcon from "../../assets/Iconos/email.png";
import coomevaIcon from "../../assets/Iconos/email.png";
import famisanarIcon from "../../assets/Iconos/email.png";
import compensarIcon from "../../assets/Iconos/email.png";

const allies = [
  {
    icon: colsanitasIcon,
    name: "Allianz Seguros",
  },

  {
    icon: medplusIcon,
    name: "AXA Colpatria",
  },

  {
    icon: saludTotalIcon,
    name: "Mapfre Seguros",
  },

  {
    icon: nuevaEpsIcon,
    name: "Seguros Bolívar",
  },

  {
    icon: suraIcon,
    name: "Liberty Seguros",
  },

  {
    icon: coomevaIcon,
    name: "SBS Seguros",
  },

  {
    icon: famisanarIcon,
    name: "HDI Seguros",
  },

  {
    icon: compensarIcon,
    name: "Suramericana",
  },
];

function AlliesPols() {
  return (
    <section className="allies-prepaid" id="polizas">

      <div className="allies-prepaid__container">

        {/* HEADER */}
        <div
          className="allies-prepaid__header"
          style={{ backgroundImage: `url(${heroBg})` }}
        >

          <div className="allies-prepaid__overlay"></div>

          <div className="allies-prepaid__content">

            <div className="allies-prepaid__icon">

              <img
                src={medicinaIcon}
                alt="Medicina Prepagada"
              />

            </div>

            <div>

              <h2 className="allies-prepaid__title">
                Pólizas de Salud
              </h2>

              <p className="allies-prepaid__subtitle">
                8 entidades aliadas
              </p>

            </div>

          </div>

        </div>

        {/* GRID */}
        <div className="allies-prepaid__grid">

          {allies.map((item, index) => (
            <div className="allies-prepaid__card" key={index}>

              <div className="allies-prepaid__card-icon">

                <img
                  src={item.icon}
                  alt={item.name}
                />

              </div>

              <h3 className="allies-prepaid__card-title">
                {item.name}
              </h3>

              <span className="allies-prepaid__status">
                Convenio activo
              </span>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default AlliesPols;