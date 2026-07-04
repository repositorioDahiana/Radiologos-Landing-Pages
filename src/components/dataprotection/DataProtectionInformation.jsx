import { useState } from "react";


import legalIcon from "../../assets/Iconos/der4.png"; 
import checkIcon from "../../assets/Iconos/deberes.png"; 
import accessIcon from "../../assets/Iconos/asertividad.png"; 
import searchIcon from "../../assets/Iconos/participacion.png"; 
import editIcon from "../../assets/Iconos/quejas.png"; 
import revokeIcon from "../../assets/Iconos/peticion.png"; 
import shieldIcon from "../../assets/Iconos/der10.png"; 
import contactIcon from "../../assets/Iconos/convenioEmpresa.png"; 

function DataProtectionInformation() {

  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  const sections = [
    {
      id: 1,
      title: "Introducción y Marco Legal",
      subtitle: "Ley Estatutaria 1581 de 2012 y Decreto 1377 de 2013",
      icon: legalIcon,
      content: (
        <>
          <p>RADIOLOGOS ASOCIADOS S.A.S., identificada con NIT. 891.409.390-8, en adelante “RADIOLOGOS ASOCIADOS S.A.S.” o “la Entidad”, adopta el presente manual para dar cumplimiento a lo dispuesto en el literal k) del artículo 17 de la Ley Estatutaria 1581 de 2012, en el sentido de adoptar e implementar políticas y procedimientos mediante el cual se garantice el correcto cumplimiento del marco jurídico de la protección de datos personales en Colombia.</p>
          <p>La presente política aplica a todas las bases de datos que contengan datos personales y que sean objeto de tratamiento por parte de RADIOLOGOS ASOCIADOS S.A.S., en cumplimiento de su objeto social como Institución Prestadora de Servicios de Salud especializada en apoyo diagnóstico.</p>
          <p>El tratamiento de los datos personales se realizará conforme a los principios de legalidad, finalidad, libertad, veracidad o calidad, transparencia, acceso y circulación restringida, seguridad y confidencialidad, establecidos en el artículo 4 de la Ley 1581 de 2012.</p>
        </>
      )
    },
    {
      id: 2,
      title: "Autorización y Finalidad del Tratamiento",
      subtitle: "Consentimiento previo, expreso e informado",
      icon: checkIcon,
      content: (
        <>
          <p>El tratamiento de datos personales por parte de RADIOLOGOS ASOCIADOS S.A.S. requiere el consentimiento libre, previo, expreso e informado del Titular. La autorización se obtendrá de manera previa al inicio del tratamiento, salvo en los casos exceptuados por la ley.</p>
          <p>La finalidad del tratamiento es exclusivamente la prestación de servicios de salud, gestión administrativa de los servicios, facturación, consulta de resultados, programación de citas, comunicaciones institucionales, notificaciones de salud pública, y demás actividades relacionadas con el objeto social de la Entidad.</p>
          <p>Los datos sensibles (datos de salud, biométricos, etc.) solo serán tratados cuando se cuente con la autorización expresa e informada del Titular, y en los casos en que la ley lo permita o exija, de conformidad con el artículo 6 de la Ley 1581 de 2012.</p>
        </>
      )
    },
    {
      id: 3,
      title: "Derecho de Acceso",
      subtitle: "Garantía de conocimiento del Titular",
      icon: accessIcon,
      content: (
        <>
          <p>RADIOLOGOS ASOCIADOS S.A.S. garantiza el derecho de acceso conforme a la Ley 1581 de 2012, solamente a los Titulares de datos personales privados que correspondan a personas naturales, previa acreditación de la identidad del titular, legitimidad, o personalidad de su representante.</p>
          <p>La Entidad pondrá a disposición del Titular, sin costo o erogación alguna, de manera pormenorizada y detallada, los respectivos datos personales tratados, a través de cualquier medio de comunicación, incluyendo los electrónicos que permitan el acceso directo del titular.</p>
          <p>Dicho acceso se sujetará a los límites establecidos en el artículo 21 del Decreto Reglamentario 1377 de 2013. Respecto al derecho de acceso a los datos personales contenidos en los registros públicos, este se regirá por lo establecido en el Código de Comercio, el Decreto 898 de 2002 y las demás normas que regulan esta materia.</p>
        </>
      )
    },
    {
      id: 4,
      title: "Derecho de Consulta",
      subtitle: "Términos y condiciones de solicitud",
      icon: searchIcon,
      content: (
        <>
          <p>Los titulares de los datos personales podrán consultar la información de carácter personal que repose en cualquier base de datos de RADIOLOGOS ASOCIADOS S.A.S.</p>
          <p>En consecuencia, se garantiza el derecho de consulta conforme a lo dispuesto en la Ley 1581 de 2012 exclusivamente sobre los datos personales privados, sensibles y de menores correspondientes a personas naturales, suministrando a los Titulares de estos datos personales la información contenida en cada una de las bases de datos correspondientes y que estén bajo el control de RADIOLOGOS ASOCIADOS S.A.S.</p>
          <p>La consulta se atenderá en un término máximo de diez (10) días hábiles contados a partir de la fecha de recibo de la solicitud. Cuando no sea posible atender la consulta dentro de dicho término, se informará al solicitante, expresando los motivos de la demora y señalando la fecha en que se atenderá su consulta, la cual en ningún caso podrá superar los cinco (5) días hábiles siguientes al vencimiento del primer término.</p>
        </>
      )
    },
    {
      id: 5,
      title: "Derecho de Rectificación, Actualización y Supresión",
      subtitle: "Corrección y eliminación de información",
      icon: editIcon,
      content: (
        <>
          <p>El Titular tiene derecho a solicitar la rectificación, actualización o supresión de sus datos personales cuando considere que estos son incorrectos, inexactos, incompletos, desactualizados o cuando la finalidad del tratamiento haya cesado.</p>
          <p>La rectificación o actualización se realizará dentro de los quince (15) días hábiles siguientes a la fecha de recibo de la solicitud. Cuando no sea posible atender dentro de dicho término, se informará al solicitante con los motivos de la demora y la fecha de atención, sin exceder los diez (10) días hábiles adicionales.</p>
          <p>La supresión procederá cuando: a) se determine que el Responsable o Encargado han incumplido las normas constitucionales y legales; b) los datos personales hayan dejado de ser necesarios para las finalidades que justificaron su recolección; c) se revoque la autorización; d) se trate de datos sensibles y no exista otra causal de excepción legal.</p>
        </>
      )
    },
    {
      id: 6,
      title: "Derecho de Revocación de la Autorización",
      subtitle: "Límites y procedencia de la revocatoria",
      icon: revokeIcon,
      content: (
        <>
          <p>Los Titulares podrán solicitar en cualquier momento la revocación de la autorización para el tratamiento de sus datos personales, cuando no se hayan respetado los principios, derechos y garantías constitucionales y legales.</p>
          <p>La revocación se hará efectiva una vez se haya verificado la identidad del solicitante y se hayan agotado los procedimientos internos de verificación, sin que ello implique el cese inmediato de todos los tratamientos cuando exista un deber legal o contractual de mantener ciertos datos.</p>
          <p>La revocación y/o supresión no procederá cuando el Titular tenga un deber legal o contractual de permanecer en la base de datos, o cuando la eliminación de los datos obstaculice actuaciones judiciales o administrativas relacionadas con obligaciones fiscales, la investigación de delitos, o la actualización de registros administrativos.</p>
        </>
      )
    },
    {
      id: 7,
      title: "Medidas de Seguridad y Confidencialidad",
      subtitle: "Protección técnica y física de la información",
      icon: shieldIcon,
      content: (
        <>
          <p>RADIOLOGOS ASOCIADOS S.A.S. adopta las medidas técnicas, administrativas y físicas necesarias para garantizar la seguridad, confidencialidad, integridad, disponibilidad y autenticidad de los datos personales, de conformidad con lo dispuesto en el artículo 17 de la Ley 1581 de 2012.</p>
          <p>Entre las medidas implementadas se encuentran: control de acceso lógico y físico, cifrado de información, protocolos de red seguros, políticas de contraseñas, auditorías periódicas, capacitación del personal en materia de protección de datos, y planes de contingencia y recuperación ante incidentes de seguridad.</p>
          <p>En caso de presentarse violaciones a la seguridad de los datos personales que puedan comprometer la información de los Titulares, la Entidad informará a los afectados, a la Superintendencia de Industria y Comercio, y tomará las medidas correctivas pertinentes, de conformidad con lo establecido en el Decreto 1377 de 2013.</p>
        </>
      )
    },
    {
      id: 8,
      title: "Responsable del Tratamiento y Canales de Contacto",
      subtitle: "Oficina y medios de atención legal",
      icon: contactIcon,
      content: (
        <>
          <p>El responsable del tratamiento de los datos personales es RADIOLOGOS ASOCIADOS S.A.S., con domicilio en la Carrera 9 No. 25-59 Torre C piso 1, Pereira, Risaralda, Colombia.</p>
          <p>Para ejercer los derechos de acceso, consulta, rectificación, supresión o revocación, los Titulares o sus causahabientes podrán presentar su solicitud a través de los siguientes canales: a) Oficina de Atención al Usuario; b) Correo electrónico <a href="mailto:info@radiologos.co">info@radiologos.co</a>; c) Línea telefónica (606) 340 23 33; d) Sistema PQRS en línea a través del sitio web.</p>
          <p>La solicitud debe identificar claramente al Titular, describir los hechos que dan lugar a la petición, y contener la información de contacto para dar respuesta. Cuando sea presentada por el causahabiente, debe adjuntarse el documento que acredite la calidad de tal.</p>
        </>
      )
    }
  ];

  return (
    <section className="protection-info">
      <div className="protection-info__container">
        
        {/* TITULO Y DESCRIPCIÓN PRINCIPAL ARRIBA */}
        <div className="protection-info__header">
          <span className="protection-info__badge">Ley Estatutaria 1581 de 2012</span>
          <h2 className="protection-info__main-title">Protección y Tratamiento de Datos</h2>
          <p className="protection-info__main-description">
            RADIOLOGOS ASOCIADOS S.A.S. se compromete con la protección integral de la 
            información personal de nuestros usuarios, garantizando el cumplimiento de todos 
            los derechos establecidos en la normativa colombiana de protección de datos.
          </p>
        </div>

        {/* TARJETAS COLAPSABLES / ACORDEÓN */}
        <div className="protection-info__grid">
          {sections.map((sec) => {
            const isOpen = activeCard === sec.id;
            return (
              <div 
                key={sec.id} 
                className={`protection-card ${isOpen ? "protection-card--open" : ""}`}
              >
                {/* ENCABEZADO DE LA TARJETA (HACE CLICK AQUÍ) */}
                <button 
                  className="protection-card__trigger"
                  onClick={() => toggleCard(sec.id)}
                  aria-expanded={isOpen}
                >
                  <div className="protection-card__left">
                    <div className="protection-card__icon-box">
                      <img src={sec.icon} alt="" />
                    </div>
                    <div className="protection-card__titles">
                      <h3>{sec.title}</h3>
                      <span>{sec.subtitle}</span>
                    </div>
                  </div>
                  
                  {/* Flechita indicadora */}
                  <div className="protection-card__arrow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </button>

                {/* CONTENIDO DESPLEGABLE CON ANIMACIÓN INTERNA */}
                <div className="protection-card__content-wrapper">
                  <div className="protection-card__body">
                    {sec.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default DataProtectionInformation;