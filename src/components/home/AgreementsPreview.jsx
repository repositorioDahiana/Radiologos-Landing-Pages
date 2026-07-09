import { Link } from "react-router-dom";
import iconPlaceholder from "../../assets/Iconos/email.png";
import Medpre1 from "../../assets/images/LogoAxaColpatria.png";
import Medpre2  from "../../assets/images/LogoColmedica.png";
import Medpre3  from "../../assets/images/LogoColsanitas.png";
import Medpre4  from "../../assets/images/LogoCoomeva.png";
import Medpre5  from  "../../assets/images/LogoMedisanitas.png";
import Medpre6  from "../../assets/images/LogoMedPlus.png";

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

import caja1 from "../../assets/images/LogoRisaralda.png";
import caja2 from "../../assets/images/LogoComfenalco.png";

function AgreementsPreview() {
  const categories = [
    {
      id: "medicina-prepagada",
      title: "Medicina Prepagada",
      description: "Atención preferencial y ágil con las mejores entidades de medicina prepagada.",
      allies: [
        { name: "Axa Colpatria Medicina Prepagada Y Pólizas", icon: Medpre1},
        { name: "Colmédica Medicina Prepagada", icon: Medpre2},
        { name: "Compañía De Medicina Prepagada Colsanitas", icon: Medpre3},
        { name: "Coomeva Medicina Prepagada", icon: Medpre4},
        { name: "Medisanitas", icon: Medpre5},
        { name: "Medplus Medicina Prepagada", icon: Medpre6},
      ]
    },
    {
      id: "polizas",
      title: "Pólizas de Salud",
      description: "Cobertura amplia a través de pólizas de salud para tu tranquilidad.",
      allies: [
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
      ]
    },
    {
      id: "empresas",
      title: "Convenios Empresas",
      description: "Beneficios exclusivos para empleados y colaboradores de empresas aliadas.",
      allies: [
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
        { name: "Bien Estar Salud IPS", icon: Especial11 },
        { name: "Proveer Institucional S.A.S", icon: Especial13 },

      ]
    },
    {
      id: "regimen-especial",
      title: "Régimen Especial y EPS",
      description: "Atención especializada para usuarios de regímenes de salud especiales y EPS.",
      allies: [
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
      ]
    },
    {
      id: "eps-caja",
      title: "Caja de Compensación",
      description: "Servicios accesibles a través de convenios con cajas de compensación.",
      allies: [
        { name: "Risaralda", icon: caja1 },
        { name: "Comfenalco Quindio", icon: caja2 },
      ]
    }
  ];

  return (
    <section className="agreements-preview">
      <div className="agreements-preview__container">
        
        {/* HEADER CON TUS GRADIENTES DE TEXTO Y LÍNEA */}
        <div className="agreements-preview__header">
          <h2 className="agreements-preview__title">
            Nuestros <span>Convenios</span>
          </h2>
          <div className="agreements-preview__line section-line-blue"></div>
          <p className="agreements-preview__description">
            Trabajamos con las principales aseguradoras, entidades y empresas del país para brindarte un servicio accesible y de calidad.
          </p>
        </div>

        <div className="agreements-preview__grid">
          {categories.map((category) => (
            <article key={category.id} className="agreement-card">
              <div className="agreement-card__content">
                <h3 className="agreement-card__title">{category.title}</h3>
                <p className="agreement-card__description">{category.description}</p>
              </div>
              
              <div className="agreement-card__marquee-container">
                <div 
                  className="agreement-card__marquee"
                  style={{ animationDuration: `${category.allies.length * 6}s` }}
                >
                  {/* Duplicamos los items para efecto infinito fluido */}
                  {[...category.allies, ...category.allies].map((ally, index) => (
                    <div key={`${category.id}-ally-${index}`} className="agreement-card__ally">
                      <img src={ally.icon} alt={ally.name} className="agreement-card__ally-icon" />
                      <span className="agreement-card__ally-name">{ally.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* BOTÓN CON TUS UTILITIES GLOBALES DE AZULES */}
        <div className="agreements-preview__actions">
          <Link to="/allies" className="btn-base btn-primary-blue">
            Ver todos los convenios
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AgreementsPreview;