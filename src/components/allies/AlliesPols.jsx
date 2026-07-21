import medicinaIcon from "../../assets/Iconos/atencionintegral.png";

// ICONOS CARDS

import Poliza1 from "../../assets/images/LogoAllianz.webp";
import Poliza2 from "../../assets/images/LogoAsegSolCol.webp";
import Poliza3 from "../../assets/images/LogoBMI.webp";
import Poliza4 from "../../assets/images/LogoSeguroBol.webp";
import Poliza5 from "../../assets/images/LogoAurora.webp";
import Poliza6 from "../../assets/images/LogoSeguros.webp";
import Poliza7 from "../../assets/images/LogoEquidadSeguros.webp";
import Poliza8 from "../../assets/images/LogoHDI.webp";
import Poliza9 from "../../assets/images/LogoMapfre.webp";
import Poliza10 from "../../assets/images/LogoPanAmerican.webp";
import Poliza11 from "../../assets/images/LogoPositiva.webp";
import Poliza12 from "../../assets/images/LogoSura.webp";
import Poliza13 from "../../assets/images/LogoColsanitas.webp";
import Poliza14 from "../../assets/images/LogoColmena.webp";
import Poliza15 from "../../assets/images/LogoMedisanitas.webp";
import Poliza16 from "../../assets/images/LogoAxaColpatria.webp";
import Poliza17 from "../../assets/images/LogoColsanitas.webp";

const allies = [
  { name: "Allianz Seguros De Vida S.A", icon: Poliza1 },
  { name: "Aseguradora Solidaria De Colombia", icon: Poliza2},
  { name: "Bmi Colombia Compañia De Seguros De Vida S.A.", icon: Poliza3},
  { name: "Compañía De Seguros Bolívar", icon: Poliza4},
  { name: "Compañía De Seguros Aurora", icon: Poliza5},
  { name: "Compañia Mundial De Seguros (Polizas)", icon: Poliza6},
  { name: "La Equidad Seguros De Vida", icon: Poliza7},
  { name: "Hdi Seguros Colombia (Antes Liberty)", icon: Poliza8},
  { name: "Mapfre Colombia Vida Seguros (Arl-Polizas De Salud Y Estudiantil)", icon: Poliza9},
  { name: "Pan American Life De Colombia", icon: Poliza10},
  { name: "Positiva Compañia De Seguros Arl", icon: Poliza11},
  { name: "Seguros De Vida Suramericana (Polizas)", icon: Poliza12},
  { name: "Colsanitas", icon: Poliza13},
  { name: "Colmena Seguros De Vida", icon: Poliza14},
  { name: "Medisanitas-Banco De La Republica", icon: Poliza15},
  { name: "Axa Colpatria Seguros Sa", icon: Poliza16},
  { name: "Colsanitas Integral", icon: Poliza17}
];

function AlliesPols() {
  return (
    <section className="allies-prepaid" id="polizas">

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
                Pólizas de Salud
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

export default AlliesPols;