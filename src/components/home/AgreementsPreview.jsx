import { Link } from "react-router-dom";
import iconPlaceholder from "../../assets/Iconos/email.png";
import Medpre1 from "../../assets/images/LogoAxaColpatria.webp";
import Medpre2  from "../../assets/images/LogoColmedica.webp";
import Medpre3  from "../../assets/images/LogoColsanitas.webp";
import Medpre4  from "../../assets/images/LogoCoomeva.webp";
import Medpre5  from  "../../assets/images/LogoMedisanitas.webp";
import Medpre6  from "../../assets/images/LogoMedPlus.webp";

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

import Empresa1 from "../../assets/images/LogoPreviser.webp";
import Empresa2 from "../../assets/images/LogoConexion.webp";
import Empresa3 from "../../assets/images/LogoContactoMed.webp";
import Empresa4 from "../../assets/images/LogoQuindio.webp";
import Empresa5 from "../../assets/images/LogoEmi.webp";
import Empresa6 from "../../assets/images/LogoMedescuento.webp";
import Empresa7 from "../../assets/images/LogoMedicalH.webp";
import Empresa8 from "../../assets/images/LogoCentroRodrigo.webp";
import Empresa9 from "../../assets/images/LogoAliados.webp";
import Empresa10 from "../../assets/images/LogoAngela.webp";
import Empresa11 from "../../assets/images/LogoAngeles.webp";
import Empresa12 from "../../assets/images/LogoAmi.webp";
import Empresa13 from "../../assets/images/LogoCentroPrevenimos.webp";
import Empresa14 from "../../assets/images/LogoClinimagenes.webp";
import Empresa16 from "../../assets/images/LogoConvensalud.webp";
import Empresa17 from "../../assets/images/LogoCorporacionOxigeno.webp";
import Empresa18 from "../../assets/images/LogoCruzRoja.webp";
import Empresa19 from "../../assets/images/LogoJohan.webp";
import Empresa20 from "../../assets/images/LogoFeser.webp";
import Empresa21 from "../../assets/images/LogoBive.webp";
import Empresa22 from "../../assets/images/LogoSentir.webp";
import Empresa24 from "../../assets/images/LogoHojaVerde.webp";
import Empresa25 from "../../assets/images/LogoFiso.webp";
import Empresa26 from "../../assets/images/LogoMedicenfer.webp";
import Empresa27 from "../../assets/images/LogoNefroPlus.webp";
import Empresa28 from "../../assets/images/LogoVital.webp";
import Empresa30 from "../../assets/images/LogoBQS.webp";
import Empresa31 from "../../assets/images/LogoPereira.webp";
import Empresa32 from "../../assets/images/LogoMinser.webp";
import Empresa33 from "../../assets/images/LogoReprotec.webp";
import Empresa34 from "../../assets/images/LogoICRE.webp";
import Empresa35 from "../../assets/images/LogoHuman.webp";

import Especial1 from "../../assets/images/LogoPolicia.webp";
import Especial2 from "../../assets/images/LogoFomag.webp";
import Especial3 from "../../assets/images/LogoBatallon.webp";
import Especial4 from "../../assets/images/LogoEcopetrol.webp";
import Especial5 from "../../assets/images/LogoSura.webp";
import Especial6 from "../../assets/images/LogoSaludTotal.webp";
import Especial7 from "../../assets/images/LogoSanitas.webp";
import Especial8 from "../../assets/images/LogoSOS.webp";
import Especial9 from "../../assets/images/LogoAsmet.webp";
import Especial10 from "../../assets/images/LogoCooperativa.webp";
import Especial11 from "../../assets/images/LogoProtegemos.webp";
import Especial13 from "../../assets/images/LogoProveer.webp";
import Especial14 from "../../assets/images/LogoPositiva.webp";

import caja1 from "../../assets/images/LogoRisaralda.webp";
import caja2 from "../../assets/images/LogoComfenalco.webp";

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