import heroBg from "../../assets/images/Fondo.jpg";
import medicinaIcon from "../../assets/Iconos/atencionintegral.png";

// ICONOS CARDS
import Icono1 from "../../assets/Iconos/email.png";
import Icono2 from "../../assets/Iconos/email.png";
import Icono3 from "../../assets/Iconos/email.png";
import Icono4 from "../../assets/Iconos/email.png";
import Icono5 from "../../assets/Iconos/email.png";
import Icono6 from "../../assets/Iconos/email.png";
import Icono7 from "../../assets/Iconos/email.png";
import Icono8 from "../../assets/Iconos/email.png";
import Icono9 from "../../assets/Iconos/email.png";
import Icono10 from "../../assets/Iconos/email.png";
import Icono11 from "../../assets/Iconos/email.png";
import Icono12 from "../../assets/Iconos/email.png";
import Icono13 from "../../assets/Iconos/email.png";
import Icono14 from "../../assets/Iconos/email.png";
import Icono15 from "../../assets/Iconos/email.png";
import Icono16 from "../../assets/Iconos/email.png";
import Icono17 from "../../assets/Iconos/email.png";
import Icono18 from "../../assets/Iconos/email.png";
import Icono19 from "../../assets/Iconos/email.png";
import Icono20 from "../../assets/Iconos/email.png";

const allies = [
  {
    icon: Icono1,
    name: "Allianz Seguros De Vida S.A",
  },

  {
    icon: Icono2,
    name: "Aseguradora Solidaria De Colombia",
  },

  {
    icon: Icono3,
    name: "Bmi Colombia Compañia De Seguros De Vida S.A.",
  },

  {
    icon: Icono4,
    name: "Compañía De Seguros Bolívar",
  },

  {
    icon: Icono5,
    name: "Compañía De Seguros Aurora",
  },

  {
    icon: Icono6,
    name: "Compañia Mundial De Seguros (Polizas)",
  },

  {
    icon: Icono7,
    name: "La Equidad Seguros De Vida",
  },

  {
    icon: Icono8,
    name: "Hdi Seguros Colombia (Antes Liberty)",
  },

  {
    icon: Icono9,
    name: "Mapfre Colombia Vida Seguros (Arl-Polizas De Salud Y Estudiantil)",
  },
  {
    icon: Icono10,
    name: "Pan American Life De Colombia",
  },
  {
    icon: Icono11,
    name: "Positiva Compañia De Seguros Arl",
  },
  {
    icon: Icono12,
    name: "Seguros De Vida Suramericana (Polizas)",
  },
  {
    icon: Icono13,
    name: "Compañia De Seguros Colsanitas S.A.",
  },
  {
    icon: Icono14,
    name: "Colsanitas",
  },
  {
    icon: Icono15,
    name: "Colmena Seguros De Vida",
  },
  {
    icon: Icono16,
    name: "Medisanitas-Banco De La Republica",
  },
  {
    icon: Icono17,
    name: "Allianz Seguros De Vida",
  },
  {
    icon: Icono18,
    name: "Axa Colpatria Seguros Sa",
  },
  {
    icon: Icono19,
    name: "Colsanitas Integral",
  },
  {
    icon: Icono20,
    name: "La Equidad Seguros De Vidad O.C",
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