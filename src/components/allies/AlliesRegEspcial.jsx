import heroBg from "../../assets/images/Fondo.jpg";
import medicinaIcon from "../../assets/Iconos/especial.png";

import Icono1 from "../../assets/Iconos/LogoBMI.png";
import Icono2 from "../../assets/Iconos/LogoColmedica.png";
import Icono3 from "../../assets/Iconos/LogoColsanitas.png";
import Icono4 from "../../assets/Iconos/email.png";
import Icono5 from "../../assets/Iconos/email.png";
import Icono6 from "../../assets/Iconos/email.png";
import Icono7 from "../../assets/Iconos/LogoBMI.png";
import Icono8 from "../../assets/Iconos/LogoColmedica.png";
import Icono9 from "../../assets/Iconos/LogoColmedica.png";
import Icono10 from "../../assets/Iconos/LogoColmedica.png";
import Icono11 from "../../assets/Iconos/LogoColmedica.png";
import Icono12 from "../../assets/Iconos/LogoColmedica.png";
import Icono13 from "../../assets/Iconos/LogoColmedica.png";
import Icono14 from "../../assets/Iconos/LogoColmedica.png";

const allies = [
  {
    icon: Icono1,
    name: "Policía Regional N3",
  },

  {
    icon: Icono2,
    name: "Fomag",
  },

  {
    icon: Icono3,
    name: "ESM Batallon Cacique Calarca",
  },

  {
    icon: Icono4,
    name: "Ecopetrol",
  },

  {
    icon: Icono5,
    name: "Sura Eps",
  },

  {
    icon: Icono6,
    name: "Salud Total",
  },

  {
    icon: Icono7,
    name: "Sanitas",
  },

  {
    icon: Icono8,
    name: "Sos",
  },

  {
    icon: Icono9,
    name: "Asmetsalud",
  },
  {
    icon: Icono10,
    name: "Coosalud",
  },
  {
    icon: Icono11,
    name: "Bienestar Salud",
  },
  {
    icon: Icono12,
    name: "Fideicomisos",
  },
  {
    icon: Icono13,
    name: "Proveer Institucional Sas",
  },
  {
    icon: Icono14,
    name: "Positiva Compañia De Seguros Arl",
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
                Régimen Especial y EPS
              </h2>

              <p className="allies-prepaid__subtitle">
                14 entidades aliadas
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