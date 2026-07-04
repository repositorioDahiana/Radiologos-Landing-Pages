import medicinaIcon from "../../assets/Iconos/especial.png";

import Especial1 from "../../assets/images/LogoPolicia.png";
import Especial2 from "../../assets/images/LogoFomag.png";
import Especial3 from "../../assets/images/LogoBatallon.png";
import Especial4 from "../../assets/images/LogoEcopetrol.png";
import Especial5 from "../../assets/images/LogoSura.png";
import Especial6 from "../../assets/images/LogoSaludTotal.png";
import Especial7 from "../../assets/images/LogoSanitas.png";
import Especial8 from "../../assets/images/LogoSOS.png";
import Especial9 from "../../assets/images/LogoAsmet.png";
import Especial10 from "../../assets/images/LogoCooperativa.png";
import Especial11 from "../../assets/images/LogoProtegemos.png";
import Especial13 from "../../assets/images/LogoProveer.png";
import Especial14 from "../../assets/images/LogoPositiva.png";

const allies = [
  { name: "Policía Regional N3", icon: Especial1 },
  { name: "Fomag", icon: Especial2 },
  { name: "ESM Batallon Cacique Calarca", icon: Especial3 },
  { name: "Ecopetrol", icon: Especial4 },
  { name: "Sura Eps", icon: Especial5 },
  { name: "Salud Total", icon: Especial6 },
  { name: "Sanitas", icon: Especial7 },
  { name: "SOS", icon: Especial8 },
  { name: "Asmetsalud", icon: Especial9 },
  { name: "Coosalud", icon: Especial10 },
  { name: "Bienestar Salud", icon: Especial11 },
  { name: "Proveer Institucional S.A.S", icon: Especial13 },
  { name: "Positiva Compañia De Seguros ARL", icon: Especial14 },
];

function AlliesRegEspcial() {
  return (
    <section className="allies-prepaid" id="regimenEsp">

      <div className="allies-prepaid__container">

        {/* HEADER */}
        <div className="allies-prepaid__header">

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