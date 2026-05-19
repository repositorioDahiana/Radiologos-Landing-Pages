import heroBg from "../../assets/images/Fondo.jpg";
import medicinaIcon from "../../assets/Iconos/convenioEmpresa.png";

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
import Icono21 from "../../assets/Iconos/email.png";
import Icono22 from "../../assets/Iconos/email.png";
import Icono23 from "../../assets/Iconos/email.png";
import Icono24 from "../../assets/Iconos/email.png";
import Icono25 from "../../assets/Iconos/email.png";
import Icono26 from "../../assets/Iconos/email.png";
import Icono27 from "../../assets/Iconos/email.png";
import Icono28 from "../../assets/Iconos/email.png";
import Icono29 from "../../assets/Iconos/email.png";
import Icono30 from "../../assets/Iconos/email.png";
import Icono31 from "../../assets/Iconos/email.png";
import Icono32 from "../../assets/Iconos/email.png";
import Icono33 from "../../assets/Iconos/email.png";
import Icono34 from "../../assets/Iconos/email.png";
import Icono35 from "../../assets/Iconos/email.png";
import Icono36 from "../../assets/Iconos/email.png";



const allies = [
  {
    icon: Icono1,
    name: "Previser",
  },

  {
    icon: Icono2,
    name: "Conexiones Y Salud",
  },

  {
    icon: Icono3,
    name: "Contacto Medico",
  },

  {
    icon: Icono4,
    name: "Deportes Quindio Sa",
  },

  {
    icon: Icono5,
    name: "Emi",
  },

  {
    icon: Icono6,
    name: "Med-Descuento",
  },

  {
    icon: Icono7,
    name: "Medical Health",
  },
  {
    icon: Icono8,
    name: "Melva Martinez Martinez-Centro Medico Rodrigo Arango",
  },
  {
    icon: Icono9,
    name: "Previser",
  },
  {
    icon: Icono10,
    name: "Aliados Promotora De Servicios S.A.S",
  },
  {
    icon: Icono11,
    name: "Angela Agadir Cardona Rojas",
  },
  {
    icon: Icono12,
    name: "Angeles Al Llamado",
  },
  {
    icon: Icono13,
    name: "Asistencia Medica Inmendiata S.A (AMI)",
  },
  {
    icon: Icono14,
    name: "Centro Médico Prevenimos",
  },
  {
    icon: Icono15,
    name: "Clinimagenes",
  },
  {
    icon: Icono16,
    name: "Contacto Medico",
  },
  {
    icon: Icono17,
    name: "Convensalud",
  },
  {
    icon: Icono18,
    name: "Corporación Oxígeno",
  },
  {
    icon: Icono19,
    name: "Cruz Roja Seccional Risaralda ",
  },
  {
    icon: Icono20,
    name: "Dr. Johan F. Valderrama",
  },
  {
    icon: Icono21,
    name: "Feser",
  },
  {
    icon: Icono22,
    name: "Fundación Vive Con Bienestar",
  },
  {
    icon: Icono23,
    name: "Grupo Sentir SAS",
  },
  {
    icon: Icono24,
    name: "Johnatan Gonzalez Montoya",
  },
  {
    icon: Icono25,
    name: "La Hoja Verde",
  },
  {
    icon: Icono26,
    name: "Marsan Fisioterapia",
  },
  {
    icon: Icono27,
    name: "Medic-Enfer",
  },
  {
    icon: Icono28,
    name: "Nefroplus",
  },
  {
    icon: Icono29,
    name: "Red Médica Vital",
  },
  {
    icon: Icono30,
    name: "Segurinfal",
  },
  {
    icon: Icono31,
    name: "Bio Quality Salud S. A.S",
  },
  {
    icon: Icono32,
    name: "Deportivo Pereira",
  },
  {
    icon: Icono33,
    name: "Inser",
  },
  {
    icon: Icono34,
    name: "Reprotec",
  },
  {
    icon: Icono35,
    name: "Instituto de Colon y Recto",
  },
  {
    icon: Icono36,
    name: "Hwcc Human Wellness Center Colombia A.S.A.",
  },
];

function AlliesConEmp() {
  return (
    <section className="allies-prepaid" id="convenioempre">

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
                Convenio Empresas
              </h2>

              <p className="allies-prepaid__subtitle">
                36 entidades aliadas
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

export default AlliesConEmp;