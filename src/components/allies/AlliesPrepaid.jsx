import heroBg from "../../assets/images/Fondo.jpg";
import medicinaIcon from "../../assets/Iconos/doctor.png";

// ICONOS CARDS
import Icono1 from "../../assets/Iconos/LogoBMI.png";
import Icono2 from "../../assets/Iconos/LogoColmedica.png";
import Icono3 from "../../assets/Iconos/LogoColsanitas.png";
import Icono4 from "../../assets/Iconos/email.png";
import Icono5 from "../../assets/Iconos/email.png";
import Icono6 from "../../assets/Iconos/email.png";
import Icono7 from "../../assets/Iconos/LogoBMI.png";
import Icono8 from "../../assets/Iconos/LogoColmedica.png";


const allies = [
  {
    icon: Icono1,
    name: "Axa Colpatria Medicina Prepagada Y Pólizas",
  },

  {
    icon: Icono2,
    name: "Colmédica Medicina Prepagada",
  },

  {
    icon: Icono3,
    name: "Compañía De Medicina Prepagada Colsanitas",
  },

  {
    icon: Icono4,
    name: "Coomeva Medicina Prepagada",
  },

  {
    icon: Icono5,
    name: "Medisanitas",
  },

  {
    icon: Icono6,
    name: "Medplus Medicina Prepagada",
  },

  {
    icon: Icono7,
    name: "Colmedica Mp",
  },

  {
    icon: Icono8,
    name: "Axa Colpatria Mp",
  },
];

function AlliesPrepaid() {
  return (
    <section className="allies-prepaid" id="medicinaprepagada">

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
                Medicina Prepagada
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

export default AlliesPrepaid;