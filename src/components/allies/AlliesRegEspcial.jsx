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
    name: "Fosyga",
  },

  {
    icon: medplusIcon,
    name: "Fomag",
  },

  {
    icon: saludTotalIcon,
    name: "COLFONDOS",
  },

  {
    icon: nuevaEpsIcon,
    name: "Porvenir",
  },

  {
    icon: suraIcon,
    name: "Protección",
  },

  {
    icon: coomevaIcon,
    name: "Colpensiones",
  },

  {
    icon: famisanarIcon,
    name: "Old Mutual",
  },

  {
    icon: compensarIcon,
    name: "Crecer AFP",
  },
];

function AlliesRegEspcial() {
  return (
    <section className="allies-prepaid" id="regimenEsp">

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
                Régimen Especial
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

export default AlliesRegEspcial;