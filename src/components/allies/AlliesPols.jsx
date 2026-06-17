import heroBg from "../../assets/images/Aliados2.png";
import medicinaIcon from "../../assets/Iconos/atencionintegral.png";

// ICONOS CARDS

import Poliza1 from "../../assets/images/LogoAllianz.png";
import Poliza2 from "../../assets/images/LogoAsegSolCol.png";
import Poliza3 from "../../assets/images/LogoBMI.png";
import Poliza4 from "../../assets/images/LogoSeguroBol.png";
import Poliza5 from "../../assets/images/LogoAurora.png";
import Poliza6 from "../../assets/images/LogoSeguros.png";
import Poliza7 from "../../assets/images/LogoEquidadSeguros.png";
import Poliza8 from "../../assets/images/LogoHDI.png";
import Poliza9 from "../../assets/images/LogoMapfre.png";
import Poliza10 from "../../assets/images/LogoPanAmerican.png";
import Poliza11 from "../../assets/images/LogoPositiva.png";
import Poliza12 from "../../assets/images/LogoSura.png";
import Poliza13 from "../../assets/images/LogoColsanitas.png";
import Poliza14 from "../../assets/images/LogoColmena.png";
import Poliza15 from "../../assets/images/LogoMedisanitas.png";
import Poliza16 from "../../assets/images/LogoAxaColpatria.png";
import Poliza17 from "../../assets/images/LogoColsanitas.png";

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
  { name: "Colsanitas Integral", icon: Poliza17},
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
                20 entidades aliadas
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