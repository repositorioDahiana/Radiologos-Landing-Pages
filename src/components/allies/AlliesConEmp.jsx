import medicinaIcon from "../../assets/Iconos/convenioEmpresa.png";

import Empresa1 from "../../assets/images/LogoPreviser.png";
import Empresa2 from "../../assets/images/LogoConexion.png";
import Empresa3 from "../../assets/images/LogoContactoMed.png";
import Empresa4 from "../../assets/images/LogoQuindio.png";
import Empresa5 from "../../assets/images/LogoEmi.png";
import Empresa6 from "../../assets/images/LogoMedescuento.png";
import Empresa7 from "../../assets/images/LogoMedicalH.png";
import Empresa8 from "../../assets/images/LogoCentroRodrigo.png";
import Empresa9 from "../../assets/images/LogoAliados.png";
import Empresa10 from "../../assets/images/LogoAngela.png";
import Empresa11 from "../../assets/images/LogoAngeles.png";
import Empresa12 from "../../assets/images/LogoAmi.png";
import Empresa13 from "../../assets/images/LogoCentroPrevenimos.png";
import Empresa14 from "../../assets/images/LogoClinimagenes.png";
import Empresa16 from "../../assets/images/LogoConvensalud.png";
import Empresa17 from "../../assets/images/LogoCorporacionOxigeno.png";
import Empresa18 from "../../assets/images/LogoCruzRoja.png";
import Empresa19 from "../../assets/images/LogoJohan.png";
import Empresa20 from "../../assets/images/LogoFeser.png";
import Empresa21 from "../../assets/images/LogoBive.png";
import Empresa22 from "../../assets/images/LogoSentir.png";
import Empresa24 from "../../assets/images/LogoHojaVerde.png";
import Empresa25 from "../../assets/images/LogoFiso.png";
import Empresa26 from "../../assets/images/LogoMedicenfer.png";
import Empresa27 from "../../assets/images/LogoNefroPlus.png";
import Empresa28 from "../../assets/images/LogoVital.png";
import Empresa30 from "../../assets/images/LogoBQS.png";
import Empresa31 from "../../assets/images/LogoPereira.png";
import Empresa32 from "../../assets/images/LogoMinser.png";
import Empresa33 from "../../assets/images/LogoReprotec.png";
import Empresa34 from "../../assets/images/LogoICRE.png";
import Empresa35 from "../../assets/images/LogoHuman.png";


const allies = [
  { name: "Previser", icon: Empresa1 },
  { name: "Conexiones Y Salud", icon: Empresa2 },
  { name: "Contacto Medico", icon: Empresa3 },
  { name: "Deportes Quindio S.A", icon: Empresa4 },
  { name: "Emi", icon: Empresa5 },
  { name: "Med-Descuento", icon: Empresa6 },
  { name: "Medical Health", icon: Empresa7 },
  { name: "Melva Martinez Martinez-Centro Medico Rodrigo Arango", icon: Empresa8 },
  { name: "Aliados Promotora De Servicios S.A.S", icon: Empresa9 },
  { name: "Angela Agadir Cardona Rojas", icon: Empresa10 },
  { name: "Angeles Al Llamado", icon: Empresa11 },
  { name: "Asistencia Medica Inmendiata S.A (AMI)", icon: Empresa12 },
  { name: "Centro Médico Prevenimos", icon: Empresa13 },
  { name: "Clinimagenes", icon: Empresa14 },
  { name: "Convensalud", icon: Empresa16 },
  { name: "Corporación Oxígeno", icon: Empresa17 },
  { name: "Cruz Roja Seccional Risaralda", icon: Empresa18 },
  { name: "Dr. Johan F. Valderrama", icon: Empresa19 },
  { name: "Feser", icon: Empresa20 },
  { name: "Fundación Vive Con Bienestar", icon: Empresa21 },
  { name: "Grupo Sentir SAS", icon: Empresa22 },
  { name: "La Hoja Verde", icon: Empresa24 },
  { name: "Marsan Fisioterapia", icon: Empresa25 },
  { name: "Medic-Enfer", icon: Empresa26 },
  { name: "Nefroplus", icon: Empresa27 },
  { name: "Red Médica Vital", icon: Empresa28 },
  { name: "Bio Quality Salud S.A.S", icon: Empresa30 },
  { name: "Deportivo Pereira", icon: Empresa31 },
  { name: "Inser", icon: Empresa32 },
  { name: "Reprotec", icon: Empresa33 },
  { name: "Instituto de Colon y Recto", icon: Empresa34 },
  { name: "Hwcc Human Wellness Center Colombia A.S.A.", icon: Empresa35 },
  
];

function AlliesConEmp() {
  return (
    <section className="allies-prepaid" id="convenioempre">

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